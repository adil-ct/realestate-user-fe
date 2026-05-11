import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { Box, Grid, Tabs, Tooltip, Tab } from "@mui/material";
import moment from "moment";

import {
  ThreeDotsSpinner,
  OvalSpinner,
} from "components/Loader/GenericLoaders";
import DynamicCard from "components/Cards/DynamicCard/PortfolioCard";
import {
  getPFAssetData,
  getPropertyTxnData,
  getRentTxn,
  getReserveTransactionsSaga,
} from "store/actions";
import DynamicTable from "components/DynamicTable/DynamicTable";
import MKTypography from "components/custom/MKTypography";
import CurrencyFormat from "components/CurrencyFormat";
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import propertyTxns from "_mocks/propertyTxns";
import balanceDataTable from "_mocks/investorPropertyTxns";
import { routePaths } from "routes/mainRoutes/routePaths";

import {
  AssetsValue,
  ArrowUpGreen,
  ArrowDownRed,
  PropertyProfile,
  Appreciation,
  Holdings,
  NextPayout,
  TotalRentalIncome,
  noTransactions,
  // Initiate,
  NoProperty,
} from "constants/assets";
import styles from "./styles";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import propertyRentTxns from "_mocks/propertyRentTxns";
import TransactionDetail from "components/Modal/TransactionDetail";
import SearchBox from "components/custom/Search";
import useDebounce from "hooks/useDebounce";
import PropertyDetail from "components/PropertyDetail";

const tableConfig = {};
const cardConfig = {};

const PropertyDetailsCard = () => {
  const classes = styles();
  const [currentPage, setCurrentPage] = useState(1);
  const [rentTxnCurrentPage, setRentTxnCurrentPage] = useState(1);
  const [openPayModal, setOpenPayModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [rentTxnDetails, setRentTxnDetails] = useState();
  const debouncedSearchText = useDebounce(searchText, 500);
  const balanceData = balanceDataTable();

  const { pfAssetData, isLoading, propertyTxnsList, rentTxn } = useSelector(
    (state) => state.accounts
  );

  const { userData } = useSelector(
    (state) => state.auth
  );
  const { reserveTxns, loader: marketLoader } = useSelector(
    (state) => state.marketplace
  );

  const propertyTxnsData = propertyTxns();
  const propertyRentTxnsData = propertyRentTxns();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = React.useState(0);

  const enable = {
    view: "view",
  };

  const cardActions = {
    view: {
      handler: (data) => {
        setRentTxnDetails({
          headRow: [
            {
              title: "Total Rent Amount:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.tableData?.totalRent}
                />
              ),
            },
          ],
          bodyRow: [
            {
              title: "Towards Maintenance:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.tableData?.maintenanceFee}
                />
              ),
            },
            {
              title: "Towards Vacancy:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.tableData?.vacancyFee}
                />
              ),
            },
            {
              title: "To Co-owners:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.tableData?.toCoowners}
                />
              ),
            },
            {
              title: "Transaction Hash:",
              value: data?.tableData?.transactionHash,
            },
            {
              title: "Date:",
              value: moment(data?.tableData?.updatedAt).format("lll"),
            },
          ],
        });
        setOpenPayModal(true);
      },
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePayClose = () => {
    setOpenPayModal(false);
  };

  const handlePaySuccess = () => {
    handlePayClose();
  };

  useEffect(() => {
    dispatch(getPFAssetData(id));
    dispatch(getPropertyTxnData(`${id}?page=${currentPage}&limit=10`));
  }, []);

  useEffect(() => {
    dispatch(getRentTxn({ id, page: rentTxnCurrentPage }));
  }, [rentTxnCurrentPage]);

  useEffect(() => {
    setSearchText("");
  }, [value]);

  useEffect(() => {
    if (value === 0) {
      // Token transactions
      dispatch(
        getPropertyTxnData(
          `${id}?page=${currentPage}&limit=10&search=${debouncedSearchText ?? ""
          }`
        )
      );
    }
    if (value === 1) {
      dispatch(
        getRentTxn({
          id,
          page: rentTxnCurrentPage,
          search: debouncedSearchText ?? "",
        })
      );
    } else {
      // Rent transaction
      dispatch(
        getReserveTransactionsSaga({
          id,
          // page: rentTxnCurrentPage,
          // search: debouncedSearchText ?? "",
        })
      );
    }
  }, [debouncedSearchText, value]);

  let maxCount = propertyTxnsList?.totalItems
    ? Math.ceil(Number(propertyTxnsList?.totalItems / 10))
    : 0;

  let rentTxnMaxCount = rentTxn?.data?.totalCount
    ? Math.ceil(Number(rentTxn?.data?.totalCount / 10))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
    dispatch(
      getPropertyTxnData(
        `${id}?page=${page}&limit=10`
      )
    );
  };

  const updateRentTxnCurrentPage = (page) => {
    setRentTxnCurrentPage(page);
  };

  const rentTxnPaginationConfig = {
    currentPage: rentTxnCurrentPage,
    maxCount: rentTxnMaxCount,
    handler: updateRentTxnCurrentPage,
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box py="24px" px="0">
            {children}
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Box className={classes.paddingContainer}>
      <Box className={classes.mainContainer}>
        <Grid container spacing={2} className={classes.headerBox}>
          <PropertyDetail id={id} pfAssetData={pfAssetData} />
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4.5}
            xl={4}
            spacing={2}
            className={classes.headerBox}
          >
            <MKButton
              variant="contained"
              // color="primary"
              component={Link}
              to={"/property-profile/?id=" + id}
              className={classes.buttonProperty}
            >
              <img
                src={PropertyProfile}
                className={classes.profileIcon}
                alt="Arrow UP"
              />
              Property Profile
            </MKButton>
          </Grid>
        </Grid>
        <Grid container columns={11} mt={2}>
          <Grid item xs={5.5} md={4} lg={2.8}>
            <Box className={classes.marketStats}>
              <Box>
                {/* <Tooltip
                  title={`Total Token: ${pfAssetData?.property?.numberOfTokens
                    ?.toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
                > */}
                <MKTypography className={classes.marketStatsHead}>
                  Asset Value
                </MKTypography>
                {/* </Tooltip> */}
                {isLoading?.pfAssetData ? (
                  <ThreeDotsSpinner isLoading={true} />
                ) : (
                  <MKTypography 
                    className={classes.marketStatsVal}
                    component="span"
                  >
                    <CurrencyFormat
                      prefix={"$"}
                      value={pfAssetData?.property?.assetValue}
                    />
                    {Number(pfAssetData?.growthPercentage) !== 0 && (
                      <MKTypography
                        component="span"
                        className={classes.statsVal}
                      >
                        <img
                          src={
                            pfAssetData?.growthPercentage < 0
                              ? ArrowDownRed
                              : ArrowUpGreen
                          }
                          className={classes.arwUpGreen}
                          alt="Stats UP"
                        />
                        {Number(pfAssetData?.growthPercentage).toFixed(2)}%
                      </MKTypography>
                    )}
                  </MKTypography>
                )}
              </Box>
              <Box className={classes.iconBox}>
                <img src={AssetsValue} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5.5} md={4} lg={2}>
            <Box className={classes.marketStats}>
              <Box>
                <Tooltip
                  title={`My tokens: ${pfAssetData?.holdings
                    ?.toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
                >
                  <MKTypography className={classes.marketStatsHead}>
                    Holdings for Rent
                  </MKTypography>
                </Tooltip>
                {isLoading?.pfAssetData ? (
                  <ThreeDotsSpinner isLoading={true} />
                ) : (
                  <>
                    <Tooltip
                      title={`My tokens: ${pfAssetData?.holdings
                        ?.toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
                    >
                      <MKTypography className={classes.marketStatsVal}>
                        <CurrencyFormat
                          value={pfAssetData?.assetValue}
                          prefix={"$"}
                        />
                      </MKTypography>
                    </Tooltip>
                  </>
                )}
              </Box>
              <Box className={classes.iconBox}>
                <img src={Holdings} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5.5} md={3} lg={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Appreciation
                </MKTypography>
                {isLoading?.pfAssetData ? (
                  <ThreeDotsSpinner isLoading={true} />
                ) : (
                  <CurrencyFormat
                    eleClass={classes.marketStatsVal}
                    prefix={"$"}
                    value={pfAssetData?.appreciation}
                  />
                )}
              </Box>
              <Box className={classes.iconBox}>
                <img src={Appreciation} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5.5} md={5} lg={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Total Rental Income
                </MKTypography>
                {isLoading?.pfAssetData ? (
                  <ThreeDotsSpinner isLoading={true} />
                ) : (
                  <CurrencyFormat
                    eleClass={classes.marketStatsVal}
                    prefix={"$"}
                    value={pfAssetData?.rentalIncome}
                  />
                )}
              </Box>
              <Box className={classes.iconBox}>
                <img src={TotalRentalIncome} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={2.2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Next Payout
                </MKTypography>
                {isLoading?.pfAssetData ? (
                  <ThreeDotsSpinner isLoading={true} />
                ) : (
                  <MKTypography className={classes.marketStatsVal1}>
                    {pfAssetData?.nextPayout ? moment(pfAssetData?.nextPayout).format('lll') : "Coming Soon"}
                  </MKTypography>
                )}
              </Box>
              <Box className={classes.iconBox}>
                <img src={NextPayout} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MKBox mt={5}>
              <div className={classes.tabMainContainer}>
                <div className={classes.tabsContainer}>
                  <Box>
                    <Tabs
                      allowScrollButtonsMobile
                      scrollButtons="auto"
                      value={value}
                      onChange={handleChange}
                    >
                      <Tab
                        disableRipple
                        label="Token Transactions"
                        {...a11yProps(0)}
                        className={classes.tabStyle}
                      />
                      <Tab
                        disableRipple
                        label="Rent Transactions"
                        {...a11yProps(1)}
                        className={classes.tabStyle}
                      />
                      {/* <Tab
                        disableRipple
                        label="Property Transactions"
                        {...a11yProps(2)}
                        className={classes.tabStyle}
                      /> */}
                    </Tabs>
                  </Box>
                </div>
                {userData?.userType !== "investor" && <Box className={classes.searchContainer}>
                  <SearchBox value={searchText} onChange={handleSearch} />
                </Box>}
              </div>
              {/* Token Transactions */}
              <TabPanel value={value} index={0}>
                <Box className={classes.sectionDesktopFlex}>
                  {isLoading.propertyTxnsList ? (
                    <div className={classes.noContentBox}>
                      <TableSkeleton
                        dynamicField={true}
                        {...propertyTxnsData}
                      />
                    </div>
                  ) : propertyTxnsList?.items?.length === 0 ? (
                    <Box className={classes.noContentBox}>
                      <img src={noTransactions} alt="No Data" />
                      <span className={classes.noContentText}>
                        You haven&apos;t made any investments yet.{" "}
                        <span
                          className={classes.pointer}
                          onClick={() => navigate(routePaths.LANDING_PAGE_PATH)}
                        >
                          Click here{" "}
                        </span>{" "}
                        to browse options
                      </span>
                    </Box>
                  ) : (
                    <DynamicTable
                      height="100%"
                      {...propertyTxnsData}
                      tableConfig={{
                        ...tableConfig,
                      }}
                      paginationConfig={paginationConfig}
                      pagination={true}
                    />
                  )}
                </Box>
                <Box
                  className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
                >
                  {/* Loading state pending */}
                  {isLoading.propertyTxnsList ? (
                    <div className={classes.noContentBox}>
                      <OvalSpinner isLoading={true} />
                    </div>
                  ) : (
                    <DynamicCard
                      {...propertyTxnsData}
                      column={[
                        "Date",
                        "Type",
                        "# of Tokens",
                        "Amount",
                        "Transaction ID",
                      ]}
                      pagination={paginationConfig}
                      cardConfig={{
                        ...cardConfig,
                      }}
                    />
                  )}
                </Box>
              </TabPanel>
              {/* Rent Transactions */}
              <TabPanel value={value} index={1}>
                <Box className={classes.sectionDesktopFlex}>
                  {isLoading.rentTxn ? (
                    <div className={classes.noContentBox}>
                      <TableSkeleton
                        dynamicField={true}
                        {...propertyRentTxnsData}
                      />
                    </div>
                  ) : rentTxn?.items?.length === 0 ? (
                    <Box className={classes.noContentBox}>
                      <img src={noTransactions} alt="No Data" />
                      <span className={classes.noContentText}>
                        You haven&apos;t made any investments yet.{" "}
                        <span
                          className={classes.pointer}
                          onClick={() => navigate(routePaths.LANDING_PAGE_PATH)}
                        >
                          Click here{" "}
                        </span>{" "}
                        to browse options
                      </span>
                    </Box>
                  ) : (
                    <DynamicTable
                      height="100%"
                      {...propertyRentTxnsData}
                      tableConfig={{
                        ...tableConfig,
                        4: enable.view,
                      }}
                      tableAdvancedActions={cardActions}
                      paginationConfig={rentTxnPaginationConfig}
                      pagination={true}
                    />
                  )}
                </Box>
                <Box
                  className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
                >
                  {/* Loading state pending */}
                  {isLoading.rentTxn ? (
                    <div className={classes.noContentBox}>
                      <OvalSpinner isLoading={true} />
                    </div>
                  ) : (
                    <DynamicCard
                      {...propertyRentTxnsData}
                      column={[
                        "Date",
                        "Total Rent",
                        "Amount",
                        "Number of Tokens",
                      ]}
                      cardConfig={{
                        ...cardConfig,
                      }}
                      tableAdvancedActions={cardActions}
                      paginationConfig={rentTxnPaginationConfig}
                      pagination={true}
                    />
                  )}
                </Box>
              </TabPanel>
              {/* Property Transactions */}
              <TabPanel value={value} index={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MKBox mt={5}>
                      <Box className={classes.sectionDesktopFlex}>
                        {marketLoader.reserveTxns ? (
                          <div className={classes.noContentBox}>
                            <TableSkeleton
                              dynamicField={true}
                              {...balanceData}
                            />
                          </div>
                        ) : reserveTxns?.length === 0 ? (
                          <Box className={classes.noContentBox}>
                            <img src={NoProperty} alt="No Data" />
                            <span className={classes.noContentText}>
                              No Data Found!
                            </span>
                          </Box>
                        ) : (
                          <DynamicTable
                            height="100%"
                            {...balanceData}
                            tableConfig={{
                              ...tableConfig,
                              5: enable.clickEvent,
                            }}
                            tableAdvancedActions={cardActions}
                            paginationConfig={paginationConfig}
                          />
                        )}
                      </Box>
                      <Box
                        className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
                      >
                        {/* Loading state pending */}
                        {marketLoader.reserveTxns ? (
                          <div className={classes.noContentBox}>
                            <OvalSpinner isLoading={true} />
                          </div>
                        ) : (
                          <DynamicCard
                            {...balanceData}
                            cardConfig={{
                              ...cardConfig,
                              5: enable.clickEvent,
                            }}
                            tableAdvancedActions={cardActions}
                            pagination={paginationConfig}
                          />
                        )}
                      </Box>
                    </MKBox>
                  </Grid>
                </Grid>
              </TabPanel>
            </MKBox>
          </Grid>
        </Grid>
      </Box>
      

      <TransactionDetail
        open={openPayModal}
        handleClose={handlePayClose}
        handleSuccess={handlePaySuccess}
        data={rentTxnDetails}
      />
    </Box>
  );
};

export default PropertyDetailsCard;

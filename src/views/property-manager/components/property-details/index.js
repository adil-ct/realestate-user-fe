import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import TableSkeleton from "components/Skeleton/TableSkeleton";
import CurrencyFormat from "components/CurrencyFormat";
import MKTypography from "components/custom/MKTypography";
// import MKProgress from "components/custom/MKProgress";
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import DynamicCard from "components/Cards/DynamicCard/DynamicCard";
import DynamicTable from "components/DynamicTable/DynamicTable";
// import Dropdown from "components/custom/DropDown/index";
import Searchbox from "components/custom/Search/index";
import Menu from "components/Menu";
import useDebounce from "hooks/useDebounce";
import balances from "_mocks/pDetails";
import { ThreeDotsSpinner } from "components/Loader/GenericLoaders";
import { routePaths } from "routes/mainRoutes/routePaths";

import {
  AssetsValue,
  Initiate,
  PropertyProfile,
  PropertyDisabled,
  PM3,
  Group,
  NextPayout,
  TotalRentalIncome,
  NoProperty,
} from "constants/assets";
import styles from "./styles";
import {
  getPFAssetData,
  getPropertyTxnData,
  getCoownerListSaga,
} from "store/actions";
import TransactionDetail from "components/Modal/TransactionDetail";
import CoownerList from "components/Modal/CoownerList";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import PropertyDetail from "components/PropertyDetail";

const PropertManagerPortfolio = () => {
  const classes = styles();
  const { id } = useParams();
  const [openPayModal, setOpenPayModal] = useState(false);
  const [openCoownerModal, setCoownerModal] = useState(false);
  const balanceData = balances();
  const [txnDetailsData, setTxnDetailsData] = useState();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearchText = useDebounce(searchText, 500, setCurrentPage);
  // const [dropDownValue, setDropDownValue] = useState("");

  const navigate = useNavigate();
  //   const balanceData = balances();
  const dispatch = useDispatch();
  const { pfAssetData, isLoading, propertyTxnsList } = useSelector(
    (state) => state.accounts
  );
  const { coownerList } = useSelector((state) => state.pManager);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const enable = {
    bluebutton: "bluebutton",
    badge: "badge",
    progressBar: "progressBar",
    priceChange: "priceChange",
    blueLink: "blueLink",
    deleteAndEditButton: "deleteAndEditButton",
    blueLinkBalance: "blueLinkBalance",
    clockicon: "clockicon",
    edittrash: "edittrash",
    visacard: "visacard",
    mastercard: "mastercard",
    clickEvent: "clickEvent",
  };

  const tableConfig = {};

  const cardConfig = {};

  const maxCount = propertyTxnsList?.totalCount
    ? Math.ceil(Number(propertyTxnsList?.totalCount / 10))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  const cardActions = {
    handler: (item) => {
      if (
        item?.data?.status === "completed" &&
        item?.data?.transactionType === "rent" &&
        Object.keys(item?.data?.monthlyRentData).length
      ) {
        const data = item?.data;
        setTxnDetailsData({
          headRow: [
            {
              title: "Total Rent Amount:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.monthlyRentData?.rentAmount}
                />
              ),
            },
          ],
          bodyRow: [
            {
              title: "Net Rent Amount:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.monthlyRentData?.distributableAmount}
                />
              ),
            },
            {
              title: "Towards Vacancy:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.monthlyRentData?.vacancyFee}
                />
              ),
            },
            {
              title: "Towards maintanance fee:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.monthlyRentData?.maintenanceFee}
                />
              ),
            },
            {
              title: "To Co-owners:",
              value: (
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.monthlyRentData?.toCoowners}
                />
              ),
            },
            {
              title: "Transaction ID:",
              value: data?.id,
            },
            {
              title: "Date:",
              value: moment(data?.createdAt).format("lll"),
            },
          ],
        });
        setOpenPayModal(true);
      }
    },
  };

  const handlePayClose = () => {
    setOpenPayModal(false);
  };

  const handleCloseCoownerModal = () => {
    setCoownerModal(false);
  };

  const handlePaySuccess = () => {
    handlePayClose();
  };

  useEffect(() => {
    dispatch(getPFAssetData(id));
  }, []);

  useEffect(() => {
    if (debouncedSearchText.length === 0)
      dispatch(getPropertyTxnData(`${id}?page=${currentPage}&limit=10`));
    if (debouncedSearchText.length > 0)
      dispatch(
        getPropertyTxnData(
          `${id}?page=${currentPage}&limit=10&search=${debouncedSearchText}`
        )
      );
  }, [currentPage, debouncedSearchText]);

  useEffect(() => {
    dispatch(getCoownerListSaga({ id }));
  }, []);

  return (
    <Box className={classes.paddingContainer}>
      <Box className={classes.mainContainer}>
        <Grid container spacing={2} className={classes.headerBox}>
          <PropertyDetail
            id={id}
            pfAssetData={pfAssetData}
          />
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={6}
            xl={5}
            className={classes.headerBoxBtns}
          >
            <MKButton
              variant="outlined"
              // color="primary"
              component={Link}
              disabled={!pfAssetData?.property?._monthlyRent}
              to={`${routePaths.PROPERTY_MGR_RENT_PAYOUT_PATH}/${id}`}
              className={`${classes.mr20} ${classes.fullWidth}`}
            >
              <img
                src={
                  !pfAssetData?.property?._monthlyRent
                    ? PropertyDisabled
                    : PropertyProfile
                }
                className={classes.profileIcon}
                alt="Arrow UP"
              />
              Pay Rent
            </MKButton>
            <MKButton
              start
              variant="gradient"
              // color="primary"
              className={classes.fullWidth1}
              onClick={() =>
                navigate(`${routePaths.PROPERTY_MGR_INITIATE_TRANSACTION_PATH}/?id=${id}`)
              }
            >
              <img
                src={Initiate}
                className={classes.btnIcon}
                alt="Arrow Down"
              />
              Initiate Transaction
            </MKButton>
            <MKBox className={classes.posAbsMenu}>
              <Menu id={id} />
            </MKBox>
          </Grid>
        </Grid>
        {/* Portfolio Values */}
        <Grid container spacing={2} columns={11}>
          <Grid item xs={12} sm={3.6} lg={3} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Asset Value
                </MKTypography>
                <MKTypography className={classes.marketStatsVal} component="div">
                  {isLoading?.pfAssetData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={pfAssetData?.property?.assetValue}
                    />
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={AssetsValue} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3.6} lg={2} spacing={2}>
            <Box
              style={{ cursor: "pointer" }}
              className={classes.marketStats}
              onClick={() => setCoownerModal(true)}
            >
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  No. Of Co-Owners
                </MKTypography>
                <MKTypography className={classes.marketStatsVal1} component="div">
                  {isLoading?.pfAssetData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    pfAssetData?.coowners
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={Group} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3.6} lg={2} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Maintenance Reserve
                </MKTypography>
                <MKTypography className={classes.marketStatsVal} component="div">
                  {isLoading?.pfAssetData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={pfAssetData?.property?.maintenanceReserve}
                    />
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={PM3} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.5} lg={2} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Total Vacancy Reserve
                </MKTypography>
                <MKTypography className={classes.marketStatsVal} component="div">
                  {isLoading?.pfAssetData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={pfAssetData?.property?.vacancyReserve}
                    />
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={TotalRentalIncome} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.5} lg={2} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Next Payout
                </MKTypography>
                <MKTypography className={classes.marketStatsVal2} component="div">
                  {isLoading?.pfAssetData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : !pfAssetData?.nextPayout ? (
                    "N/A"
                  ) : (
                    moment(pfAssetData?.nextPayout).format("lll")
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={NextPayout} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <MKBox display="flex" className={classes.historyMobileDisplay}>
          <MKBox display="flex" className={classes.menuDropdown}>
            {/* <Dropdown
                drpdwnName="Txn Type"
                drpdwnOptions={["Option1", "Option2"]}
                setDropDownValue={setDropDownValue}
                dropDownValue={dropDownValue}
              /> */}
          </MKBox>
          <MKBox className={classes.historyMobileSearch}>
            <Searchbox value={searchText} onChange={handleSearch} />
          </MKBox>
        </MKBox>
        <Grid spacing={2}>
          <Grid item xs={12}>
            <MKBox mt={5}>
              <Box className={classes.sectionDesktopFlex}>
                {isLoading.propertyTxnsList ? ( /////////////////////////////
                  <div className={classes.noContentBox}>
                    <TableSkeleton dynamicField={true} {...balanceData} />
                  </div>
                ) : propertyTxnsList?.data?.length === 0 ? (
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
                {isLoading.propertyTxnsList ? ( /////////////////////////////
                  <div className={classes.noContentBox}>
                    <CardSkeleton dynamicField={true} {...balanceData} />
                  </div>
                ) : propertyTxnsList?.data?.length === 0 ? (
                  <Box className={classes.noContentBox}>
                    <img src={NoProperty} alt="No Data" />
                    <span className={classes.noContentText}>
                      No Data Found!
                    </span>
                  </Box>
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
      </Box>
      <TransactionDetail
        open={openPayModal}
        handleClose={handlePayClose}
        handleSuccess={handlePaySuccess}
        data={txnDetailsData}
      />
      <CoownerList
        open={openCoownerModal}
        handleClose={handleCloseCoownerModal}
        dataList={coownerList}
      />
    </Box>
  );
};

export default PropertManagerPortfolio;

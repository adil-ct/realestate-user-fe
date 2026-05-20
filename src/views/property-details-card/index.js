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
  getPFListData,
  getListOfTransactions,
  getPropertyDetailsSaga,
} from "store/actions";
import DynamicTable from "components/DynamicTable/DynamicTable";
import MKTypography from "components/custom/MKTypography";
import CurrencyFormat from "components/CurrencyFormat";
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import propertyTxnsFromHistory from "_mocks/propertyTxnsFromHistory";
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
} from "constants/assets";
import styles from "./styles";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import TransactionDetail from "components/Modal/TransactionDetail";
import SearchBox from "components/custom/Search";
import useDebounce from "hooks/useDebounce";
import PropertyDetail from "components/PropertyDetail";

const tableConfig = {};
const cardConfig = {};

const PropertyDetailsCard = () => {
  const classes = styles();
  const [currentPage, setCurrentPage] = useState(1);
  const [openPayModal, setOpenPayModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [rentTxnDetails] = useState();
  const debouncedSearchText = useDebounce(searchText, 500);

  const { pfAssetData, isLoading, pfListData, transactions } = useSelector(
    (state) => state.accounts
  );

  const { propertyData } = useSelector((state) => state.marketplace);

  const { userData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = React.useState(0);

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
    dispatch(getPropertyDetailsSaga({ id, tabSelected: "rationale" }));
    dispatch(
      getListOfTransactions({
        page: 1,
        txnType: "",
        duration: "",
        search: "",
      })
    );
    if (!pfListData?.value?.length) {
      dispatch(getPFListData({ page: 1, search: "" }));
    }
  }, []);

  const propertyDetail = propertyData?.data || {};
  const fakeTokenId = (() => {
    let h = 0;
    const src = String(id || "");
    for (let i = 0; i < src.length; i++) {
      h = (h * 31 + src.charCodeAt(i)) >>> 0;
    }
    return 10000 + (h % 90000);
  })();

  const portfolioItem = (pfListData?.value || []).find(
    (p) => p?._property === id
  );

  const getTxnAmount = (t) =>
    typeof t?.amount === "number" ? t?.amount : Number(t?.amount?.amount) || 0;
  const getTxnFees = (t) =>
    typeof t?.fees === "number" ? t?.fees : Number(t?.fees?.amount) || 0;

  const resolvedTitle = (
    pfAssetData?.property?.title ||
    propertyData?.data?.title ||
    portfolioItem?.title ||
    ""
  )
    .toString()
    .trim()
    .toLowerCase();
  const getTxnPid = (t) =>
    (typeof t?.propertyId === "object" ? t?.propertyId?._id : t?.propertyId) ||
    t?.property?._id ||
    t?._property ||
    null;
  const propertyTxns = (transactions?.data || []).filter((t) => {
    const txnPid = getTxnPid(t);
    if (txnPid) return txnPid === id;
    return (
      resolvedTitle &&
      String(t?.destination || "").trim().toLowerCase() === resolvedTitle
    );
  });
  const txnAggregates = propertyTxns.reduce(
    (acc, t) => {
      const amount = getTxnAmount(t);
      const fees = getTxnFees(t);
      const net = Math.max(amount - fees, 0);
      const tokens =
        Number(t?.tokens) ||
        (Number(portfolioItem?.currentPrice) > 0
          ? Math.round(net / Number(portfolioItem?.currentPrice))
          : net);
      const isBuy =
        t?.transferType === "received" ||
        t?.transactionType === "Deposit" ||
        t?.transactionType === "checkout" ||
        t?.transactionType === "Checkout";
      if (isBuy) {
        acc.buyTokens += tokens;
        acc.buyAmount += net;
      } else {
        acc.sellTokens += tokens;
        acc.sellAmount += net;
      }
      acc.totalAmount += amount;
      return acc;
    },
    {
      buyTokens: 0,
      buyAmount: 0,
      sellTokens: 0,
      sellAmount: 0,
      totalAmount: 0,
    }
  );

  const netTokensFromTxns = txnAggregates.buyTokens - txnAggregates.sellTokens;
  const netSpentFromTxns = txnAggregates.buyAmount - txnAggregates.sellAmount;
  const holdingsTokens =
    Number(pfAssetData?.holdings) ||
    Number(portfolioItem?.tokens) ||
    Number(portfolioItem?.balanceTokens) ||
    netTokensFromTxns ||
    0;
  const currentPrice =
    Number(pfAssetData?.property?.currentPrice) ||
    Number(portfolioItem?.currentPrice) ||
    0;
  const derivedAssetValue =
    Number(pfAssetData?.assetValue) ||
    Number(pfAssetData?.property?.assetValue) ||
    Number(portfolioItem?.balanceValue) ||
    holdingsTokens * currentPrice ||
    netSpentFromTxns ||
    0;
  const avgBuyPrice =
    txnAggregates.buyTokens > 0
      ? txnAggregates.buyAmount / txnAggregates.buyTokens
      : currentPrice;
  const derivedAppreciation =
    Number(pfAssetData?.appreciation) ||
    (currentPrice - avgBuyPrice) * holdingsTokens ||
    0;

  const mergedAssetData = {
    ...pfAssetData,
    assetValue: derivedAssetValue,
    holdings: holdingsTokens,
    appreciation: derivedAppreciation,
    rentalIncome: Number(pfAssetData?.rentalIncome) || 0,
    growthPercentage:
      Number(pfAssetData?.growthPercentage) ||
      (avgBuyPrice > 0
        ? ((currentPrice - avgBuyPrice) / avgBuyPrice) * 100
        : 0),
    property: {
      ...(pfAssetData?.property || {}),
      title:
        pfAssetData?.property?.title ||
        propertyDetail?.title ||
        portfolioItem?.title,
      city:
        pfAssetData?.property?.city ||
        propertyDetail?.city ||
        portfolioItem?.city,
      state:
        pfAssetData?.property?.state ||
        propertyDetail?.state ||
        portfolioItem?.state,
      mainImage:
        pfAssetData?.property?.mainImage ||
        propertyDetail?.mainImage ||
        portfolioItem?.mainImage,
      tokenId:
        pfAssetData?.property?.tokenId ||
        propertyDetail?.tokenId ||
        portfolioItem?.tokenId ||
        fakeTokenId,
      assetValue:
        pfAssetData?.property?.assetValue ||
        propertyDetail?.assetValue ||
        portfolioItem?.lastPropertyValue ||
        derivedAssetValue,
      currentPrice,
      numberOfTokens:
        pfAssetData?.property?.numberOfTokens ||
        propertyDetail?.numberOfTokens ||
        portfolioItem?.numberOfTokens,
    },
    tokenContractAddress:
      pfAssetData?.tokenContractAddress ||
      propertyDetail?.tokenContractAddress ||
      portfolioItem?.tokenContractAddress ||
      "",
  };

  const propertyTxnsData = propertyTxnsFromHistory({
    propertyId: id,
    propertyTitle: mergedAssetData?.property?.title,
    pricePerToken: mergedAssetData?.property?.currentPrice,
  });

  useEffect(() => {
    setSearchText("");
  }, [value]);

  useEffect(() => {
    if (value === 0) {
      dispatch(
        getListOfTransactions({
          page: currentPage,
          txnType: "",
          duration: "",
          search: debouncedSearchText ?? "",
        })
      );
    }
  }, [debouncedSearchText, value, currentPage]);

  const maxCount = transactions?.totalCount
    ? Math.ceil(Number(transactions?.totalCount / 10))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
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
          <PropertyDetail id={id} pfAssetData={mergedAssetData} />
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
                <MKTypography className={classes.marketStatsHead}>
                  Asset Value
                </MKTypography>
                {isLoading?.pfAssetData ? (
                  <ThreeDotsSpinner isLoading={true} />
                ) : (
                  <MKTypography
                    className={classes.marketStatsVal}
                    component="span"
                  >
                    <CurrencyFormat
                      prefix={"$"}
                      value={mergedAssetData?.property?.assetValue}
                    />
                    {Number(mergedAssetData?.growthPercentage) !== 0 && (
                      <MKTypography
                        component="span"
                        className={classes.statsVal}
                      >
                        <img
                          src={
                            mergedAssetData?.growthPercentage < 0
                              ? ArrowDownRed
                              : ArrowUpGreen
                          }
                          className={classes.arwUpGreen}
                          alt="Stats UP"
                        />
                        {Number(mergedAssetData?.growthPercentage).toFixed(2)}%
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
                  title={`My tokens: ${mergedAssetData?.holdings
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
                      title={`My tokens: ${mergedAssetData?.holdings
                        ?.toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
                    >
                      <MKTypography className={classes.marketStatsVal}>
                        <CurrencyFormat
                          value={mergedAssetData?.assetValue}
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
                    value={mergedAssetData?.appreciation}
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
                    value={mergedAssetData?.rentalIncome}
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
                    {mergedAssetData?.nextPayout ? moment(mergedAssetData?.nextPayout).format('lll') : "Coming Soon"}
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
                      {/* <Tab
                        disableRipple
                        label="Rent Transactions"
                        {...a11yProps(1)}
                        className={classes.tabStyle}
                      /> */}
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
                  {isLoading.getTransactionsList ? (
                    <div className={classes.noContentBox}>
                      <TableSkeleton
                        dynamicField={true}
                        {...propertyTxnsData}
                      />
                    </div>
                  ) : propertyTxnsData?.row?.length === 0 ? (
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
                  {isLoading.getTransactionsList ? (
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
                        "Transaction Hash",
                      ]}
                      pagination={paginationConfig}
                      cardConfig={{
                        ...cardConfig,
                      }}
                    />
                  )}
                </Box>
              </TabPanel>
              {/* Rent Transactions — hidden */}
              {/*
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
              */}
              {/* Property Transactions — hidden (no tab) */}
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

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
// Tabs, Tab,

// Static imports
import rewardTrans from "_mocks/rewardTrans";
import DynamicCard from "components/Cards/DynamicCard/TransactionHistoryCard";
import { getListOfTransactions, getRewardTransactions, getWalletBalance } from "store/actions";
import SkeletonTransaction from "./SkeletonData/TransactionSkelton";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import MKTypography from "components/custom/MKTypography";
import CurrencyFormat from "components/CurrencyFormat";
import Dropdown from "components/custom/DropDown/index";
import { noTransactions } from "constants/assets";
import { historyStyles } from "./style/styles";
import MKBox from "components/custom/MKBox";
import SearchBox from "components/custom/Search";
import historyMocks from "_mocks/history";
import useDebounce from "hooks/useDebounce";
import { routePaths } from "routes/mainRoutes/routePaths";

const History = () => {
  const classes = historyStyles();
  const rewardTransData = rewardTrans();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const historyData = historyMocks();
  // const { userData, refDetails} = useSelector((state) => state.auth)
  const { isLoading, transactions, walletBalance } = useSelector(
    (state) => state.accounts
  );
  const { isLoading: userLoader, rewardTransactions } = useSelector(
    (state) => state.user
  );
  /* eslint-disable no-unused-vars */
  const [value, setValue] = useState(0);
  /* eslint-enable no-unused-vars */

  const [currentPage, setCurrentPage] = useState(1);
  const [txnType, setTxnType] = useState("All");
  const [duration, setDuration] = useState("All");
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);

  // Todo: Pending field from backend

  const totalCount = value === 0 ? transactions?.totalCount : rewardTransactions?.data?.totalCount
  const maxCount = totalCount
    ? Math.ceil(value === 0 ? Number(transactions?.totalCount / 10) : Number(rewardTransactions?.data?.totalCount / 10))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  const durationDropdownOpt = {
    "Past 7 Days": 7,
    "Past 15 Days": 15,
    "Past 30 Days": 30,
    All: "",
  };

  const txnTypeDropdownOpt = {
    Marketplace: "marketplace",
    Checkout: "Checkout",
    // "Crowdsale Success": "crowdsale_success",
    // Cashflow: "cashflow",
    // Transfers: "transfers",
    // Rent: "rent",
    // Deposit: "Deposit",
    // Withdrawal: "Withdrawal",
    All: "",
  };

  /* const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
  }; */

  useEffect(() => {
    dispatch(getWalletBalance());
  }, []);

  useEffect(() => {
    if(value === 1)
    dispatch(getRewardTransactions({ page: currentPage}))
  }, [currentPage, value]);

  useEffect(() => {
    if(value === 0)
    dispatch(
      getListOfTransactions({
        page: currentPage,
        txnType: txnTypeDropdownOpt[txnType],
        duration: durationDropdownOpt[duration],
        search: debouncedSearchText,
      })
    );
  }, [currentPage, txnType, duration, debouncedSearchText, value]);

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
  };

  /* function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  } */

  const tableConfig = {};

  const cardConfig = {};

  return (
    <>
      <MKBox component="section" pb={5} className={classes.paddingModal}>
        <MKBox alignItems="center" className={classes.mainContainerLG}>
          <span
            className={classes.navigation}
            onClick={() => navigate(routePaths.PORTFOLIO_PATH)}
          >
            {" "}
            {"< Back"}{" "}
          </span>
          {/* <div className={classes.tabMainContainer}>
            <div className={classes.tabsContainer}>
              { (refDetails || userData?.affiliate) &&  <Box mt={2}>
                <Tabs
                  allowScrollButtonsMobile
                  scrollButtons="auto"
                  value={value}
                  onChange={handleChange}
                >
                  <Tab
                    disableRipple
                    label="All Transactions"
                    {...a11yProps(0)}
                    className={classes.tabStyle}
                  />
                 <Tab
                    disableRipple
                    label="Reward Transactions"
                    {...a11yProps(1)}
                    className={classes.tabStyle}
                  />
                </Tabs>
              </Box>
            }
            </div>
          </div> */}
          <MKBox
            display="flex"
            justifyContent="space-between"
            className={classes.historyMobileDisplay}
            mt={3}
          >
            <MKBox className={classes.balBox}>
              <Typography variant="h4" className={classes.headerTitle}>
                { value === 0 ? "Transaction History" : "Rewards History"}
              </Typography>
              { value === 1 && <MKTypography className={classes.walletBalanceText}>
                <MKTypography
                  variant="span"
                  className={classes.walletBalanceValue}
                >
                  {isLoading.walletBalance ? (
                    "$0"
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={value === 0 ? walletBalance.availableBalance : walletBalance?.credits}
                      zeroAllowed
                    />
                  )}
                </MKTypography>
                {"   "}
                ({value === 0 ? "Current Balance" : "Rewards Balance" })
              </MKTypography> }
            </MKBox>
           {value === 0 &&  <MKBox display="flex" className={classes.historyMobileDisplay}>
              <MKBox display="flex" className={classes.menuDropdown}>
                <Dropdown
                  drpdwnName="Txn Type"
                  drpdwnOptions={Object.keys(txnTypeDropdownOpt)}
                  setDropDownValue={setTxnType}
                  dropDownValue={txnType}
                />
                <Dropdown
                  drpdwnName="Duration"
                  drpdwnOptions={Object.keys(durationDropdownOpt)}
                  setDropDownValue={setDuration}
                  dropDownValue={duration}
                />
              </MKBox>
              <MKBox className={classes.historyMobileSearch}>
                <SearchBox
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </MKBox>
            </MKBox>}
          </MKBox>
          {value === 0 ? <MKBox mt={4}>
            {!isLoading.getTransactionsList && !historyData?.row?.length ? (
              <MKBox className={classes.noContentBox}>
                <img src={noTransactions} alt="No Transactions" />
                <span className={classes.noContentText}>
                  You have no transactions yet.{" "}
                  <span
                    onClick={() => navigate(routePaths.INVESTOR_PATH)}
                    style={{ color: "#C9A84C", fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}
                  >
                    Browse properties to invest.
                  </span>
                </span>
              </MKBox>
            ) : (
              <>
                <Box className={classes.sectionDesktopFlex}>
                  {isLoading.getTransactionsList ? (
                    <TableSkeleton {...SkeletonTransaction} />
                  ) : (
                    <DynamicTable
                      height="100%"
                      minHeight="300px"
                      {...historyData}
                      tableConfig={{
                        ...tableConfig,
                      }}
                      pagination={true}
                      paginationConfig={paginationConfig}
                    />
                  )}
                </Box>
                <Box
                  className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
                >
                  {isLoading.getTransactionsList ? (
                    <CardSkeleton />
                  ) : (
                    <DynamicCard
                      {...historyData}
                      cardConfig={{
                        ...cardConfig,
                        5: enable.blueLinkBalance,
                      }}
                      pagination={paginationConfig}
                    />
                  )}
                </Box>
              </>
            )}
            </MKBox> : 
            <MKBox mt={4}>
            {!userLoader.rewardTransactions && !rewardTransData?.row?.length ? (
              <MKBox className={classes.noContentBox}>
                <img src={noTransactions} alt="No Transactions" />
                <span className={classes.noContentText}>
                  You have no reward transactions yet. Refer friends to start earning rewards.
                </span>
              </MKBox>
            ) : (
              <>
                <Box className={classes.sectionDesktopFlex}>
                  {userLoader.rewardTransactions ? (
                    <TableSkeleton dynamicField={true} {...rewardTransData} />
                  ) : (
                    <DynamicTable
                      height="100%"
                      minHeight="300px"
                      {...rewardTransData}
                      headColStyle={{
                        0: { width: "200px", textAlign: "left" },
                      }}
                      tableConfig={{
                        ...tableConfig,
                      }}
                      pagination={true}
                      paginationConfig={paginationConfig}
                    />
                  )}
                </Box>
                <Box
                  className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
                >
                  {isLoading.rewardTransactions ? (
                    <CardSkeleton />
                  ) : (
                    <DynamicCard
                      {...rewardTransData}
                      cardConfig={{
                        ...cardConfig,
                        5: enable.blueLinkBalance,
                      }}
                      pagination={paginationConfig}
                    />
                  )}
                </Box>
              </>
            )}
            </MKBox>
          } 
        </MKBox>
      </MKBox>
    </>
  );
};

export default History;

import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Tooltip } from "@mui/material";

// Static imports
import DepositScreens from "components/Modal/DepositScreens";
import WithDrawModal from "components/Modal/WalletModals/Withdrawmodal";
import {
  getServiceFees,
  getPFOverviewData,
  getPFListData,
} from "store/actions";
import {
  ThreeDotsSpinner,
  // OvalSpinner,
} from "components/Loader/GenericLoaders";
import paymentList from "_mocks/paymentMethods";
import WithdrawPaymentMethod from "components/Modal/WithdrawPaymentMethod";
import DynamicCard from "components/Cards/DynamicCard/PortfolioCard";
import DynamicTable from "components/DynamicTable/DynamicTable";
import MKTypography from "components/custom/MKTypography";
import CurrencyFormat from "components/CurrencyFormat";
// import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import SearchBox from "components/custom/Search";
import useDebounce from "hooks/useDebounce";
import balances from "_mocks/pManagers";
import {
  NextPayout,
  // ArrowDownBlack,
  // ArrowUpBlack,
  History,
  PM1,
  PM2,
  PM3,
  NoProperty,
} from "constants/assets";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import { getWalletBalance } from "store/actions";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import styles from "../Portfolio/styles";
import { routePaths } from "routes/mainRoutes/routePaths";

const Portfolio = () => {
  const classes = styles();
  const withdrawPaymentMethodsList = paymentList(true).data;
  const paymentMethodsList = paymentList().data;
  const { pfOverviewData, isLoading } = useSelector(
    (state) => state.accounts
  );
  const [openDeposit, setOpenDeposit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [mainWithdrawmodal, setMainWithdrawmodal] = useState(false);
  const [withdrawMethod, setWithdrawMethod] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500, setCurrentPage);

  const navigate = useNavigate();
  const balanceData = balances();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  let maxCount = pfOverviewData?.totalCount
    ? Math.ceil(Number(pfOverviewData?.totalCount / 10))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };


  const backButtonWithdrawModal = () => {
    setWithdrawPaymentMethods(withdrawPaymentMethodsList);
    setOpenModal(false);
    setMainWithdrawmodal(true);
  };

  useEffect(() => {
    if (debouncedSearchText.length > 0)
      dispatch(
        getPFOverviewData({
          endpoint: `/marketplace/portfolio-summary/?page=${currentPage}&limit=10&search=${debouncedSearchText}`,
        })
      );
    if (debouncedSearchText.length === 0)
      dispatch(
        getPFOverviewData({
          endpoint: `/marketplace/portfolio-summary/?page=${currentPage}&limit=10`,
        })
      );
  }, [currentPage, debouncedSearchText]);

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

  const tableConfig = {};

  const cardConfig = {};

  const cardActions = {
    linkActions: [
      {
        name: "Pay Rent",
        handler: (data) => {
          if (data?.tableData?._monthlyRent && !data?.tableData?.rent?.isRentReceived) {
            navigate(`${routePaths.PROPERTY_MGR_RENT_PAYOUT_PATH}/${data.tableData._id}`);
          }
        },
        disabled: (data) => {
          return !data?.tableData?._monthlyRent ? true: data?.tableData?.rent?.isRentReceived;
        },
      },
    ],
    actions: [
      {
        name: "Create Proposal",
        handler: (id) => {
          navigate(`${routePaths.PROPERTY_MGR_CREATE_PROPOSAL_PATH}/?pid=${id}`);
        },
      },
    ],
  };

  const [withdrawPaymentMethods, setWithdrawPaymentMethods] = useState(
    withdrawPaymentMethodsList
  );

  const onCloseMainWithdrawModal = () => {
    setMainWithdrawmodal(false);
  };

  useEffect(() => {
    dispatch(getPFListData({ page: 1, search: "" }));
    dispatch(getServiceFees());
    dispatch(getWalletBalance());
  }, []);

  useEffect(() => {
    if (withdrawPaymentMethods?.length === 0) setWithdrawPaymentMethods(paymentMethodsList?.data || [])
  }, [paymentMethodsList?.data])

  const handleDepositModal = (value) => {
    setOpenModal(value);
  };
  const modalHandler = (value) => {
    setOpenModal(value);
  };
  const handelDepositModalSuccess = ({ redirect }) => {
    if (redirect) {
      navigate(routePaths.TRANSACTION_HISTORY_PATH);
    } else {
      // setDepositModalSucces(false);
    }
  };

  const handelMainWithdrawModal = () => {
    setMainWithdrawmodal(!mainWithdrawmodal);
    setWithdrawMethod("");
    setWithdrawPaymentMethods(withdrawPaymentMethodsList);
  };

  const handelMainWithdrawModalContinue = () => {
    setMainWithdrawmodal(!mainWithdrawmodal);
    if (mainWithdrawmodal) handleDepositModal(true);
  };

  return (
    <Box className={classes.paddingContainer}>
      <Box className={classes.mainContainer}>
        <Grid container spacing={2} className={classes.flexCenter}>
          <Grid
            item
            xs={12}
            // md={6}
            // lg={8}
            spacing={2}
            className={classes.flexCenter}
          >
            <MKBox className={classes.heading1UpperContainer}>
              <MKTypography variant="h2" className={classes.heading1}>
                Portfolio
              </MKTypography>
            </MKBox>
            <Tooltip
              title="Transaction History"
              className={classes.txnHistoryIcon}
            >
              <img
                src={History}
                className={classes.tHistory}
                onClick={() => navigate(routePaths.TRANSACTION_HISTORY_PATH)}
                alt="transaction_history"
              />
            </Tooltip>
          </Grid>
          {/* <Grid
            item
            xs={12}
            md={6}
            lg={4}
            spacing={2}
            className={classes.flexEnd}
          >
            <MKButton
              variant="outlined"
              // color="primary"
              className={`${classes.headerBtn} ${classes.mr15}`}
              onClick={handelMainWithdrawModal}
            >
              <img
                src={ArrowUpBlack}
                className={classes.arwBlack}
                alt="Arrow UP"
              />
              Withdraw
            </MKButton>
            <MKButton
              variant="gradient"
              // color="primary"
              className={classes.headerBtn}
              onClick={() => setOpenDeposit(true)}
            >
              <img
                src={ArrowDownBlack}
                className={classes.arwBlack}
                alt="Arrow Down"
              />
              Deposit
            </MKButton>
          </Grid> */}
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                {/* <Tooltip
                  enterTouchDelay={0}
                  title="Sum of investments and funds in your account."
                > */}
                <MKTypography className={classes.marketStatsHead}>
                  Balance
                </MKTypography>
                {/* </Tooltip> */}
                <MKTypography className={classes.marketStatsVal}>
                  {isLoading?.pfOverviewData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    <>
                      <span className={classes.forMWeb}>
                        ${" "}
                        {pfOverviewData?.result?.balance > 1000000
                          ? Number(
                            pfOverviewData?.result?.balance / 1000000
                          ).toFixed(2) + "M"
                          : pfOverviewData?.result?.balance > 1000
                            ? Number(
                              pfOverviewData?.result?.balance / 1000
                            ).toFixed(2) + "K"
                            : Number(pfOverviewData?.result?.balance).toFixed(2)}
                      </span>
                      <span className={classes.forWeb}>
                        <CurrencyFormat
                          prefix={"$"}
                          value={pfOverviewData?.result?.balance}
                          zeroAllowed
                        />
                      </span>
                    </>
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={PM1} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                {/* <Tooltip
                  enterTouchDelay={0}
                  title="Total net income received from your portfolio."
                > */}
                <MKTypography className={classes.marketStatsHead}>
                  Total Earnings
                </MKTypography>
                {/* </Tooltip> */}
                <MKTypography className={classes.marketStatsVal}>
                  {isLoading?.pfOverviewData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={pfOverviewData?.result?.totalEarnings}
                    />
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={PM2} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                {/* <Tooltip
                  enterTouchDelay={0}
                  title="Rental Income + Property Appreciation = Total Return"
                > */}
                <MKTypography className={classes.marketStatsHead}>
                  Total Maintenance Reserve
                </MKTypography>
                {/* </Tooltip> */}
                <MKTypography className={classes.marketStatsVal}>
                  {isLoading?.pfOverviewData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={pfOverviewData?.result?.totalMaintenanceReserve}
                    />
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={PM3} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                {/* <Tooltip
                  enterTouchDelay={0}
                  title="Next anticipated date you receive rental income from your portfolio."
                > */}
                <MKTypography className={classes.marketStatsHead}>
                  Total Vacancy Reserve
                </MKTypography>
                {/* </Tooltip> */}
                <MKTypography className={classes.marketStatsVal}>
                  {isLoading?.pfOverviewData ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={pfOverviewData?.result?.totalVacancyReserve}
                    />
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={NextPayout} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MKBox display="flex" justifyContent="flex-end" width="100%" mt={0} className={classes.mTop}>
              <SearchBox value={searchText} onChange={handleSearch} />
            </MKBox>
            <MKBox mt={3}>
              <Box className={classes.sectionDesktopFlex}>
                {isLoading.pfOverviewData ? ( /////////////////////////////
                  <div className={classes.noContentBox}>
                    <TableSkeleton dynamicField={true} {...balanceData} />
                  </div>
                ) : pfOverviewData?.result?.propertyData?.length === 0 ? (
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
                      6: enable.blueLinkBalance,
                    }}
                    paginationConfig={paginationConfig}
                    headColStyle={{
                      6: { width: "200px", textAlign: "left" },
                    }}
                    tableAdvancedActions={cardActions}
                  />
                )}
              </Box>
              <Box
                className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
              >
                {/* Loading state pending */}
                {isLoading.pfOverviewData ? (
                  <div className={classes.noContentBox}>
                    <CardSkeleton dynamicField={true} {...balanceData} />
                  </div>
                ) : pfOverviewData?.result?.propertyData?.length === 0 ? (
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
                      5: enable.blueLinkBalance,
                    }}
                    tableAdvancedActions={cardActions}
                  />
                )}
              </Box>
            </MKBox>
          </Grid>
        </Grid>
      </Box>
      {openModal && (
        <WithDrawModal
          open={openModal}
          backBtn={backButtonWithdrawModal}
          onClose={onCloseMainWithdrawModal}
          withdrawMethod={withdrawMethod}
          handelDepositModalSuccess={handelDepositModalSuccess}
          handleWithdraw={modalHandler}
        />
      )}
      {mainWithdrawmodal && (
        <WithdrawPaymentMethod
          setPaymentMethods={setWithdrawPaymentMethods}
          paymentMethods={withdrawPaymentMethods}
          open={mainWithdrawmodal}
          handleClose={handelMainWithdrawModal}
          setDepositMethod={setWithdrawMethod}
          handelMainDepositModalContinue={handelMainWithdrawModalContinue}
        />
      )}
      <DepositScreens open={openDeposit} setOpen={setOpenDeposit} />
    </Box>
  );
};

export default Portfolio;

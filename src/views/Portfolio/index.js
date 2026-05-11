import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Tooltip } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CottageIcon from "@mui/icons-material/Cottage";

// Static imports
import PropertyInvestModal from "components/Modal/PropertyInvestModal";
import WithDrawModal from "components/Modal/WalletModals/Withdrawmodal";
import usePaymentMethods from "_mocks/paymentMethods";
import {
  getServiceFees,
  getPFOverviewData,
  getPFListData,
  getWalletBalance,
  emailVerificationSaga,
  resendOtpSaga,
  profileFetch,
} from "store/actions";
import { ThreeDotsSpinner } from "components/Loader/GenericLoaders";
import WithdrawPaymentMethod from "components/Modal/WithdrawPaymentMethod";
import DepositModalSuccess from "components/Modal/DepositModalSuccess";
import { noTransactions } from "constants/assets";
import DynamicCard from "components/Cards/DynamicCard/PortfolioCard";
import DynamicTable from "components/DynamicTable/DynamicTable";
import MKTypography from "components/custom/MKTypography";
import CurrencyFormat from "components/CurrencyFormat";
import SearchBox from "components/custom/Search";
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import balances from "_mocks/accounts";
import toaster from "utils/toaster";
import styles from "./styles";

import {
  PortfolioRentalIncon,
  NextPayout,
  ArrowUpGreen,
  History,
  ArrowDownRed,
  NoBankCard,
  NoProperty,
} from "constants/assets";
import { routePaths } from "routes/mainRoutes/routePaths";
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
// import DepositScreens from "components/Modal/DepositScreens";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import useDebounce from "hooks/useDebounce";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import { DISABLE_INVEST } from "constants/env";

const Portfolio = () => {
  const classes = styles();
  const paymentMethodsList = usePaymentMethods();
  const withdrawPaymentMethodsList = usePaymentMethods(true).data;
  const {
    userData,
    isLoading: authLoader,
    refDetails,
  } = useSelector((state) => state.auth);
  const {
    pfOverviewData,
    isLoading,
    pfListData,
    walletBalance,
    linkedBankAccounts,
  } = useSelector((state) => state.accounts);
  const [emailVerify, setEmailVerify] = useState(false);
  // const [openDeposit, setOpenDeposit] = useState(false);
  const [investOpen, setInvestOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [mainWithdrawmodal, setMainWithdrawmodal] = useState(false);
  const [depositModalSuccess, setDepositModalSucces] = useState(false);
  const [withdrawMethod, setWithdrawMethod] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({});
  const [searchText, setSearchText] = useState("");
  // const [openProfileForm, setOpenProfileForm] = useState(false);
  const debouncedSearchText = useDebounce(searchText, 500);

  const navigate = useNavigate();
  const balanceData = balances();
  const dispatch = useDispatch();

  const otpData = {
    email: userData?.email,
  };

  const handleEmailVerificationSuccess = () => {
    setEmailVerify(false);
    dispatch(profileFetch());
  };

  const handlePhoneVerificationNext = (requestBody) => {
    dispatch(
      emailVerificationSaga({
        requestBody,
        handleSuccess: handleEmailVerificationSuccess,
        handleFail: () => {},
      })
    );
  };

  const handleResend = () => {
    const requestBody = {
      channel: "Email",
      email: userData?.email,
    };
    dispatch(resendOtpSaga({ requestBody }));
  };

  let maxCount = pfListData?.totalCount
    ? Math.ceil(Number(pfListData?.totalCount / 10))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
    dispatch(getPFListData({ page, search: debouncedSearchText }));
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  const handelDepositModalSuccess = ({ redirect }) => {
    if (redirect) {
      navigate(routePaths.TRANSACTION_HISTORY_PATH);
    } else {
      setDepositModalSucces(false);
    }
  };

  const successModalData = {
    title: "Deposit Initiated",
    subtitle:
      "Note: Wire deposits are reflected in 1-3 business days as per the bank policy.",
  };

  const handelInvestModal = () => {
    return true;
  };

  const handleInvestClick = () => {
    // if (property) {
    //   setSelectedProperty(property);
    // }
    setInvestOpen(!investOpen);
  };

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
  };

  const tableConfig = {};

  const cardConfig = {};

  const cardActions = {
    linkActions: [
      {
        name: "Buy",
        disable: DISABLE_INVEST === "true" ? true : false,
        handler: (data) => {
          if (data?.numberOfTokens !== data?.tokensSold) {
            setPropertyDetails(data);
            handleInvestClick();
          } else {
            toaster.error(
              "Property Sold Out! Visit Marketplace to Browse our offerings."
            );
          }
        },
      },
      // {
      //   name: "Vote",
      //   handler: () => {},
      //   disabled: () => true,
      // },
      
    ],
    actions: [
      {
        name: "Sell",
        handler: () => {
          // alert("Deleted");
        },
        disabled: true,
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
    dispatch(getPFListData({ page: currentPage, search: "" }));
    dispatch(getServiceFees());
    dispatch(getWalletBalance());
    dispatch(getPFOverviewData({ endpoint: "/marketplace/portfolio-summary" }));
    /* dispatch(
      commonSaga({
        endPoint: `/payment/payment-method/listMethods`,
        type: "get",
        stateObj: "bankCards",
        baseEP: "PAYMENT",
        successHandler: () => {},
      })
    ); */
  }, []);

  useEffect(() => {
    dispatch(getPFListData({ page: 1, search: debouncedSearchText }));
  }, [debouncedSearchText]);

  useEffect(() => {
    if (withdrawPaymentMethods?.length === 0)
      setWithdrawPaymentMethods(paymentMethodsList?.data || []);
  }, []);

  const handleDepositModal = (value) => {
    setOpenModal(value);
  };
  const modalHandler = (value) => {
    setOpenModal(value);
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

  const backButtonWithdrawModal = () => {
    setWithdrawPaymentMethods(withdrawPaymentMethodsList);
    setOpenModal(false);
    setMainWithdrawmodal(true);
  };

  console.log(pfOverviewData)
  return (
    <MKBox>
      <Box className={classes.paddingContainer}>
        <Box className={classes.mainContainer}>
          <Grid container spacing={2} className={classes.flexCenter}>
            <Grid item xs={12} md={12} lg={12} className={classes.flexCenter}>
              <MKBox className={classes.heading1UpperContainer}>
                <MKTypography variant="h2" className={classes.heading1}>
                  Portfolio
                </MKTypography>
                {walletBalance?.availableBalance > 0 && (
                  <MKTypography
                    component="div"
                    className={`${classes.walletBalanceText} ${classes.sectionDesktopFlex}`}
                  >
                    Wallet Balance:
                    <MKTypography
                      variant="span"
                      className={`${classes.walletBalanceValue} ${classes.sectionDesktopFlex}`}
                    >
                      {isLoading.walletBalance ? (
                        "$0"
                      ) : (
                        <CurrencyFormat
                          prefix={"$"}
                          value={walletBalance.availableBalance}
                          zeroAllowed
                        />
                      )}
                    </MKTypography>
                  </MKTypography>
                )}
                {(refDetails || userData?.affiliate) && (
                  <MKTypography
                    component="div"
                    className={`${classes.walletBalanceText} ${classes.sectionDesktopFlex}`}
                  >
                    Rewards Balance:
                    <MKTypography
                      variant="span"
                      className={classes.walletBalanceValue}
                    >
                      {isLoading.walletBalance ? (
                        "$0"
                      ) : (
                        <CurrencyFormat
                          prefix={"$"}
                          value={walletBalance.credits}
                          zeroAllowed
                        />
                      )}
                    </MKTypography>
                  </MKTypography>
                )}
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
                  id="joyride-txn-history"
                />
              </Tooltip>
            </Grid>
            <Box
              display="flex"
              flexDirection="column"
              ml={1}
              mt={1}
              className={classes.sectionMobile}
            >
              {walletBalance?.availableBalance > 0 && (
                <MKTypography
                  component="div"
                  className={`${classes.walletBalanceText} ${classes.sectionMobile}`}
                >
                  Wallet Balance:
                  <MKTypography
                    variant="span"
                    className={`${classes.walletBalanceValue}`}
                  >
                    {isLoading.walletBalance ? (
                      "$0"
                    ) : (
                      <CurrencyFormat
                        prefix={"$"}
                        value={walletBalance.availableBalance}
                        zeroAllowed
                      />
                    )}
                  </MKTypography>
                </MKTypography>
              )}
              <MKTypography
                component="div"
                className={`${classes.walletBalanceText} ${classes.sectionMobile}`}
              >
                Rewards Balance:
                <MKTypography
                  variant="span"
                  className={classes.walletBalanceValue}
                >
                  {isLoading.walletBalance ? (
                    "$0"
                  ) : (
                    <CurrencyFormat
                      prefix={"$"}
                      value={walletBalance.credits}
                      zeroAllowed
                    />
                  )}
                </MKTypography>
              </MKTypography>
            </Box>
          </Grid>
          <Grid container mt={2} id="joyride-four-fields">
            <Grid item xs={6} md={6} lg={3}>
              <Box className={classes.marketStats}>
                <Box>
                  <Tooltip
                    enterTouchDelay={0}
                    title="Sum of investments and funds in your account."
                  >
                    <MKTypography className={classes.marketStatsHead}>
                      Portfolio Value
                    </MKTypography>
                  </Tooltip>
                  <MKTypography
                    className={classes.marketStatsVal}
                    component="div"
                  >
                    {isLoading?.pfOverviewData ? (
                      <ThreeDotsSpinner isLoading={true} />
                    ) : (
                      <>
                        <span className={classes.forMWeb}>
                          ${" "}
                          {pfOverviewData?.portfolioValue > 1000000
                            ? Number(
                                pfOverviewData?.portfolioValue / 1000000
                              ).toFixed(2) + "M"
                            : pfOverviewData?.portfolioValue > 1000
                            ? Number(
                                pfOverviewData?.portfolioValue / 1000
                              ).toFixed(2) + "K"
                            : Number(pfOverviewData?.portfolioValue).toFixed(2)}
                        </span>
                        <span className={classes.forWeb}>
                          <CurrencyFormat
                            prefix={"$"}
                            value={pfOverviewData?.portfolioValue}
                            zeroAllowed
                          />
                        </span>
                        {Number(pfOverviewData?.growthPercentage) > 0 ? (
                          <MKTypography
                            component="span"
                            className={classes.statsVal}
                          >
                            <img
                              src={ArrowUpGreen}
                              className={classes.arwUpGreen}
                              alt="Stats UP"
                            />{" "}
                            {Number(pfOverviewData?.growthPercentage).toFixed(
                              2
                            )}
                            %
                          </MKTypography>
                        ) : (
                          Number(pfOverviewData?.growthPercentage) < 0 && (
                            <MKTypography
                              component="span"
                              className={classes.statsValRed}
                            >
                              <img
                                src={ArrowDownRed}
                                className={classes.arwUpGreen}
                                alt="Stats UP"
                              />{" "}
                              {Number(pfOverviewData?.growthPercentage).toFixed(
                                2
                              )}
                              %
                            </MKTypography>
                          )
                        )}
                      </>
                    )}
                  </MKTypography>
                </Box>
                <Box className={classes.iconBox}>
                  <AttachMoneyIcon fontSize="medium" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <Box className={classes.marketStats}>
                <Box>
                  <Tooltip
                    enterTouchDelay={0}
                    title="Total net income received from your portfolio."
                  >
                    <MKTypography className={classes.marketStatsHead}>
                      Rental Income
                    </MKTypography>
                  </Tooltip>
                  <MKTypography
                    className={classes.marketStatsVal}
                    component="div"
                  >
                    {isLoading?.pfOverviewData ? (
                      <ThreeDotsSpinner isLoading={true} />
                    ) : (
                      
                      <CurrencyFormat
                      prefix={"$"}
                      value={pfOverviewData?.rentalIncome ?? 0}
                      zeroAllowed
                    />
                    )}
                  </MKTypography>
                </Box>
                <Box className={classes.iconBox}>
                  <img src={PortfolioRentalIncon} alt="Currency Sign" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <Box className={classes.marketStats}>
                <Box>
                  <Tooltip
                    enterTouchDelay={0}
                    title="Rental Income + Property Appreciation = Total Return"
                  >
                    <MKTypography className={classes.marketStatsHead}>
                      Total Return
                    </MKTypography>
                  </Tooltip>
                  <MKTypography
                    className={classes.marketStatsVal}
                    component="div"
                  >
                    {isLoading?.pfOverviewData ? (
                      <ThreeDotsSpinner isLoading={true} />
                    ) : 
                    (
                      <CurrencyFormat
                        prefix={"$"}
                        value={pfOverviewData?.totalReturn ?? 0}
                        zeroAllowed

                      />
                    )}
                  </MKTypography>
                </Box>
                <Box className={classes.iconBox}>
                  <CurrencyExchangeIcon fontSize="medium" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <Box className={classes.marketStats}>
                <Box>
                  <Tooltip
                    enterTouchDelay={0}
                    title="Next anticipated date you receive rental income from your portfolio."
                  >
                    <MKTypography className={classes.marketStatsHead}>
                      Next Payout
                    </MKTypography>
                  </Tooltip>
                  <MKTypography
                    className={classes.marketStatsVal}
                    component="div"
                  >
                    {isLoading?.pfOverviewData ? (
                      <ThreeDotsSpinner isLoading={true} />
                    ) : (
                      // (pfOverviewData?.nextPayout || "N/A")
                      "Coming Soon"
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
              <MKBox mt={2}>
                <Box className={classes.searchContainer}>
                  <SearchBox value={searchText} onChange={handleSearch} />
                </Box>
                <Box className={classes.sectionDesktopFlex}>
                  {isLoading.pfListData || isLoading?.getBankAccountList ? (
                    <div className={classes.noContentBox}>
                      <TableSkeleton dynamicField={true} {...balanceData} />
                    </div>
                  ) : !pfListData?.value?.length ? (
                    linkedBankAccounts?.paymentMethods?.length === 0 ? (
                      <Box className={classes.noContentBox}>
                        <img src={NoBankCard} alt="No Data" />
                        <span className={classes.noContentText}>
                          Connect bank account or credit card to invest
                        </span>
                        <MKButton
                          variant="gradient"
                          // color="primary"
                          className={classes.browserOfferingBtn}
                          onClick={() => navigate(routePaths.ACCOUNTS_PATH)}
                        >
                          Connect Funding Method
                        </MKButton>
                      </Box>
                    ) : (
                      <Box className={classes.noContentBox}>
                        <img src={NoProperty} alt="No Data" />
                        <span className={classes.noContentText}>
                          Invest in a property to grow your net worth!
                        </span>
                        <MKButton
                          variant="gradient"
                          // color="primary"
                          className={classes.browserOfferingBtn}
                          onClick={() => navigate(routePaths.INVESTOR_PATH)}
                        >
                          <CottageIcon
                            className={classes.browserOfferingImg}
                            alt="Arrow Down"
                          />
                          Browse Offerings
                        </MKButton>
                      </Box>
                    )
                  ) : (
                    <div id="joyride13" className={classes.tableContainer}>
                      <DynamicTable
                        height="100%"
                        {...balanceData}
                        tableConfig={{
                          ...tableConfig,
                          3: enable.blueLinkBalance,
                        }}
                        headColStyle={{
                          3: { width: "200px", textAlign: "left" },
                        }}
                        paginationConfig={paginationConfig}
                        tableAdvancedActions={cardActions}
                        pagination={true}
                      />
                    </div>
                  )}
                </Box>
                <Box
                  className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
                >
                  {/* Loading state pending */}
                  {isLoading.pfListData || isLoading?.getBankAccountList ? (
                    <div className={classes.noContentBox}>
                      <CardSkeleton dynamicField={true} {...balanceData} />
                    </div>
                  ) : !pfListData?.value?.length ? (
                    !linkedBankAccounts?.paymentMethods?.length ? (
                      <Box className={classes.noContentBox}>
                        <img src={NoBankCard} alt="No Data" />
                        <span className={classes.noContentText}>
                          Connect bank account or credit card to invest
                        </span>
                        <MKButton
                          variant="gradient"
                          // color="primary"
                          className={classes.browserOfferingBtn}
                          onClick={() => navigate(routePaths.ACCOUNTS_PATH)}
                        >
                          Connect Funding Method
                        </MKButton>
                      </Box>
                    ) : (
                      <Box className={classes.noContentBox}>
                        <img src={NoProperty} alt="No Data" />
                        <span className={classes.noContentText}>
                          Invest in a property to grow your net worth!
                        </span>
                        <MKButton
                          variant="gradient"
                          // color="primary"
                          className={classes.browserOfferingBtn}
                          onClick={() => navigate(routePaths.INVESTOR_PATH)}
                        >
                          <CottageIcon
                            className={classes.browserOfferingImg}
                            alt="Arrow Down"
                          />
                          Browse Offerings
                        </MKButton>
                      </Box>
                    )
                  ) : !pfListData?.value?.length ? (
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
                    <DynamicCard
                      {...balanceData}
                      column={["Asset", "Balance", "Allocation", "Action"]}
                      cardConfig={{
                        ...cardConfig,
                        2: enable.blueLinkBalance,
                      }}
                      pagination={paginationConfig}
                      tableAdvancedActions={cardActions}
                      mainHeader={"Asset"}
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
            onClose={onCloseMainWithdrawModal}
            withdrawMethod={withdrawMethod}
            handelDepositModalSuccess={handelDepositModalSuccess}
            handleWithdraw={modalHandler}
            backBtn={backButtonWithdrawModal}
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
        {depositModalSuccess && (
          <DepositModalSuccess
            open={depositModalSuccess}
            data={successModalData}
            handelDepositModalSuccess={handelDepositModalSuccess}
          />
        )}

        {investOpen && (
          <PropertyInvestModal
            pricePerToken={propertyDetails?.pricePerToken}
            open={investOpen}
            handleClose={() => handleInvestClick()}
            id={propertyDetails?.id}
            totalSoldTokenPercantage={propertyDetails?.tokensSoldPercentage}
            numberOfTokens={propertyDetails?.numberOfTokens}
            tokensSold={propertyDetails?.tokensSold}
            property={propertyDetails}
            handleInvestClick={handelInvestModal}
            minInvestment={propertyDetails?.minInvestment || 0}
          />
        )}
        {/* <DepositScreens open={openDeposit} setOpen={setOpenDeposit} />
        <ProfileFormModal open={openProfileForm}
          successHandler={() => {
            setOpenProfileForm(false);
            setOpenDeposit(true)
          }}
          handleClose={() => {
            setOpenProfileForm(false)
          }}
        /> */}
        <PhoneNumberVerificationModal
          title="Verify Email Address"
          description={`Enter code sent to ${
            userData?.email ? userData?.email : "xxxxxxxx"
          }`}
          show={emailVerify}
          setShow={setEmailVerify}
          otpData={otpData}
          onSubmit={handlePhoneVerificationNext}
          handleResend={handleResend}
          isLoading={authLoader?.emailVerification}
          email={userData?.email}
        />
      </Box>
    </MKBox>
  );
};

export default Portfolio;

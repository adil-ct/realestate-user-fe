import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Static imports
import paymentList from "_mocks/paymentMethods";
import WithDrawModal from "components/Modal/WalletModals/Withdrawmodal";
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import DynamicCard from "components/Cards/DynamicCard/DynamicCard";
import DynamicTable from "components/DynamicTable/DynamicTable";
import balances from "_mocks/accounts";
import { walletStyles } from "./style/styles";
import WalletDepositModal from "components/Modal/WalletModals/WalletDepositModal";
import DepositModalSuccess from "components/Modal/DepositModalSuccess";
import DepositModal from "components/Modal/DepositModal";
import { depositCurrency } from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";

const Wallet = () => {
  const paymentMethodsList = paymentList().data;
  const classes = walletStyles();
  const balanceData = balances();
  const dispatch = useDispatch();

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
  const successModalData = {
    title: "Transfer Successful",
  };

  const tableConfig = {};

  const cardConfig = {};

  const cardActions = {
    linkActions: [
      {
        name: "Buy",
        handler: () => {},
      },
      // {
      //   name: "Vote",
      //   handler: () => {},
      // },
    ],
    actions: [
      {
        name: "Edit",
        handler: () => {
          // alert("Deleted");
        },
      },
    ],
  };

  const [openModal, setOpenModal] = useState(false);
  const [mainDepositmodal, setMainDepositModal] = useState(false);
  const [depositModal, setDepositModal] = useState(false);
  const [depositModalSuccess, setDepositModalSucces] = useState(false);
  const [depositMethod, setDepositMethod] = useState("");
  const navigate = useNavigate();

  const [paymentMethods, setPaymentMethods] = useState(paymentMethodsList);

  const handleWithdrawModal = (value) => {
    setDepositModal(value);
  };
  const modalHandler = (value) => {
    setOpenModal(value);
  };
  const handelDepositModalSuccess = (value) => {
    setDepositModalSucces(value);
  };

  const handleSuccess = () => {
    setDepositModal(false);
    setDepositModalSucces(true);
    setDepositMethod("");
    setPaymentMethods(paymentMethodsList);
  };
  const continueDepositModal = async (values, formik) => {
    // Endpoint according to bank type
    const endpoint =
      depositMethod === "ACH" || depositMethod === "Credit Card"
        ? "/payment/create-payment"
        : "/payment/wire-payment";

    const { DepositAmount, SelectCard } = values;
    const res = await axios.get("https://ipinfo.io/json");
    // Request body according to bank type
    const requestBody =
      depositMethod === "wire"
        ? {
            amount: {
              amount: DepositAmount,
              currency: "USD",
            },
            wireId: SelectCard,
          }
        : {
            metadata: {
              ipAddress: res.data.ip,
              // hardcoded will update with unique identifer
              sessionId: "DE6FA86F60BB47B379307F851E238617",
            },
            amount: {
              amount: DepositAmount,
              currency: "USD",
            },
            source: {
              id: SelectCard,
              type: depositMethod === "ACH" ? "ach" : "card",
            },
            description: "Payment",
          };

    await dispatch(
      depositCurrency({ endpoint, requestBody, handleSuccess, formik })
    );
  };
  const handelMainDepositModal = () => {
    setMainDepositModal(!mainDepositmodal);
    setDepositMethod("");
    setPaymentMethods(paymentMethodsList);
  };
  const handelMainDepositModalContinue = () => {
    setMainDepositModal(!mainDepositmodal);
    if (mainDepositmodal) handleWithdrawModal(true);
  };
  const backButtonModal = () => {
    setDepositModal(false);
    setMainDepositModal(true);
  };
  return (
    <>
      <MKBox component="section" pb={5} className={classes.paddingModal}>
        <MKBox alignItems="center" className={classes.mainContainerLG}>
          <MKBox alignItems="center" className={classes.subContainer}>
            <MKBox className={classes.dFlex}>
              <Typography variant="h4" className={classes.headerTitle}>
                Wallet
              </Typography>
              <MKBox position="relative" display="flex">
                <MKBox className={classes.balanceContainer}>
                  <Typography variant="h4" className={classes.header1}>
                    Cash Balance
                  </Typography>
                  <Typography variant="h4" className={classes.header2}>
                    $5,000.00
                  </Typography>
                </MKBox>
                <MKBox
                  className={`${classes.balanceContainer} ${classes.ml50}`}
                >
                  <Typography variant="h4" className={classes.header1}>
                    Asset Balance
                  </Typography>
                  <Typography variant="h4" className={classes.header2}>
                    $5,000.00
                  </Typography>
                </MKBox>
                <MKBox className={classes.width200}>
                  <Typography
                    variant="h4"
                    onClick={() => navigate(routePaths.TRANSACTION_HISTORY_PATH)}
                    className={classes.header3}
                  >
                    Transaction History
                  </Typography>
                </MKBox>
              </MKBox>
            </MKBox>

            <MKBox className={classes.dFlex1}>
              <MKButton
                variant="gradient"
                // color="primary"
                className={classes.button1}
                onClick={handelMainDepositModal}
              >
                Deposit
              </MKButton>
              <MKButton
                variant="outlined"
                // color="primary"
                className={classes.button1}
                onClick={modalHandler}
              >
                Withdraw
              </MKButton>
            </MKBox>
          </MKBox>
          <MKBox mt={5}>
            <Box className={classes.sectionDesktopFlex}>
              {/* Loading state pending */}
              <DynamicTable
                height="100%"
                {...balanceData}
                tableConfig={{
                  ...tableConfig,
                  3: enable.blueLinkBalance,
                }}
                tableAdvancedActions={cardActions}
              />
            </Box>
            <Box
              className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
            >
              {/* Loading state pending */}
              <DynamicCard
                {...balanceData}
                cardConfig={{
                  ...cardConfig,
                  3: enable.blueLinkBalance,
                }}
              />
            </Box>
          </MKBox>
        </MKBox>
        <WithDrawModal
          open={openModal}
          handelDepositModalSuccess={handelDepositModalSuccess}
          handleWithdraw={modalHandler}
        />
        <DepositModal
          setPaymentMethods={setPaymentMethods}
          paymentMethods={paymentMethods}
          open={mainDepositmodal}
          handleClose={handelMainDepositModal}
          setDepositMethod={setDepositMethod}
          handelMainDepositModalContinue={handelMainDepositModalContinue}
        />

        {depositMethod === "ACH" || depositMethod === "wire" ? (
          <WalletDepositModal
            open={depositModal}
            handleWithdraw={handleWithdrawModal}
            confirm={continueDepositModal}
            depositMethod={depositMethod}
            type="Bank"
            backBtn={backButtonModal}
            setDepositMethod={setDepositMethod}
          />
        ) : (
          <WalletDepositModal
            open={depositModal}
            handleWithdraw={handleWithdrawModal}
            confirm={continueDepositModal}
            depositMethod={depositMethod}
            setDepositMethod={setDepositMethod}
            type="Card"
            backBtn={backButtonModal}
          />
        )}
        <DepositModalSuccess
          open={depositModalSuccess}
          data={successModalData}
          handelDepositModalSuccess={handelDepositModalSuccess}
        />
      </MKBox>
    </>
  );
};

export default Wallet;

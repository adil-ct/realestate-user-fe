import { useRef, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { loadStripeOnramp } from '@stripe/crypto';
import { Typography } from "@mui/material";
import io from "socket.io-client";

// Static imports
import { SOCKET_URL } from "constants/env";
import MKBox from "components/custom/MKBox";
import CloseButton from "components/CloseButton";
import { STRIPE_KEY } from "constants/env";
import toaster from "utils/toaster";
import { CryptoElements, OnrampElement } from './StripeCryptoElements';
import { WithdrawModuls } from "./styles/styles";

const stripeOnrampPromise = loadStripeOnramp(STRIPE_KEY);

// eslint-disable-next-line no-unused-vars
const DepositViaStripe = ({ open: show, backBtn, onClose, clientSecret, amount,
  handleSuccessTransaction = () => {
    toaster.success("Success deposit");
  },
  handleFailedTransaction = () => {
    toaster.error("Failed deposit");
  }, }) => {
  
  const classes = WithdrawModuls();
  const [connected, setConnected] = useState(false);
  const transIdRef = useRef("");
  const transStatusRef = useRef("");

  const handleClick = () => {
    onClose();
    if(transIdRef.current.length > 0) toaster.info("Transaction is in progress. You will receive the notification once the deposit is success!")
  };

  console.log("Socket connection status", connected);

  useEffect(() => {
    // establish socket connection
    const userId = localStorage.getItem("userId");
    const socket = io(`${SOCKET_URL}?path=stripe&userId=${userId}`);
    socket.on("connect", () => {
      setConnected(true);
    });

    // listen for 'new-message' event
    socket.on("stripe", (data) => {
      // console.log("data", data,transIdRef.current,transStatusRef.current  );
      // Created a transactionId to validate once transaction is completed
      if (
        transIdRef.current.length === 0 &&
        transStatusRef.current.length === 0 &&
        data.message === "Stripe transaction initiated"
      ) {
        toaster.info("Transaction created");
        transIdRef.current = data?.id;
        transStatusRef.current = data?.status;
      }
      // Transaction completed successfully
      if (
        transIdRef.current.length &&
        transStatusRef.current.length &&
        data.status === "completed"
      ) {
        transIdRef.current = "";
        transStatusRef.current = "";
        handleSuccessTransaction();
      }

      // Transaction failed
      if (
        transIdRef.current.length &&
        transStatusRef.current.length &&
        data.status === "failed"
      ) {
        transIdRef.current = "";
        transStatusRef.current = "";
        handleFailedTransaction();
      }
    });

    // clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Dialog
      open={show}
      aria-labelledby="responsive-dialog-title"
      className={classes.mainDialog3}
    >
      <MKBox height="100%">
        <MKBox
          display="flex"
          justifyContent="space-between"
          top="30px"
          left={30}
        >
          <Typography
            variant="button"
            className={classes.backButton}
            display="flex"
            alignItems="center"
            onClick={() => {
              backBtn();
              if(transIdRef.current.length > 0) toaster.info("Transaction is in progress. You will receive the notification once the deposit is success!")
            }}
          >
            <ArrowBackIosIcon />
            Back
          </Typography>
          <CloseButton
            className={classes.closeIcon1}
            P={3}
            onClick={handleClick}
          />
        </MKBox>
        <div>
          <CryptoElements stripeOnramp={stripeOnrampPromise}>
            <OnrampElement clientSecret={clientSecret} />
          </CryptoElements>
        </div>
      </MKBox>
    </Dialog>
  );
};

export default DepositViaStripe;

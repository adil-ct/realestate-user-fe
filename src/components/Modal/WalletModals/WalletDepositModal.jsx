import React, { useEffect, useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";
import io from "socket.io-client";

// Static imports
import { SOCKET_URL } from "constants/env";
import MKBox from "components/custom/MKBox";
import CloseButton from "components/CloseButton";
import { WithdrawModuls } from "./styles/styles";
import toaster from "utils/toaster";

const WalletDepositModal = ({
  open: show,
  backBtn,
  onClose,
  url,
  handleSuccessTransaction = () => {
    toaster.success("Success deposit");
  },
  handleFailedTransaction = () => {
    toaster.error("Failed deposit");
  },
}) => {
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
    const socket = io(`${SOCKET_URL}?path=moonpay&userId=${userId}`);
    socket.on("connect", () => {
      setConnected(true);
    });

    // listen for 'new-message' event
    socket.on("moonpay", (data) => {
      // Created a transactionId to validate once transaction is completed
      if (
        transIdRef.current.length === 0 &&
        transStatusRef.current.length === 0 &&
        data.message === "Moonpay transaction created"
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
              if(transIdRef.current.length > 0) toaster.info("Transaction is still in progress. You will receive the notification once the deposit is success!")
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
        <div className={classes.iframeContainer}>
          <iframe
            src={url}
            scrolling="no"
            className={classes.iframeStyle}
          ></iframe>
        </div>
      </MKBox>
    </Dialog>
  );
};

export default WalletDepositModal;

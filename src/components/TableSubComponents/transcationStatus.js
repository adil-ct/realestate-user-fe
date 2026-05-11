import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

import MKBox from "components/custom/MKBox";

import { transcationStatus } from "./style";
import { POLYGONSCAN_URL } from "constants/env";

const transcationStatusData = (props) => {
  const classes = transcationStatus();
  const { txn, txnType } = props;

  const getStatusText = () => {
      return txn?.status === "complete" ||
        txn?.status === "completed" ||
        txn?.status === "confirmed" ||
        txn?.status === "paid" || 
        txn?.status === "succeeded"
        ? "Completed"
        : txn?.status === "failed"
        ? "Failed"
        : "Pending";
  };

  const getStatusClass = () => {
      return txn?.status === "complete" ||
        txn?.status === "completed" ||
        txn?.status === "confirmed" ||
        txn?.status === "paid" ||
        txn?.status === "succeeded"
        ? classes.statusComplet
        : txn?.status === "failed"
        ? classes.statusFail
        : classes.statusPending;
  };

  const handleRedirect = (trxHash) => {
    if (["marketplace", "crowdsale_success", "cashflow"].includes(txnType)) {
      window.open(`${POLYGONSCAN_URL}/tx/${trxHash}`);
    }
  };

  return (
    <>
      <MKBox className={classes.amountMainSection}>
        <Tooltip
          title={txn?.transactionHash}
          disableHoverListener={["Deposit", "Withdrawal"].includes(txnType)}
        >
          <Link
            href="#"
            onClick={() => handleRedirect(txn?.transactionHash)}
            underline="none"
            className={getStatusClass()}
          >
            {getStatusText()}
          </Link>
        </Tooltip>
      </MKBox>
      {/* <MKBox className={classes.amountMainSection} >
              <Link href="#" underline="none" className={classes.statusPending}>
               Pending
              </Link>
              </MKBox> */}
    </>
  );
};

export default transcationStatusData;

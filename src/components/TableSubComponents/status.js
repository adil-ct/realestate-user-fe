import React from "react";
import { Typography } from "@mui/material";

import MKBox from "components/custom/MKBox";

import { transcationStatus } from "./style";

const transcationStatusData = (props) => {
  const classes = transcationStatus();
  const { type, result } = props;
  const getStatusClass = () => {
    return type === "complete" ||
      type === "Approved" ||
      type === "confirmed" ||
      type === "completed" ||
      type === "Completed" ||
      type === "paid"
      ? classes.statusComplet
      : type === "Rejected"
      ? classes.statusFail
      : type === "Pending"
      ? classes.statusPending
      : classes.statusPending;
  };

  const getStatusText = () => {
    return type === "complete" ||
      type === "Approved" ||
      type === "confirmed" ||
      type === "completed" ||
      type === "Completed" ||
      type === "paid"
      ? result
        ? result
        : "N/A"
      : type === "Rejected"
      ? "Rejected"
      : type
      ? type.charAt(0).toUpperCase() + type.slice(1)
      : "N/A";
  };
  return (
    <>
      <MKBox className={classes.amountMainSection}>
        {
          <Typography className={getStatusClass()}>
            {getStatusText()}
          </Typography>
        }
      </MKBox>
    </>
  );
};

export default transcationStatusData;

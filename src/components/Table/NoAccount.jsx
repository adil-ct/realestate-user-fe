import React from "react";

// Static imports
import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import { Bank, Card } from "constants/assets";
import { CREDIT_CARD_MODE } from "constants/env";
import styles from "./styles";

const EmptyTable = ({ type, noDataHandler }) => {
  const classes = styles();

  return (
    <MKBox className={classes.emptyTableContainer}>
      <MKBox fontSize={50} mt={"30px"}>
        <img
          src={type === "Bank" ? Bank : Card}
          alt="No Data"
          style={{ cursor: "pointer" }}
          onClick={() => {
            noDataHandler(true);
          }}
        />
      </MKBox>
      <MKTypography
        variant="h7"
        className={classes.noAccount}
        onClick={() => {
          noDataHandler(true);
        }}
      >
        {type === "Bank"
          ? "Connect an Account to Get Started"
          : CREDIT_CARD_MODE === "false"
          ? "Coming Soon"
          : "Alternatively, Connect a Credit / Debit Card to Get Started"}
      </MKTypography>
    </MKBox>
  );
};

export default EmptyTable;

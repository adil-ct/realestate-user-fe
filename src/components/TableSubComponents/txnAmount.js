import React from "react";
import { Typography } from "@mui/material";

// Static imports
import MKBox from "components/custom/MKBox";
import CurrencyFormat from "components/CurrencyFormat";
import { historyMock } from "./style";

const TxnAmount = (props) => {
  const { symbol, amount } = props;
  const classes = historyMock();
  return (
    <MKBox className={classes.arrowTopSection}>
      <Typography variant="span" className={classes.amountMain}>
          {symbol === "+" ? <span className={classes.plus}>+</span> : <span className={classes.minus}>-</span>}
        {<CurrencyFormat prefix={"$"} value={amount} />}
      </Typography>
    </MKBox>
  );
};

export default TxnAmount;

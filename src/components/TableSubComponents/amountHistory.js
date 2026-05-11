import React from "react";
import { Typography, Tooltip } from "@mui/material";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthIcon from '@mui/icons-material/South';

// Static imports
import MKBox from "components/custom/MKBox";
import CurrencyFormat from "components/CurrencyFormat";
import { historyMock } from "./style";

const amountData = (props) => {
  const { type, amount, tooltip, credits } = props;
  const classes = historyMock();
  return (
    <MKBox className={classes.arrowTopSection}>
      <Tooltip title={tooltip ? <div>
        <b>Purchase Break-down</b>
        <p>Amount: <CurrencyFormat prefix={"$"} value={amount - credits} /></p>
        <p>Credits Used: <CurrencyFormat prefix={"$"} value={credits} /></p>
      </div> : ""} >
        <Typography variant="h7" className={classes.amountMain}>
          {<CurrencyFormat prefix={"$"} value={amount} zeroAllowed />}
        </Typography>
      </Tooltip>
      <MKBox className={classes.amountMainSection}>
        <MKBox className={classes.arrowColour}>
          {type ? (<SouthIcon/>) :(<NorthEastIcon/>) }
        </MKBox>
      </MKBox>
    </MKBox>
  );
};

export default amountData;

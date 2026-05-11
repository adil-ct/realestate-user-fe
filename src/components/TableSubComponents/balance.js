import React from "react";

// Static imports
import MKTypography from "components/custom/MKTypography";
import { historyMock } from "./style";
import MKBox from "components/custom/MKBox";
import CurrencyFormat from "components/CurrencyFormat";

const amountData = (props) => {
  const classes = historyMock();
  const { ele } = props;
  return (
    <MKBox className={classes.alignCenter}>
      <MKTypography className={classes.mainBal} component="span" fontWeight="bold">
        <CurrencyFormat
          value={ele?.balance}
          zeroAllowed
          onlyComma
          noSpan={true}
        />
      </MKTypography>
      <MKTypography className={classes.diffVal} component="span">
        <CurrencyFormat
            prefix={"$"}
            value={ele?.balance}
            zeroAllowed
            onlyComma
            noSpan={true}
          />
        {/* <img
          src={ele?.stats == "up" ? ArrowUpGreenSm : ArrowDownRed}
          alt="Stats"
        /> */}
      </MKTypography>
    </MKBox>
  );
};

export default amountData;

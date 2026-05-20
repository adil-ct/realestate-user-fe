import React from "react";

// Static imports
import MKTypography from "components/custom/MKTypography";
import { historyMock } from "./style";
import MKBox from "components/custom/MKBox";
import CurrencyFormat from "components/CurrencyFormat";

const amountData = (props) => {
  const classes = historyMock();
  const { ele } = props;
  const hasTotalTokens =
    ele?.totalTokens !== undefined && ele?.totalTokens !== null;
  return (
    <MKBox className={classes.alignCenter}>
      <MKTypography className={classes.mainBal} component="span" fontWeight="bold">
        <CurrencyFormat
          value={ele?.balance}
          zeroAllowed
          onlyComma
          noSpan={true}
        />
        {hasTotalTokens && (
          <>
            {" / "}
            <CurrencyFormat
              value={ele?.totalTokens}
              zeroAllowed
              onlyComma
              noSpan={true}
            />
          </>
        )}
      </MKTypography>
      {!hasTotalTokens && (
        <MKTypography className={classes.diffVal} component="span">
          <CurrencyFormat
            prefix={"$"}
            value={ele?.diff}
            zeroAllowed
            onlyComma
            noSpan={true}
          />
        </MKTypography>
      )}
    </MKBox>
  );
};

export default amountData;

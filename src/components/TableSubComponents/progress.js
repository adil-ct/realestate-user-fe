import React from "react";
import MKProgress from "components/custom/MKProgress";
import { Tooltip } from "@material-ui/core";

// Static imports
import MKBox from "components/custom/MKBox";
import { historyMock } from "./style";

const amountData = (props) => {
  const classes = historyMock();
  const { value, decimalAllowed = false } = props;
  const numericValue = Number.isFinite(Number(value)) ? Number(value) : 0;
  const clamped = Math.max(0, Math.min(100, numericValue));
  return (
    <MKBox className={classes.progressBox}>
      <Tooltip
        className={classes.textOnlyTooltip}
        title={
          <>
            {decimalAllowed ? clamped.toFixed(2) : Math.floor(clamped)}%
          </>
        } placement="bottom"
      >
        <MKProgress variant="contained" value={clamped} />
      </Tooltip>
    </MKBox>
  );
};

export default amountData;

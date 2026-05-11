import React from "react";
import MKProgress from "components/custom/MKProgress";
import { Tooltip } from "@material-ui/core";

// Static imports
import MKBox from "components/custom/MKBox";
import { historyMock } from "./style";

const amountData = (props) => {
  const classes = historyMock();
  const { value, decimalAllowed = false } = props;
  return (
    <MKBox className={classes.progressBox}>
      <Tooltip
        className={classes.textOnlyTooltip}
        title={
          <>
            {/* <span>$</span> */}
            {decimalAllowed ? value?.toFixed(2) : Math.floor(value)}%
          </>
        } placement="bottom"
      >
        <MKProgress variant="contained" value={value} />
      </Tooltip>
    </MKBox>
  );
};

export default amountData;

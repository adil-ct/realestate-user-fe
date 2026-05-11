import React from "react";

import { POLYGONSCAN_URL } from "constants/env";
import { historyMock } from "./style";

const TransactionItem = (props) => {
  const { value, noLink } = props;
  const classes = historyMock();
  return (
    !noLink ? <a
      rel="noreferrer"
      href={POLYGONSCAN_URL + "/tx/" + value}
      target="_blank"
      className={classes.txnItem}
    >
      {value?.substr(0, 6) +
        "......" +
        value?.substr(value?.length - 4, value?.length)}
    </a > : <p>{value ? value : "- -"}</p>
  );
};

export default TransactionItem;

import React from "react";
import styles from "./style"

const ComingSoon = () => {
  const classes = styles();
  return (
    <div className={classes.bannerBox}>
      <h1>Coming soon</h1>
    </div>
  );
};

export default ComingSoon;

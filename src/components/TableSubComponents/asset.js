import { NavLink } from "react-router-dom";
import React from "react";

// Static imports
import { Trending1 } from "constants/assets";
import { historyMock } from "./style";

const amountData = (props) => {
  const { index, title, icon, to } = props;
  const classes = historyMock();
  return (
    <div className={classes.assetBox} key={index}>
      <NavLink key={"Details Page"} className={classes.assetText} to={to}>
        <img
          src={icon || Trending1}
          alt="home"
          className={classes.assetImage}
        />
        {title || "Property Title"}
      </NavLink>
    </div>
  );
};

export default amountData;

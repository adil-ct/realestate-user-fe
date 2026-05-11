import React from "react";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

// Static imports
import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import styles from "./styles";

const EmptyTable = () => {
  const classes = styles();

  return (
    <MKBox className={classes.emptyTableContainer}>
      <MKBox fontSize={50}>
        <StorageRoundedIcon />
      </MKBox>
      <MKTypography variant="span" mt={1} className={classes.colorGray}>
        No Data Yet!
      </MKTypography>
    </MKBox>
  );
};

export default EmptyTable;

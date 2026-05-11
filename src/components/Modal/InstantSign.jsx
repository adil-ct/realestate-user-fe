import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React from "react";

import { ThreeDotsSpinner } from "components/Loader/GenericLoaders";
import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import styles from "./styles";

const InstantSignIn = ({
  open,
}) => {
  const classes = styles();
  return (
    <Dialog
      open={open}
      aria-labelledby="responsive-dialog-title"
      maxWidth="670px"
      className={classes.mainDialog}
    >
      <MKBox
        display="flex"
        justifyContent="right"
        top={30}
        left={30}
        sx={{ alginItems: "center" }}
      >
      </MKBox>
        <DialogTitle display="flex" justify="center" alignItems="center">
          <MKTypography
            variant="h3"
            align="center"
          >
            Single Sign-On
          </MKTypography>
        </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        alignItems="center"
        className={classes.flexBox1}
      >
        <Typography
          variant="body2"
          // color="text"
          textAlign="center"
          className={classes.subTitleSso}
        >
          Please hold for a moment, while we finalize your account
        </Typography>
        <ThreeDotsSpinner isLoading={true} /> 
      </DialogContent>
    </Dialog>
  );
};

export default InstantSignIn;

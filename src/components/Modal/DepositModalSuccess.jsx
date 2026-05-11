import React from "react";
import { Dialog, DialogTitle, Typography } from "@mui/material";
// Static inputs
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import { check } from "constants/assets";
import styles from "./styles";

const DepositModalSuccess = ({
  open,
  data,
  handelDepositModalSuccess,
}) => {
  const classes = styles();
  const { title, subtitle } = data;
  const handleClick = () => {
    handelDepositModalSuccess({ redirect: false });
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="responsive-dialog-title"
      className={classes.mainDialog2}
    >
      <MKBox display="flex" justifyContent="end" top="30px" left={30}>
        <CloseButton
          className={classes.closeIconRight}
          P={3}
          onClick={handleClick}
        />
      </MKBox>
      <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.imgContainer}
      >
        <img
          src={check}
          className={classes.checkedCircleStyle1}
          alt="green_checked_icon"
        />
      </MKBox>
      <DialogTitle
        display="flex"
        justify="center"
        alignItems="center"
        className={classes.dilogTitle3}
      >
        <MKTypography
          variant="h3"
          align="center"
          className={classes.mainTitle2}
        >
          {title}
        </MKTypography>
      </DialogTitle>
      {subtitle && (
        <Typography
          variant="h2"
          className={classes.subHeader1}
          display="flex"
          alignItems="center"
        >
          {subtitle}
        </Typography>
      )}
      <MKBox
        display="flex"
        justifyContent="center"
        className={classes.buttonContainer1}
      >
        <MKButton
          variant="gradient"
          // color="primary"
          size="medium"
          className={classes.depositModalSuccessBtn}
          onClick={() => handelDepositModalSuccess({ redirect: true })}
        >
          <ButtonSpinner
            text="Done"
            classes={classes.navigateLogin}
            isLoading={false}
          />
        </MKButton>
      </MKBox>
    </Dialog>
  );
};

export default DepositModalSuccess;

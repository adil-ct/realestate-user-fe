import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
// Static inputs
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import { check } from "constants/assets";
import styles from "./styles";
import { routePaths } from "routes/mainRoutes/routePaths";

const DepositModalSuccess = ({
  open,
  data,
  handleClose,
}) => {
  const classes = styles();
  const { title } = data;
  const navigate = useNavigate();

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
          onClick={handleClose}
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
          onClick={() => {
            navigate(routePaths.INVESTOR_PATH);
            handleClose();
          }}
        >
          <ButtonSpinner
            text="Browse More Offerings"
            classes={classes.navigateLogin}
            isLoading={false}
          />
        </MKButton>
      </MKBox>
    </Dialog>
  );
};

export default DepositModalSuccess;

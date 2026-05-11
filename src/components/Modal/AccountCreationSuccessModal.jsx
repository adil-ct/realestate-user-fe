import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CircularProgress } from "@mui/material";

// Static imports
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import styles from "./styles";

const ConfirmationModal = ({
  open,
  data,
  isLoading,
  btnName,
  handleSubmit,
  handleClose,
  showCloseIcon,
  isBtnLoading,
  disabled
}) => {
  const { img, subtitle } = data;
  const classes = styles();

  return (
    <Dialog
      open={open}
      aria-labelledby="responsive-dialog-title"
      maxWidth="670px"
      className={classes.mainDialog}
    >
      {
        showCloseIcon && 
          <MKBox className={classes.closeIconContainer}>
            <CloseButton
              className={classes.closeIconRight}
              onClick={handleClose}
            />
          </MKBox>
      }
      {isLoading ? (
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
          sx={{ minHeight: "250px" }}
        >
          <CircularProgress />
        </MKBox>
      ) : (
        <>
          {img && (
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
            >
              <img
                src={img}
                className={classes.checkedCircleStyle1}
                alt="green_checked_icon"
              />
            </MKBox>
          )}
          {subtitle && (
            <DialogContent
              display="flex"
              justify="center"
              p={2}
              alignItems="center"
            >
              <MKTypography
                variant="body2"
                // color="text"
                textAlign="center"
                className={classes.subtitle1}
              >
                {subtitle()}
              </MKTypography>
            </DialogContent>
          )}
          <MKBox
            display="flex"
            justifyContent="center"
            className={classes.buttonContainer}
            p={2}
          >
            <MKButton
              variant="gradient"
              // color="primary"
              size="medium"
              // customSize="200px"
              onClick={handleSubmit}
              disabled={disabled}
            >
              <ButtonSpinner
                text={btnName}
                classes={classes.navigateLogin}
                isLoading={isBtnLoading}
              />
            </MKButton>
          </MKBox>
        </>
      )}
    </Dialog>
  );
};

export default ConfirmationModal;

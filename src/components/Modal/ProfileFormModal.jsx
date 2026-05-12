import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

// Static imports
import { styles } from "./styles";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import ProfileForm from "views/profile/profileForm";

const ProfileFormModal = ({ open, handleClose, successHandler }) => {
  const classes = styles();

  return (
    <>
      <Dialog open={open} className={classes.mainDialog4}>
        <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
          <CloseButton
            className={classes.closeIconRight}
            onClick={handleClose}
          />
        </MKBox>
        <DialogTitle
          display="flex"
          justify="center"
          flexDirection="column"
          className={classes.dialogTitle}
        >
          <MKTypography
            variant="h3"
            align="center"
            className={classes.depositModalTitle}
          >
            Complete Investor Profile
          </MKTypography>
          <MKTypography
            variant="h3"
            align="center"
            className={classes.profileSubtitle}
          >
            For your first investment on Occurrence, we need to create your
            investor profile. Once completed, you can add your payment method
            and checkout
          </MKTypography>
        </DialogTitle>
        <DialogContent
          display="flex"
          justify="center"
          p={0}
          className={classes.dialogContent1}
        >
          <ProfileForm modal handler={successHandler} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileFormModal;

import React from "react";

import { Dialog, DialogContent, DialogTitle,} from "@mui/material";
import { Grid } from "@mui/material";
// Static imports
import MKTypography from "components/custom/MKTypography";
import { ReferralVerify } from "constants/assets";
import MKBox from "components/custom/MKBox";
import { styles } from "./styles";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";

const VerifyReferralModal = ({ open, handleClose, email, resendEmail }) => {
  const classes = styles();

  return (
    <Dialog open={open} fullWidth={true} maxWidth={"xl"} onClose={handleClose} className={classes.referralDialog}>
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle display="flex" justify="center" className={classes.dialogTitle}>
        <MKTypography variant="h3" align="center" className={classes.referralTitle}>
          Check your email
        </MKTypography>
      </DialogTitle>

      <DialogContent display="flex" justify="center" p={2} className={classes.dialogContent}>
        <Grid container className={classes.progressContainer}>
            <Grid item xs={12}>
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.imgContainer}
              >
                <img
                  src={ReferralVerify}
                  alt="Referral Verify Email"
                  className={classes.emailVerify}
                />
              </MKBox>
            </Grid>
            <MKTypography align="center" className={classes.infoText}>
              We sent a verification link to <strong>{email}</strong>.
            </MKTypography>
            <MKTypography align="center" className={classes.infoLabel}>
              Check your email and click the verification link button to continue creating your account.
            </MKTypography>
        </Grid>
        <MKBox display="flex" justifyContent="center">
          <MKButton variant="gradient" className={classes.depoitContinueBtnRef} onClick={resendEmail} /*color="primary"*/ size="medium">
            Resend Verification Email
          </MKButton>
        </MKBox>
        {/* <MKTypography align="center" fontSize="14px">
          Wrong email address? <span className={classes.blueText}>Back to signup</span>
        </MKTypography> */}
      </DialogContent>
    </Dialog>
  );
};

export default VerifyReferralModal;

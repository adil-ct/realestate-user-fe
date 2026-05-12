import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

// Static imports
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import { styles } from "./styles/modalStyle";
import { ArrowRight } from "constants/assets";
import { earlyAccessSubscribe } from "store/actions";
import { MOGUL_SUPPORT_EMAIL } from "constants/env";

const EarlyAccessModal = ({ open, handleClose }) => {
  const classes = styles();
  const [userEmail, setUserEmail] = useState("");
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSuccess = () => {
    handleClose();
  };

  const handleSubscribe = () => {
    const requestBody = {
      email: userEmail,
    };
    dispatch(
      earlyAccessSubscribe({ requestBody, successHandler: handleSuccess }),
    );
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <MKBox display="flex" justifyContent="right">
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle
        display="flex"
        justify="center"
        className={classes.dialogTitle2}
      >
        <MKTypography
          variant="h3"
          align="center"
          className={classes.depositModalTitle}
        >
          Welcome to Occurrence
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContent}
      >
        <MKBox display="flex" className={classes.depositSelectBox3}>
          <MKBox className={classes.selectBoxMainContainer}>
            <MKBox display="flex" alignItems="center">
              <MKTypography className={classes.choose2FAOption}>
                Unfortunately, you did not sign up for early access through our
                waitlist. If you think this is a mistake, please reach out to{" "}
                <Typography
                  component="a"
                  href={`mailto:${MOGUL_SUPPORT_EMAIL}`}
                  className={classes.linkColor}
                >
                  {MOGUL_SUPPORT_EMAIL}{" "}
                </Typography>
              </MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center">
              <MKTypography className={classes.OrText}>Or</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center">
              <MKTypography className={classes.choose2FAOption}>
                Sign up for early access, and we will notify you if you make it
                up the waitlist
              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
        <MKBox display="flex" justifyContent="center" sx={{ margin: "10px" }}>
          <TextField
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email Address"
            className={`${classes.emailInput}`}
            variant="outlined"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <div
                    onClick={handleSubscribe}
                    className={classes.headerButton2}
                  >
                    {isLoading.earlyAccessSubscribe ? (
                      <CircularProgress
                        size={20} /*style={{ color: "black" }}*/
                      />
                    ) : (
                      <img
                        src={ArrowRight}
                        alt="up"
                        className={classes.arrowIcon}
                      />
                    )}
                  </div>
                </InputAdornment>
              ),
            }}
          />
        </MKBox>
      </DialogContent>
    </Dialog>
  );
};
export default EarlyAccessModal;

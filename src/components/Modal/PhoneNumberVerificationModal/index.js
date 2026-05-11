import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import OTPInput from "otp-input-react";

// Material Kit 2 React components
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import { hideModal } from "store/actions";
import styles from "./styles";

function PhoneNumberVerificationModal({
  show,
  setShow,
  otpData,
  title,
  btnText = "Verify",
  description = "Enter code sent to mobile",
  onSubmit,
  handleResend,
  showResendBtn = true,
  isLoading = false,
  email = "",
}) {
  const classes = styles();
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [isCodeResent, setIsCodeResent] = useState(false);
  const [time, setTime] = useState(email ? 0 : 30);
  const [timer, setTimer] = useState("");
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShow(false);
    dispatch(hideModal());
    setOtp();
    clearTimeout(timer);
    // setTimer(
    //   setTimeout(() => {
    //     setTime(0);
    //   }, 1000)
    // );
    setTime(30);
  };

  useEffect(() => {
    if (time && show) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          setTime(time - 1);
        }, 1000)
      );
    }
  }, [time, show]);

  const handleChange = (e) => setOtp(e);

  // Success handler once otp is resent
  // const handleResendCodeSuccess = () => {
  //   setIsCodeResent(false);
  // };

  // Fail handler once otp is not resent
  // const handleResendCodeFail = () => {
  //   setIsCodeResent(false);
  // };

  // // Success handler once otp is verified
  // const handleOTPVerifySuccess = () => {
  //   handleSuccess(setOtp);
  // };

  // Phone Verification api handler
  const Submit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setErrorMessage("Code should be 6 digits");
    } else {
      setErrorMessage(null);
      const requestBody = email?.length > 0 ? {
        otp: Number(otp),
        email,
      } : { ...otpData, channel: "sms", code: otp };
      onSubmit(requestBody);
    }
  };

  // Resend Otp handler
  const resendOtp = (event) => {
    event.preventDefault();
    handleResend();
    setIsCodeResent(true);
    setTime(30);
  };

  useEffect(() => {
    if (!show) {
      setOtp("")
    }
  }, [show])

  return (
    <Dialog
      open={show}
      aria-labelledby="responsive-dialog-title"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px", // Set your width here
          },
        },
      }}
    >
      <MKBox
        display="flex"
        justifyContent="right"
        top={30}
        left={30}
        sx={{ alginItems: "center" }}
      >
        <CloseButton
          className={classes.closeIcon}
          onClick={toggleModal}
        />
      </MKBox>
      <MKBox component="form">
        <DialogTitle
          display="flex"
          justifyContent="center"
          sx={{ alginItems: "center" }}
          component="div"
        >
          <MKTypography
            variant="h3"
            align="center"
            width={670}
            sx={{
              fontWeight: 700,
              fontSize: "30px",
              marginBottom: "20px",
              "@media (max-width:600px)": {
                fontSize: "20px",
                fontWeight: "600",
              },
            }}
          >
            {title}
          </MKTypography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            variant="description"
            textAlign="center"
            sx={{
              // color: "#4F4F4F",
              fontWeight: 400,
              fontSize: "16px",
              marginBottom: "20px",
              "@media (max-width:600px)": {
                fontSize: "14px",
              },
            }}
          >
            {description}
          </DialogContentText>
        </DialogContent>
        <MKBox
          display="flex"
          justifyContent="center"
          p={2}
          sx={{
            alignItems: "flex-end",
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "column",
          }}
        >
          <OTPInput
            value={otp}
            onChange={(e) => handleChange(e)}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            inputStyles={{
              // border: "1px solid #C4C4C4",
              // "&:hover": {
              //   border: "red",
              // },
              borderRadius: "4px",
              width: 36,
              height: 36,
              marginLeft: "10px",
              marginRight: "0px",
            }}
            containerStyle={{
              justifyContent: "space-between",
              width: "100%",
              maxWidth: 360,
            }}
          />
          {showResendBtn && (
            <MKBox textAlign="right" mb={0}>
              {time ? (
                <MKTypography
                  component="a"
                  href="#"
                  variant="description"
                  fontWeight="regular"
                  // sx={{ color: "#939090" }}
                  disabled={isCodeResent}
                >
                  Resend in <b>{time} secs</b>
                </MKTypography>
              ) : (
                <MKTypography
                  component="a"
                  href="#"
                  variant="description"
                  fontWeight="regular"
                  className={classes.resendLink}
                  // sx={{ color: "#2D9CDB" }}
                  onClick={resendOtp}
                >
                  Resend Code
                </MKTypography>
              )}
            </MKBox>
          )}
        </MKBox>
        <MKBox display="flex" justifyContent="center" p={1} mt={2} mb={3}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={6} lg={6} md={6} sm={6}>
              <MKButton
                type="submit"
                onClick={Submit}
                variant="gradient"
                // color="primary"
                fullWidth
              >
                <ButtonSpinner text={btnText} isLoading={isLoading} />
              </MKButton>
            </Grid>
          </Grid>
        </MKBox>
        {errorMessage ? (
          <MKBox textAlign="center" mb={5}>
            <MKTypography variant="h6" fontWeight="regular" /*color="error"*/>
              {errorMessage}
            </MKTypography>
          </MKBox>
        ) : null}
      </MKBox>
    </Dialog>
  );
}

export default PhoneNumberVerificationModal;

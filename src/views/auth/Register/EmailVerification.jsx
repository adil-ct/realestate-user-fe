import { useState, useEffect } from "react";
import OTPInput from "otp-input-react";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import Logo from "components/Logo";
import HeadingLayout from "components/HeadingLayout/HeadingLayout";
import { sendOTP, verifyOTPSaga, showModal } from "store/actions";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import RegistrationSuccessModel from "components/Modal/RegistrationSuccessModel";
import { routePaths } from "routes/mainRoutes/routePaths";

// styles
import { styles } from "./styles/emailVerificationStyles";
import "../styles/style.css";
// import "react-phone-input-2/lib/material.css";

function EmailVerification() {
  const classes = styles();
  const { isLoading } = useSelector((state) => state.auth);
  const { modalName } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data, type } = state || "";
  const { email, mobileNumber, countryCode } = data || "";
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(30);
  const [timer, setTimer] = useState("");
  const [isCodeResent, setIsCodeResent] = useState(false);

  useEffect(() => {
    if (time) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          setTime(time - 1);
        }, 1000)
      );
    }
  }, [time]);

  const handleChange = (e) => setOtp(e);

  // Success handler once otp is resent
  const handleResendCodeSuccess = () => {
    setIsCodeResent(false);
  };

  // Fail handler once otp is not resent
  const handleResendCodeFail = () => {
    setIsCodeResent(false);
  };

  // Success Handler once 2FA code is sent to user
  const handleOtpSendSuccess = () => {
    dispatch(showModal({ modalName: "RegistrationSuccess" }));
  };

  // Fail handler if error occured while sending OTP
  const handleOtpSendFail = () => {
    navigate(routePaths.LOGIN_PATH);
  };

  // Success handler once otp is verified
  const handleOTPVerifySuccess = () => {
    setOtp("");
    // User verified the email at the time of registration process.
    if (type === "register") dispatch(showModal({ modalName: "RegistrationSuccess" }));
    // User verified the email at the time of login (User has skipped the verification at registration process)
    else {
      // Sending 2FA code for mobile number authentication
      const requestBody = {
        mobileNumber,
        countryCode,
        channel: "sms",
      };
      dispatch(
        sendOTP({
          requestBody,
          handleSuccess: handleOtpSendSuccess,
          handleFail: handleOtpSendFail,
        })
      );
    }
  };

  const emailIsRequired = () => {
    setErrorMessage("Email is required, please register before verifying!");
  };

  // Resend Otp handler
  const resendOtp = (event) => {
    event.preventDefault();
    if (!email) {
      emailIsRequired();
      return;
    }
    const reqBody = { channel: "email", email };
    setIsCodeResent(true);
    dispatch(
      sendOTP({
        requestBody: reqBody,
        handleSuccess: handleResendCodeSuccess,
        handleFail: handleResendCodeFail,
      })
    );
    setTime(30);
  };

  // Email Verification api handler
  const Submit = (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMessage("OTP is required");
      return;
    }
    // if email not exist
    if (!email) {
      emailIsRequired();
      return;
    }
    if (otp.length !== 6) {
      setErrorMessage("Code should be of 6 digits");
    } else {
      setErrorMessage(null);
      // email verify request body
      const requestBody = { email, channel: "email", code: otp };
      dispatch(
        verifyOTPSaga({
          requestBody,
          handleSuccess: handleOTPVerifySuccess,
          navigate,
        })
      );
    }
  };

  return (
    <MKBox component="section" py={12} className={classes.paddingModal}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Logo height={44} />
        </div>
        <Grid
          container
          item
          justifyContent="center"
          mx="auto"
          textAlign="center"
          sx={{ mx: "auto", display: "block" }}
          className={classes.sectionMobile}
        >
          <HeadingLayout
            heading="Email Verification"
            subHeading="Enter the code below sent to your email id "
            subheadingbold={email}
            subheadingboldafter=" to complete your email verification."
            type="mobile"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={8}
          lg={7}
          sx={{ mx: "auto" }}
          className={classes.sectionMobileOtp}
          style={{
            // background: "white",
            // border: "2px solid rgb(230,230,230)",
            borderRadius: 10,
            padding: "26px 50px 26px 50px",
          }}
        >
          <Grid
            container
            item
            justifyContent="center"
            mx="auto"
            textAlign="center"
            sx={{ mx: "auto" }}
            // className={classes.sectionDesktop}
          >
            <HeadingLayout
              sx={{ marginBottom: "10px", marginTop: "5px" }}
              heading="Email Verification"
              subHeading="Enter the code below sent to your email id "
              subheadingbold={email}
              subheadingboldafter=" to complete your email verification."
              type="desktop"
            />
          </Grid>
          <Grid container item sx={{ mx: "auto" }}>
            <MKBox width="100%" autoComplete="off" component="form">
              <MKBox
                display="flex"
                justifyContent="center"
                p={2}
                className="two__factor__otp"
                sx={{ alginItems: "center" }}
              >
                <OTPInput
                  value={otp}
                  onChange={handleChange}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  inputStyle={{
                    padding: 10,
                    // border: "1px solid #828A9C",
                    borderRadius: 3,
                    width: 36,
                    height: 36,
                  }}
                  containerStyle={{
                    justifyContent: "space-around",
                    width: "100%",
                    maxWidth: 360,
                  }}
                />
              </MKBox>
              <MKBox display="flex" justifyContent="center" p={1} mt={2}>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={12} lg={8} md={10} sm={10} xl={6}>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      // color="primary"
                      fullWidth
                      onClick={Submit}
                      disabled={isLoading.OTPVerify}
                    >
                      <ButtonSpinner text="Proceed" isLoading={isLoading.OTPVerify} />
                    </MKButton>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox textAlign="center" mb={2}>
                {time ? (
                  <MKTypography
                    component="a"
                    href="#"
                    variant="description"
                    fontWeight="regular"
                    // color="primary"
                    disabled={isCodeResent}
                  >
                    Resend code in {time} seconds
                  </MKTypography>
                ) : (
                  <MKTypography
                    component="a"
                    href="#"
                    variant="description"
                    fontWeight="regular"
                    // color="primary"
                    onClick={resendOtp}
                  >
                    Resend Code
                  </MKTypography>
                )}
              </MKBox>
              {errorMessage ? (
                <MKBox textAlign="center" mb={2}>
                  <MKTypography variant="h6" fontWeight="regular" /*color="error"*/>
                    {errorMessage}
                  </MKTypography>
                </MKBox>
              ) : null}
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      {modalName === "RegistrationSuccess" && (
        <RegistrationSuccessModel message="To Continue please Log In" />
      )}
    </MKBox>
  );
}

export default EmailVerification;

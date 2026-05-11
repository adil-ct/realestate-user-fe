import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStyles, makeStyles } from '@mui/styles';

import OTPInput from "otp-input-react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";

import "react-phone-input-2/lib/material.css";
import HeadingLayout from "components/HeadingLayout/HeadingLayout";
// Logo removed for whitelabeling
import starWrapper from "utils/starWrapper";
import { loginAuthenticationSaga, resendOtpSaga } from "store/actions";
import "./styles/style.css";

const styles = makeStyles((theme) => createStyles({
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  paddingModal: {
    paddingTop: "20px !important",
    paddingBottom: 4,
    [theme.breakpoints.up("sm")]: {
      paddingTop: "160px !important",
      paddingBottom: 4,
    },
  },
  borderRadiusMobile: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    // backgroundColor: "transparent",
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
  },
  borderDesktop: {
    borderRadius: 16,
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },
  sectionDesktop: {
    display: "none !important",
    [theme.breakpoints.up("sm")]: {
      display: "flex !important",
    },
  },
  sectionMobile: {
    // display: "flex !important",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
}, { name : 'auth-login-two-factor-authentication' }));

function TwoFactorAuth() {
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(30);
  const [timer, setTimer] = useState("");
  // const [error, setError] = useState("");
  const classes = styles();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const { userData, isLoading } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    // id should be equal to state name inorder to index correctly
    setOtp(event);
  };

  const resendOtp = () => {
    const { countryCode, mobileNumber } = userData;
    const requestBody = {
      channel: "SMS",
      countryCode,
      mobileNumber: mobileNumber * 1,
    };
    dispatch(resendOtpSaga({ requestBody }));
    setTime(30);
    setErrorMessage("");
    setOtp("");
  };

  const Submit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setErrorMessage("Code should be of 6 digits");
    } else {
      setErrorMessage(null);
      const { countryCode, mobileNumber } = userData;
      const requestBody = {
        countryCode,
        mobileNumber,
        code: otp,
      };
      dispatch(loginAuthenticationSaga({ requestBody, navigate }));
      // Temporary feature and will be removed shortly
    }
  };
  return (
    <MKBox component="section" py={12} className={classes.paddingModal}>
      <Container>
        <div style={{fontSize: '24px', fontWeight: 'bold', color: '#34c38f', textAlign: 'center', marginBottom: '20px'}}>Occurrence</div>
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
            heading="Authenticate Your Account"
            subHeading="Protecting your account is our priority. Please confirm your account by entering the code sent to "
            subHeadingBold={userData && userData.mobileNumber && starWrapper(userData.mobileNumber)}
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
            border: "2px solid rgb(230,230,230)",
            borderRadius: 10,
          }}
        >
          <Grid
            container
            item
            justifyContent="center"
            mx="auto"
            textAlign="center"
            sx={{ mx: "auto" }}
            className={classes.sectionDesktop}
          >
            <HeadingLayout
              sx={{ marginBottom: "4px", marginTop: "17px" }}
              heading="Authenticate Your Account"
              subHeading="Protecting your account is our priority. Please confirm your account by entering the code sent to "
              subHeadingBold={starWrapper(
                userData && userData.mobileNumber && starWrapper(userData.mobileNumber)
              )}
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
                sx={{ alginItems: "center", marginTop: "5px" }}
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
              <MKBox display="flex" justifyContent="center" p={1} mt={1}>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={12} lg={8} md={10} sm={10} xl={6}>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      // color="primary"
                      fullWidth
                      onClick={Submit}
                      disabled={isLoading.auth}
                    >
                      <ButtonSpinner text="Submit" isLoading={isLoading.auth} />
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
    </MKBox>
  );
}

export default TwoFactorAuth;

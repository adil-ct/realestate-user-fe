import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

// Static imports
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import Popup from "components/Modal/Popup";
import loginValidation from "validation/loginValidation";
import toaster from "utils/toaster";
import { loginSaga, loginVerify, hideModal, sendOTP } from "store/actions";
import ResendEmailModal from "views/auth/Login/ResendEmailModal";
import EarlyAccessModal from "views/auth/Login/EarlyAccessModal";
import { routePaths } from "routes/mainRoutes/routePaths";

// Static imports
import loginStyle from "views/auth/Login/styles/loginStyle";

const RegisterModal = ({
  open,
  id,
}) => {
  const classes = loginStyle();
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showResendOTPModal, setShowResendOTPModal] = useState(false);
  const [showPassword, setShowPassword] = useState({
    confirm: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modalName, data } = useSelector((state) => state.modal);
  const { userData, isLoading } = useSelector((state) => state.auth);
  const verificationType = data?.type

  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(()=>{
    if(modalName === "LOGIN_SECURITY_VERIFICATION"){
      setShowOTPModal(true)
    }
    if(modalName === "LOGIN_POPUP"){
      setShowPopup(true)
    }
    if(modalName === "RESEND_EMAIL"){
      setShowResendOTPModal(true)
    }
  },[modalName])

  const submitBtnhandler = async(values) => {
    try{
      const res = await axios.get("https://ipinfo.io/json");
      const requestBody = { ...values, ip: res?.data?.ip };
      dispatch(loginSaga({ requestBody, navigate, id }));
    }catch(err){
      toaster.error("Something might went wrong!. Please reload the webpage and try again")
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      submitBtnhandler(values);
    },
  });

  const otpData = {
    mobileNumber: formik.values.mobileNumber,
    countryCode: formik.values.countryCode,
  };

  // shows last 2 digit of phone number
  const getHiddenPhoneNumber = () => {
    return `********${userData?.mobileNumber?.toString()?.slice(-2)}`
  }

  // Success handler once otp is verified
  const handleVerifyOtpSuccess = (setOtp) => {
    toaster.success("Your account is logged in Successfully");
    setShowOTPModal(false);
    dispatch(hideModal());
    formik.setFieldValue("isMobileVerified", true);
    setOtp("");
  };

  const handleLoginVerify = async(reqBody) => {
    try{
      const res = await axios.get("https://ipinfo.io/json");
      const requestBody = {
        userId: userData._id,
        countryCode: userData.countryCode,
        mobileNumber: userData.mobileNumber,
        code: reqBody.code,
        rememberMe: true,
        ip: res?.data?.ip
      }
      dispatch(loginVerify({ requestBody, handleVerifyOtpSuccess, navigate, id}))
    }catch(err){
      toaster.error("Something might went wrong!. Please reload the webpage and try again")
    }
  }

  const handleResend = () => {
    const requestBody = {
      channel: "SMS",
      mobileNumber: `${userData.countryCode}${userData?.mobileNumber}`
    };
    dispatch(sendOTP({requestBody}))
  }

  const handlePopupClose = () => {
    // handle pop up close
    setShowPopup(false)
    dispatch(hideModal())
  }

  const handleCloseResendEmail= () => {
    setShowResendOTPModal(false)
    dispatch(hideModal())
  }

  const handleClickShowPassword = (prop) => {
    setShowPassword({ ...showPassword, [prop]: !showPassword[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getPhoneModalDescription = () => {
    return verificationType === "PHONE" 
    ? `Enter code sent to ${getHiddenPhoneNumber()}`
    : "Please enter the code received on the linked app."
  }

  return (
    <>
      <Dialog open={open} className={classes.mainDialog3}>
        <DialogContent
          display="flex"
          justify="center"
          p={0}
          className={classes.dialogContent1}
        >
             <Grid
            container
            item
            justifyContent="center"
            mx="auto"
            textAlign="center"
          >
            <MKTypography variant="h2" fontWeight="bold" sx={{ pt: "60px" }}>
              Login
            </MKTypography>
          </Grid>
          <Grid container item mx="auto">
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <MKBox px={3} py={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <MKInput
                      fullWidth
                      id="email"
                      label="Email"
                      requiredLabel
                      name="email"
                      labelColor={classes.labelColor}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} style={{ paddingTop: 5 }}>
                    <MKInput
                      fullWidth
                      type={showPassword.confirm ? "text" : "password"}
                      id="password"
                      requiredLabel
                      label="Password"
                      labelColor={classes.labelColor}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                handleClickShowPassword("confirm");
                              }}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="small"
                            >
                              {!showPassword.confirm ? (
                                <Visibility className={classes.passwordIcon} />
                              ) : (
                                <VisibilityOff
                                  className={classes.passwordIcon}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        className:"hideMSReveal"
                      }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    alignItems="center"
                    style={{ paddingTop: 4 }}
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <MKTypography variant="button" fontWeight="regular">
                      <Link to={routePaths.LOGIN_FORGOT_PATH} className={`${classes.formLink} ${classes.formLink2}`}>
                        Forgot Password ?
                      </Link>
                    </MKTypography>
                  </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={12} lg={12} sm={12}>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      // color="primary"
                      style={{ marginTop: 30 }}
                      fullWidth
                    >
                      <ButtonSpinner text="Login" isLoading={isLoading.login} />
                    </MKButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={12}
                  sm={12}
                  style={{ textAlign: "center" }}
                  mt={2}
                  mb={4}
                >
                  <MKTypography
                    variant="description"
                    mb={1}
                    //sx={{ color: "#4F4F4F" }}
                  >
                    Not Registered?
                  </MKTypography>

                  <MKTypography variant="button" fontWeight="medium" ml={1}>
                    <Link
                      to={routePaths.LOGIN_REGISTER_PATH}
                      className={`${classes.formLink} ${classes.formLink1}`}
                    >
                      Register Now
                    </Link>
                  </MKTypography>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </DialogContent>
      </Dialog>
      <PhoneNumberVerificationModal
        title="Security Verification"
        description={getPhoneModalDescription()}
        show={showOTPModal}
        setShow={setShowOTPModal}
        otpData={otpData}
        onSubmit={handleLoginVerify}
        handleResend={handleResend}
        showResendBtn={verificationType === "PHONE"}
        isLoading={isLoading?.loginVerify}
      />
      <Popup
        open={showPopup}
        handleClose={handlePopupClose}
       />
       <EarlyAccessModal
          open={showPopup}
          handleClose={handlePopupClose}
        />
       <ResendEmailModal
        open={showResendOTPModal}
        setOpen={setShowResendOTPModal}
        msg={data?.msg}
        email={formik.values.email}
        handleClose={handleCloseResendEmail}
       />
    </>
  );
};

export default RegisterModal;

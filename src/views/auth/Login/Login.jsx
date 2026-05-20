import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "utils/useQuery";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import Popup from "components/Modal/Popup";
import loginValidation from "validation/loginValidation";
import loginStyle from "./styles/loginStyle";
import toaster from "utils/toaster";
import { loginSaga, loginVerify, hideModal, sendOTP } from "store/actions";
import ResendEmailModal from "./ResendEmailModal";
import EarlyAccessModal from "./EarlyAccessModal";
import { routePaths } from "routes/mainRoutes/routePaths";
import Logo from "components/Logo";

function Login() {
  const classes = loginStyle();
  const [showOTPModal, setShowOTPModal]             = useState(false);
  const [showPopup, setShowPopup]                   = useState(false);
  const [showResendOTPModal, setShowResendOTPModal] = useState(false);
  const [showPassword, setShowPassword]             = useState({ confirm: false });

  const query    = useQuery();
  const id       = query.get("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalName        = useSelector((s) => s.modal?.modalName);
  const data             = useSelector((s) => s.modal?.data);
  const userData         = useSelector((s) => s.auth?.userData);
  const isLoading        = useSelector((s) => s.auth?.isLoading);
  const verificationType = data?.type;

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate(routePaths.HOME_PATH, { replace: true });
    }
  }, []);

  useEffect(() => {
    if (modalName === "LOGIN_SECURITY_VERIFICATION") setShowOTPModal(true);
    else                                             setShowOTPModal(false);
    if (modalName === "LOGIN_POPUP")                 setShowPopup(true);
    if (modalName === "RESEND_EMAIL")                setShowResendOTPModal(true);
  }, [modalName]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      try {
        const res = await axios.get("https://ipinfo.io/json");
        dispatch(loginSaga({ requestBody: { ...values, ip: res?.data?.ip }, navigate, id }));
      } catch {
        dispatch(loginSaga({ requestBody: { ...values, ip: undefined }, navigate, id }));
      }
    },
  });

  const getHiddenPhoneNumber = () =>
    `********${userData?.mobileNumber?.toString()?.slice(-2)}`;

  const handleVerifyOtpSuccess = (setOtp) => {
    toaster.success("Logged in successfully");
    setShowOTPModal(false);
    dispatch(hideModal());
    formik.setFieldValue("isMobileVerified", true);
    setOtp("");
  };

  const handleLoginVerify = async (reqBody) => {
    try {
      const res = await axios.get("https://ipinfo.io/json");
      dispatch(loginVerify({
        requestBody: {
          userId: userData._id,
          countryCode: userData.countryCode,
          mobileNumber: userData.mobileNumber,
          code: reqBody.code,
          rememberMe: true,
          ip: res?.data?.ip,
        },
        handleVerifyOtpSuccess,
        navigate,
        id,
      }));
    } catch {
      toaster.error("Something went wrong. Please reload and try again.");
    }
  };

  const handleResend = () => {
    dispatch(sendOTP({ requestBody: { channel: "SMS", mobileNumber: `${userData.countryCode}${userData?.mobileNumber}` } }));
  };

  return (
    <MKBox sx={{
      minHeight: "calc(100vh - 60px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "#F8F7F4",
      p: { xs: "16px", sm: "24px" },
    }}>
      {/* Card */}
      <MKBox sx={{
        width: "100%",
        maxWidth: "380px",
        bgcolor: "#FFFFFF",
        borderRadius: "14px",
        border: "1px solid #E2E8F0",
        boxShadow: "0 8px 32px rgba(26,43,74,0.08)",
        p: { xs: "20px 16px", sm: "28px 32px" },
      }}>
        {/* Logo */}
        <MKBox sx={{ display: "flex", justifyContent: "flex-start", mb: "16px" }}>
          <Logo height={40} />
        </MKBox>

        {/* Heading */}
        <MKTypography sx={{
          fontSize: "19px", fontWeight: 800, color: "#1A1A2E",
          fontFamily: '"PP Fragment-Serif",serif', letterSpacing: "-0.02em", mb: "3px",
        }}>
          Welcome back
        </MKTypography>
        <MKTypography sx={{ fontSize: "12px", color: "#6B7280", mb: "18px", lineHeight: 1.5 }}>
          Sign in to your account to continue
        </MKTypography>

        {/* Form */}
        <MKBox
          component="form"
          method="post"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <MKBox sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <MKInput
              fullWidth
              id="email"
              label="Email address"
              requiredLabel
              name="email"
              value={formik.values.email}
              type="email"
              autoComplete="username"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <MKInput
              fullWidth
              type={showPassword.confirm ? "text" : "password"}
              id="password"
              requiredLabel
              label="Password"
              value={formik.values.password}
              autoComplete="current-password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword((p) => ({ ...p, confirm: !p.confirm }))}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword.confirm
                        ? <VisibilityOff sx={{ fontSize: "18px", color: "#94A3B8" }} />
                        : <Visibility    sx={{ fontSize: "18px", color: "#94A3B8" }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              inputProps={{ className: "hideMSReveal" }}
            />
          </MKBox>

          {/* Forgot password */}
          <MKBox sx={{ display: "flex", justifyContent: "flex-end", mt: "4px" }}>
            <Link to={routePaths.LOGIN_FORGOT_PATH} className={classes.formLink2}>
              Forgot password?
            </Link>
          </MKBox>

          {/* Submit */}
          <MKButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: "14px",
              height: "40px",
              backgroundColor: "#1A2B4A",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "13px",
              borderRadius: "10px",
              textTransform: "none",
              letterSpacing: "0.01em",
              transition: "all 180ms ease",
              "&:hover": {
                backgroundColor: "#2C4270",
                transform: "translateY(-1px)",
                boxShadow: "0 6px 20px rgba(26,43,74,0.25)",
              },
            }}
          >
            <ButtonSpinner text="Sign in" isLoading={isLoading?.login} />
          </MKButton>

          {/* Register link */}
          <MKBox sx={{ textAlign: "center", mt: "12px" }}>
            <MKTypography sx={{ fontSize: "13px", color: "#6B7280", display: "inline" }}>
              Don&apos;t have an account?{" "}
            </MKTypography>
            <Link to={routePaths.LOGIN_REGISTER_PATH} className={classes.formLink1}>
              Create one
            </Link>
          </MKBox>
        </MKBox>
      </MKBox>

      {/* Modals */}
      <PhoneNumberVerificationModal
        title="Security Verification"
        description={
          verificationType === "PHONE"
            ? `Enter code sent to ${getHiddenPhoneNumber()}`
            : "Please enter the code from your authenticator app."
        }
        show={showOTPModal}
        setShow={setShowOTPModal}
        otpData={{ mobileNumber: formik.values.mobileNumber, countryCode: formik.values.countryCode }}
        onSubmit={handleLoginVerify}
        handleResend={handleResend}
        showResendBtn={verificationType === "PHONE"}
        isLoading={isLoading?.loginVerify}
      />
      <Popup open={showPopup} handleClose={() => { setShowPopup(false); dispatch(hideModal()); }} />
      <EarlyAccessModal open={showPopup} handleClose={() => { setShowPopup(false); dispatch(hideModal()); }} />
      <ResendEmailModal
        open={showResendOTPModal}
        setOpen={setShowResendOTPModal}
        msg={data?.msg}
        email={formik.values.email}
        handleClose={() => { setShowResendOTPModal(false); dispatch(hideModal()); }}
      />
    </MKBox>
  );
}

export default Login;

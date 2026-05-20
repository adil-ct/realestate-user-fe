import ExpandCircleDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandCircleTopIcon from '@mui/icons-material/ArrowDropUp';
import { Link, useNavigate, useParams } from "react-router-dom";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";

import EmailOTPModal from "components/Modal/EmailOTPModal";
import { NODE_ENV, PRIVACY_LINK, TERMS_AND_CONDITION } from "constants/env";
import { PASSWORD_VALIDATION } from "constants/errorConstants";
import registerValidation from "validation/registerValidation";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKTypography from "components/custom/MKTypography";
import { isDwolla } from "constants/paymentEndpoints";
import loginStyle from "../Login/styles/loginStyle";
import MKButton from "components/custom/MKButton";
import MKInput from "components/custom/MKInput";
import MKBox from "components/custom/MKBox";
import { signupSaga, resendOtpSaga } from "store/actions";
import { publicRoutes } from "routes";
import { routePaths } from "routes/mainRoutes/routePaths";

const singupObj = {
  firstName: "",
  lastName: "",
  password: "",
  referral: "",
  confirm: "",
  email: "",
  tc: true,
};

function RegisterForm({ showModal, sso, noIdCheck, pid="" }) {
  const classes = loginStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading } = useSelector((state) => state.auth);
  const { email } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState({ create: false });
  const [verified, setVerified] = useState(false);
  const [refCode, setRefCode] = useState(false);
  const [open, setOpen] = useState(false);
  const [otpEmail, setOtpEmail] = useState("");

  const initialValues = NODE_ENV === "development" ? singupObj : { ...singupObj, tc: false };
  const passedReferralCode = id?.toUpperCase();
  const searchParams = new URLSearchParams(window.location.search);
  const queryParamsStr = searchParams.get("sharedCredentialsUuid");

  useEffect(() => {
    if (!formik.values.email && email) {
      formik.setFieldValue("email", email);
    }
  }, [email]);


  useEffect(() => {
    if (queryParamsStr) {
      if (sso && queryParamsStr) showModal();
      getOneClickProfile(queryParamsStr);
    }
  }, [queryParamsStr]);

  const getOneClickProfile = async (sharedCredentialsUuid) => {
    dispatch(signupSaga({ requestBody: { sharedCredentialsUuid, oneclick: true }, navigate, sso }));
  };

  const handleSignupSuccess = (email) => {
    setOtpEmail(email);
    setOpen(true);
  };

  const handleResend = () => {
    dispatch(resendOtpSaga({ requestBody: { channel: "Email", email: otpEmail } }));
  };

  const submitBtnhandler = (values) => {
    const { email, password, firstName, referral, lastName } = values;
    const requestBody = {
      email, password, firstName, lastName,
      ...((passedReferralCode && !noIdCheck || referral) && {
        referralCode: (passedReferralCode && !noIdCheck) ? passedReferralCode : formik.values.referral,
      }),
    };
    dispatch(signupSaga({ requestBody, navigate, handleSignupSuccess }));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerValidation,
    onSubmit: (values) => { submitBtnhandler(values); },
  });

  const verifyStatus = () => {
    if (formik.errors && Object.keys(formik.errors).length === 0 && Object.getPrototypeOf(formik.errors) === Object.prototype) {
      return "";
    }
    const status = formik.errors?.password === undefined && formik.values.password.length > 0;
    if (status) { !verified && setVerified(status); return ""; }
    else { verified && setVerified(false); return PASSWORD_VALIDATION; }
  };

  const handleClickShowPassword = (prop) => setShowPassword((p) => ({ ...p, [prop]: !p[prop] }));
  const handleMouseDownPassword = (e) => e.preventDefault();
  const handleReferralCodeChange = (e) => {
    if (e?.target?.value) e.target.value = e.target.value.toUpperCase();
    formik.handleChange(e);
  };

  return (
    <>
      <MKBox
        component="form"
        method="post"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={1.5}>
          {/* First / Last */}
          <Grid item xs={12} sm={6}>
            <MKInput
              fullWidth
              id="first-name"
              name="firstName"
              label="First Name"
              requiredLabel
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MKInput
              fullWidth
              id="last-name"
              name="lastName"
              label="Last Name"
              requiredLabel
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <MKInput
              fullWidth
              id="email"
              name="email"
              label="Email address"
              requiredLabel
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          {/* Password */}
          <Grid item xs={12}>
            <MKInput
              fullWidth
              type={showPassword.create ? "text" : "password"}
              id="password"
              name="password"
              label="Create Password"
              requiredLabel
              autoComplete="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={
                formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : formik.values.password.length > 0
                    ? verifyStatus()
                    : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => handleClickShowPassword("create")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword.create
                        ? <VisibilityOff sx={{ fontSize: "18px", color: "#94A3B8" }} />
                        : <Visibility sx={{ fontSize: "18px", color: "#94A3B8" }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              inputProps={{ className: "hideMSReveal" }}
            />
            {verified && (
              <Box sx={{ display: "flex", alignItems: "center", mt: "4px", gap: "4px" }}>
                <CheckCircleOutlineIcon sx={{ fontSize: "14px", color: "#22C55E" }} />
                <Typography sx={{ fontSize: "12px", fontWeight: 500, color: "#22C55E" }}>
                  Strong password
                </Typography>
              </Box>
            )}
          </Grid>

          {/* Referral code toggle */}
          {!passedReferralCode && (
            <Grid item xs={12}>
              <Typography
                className={classes.link1}
                sx={{ display: "flex", alignItems: "center", cursor: "pointer", fontSize: "13px", color: "#6B7280", userSelect: "none" }}
                onClick={() => setRefCode(!refCode)}
              >
                Use Referral Code
                {!refCode
                  ? <ExpandCircleDownIcon sx={{ ml: "2px", fontSize: "20px" }} />
                  : <ExpandCircleTopIcon sx={{ ml: "2px", fontSize: "20px" }} />}
              </Typography>
            </Grid>
          )}

          {(refCode || id) && (
            <Grid item xs={12}>
              <MKInput
                fullWidth
                id="referral"
                name="referral"
                label={passedReferralCode ? "Referral Code" : "Referral Code"}
                value={(passedReferralCode && !noIdCheck) ? passedReferralCode : formik.values.referral}
                onChange={handleReferralCodeChange}
                error={formik.touched.referral && Boolean(formik.errors.referral)}
                helperText={formik.touched.referral && formik.errors.referral}
                inputProps={{ className: "hideMSReveal" }}
                disabled={passedReferralCode && !noIdCheck}
              />
            </Grid>
          )}

          {/* Terms */}
          <Grid item xs={12} sx={{ pt: "6px !important" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
              <CheckBox
                checked={formik.values.tc}
                id="tc"
                name="tc"
                size="small"
                sx={{ p: "2px", mt: "0px" }}
                onChange={formik.handleChange}
                className={formik.touched.tc && formik.errors.tc ? "error_checkbox" : ""}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: formik.touched.tc && formik.errors.tc ? "#EF4444" : "#6B7280",
                    lineHeight: 1.5,
                  }}
                >
                  I have read and accept the{" "}
                  <a href={TERMS_AND_CONDITION} target="_blank" rel="noreferrer"
                    style={{ color: "#C9A84C", fontWeight: 600, textDecoration: "none" }}>
                    Terms & Conditions
                  </a>
                  {" "}and{" "}
                  <a href={PRIVACY_LINK} target="_blank" rel="noreferrer"
                    style={{ color: "#C9A84C", fontWeight: 600, textDecoration: "none" }}>
                    Privacy Policy
                  </a>
                  {isDwolla && (
                    <>
                      {" "}as well as our partner Dwolla&apos;s{" "}
                      <a href="https://www.dwolla.com/legal/dwolla-account-terms-of-service/" target="_blank" rel="noreferrer"
                        style={{ color: "#C9A84C", fontWeight: 600, textDecoration: "none" }}>
                        Terms & Conditions
                      </a>
                      {" "}and{" "}
                      <a href="https://www.dwolla.com/legal/privacy/" target="_blank" rel="noreferrer"
                        style={{ color: "#C9A84C", fontWeight: 600, textDecoration: "none" }}>
                        Privacy Policy
                      </a>
                    </>
                  )}
                </Typography>
                {formik.touched.tc && formik.errors.tc && (
                  <Typography sx={{ fontSize: "12px", color: "#EF4444", mt: "2px" }}>
                    {formik.errors.tc}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>

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
            fontSize: "14px",
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
          <ButtonSpinner text="Create Account" isLoading={isLoading.signup} />
        </MKButton>

        {/* Login link */}
        <Box sx={{ textAlign: "center", mt: "10px" }}>
          <MKTypography sx={{ fontSize: "13px", color: "#6B7280", display: "inline" }}>
            Already have an account?{" "}
          </MKTypography>
          <Link
            to={noIdCheck ? `/?id=${pid}` : publicRoutes.find((x) => x.name === "Login").path}
            className={`${classes.formLink} ${classes.formLink1}`}
          >
            Sign in
          </Link>
        </Box>
      </MKBox>

      <EmailOTPModal
        open={open}
        onClose={() => setOpen(false)}
        email={otpEmail}
        onResend={handleResend}
        onVerified={() => navigate(routePaths.HOME_PATH)}
      />
    </>
  );
}

export default RegisterForm;

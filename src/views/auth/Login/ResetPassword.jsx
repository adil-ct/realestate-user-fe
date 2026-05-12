import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { EMAIL_REQUIRED, EMAIL_VALID } from "constants/errorConstants";
import PasswordRecoveryModal from "components/Modal/PasswordRecoveryModal";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordSaga } from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockResetIcon from "@mui/icons-material/LockReset";

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { isLoading } = useSelector((s) => s.auth);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: yup.object({
      email: yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
    }),
    onSubmit: (values) => {
      dispatch(forgotPasswordSaga({ requestBody: { email: values.email }, handleSuccess: () => setOpen(true) }));
    },
  });

  return (
    <MKBox sx={{ minHeight: "calc(100vh - 60px)", display: "flex", bgcolor: "#F8F7F4", alignItems: "center", justifyContent: "center", p: "24px 16px" }}>
      {/* Card */}
      <MKBox sx={{
        width: "100%", maxWidth: "440px",
        bgcolor: "#FFFFFF", borderRadius: "16px",
        border: "1px solid #E2E8F0",
        boxShadow: "0 8px 32px rgba(26,43,74,0.08)",
        p: { xs: "32px 24px", sm: "40px 40px" },
      }}>
        {/* Icon */}
        <MKBox sx={{
          width: "48px", height: "48px", borderRadius: "12px",
          background: "linear-gradient(135deg, #1A2B4A 0%, #2C4270 100%)",
          display: "flex", alignItems: "center", justifyContent: "center", mb: "20px",
        }}>
          <LockResetIcon sx={{ color: "#C9A84C", fontSize: "22px" }} />
        </MKBox>

        {/* Heading */}
        <MKTypography sx={{
          fontSize: "22px", fontWeight: 800, color: "#1A1A2E",
          fontFamily: '"PP Fragment-Serif", serif', letterSpacing: "-0.02em", mb: "6px",
        }}>
          Forgot password?
        </MKTypography>
        <MKTypography sx={{ fontSize: "13px", color: "#6B7280", mb: "28px", lineHeight: 1.6 }}>
          Enter your registered email and we&apos;ll send you a reset link.
        </MKTypography>

        {/* Form */}
        <MKBox component="form" autoComplete="off" onSubmit={formik.handleSubmit}>
          <MKInput
            fullWidth
            id="email"
            name="email"
            label="Email address"
            autoComplete="on"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {/* Buttons */}
          <Grid container spacing={1.5} mt={2.5}>
            <Grid item xs={5}>
              <MKButton
                type="button"
                variant="outlined"
                fullWidth
                sx={{
                  height: "42px", borderRadius: "10px",
                  borderColor: "#E2E8F0", color: "#475569",
                  fontSize: "13px", fontWeight: 500,
                  "&:hover": { borderColor: "#CBD5E1", bgcolor: "#F8F7F4" },
                }}
                onClick={() => {
                  if (!window.history?.state) navigate(routePaths.LANDING_PAGE_PATH);
                  else navigate(-1);
                }}
                startIcon={<ArrowBackIcon sx={{ fontSize: "16px !important" }} />}
              >
                Back
              </MKButton>
            </Grid>
            <Grid item xs={7}>
              <MKButton
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading.forgetPassword}
                sx={{
                  height: "42px", borderRadius: "10px",
                  bgcolor: "#1A2B4A", color: "#FFFFFF",
                  fontSize: "13px", fontWeight: 700,
                  textTransform: "none", letterSpacing: "0.01em",
                  transition: "all 180ms ease",
                  "&:hover": { bgcolor: "#2C4270", transform: "translateY(-1px)", boxShadow: "0 4px 16px rgba(26,43,74,0.22)" },
                  "&:disabled": { opacity: 0.5 },
                }}
              >
                <ButtonSpinner text="Send reset link" isLoading={isLoading.forgetPassword} />
              </MKButton>
            </Grid>
          </Grid>
        </MKBox>
      </MKBox>

      <PasswordRecoveryModal open={open} setOpen={setOpen} email={formik.values.email} />
    </MKBox>
  );
}

export default ResetPassword;

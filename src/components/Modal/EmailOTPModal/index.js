import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OTPInput from "otp-input-react";

import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";

function EmailOTPModal({ open, onClose, email, onResend, onVerified }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [time, setTime] = useState(30);
  const [timer, setTimer] = useState("");

  useEffect(() => {
    if (!open) {
      setOtp("");
      setError("");
      setVerifying(false);
      setTime(30);
    }
  }, [open]);

  useEffect(() => {
    if (time > 0 && open) {
      clearTimeout(timer);
      setTimer(setTimeout(() => setTime((t) => t - 1), 1000));
    }
  }, [time, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter the 6-digit code.");
      return;
    }
    setError("");
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      onVerified();
    }, 1500);
  };

  const handleResend = (e) => {
    e.preventDefault();
    if (time > 0) return;
    onResend();
    setTime(30);
  };

  const handleClose = () => {
    if (verifying) return;
    setOtp("");
    setError("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="email-otp-dialog-title"
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: "460px",
          borderRadius: "16px",
          p: "8px",
        },
      }}
    >
      <MKBox display="flex" justifyContent="flex-end" pt={1} pr={1}>
        <CloseButton onClick={handleClose} />
      </MKBox>

      <DialogTitle id="email-otp-dialog-title" sx={{ pt: 0, pb: "8px", textAlign: "center" }}>
        <MKTypography sx={{ fontSize: "26px", fontWeight: 700, color: "#1A1A2E", fontFamily: '"PP Fragment-Serif",serif' }}>
          Verify Email Address
        </MKTypography>
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center", pb: "24px" }}>
        <MKTypography sx={{ fontSize: "14px", color: "#6B7280", mb: "28px" }}>
          Enter the 6-digit code sent to <b style={{ color: "#1A1A2E" }}>{email}</b>
        </MKTypography>

        <MKBox component="form" onSubmit={handleSubmit}>
          <MKBox display="flex" justifyContent="center" mb="8px">
            <OTPInput
              value={otp}
              onChange={setOtp}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              inputStyles={{
                borderRadius: "6px",
                width: 40,
                height: 40,
                margin: "0 4px",
                fontSize: "18px",
                fontWeight: 600,
              }}
              containerStyle={{ justifyContent: "center" }}
            />
          </MKBox>

          <MKBox textAlign="right" mb="20px" sx={{ maxWidth: 280, mx: "auto" }}>
            {time > 0 ? (
              <MKTypography sx={{ fontSize: "13px", color: "#9CA3AF" }}>
                Resend in <b>{time} secs</b>
              </MKTypography>
            ) : (
              <MKTypography
                component="a"
                href="#"
                sx={{ fontSize: "13px", color: "#C9A84C", fontWeight: 600, cursor: "pointer" }}
                onClick={handleResend}
              >
                Resend Code
              </MKTypography>
            )}
          </MKBox>

          {error && (
            <MKTypography sx={{ fontSize: "13px", color: "#EF4444", mb: "12px" }}>
              {error}
            </MKTypography>
          )}

          <MKButton
            type="submit"
            fullWidth
            disabled={verifying}
            sx={{
              height: "44px",
              backgroundColor: "#C9A84C",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "15px",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#b8963e" },
              "&.Mui-disabled": { backgroundColor: "#C9A84C", opacity: 0.7 },
            }}
          >
            <ButtonSpinner text="Verify" isLoading={verifying} />
          </MKButton>
        </MKBox>
      </DialogContent>
    </Dialog>
  );
}

export default EmailOTPModal;

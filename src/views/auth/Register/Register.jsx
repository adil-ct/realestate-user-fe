import { useEffect, useState } from "react";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import RegisterForm from "./RegisterForm";
import InstantSign from "components/Modal/InstantSign";

function Register() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
        maxWidth: "460px",
        bgcolor: "#FFFFFF",
        borderRadius: "14px",
        border: "1px solid #E2E8F0",
        boxShadow: "0 8px 32px rgba(26,43,74,0.08)",
        p: { xs: "20px 16px", sm: "24px 32px" },
      }}>
        {/* Logo */}
        <MKBox sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "14px" }}>
          <MKBox sx={{
            width: 28, height: 28, borderRadius: "7px",
            background: "linear-gradient(135deg,#1A2B4A,#2C4270)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "13px", fontWeight: 900, color: "#C9A84C",
            fontFamily: '"PP Fragment-Serif",serif',
          }}>O</MKBox>
          <MKTypography sx={{ fontSize: "14px", fontWeight: 700, color: "#1A1A2E", fontFamily: '"PP Fragment-Serif",serif', letterSpacing: "-0.01em" }}>
            Occurrence
          </MKTypography>
        </MKBox>

        {/* Heading */}
        <MKTypography sx={{
          fontSize: "19px", fontWeight: 800, color: "#1A1A2E",
          fontFamily: '"PP Fragment-Serif",serif', letterSpacing: "-0.02em", mb: "3px",
        }}>
          Create your account
        </MKTypography>
        <MKTypography sx={{ fontSize: "12px", color: "#6B7280", mb: "16px", lineHeight: 1.5 }}>
          Real estate investing made simple &mdash; starting from $100.
        </MKTypography>

        <RegisterForm sso={true} showModal={() => setShowModal(true)} />
      </MKBox>

      <InstantSign open={showModal} handleClose={() => setShowModal(false)} />
    </MKBox>
  );
}

export default Register;

import { createStyles, makeStyles } from "@mui/styles";

export const styles = makeStyles((theme) =>
  createStyles(
    {
      /* ── Register page shell ── */
      detailsContainerBox: {
        padding: "0",
        minHeight: "calc(100vh - 60px)",
        backgroundColor: "#F8F7F4",
      },

      detailsOutterBox: {
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        minHeight: "calc(100vh - 120px)",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 24px rgba(26,43,74,0.07)",
        margin: "24px auto",
        maxWidth: "880px",
      },

      detailsInnerBox: {
        maxWidth: "880px",
        width: "100%",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: { margin: "0 auto" },
      },

      stepperBox: { margin: "0 28px 24px" },

      headingBox: {
        borderRadius: "16px 16px 0 0",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #F1F0EC",
        [theme.breakpoints.down("sm")]: { borderRadius: "0" },
      },

      headingText: {
        padding: "18px 36px",
        color: "#1A1A2E",
        fontSize: "16px !important",
        fontWeight: "700 !important",
      },

      secondaryHeading: {
        color: "#1A1A2E",
        padding: "24px 36px 10px",
        fontSize: "15px !important",
        fontWeight: "600 !important",
      },

      twoFAdescription: {
        color: "#6B7280",
        padding: "0 36px 24px",
        fontSize: "13px !important",
      },

      headingBoxOutter: {
        height: "100%",
        paddingBottom: "36px",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: { paddingBottom: "16px" },
      },

      detailsSection: {
        borderRadius: "0 0 16px 16px",
        borderTop: 0,
        [theme.breakpoints.down("sm")]: { border: "none" },
      },

      formContainer1: {
        padding: "32px 36px",
        [theme.breakpoints.down("sm")]: { padding: "24px 20px" },
      },

      /* ── Buttons ── */
      nextBtnBox: {
        marginBottom: 20,
        marginTop: 24,
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
          padding: "0 16px",
          flexDirection: "column",
        },
      },

      nextBtnBox1: {
        marginBottom: 20,
        marginTop: "-6px",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: { padding: "0 16px" },
      },

      nextBtn: {
        width: "200px",
        fontSize: "14px",
        fontWeight: 600,
        height: "42px",
        borderRadius: "10px !important",
        [theme.breakpoints.down("sm")]: { width: "100%" },
      },

      nextBtnVerify: {
        width: "200px",
        fontSize: "14px",
        fontWeight: 600,
        height: "42px",
        borderRadius: "10px !important",
        [theme.breakpoints.down("sm")]: { width: "100%" },
        [theme.breakpoints.down(426)]: { display: "none" },
      },

      nextBtnMobile: {
        width: "200px",
        fontSize: "14px",
        fontWeight: 600,
        display: "none",
        height: "42px",
        borderRadius: "10px !important",
        [theme.breakpoints.down("sm")]: { width: "100%" },
        [theme.breakpoints.down(426)]: { display: "flex !important" },
      },

      nextBtn1: {
        width: "200px",
        fontSize: "14px",
        fontWeight: 600,
        height: "42px",
        borderRadius: "10px !important",
        marginLeft: "10px",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          marginLeft: "0",
          marginTop: "10px",
        },
      },

      /* ── Auth app label ── */
      labelContainer: { display: "flex" },

      authAppLabel: {
        fontSize: "14px",
        fontWeight: 500,
        marginLeft: "10px",
        display: "flex",
        flexWrap: "wrap",
        marginTop: "8px",
        [theme.breakpoints.down("sm")]: { fontSize: "12px", lineHeight: "15px" },
      },

      authAppLabelLinkContainer: { display: "flex" },

      authAppLabelLink: {
        color: "#C9A84C",
        whiteSpace: "nowrap",
        fontWeight: 600,
        "&:hover": { color: "#A8872F" },
      },

      /* ── KYC ── */
      kycdescription: {
        color: "#6B7280",
        padding: "16px 36px",
        margin: "auto",
        fontSize: "13px !important",
      },

      kycdescription1: {
        color: "#1A1A2E",
        padding: "0 36px",
        fontWeight: "700",
        paddingTop: "16px !important",
        fontSize: "14px",
      },

      kycDisclaimer: {
        color: "#6B7280",
        padding: "24px 36px",
        margin: "auto",
        fontSize: "12px !important",
      },

      radioGroupUpperBox: {
        margin: "0 36px",
        paddingLeft: "8px",
      },

      /* ── Phone ── */
      phoneNumberBox: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "44px",
        display: "flex",
        alignItems: "center",
      },

      phoneText: {
        userSelect: "none",
        height: "44px",
        display: "flex !important",
        alignItems: "center",
        fontSize: "13px",
        fontWeight: 600,
        color: "#22C55E",
      },

      checkIcon: {
        width: "18px",
        height: "18px",
        marginRight: "4px",
        [theme.breakpoints.down(426)]: { marginRight: "-5px" },
        [theme.breakpoints.down(321)]: { width: "15px", height: "15px" },
      },

      verifyBtn: {
        padding: "0 20px",
        height: "44px",
        borderTopRightRadius: "10px !important",
        borderBottomRightRadius: "10px !important",
        borderTopLeftRadius: "0 !important",
        borderBottomLeftRadius: "0 !important",
        fontSize: "13px",
        fontWeight: 500,
        [theme.breakpoints.down(426)]: { display: "none" },
      },

      verifiedText: {
        fontSize: "12px",
        fontWeight: 600,
        color: "#22C55E",
        "@media (max-width:453px)": { display: "none" },
      },

      /* ── Misc ── */
      crackerIcon: { width: "22px", height: "22px", marginRight: "5px" },

      linkColor:  { marginLeft: "5px", color: "#C9A84C" },
      linkColor1: { color: "#C9A84C" },

      cursorPointer: {
        cursor: "pointer",
        color: "#1A2B4A",
        textDecoration: "underline",
      },

      disabledText: {
        opacity: 0.55,
        color: "#1A2B4A",
        textDecoration: "underline",
      },

      infoAlert: { margin: "4px" },

      pTop: {
        paddingTop: "6px !important",
        [theme.breakpoints.down("xs")]: { paddingTop: "4px !important" },
      },

      mt20: {
        marginTop: "16px",
        [theme.breakpoints.down("sm")]: { marginTop: "0" },
      },

      borderRadiusMobile: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        [theme.breakpoints.up("sm")]: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      },

      borderDesktop: {
        borderRadius: 16,
        mx: "auto",
        [theme.breakpoints.up("sm")]: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
      },

      sectionTerms: {
        [theme.breakpoints.up("sm")]: { fontSize: "12px" },
      },

      inputError: {
        marginLeft: 14,
        fontWeight: 400,
        fontSize: "12px",
        color: "#EF4444",
      },

      tooltipText: {},
    },
    { name: "auth-register-view-register" }
  )
);

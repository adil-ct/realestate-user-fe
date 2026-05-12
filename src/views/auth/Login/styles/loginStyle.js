import { createStyles, makeStyles } from "@mui/styles";

const loginStyle = makeStyles((theme) =>
  createStyles(
    {
      /* ── Page shell ── */
      paddingModal: {
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        alignItems: "stretch",
        padding: "0 !important",
      },

      paddingModal1: {
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        alignItems: "stretch",
        padding: "0 !important",
      },

      modalContainer: {
        padding: "0 !important",
        maxWidth: "none !important",
        width: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "stretch",
        margin: "0 !important",
      },

      /* ── Split layout container ── */
      formContainer: {
        display: "flex !important",
        minHeight: "calc(100vh - 60px)",
        width: "100% !important",
        margin: "0 !important",
        backgroundColor: "#F8F7F4",
        borderRadius: "0 !important",
        padding: "0 !important",
        boxShadow: "none !important",
        justifyContent: "center !important",
      },

      /* ── Left hero panel ── */
      heroPanel: {
        background: "linear-gradient(160deg, #1A2B4A 0%, #0F1C32 60%, #111E35 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px",
        position: "relative",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        },

        [theme.breakpoints.down("md")]: { display: "none" },
      },

      heroQuote: {
        fontSize: "22px",
        fontWeight: 700,
        color: "#FFFFFF",
        lineHeight: 1.4,
        fontFamily: '"PP Fragment-Serif", serif',
        letterSpacing: "-0.02em",
        maxWidth: "340px",
        marginTop: "auto",
        marginBottom: "16px",
      },

      heroSub: {
        fontSize: "13px",
        color: "rgba(148,163,184,0.8)",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        lineHeight: 1.6,
        maxWidth: "300px",
      },

      heroStat: {
        display: "flex",
        gap: "24px",
        marginTop: "40px",
      },

      heroStatItem: {
        display: "flex",
        flexDirection: "column",
        gap: "3px",
      },

      heroStatValue: {
        fontSize: "20px",
        fontWeight: 800,
        color: "#C9A84C",
        fontFamily: '"PP Fragment-Serif", serif',
        letterSpacing: "-0.02em",
      },

      heroStatLabel: {
        fontSize: "11px",
        color: "rgba(148,163,184,0.7)",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      },

      /* ── Right form panel ── */
      formPanel: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: "48px 40px",
        position: "relative",

        [theme.breakpoints.down("sm")]: { padding: "32px 20px" },
      },

      formInner: {
        width: "100%",
        maxWidth: "380px",
      },

      /* ── Form title ── */
      formTitle: {
        fontSize: "24px !important",
        fontWeight: "700 !important",
        color: "#1A1A2E !important",
        letterSpacing: "-0.02em",
        fontFamily: '"PP Fragment-Serif", serif !important',
        marginBottom: "4px !important",
      },

      formSubtitle: {
        fontSize: "13px",
        color: "#6B7280",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        marginBottom: "28px",
        lineHeight: 1.55,
      },

      /* ── Labels ── */
      labelColor: {
        fontWeight: "500",
        fontSize: "13px !important",
        color: "#374151",
      },

      /* ── Links ── */
      formLink: {
        color: "#C9A84C",
        fontWeight: "600",
        fontSize: "13px",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        transition: "color 140ms ease",
        "&:hover": { color: "#A8872F" },
      },

      formLink1: {
        fontSize: "13px",
        fontWeight: 600,
        color: "#C9A84C",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        "&:hover": { color: "#A8872F" },
      },

      formLink2: {
        fontSize: "13px",
        fontWeight: 500,
        color: "#6B7280",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        "&:hover": { color: "#1A2B4A" },
      },

      forgotPasswordLink: {
        fontSize: "12px",
        color: "#94A3B8",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        transition: "color 140ms ease",
        "&:hover": { color: "#1A2B4A" },
      },

      /* ── Submit button ── */
      submitButton: {
        backgroundColor: "#1A2B4A !important",
        color: "#FFFFFF !important",
        fontWeight: "700 !important",
        fontSize: "14px !important",
        height: "44px",
        borderRadius: "10px !important",
        width: "100%",
        marginTop: "24px !important",
        letterSpacing: "0.01em",
        transition: "all 180ms ease !important",
        "&:hover": {
          backgroundColor: "#2C4270 !important",
          transform: "translateY(-1px)",
          boxShadow: "0 4px 16px rgba(26,43,74,0.25) !important",
        },
      },

      /* ── Divider text ── */
      dividerRow: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "20px 0",
        "& span": {
          fontSize: "12px",
          color: "#CBD5E1",
          whiteSpace: "nowrap",
          fontFamily: '"PP Fragment-Sans", sans-serif',
        },
        "& hr": {
          flex: 1,
          border: "none",
          borderTop: "1px solid #E2E8F0",
          margin: 0,
        },
      },

      /* ── Password icon ── */
      passwordIcon: {
        color: "#94A3B8",
        fontSize: "18px !important",
      },

      iconButton: { fontSize: "18px" },

      /* ── Misc ── */
      labelGrid:     { border: "none" },
      mBottom50:     { marginBottom: "0" },
      maxWidth:      {},

      resetButton: {
        marginTop: 16,
        marginBottom: 8,
      },

      button50Width:  { width: "48%", marginTop: "2px" },
      button51Width:  { width: "49%", marginTop: "2px" },
      marginRight20:  { marginRight: "8px" },
      mTopReg:        {},

      link: {
        textDecoration: "none",
        color: "#C9A84C",
        "&:hover": { color: "#A8872F" },
      },

      link1: {
        color: "#6B7280",
        cursor: "pointer",
        fontSize: "13px",
        padding: "4px 0",
      },

      inputError: {
        marginLeft: 14,
        fontWeight: 300,
        fontSize: "12px",
        color: "#EF4444",
      },

      /* ── Loader ── */
      loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        padding: 2,
        minHeight: "180px",
      },

      resetTextBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        marginBottom: 2,
        textAlign: "center",
      },

      resetText: {
        minHeight: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },

      sectionTerms: {
        display: "flex",
        [theme.breakpoints.up("sm")]: { fontSize: "12px" },
      },

      termsText: {
        cursor: "pointer",
        fontSize: "12px",
        color: "#6B7280",
      },

      /* ── Dialogs ── */
      mainDialog3: {
        "& .MuiDialogContent-root": {
          "&::-webkit-scrollbar": { display: "none" },
        },
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            padding: "16px 0",
            maxWidth: "480px",
            borderRadius: "16px",
          },
        },
      },

      dialogContent1: {
        alignItems: "center",
        fontWeight: "400",
        width: "95%",
        textAlign: "center",
        margin: "-16px auto",
        padding: "0 !important",
      },

      sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: { display: "flex" },
      },
      sectionMobile: {
        [theme.breakpoints.up("sm")]: { display: "none" },
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
        [theme.breakpoints.up("sm")]: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
      },
    },
    { name: "auth-login-view" }
  )
);

export default loginStyle;

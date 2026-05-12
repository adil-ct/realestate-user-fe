import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "0",
    padding: "32px 40px",
    [theme.breakpoints.down("md")]: {
      padding: "24px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 12px",
    },
  },
  mTop: {
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
  },
  mainContainer: {
    minHeight: "calc(100vh - 125px)",
    padding: "0",
    background: "transparent",
    color: theme.palette.bodyText.primary,
    width: "100%",
    boxSizing: "border-box",
  },
  mr15: {
    marginRight: "15px",
  },
  heading1UpperContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  heading1: {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "-0.02em",
    color: "#1A1A2E",
    fontFamily: '"PP Fragment-Serif", serif',
  },
  walletBalanceText: {
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "13px",
    // color: "#939090",
    marginBottom: "5px",
    marginLeft: "10px",
  },
  walletBalanceValue: {
    fontWeight: 500,
    fontSize: "13px",
    // color: "#613ED2",
    marginLeft: "6px",
    fontStyle: "normal",
  },
  dflex: {
    display: "flex",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  headerBtn: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  },
  iconBox: {
    width: "40px",
    height: "40px",
    background: "rgba(201,168,76,0.10)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "#C9A84C",
    flexShrink: 0,
    "& svg": { color: "#C9A84C" },
    "& img": { filter: "sepia(1) hue-rotate(5deg) saturate(3)" },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  marketStats: {
    border: "1px solid #E2E8F0",
    background: "#FFFFFF",
    borderRadius: "12px",
    padding: "18px 20px",
    margin: "16px 0 0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    textAlign: "left",
    boxShadow: "0 1px 6px rgba(26,43,74,0.05)",
    [theme.breakpoints.down("md")]: {
      padding: "14px 14px",
      margin: "10px 5px 0",
      minHeight: "70px",
      textAlign: "left",
      justifyContent: "space-between",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
      height: "auto",
      alignItems: "center",
    },
  },
  marketStatsHead: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#6B7280",
    borderBottom: "none",
    width: "fit-content",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
    },
  },
  marketStatsVal: {
    color: "#1A1A2E",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px",
    fontFamily: '"PP Fragment-Serif", serif',
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  statsVal: {
    fontSize: "14px",
    // color: "#4CAF50",
    lineHeight: "21px",
    fontWeight: "500",
    margin: "10px",
    [theme.breakpoints.down("md")]: {
      margin: "6px",
      fontSize: "15px",
    },
  },
  statsValRed: {
    fontSize: "14px",
    // color: "#ED6A5A",
    lineHeight: "21px",
    fontWeight: "500",
    margin: "10px",
    [theme.breakpoints.down("md")]: {
      margin: "6px",
      fontSize: "15px",
    },
  },
  arwUpGreen: {
    margin: "-4px -6px",
  },
  arwBlack: {
    margin: "0",
  },
  tableHead: {
    fontSize: "12px",
    // background: "#FAF9FD",
    fontWeight: "600",
    border: 0,
  },
  tHistory: {
    cursor: "pointer",
  },
  propertyIcon: {
    borderRadius: "50%",
    height: "24px",
    width: "24px",
    marginRight: "6px",
  },
  diffVal: {
    fontSize: "13px",
    // color: "#767C97",
    lineHeight: "16px",
    fontWeight: 500,
    display: "flex",
  },
  actionLabel: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    // color: "#2D9CDB",
    margin: "20px",
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
  sectionDesktop: {
    display: "none !important",
    [theme.breakpoints.up("md")]: {
      display: "block !important",
    },
  },
  sectionDesktopFlex: {
    display: "none !important",
    [theme.breakpoints.up("sm")]: {
      display: "flex !important",
    },
  },
  txnHistoryIcon: {
    border: `1px solid ${theme.palette.callToAction.off}`,
    borderRadius: "50%",
    "&:hover": {
      border: `1px solid ${theme.palette.callToAction.light}`,
    },
  },
  sectionDesktopSm: {
    display: "none !important",
    [theme.breakpoints.up("sm")]: {
      display: "block !important",
    },
  },
  sectionMobile: {
    display: "flex !important",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  forWeb: {
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  forMWeb: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
  noContentBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      minHeight: "200px",
    },
  },
  noContentText: {
    fontSize: "14px",
    // color: "#613ED2",
    marginTop: "18px",
    textAlign: "center",
    fontStyle: "italic",
  },
  pointer: {
    cursor: "pointer",
    // color: "#2D9CDB",
  },
  browserOfferingBtn: {
    marginTop: "24px",
    fontSize: "13px",
    fontWeight: 600,
    backgroundColor: "#1A2B4A !important",
    color: "#FFFFFF !important",
    borderRadius: "10px !important",
    padding: "0 20px !important",
    height: "40px",
  },
  browserOfferingImg: {
    marginRight: "6px",
    marginBottom: "5px",
  },
  tableContainer: {
    width: "100%",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  },
},
{ name : 'portfolio-view' }));

export default styles;

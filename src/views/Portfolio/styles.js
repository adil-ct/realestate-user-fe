import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "100px 40px",
    [theme.breakpoints.down("md")]: {
      margin: "40px 10px",
    },
  },
  mTop: {
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
  },
  mainContainer: {
    minHeight: "calc(100vh - 125px)",
    padding: "24px 20px",
    background: theme.palette.foreground.primary,
    color: theme.palette.bodyText.primary,
    borderRadius: "22px",
    width: "100%",
    // border: "1px solid #e5e5e5",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "16px",
      height: "auto",
    },
  },
  mr15: {
    marginRight: "15px",
  },
  heading1UpperContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  heading1: {
    fontSize: "24px",
    // color: "#2D355A",
    fontWeight: 600,
    lineHeight: "40px",
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
    width: "42px",
    height: "42px",
    // background: "#FAFAFA",
    // border: "1px solid #F5F5F5",
    // boxShadow:
    //   "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.06), inset -1.0668e-16px -1.74222px 1.74222px #E7E7E7, inset 1.0668e-16px 1.74222px 1.74222px #FFFFFF",
    borderRadius: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none",
      width: "38px",
      height: "38px",
      position: "absolute",
      top: "5px",
      right: "5px",
    },
  },
  marketStats: {
    // border: "1px solid #F7F7F7",
    // boxShadow:
    //   "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.04), inset -1.62561e-16px -2.65481px 2.65481px #ECECEC, inset 1.62561e-16px 2.65481px 2.65481px #FFFFFF",
    border: `1px solid ${theme.palette.grey[50]}`,
    background: theme.palette.grey[50],
    borderRadius: "12px",
    padding: "20px 26px",
    margin: "20px 0px",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      padding: "12px 12px",
      margin: "10px 5px 0",
      minHeight: "70px",
      textAlign: "center",
      justifyContent: "space-between",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      height: "100px",
      alignItems: "flex-start",
    },
  },
  marketStatsHead: {
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    // color: "#7466A0",
    borderBottom: "1px dashed grey",
    width: "fit-content",
    marginBottom: "8px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  marketStatsVal: {
    color: theme.palette.bodyText.secondary,
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
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
    color: theme.palette.text.primary,
    marginTop: "30px",
    fontSize: "16px",
    fontWeight: 600,
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

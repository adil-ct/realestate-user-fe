import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  flexGrid: {
    display: "flex",
    // flexDirection: "column",
  },
  flexBaseline: {
    display: "flex",
    alignItems: "baseline",
  },
  addressValLabelDesktop: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    // width: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline",
    margin: "-4px 10px",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down(400)]: {
      display: "none",
    },
  },
  addressValLabelMobile: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    width: "250px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "none",
    margin: "-4px 10px",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down(400)]: {
      display: "block",
    },
  },
  addressVal: {
    fontSize: "13px",
    fontStyle: "italic",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    marginLeft: "12px",
    borderBottom: "1px dashed",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  addressVal1: {
    fontSize: "13px",
    fontStyle: "italic",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    marginLeft: "12px",
    borderBottom: "1px dashed",
  },
  addressValLabel: {
    // color: "#2D9CDB",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    margin: "4px",
  },
  sperator: {
    fontSize: "13px",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    margin: "0 -4px 0 6px",
  },
  btnIcon: {
    marginRight: "4px",
  },
  cityStateLabel: {
    fontSize: "12px",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    marginLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      marginLeft: "5px",
    },
  },
  paddingContainer: {
    margin: "20px 40px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 10px",
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
  heading1a: {
    fontSize: "24px",
    // color: "#2D355A",
    fontWeight: 600,
    lineHeight: "40px",
    marginLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
    },
  },
  navigation: {
    // color: "#2D9CDB",
    fontSize: "12px",
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: "0px !important",
    marginBottom: "20px",
  },
  heading1: {
    fontSize: "24px",
    // color: "#2D355A",
    fontWeight: 600,
    lineHeight: "40px",
    marginLeft: "10px",
  },
  mBox: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  dflex: {
    display: "flex",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  fullWidth: {
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
  },
  flexEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      marginBottom: "20px",
    },
  },
  headerBtn: {
    width: "100%",
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
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
  },
  txnHistoryLabel: {
    fontSize: "14px",
    fontWeight: "400",
    // color: "#2D9CDB",
    lineHeight: "21px",
  },
  marketStats: {
    // border: "1px solid #F7F7F7",
    // boxShadow:
    //   "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.04), inset -1.62561e-16px -2.65481px 2.65481px #ECECEC, inset 1.62561e-16px 2.65481px 2.65481px #FFFFFF",
    borderRadius: "12px",
    padding: "20px 26px",
    margin: "20px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: "12px 20px",
      margin: "0px auto 0",
      height: "100px !important",
    },
  },
  marketStatsHead: {
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: "15px",
    // color: "#7466A0",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  marketStatsVal: {
    // color: "#613ED2",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  statsVal: {
    fontSize: "18px",
    // color: "#4CAF50",
    lineHeight: "21px",
    fontWeight: "500",
    margin: "10px",
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
    height: "40px",
    width: "40px",
    marginRight: "12px",
    objectFit: "cover",
  },
  diffVal: {
    fontSize: "12px",
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
},
{ name : 'property-manager-view-proposals-component' }));

export default styles;

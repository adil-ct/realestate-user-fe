import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "20px 40px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 10px",
    },
  },
  posAbsMenu: {
    position: "absolute",
    top: "30px",
    right: "0px",
  },
  marketStatsVal2: {
    // color: "#613ED2",
    fontSize: "17px",
    fontWeight: "600",
    lineHeight: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
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
  heading1: {
    fontSize: "24px",
    // color: "#2D355A",
    fontWeight: 600,
    lineHeight: "40px",
  },
  flexGrid: {
    display: "flex",
  },
  flexBaseline: {
    display: "flex",
    alignItems: "baseline",
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
  },
  headerBoxBtns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "20px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: "10px",
      width: "100%",
    },
  },
  fullWidth: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  fullWidth1: {
    marginRight: "40px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  btnIcon: {
    marginRight: "5px",
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
  menuAbsolute: {
    position: "absolute",
    top: "12px",
    right: "0px",
  },
  addressValLabelDesktop: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
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
  sperator: {
    fontSize: "13px",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    margin: "0 -4px 0 6px",
  },
  addressValLabel: {
    // color: "#2D9CDB",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    margin: "4px",
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
    height: "100px",
    [theme.breakpoints.down("md")]: {
      padding: "12px 20px",
      margin: "10px auto 0",
      minHeight: "84px",
    },
  },
  marketStatsHead: {
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    // color: "#7466A0",
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
  marketStatsVal1: {
    // color: "#613ED2",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "26px",
    cursor: "pointer",
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
  profileIcon: {
    marginRight: "4px",
  },
  propertyIcon: {
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    marginRight: "12px",
    objectFit: "cover",
  },
  tableGrid: {
    height: 400,
    width: "100%",
  },
  historyMobileDisplay: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: "-20px",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  menuDropdown: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginLeft: "-10px",
      justifyContent: "space-between",
    },
  },
  historyMobileSearch: {
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      marginLeft: "20px",
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
  sectionMobileMd: {
    display: "flex !important",
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
},
{ name: "property-manager-property-details-component" }));

export default styles;
import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "80px 40px",
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
  buttonProperty: {
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  heading1: {
    fontSize: "24px",
    // color: "#2D355A",
    fontWeight: 600,
    lineHeight: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
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
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  headerBox1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "50px",
    marginTop: "-35px",
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
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    borderBottom: "1px dashed",
  },
  sperator: {
    fontSize: "13px",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    margin: "0 6px",
  },
  addressValLabel: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    width: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline",
    margin: "-4px 10px",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
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
  marketStats: {
    // border: "1px solid #F7F7F7",
    // boxShadow:
    //   "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.04), inset -1.62561e-16px -2.65481px 2.65481px #ECECEC, inset 1.62561e-16px 2.65481px 2.65481px #FFFFFF",
    borderRadius: "12px",
    padding: "20px 26px",
    margin: "20px 10px",
    display: "flex",
    alignItems: "center",
    maxHeight: "90px",
    justifyContent: "space-between",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      padding: "12px 20px",
      margin: "10px 5px 0",
      minHeight: "84px",
      alignItems: "flex-start",
      textAlign: "center",
      justifyContent: "center",
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
  marketStatsValSec: {
    // color: "#7466A0",
    fontSize: "14px",
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
    fontSize: "17px",
    fontWeight: "600",
    lineHeight: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  statsVal: {
    fontSize: "14px",
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
  },
  tableGrid: {
    height: 400,
    width: "100%",
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
  sectionDesktopFlex: {
    display: "none !important",
    [theme.breakpoints.up("sm")]: {
      display: "flex !important",
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
  },
  pointer: {
    cursor: "pointer",
    // color: "#2D9CDB",
  },
  voteImg:{
    marginRight:"5px"
  },
  tooltipText: {
    borderBottom: "1px dashed",
    display: "inline",
    verticalAlign: "top"
  },
  tabStyle: {
    padding: "13px 15px",
    whiteSpace: "nowrap",
    // color: "#939090 !important",
    fontSize: "14px",
    fontWeight: "400",
    // borderBottom: "2px solid #fff",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
    "&:hover": {
      borderRadius: "0",
    },
    "&.Mui-selected": {
      // color: "#0E111D !important",
      fontWeight: "600",
      outline: "none",
      // backgroundColor: "#FFF",
    },
  },
  tableActions:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:600px)": {
      flexDirection: "column",
      alignItems: "normal",
    },
  },
  tabMainContainer:{
    "@media (max-width:600px)": {
      overflowX: "auto",
      whiteSpace: "nowrap",
    }
  },
  tabsContainer: {
    width: "fit-content"
  },
  searchContainer: {
    "@media (max-width:600px)": {
      alignSelf: "end",
      marginTop: "10px"
    },
  },
  searchMainContainer:{
    display: "flex",
    marginTop: "10px",
    justifyContent: "flex-end"
  }

}, 
{ name : 'property-details-card-view'}));

export default styles;

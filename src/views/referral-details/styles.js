import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "80px 50px",
    [theme.breakpoints.down("md")]: {
      margin: "80px 10px",
    },
  },
  tableContainer: {
    width: "100%",
    margin: '0 24px 0 10px',
    border: '1px solid ' + theme.palette.primary.main,

    "& thead > tr .MuiTableCell-root": {
      background: theme.palette.primary.main,
      color: theme.palette.text.primary,
      textAlign: 'center',
    },

    "& .MuiTableRow-root": {
      border: '1px solid ' + theme.palette.primary.main,
      "& .MuiTableCell-root" : {
        border: 'none',
        textAlign: 'center'
      },
    },

    "& a": {
      color: theme.palette.callToAction.light,
    },
  },
  gridTableContainer:{
    "& .MuiBox-root a": {
      color: theme.palette.callToAction.light,
    },
  },
  noContentBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
    flexDirection: "column",
  },
  noContentText: {
    fontSize: "14px",
    marginTop: "18px",
    fontStyle: "italic",
    letterSpacing: "0.02em",
    fontWeight: 400,
  },
  sectionDesktopFlex: {
    display: "none !important",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "flex !important",
    },
  },
  sectionMobile: {
    display: "flex !important",
    width: "100%",
    marginTop: "50px",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
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
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading1UpperContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  heading1: {
    fontSize: "28px",
    // color: "#2D355A",
    fontWeight: 700,
    lineHeight: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "25px",
    }
  },
  flexEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  marketStatsContainer: {
    padding: '0 16px 0 0',
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
  },
  marketStats: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderRadius: "14px",
    marginTop: "6px",
    padding: "20px 26px",
    margin: "20px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "12px 12px",
      margin: "10px 5px 0",
      minHeight: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100px",
    },
  },
  marketStatsHead: {
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    width: "fit-content",
    marginBottom: "8px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  marketStatsHead1: {
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    // color: "#7466A0",
    // borderBottom: "1px dashed grey",
    width: "fit-content",
    marginBottom: "8px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  marketStatsVal: {
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "26px",
    textAlign: 'center',
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
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
      width: "38px",
      height: "38px",
    },
  },
  referralDetailBox: {
    padding: 0,
    // background: "#fff",
    // boxShadow:
    //   "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.04), inset -1.62561e-16px -2.65481px 2.65481px #ECECEC, inset 1.62561e-16px 2.65481px 2.65481px #FFFFFF",
    borderRadius: "12px",
    // border: "1px solid #F7F7F7",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px 20px",
    }
  },
  rewardsDashTitle:{
    padding: "0px 24px 10px 24px",
  },
  referralItem1: {
    padding: "0 24px",
    fontWeight: "600",
    fontSize: "16px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 15px 0 0",
      borderRight: "none",
    }
  },
  referralItem2: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // borderRight: "1px solid rgba(97, 62, 210, 0.1)",
    height: "100%",
    // color: "#2D355A",
    fontWeight: "600",
    fontSize: "16px",
    padding: "0 24px",
    position: "relative",
    "& img": {
      width: "48px",
      height: "48px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 15px",
      borderRight: "none",
    }
  },
  referralItem3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // color: "#2D355A",
    fontWeight: "600",
    fontSize: "16px",
    padding: "0 24px",
    position: "relative",
    "& img": {
      width: "48px",
      height: "48px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 15px",
    }
  },
  referralStepNo: {
    position: "absolute",
    top: "0px",
    left: "24px",
    // color: "#613ED2",
    fontSize: "24px",
    fontWeight: "600",
    height: "42px",
    width: "42px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // boxShadow: "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.06), inset -1.0668e-16px -1.74222px 1.74222px #E7E7E7, inset 1.0668e-16px 1.74222px 1.74222px #FFFFFF",
    // border: "1px solid #F5F5F5",
    [theme.breakpoints.down("md")]: {
      position: "static",
      fontSize: "20px",
      minHeight: "42px",
      minWidth: "42px",
    },
  },
  referralShare: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
      fontSize: "14px",
      fontWeight: "500",
    },
  },
  shareBtnsContainer: {
    margin: 0,
    [theme.breakpoints.down("md")]: {
      marginBottom: '10px',
    }
  },
  shareBtn: {
    width: "80%",
  },
  referralShare1: {
    textAlign: "left",
    fontSize: "17px",
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
      fontSize: "14px",
      fontWeight: "500",
    },
  },
  referralLinkBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& img": {
      width: "48px",
      height: "48px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      "& img": {
        width: "24px",
        height: "24px",
        marginBottom: "0px",
        margin: "0px 10px",
      },
    },

  },
  referralDetailBoxHeading: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "36px",
    // color: "#2D355A",
  },
  referralDetailBoxDesc: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "20px",
    // color: "#51566B",
  },
  link: {
    // color: "#2D9CDB",
    cursor: "pointer",
  },
  referralIdBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingBottom: '10px',
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    }
  },
  refMainContainer: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderRadius: "14px",
    marginTop: "6px",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20px",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "20px !important",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px !important",
      padding: "10px 6px 6px 6px !important",
      margin: 0,
    },
  },
  refItem: {
    justifyContent: 'center',
    padding: '16px 12px !important',
    [theme.breakpoints.down("md")]: {
      padding: "0px !important",
      width: "100%"
    },
  },
  referralIdBoxDivider: {
    borderRight: "1px solid rgba(255, 255, 255, 0.7)",
    paddingRight: "16px",
    [theme.breakpoints.down("md")]: {
      borderRight: "none",
      paddingRight: "0px",
    },
  },
  referralIdTitle: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 500,
    height: '40px',
    marginBottom: '2px',
  },
  referralIdValue: {
    fontSize: "15px",
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  qrIconContainer: {
    height: "40px !important", 
    width: "40px !important",
    margin: "0 10px 0 10px",
    padding: 0,
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 0 10px",
    }
  },
  stepIcon: {
    height: "110px !important", width: "110px !important",
    [theme.breakpoints.down("sm")]: {
      height: "50px !important", width: "50px !important"
    }
  },
  stepIcon1: {
    height: "40px !important", 
    width: "40px !important",
    cursor: "pointer",
    margin: 0,
    color: theme.palette.text.primary,
    background: theme.palette.callToAction.primary,
    "&:hover" : {
      background: theme.palette.callToAction.light,
    },
  },
  stepIcon2: {
    height: "15px !important", width: "15px !important",
    marginBottom: "0px !important",
    marginLeft: "5px",
  },
  customTooltip: {
    width: "500px !important"
  },
  copyTooltip: {
    color: theme.palette.bodyText.primary,
  },
  iconCotainer: {
    display: "flex",
    marginRight: "6px",
    gap: "10px",
    "& img": {
      width: "22px",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      "& img": {
        marginLeft: "10px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& img": {
        marginLeft: "0px",
        marginRight: "10px",
      },
    }
  },
},
{ name : 'referral-details-view' }));

export default styles;

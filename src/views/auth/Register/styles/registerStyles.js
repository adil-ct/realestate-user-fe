import { createStyles, makeStyles } from '@mui/styles';
// import colors from "assets/theme/base/colors";

// const { primary } = colors;

export const styles = makeStyles((theme) => createStyles({
  crackerIcon: {
    width: "24px",
    height: "24px",
    marginRight: "5px",
  },
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  linkColor: {
    // color: "#2D9CDB",
    marginLeft: "5px",
  },
  linkColor1: {
    // color: "#2D9CDB",
  },
  cursorPointer: {
    cursor: "pointer",
    // color: "#2D355A",
    textDecoration: "underline",
  },
  disabledText: {
    opacity: 0.6,
    // color: "#2D355A",
    textDecoration: "underline",
  },
  infoAlert: {
    margin: "5px",
  },
  verifyBtn: {
    padding: "0px 25px",
    height: "44px",
    // background: `${primary.main} !important`,
    borderTopRightRadius: "5px !important",
    borderBottomRightRadius: "5px !important",
    borderTopLeftRadius: "0px !important",
    borderBottomLeftRadius: "0px !important",
    fontSize: "14px",
    fontWeight: 400,
    // color: "#040407 !important",
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
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
    // color: "#4CAF50",
  },
  checkIcon: {
    width: "20px",
    height: "20px",
    marginRight: "4px",
    [theme.breakpoints.down(426)]: {
      marginRight: "-7px",
    },
    [theme.breakpoints.down(321)]: {
      width: "17px",
      height: "17px",
    },
  },
  nextBtnBox: {
    marginBottom: 25,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
      flexDirection: "column",
    },
  },
  nextBtnBox1: {
    marginBottom: 25,
    marginTop: "-10px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
    },
  },
  detailsContainerBox: {
    padding: "20px",
    minHeight: "calc(100vh - 125px)",
  },
  detailsOutterBox: {
    mx: "auto",
    // background: "white",
    border: "2px solid rgb(230,230,230)",
    borderRadius: 10,
    minHeight: "calc(100vh - 165px)",
    overflow: "hidden",
  },
  detailsInnerBox: {
    maxWidth: 880,
    width: "100%",
    margin: "42px auto",
    [theme.breakpoints.down("sm")]: {
      margin: "30px auto 0px",
    },
  },
  stepperBox: {
    margin: "0 30px 26px",
  },
  headingBox: {
    // border: "1px solid #E5E5E5",
    borderRadius: "12px 12px 0 0",
    // background: "#FAF9FD",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
  },
  headingText: {
    padding: "19px 40px",
    // color: "#2D355A",
  },
  secondaryHeading: {
    // color: "#2D355A",
    padding: "30px 40px 12px",
  },
  twoFAdescription: {
    // color: "#2D355A",
    padding: "0px 40px 30px",
  },
  labelContainer: {
    display: "flex",
  },
  authAppLabel: {
    fontSize: "16px",
    fontWeight: 500,
    marginLeft: "10px",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "15px",
    },
  },
  authAppLabelLinkContainer: {
    display: "flex",
  },
  authAppLabelLink: {
    // color: "#2D9CDB",
    whiteSpace: "nowrap",
  },
  headingBoxOutter: {
    height: "100%",
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px",
    },
  },
  detailsSection: {
    // border: "1px solid #E5E5E5",
    borderRadius: "0px 0px 12px 12px",
    borderTop: 0,
    // flex: 1,
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  nextBtn: {
    width: "220px",
    fontSize: "14px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  nextBtnVerify: {
    width: "220px",
    fontSize: "14px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  nextBtnMobile: {
    width: "220px",
    fontSize: "14px",
    fontWeight: 500,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down(426)]: {
      display: "flex !important",
    },
  },
  formContainer1: {
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px",
    },
  },
  nextBtn1: {
    width: "220px",
    fontSize: "14px",
    fontWeight: 500,
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0px",
      marginTop: "10px",
    },
  },
  pTop: {
    paddingTop: "7px !important",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5px !important",
    },
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
  mt20: {
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  sectionTerms: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px ",
    },
  },
  inputError: {
    marginLeft: 14,
    fontWeight: 400,
  },
  kycdescription: {
    // color: "#2D355A",
    padding: "20px 40px",
    margin: "auto",
  },
  kycdescription1: {
    // color: "#2D355A",
    padding: "0px 40px",
    fontWeight: "bold",
    paddingTop: "20px !important",
    fontSize: "15px",
  },
  tooltipText: {
    // borderBottom: "1px dotted #2D355A",
  },
  kycDisclaimer: {
    // color: "#0404078a",
    padding: "30px 40px",
    margin: "auto",
  },
  radioGroupUpperBox: {
    margin: "0 40px",
    paddingLeft: "10px",
  },
  verifiedText: {
    fontSize: "13px",
    fontWeight: 600,
    "@media (max-width:453px)": {
      display: "none",
    },
  },
},
{ name : 'auth-register-view-register' }));

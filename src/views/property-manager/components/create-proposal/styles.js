import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "20px 40px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 10px",
    },
  },
  docTitle: {
    fontSize: "14px",
    fontWeight: "400",
    display: "flex",
  },
  fileUploadMainBox: {
    display: "flex",
    justifyContant: "space-between !important",
    border: "1px solid #DCE1E7",
    borderRadius: "5px",
    height: "44px",
    overflow: "hidden",
  },
  fileUploadText: {
    fontSize: "14px",
    fontWeight: 400,
    // color: "#939090",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  uploadBtnBox: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    // background: "#FAFAFA",
    fontSize: "14px",
    fontWeight: 400,
  },
  dFlexDoc: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginLeft: "5px",
  },
  dIcon: {
    marginRight: "3px",
    // color: "#15c",
    fontSize: "18px",
  },
  pIcon: {
    marginRight: "3px",
    // color: "red",
    fontSize: "18px !important",
  },
  videoTag: {
    height: "fit-content",
    width: "300px",
    marginRight: "10px",
    marginBottom: "10px",
  },
  documentErrorBox: {
    color: theme.palette.error.main,
    fontSize: "12px",
    fontWeight: 300,
    marginTop: "4px",
    marginLeft: "12px",
  },
  descriptionTextError: {
    color: theme.palette.error.main,
    fontSize: "0.75rem",
    fontWeight: 300,
  },
  descriptionTextError1: {
    color: theme.palette.error.main,
    fontSize: "0.75rem",
    fontWeight: 300,
    marginLeft: "5px",
    marginTop: "5px",
  },
  borderBox: {
    // border: "1px solid #dadada",
    borderRadius: "3px",
  },
  errorBorderBox: {
    // border: "1px solid #D32F2F",
    borderRadius: "3px",
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
    justifyContent: "flex-end",
  },
  mr20: {
    marginRight: "20px",
  },
  btnIcon: {
    marginRight: "5px",
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
  },
  accountSettingsMainContainer: {
    marginTop: "50px",
    padding: "40px 130px",
    // background: "#fff",
    "@media (max-width:600px)": {
      padding: "10px",
      border: "none",
      borderRadius: "none",
    },
    "@media (max-width:900px)": {
      padding: "0px",
      border: "none",
      borderRadius: "none",
    },
  },
  AccountSettingInsideContainer: {
    // border: "1px solid #E5E5E5",
    borderRadius: "12px",
    "@media (max-width:600px)": {
      border: "none",
    },
  },
  pBox: {
    padding: "30px",
    "@media (max-width:600px)": {
      padding: "10px",
    },
  },
  AccountSettingLabel: {
    // background: "#FAF9FD",
    borderRadius: "12px 12px 0px 0px",
    padding: "10px 0px 10px 30px",
    fontWeight: "600",
    fontSize: "20px",
    "@media (max-width:600px)": {
      marginTop: "-40px",
      padding: "10px 0px 10px 10px",
    },
    // "@media (max-width:900px)": {
    //   background: "#fff",
    // },
  },
  nextBtnBox: {
    marginBottom: 25,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
  },
  nextBtn: {
    width: "220px",
    fontSize: "14px",
    fontWeight: 500,
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  docStyle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "16px",
      marginBottom: "10px",
    },
  },
  fileUploadImage: {
    display: "flex",
    flexWrap: "wrap",
  },
  fileUploadImage1: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "15px",
  },
  posFlex: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  posFlex1: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    width: "33%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  posRelative: {
    position: "relative",
  },
  editImage: {
    height: "200px",
    width: "200px",
    margin: "10px",
    border: "1px solid grey",
    borderRadius: "10px",
    objectFit: "cover",
  },
  closeIcon: {
    position: "absolute",
    right: "25px",
    top: "20px",
    // background: theme.palette.callToAction.closeIcon.light,
    padding: "3px",
    // border: "1px solid grey",
  },
  closeIcon1: {
    // background: theme.palette.callToAction.closeIcon.light,
    // border: "1px solid grey",
    padding: "1px",
  },
  inputText: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    margin: "20px",
    cursor: "pointer",
  },
  nextBtn1: {
    width: "220px",
    fontSize: "14px",
    fontWeight: 500,
    marginLeft: "10px",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "30px",
    marginTop: "30px",
  },
  descriptionText: {
    fontSize: "14px",
    fontWeight: 400,
  },
},
{ name : 'property-manager-view-create-proposal-component' }));

export default styles;

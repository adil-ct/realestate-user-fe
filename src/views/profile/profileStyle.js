import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  accountSettingsContainer: {
    padding: "20px 34px 20px 34px",
    "@media (max-width:600px)": {
      padding: "20px 20px 20px 20px",
    },
  },
  profileFormTopContainer: {
    color: theme.palette.bodyText.primary,
  },
  infoAlert: {
    margin: "10px 25px",
    display: "flex",
    alignItems: "center",
  },
  gridItem: {
    paddingTop: "14px !important",
    "@media (max-width:600px)": {
      paddingLeft: "18px !important",
      paddingRight: "0px !important",
    },
  },
  ssnInput: {
    '& button': {
      marginLeft: '5px',
      marginTop: '4px',
      marginBottom: '2px',
      float: 'right',
    }
  },
  dobInput : {
    "& .Mui-disabled" : {
      opacity: 1,
      // "& input" :{
      //   color: theme.palette.bodyText.disabled,
      // }
      // color: theme.palette.bodyText.disabled,
      // backgroundColor: '#F5F5F5',
    },
    // "& .MuiOutlinedInput-notchedOutline" : {
    //     borderColor : '#d2d6da  !important',
    // },
    // "& .MuiInputBase-root input" : {
    //   "&:disabled": {
    //     color: '#4F4F4F !important',
    //     "-webkit-text-fill-color": "#4F4F4F !important",
    //   },
    // },
  },
  disabledText: {
    opacity: 0.6,
    // color: "#2D355A",
    textDecoration: "underline",
  },
  cursorPointer: {
    cursor: "pointer",
    // color: "#2D355A",
    textDecoration: "underline",
  },
  profileStatusPending: {
    // color: "#FB8C00",
    fontSize: "14px",
  },
  accountSettingsMainContainer: {
    border: `1px solid ${theme.palette.subBackground.primary}`,
    borderRadius: "12px",
    padding: "80px 130px",
    background: theme.palette.subBackground.primary,
    "@media (max-width:600px)": {
      padding: "40px 0px",
      border: "none",
      borderRadius: "none",
    },
    "@media (max-width:900px)": {
      padding: "40px 0px",
      border: "none",
      borderRadius: "none",
    },
  },
  AccountSettingInsideContainer: {
    background: theme.palette.foreground.primary,
    border: `1px solid ${theme.palette.subBackground.primary}`,
    borderRadius: "12px",
  },
  AccountSettingLabel: {
    color: theme.palette.bodyText.primary,
    background: theme.palette.grey[25],
    borderRadius: "12px 12px 0px 0px",
    padding: "10px 40px 10px 40px",
    fontWeight: "600",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      padding: "10px 20px 10px 20px",
    },
    // "@media (max-width:900px)": {
    //   background: "#fff",
    // },
  },
  profileEditImgContainer: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    width: "30px",
    color: theme.palette.callToAction.primary,
    "& svg.MuiSvgIcon-root": {
      width: "100%",
      height: "100%",
    },
    "&:hover" : {
      color: theme.palette.callToAction.light,
    },
  },
  profileInitialsContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  profileInitials: {
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.grey[200]}`,
    background: theme.palette.grey[400],
    // color: "#58F2F0",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: 500,
    "@media (max-width:600px)": {
      height: "40px",
      width: "40px",
      fontSize: "16px",
    },
  },
  profileWalletAddress: {
    fontSize: "14px",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: theme.palette.callToAction.secondary.main,
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  profileWalletAddressText: {
    maxWidth: "fit-content",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.bodyText.primary,
  },
  copyIcon: {
    width: "19px",
    height: "19px",
    marginLeft: "8px",
  },
  walletIcon: {
    width: "21px",
    height: "21px",
    marginRight: "6px",
  },
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
  verifyBtn: {
    padding: 0,
    margin: "auto",
    minHeight: "100%",
    maxHeight: "100%",
    maxWidth: '60px',
    minWidth: '60px',
    borderRadius: "5px !important",
    fontSize: "14px",
    fontWeight: 400,
  },
  phoneNumberBox: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  phoneText: {
    userSelect: "none",
    height: "44px",
    display: "flex !important",
    alignItems: "center",
    fontSize: "13px",
    fontWeight: 600,
    color: theme.palette.success.main,
  },
  checkIcon: {
    width: "20px",
    height: "20px",
    marginRight: "4px",
  },
  nextBtnBox: {
    marginBottom: 25,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
  },
  detailsContainerBox: {
    padding: "20px",
    minHeight: "calc(100vh - 125px)",
  },
  detailsOutterBox: {
    mx: "auto",
    // background: "white",
    // border: "2px solid rgb(230,230,230)",
    borderRadius: 10,
    minHeight: "calc(100vh - 165px)",
    overflow: "hidden",
  },
  detailsInnerBox: {
    maxWidth: 880,
    width: "100%",
    margin: "42px auto",
  },
  stepperBox: {
    margin: "0 30px 26px",
  },
  headingBox: {
    border: `1px solid ${theme.palette.subBackground.primary}`,
    borderRadius: "12px 12px 0 0",
    // background: "#FAF9FD",
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
  authAppLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: 500,
    marginLeft: "10px",
  },
  headingBoxOutter: {
    height: "100%",
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "column",
  },
  detailsSection: {
    border: `1px solid ${theme.palette.subBackground.primary}`,
    borderRadius: "0px 0px 12px 12px",
    borderTop: 0,
    flex: 1,
  },
  nextBtn: {
    width: "220px",
    fontSize: "14px",
    fontWeight: 500,
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
  sectionTerms: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px ",
    },
  },
  inputError: {
    // color: "##f44336 !important",
    marginLeft: 14,
    fontWeight: 400,
  },
  kycdescription: {
    // color: "#2D355A",
    padding: "30px 40px",
  },
  verifiedText: {
    fontSize: "13px",
    fontWeight: 600,
    "@media (max-width:453px)": {
      display: "none",
    },
  },
  address2: {
    "& .MuiTypography-root": {
      marginTop: "9.5px",
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
      }
    }
  },
},
{ name : 'profile-view' }));

export default styles;

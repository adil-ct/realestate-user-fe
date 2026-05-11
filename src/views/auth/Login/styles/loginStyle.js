import { createStyles, makeStyles } from '@mui/styles';

const loginStyle = makeStyles((theme) => createStyles({
  labelColor: {
    fontWeight: "400",
    fontSize: "14px !important",
    // color: "#51566B",
  },
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  maxWidth: {
    "@media (max-width:820px) and (min-width:426px)": {
      maxWidth: "75%",
    },
  },
  formLink: {
    color: theme.palette.callToAction.light,
    fontWeight: "400",
    fontSize: "12px",
  },
  formLink1: {
    fontSize: "14px",
    fontWeight: 500,
  },
  formLink2: {
    fontSize: "14px",
    fontWeight: 400,
  },
  passwordIcon: {
    // color: "#C4C4C4",
  },
  iconButton: {
    fontSize: "20px",
  },
  resetButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  button50Width: {
    marginTop: 2.5,
    width: "48%",
  },
  button51Width: {
    marginTop: 2.5,
    width: "49%",
    [theme.breakpoints.down("sm")]: {
      width: "48%",
    },
  },
  marginRight20: {
    marginRight: "10px",
  },
  formContainer: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.foreground.primary,
    color: theme.palette.bodyText.primary,
    // border: "1px solid #E5E5E5",
    borderRadius: "12px",
    // boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.05)",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    width: "auto",
    "@media (max-width:820px) and (min-width:426px)": {
      maxWidth: "100%",
    },
    "@media min-width: 700px)": {
      // Override MUI
      // backgroundColor: "white",
      // border: "1px solid #E5E5E5",
      borderRadius: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },
  labelGrid: {
    // backgroundColor: "transparent",
    border: "none",
  },
  checkCircleIcon: {
    fontSize: "16px !important",
    marginLeft: "2px",
    // color: "#4CAF50",
  },
  checkBox: {
    marginRight: 1,
    alignItems: "flex-start",
    height: "100%",
    color: theme.palette.grey[200],
    background: 'transparent',

    "&:hover" : {
      background: 'transparent',
    }
  },
  logo: {
    height: "50px",
    width: "50px",
    marginTop: "20px",
    marginBottom: "-20px",
  },
  termsText: {
    cursor: "pointer",
    // color: "#2D355A",
    fontSize: "13px",
  },
  mainDialog3: {
    "& .MuiDialogContent-root": {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        padding: "20px 0px",
        maxWidth: "528px", // Set your width here
        borderRadius: "4px",
      },
    },
  },
  dialogContent1: {
    alginItems: "center",
    fontWight: "400",
    // color: "#4F4F4F",
    width: "95%",
    textAlign: "center",
    margin: "-20px auto",
    padding: "0px !important",
    "@media (max-width:600px)": {
      width: "95%",
      padding: "0px 5px",
    },
  },
  modalContainer: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    border: "none",
  },
  paddingModal: {
    minHeight: "500px",
    height: "auto",
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "100px 0px !important",
    paddingBottom: 4,
    [theme.breakpoints.down("md")]: {
      minHeight: "none",
      padding: "50px 0px !important",
      height: "auto",
      paddingBottom: 4,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0px !important",
    }
  },
  paddingModal1: {
    minHeight: "calc(100vh - 125px)",
    height: "auto",
    display: "flex",
    alignItems: "center",
    padding: "100px 0px !important",
    paddingBottom: 4,
    [theme.breakpoints.down("md")]: {
      minHeight: "none",
      padding: "50px 0px !important",
      height: "auto",
      paddingBottom: 4,
    },
  },
  mBottom50: {
    marginBottom: "-50px",
  },
  sectionTerms: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px ",
    },
  },
  link: {
    textDecoration: "none",
    // color: "#2D9CDB",
  },
  mTopReg: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-20px",
    },
  },
  link1: {
    // color: "#51566B",
    cursor: "pointer",
    fontSize: "14px",
    padding: "5px 0px",
    marginTop: "-20px",
    marginBottom: "-5px", 
  },
  inputError: {
    // color: "#D32F2F !important",
    color: 'error',
    marginLeft: 14,
    fontWeight: 300,
  },
  borderRadiusMobile: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    // backgroundColor: "transparent",
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
    display: "none ",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    padding: 2,
    minHeight: "200px",
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
    minHeight: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
},
{ name : 'auth-login-view' }));

export default loginStyle;

import { createStyles, makeStyles } from '@mui/styles';

export const walletModalStyles = makeStyles((theme) => createStyles({
  bankModal: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        "&::-webkit-scrollbar": {
          display: "none",
        },
        width: "100%",
        maxWidth: "500px", // Set your width here
        borderRadius: "4px",
      },
    },
  },
  labelText: {
    fontSize: "14px",
    marginLeft: "5px",
    fontWeight: "500",
    paddingBottom: "0px",
  },
  labelText1: {
    fontSize: "13px",
    marginLeft: "-10px",
    marginTop: "10px",
    marginBottom: "0px",
    fontWeight: "400",
    paddingBottom: "0px",
  },
  toolTip: {
    // width: "300px",
  },
  subHeader: {
    // color: " #51566B",
    fontWeight: "400",
  },
  title: {
    fontSize: "30px",
  },
  mainTitle: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: 700,
  },
  radioButtonGroup: {
    marginLeft: "13px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  radioButtonGroupBox: {
    gap: "10px",
  },
  mr10: {
    marginRight: "28px",
  },
  radioLabelBox: {
    display: "flex",
    alignItems: "center",
  },
  radioBtn: {
    marginTop: "15px",
    padding: "0 2.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  buttonWidth: {
    width: "49%",
  },
  closeIconRight: {
    marginRight: 10,
    marginTop: 10,
  },
},
{ name : 'wallet-modals-shared-styles' }));

export const AddAchFieldModuls = makeStyles((theme) => createStyles({
  mainpadding: {
    padding: "0 2.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  plaidText: {
    display: "flex",
    alignItems: "center",
    marginLeft: "-5px",
  },
  mkButton1: {
    // background: "white",
    justifyContent: "flex-start",
  },
  mkButton2: {
    // border: "1px solid #EEEEEE",
    justifyContent: "flex-start",
    // background: "white",
  },
  plaidText1: {
    marginLeft: "-5px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkIcon: {
    height: "1.2em",
    width: "1.2em",
    marginRight: "-10px",
  },
  plaidImage: {
    height: "20px",
    width: "20px",
    marginRight: "10px",
  },
  subHeaderRed: {
    // color: "red",
    fontWeight: "400",
  },
  subHeaderGrey: {
    // color: "grey",
    fontWeight: "400",
  },
  dummy: {
    fontSize: "30px",
  },
  countryHeight: {
    lineHeight: "3.3",
  },
  subHeader: {
    // color: " #51566B",
    fontWeight: "400",
  },
  subHeaderPhone: {
    // color: " #51566B",
    fontWeight: "400",
    marginBottom: "3px",
  },
  borderColor: {
    width: "100%",
    paddingTop: "11px",
    paddingBottom: "12px",
  },
  phoneNumInput: {
    marginTop: "24px",
    marginBottom: "5px",
  },
  button50Width: {
    marginTop: 2.5,
    width: "48%",
  },
  marginRight20: {
    marginRight: "10px",
  },
  tokenBtn: {
    marginRight: "-8px",
    // background: "white",
    padding: "0 !important",
    width: "50px",
    boxShadow: "none",
    "&:hover": {
      // backgroundColor: "white",
      boxShadow: "none",
    },
    "&:focus:not(:hover)": {
      // backgroundColor: "white",
      boxShadow: "none",
    },
    "&:disabled": {
      // backgroundColor: "white",
      boxShadow: "none",
    },
  },
},
{ name : 'wallet-modals-add-ach-field' }));

export const AddWireFieldModuls = makeStyles((theme) => createStyles({
  mainpadding: {
    padding: "0 2.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  dummy: {
    fontSize: "30px",
  },
  wireModulMargin: {
    marginTop: "20px",
  },
  countryHeight: {
    lineHeight: "3.3",
  },
  subHeader: {
    // color: " #51566B",
    fontWeight: "400",
  },
  subHeaderRed: {
    // color: "red",
    fontWeight: "400",
  },
  subHeaderGrey: {
    // color: "grey",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "18px",
  },
  subHeaderPhone: {
    // color: " #51566B",
    fontWeight: "400",
    marginBottom: "3px",
  },
  button50Width: {
    marginTop: 2.5,
    width: "48%",
  },
  marginRight20: {
    marginRight: "10px",
  },
}, 
{ name : 'wallet-modals-add-wire-field' }));

export const AddBillDetailsModuls = makeStyles((theme) => createStyles({
  mainpadding: {
    padding: "0 2.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  pright8: {
    paddingRight: "8px !important",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0 !important",
    },
  },
  pleft8: {
    paddingLeft: "8px !important",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0 !important",
    },
  },
  subHeaderRed: {
    // color: "red",
    fontWeight: "400",
  },
  subHeaderGrey: {
    // color: "grey",
    fontWeight: "400",
  },
  backArrow: {
    marginTop: "15px",
    marginLeft: "20px",
    fontWeight: "400",
    // color: "#2D355A",
    cursor: "pointer",
  },
  arrowAline: {
    paddingTop: "5px",
  },
  title: {
    fontSize: "30px",
  },
  mainTitle: {
    textAlign: "center",
  },
  wireModulMargin: {
    // marginTop: "20px",
  },
  countryHeight: {
    lineHeight: "3.3",
  },
  wireSwitch: {
    display: "flex",
    justifyContent: "space-between",
  },
  switchHeader: {
    // color: "#303030",
    fontWeight: "500",
    marginTop: "10px",
  },
  subHeader: {
    // color: " #51566B",
    fontWeight: "400",
  },
  subHeaderPhone: {
    // color: " #51566B",
    fontWeight: "400",
  },
  closeIconRight: {
    marginRight: 10,
    marginTop: 10,
    // background: "#000",
    borderRadius: "50%",
    // color: "#fff",
    cursor: "pointer",
  },
  button50Width: {
    marginTop: 2.5,
    width: "48%",
  },
  marginRight20: {
    marginRight: "10px",
  },
},
{ name : 'wallet-modals-add-bill-details' }));

export const AddCardDetailsModuls = makeStyles((theme) => createStyles({
  isInvalid: {
    border: "1px solid red !important",
  },
  stripeCardNumber: {
    // border: "1px solid #d2d6da",
    borderRadius: "0.375rem",
    padding: "10px",
  },
  mainpadding: {
    padding: "0 2.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  backArrow: {
    marginTop: "15px",
    marginLeft: "20px",
    fontWeight: "400",
    // color: "#2D355A",
  },
  arrowAline: {
    paddingTop: "5px",
  },
  title: {
    fontSize: "30px",
  },
  mainTitle: {
    textAlign: "center",
    fontWeight: "700",
  },
  wireModulMargin: {
    marginTop: "20px",
  },
  sectionTerms: {
    display: "flex",
    padding: "0",
    marginTop: "10px",
    marginBottom: "-10px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px ",
    },
  },
  checkBox: {
    marginRight: 1,
    alignItems: "flex-start",
    height: "100%",
  },
  termsText: {
    cursor: "pointer",
    // color: "#2D355A",
    fontSize: "13px",
    textAlign: "left",
    display: "flex",
  },
  termsText1: {
    marginTop: "-20px",
    marginBottom: "10px",
    cursor: "pointer",
    textAlign: "left",
    // color: "blue",
    fontSize: "14px",
  },
  countryHeight: {
    lineHeight: "3.3",
  },
  wireSwitch: {
    display: "flex",
    justifyContent: "space-between",
  },
  switchHeader: {
    // color: "#303030",
    fontWeight: "500",
    marginTop: "10px",
  },
  subHeader: {
    // color: " #51566B",
    fontWeight: "400",
  },
  subHeaderPhone: {
    // color: " #51566B",
    fontWeight: "400",
    marginBottom: "3px",
  },
  closeIconRight: {
    marginRight: 10,
    marginTop: 10,
    // background: "#000",
    borderRadius: "50%",
    // color: "#fff",
    cursor: "pointer",
  },
  reqColor: {
    // color: "#db4b5e",
  },
  phoneNumInput: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  button50Width: {
    marginTop: 2.5,
    width: "48%",
  },
  marginRight20: {
    marginRight: "10px",
  },
},
{ name : 'wallet-modals-add-card-details' }));

export const WithdrawModuls = makeStyles((theme) => createStyles({
  sectionTerms: {
    display: "flex",
    padding: "0",
    marginTop: "10px",
    marginLeft: "20px",
    marginBottom: "-10px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px ",
    },
  },
  checkBox: {
    marginRight: 1,
    alignItems: "flex-start",
    height: "100%",
  },
  termsText: {
    cursor: "pointer",
    // color: "#2D355A",
    fontSize: "13px",
    textAlign: "left",
    display: "flex",
  },
  termsText1: {
    marginTop: "-20px",
    marginBottom: "10px",
    cursor: "pointer",
    textAlign: "left",
    // color: "blue",
    fontSize: "14px",
  },
  mainpadding: {
    padding: "0 2.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  wireModulMarginNew: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  marginRight20: {
    marginRight: "10px",
  },
  subHeaderRed: {
    // color: "red",
    fontWeight: "400",
  },
  subHeader1: {
    // color: "#1b1c1edb",
    marginTop: "14px",
    fontWeight: "400",
  },
  placeholderFixed: {
    "&::placeholder": {
      // color: "#303030",
      opacity: 1,
      fontWeight: 600,
      fontSize: "14px",
    },
  },
  phoneText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    marginRight: "5px",
    // color: "green",
  },
  backArrow: {
    marginTop: "15px",
    marginLeft: "20px",
    fontWeight: "400",
    // color: "#2D355A",
  },
  arrowAline: {
    paddingTop: "5px",
  },
  iframeContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: "50px",
    height: "90%",
  },
  iframeStyle: {
    height: "100%",
    width: "400px",
    border: "none !important",
    overflow: "hidden",
  },
  mainDialog4: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        padding: "10px 0px",
        maxWidth: "528px", // Set your width here
        borderRadius: "4px",
      },
    },
  },
  mainDialog3: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        maxWidth: "420px", // Set your width here
        borderRadius: "4px",
        height: "95vh",
        minHeight: "70vh",
      },
    },
  },
  title: {
    fontSize: "30px",
  },
  mainTitle: {
    textAlign: "center",
  },
  countryHeight: {
    lineHeight: "3.3",
  },
  subHeader: {
    // color: " #51566B",
    fontWeight: "400",
    textAlign: "left",
  },
  closeIconRight: {
    marginRight: 10,
    marginTop: 10,
  },
  closeIcon1: {
    marginRight: 10,
    marginTop: 10,
  },
  pointerClass: {
    cursor: "pointer",
  },
  withdrawFee: {
    fontSize: "14px",
    // color: "#2D355A",
  },
  withdrawBorder: {
    // borderBottom: "1px solid #E5E5E5",
  },
  withdrawDescription: {
    // color: "#2D355A",
    fontWeight: "500",
  },
  button50Width: {
    marginTop: 2.5,
    width: "70%",
  },
  withdrawText: {
    "& input::placeholder": {
      // color: "#000",
      fontWeight: "600",
    },
  },
  backButton: {
    margin: "10px",
    cursor: "pointer",
  },
  labelSelectCard: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  placeholder: {
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "16px",
    // color: "#939090",
  },
  addCardImg: {
    height: "24px",
    width: "24px",
    marginRight: "5px",
  },
  iImage: {
    marginLeft: "5px",
  },
},
{ name : 'wallet-modals-withdraw-modals' }));



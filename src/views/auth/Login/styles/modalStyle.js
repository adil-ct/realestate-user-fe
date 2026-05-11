import { createStyles, makeStyles } from '@mui/styles';

export const styles = makeStyles(() => createStyles({
  closeIconRight: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    // background: "#1A1F35",
    // color: "#fff",
    borderRadius: "36px ",
    width: "20px",
    height: "20px",
  },
  dialogContent: {
    alginItems: "center",
    fontWight: "400",
    // color: "#4F4F4F",
    width: "90%",
    margin: "auto",
    textAlign: "center",
    paddingBottom: "0px",
    "@media (max-width:600px)": {
      width: "95%",
      padding: "0px 5px",
    },
  },

  dialogTitle2: {
    width: "528px",
    padding: "0px",
    margin: "auto",
    "@media (max-width:600px)": {
      width: "343px",
    },
  },
  depositModalTitle: {
    width: 432,
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "35px",
    margin: "40px 0px 20px 0px",
    "@media (max-width:600px)": {
      fontSize: "24px",
      width: 343,
      margin: "15px 0px",
    },
  },
  depositSelectBox3: {
    flexDirection: "column",
  },

  selectBoxMainContainer: {
    margin: "16px 0px 20px",
  },

  choose2FAOption: {
    fontWeight: "400",
    fontSize: "16px",
    // color: "#4F4F4F",
    margin: "auto",
  },
  OrText: {
    fontWeight: "500",
    fontSize: "16px",
    // color: "#4F4F4F",
    margin: "auto",
  },
  notchedOutline: {
    // border: "1px solid #4f4f4f66",
  },
  emailInput: {
    width: "100%",
    marginBottom: "40px",
    "& .css-1u16tb8-MuiInputBase-root-MuiOutlinedInput-root": {
      paddingRight: 0,
    },
    // "& .MuiInputBase-input::placeholder": {
    //   color: "#939090",
    //   opacity: 1,
    // },
  },
  headerButton2: {
    borderRadius: "0 6px 6px 0",
    height: "44px",
    // background: "#58F2F0",
    width: "56px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  arrowIcon: {
    width: "30px",
  },
  linkColor: {
    fontWeight: "400",
    fontSize: "16px",
    margin: "auto",
    // color: "#2D9CDB",
  },
},
{ name : 'auth-login-view' }));

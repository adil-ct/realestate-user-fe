
import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles(() => createStyles({
  modalBottomButtonConsent1: {
    display: "flex",
    marginTop: "20px",
    width: "100%",
    margin: "auto",
    justifyContent: "space-evenly",
    paddingBottom: "30px",
  },
  modalTitle1Earn: {
    width: "100%",
    fontWeight: "700",
    margin: "10px 0px",
    // color: "#1B1C1E",
    fontSize: "30px",
    lineHight: "24px",
    textAlign: "center",
    "@media (max-width:600px)": {
      fontSize: "20px",
      fontWeight: "600",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
    "@media (max-width:600px)": {
      justifyContent: "center",
    },
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    margin: "0px auto",
    width: "80%",
    marginTop: "30px",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  iconImage2: {
    height: "50px",
    width: "50px",
  },
  iconImage3: {
    height: "66px",
    width: "60px",
  },
  stepBox: {
    top: "-20px",
    left: "-15px",
    zIndex: 500,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    borderRadius: "8px",
    // background:
    //   "linear-gradient(160deg, rgba(66,57,140,1) 0%, rgba(113,71,135,1) 39%, rgba(45,53,90,1) 100%)",
  },
  stepText: {
    // color: "white",
    fontWeight: 500,
    fontSize: "30px",
  },
  stepText1: {
    // color: "#51566B",
    fontWeight: 500,
    fontSize: "14px",
    width: "80%",
    textAlign: "center",
  },
  gridBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "280px",
    "@media (max-width:800px)": {
      marginBottom: "30px",
    },
  },
  iconBox: {
    height: "170px",
    width: "100%",
    position: "relative",
    maxWidth: "190px",
    // border: "1px solid #F7F7F7",
    // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    "@media (max-width:600px)": {
      marginRight: "15px",
      marginLeft: "15px",
    },
  },
  dialogConsentEarn: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        padding: "40px 0px",
        width: "100%",
        maxWidth: "800px", // Set your width here
        borderRadius: "4px",
      },
    },
  },
},
{ name : 'deposit-step-styles-modal-component' }));

export default styles;

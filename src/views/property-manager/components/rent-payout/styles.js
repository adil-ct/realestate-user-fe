import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "20px 40px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 10px",
    },
  },
  mainContainer: {
    minHeight: "calc(100vh - 125px)",
    padding: "24px 20px",
    // background: "#fff",
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
  accountSettingsMainContainer: {
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
  },
  AccountSettingLabel: {
    // background: "#FAF9FD",
    borderRadius: "12px 12px 0px 0px",
    padding: "10px 0px 10px 40px",
    fontWeight: "600",
    fontSize: "20px",
    "@media (max-width:600px)": {
      padding: "10px 0px 10px 20px",
    },
    // "@media (max-width:900px)": {
    //   background: "#fff",
    // },
  },
  extraFields: {
    position: "relative",
  },
  addFieldsBox: {
    display: "flex",
    alignItems: "center",
    // color: "#2D9CDB",
    fontSize: "14px",
    fontWeight: 400,
    cursor: "pointer",
  },
  addFieldsImg: {
    marginRight: "8px",
    height: "24px",
    width: "24px",
  },
  fileUploadMainBox: {
    display: "flex",
    justifyContant: "space-between !important",
    // border: "1px solid #DCE1E7",
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
    padding: "0 20px",
    fontWeight: 400,
    cursor: "pointer",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    gap: "20px",
  },
  extraFieldCount: {
    position: "absolute",
    left: "5px",
    top: "50%",
  },
  extraFieldCancle: {
    position: "absolute",
    right: "-30px",
    top: "58%",
    cursor: "pointer",
  },
  docTitle: {
    fontSize: "14px",
    fontWeight: "400",
  },
  documentErrorBox: {
    // color: "#D32F2F",
    fontSize: "12px",
    fontWeight: 300,
    marginTop: "4px",
    marginLeft: "12px",
  },
  butns: {
    width: "150px",
  },
},
{ name : 'property-manager-rent-payout-component' }));

export default styles;

import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  accountContainer: {
    padding: "80px 25px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",
    },
  },
  subContainer: {
    marginRight: "20px",
    marginLeft: "20px",
    background: theme.palette.foreground.primary,
    color: theme.palette.bodyText.primary,
    // border: "1px solid #E5E5E5",
    borderRadius: "12px",
    padding: "25px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  addButton: {
    marginTop: "0px",
    marginBottom: "30px",
    // maxHeight: "30px",
    fontSize: "14px",
    fontWeight: 500,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  addIcon: {
    marginRight: "5px",
    height: "22px",
    width: "22px",
    [theme.breakpoints.down("sm")]: {
      height: "20px",
      width: "20px",
    },
  },
  addButton1: {
    marginTop: "0px",
    marginBottom: "30px",
    // color: "#040407",
    fontSize: "14px",
    fontWeight: 500,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      display: "flex",
      width: "140px",
      padding: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
      marginBottom: "10px",
      width: "100%",
      display: "flex",
    },
  },
  addIcon1: {
    // color: "#040407",
    marginRight: "5px",
    height: "22px",
    width: "22px",
    [theme.breakpoints.down("sm")]: {
      height: "20px",
      width: "20px",
    },
  },
  mainTitle: {
    paddingTop: "0px",
    // color: "#2D355A",
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  subtitle: {
    paddingTop: 0,
    // color: "#0E111D",
    fontSize: "16px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  bankDetails: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    "@media (max-width:600px)": {
      margin: "-20px 0",
    },
  },
  bankCardContainer: {
    marginLeft: "-20px",
    marginRight: "-20px",
  },
  savedCardContainer: {
    "@media (max-width:600px)": {
      margin: "-20px 0",
    },
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  marginContent: {
    marginTop: "50px",
    marginBottom: "30px",
  },
  paddingModal: {
    paddingTop: "20px !impo2rtant",
    paddingBottom: 4,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 4,
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
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },
  sectionDesktop: {
    display: "none !important",
    [theme.breakpoints.up("md")]: {
      display: "block !important",
    },
  },
  sectionDesktopFlex: {
    display: "none !important",
    [theme.breakpoints.up("sm")]: {
      display: "flex !important",
    },
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

  // Card skelton styles

  cardSkeltonContainer: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderRadius: 2.5,
    padding: "20px",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    // border: "1px solid #E5E5E5",
    // background: "#fff",
    maxHeight: "500px",
    overflowY: "scroll",
    width: "95vw",
    boxSizing: "border-box",
    height: "500px",
    position: "relative",
    "@media (min-width: 600px)": {
      width: "85vw",
    },
    "@media (max-width: 600px)": {
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
  innerSkelton: {
    "@media (max-width: 600px)": { border: "none" },
  },
  horizontalLine: {
    marginTop: "10px",
    marginBottom: "10px",
    opacity: "0.30",
  },

  // Table skelton styles
  tableCellSkelton: {
    fontSize: 14,
    // color: " grey",
    fontWeight: "400",
  },

  tableContainerSkelton: {
    borderRadius: "12px",
    // border: "1px solid #E5E5E5",
    display: "inlineBlock",
    overflowY: "scroll",
    position: "relative",
  },
  minWidth650: {
    minWidth: 650,
  },
  tableRowSkelton: {
    "&:last-child td, &:last-child th": { border: 0 },
  },
  tableColumnSkelton: {
    fontSize: 14,
    // color: "#1B1C1E",
    // fontFamily: "Roboto",
    fontWeight: "400",
    maxHeight: "500px",
  },
  accountSettingsContainer: {
    padding: "40px",
    minHeight: "calc(100vh - 125px)",
    "@media (max-width:600px)": {
      padding: "20px",
    },
  },
  accountSettingsMainContainer: {
    // border: "1px solid #E5E5E5",
    borderRadius: "12px",
    padding: "40px 60px",
    background: theme.palette.subBackground.primary,
    color: theme.palette.bodyText.primary,
    maxWidth: "1000px",
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
    backgroundColor: theme.palette.foreground.primary,
    borderRadius: "12px",
  },
  AccountSettingLabel: {
    background: theme.palette.background.primary,
    color: theme.palette.bodyText.primary,
    borderRadius: "12px 12px 0px 0px",
    padding: "10px 0px 10px 40px",
    fontWeight: "600",
    fontSize: "20px",
    "@media (max-width:600px)": {
      padding: "10px 0px 10px 20px",
    },
    "@media (max-width:900px)": {
      backgroundColor: theme.palette.foreground.primary,
    },
  },
  accountSettingsFlex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0px",
  },
  accountSettingsMainFlex: {
    margin: "15px 0px",
  },
  accountSettingsFlex1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:600px)": {
      margin: "0px",
    },
  },
  AccountSettingsSecurityContainer: {
    padding: "0px 40px",
    marginTop: "30px",
    "@media (max-width:600px)": {
      padding: "0px 20px",
      marginTop: "10px",
    },
  },
  NotificationSettingsSecurityContainer: {
    padding: "0px 40px",
    marginTop: "30px",
    "@media (max-width:600px)": {
      padding: "0px 20px",
      marginTop: "10px",
    },
  },
  AccountSettingsSecurityContainer2: {
    "@media (max-width:600px)": {
      display: "none",
    },
  },
  AccountSettingTitle: {
    fontSize: "16px",
    fontWeight: "700",
    // color: "#2D355A",
  },
  AccountSettingLabel2: {
    fontSize: "14px",
    fontWeight: "400",
    // color: "#2D355A",
  },
  AccountSettingLabel22: {
    fontSize: "14px",
    fontWeight: "400",
    // color: "#2D355A",
    "@media (max-width:600px)": {
      fontWeight: "600",
    },
  },
  AccountSettingLink: {
    fontSize: "14px",
    fontWeight: "400",
    color: theme.palette.callToAction.light,
    cursor: "pointer",
  },
  disabledLink: {
    opacity: "0.5",
  },
  accountSettingsBorderBottom: {
    paddingBottom: "20px",
    // borderBottom: "1px solid #EEEEEE",
  },
  DevicesContainer: {
    display: "flex",
    alignItems: "center",
  },
  DevicesContainer1: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    margin: "0 20px",
    "@media (max-width:600px)": {
      margin: "0",
    },
  },
  deviceRow: {
    flexWrap: "nowrap",
  },
  deviceCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    cursor: "pointer",
  },
  accountImg1: {
    height: "20px",
  },
  accountSettingsDevices: {
    margin: "2px 0px",
    "@media (max-width:600px)": {
      margin: "5px 0px",
    },
  },
  DevicesContainer2: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    "@media (min-width:1200px)": {
      justifyContent: "end",
      paddingRight: "30px",
    },
    "@media (max-width:600px)": {
      justifyContent: "end",
    },
  },
  DevicesContainer3: {
    alignItems: "center",
    "@media (max-width:600px)": {
      marginLeft: "40px",
      marginTop: "-10px",
    },
  },
  AccountSettingsSecurityContainerMobileView: {
    display: "none",
    "@media (max-width:600px)": {
      display: "block",
      paddingBottom: "20px",
    },
  },
  AccountSettingGridContainer: {
    display: "flex",
    alignItems: "center",
  },
  DevicesContainer4: {
    display: "flex",
    alignItems: "center",
    "@media (min-width:1200px)": {
      justifyContent: "center",
    },
  },
  DeviceMobileViewIp: {
    "@media (max-width:600px)": {
      marginBottom: "25px",
    },
  },
  accountSettingDevicesPadding: {
    paddingBottom: "40px",
    "@media (max-width:600px)": {
      paddingBottom: "20px",
    },
  },
  noDataRow: {
    display: "flex",
    justifyContent: "center",
  },
},
{ name : 'accounts-view' }));

export default styles;

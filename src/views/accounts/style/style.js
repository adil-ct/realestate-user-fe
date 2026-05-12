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
    padding: "32px 40px",
    minHeight: "calc(100vh - 200px)",
    "@media (max-width:900px)": {
      padding: "24px 20px",
    },
    "@media (max-width:600px)": {
      padding: "20px 12px",
    },
  },
  accountSettingsMainContainer: {
    border: "none",
    borderRadius: "0",
    padding: "0",
    background: "transparent",
    color: theme.palette.bodyText.primary,
    maxWidth: "880px",
    margin: "0 auto",
  },
  AccountSettingInsideContainer: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 1px 6px rgba(26,43,74,0.05)",
  },
  AccountSettingLabel: {
    background: "#FFFFFF",
    color: "#1A1A2E",
    borderBottom: "1px solid #E2E8F0",
    borderRadius: "0",
    padding: "20px 32px",
    fontWeight: "700",
    fontSize: "20px",
    fontFamily: '"PP Fragment-Serif", serif',
    letterSpacing: "-0.02em",
    "@media (max-width:600px)": {
      padding: "16px 20px",
      fontSize: "18px",
    },
  },
  accountSettingsFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    padding: "14px 0",
    borderBottom: "1px solid #F1F3F6",
    "&:last-child": { borderBottom: "none" },
  },
  accountSettingsMainFlex: {
    margin: "0",
  },
  accountSettingsFlex1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #F1F3F6",
    "&:last-child": { borderBottom: "none" },
    "@media (max-width:600px)": {
      margin: "0",
    },
  },
  AccountSettingsSecurityContainer: {
    padding: "20px 32px 24px",
    marginTop: "0",
    borderBottom: "1px solid #E2E8F0",
    "@media (max-width:600px)": {
      padding: "16px 20px 20px",
    },
  },
  NotificationSettingsSecurityContainer: {
    padding: "20px 32px 24px",
    marginTop: "0",
    borderBottom: "1px solid #E2E8F0",
    "@media (max-width:600px)": {
      padding: "16px 20px 20px",
    },
  },
  AccountSettingsSecurityContainer2: {
    "@media (max-width:600px)": {
      display: "none",
    },
  },
  AccountSettingTitle: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    margin: "0 0 14px 0",
    fontFamily: '"PP Fragment-Sans", sans-serif',
  },
  AccountSettingLabel2: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#1A1A2E",
  },
  AccountSettingLabel22: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#1A1A2E",
    "@media (max-width:600px)": {
      fontWeight: "600",
    },
  },
  AccountSettingLink: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#1A2B4A",
    cursor: "pointer",
    padding: "6px 14px",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    textDecoration: "none !important",
    transition: "all 160ms ease",
    "&:hover": {
      borderColor: "#1A2B4A",
      background: "rgba(26,43,74,0.04)",
    },
  },
  disabledLink: {
    opacity: "0.5",
  },
  accountSettingsBorderBottom: {
    paddingBottom: "0",
  },
  DevicesContainer: {
    display: "flex",
    alignItems: "center",
  },
  DevicesContainer1: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    margin: "0 16px",
    "@media (max-width:600px)": {
      margin: "0",
    },
  },
  deviceRow: {
    flexWrap: "nowrap",
    padding: "12px 14px",
    background: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: "10px",
    marginBottom: "10px",
    transition: "border-color 160ms ease",
    "&:hover": {
      borderColor: "#CBD5E1",
    },
  },
  deviceCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    cursor: "pointer",
    padding: "6px",
    borderRadius: "8px",
    transition: "all 160ms ease",
    "&:hover": {
      background: "rgba(239,68,68,0.08)",
    },
  },
  accountImg: {
    height: "24px",
    width: "24px",
    objectFit: "contain",
  },
  accountImg1: {
    height: "18px",
    width: "18px",
    objectFit: "contain",
    opacity: 0.6,
  },
  accountSettingsDevices: {
    margin: "0",
    "@media (max-width:600px)": {
      margin: "0 0 10px 0",
    },
  },
  DevicesContainer2: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    fontSize: "12px",
    color: "#6B7280",
    fontFamily: '"PP Fragment-Sans", sans-serif',
    "@media (min-width:1200px)": {
      justifyContent: "end",
      paddingRight: "20px",
    },
    "@media (max-width:600px)": {
      justifyContent: "end",
    },
  },
  DevicesContainer3: {
    alignItems: "center",
    "@media (max-width:600px)": {
      marginLeft: "36px",
      marginTop: "-6px",
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
    color: "#6B7280",
    "@media (min-width:1200px)": {
      justifyContent: "center",
    },
  },
  DeviceMobileViewIp: {
    "@media (max-width:600px)": {
      marginBottom: "20px",
    },
  },
  accountSettingDevicesPadding: {
    paddingBottom: "24px",
    borderBottom: "none !important",
    "@media (max-width:600px)": {
      paddingBottom: "16px",
    },
  },
  noDataRow: {
    display: "flex",
    justifyContent: "center",
    padding: "32px",
    color: "#6B7280",
    fontSize: "13px",
    fontStyle: "italic",
    background: "#F8F7F4",
    borderRadius: "10px",
  },
  brandSwitch: {
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#FFFFFF !important",
      "& + .MuiSwitch-track": {
        backgroundColor: "#1A2B4A !important",
        opacity: "1 !important",
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
      backgroundColor: "#C9A84C !important",
    },
  },
},
{ name : 'accounts-view' }));

export default styles;

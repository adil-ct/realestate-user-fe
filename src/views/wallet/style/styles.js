import { createStyles, makeStyles } from '@mui/styles';

export const styles = makeStyles((theme) => createStyles({
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  paddingModal: {
    paddingTop: "20px !important",
    paddingBottom: 4,
    [theme.breakpoints.up("sm")]: {
      // paddingTop: "160px !important",
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
    [theme.breakpoints.up("md")]: {
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
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
},
{ name : 'wallet-view-shared'}));

export const historyStyles = makeStyles((theme) => createStyles({
  tabStyle: {
    padding: "13px 15px",
    whiteSpace: "nowrap",
    // color: "#939090 !important",
    fontSize: "14px",
    fontWeight: "400",
    // borderBottom: "2px solid #fff",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
    "&:hover": {
      borderRadius: "0",
    },
    "&.Mui-selected": {
      // color: "#0E111D !important",
      fontWeight: "600",
      outline: "none",
      // backgroundColor: "#FFF",
    },
  },
  tabMainContainer:{
    "@media (max-width:600px)": {
      overflowX: "auto",
      whiteSpace: "nowrap",
    }
  },
  tabsContainer: {
    width: "fit-content"
  },
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mainContainerLG: {
    "@media(max-width:600px)": {
      marginLeft: 0,
      marginRight: 0,
      padding: "20px",
    },
    borderRadius: "12px",
    padding: "20px",
    // border: "1px solid #E5E5E5",
    background: theme.palette.foreground.primary,
    color: theme.palette.bodyText.primary,
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  menuDropdown: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      marginLeft: "-10px",
      flexWrap: "wrap",
    },
  },
  historyMobileSearch: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },

  historyMobileDisplay: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 4,
    position: "relative",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  headerTitle: {
    // color: "#2D355A",
    fontSize: "24px",
    fontWeight: "600",
  },
  balanceContainer: {
    marginTop: "25px",
    cursor: "pointer",
  },
  ml50: {
    marginLeft: "50px",
  },
  width200: {
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "0px",
    },
  },
  header1: {
    // color: "#767C97",
    fontSize: "16px",
    fontStyle: "italic",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  header2: {
    // color: "#2D355A;",
    fontSize: "30px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  header3: {
    // color: "#2D9CDB",
    fontSize: "14px",
    position: "absolute",
    bottom: "8px",
    right: "30px",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      left: "0px",
      bottom: "-30px",
    },
  },
  button1: {
    marginRight: "10px",
    fontSize: "14px",
    marginBottom: "20px",
    width: "140px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  paddingModal: {
    margin: "80px 40px",
    [theme.breakpoints.down("md")]: {
      margin: "50px 10px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "50px",
      margin: "80px 10px",
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
  navigation: {
    // color: "#2D9CDB",
    fontSize: "12px",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  noContentText: {
    fontSize: "14px",
    // color: "#613ED2",
    marginTop: "18px",
    fontStyle: "italic",
    letterSpacing: "0.02em",
    fontWeight: 400,
  },
  walletBalanceValue: {
    fontSize: "20px",
    // color: "#2D355A",
    marginTop: "2px",
    fontStyle: "normal",
    fontWeight: 600,
    marginLeft: "50px",
    [theme.breakpoints.down(590)]: {
      marginLeft: "0px",
      fontSize: "16px",
    },
  },
  walletBalanceText: {
    fontSize: "16px",
    // color: "#939090",
    fontStyle: "italic",
    fontWeight: 400,
    [theme.breakpoints.down(590)]: {
      fontSize: "13px",
    },
  },
  balBox: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(590)]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  noContentBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "500px",
    flexDirection: "column",
  },
}, { name : 'wallet-view-history' }));

export const walletStyles = makeStyles((theme) => createStyles({
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mainContainerLG: {
    color: theme.palette.bodyText.primary,
    "@media(max-width:600px)": {
      marginLeft: 0,
      marginRight: 0,
      padding: "20px",
    },
    marginLeft: "50px",
    marginRight: "50px",
    borderRadius: "12px",
    padding: "20px",
    // border: "1px solid #E5E5E5",
    background: theme.palette.foreground.primary,
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },

  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 4,
    position: "relative",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  dFlex: {
    display: "flex",
    flexDirection: "column",
  },
  dFlex1: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    right: "0px",
    [theme.breakpoints.down("xs")]: {
      position: "static",
      marginTop: "50px",
      width: "100%",
    },
  },
  headerTitle: {
    // color: "#2D355A",
    fontSize: "24px",
    fontWeight: "600",
  },
  balanceContainer: {
    marginTop: "25px",
    cursor: "pointer",
  },
  ml50: {
    marginLeft: "50px",
  },
  width200: {
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "0px",
    },
  },
  header1: {
    // color: "#767C97",
    fontSize: "16px",
    fontStyle: "italic",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  header2: {
    // color: "#2D355A;",
    fontSize: "30px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  header3: {
    // color: "#2D9CDB",
    fontSize: "14px",
    position: "absolute",
    bottom: "8px",
    right: "30px",
    fontWeight: 400,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      left: "0px",
      bottom: "-30px",
    },
  },
  button1: {
    marginRight: "10px",
    fontSize: "14px",
    marginBottom: "20px",
    width: "140px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  paddingModal: {
    paddingBottom: "50px",
    paddingTop: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
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
}, { name : 'wallet-view-wallet' }));

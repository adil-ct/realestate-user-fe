import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  notificationContainer: {
    padding: "20px 40px",
    // background: theme.palette.subBackground.primary,
    "@media (max-width:600px)": {
      padding: "20px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px 16px",
    },
  },
  notificationMainContainer: {},
  flexEnd: {
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "start",
    },
  },
  notificationInsideContainer: {},
  filterBox: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    paddingBottom: "0",
    paddingRight: "40px",
    [theme.breakpoints.down("md")]: {
      paddingRight: "0",
      justifyContent: "space-around",
      paddingBottom: "10px",
    },
  },
  notificationLabel: {
    borderRadius: "12px 12px 0px 0px",
    padding: "5px 10px 10px 10px",
    fontWeight: "600",
    fontSize: "20px",
    marginLeft: "10px",
    "@media (max-width:600px)": {
      padding: "10px 0px 10px 10px",
    },
  },
  notificationsBox: {
    // border: "1px solid #E5E5E5",
    minHeight: "100px",
    maxHeight: "325px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  notifItem: {
    display: "flex",
    alignItems: "top",
    justifyContent: "space-between",
    // borderBottom: "1px solid #EEEEEE",
    padding: "12px 0",
    margin: "0 40px",
    [theme.breakpoints.down("md")]: {
      margin: "0 30px",
    },
  },
  unreadDot: {
    height: "8px",
    width: "8px",
    // background: "#58F2F0",
    display: "inline-block",
    borderRadius: "8px",
    position: "absolute",
    top: "6px",
    left: "-20px",
  },
  notifTextBox: {
    maxWidth: "800px",
    position: "relative",
  },
  notificationText: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      lineHeight: "16px",
    },
  },
  date: {
    fontSize: "14px",
    marginRight: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      // color: "#4F4F4F",
      marginRight: "6px",
    },
  },
  seeAll: {
    fontSize: "14px",
    // color: "#2D9CDB !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
    },
  },
  seeAllBox: {
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: "14px",
    // color: "#939090",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
    },
  },
  markedRead: {
    fontSize: "13px",
    // color: "#2D9CDB",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    paddingRight: "24px",
    cursor: "pointer",
  },
  noContentText: {
      fontSize: "14px",
      // color: "#613ED2",
      marginTop: "18px"
  },
  noContentBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      flexDirection: "column",
  }
},
{ name : 'notification-popup-component' }));

export default styles;

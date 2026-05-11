import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    notificationContainer:{
        padding: "60px 40px",
        background: theme.palette.background.primary,
        "@media (max-width:600px)": {
            padding: "60px 10px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "60px 10px",
        },
    },
    notificationMainContainer:{
        // border: "1px solid #E5E5E5",
        color: theme.palette.bodyText.primary,
        background: theme.palette.subBackground.primary,
        borderRadius: "12px",
        padding:"40px 130px",
        "@media (max-width:600px)": {
            padding: "10px",
            border: "none",
            borderRadius: "none",
            background: theme.palette.foreground.primary,
        },
        "@media (max-width:900px)": {
            padding: "0px",
            border: "none",
            borderRadius: "none",
        },
    },
    flexEnd: {
        display: "flex",
        justifyContent: "end",
        [theme.breakpoints.down("md")]: {
            justifyContent: "start"
        },
    },
    notificationInsideContainer:{
        // border: "1px solid #E5E5E5",
        borderRadius: "12px",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        background: theme.palette.background.primary,
        "@media (max-width:900px)": {
            background: theme.palette.subBackground.primary,
        },
    },
    filterBox: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        paddingBottom: "0",
        paddingRight: "40px",
        [theme.breakpoints.down("md")]: {
            paddingRight: "0",
            justifyContent: "space-around",
            paddingBottom: "10px"
        },
    },
    notificationLabel:{
        borderRadius: "12px 12px 0px 0px",
        padding: "10px 0px 10px 40px",
        fontWeight: "600",
        fontSize: "20px",
        "@media (max-width:600px)": {
            padding: "10px 0px 10px 20px",
        },
    },
    notificationsBox: {
        // border: "1px solid #E5E5E5",
        minHeight: "200px",
        overflow: "auto",
        borderBottomRightRadius: "12px",
        borderBottomLeftRadius: "12px"
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
        // background: "#2D9CDB",
        display: "inline-block",
        borderRadius: "8px",
        position: "absolute",
        top: "6px",
        left: "-20px",
    },
    notifTextBox: {
        maxWidth: "800px",
        position: "relative",
        display: "flex"
    },
    notificationText: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        display: "inline-block",
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
            lineHeight: "16px"
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
    time: {
        fontSize: "14px",
        [theme.breakpoints.down("md")]: {
            fontSize: "11px",
            // color: "#4F4F4F"
        },
    },
    markedRead: {
        fontSize: "13px",
        color: theme.palette.info.light,
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        paddingRight: "24px",
        cursor: "pointer",
        minWidth: "140px",
    },
    noContentText: {
        fontSize: "14px",
        marginTop: "18px",
    },
    noContentBox: {
        background: theme.palette.foreground.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "500px",
        flexDirection: "column",
        paddingBottom: "110px",
        "& .MuiSvgIcon-root ": {
            width: "110px",
            height: "110px",
            color: theme.palette.success.main,
        }
    },
    paginationStyle: {
        marginBottom: "30px",
        marginTop: "10px",
        display: "flex",
        marginRight: "20px",
        justifyContent: "flex-end",
    }
  },
  { name : 'notifications-view' }));
  
  export default styles;
  
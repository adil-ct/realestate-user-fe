import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  votingStatsMainContainer: {
    width: "450px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  votingStatsContainer: {
    // boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.04)",
    borderRadius: "12px",
    // background: "#fff",
  },
  statsContainer: {
    padding: "20px 16px",
  },
  votingCountsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  customBtn: {
    // background: "#4CAF50",
    // color: "white",
    fontSize: "15px",
    // "&:hover": {
    //   background: "#4CAF50",
    //   boxShadow: "0px 4px 20px #4CAF50",
    // },
    "&:active": {
      // background: "#4CAF50",
      // color: "white",
      fontSize: "15px",
    },
    "&:focus:not(:hover)": {
      // background: "#4CAF50",
      // color: "white",
      fontSize: "15px",
    },

    "&:active:not(:hover)": {
      // background: "#4CAF50",
      // color: "white",
      fontSize: "15px",
    },
  },
  customBtn1: {
    // background: "#F95C66",
    // color: "white",
    fontSize: "15px",
    marginLeft: "-20px",
    // "&:hover": {
    //   background: "#F95C66",
    //   boxShadow: "0px 4px 20px #F95C66",
    // },
    "&:active": {
      // background: "#F95C66",
      // color: "white",
      fontSize: "15px",
    },
    "&:focus:not(:hover)": {
      // background: "#F95C66",
      // color: "white",
      fontSize: "15px",
    },
    "&:active:not(:hover)": {
      // background: "#F95C66",
      // color: "white",
      fontSize: "15px",
    },
  },
  subHeading: {
    // color: "#2D355A",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: "22px",
  },
  votingStatusContainer: {
    fontSize: "14px",
    fontWeight: 500,
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
  },
  votingStatusImg: {
    marginRight: "6px",
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    alignItems: "center",
  },
  cursorPointer: {
    cursor: "pointer",
  },
  votingTimeContainer: {
    marginTop: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
},
{ name: 'property-manager-view-voting-stats-component' }));

export default styles;

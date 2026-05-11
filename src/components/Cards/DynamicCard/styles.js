import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  mainContainer: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderRadius: 2.5,
    padding: "20px",
    marginTop: "0px",
    marginLeft: "auto",
    marginRight: "auto",
    // background: "#fff",
    overflowY: "scroll",
    width: "95vw",
    boxSizing: "border-box",
    // height: "500px",
    position: "relative",
    "@media (min-width: 600px)": {
      width: "85vw",
    },
    "@media (max-width: 600px)": {
      marginLeft: "0px",
      marginRight: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      // height: "150px",
    },
  },
  paginate: {
    marginBottom: "30px",
    marginTop: "10px",
    display: "flex",
    marginRight: "20px",
    justifyContent: "flex-end",
  },
  mainContainer1: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderRadius: 2.5,
    padding: "0px",
    marginTop: "-20px",
    marginLeft: "auto",
    marginRight: "auto",
    // background: "#fff",
    width: "95vw",
    boxSizing: "border-box",
    position: "relative",
    "@media (max-width: 600px)": {
      marginLeft: "8px",
      marginRight: "8px",
    },
    [theme.breakpoints.down("sm")]: {
      // height: "150px",
    },
  },
  cardContainer: {
    // borderBottom: "1px solid #EEEEEE",
    padding: "15px 0px",
    "@media (max-width: 600px)": { horizontalLinerder: "none" },
  },
  keyHeading: {
    // color: "#51566B",
    marginTop: "7px",
    fontSize: "13px",
    fontWeight: 600,
  },
  keyHeadingMain: {
    // color: "#51566B",
    fontSize: "14px",
    fontWeight: 400,
  },
  keyHeading1: {
    // color: "#51566B",
    marginTop: "7px",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "17px",
  },
  keyHeading2: {
    // color: "#51566B",
    marginTop: "5px",
    fontSize: "13px",
    fontWeight: 400,
    textAlign: "right",
    width: "100%",
  },
  wordBreak1: {
    wordBreak: "break-word",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // height: "20px",
  },
  wordBreak: {
    wordBreak: "break-word",
  },
  horizontalLine: {
    marginTop: "10px",
    marginBottom: "10px",
    height: "0px",
    // color: "#EEEEEE",
    // opacity: "0.30",
  },
},
{ name: "dynamic-card" }));

export default styles;

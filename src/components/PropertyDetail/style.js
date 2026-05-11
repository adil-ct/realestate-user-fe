import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexGrid: {
    display: "flex",
    marginRight: "auto",
  },
  propertyIcon: {
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    marginRight: "12px",
    objectFit: "cover",
  },
  flexBaseline: {
    display: "flex",
    alignItems: "baseline",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
  heading1: {
    fontSize: "24px",
    // color: "#2D355A",
    fontWeight: 600,
    lineHeight: "40px",
    marginLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  cityStateLabel: {
    fontSize: "12px",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    marginLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      marginLeft: "5px",
    },
  },
  addressVal: {
    fontSize: "13px",
    fontStyle: "italic",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    marginLeft: "12px",
    borderBottom: "1px dashed",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  addressVal1: {
    fontSize: "13px",
    fontStyle: "italic",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    borderBottom: "1px solid white",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  addressValLabelDesktop: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    // width: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline",
    margin: "-4px 10px",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down(400)]: {
      display: "none",
    },
  },
  addressValLabelMobile: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    width: "250px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "none",
    margin: "-4px 10px",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down(400)]: {
      display: "block",
    },
    // [theme.breakpoints.down("350px")]: {
    //   maxWidth: "200px",
    //   width: "auto",
    // },
  },
  addressValLabelMobile1: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    width: "250px",
    display: "inline",
    margin: "-4px 10px",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down(500)]: {
      display: "inline",
    },
  },
  textDesktop: {
    display: "block",
    marginRight: "auto",
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
  textMobile: {
    display: "none",
    marginRight: "auto",
    [theme.breakpoints.down(600)]: {
      display: "block",
    },
  },
  sperator: {
    fontSize: "13px",
    fontWeight: "400",
    // color: "#939090",
    lineHeight: "16px",
    margin: "0 -4px 0 6px",
  },
  addressValLabel: {
    color: theme.palette.callToAction.light,
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16px",
    margin: "4px",
  },
  flexEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
      marginBottom: "20px",
    },
  },
  fullWidth: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  btnIcon: {
    marginRight: "4px",
  },
},
{ name : 'property-details-component' }));

export default styles;

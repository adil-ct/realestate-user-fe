import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  paddingContainer: {
    margin: "20px 40px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 10px",
    },
  },
  sectionDesktop: {
    display: "none !important",
    [theme.breakpoints.up("md")]: {
      display: "block !important",
    },
  },
  sectionMobileMd: {
    display: "flex !important",
    flexDirection: "column",
    marginTop: "20px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
  navigation: {
    // color: "#2D9CDB",
    fontSize: "12px",
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: "0px !important",
    marginBottom: "20px",
  },
  paddingContainerFlex: {
    margin: "20px 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "calc(100vh - 125px)",
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
  headContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  mainSubtitle: {
    // borderBottom: "1px solid #DCE1E7",
    fontSize: "20px",
    fontWeight: 400,
    fontStyle: "italic",
  },
  titleContainer: {
    display: "flex",
    gap: "12px",
    marginTop: "24px",
  },
  posFlex: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  dIcon: {
    marginRight: "3px",
    // color: "#15c",
    fontSize: "18px",
  },
  pIcon: {
    marginRight: "3px",
    // color: "red",
    fontSize: "18px !important",
  },
  videoTag: {
    height: "fit-content",
    width: "300px",
    marginBottom: "20px",
  },
  imageDescription: {
    height: "300px",
    width: "300px",
    objectFit: "cover",
    margin: "10px",
    borderRadius: "20px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    marginBottom: "10px",
  },
  titleImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  subHeading: {
    // color: "#2D355A",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "22px",
  },
  docStyle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "16px",
      marginBottom: "10px",
    },
  },
  vPlayer: {
    marginRight: "10px",
    width: "30%",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  descriptionText: {
    overflow: "auto",
    // color: "#51566B",
    fontSize: "14px",
    fontWeight: 400,
  },
  descriptionImg: {
    float: "right",
    height: "260px",
  },
  referenceLink: {
    marginLeft: "4px",
    fontSize: "14px",
    fontWeight: 400,
    // color: "#2D9CDB",
  },
},
{ name : 'property-manager-view-view-proposal-component' }));

export default styles;

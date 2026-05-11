import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  mainBox: {
    // background: "#fff",
    maxWidth: "400px",
    padding: "16px",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "290px",
      maxWidth: "400px",
    },
  },
  maxHWidth: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "20px",
      minHeight: "20px",
      height: "35px",
      width: "auto",
    },
  },
  tourContent: {
    fontWeight: 400,
    fontSize: "13px",
    // color: "#0E111D",
  },
  tourBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  tourBtnLeftContainer: {
    // color: "#2D9CDB",
    fontWeight: 500,
    fontSize: "13px",
    cursor: "pointer",
  },
  tourBtnRightContainer: {
    display: "flex",
    gap: "10px",
  },
  tourContentBox: {
    textAlign: "center",
    fontSize: "18px",
  },
},
{ name : 'tour-wrapper-component-mogul' }));

export default styles;

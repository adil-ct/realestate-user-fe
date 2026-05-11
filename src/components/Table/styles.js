import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  emptyTableContainer: {
    color: theme.palette.bodyText.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "200px",
    },
  },

  noAccount: {
    // color: "#2D9CDB",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "center",
    cursor: "pointer",
  },

  colorGray: {
    // color: "gray",
  },
},
{ name : 'table-component-mogul' }));

export default styles;

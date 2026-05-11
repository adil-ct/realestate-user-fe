import { createStyles, makeStyles } from '@mui/styles';

const dropDownMenu = makeStyles((theme) => createStyles({
  dropDownBtn: {
    background: theme.palette.grey[100],
    borderRadius: "4px",
    marginLeft: "10px",
    color: theme.palette.bodyText.primary,
    fontWeight: "400",
    height: "20px",
    fontSize: "13px",
    padding: "4px 8px 4px 16px",
    minWidth: "60px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
    "&:hover" : {
      background: theme.palette.grey[50],
    }
  },
},
{ name: "search-dropdown-menu" }));


const searchMenu = makeStyles((theme) => createStyles({
  searchMain: {
    border: `1px solid ${theme.palette.searchBox.border}`,
    width: "170px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  searchFont: {
    color: theme.palette.searchBox.border,
    [theme.breakpoints.down("sm")]: {
      height: "20px",
      width: "20px",
    },
  },
  searchBoxMain: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
},
{ name: "search-search-menu" }));

export {dropDownMenu, searchMenu};
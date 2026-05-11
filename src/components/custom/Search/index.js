import * as React from "react";
import { styled, /*alpha*/ } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { searchMenu } from "./style";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1.25),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 1.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3.2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "23px",
      fontSize: "13px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "23px",
      fontSize: "14px",
    },
  },
}));

const SearchBox = (props) => {
  const { ...rest } = props;
  const classes = searchMenu();
  return (
    <Box className={classes.searchBoxMain}>
      <Search className={classes.searchMain}>
        <SearchIconWrapper>
          <SearchIcon fontSize="medium" className={classes.searchFont} />
        </SearchIconWrapper>
        <StyledInputBase
          // onChange={(e) => console.log(e)}
          {...rest}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
};

export default SearchBox;

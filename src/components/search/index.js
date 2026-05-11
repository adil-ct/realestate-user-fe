import { styled /*alpha*/ } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";


// Relative imports
import styles from "./styles";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	// backgroundColor: alpha(theme.palette.common.white, 0.15),
	// '&:hover': {
	//     backgroundColor: alpha(theme.palette.common.white, 0.25),
	// },
	marginRight: theme.spacing(0),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		marginLeft: theme.spacing(1.25),
		width: "100%",
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
	width: "97%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(3.2)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			height: "23px",
			fontSize: "13px",
		},
	},
}));

const SearchBox = ({ text, handleTextChange, isPropertySearch = false }) => {
	const classes = styles();

	return isPropertySearch ? (
		<div className={classes.search}>
			<div className={classes.searchIconWrapper}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.styledInputBase,
				}}
				onChange={handleTextChange}
				inputProps={{ "aria-label": "search" }}
			/>
		</div>
	) : (
		<Box className={classes.searchMain}>
			<Search className={classes.searchSection}>
				<SearchIconWrapper className={classes.searchIcon}>
					<SearchIcon fontSize="medium" />
				</SearchIconWrapper>
				<StyledInputBase
					type="text"
					onChange={handleTextChange}
					placeholder="Search"
					value={text}
					inputProps={{ "aria-label": "search" }}
				/>
			</Search>
		</Box>
	);
};
export default SearchBox;

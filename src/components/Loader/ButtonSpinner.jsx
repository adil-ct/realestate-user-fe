import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const ButtonSpinner = ({ isLoading, text, fontSize, id }) =>
  isLoading ? (
    <CircularProgress size={20} sx={{ color: "#FFFFFF" }} />
  ) : (
    <Typography
      id={id ? id : ""}
      sx={{ fontWeight: 500, fontSize: fontSize ? fontSize : "14px" }}
    >
      {text}
    </Typography>
  );

export default ButtonSpinner;

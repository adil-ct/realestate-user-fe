import { CircularProgress } from "@material-ui/core";
import { Grid } from "@mui/material";
import MKBox from "components/custom/MKBox";

function Loader() {
  return (
    <MKBox style={{ paddingTop: "5vh" }}>
      <Grid container item justifyContent="center" mx="auto">
        <CircularProgress />
      </Grid>
    </MKBox>
  );
}

export default Loader;

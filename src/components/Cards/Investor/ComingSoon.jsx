import React from "react";
import { Box, Grid } from "@mui/material";

// Static imports
import MKTypography from "components/custom/MKTypography";
import { Upcoming1 } from "constants/assets";
import styles from "./styles";

const CommingSoonCard = ({ data }) => {
  const classes = styles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.imageContainer}>
        <img src={Upcoming1} alt={data.tag} className={classes.image} />
      </Box>
      <Box className={classes.coomingSoonCard}>
        <Grid container className={classes.centerGrid1}>
          <MKTypography variant="h4" fontWeight="bold" /*color="white"*/ fontSize="20px" textAlign="center">
            Coming Soon
          </MKTypography>
        </Grid>
      </Box>
    </Box>
  );
};

export default CommingSoonCard;

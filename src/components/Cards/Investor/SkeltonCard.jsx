import React from "react";
import { Box, Skeleton } from "@mui/material";

// Static imports
// import MKTypography from "components/custom/MKTypography";
import styles from "./styles";

const CardSkeleton = () => {
  const classes = styles();
  return (
    <Box width="100%" className={`${classes.mainContainer}`}>
      <Box className={classes.imageContainerSkelton}>
        <Skeleton animation="wave" className={classes.imageSkelton} />
      </Box>
      <Box className={classes.infoContainerSkelton}>
        <Box className={classes.topSection}>
          <Skeleton animation="wave" className={classes.buttonSkelton} />
          <Skeleton animation="wave" className={classes.buttonSkelton} />
        </Box>
        <Box className={classes.separator} />
        <Box className={classes.investorsContainer}>
          <Skeleton animation="wave" height="32px" width="120px" />
          <Skeleton animation="wave" height="32px" width="120px" />
        </Box>
        {/* <MKTypography className={classes.quote}><Skeleton animation="wave" /></MKTypography>
                <Grid container className={classes.centerGrid}>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={3}>
                        <MKTypography className={classes.cardfooterValue}>
                            <Skeleton animation="wave" className={classes.ml10} />
                        </MKTypography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={3.5}>
                        <MKTypography className={classes.cardfooterValue}>
                            <Skeleton animation="wave" className={classes.ml10} />
                        </MKTypography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={3.5}>
                        <MKTypography className={classes.cardfooterValue}>
                            <Skeleton animation="wave"className={classes.ml10} />
                        </MKTypography>
                    </Grid>
                </Grid> */}
      </Box>
    </Box>
  );
};

export default CardSkeleton;

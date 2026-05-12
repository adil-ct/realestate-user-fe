import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MKButton from "@mui/material/Button";

// Relative imports
import styles from "./styles";
import useConfig from "utils/config";
import addsValueData from "_mocks/adds-value";
import AddsValueCard from "components/card/adds-value-card";

const AddsValue = () => {
  const classes = styles();
  const { REGISTER_LINK } = useConfig();

  return (
    <Box className={`${classes.root} padding_all`}>
      <Box className="max-width1400">
        <Typography className={classes.header1} variant="h5">
          Why invest with Occurrence
        </Typography>
        <Box sx={{ display: "flex", marginLeft: "0px" }}>
          <Grid container spacing={2} className={classes.rootContainer}>
            {addsValueData.map((item) => (
              <Grid
                key={item.title}
                item
                className={classes.rootContainer}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{
                  marginBottom: "50px",
                }}
              >
                <AddsValueCard
                  avatar={item.avatar}
                  title={item.title}
                  description={item.description}
                  learn={item.learn}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center" mt={{ lg: "50px" }}>
          <MKButton
            variant="contained"
            to={REGISTER_LINK}
            className={classes.headerButton}
          >
            Get Started
          </MKButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AddsValue;

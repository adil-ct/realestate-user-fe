import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import PropTypes from "prop-types";
import MKButton from "@mui/material/Button";
import { Link } from "react-router-dom";

import { routePaths } from "routes/mainRoutes/routePaths";
import styles from './tweet-slide-styles';

const VideoSlide = ({ url, isSelected }) => (
  <ReactPlayer 
    width="100%" 
    height="100%" 
    url={url} 
    playing={isSelected}
    //loop={true}
    muted={true}
  />
);

const TweetSlide = ({ title1, title2, text, video, isSelected}) => {
  const classes = styles();

  return (
    <Grid container>
      {/* Left side */}
      <Grid item xs={12} sm={5} className={classes.leftContainer}>
        <Grid
          item 
          className={classes.gridItem}
          xs={12}
        >
          <Box className={classes.title}>
            <Typography 
              variant="h2" 
              fontWeight="300" 
              className={`${classes.title1} ${classes.alignText}`}
            >
              {title1}
              { }
            </Typography>
            <Typography 
              variant="h2" 
              className={`${classes.title2} ${classes.alignText}`}
            >
              {title2}
            </Typography>
          </Box>
        </Grid>
        <Grid 
          item 
          className={classes.gridItem}
          xs={12}
        >
          <Box className={classes.subTitle}>
            <Typography variant="subtitle2" className={classes.alignText}>
              {text}
            </Typography>
          </Box>
        </Grid>
        <Grid 
          item 
          className={`${classes.gridItem} ${classes.alignText} ${classes.btnContainer}`}
          xs={12}
        >
          <MKButton 
            variant="contained"
            to={routePaths.LOGIN_REGISTER_PATH}
            // className={classes.investButton}
            component={Link}
          >
            Invest in Real Estate
          </MKButton>
        </Grid>
      </Grid>

      {/* Right side */}
      <Grid item xs={12} sm={7} className={classes.playerContainer}>
        <VideoSlide 
          url={video}
          isSelected={isSelected}
          className={classes.player}
        />
      </Grid>
    </Grid>
  );
};


VideoSlide.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.bool
};


export default TweetSlide;
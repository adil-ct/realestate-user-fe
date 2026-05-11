import React from 'react';
import { Grid, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles(() => createStyles({
  gridItem: {
    textAlign: 'left',
    padding: '0 4%',
  },
  stepText: {
    paddingTop: '14px',
    display: 'block',
    lineHeight: '1.2',
    opacity: 0.7,
  },
},
{ name : 'home-page-open-book-investing-steps-component'}));

const InvestingSteps = ({ icon, step, title, text}) => {
  const classes = styles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.gridItem}>
        <img src={icon} height="57%"/>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="h5"> {step}/ </Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Typography variant="h5" height="100%"> {title} </Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="body4" className={classes.stepText}> {text} </Typography>
      </Grid>
    </Grid>
  );
};

export default InvestingSteps;
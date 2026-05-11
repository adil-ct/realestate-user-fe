import React from "react";
import styles from "./styles";
import { Grid, Typography } from "@mui/material";

import { FoundersSignature, FoundersShakeWithLogo } from "constants/assets";

const InvitationSection = () => {
  const classes = styles();

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      rowSpacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
    >
      {/* Left half */}
      <Grid item xs={12} md={6} lg={6}>
        <Grid
          container
          direction="column"
          className={`${classes.alignLeft} ${classes.pageColumn}`}
          gap="44px"
        >
          <div className={classes.titleContainer}>
            <Typography
              variant="h2"
              className={`${classes.alignLeft} ${classes.title1}`}
            >
              Consider this{" "}
            </Typography>
            <Typography
              variant="h2"
              className={`${classes.alignLeft} ${classes.title2}`}
            >
              your invitation
            </Typography>
          </div>
          <Typography variant="body2" className={classes.text}>
            We were trained at the epicenter of finance in the oldest, most
            prestigious club – Goldman Sachs. Shoulder-to-shoulder in the Real
            Estate Division, we spent 100-hour work weeks investing billions of
            dollars for the world’s wealthiest, old money establishments. With
            the little personal time we had, we tirelessly searched for a
            low-touch way to deploy our own capital into real estate.
          </Typography>
          <Typography variant="body2" className={classes.text}>
            We found nothing. So, we built a solution, we used it, we loved it.
            Now we’re bringing it to you.
          </Typography>
          <Typography
            variant="h5"
            className={`${classes.alignLeft} ${classes.finalText}`}
          >
            Consider this your invitation
          </Typography>
          <img src={FoundersSignature} className={classes.signatureImage} />
        </Grid>
      </Grid>

      {/* Right half */}
      <Grid item xs={12} md={6} lg={6} className={classes.heroImageArea}>
        <Grid container direction="column">
          <img src={FoundersShakeWithLogo} className={classes.heroImage} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvitationSection;

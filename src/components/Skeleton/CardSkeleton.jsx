import React from "react";
import { Skeleton, Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";

// Static imports
import styles from "views/accounts/style/style";

const CardSkeleton = ({row}) => {
  const [rowProp, setRowprop] = React.useState(row);
  const loaddata = () => {
    setRowprop([...rowProp, ...row]);
  };
  const classes = styles();

  return (
    <InfiniteScroll
      width="100%"
      className={classes.cardSkeltonContainer}
      hasMore={rowProp?.length < row?.length || false}
      loadMore={() => loaddata()}
    >
      <Grid container columns={16} className={classes.innerSkelton}>
        <Grid item xs={8} sx={{ pr: 1 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
        <Grid item xs={8} sx={{ pl: 1 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
      </Grid>
      <hr className={classes.horizontalLine} />

      <Grid container columns={16} className={classes.innerSkelton}>
        <Grid item xs={8} sx={{ pr: 1 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
        <Grid item xs={8} sx={{ pl: 1 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
      </Grid>
      <hr className={classes.horizontalLine} />

      <Grid container columns={16} className={classes.innerSkelton}>
        <Grid item xs={8} sx={{ pr: 1 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
        <Grid item xs={8} sx={{ pl: 1 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
      </Grid>
      <hr className={classes.horizontalLine} />
    </InfiniteScroll>
  );
};

export default CardSkeleton;

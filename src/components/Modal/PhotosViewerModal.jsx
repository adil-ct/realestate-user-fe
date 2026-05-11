import { Dialog, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Static imports
import { Trending1 } from "constants/assets";
import MKBox from "components/custom/MKBox";
import CloseButton from "components/CloseButton";
import styles from "./styles";

const CDialog = styled(Dialog)`
  & .MuiDialog-paper {
    // background: transparent;
    zoom: 0.9;
    box-shadow: none;
  }
`;

const PVarousel = styled(Carousel)`
  & .thumbs-wrapper ul li img {
    height: 60px;
    width: 80px;
  },
  & .slider-wrapper ul li img {
    margin-top: 20px;
    height: 550px;
    object-fit: cover;
    @media screen and (max-width: 500px) {
      height: auto;
    }
  }
`;

const PhotosViewerModal = ({ open, handleClose, data }) => {
  const classes = styles();

  return (
    <CDialog
      open={open}
      fullWidth={true}
      maxWidth={"xl"}
      onClose={handleClose}
      className={`${classes.dialog} ${classes.viwerDialog}`}
    >
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>

      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={`${classes.dialogContent} ${classes.viwerDialog}`}
      >
        <Grid
          container
          className={`${classes.progressContainer} ${classes.viwerDialog}`}
        >
          <Grid item xs={12}>
            <PVarousel autoPlay infiniteLoop emulateTouch showArrows={true}>
              {data?.images?.map((ele) => (
                <img
                  key={ele?.key}
                  className={classes.carouselImg}
                  title={"Property Banner Image"}
                  alt={"Property Banner Image"}
                  src={ele?.url || Trending1}
                />
              ))}
            </PVarousel>
          </Grid>
        </Grid>
      </DialogContent>
    </CDialog>
  );
};

export default PhotosViewerModal;

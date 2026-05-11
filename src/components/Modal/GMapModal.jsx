import { Button, Dialog, DialogContent, DialogTitle,} from "@mui/material";
import GoogleMapReact from 'google-map-react';
import { Grid } from "@mui/material";
import React from "react";

import { MarkerPin } from "constants/assets";
// Static imports
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import styles from "./styles";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 12
};

const AnyReactComponent = () => <div><img src={MarkerPin} alt={"Map Market"} /></div>;

const GMapModal = ({ open, handleClose, data }) => {
  const classes = styles();

  return (
    <Dialog open={open} fullWidth={true} maxWidth={"xl"} onClose={handleClose} className={classes.dialog}>
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle display="flex" justify="center" className={classes.dialogTitle}>
        <MKTypography variant="h3" align="center" className={classes.depositModalTitle}>
          Property Location
        </MKTypography>
      </DialogTitle>

      <DialogContent display="flex" justify="center" p={2} className={classes.dialogContent}>
        <Grid container className={classes.progressContainer}>
            <Grid item xs={12}>
              <div className={classes.GMBox}>
                {data?.latitude && 
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCAoJMtcG8ghIC9zKV3h1TKf8T-M6LcqKw" }}
                    center={{lat: Number(data?.latitude), lng: Number(data?.longitude)}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent   
                      lat={Number(data?.latitude)}
                      lng={Number(data?.longitude)}
                      text={"My Marker"}
                    />
                  </GoogleMapReact>
                }
              </div>
            </Grid>
        </Grid>
        <MKBox display="flex" justifyContent="center">
          <Button variant="outlined" className={classes.depoitContinueBtn} /*color="primary"*/ size="medium" onClick={handleClose}>
            Close
          </Button>
        </MKBox>
      </DialogContent>
    </Dialog>
  );
};

export default GMapModal;

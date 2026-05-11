import React from "react";

// Static imports
import { styles } from "./styles";
import { Dialog, DialogContent, Typography } from "@mui/material";
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";

const Popup = ({ open, handleClose, unauthorisedData }) => {
  const classes = styles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="670px"
        className={classes.mainDialog}
      >
        <MKBox
          display="flex"
          justifyContent="right"
          top={30}
          left={30}
          sx={{ alginItems: "center" }}
        >
          <CloseButton
            className={classes.closeIconRight}
            onClick={handleClose}
          />
        </MKBox>
        <DialogContent
          display="flex"
          justify="center"
          p={2}
          alignItems="center"
        >
          <MKBox className={classes.unauthorisedImgBox}>
            <img
              src={unauthorisedData?.icon}
              style={{ margin: "auto" }}
              alt="redirect"
            />
          </MKBox>
          <Typography
            variant="body2"
            // color="text"
            fontWeight={500}
            fontSize="16px"
            textAlign="center"
            mt="10px"
          >
            {unauthorisedData?.message}
          </Typography>
          <MKBox className={classes.unauthorisedBtnox}>
            {unauthorisedData?.noBtn ? (
              <MKBox className={classes.unauthorisedTextBox}>
                {unauthorisedData?.btnName}
              </MKBox>
            ) : (
              <MKButton
                variant="gradient"
                // color="primary"
                className={classes.unauthorisedBtn}
                onClick={() => unauthorisedData?.onAction()}
              >
                {unauthorisedData?.btnName}
              </MKButton>
            )}
          </MKBox>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Popup;

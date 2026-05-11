import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

// Static imports
import Tick from "assets/images/Tick.svg";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import styles from "./styles";

const ConfirmationModal = ({
  open,
  handleClose,
  data,
  handleLinkClick,
}) => {
  const { title, link, showImg = true } = data;
  const classes = styles();
  return (
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
      {title && (
        <DialogTitle display="flex" justify="center">
          <MKTypography
            variant="h3"
            align="center"
            width={680}
            className={classes.mainTitle}
          >
            {title}
          </MKTypography>
        </DialogTitle>
      )}
      {showImg && (
        <MKBox display="flex" justifyContent="center" alignItems="center" p={2}>
          <img
            src={Tick}
            className={classes.checkedCircleStyle1}
            alt="green_checked_icon"
          />
        </MKBox>
      )}
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        alignItems="center"
      >
        <Typography
          variant="body2"
          // color="text"
          textAlign="center"
          className={classes.subtitle}
        >
          {data ? data.subtitle() : ""}
        </Typography>
      </DialogContent>
      {link && (
        <MKBox>
          <MKTypography
            // color="primary"
            className={classes.link}
            mb={2}
            p={link ? 2 : 0}
            onClick={handleLinkClick}
          >
            {link}
          </MKTypography>
        </MKBox>
      )}
    </Dialog>
  );
};

export default ConfirmationModal;

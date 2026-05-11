import React from "react";
import { Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Static imports
import { Copy, Qrcode } from "constants/assets";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import styles from "./styles";
import useCopyToClipboard from "hooks/useCopyToClipboard";

const ConfirmationModal = ({
  open,
  data,
  handleClose,
  handleNext,
  noButton = false,
  backBtn,
  backBtnHandler,
}) => {
  const classes = styles();
  const { title, secretCode, qrImage } = data;
  const { copy, tooltipText } = useCopyToClipboard();

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
        justifyContent="space-between"
        top={30}
        left={30}
      >
        {backBtn && (
          <Typography
            variant="button"
            className={classes.backButton1}
            display="flex"
            alignItems="center"
            onClick={() => {
              backBtnHandler();
            }}
          >
            <ArrowBackIosIcon />
            Back
          </Typography>
        )}
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle
        display="flex"
        justify="center"
        flexDirection="column"
        component="div"
      >
        <MKTypography variant="h3" align="center" className={classes.mainTitle}>
          {title}
        </MKTypography>
        {data?.tagline && (
          <MKTypography
            variant="h3"
            align="center"
            className={classes.mainTitleTagline}
          >
            {data?.tagline}
          </MKTypography>
        )}
      </DialogTitle>

      <MKBox display="flex" justifyContent="center" alignItems="center" px={2}>
        <img
          src={qrImage || Qrcode}
          className={classes.checkedCircleStyle3}
          alt="green_checked_icon"
        />
      </MKBox>
      <Divider>
        <MKTypography
          variant="h3"
          align="center"
          fontWeight="regular"
          className={classes.dividerText}
        >
          OR
        </MKTypography>
      </Divider>
      <Tooltip enterTouchDelay={0} title={tooltipText}>
        <MKBox
          className={classes.copyContainer}
          onClick={() => copy(secretCode ? secretCode : "VRJUCTIONFRTSD")}
        >
          <MKTypography
            variant="h3"
            align="center"
            fontWeight="regular"
            className={classes.copyText}
          >
            {secretCode ? secretCode : "VRJUCTIONFRTSD"}
          </MKTypography>
          <img src={Copy} className={classes.copyStyle} alt="copy" />
        </MKBox>
      </Tooltip>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
      >
        <MKTypography
          variant="body2"
          // color="text"
          textAlign="center"
          className={classes.subtitle}
        >
          {data ? data.subtitle() : ""}
        </MKTypography>
      </DialogContent>
      {!noButton && (
        <MKBox
          display="flex"
          justifyContent="center"
          className={classes.buttonContainer}
          p={2}
        >
          <MKButton
            variant="gradient"
            // color="primary"
            className={classes.width220}
            onClick={handleNext}
          >
            <ButtonSpinner text="Next" isLoading={false} />
          </MKButton>
        </MKBox>
      )}
    </Dialog>
  );
};

export default ConfirmationModal;

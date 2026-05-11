import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, Tooltip } from "@mui/material";

// Static imports
import { Copy } from "constants/assets";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import styles from "./styles";
import useCopyToClipboard from "hooks/useCopyToClipboard";

const RecoveryCodeModal = ({
  open,
  data,
  handleClose,
  handleNext,
  btnText,
}) => {
  const classes = styles();
  const { title, code } = data;
  const [checked, setChecked] = useState(false);
  const { copy, tooltipText } = useCopyToClipboard();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
        alignItems="center"
      >
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle display="flex" justifyContent="center" alignItems="center">
        <MKTypography
          variant="h3"
          align="center"
          width={680}
          className={classes.mainTitle}
        >
          {title}
        </MKTypography>
      </DialogTitle>

      <div className={classes.listBox}>
        <ol style={{ marginLeft: "25px" }}>
          <li>Use secret code to recover your account.</li>
          <li>
            Recovering your account without this code will not be possible.
          </li>
        </ol>
      </div>
      <Tooltip enterTouchDelay={0}  title={tooltipText}>
        <MKBox className={classes.copyContainer} onClick={() => copy(code)}>
          <MKTypography
            variant="h3"
            align="center"
            fontWeight="regular"
            className={classes.copyText}
          >
            {code}
          </MKTypography>
          <img src={Copy} className={classes.copyStyle} alt="copy" />
        </MKBox>
      </Tooltip>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        alignItems="center"
      >
        <MKTypography
          variant="body2"
          // color="text"
          textAlign="center"
          className={classes.subtitle}
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          I have saved this code.
        </MKTypography>
      </DialogContent>
      <MKBox
        display="flex"
        justifyContent="center"
        className={classes.buttonContainer}
        p={2}
      >
        <MKButton
          variant="gradient"
          // color="primary"
          disabled={!checked}
          className={classes.width220}
          onClick={handleNext}
        >
          <ButtonSpinner text={btnText} isLoading={false} />
        </MKButton>
      </MKBox>
    </Dialog>
  );
};

export default RecoveryCodeModal;

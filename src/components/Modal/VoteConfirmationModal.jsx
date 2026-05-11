import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// static imports
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import styles from "./styles";

const CustomConfirmationModal = ({
  open,
  handleClose,
  data,
  handleSuccess,
  isLoading,
}) => {
  const classes = styles();
  const { title, subtitle } = data;

  return (
    <Dialog open={open} onClose={handleClose} className={classes.dialog}>
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle
        display="flex"
        justify="center"
        className={classes.dialogTitle1}
      >
        <MKTypography
          variant="h3"
          align="center"
          className={classes.modalTitle1}
        >
          {title}
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContent}
      >
        <MKTypography variant="body2" className={classes.subtitle}>
          {(subtitle && subtitle()) || ""}
        </MKTypography>
      </DialogContent>
      <MKBox
        display="flex"
        justifyContent="center"
        className={classes.modalBottomButton1}
      >
        <MKButton
          variant="outlined"
          className={classes.mkButton1}
          // color="primary"
          size="medium"
          onClick={handleClose}
        >
          {data.cancel}
        </MKButton>
        <MKButton
          variant="contained"
          className={classes.mkButton1}
          // color="primary"
          size="medium"
          onClick={handleSuccess}
        >
          <ButtonSpinner
            text={data.success}
            classes={classes.navigateLogin}
            isLoading={isLoading}
          />
        </MKButton>
      </MKBox>
    </Dialog>
  );
};

export default CustomConfirmationModal;

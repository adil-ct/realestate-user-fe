import DialogContent from "@mui/material/DialogContent";

// static imports
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import styles from "components/Modal/styles";

const SetDefault = ({
  handleClose,
  handleSuccess,
  isLoading,
}) => {
  const classes = styles();

  return (
    <>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContent}
      >
        <MKTypography variant="body2" className={classes.subtitle} mb={4}>
        Do you want to set this bank as default payment method?
        </MKTypography>
      </DialogContent>
      <MKBox
        display="flex"
        justifyContent="center"
        className={classes.modalBottomButton}
        mb={2}
      >
        <MKButton
          variant="outlined"
          className={classes.mkButton1}
          // color="primary"
          size="medium"
          onClick={handleClose}
        >
          Cancel
        </MKButton>
        <MKButton
          variant="contained"
          className={classes.mkButton1}
          // color="primary"
          size="medium"
          onClick={handleSuccess}
        >
          <ButtonSpinner
            text={"I'm Sure"}
            classes={classes.navigateLogin}
            isLoading={isLoading}
          />
        </MKButton>
      </MKBox>
      </>
  );
};

export default SetDefault;

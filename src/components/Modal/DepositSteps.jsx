import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Typography, Box } from "@mui/material";

// static imports
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
// import { Ref1, Ref2 } from "constants/assets";
import { styles } from "./deposiStepsStyles";

const CustomConfirmationModal = ({
  open,
  handleClose,
  handleSuccess,
  isLoading,
}) => {
  const classes = styles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.dialogConsentEarn}
    >
      <MKBox
        display="flex"
        justifyContent="right"
        pr={2}
        className={classes.mkBox}
      >
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
          className={classes.modalTitle1Earn}
        >
          3 Step (5-10 minutes) Process to Deposit USDC
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContentConsent}
      >
        <Grid container mt={5} className={classes.iconContainer}>
          <Grid className={classes.gridBox} item lg={4} md={4} sm={6} xs={12}>
            <Box className={classes.iconBox}>
              <Box className={classes.stepBox}>
                <Typography className={classes.stepText}>1</Typography>
              </Box>
              <img src={""} alt="payment_icon" className={classes.iconImage1} />
            </Box>
            <Typography className={classes.stepText1}>
              Choose a Crypto Exchange or Wallet
            </Typography>
          </Grid>
          <Grid className={classes.gridBox} item lg={4} md={4} sm={6} xs={12}>
            <Box className={classes.iconBox}>
              <Box className={classes.stepBox}>
                <Typography className={classes.stepText}>2</Typography>
              </Box>
              <img src={""} alt="payment_icon" className={classes.iconImage2} />
            </Box>
            <Typography className={classes.stepText1}>
              Buy USDC on the Exchange or Wallet
            </Typography>
          </Grid>
          <Grid className={classes.gridBox} item lg={4} md={4} sm={12} xs={12}>
            <Box className={classes.iconBox}>
              <Box className={classes.stepBox}>
                <Typography className={classes.stepText}>3</Typography>
              </Box>
              <img src={""} alt="payment_icon" className={classes.iconImage3} />
            </Box>
            <Typography className={classes.stepText1}>
              Withdraw USDC from Exchange or Wallet, using the Polygon network
              and inputting wallet address from below
            </Typography>
          </Grid>
        </Grid>
        <MKBox
          display="flex"
          justifyContent="center"
          className={classes.modalBottomButtonConsent1}
        >
          <MKButton
            variant="gradient"
            className={classes.mkButton1Consent}
            // color="primary"
            size="medium"
            onClick={handleSuccess}
          >
            <ButtonSpinner
              text="Continue"
              classes={classes.navigateLogin}
              isLoading={isLoading}
            />
          </MKButton>
        </MKBox>
      </DialogContent>
    </Dialog>
  );
};

export default CustomConfirmationModal;

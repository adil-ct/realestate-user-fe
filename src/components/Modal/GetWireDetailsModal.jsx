import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// static imports
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import { styles } from "./styles";

const CustomConfirmationModal = ({ open, handleClose, data, handleCloseAll }) => {
  const classes = styles();
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.dialogConsent1}
    >
      <MKBox
        display="flex"
        justifyContent="space-between"
        top="10px"
        left={30}
        className={classes.pContainer}
      >
        <Typography
          variant="p"
          className={classes.backButton}
          display="flex"
          alignItems="center"
          onClick={() => {
            handleClose();
          }}
        >
          <ArrowBackIosIcon />
          Back
        </Typography>
        <CloseButton className={classes.closeIcon1} onClick={handleCloseAll} />
      </MKBox>
      <DialogTitle
        display="flex"
        justify="center"
        className={classes.dialogTitle1}
      >
        <MKTypography
          variant="h3"
          align="center"
          className={classes.modalTitle1Consent}
        >
          Wire Deposit Details
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContentConsent}
      >
        <MKBox display="flex" justifyContent="center">
          <MKBox className={classes.dFlex1}>
            <span className={classes.keyConsent}>Tracking Ref: </span>
            <span className={classes.pairConsent}>
              {" "}
              {data?.trackingRef ? data?.trackingRef : "- -"}
            </span>
          </MKBox>
        </MKBox>
        <MKTypography variant="body2" className={classes.errorConsent}>
          Please make the transaction using the below details that will take
          $0.00 as a fee.
        </MKTypography>
        <span className={classes.BankAccountDetailsLabel}>
          Beneficiary Details
        </span>
        <MKBox className={classes.DetailsContainer}>
          <Grid container>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Beneficiary Name</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <p className={classes.DetailsAns}>
                {data?.beneficiary?.name ? data?.beneficiary?.name : "- -"}
              </p>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Address 2</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {data?.beneficiary?.address2
                  ? data?.beneficiary?.address2
                  : "- -"}
              </span>
            </Grid>

            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Address 1</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {" "}
                {data?.beneficiary?.address1
                  ? data?.beneficiary?.address1
                  : "- -"}
              </span>
            </Grid>
          </Grid>
        </MKBox>
        <span className={classes.BankAccountDetailsLabel1}>
          Beneficiary Bank Details
        </span>
        <MKBox className={classes.DetailsContainer}>
          <Grid container>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Name</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <p className={classes.DetailsAns}>
                {data?.beneficiaryBank?.name
                  ? data?.beneficiaryBank?.name
                  : "- -"}
              </p>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Address</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {data?.beneficiaryBank?.address
                  ? data?.beneficiaryBank?.address
                  : "- -"}
              </span>
            </Grid>

            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Swift Code</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {" "}
                {data?.beneficiaryBank?.swiftCode
                  ? data?.beneficiaryBank?.swiftCode
                  : "- -"}
              </span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>City</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {" "}
                {data?.beneficiaryBank?.city
                  ? data?.beneficiaryBank?.city
                  : "- -"}
              </span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Routing Number</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {" "}
                {data?.beneficiaryBank?.routingNumber
                  ? data?.beneficiaryBank?.routingNumber
                  : "- -"}
              </span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Postal Code</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {" "}
                {data?.beneficiaryBank?.postalCode
                  ? data?.beneficiaryBank?.postalCode
                  : "- -"}
              </span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Account Number</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {" "}
                {data?.beneficiaryBank?.accountNumber
                  ? data?.beneficiaryBank?.accountNumber
                  : "- -"}
              </span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsLab}>Country</span>
            </Grid>
            <Grid item sm={3} xs={6}>
              <span className={classes.DetailsAns}>
                {" "}
                {data?.beneficiaryBank?.country
                  ? data?.beneficiaryBank?.country
                  : "- -"}
              </span>
            </Grid>
          </Grid>
        </MKBox>
      </DialogContent>
    </Dialog>
  );
};

export default CustomConfirmationModal;

import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./styles";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import { useEffect, useState } from "react";

const BankAccountDetails = ({ open, handleClose, data }) => {
  const { linkedBankAccounts } = useSelector(
    (state) => state.accounts
  );
  const classes = styles();
  const [bankInfo, setBankInfo] = useState();
  
  useEffect(() => {
    if(linkedBankAccounts?.data?.length > 0){
      const bankDetails = linkedBankAccounts?.data?.filter((item) => item.id === data)
      setBankInfo(bankDetails[0])
    }
  }, [data])
  const {
    bank_name,
    last4,
    routing_number,
  } = bankInfo?.us_bank_account || "";

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.BankAccountDetailsDialog}
    >
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
        <MKBox className={classes.bankDetailsBox}>
          <DialogTitle
            display="flex"
            justifyContent="center"
            className={classes.dialogTitle}
          >
            <MKTypography
              variant="h3"
              align="center"
              className={classes.depositModalTitle}
            >
              Bank Account Details
            </MKTypography>
          </DialogTitle>
          <DialogContent
            display="flex"
            justify="center"
            className={classes.dialogContent}
          >
            <span className={classes.BankAccountDetailsLabel}>
              Bank Details
            </span>
            <MKBox className={classes.DetailsContainer}>
              <Grid container>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Bank Name</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <p className={classes.DetailsAns}>
                    {bank_name}
                  </p>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Routing Number</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {" "}
                    {routing_number}
                  </span>
                </Grid>

                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Account Number</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {" "}
                    {`***********${last4}`}
                  </span>
                </Grid>
                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Account Type</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {type === "wire" ? "Wire" : "ACH"}
                  </span>
                </Grid> */}

                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Account Holder</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {bankInfo?.billing_details?.name}
                  </span>
                </Grid>
                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Email</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <p className={classes.DetailsAns}>{`${email}`}</p>
                </Grid> */}

                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Bank Country</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {" "}
                    {bankAddress?.country ? bankAddress?.country : "- -"}
                  </span>
                </Grid> */}
                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Phone Number</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>{mobileNumber}</span>
                </Grid> */}
              </Grid>
            </MKBox>
            <span className={classes.BankAccountDetailsLabel}>
              Billing Details
            </span>
            <MKBox className={classes.DetailsContainer}>
              <Grid container>
                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Holder Name</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                     {billingDetails?.name ? billingDetails?.name : "- -"}
                  </span>
                </Grid>*/}
                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Street Address 2</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {billingDetails?.line2 ? billingDetails?.line2 : "- -"}
                  </span>
                </Grid> */}

                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Account Number</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {" "}
                    {`***********${last4}`}
                  </span>
                </Grid>
                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>District</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {" "}
                    {billingDetails?.district
                      ? billingDetails?.district
                      : "- -"}
                  </span>
                </Grid> */}

                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Account Holder</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {bankInfo?.billing_details?.name}
                  </span>
                </Grid>
                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Country</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {" "}
                    {billingDetails?.country
                      ? billingDetails?.country
                      : "- -"}{" "}
                  </span>
                </Grid> */}

                {/* <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsLab}>Street Address 1</span>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <span className={classes.DetailsAns}>
                    {billingDetails?.line1 ? billingDetails?.line1 : "- -"}
                  </span>
                </Grid> */}
              </Grid>
            </MKBox>
          </DialogContent>
        </MKBox>
    </Dialog>
  );
};

export default BankAccountDetails;

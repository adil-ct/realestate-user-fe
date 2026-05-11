import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// static imports
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import CurrencyFormat from "components/CurrencyFormat";
import styles from "./styles";
import { Grid } from "@mui/material";
import { Attachment } from "constants/assets";

const PayRentModal = ({
  open,
  handleClose,
  handleClickHere,
  handleSuccess,
  isLoading,
  data,
}) => {
  const classes = styles();

  return (
    <Dialog open={open} onClose={handleClose} className={classes.dialogPayout}>
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
          className={classes.modalTitle1Consent}
        >
          Rent Payout
        </MKTypography>
      </DialogTitle>
      <MKBox
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <MKTypography variant="body2" className={classes.depositSubititle1}>
          <CurrencyFormat prefix={"$"} value={data?.balance} />
        </MKTypography>
        <span className={classes.currentBalance}>Available Balance</span>
      </MKBox>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContentConsent}
      >
        <MKBox mt={2}>
          <MKBox className={classes.dFlex} mb={1}>
            <span className={classes.keyConsentBold}>Total Rent Amount:</span>
            <span className={classes.pairConsentBold}>
              <CurrencyFormat prefix={"$"} value={data?.totalRentAmount} />
            </span>
          </MKBox>

          <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>Principal:</span>
            <span className={classes.pairConsentBold}>
              <CurrencyFormat prefix={"$"} value={data?.principal} />
            </span>
          </MKBox>
          <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>Interest:</span>
            <span className={classes.pairConsentBold}>
              <CurrencyFormat prefix={"$"} value={data?.interest} />
            </span>
          </MKBox>
          <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>Taxes:</span>
            <span className={classes.pairConsentBold}>
              <CurrencyFormat prefix={"$"} value={data?.taxes} />
            </span>
          </MKBox>
          <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>Insurance:</span>
            <span className={classes.pairConsentBold}>
              <CurrencyFormat prefix={"$"} value={data?.insurance} />
            </span>
          </MKBox>
          { data?.hoaFlag && <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>HOA Fees:</span>
            <span className={classes.pairConsentBold}>
              <CurrencyFormat prefix={"$"} value={data?.HOAFee} />
            </span>
          </MKBox>
          }
          { data?.llcFlag && <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>LLC Admin Fees:</span>
            <span className={classes.pairConsentBold}>
              <CurrencyFormat prefix={"$"} value={data?.LLCAdminFee} />
            </span>
          </MKBox>
          }
          { data?.pFee && 
           <MKBox className={classes.dFlex}>
           <span className={classes.keyConsent}>Property Management Fees:</span>
           <span className={classes.pairConsentBold}>
             <CurrencyFormat prefix={"$"} value={data?.propertyMgtFee} />
           </span>
         </MKBox>}
          {data?.contingencyVar1?.applicable && (
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>
                {data?.contingencyVar1.name}:
              </span>
              <span className={classes.pairConsentBold}>
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.contingencyVar1.value}
                />
              </span>
            </MKBox>
          )}
          {data?.contingencyVar2?.applicable && (
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>
                {data?.contingencyVar2.name}:
              </span>
              <span className={classes.pairConsentBold}>
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.contingencyVar2.value}
                />
              </span>
            </MKBox>
          )}
          {data?.contingencyVar3?.applicable && (
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>
                {data?.contingencyVar3.name}:
              </span>
              <span className={classes.pairConsentBold}>
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.contingencyVar3.value}
                />
              </span>
            </MKBox>
          )}
        </MKBox>
        <MKBox mt={2}>
          <Grid>
            <MKTypography variant="h7" className={classes.keyConsentBold}>
              Document
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={12} lg={12} sm={12}>
            <span className={classes.keyConsent}>
              <div className={classes.docName}>
                <img src={Attachment} alt="document" />
                {data?.document.key}
              </div>
            </span>
          </Grid>
        </MKBox>
        <MKBox mt={3} className={classes.dFlex}>
          <MKTypography variant="h7" className={classes.keyConsentBold}>
            Net Rent Amount
          </MKTypography>
          <span className={classes.pairConsentBold}>
            <CurrencyFormat prefix={"$"} value={data?.netRentAmount} />
          </span>
        </MKBox>
        {data?.netRentAmount > data?.balance && (
          <MKBox mt={1}>
            <MKTypography className={classes.lowFundsTextBox}>
              <span className={classes.redText}>Insufficient funds!</span> Add
              more funds <span className={classes.blueText} onClick={handleClickHere}>here</span>.
            </MKTypography>
          </MKBox>
        )}
      </DialogContent>
      <MKBox
        display="flex"
        justifyContent="center"
        className={classes.modalBottomButtonConsent}
      >
        <MKButton
          variant="gradient"
          className={classes.mkButton1Consent}
          // color="primary"
          size="medium"
          onClick={handleSuccess}
          disabled={data?.netRentAmount > data?.balance}
        >
          <ButtonSpinner
            text="Submit"
            classes={classes.navigateLogin}
            isLoading={isLoading}
          />
        </MKButton>
      </MKBox>
    </Dialog>
  );
};

export default PayRentModal;

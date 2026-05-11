import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// static imports
import CurrencyFormat from "components/CurrencyFormat";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import styles from "./styles";

const CoownerModal = ({ open, handleClose, dataList }) => {
  const classes = styles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.dialogConsentBase}
    >
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle
        display="flex"
        justifyContent="center"
        className={classes.dialogTitle1}
      >
        <MKTypography
          variant="h3"
          align="center"
          className={classes.modalTitle1Consent}
        >
          Co-Owners
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        pb={2}
        className={classes.dialogContentConsent}
      >
        {dataList?.map((data) => (
          <MKBox mt={1} mb={1} key={data.email} className={classes.coBox}>
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>Name:</span>
              <span className={classes.pairConsent}>
                {data.name ? data.name : "- -"}
              </span>
            </MKBox>
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>Email:</span>
              <span className={classes.pairConsent}>
                {data.email ? data.email : "- -"}
              </span>
            </MKBox>
            <MKBox className={classes.dFlexBase}>
              <span className={classes.keyConsent}>No. of tokens:</span>
              <span className={classes.pairConsent}>
                {data?.tokens ? (
                  <CurrencyFormat prefix="" zeroAllowed={false} value={data?.tokens} />
                ) : (
                  "- -"
                )}
              </span>
            </MKBox>
          </MKBox>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default CoownerModal;

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// static imports
import { POLYGONSCAN_URL } from "constants/env";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import styles from "./styles";

const TransactionDetail = ({ open, handleClose, data }) => {
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
          Transaction Details
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContentConsent}
      >
        <MKBox mt={2}>
          {data?.headRow.map((item, index) => (
            <MKBox key={index} className={classes.dFlex} mb={1}>
              <span className={classes.keyConsentBold}>{item.title}</span>
              <span className={classes.pairConsentBold}>{item.value}</span>
            </MKBox>
          ))}
          {data?.bodyRow.map((item, index) => (
            <MKBox key={index} className={classes.dFlex} mb={1}>
              <span className={classes.keyConsent}>{item.title}</span>
              <span className={classes.pairConsentBold}>{item.title === "Transaction Hash:" ? <a
                  rel="noreferrer"
                  href={
                    POLYGONSCAN_URL +
                    "/tx/" +
                   item.value
                  }
                  target="_blank"
                  style={{ lineBreak: "break-anywhere" }}
                  className={classes.addressValLabelMobile}
                >
                  {`${item.value?.slice(0, 6)}......${item.value?.slice(-4)}`}
              </a> : item.value 
            }</span>
            </MKBox>
          ))}
        </MKBox>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDetail;

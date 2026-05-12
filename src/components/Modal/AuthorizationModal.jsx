import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import moment from "moment";
// static imports
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import { CIRCLE_TERMS, CIRCLE_PRIVACY_POLICY } from "constants/env";
import styles from "./styles";
import CurrencyFormat from "components/CurrencyFormat";

import { MOGUL_SUPPORT_EMAIL } from "constants/env";

const CustomConfirmationModal = ({
  open,
  handleClose,
  handleSuccess,
  isLoading,
  data,
}) => {
  const classes = styles();
  const [ipAddress, setIpAddress] = useState("- -");
  const getIpAddress = async () => {
    const res = await axios.get("https://ipinfo.io/json");
    setIpAddress(res.data.ip);
  };
  getIpAddress();
  return (
    <Dialog open={open} onClose={handleClose} className={classes.dialogConsent}>
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
          Authorization
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContentConsent}
      >
        <MKTypography variant="body2" className={classes.subtitleConsent}>
          I authorize Circle Internet Financial, on behalf of Occurrence Inc. to
          electronically debit my account (and, if necessary, electronically
          credit my account) at the financial institution selected by me in the
          previous step:
        </MKTypography>
        <MKBox mt={2}>
          {data.type === "Bank" && (
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>Account Holder Name:</span>
              <span className={classes.pairConsent}>
                {data.bank?.accountHolder ? data.bank?.accountHolder : "- -"}
              </span>
            </MKBox>
          )}
          {data.type === "Bank" && (
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>Routing Number:</span>
              <span className={classes.pairConsent}>
                {data.bank?.routingNumber ? data.bank?.routingNumber : "- -"}
              </span>
            </MKBox>
          )}
          {data.type !== "Bank" && (
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>Card Number:</span>
              <span className={classes.pairConsent}>
                **** **** **** {data.bank?.lastFour}
              </span>
            </MKBox>
          )}
          {data.type === "Bank" && (
            <MKBox className={classes.dFlex}>
              <span className={classes.keyConsent}>Account Number:</span>
              <span className={classes.pairConsent}>
                {data.bank?.accountNumber ? data.bank?.accountNumber : "- -"}
              </span>
            </MKBox>
          )}
          <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>Amount:</span>
            <span className={classes.pairConsent}>
              {
                <CurrencyFormat
                  prefix={"$"}
                  value={data?.amount}
                  zeroAllowed
                  noSpan={true}
                />
              }
            </span>
          </MKBox>
          <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>
              Authorization Date and Time:
            </span>
            <span className={classes.pairConsent}>
              {data?.bank?.plaid_created_at
                ? moment(data?.bank?.plaid_created_at).format("lll")
                : "- -"}
            </span>
          </MKBox>
          <MKBox className={classes.dFlex}>
            <span className={classes.keyConsent}>IP Address:</span>
            <span className={classes.pairConsent}>
              {ipAddress ? ipAddress : "- -"}
            </span>
          </MKBox>
        </MKBox>
        <MKTypography variant="body2" className={classes.subtitleConsent}>
          <i style={{ fontWeight: 500 }}>PLEASE NOTE:</i> You are authorizing a
          one-time payment that will begin processing immediately. If there is a
          problem with the transaction, you may contact
          <MKTypography
            variant="body2"
            component="a"
            href={`mailto:${MOGUL_SUPPORT_EMAIL}`}
            className={classes.subtitleConsent2}
          >
            {MOGUL_SUPPORT_EMAIL}{" "}
          </MKTypography>
          however, there is no guarantee of cancellation.
        </MKTypography>
        <MKTypography variant="body2" className={classes.subtitleConsent1}>
          Scheduled in advance payments may be revoked by contacting
          <a href={`mailto:${MOGUL_SUPPORT_EMAIL}`}>
            <MKTypography
              variant="body2"
              display="inline"
              className={classes.subtitleConsent2}
            >
              {MOGUL_SUPPORT_EMAIL}{" "}
            </MKTypography>
          </a>
          in 3 business days prior to the scheduled payment.
        </MKTypography>
        <MKBox>
          <MKTypography
            variant="body2"
            display="inline"
            className={classes.subtitleConsent1}
          >
            I agree with Circle
            <a href={CIRCLE_TERMS} target="_blank" rel="noopener noreferrer">
              <MKTypography
                variant="body2"
                display="inline"
                className={classes.subtitleConsent2}
              >
                USDC Terms
              </MKTypography>{" "}
            </a>
            and
            <a
              href={CIRCLE_PRIVACY_POLICY}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MKTypography
                variant="body2"
                display="inline"
                className={classes.subtitleConsent2}
                component="span"
              >
                Privacy Policy
              </MKTypography>
            </a>
            .
          </MKTypography>
        </MKBox>
      </DialogContent>
      <MKBox
        display="flex"
        justifyContent="center"
        className={classes.modalBottomButtonConsent}
      >
        <MKButton
          variant="outlined"
          className={classes.mkButton1Consent}
          // color="primary"
          size="medium"
          onClick={handleClose}
        >
          Cancel
        </MKButton>
        <MKButton
          variant="contained"
          className={classes.mkButton1Consent}
          // color="primary"
          size="medium"
          onClick={handleSuccess}
        >
          <ButtonSpinner
            text="Authorize"
            classes={classes.navigateLogin}
            isLoading={isLoading}
          />
        </MKButton>
      </MKBox>
    </Dialog>
  );
};

export default CustomConfirmationModal;

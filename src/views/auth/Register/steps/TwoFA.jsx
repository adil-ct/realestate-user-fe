import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import toaster from "utils/toaster";

import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import RecoveryCodeModal from "components/Modal/RecoveryCodeModal";
import QrCodeModal from "./Qrcode";
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import { styles } from "../styles/registerStyles";
import { securityRequest, securitySettings, profileFetch } from "store/actions";
import { GOOGLE_AUTH_APP_URL } from "constants/env";
import { routePaths } from "routes/mainRoutes/routePaths";

const TwoFA = () => {
  const classes = styles();
  const [requestType, setRequestType] = useState("");
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [openQRModal, setOpenQRModal] = useState(false);
  const [openPhoneVerification, setOpenPhoneVerification] = useState(false);
  const [openRecoveryCodeModal, setOpenRecoveryCodeModal] = useState(false);
  const [qrImage, setQrImage] = useState();
  const [secretCode, setSecretCode] = useState();

  // Types for security request
  const securityRequestType = {
    AUTH: "authenticator",
    SMS: "sms",
    NONE: "none",
  };

  const handleChange = (e) => {
    setRequestType(e.target.value);
  };

  const runAuthenticationAppFlow = () => {
    setOpenQRModal(true);
  };

  const handleSecurityRequestSuccess = (data, method) => {
    // handle data
    switch (method) {
      case securityRequestType.AUTH:
        setSecretCode(data.secret);
        setQrImage(data.url);
        runAuthenticationAppFlow();
        break;
      case securityRequestType.SMS:
        toaster.success("2FA is setup successfully.");
        userData?.kycStatus === "approved" &&
          localStorage.setItem("tour_started", true);
        userData?.kycStatus === "whitelisting"
          ? navigate(routePaths.INVESTOR_PATH)
          : navigate(routePaths.PORTFOLIO_PATH);
        setTimeout(() => {
          dispatch(profileFetch());
        }, [1000]);
        break;
      case securityRequestType.NONE:
        userData?.kycStatus === "approved" &&
          localStorage.setItem("tour_started", true);
        userData?.kycStatus === "whitelisting"
          ? navigate(routePaths.INVESTOR_PATH)
          : navigate(routePaths.PORTFOLIO_PATH);
        setTimeout(() => {
          dispatch(profileFetch());
        }, [1000]);
        break;
      default:
        break;
    }
  };

  const skipNow = () => {
    const requestBody = {
      method: "none",
    };
    dispatch(
      securityRequest({
        requestBody,
        handleSuccess: () => dispatch(profileFetch()),
      })
    );
    userData?.kycStatus === "approved" &&
      localStorage.setItem("tour_started", true);
    userData?.kycStatus === "whitelisting"
      ? navigate(routePaths.INVESTOR_PATH)
      : navigate(routePaths.PORTFOLIO_PATH);
  };

  const handleSubmit = () => {
    const requestBody = {
      method: requestType,
    };
    dispatch(
      securityRequest({
        requestBody,
        handleSuccess: handleSecurityRequestSuccess,
      })
    );
  };

  const handleQRNext = () => {
    setOpenQRModal(false);
    setOpenPhoneVerification(true);
  };
  const handleAuthVerificationSuccess = () => {
    setOpenPhoneVerification(false);
    if (requestType === securityRequestType.AUTH) {
      // open recovery modal if auth app is selected
      setOpenRecoveryCodeModal(true);
    } else {
      // navigate if phone verification selected
      toaster.success("2FA is setup successfully.");
      userData?.kycStatus === "approved" &&
        localStorage.setItem("tour_started", true);
      userData?.kycStatus === "whitelisting"
        ? navigate(routePaths.INVESTOR_PATH)
        : navigate(routePaths.PORTFOLIO_PATH);
    }
  };

  const handleVerificationFailed = (response) => {
    toaster.error(response);
  };

  const handlePhoneVerificationNext = (data) => {
    const requestBody = {
      method: requestType,
      code: data.code,
    };
    dispatch(
      securitySettings({
        requestBody,
        handleSuccess: handleAuthVerificationSuccess,
        handleFail: handleVerificationFailed,
      })
    );
  };

  const handleRecoveryCodeNext = () => {
    setOpenRecoveryCodeModal(false);
    toaster.success("2FA is setup successfully.");
    userData?.kycStatus === "approved" &&
      localStorage.setItem("tour_started", true);
    userData?.kycStatus === "whitelisting"
      ? navigate(routePaths.INVESTOR_PATH)
      : navigate(routePaths.PORTFOLIO_PATH);
    setTimeout(() => {
      dispatch(profileFetch());
    }, [1000]);
  };

  const data = {
    title: "Save Recovery Code",
    code: secretCode,
  };

  return (
    <Grid container item className={classes.borderDesktop}>
      <MKTypography variant="h6" className={classes.secondaryHeading}>
        Two-Factor Authentication (2FA)
      </MKTypography>
      <MKTypography variant="description" className={classes.twoFAdescription}>
        Please choose one of the following methods of 2FA. For enhanced
        protection, we recommend choosing one of the following methods prior to
        moving forward. However, you can skip and complete later if you would
        like.
      </MKTypography>
      <FormControl className={classes.radioGroupUpperBox}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={requestType}
          onChange={handleChange}
        >
          <FormControlLabel
            value={securityRequestType.AUTH}
            control={<Radio style={{ marginTop: "10px" }} />}
            className={classes.labelContainer}
            label={
              <div className={classes.authAppLabel}>
                Authentication App&nbsp; <wbr />
                <span className={classes.authAppLabelLinkContainer}>
                  (
                  <div className={classes.authAppLabelLink}>
                    <a
                      href={GOOGLE_AUTH_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Authenticator
                    </a>
                  </div>
                  )
                </span>
              </div>
            }
          />
          <FormControlLabel
            value={securityRequestType.SMS}
            className={classes.labelContainer}
            control={<Radio style={{ marginTop: "10px" }} />}
            label={
              <div className={classes.authAppLabel}>
                Phone Number <wbr /> Verification
              </div>
            }
          />
          <FormControlLabel
            value={securityRequestType.NONE}
            control={<Radio style={{ marginTop: "10px" }} />}
            className={classes.labelContainer}
            label={<div className={classes.authAppLabel}>Set Up Later</div>}
          />
        </RadioGroup>
      </FormControl>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} lg={6} sm={12} className={classes.nextBtnBox}>
          <MKButton
            type="submit"
            variant="gradient"
            // color="primary"
            className={classes.nextBtn}
            onClick={handleSubmit}
          >
            <ButtonSpinner text="Next" />
          </MKButton>
          <MKButton
            type="submit"
            variant="outlined"
            className={classes.nextBtn1}
            onClick={skipNow}
          >
            <ButtonSpinner text="Skip for Now" />
          </MKButton>
        </Grid>
      </Grid>
      {/* Modals */}
      <QrCodeModal
        open={openQRModal}
        setOpen={setOpenQRModal}
        handleNext={() => handleQRNext()}
        qrImage={qrImage}
        secretCode={secretCode}
      />
      <PhoneNumberVerificationModal
        title="Verification"
        description="Please enter the code received on the linked app."
        show={openPhoneVerification}
        setShow={setOpenPhoneVerification}
        btnText="Next"
        onSubmit={handlePhoneVerificationNext}
        showResendBtn={requestType === securityRequestType.SMS}
      />
      <RecoveryCodeModal
        open={openRecoveryCodeModal}
        handleClose={() => setOpenRecoveryCodeModal(false)}
        data={data}
        btnText="Ok"
        handleNext={() => handleRecoveryCodeNext()}
      />
    </Grid>
  );
};
export default TwoFA;

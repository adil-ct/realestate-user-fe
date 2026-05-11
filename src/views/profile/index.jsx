import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Tooltip,
  Alert,
} from "@mui/material";
import "react-phone-input-2/lib/material.css";
import EditNoteIcon from '@mui/icons-material/EditNote';
import WalletIcon from '@mui/icons-material/Wallet';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import style from "./profileStyle";
import MKBox from "components/custom/MKBox";
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import { profileFetch, emailVerificationSaga, resendOtpSaga } from "store/actions";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import ProfileForm from "./profileForm";

const Profile = () => {
  const classes = style();
  const [emailVerify, setEmailVerify] = useState(false);
  const { isLoading: authLoader, userData } = useSelector(
    (state) => state.auth
  );
  const [alldDisabled, setAllDisabled] = useState(true);
  const dispatch = useDispatch();
  const { copy, tooltipText } = useCopyToClipboard(userData?.blockchainAddress);

  const otpData = {
    email: userData?.email,
  };

  const handleEmailVerificationSuccess = () => {
    setEmailVerify(false);
    dispatch(profileFetch())
  }

  const handlePhoneVerificationNext = (requestBody) => {
    dispatch(
      emailVerificationSaga({
        requestBody,
        handleSuccess: handleEmailVerificationSuccess,
        handleFail: () => { },
      })
    );
  }

  const handleResend = () => {
    const requestBody = {
      channel: "Email",
      email: userData?.email,
    };
    dispatch(resendOtpSaga({ requestBody }));
  }


  const getInitials = (firstName, lastName) => {
    return `${firstName ? firstName[0]?.toUpperCase() : ""}${lastName ? lastName[0]?.toUpperCase() : ""}`;
  };

  return (
    <MKBox>
      <MKBox className={classes.accountSettingsContainer}>
        <MKBox className={classes.accountSettingsMainContainer}>
          <MKBox className={classes.AccountSettingInsideContainer}>
            <MKBox className={classes.AccountSettingLabel}>
              <MKBox>My Profile</MKBox>
              {alldDisabled && (
                <MKBox
                  className={classes.profileEditImgContainer}
                  onClick={() => setAllDisabled(false)}
                >
                  <EditNoteIcon height={20} width={20}/>
                </MKBox>
              )}
            </MKBox>
            {/*  Initials container */}
            <MKBox className={classes.profileInitialsContainer}>
              <MKBox className={classes.profileInitials}>
                {getInitials(userData?.firstName, userData?.lastName)}
              </MKBox>
              {(userData?.blockchainAddress && userData?.kycStatus === "approved") && (
                <Tooltip enterTouchDelay={0}  title={tooltipText}>
                  <MKBox
                    className={classes.profileWalletAddress}
                    onClick={() => {
                      copy(userData?.blockchainAddress);
                    }}
                  >
                    <WalletIcon className={classes.walletIcon}/>
                      Blockchain Wallet Address
                    <ContentCopyIcon className={classes.copyIcon}/>
                  </MKBox>
                </Tooltip>
              )}
            </MKBox>
            {!userData?.emailVerified && (
                  <Alert severity="warning" className={classes.infoAlert}>
                  An email verification code has been sent to
                  <b> {userData?.email}</b>
                  <br />
                  Please verify your email to complete your registration process.{" "}
                    <b className={classes.cursorPointer} onClick={() => setEmailVerify(true)}> Verify Now</b>
                  {" "}
                </Alert>
                  )}
            {/* {!requiredCheck && (
                    <Alert
                      // variant="filled"
                      severity="warning"
                      className={classes.infoAlert}
                    >
                      Please ensure all required fields are completed as indicated 
                    </Alert>
                  )} */}
          <ProfileForm alldDisabled={alldDisabled} setAllDisabled={setAllDisabled}/>
          </MKBox>
        </MKBox>
        <PhoneNumberVerificationModal
          title="Verify Email Address"
          description={`Enter code sent to ${userData?.email ? userData?.email : "xxxxxxxx"}`}
          show={emailVerify}
          setShow={setEmailVerify}
          otpData={otpData}
          onSubmit={handlePhoneVerificationNext}
          handleResend={handleResend}
          isLoading={authLoader?.emailVerification}
          email={userData?.email}
        />
      </MKBox>
    </MKBox>
  );
};

export default Profile;

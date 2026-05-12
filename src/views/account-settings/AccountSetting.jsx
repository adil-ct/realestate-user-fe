import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Grid, Switch, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

// import { IOSSwitch } from "components/Switch/IOSSwitch";
import AddPhoneNumberModal from "components/Modal/AddPhoneNumberModal";
import { Trash, Location, Phone, Leptop } from "constants/assets";
import MKBox from "components/custom/MKBox";
import Choose2FAModal from "../accounts/components/Choose2FAModal";
import ChangePassword from "../accounts/components/ChangePassword";
import style from "../accounts/style/style";
import { QrCodeModal } from "views";
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import RecoveryCodeModal from "components/Modal/RecoveryCodeModal";
import toaster from "utils/toaster";
import {
  securityRequest,
  securitySettings,
  notificationSettingSaga,
  fetchUserDevicesSaga,
  deleteUserDeviceSaga,
  sendOTP,
} from "store/actions";
import { profileFetch } from "store/actions";

// Types for security request
const securityRequestType = {
  AUTH: "authenticator",
  SMS: "sms",
  NONE: "none",
};

// Types for notification setting
const notificationSettingType = {
  ALL: "ALL",
  ASSET_UPDATE: "ASSET_UPDATE",
  ACTIVITIES: "ACTIVITIES",
  SYSTEM_MESSAGES: "SYSTEM_MESSAGES",
};

const AccountSetting = () => {
  const classes = style();
  const dispatch = useDispatch();
  const [twoFA, setTwoFA] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [requestType, setRequestType] = useState("");
  const [openQRModal, setOpenQRModal] = useState(false);
  const [addPhone, setAddPhone] = useState(false);
  const [openPhoneVerification, setOpenPhoneVerification] = useState(false);
  const [openRecoveryCodeModal, setOpenRecoveryCodeModal] = useState(false);
  const [notificationSetting, setNotificationSetting] = useState({
    all: false,
    assetUpdate: false,
    activities: false,
    systemMessages: false,
  });
  const [qrImage, setQrImage] = useState();
  const [secretCode, setSecretCode] = useState();
  const [twoFAMthod, setTwoFAMthod] = useState("");
  const [deleteUserId, setDeleteUserId] = useState();
  const [current2FA, setCurrent2FA] = useState();
  const [showModal, setShowModal] = useState(false);
  const { userData, userDevices, isLoading } = useSelector(
    (state) => state.auth
  );

  const handleChangePassword = () => {
    setChangePassword(!changePassword);
  };
  const hanndleTwoFA = () => {
    setTwoFA(!twoFA);
    console.log(twoFAMthod);
  };

  const getHiddenPhoneNumber = () => {
    return `********${userData?.mobileNumber?.toString()?.slice(-2)}`;
  };

  const otpData = {
    mobileNumber: userData?.mobileNumber,
    countryCode: userData?.countryCode,
  };
  
  const handleResend = () => {
    const requestBody = {
      channel: "SMS",
      mobileNumber: `${userData?.countryCode}${userData.mobileNumber}`,
    };
    dispatch(sendOTP({ requestBody }));
  };

  const handleSecurityRequestSuccess = (data, type) => {
    // handle data
    switch (type) {
      case securityRequestType.AUTH:
        setSecretCode(data.secret);
        setQrImage(data.url);
        setOpenQRModal(true);
        setTwoFA(false);
        break;
      case securityRequestType.SMS:
        toaster.success("2FA is setup successfully.");
        setTwoFA(false);
        setCurrent2FA("Phone Number Verification");
        // setShowModal(true);
        break;
      case securityRequestType.NONE:
        toaster.success("2FA is setup successfully.");
        setTwoFA(false);
        setCurrent2FA("None");
        break;
      default:
        break;
    }
  };

  const handleAddSuccess = () => {
      setRequestType(securityRequestType.SMS);
      const requestBody = {
        method: "sms",
      };
      dispatch(
        securitySettings({
          requestBody,
          handleSuccess: handleAuthVerificationSuccess,
        })
      );
  }

  const handle2FASelect = (securityId) => {
    let requestBody = {};
    if (securityId === 1) {
      //Auth app
      setRequestType(securityRequestType.AUTH);
      requestBody = {
        method: "authenticator",
      };
    } else if (securityId === 2) {
      // Phone verification
      if(userData?.mobileNumber){
      setRequestType(securityRequestType.SMS);
      requestBody = {
        method: "sms",
      };
    }else{
      setTwoFA(false);
      setAddPhone(true)
    }
    } else {
      // none
      setRequestType(securityRequestType.NONE);
      requestBody = {
        method: "none",
      };
    }

    dispatch(
      securityRequest({
        requestBody,
        handleSuccess: handleSecurityRequestSuccess,
      })
    );
  };

  const handleQRNext = () => {
    // handle QR next step
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
      setShowModal(false)
      setTwoFA(false);
      setAddPhone(false)
      dispatch(profileFetch())
      toaster.success("2FA is setup successfully.");
      setCurrent2FA("Phone Number Verification");
    }
  };
  const handleVerificationFailed = (response) => {
    toaster.error(response);
  };

  const handlePhoneVerificationNext = (data) => {
    // set scurity settings
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
    setCurrent2FA("Google Authenticator");
  };

  const data = {
    title: "Save Recovery Code",
    code: secretCode,
  };

  const handleNotificationFailed = () => {
    setNotificationSetting({
      all:
        userData?.notification?.assetUpdate &&
        userData?.notification?.activities &&
        userData?.notification?.systemMessages,
      assetUpdate: userData?.notification?.assetUpdate,
      activities: userData?.notification?.activities,
      systemMessages: userData?.notification?.systemMessages,
    });
  };

  const handleNotificationSuccess = () => {
    dispatch(profileFetch());
  };

  const updateNotificationSetting = (e, type) => {
    let notificationSettings = {};

    switch (type) {
      case notificationSettingType.ALL:
        if (e.target.checked) {
          setNotificationSetting({
            all: true,
            assetUpdate: true,
            activities: true,
            systemMessages: true,
          });
          notificationSettings = {
            all: true,
            assetUpdate: true,
            activities: true,
            systemMessages: true,
          };
        } else {
          setNotificationSetting({
            all: false,
            assetUpdate: false,
            activities: false,
            systemMessages: false,
          });
          notificationSettings = {
            all: false,
            assetUpdate: false,
            activities: false,
            systemMessages: false,
          };
        }
        break;
      case notificationSettingType.ASSET_UPDATE:
        notificationSettings = {
          ...notificationSetting,
          assetUpdate: e.target.checked,
          all:
            notificationSetting.activities &&
            notificationSetting.systemMessages &&
            e.target.checked,
        };
        break;
      case notificationSettingType.ACTIVITIES:
        notificationSettings = {
          ...notificationSetting,
          activities: e.target.checked,
          all:
            notificationSetting.assetUpdate &&
            notificationSetting.systemMessages &&
            e.target.checked,
        };
        break;
      case notificationSettingType.SYSTEM_MESSAGES:
        notificationSettings = {
          ...notificationSetting,
          systemMessages: e.target.checked,
          all:
            notificationSetting.assetUpdate &&
            notificationSetting.activities &&
            e.target.checked,
        };
        break;
    }
    setNotificationSetting(notificationSettings);
    const requestBody = {
      assetUpdate: notificationSettings.assetUpdate,
      activities: notificationSettings.activities,
      systemMessages: notificationSettings.systemMessages,
    };
    dispatch(
      notificationSettingSaga({
        requestBody,
        successHandler: handleNotificationSuccess,
        failHandler: handleNotificationFailed,
      })
    );
  };

  const handleDeleteDeviceSuccess = () => {
    dispatch(fetchUserDevicesSaga());
  };

  const deleteDevice = (deviceId) => {
    if (!isLoading.deleteUserDevice) {
      setDeleteUserId(deviceId);
      dispatch(
        deleteUserDeviceSaga({
          deviceId,
          successHandler: handleDeleteDeviceSuccess,
        })
      );
    }
  };

  const getDeviceImage = (type) => {
    switch (type) {
      case "desktop":
        return Leptop;
      case "smartphone":
        return Phone;
      case "tablet":
        return Phone;
      default:
        return Leptop;
    }
  };

  const getCurrent2FA = () => {
    if (userData?.twoFA?.authenticator) {
      setCurrent2FA("Google Authenticator");
    } else if (userData?.twoFA?.sms) {
      setCurrent2FA("Phone Number Verification");
    } else {
      setCurrent2FA("None");
    }
  };

  // const isKycDone = () => {
  //   if(["pending", "created", "started", "failed", "declined", "canceled"].includes(userData?.kycStatus)){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

  useEffect(() => {
    setNotificationSetting({
      all:
        userData?.notification?.assetUpdate &&
        userData?.notification?.activities &&
        userData?.notification?.systemMessages,
      assetUpdate: userData?.notification?.assetUpdate,
      activities: userData?.notification?.activities,
      systemMessages: userData?.notification?.systemMessages,
    });

    getCurrent2FA();
  }, [userData]);

  useEffect(() => {
    dispatch(fetchUserDevicesSaga());
  }, []);

  return (
    <MKBox className={classes.accountSettingsContainer}>
      <MKBox className={classes.accountSettingsMainContainer}>
        <MKBox className={classes.AccountSettingInsideContainer}>
          <MKBox className={classes.AccountSettingLabel}>Settings</MKBox>
          <MKBox className={classes.AccountSettingsSecurityContainer}>
            <h6 className={classes.AccountSettingTitle}>Security</h6>
            <MKBox className={classes.accountSettingsMainFlex}>
              <MKBox
                className={classes.accountSettingsFlex}
                style={{ margin: 0 }}
              >
                <label className={classes.AccountSettingLabel2}>
                  Change 2FA Method
                </label>
                <NavLink
                  className={`${classes.AccountSettingLink}`}
                  onClick={()=> hanndleTwoFA()}
                >
                  Change
                </NavLink>
              </MKBox>
              <Typography
                // color="#4F4F4F"
                fontSize="12px"
                fontWeight="400"
                fontStyle="italic"
              >
                {current2FA}
              </Typography>
            </MKBox>
            <MKBox
              className={`${classes.accountSettingsFlex}  ${classes.accountSettingsBorderBottom}`}
            >
              <label className={classes.AccountSettingLabel2}>
                Change Password
              </label>
              <NavLink
                className={classes.AccountSettingLink}
                onClick={handleChangePassword}
              >
                Change
              </NavLink>
            </MKBox>
          </MKBox>
          {/* Todo : Display is made none for some certain time */}
          <MKBox className={classes.NotificationSettingsSecurityContainer}>
            <h6 className={classes.AccountSettingTitle}>Notifications</h6>
            <MKBox className={classes.accountSettingsFlex1}>
              <label className={classes.AccountSettingLabel2}>All</label>
              <Switch
                className={classes.brandSwitch}
                checked={notificationSetting?.all || false}
                onChange={(e) =>
                  updateNotificationSetting(e, notificationSettingType.ALL)
                }
              />{" "}
            </MKBox>
            <MKBox className={classes.accountSettingsFlex1}>
              <label className={classes.AccountSettingLabel2}>
                Asset Updates
              </label>
              <Switch
                className={classes.brandSwitch}
                checked={notificationSetting?.assetUpdate || false}
                onChange={(e) =>
                  updateNotificationSetting(
                    e,
                    notificationSettingType.ASSET_UPDATE
                  )
                }
              />{" "}
            </MKBox>
            <MKBox className={classes.accountSettingsFlex1}>
              <label className={classes.AccountSettingLabel2}>Activities</label>
              <Switch
                className={classes.brandSwitch}
                checked={notificationSetting?.activities || false}
                onChange={(e) =>
                  updateNotificationSetting(
                    e,
                    notificationSettingType.ACTIVITIES
                  )
                }
              />{" "}
            </MKBox>
            <MKBox
              className={`${classes.accountSettingsFlex1}  ${classes.accountSettingsBorderBottom}`}
            >
              <label className={classes.AccountSettingLabel2}>
                System Messages
              </label>
              <Switch
                className={classes.brandSwitch}
                checked={notificationSetting?.systemMessages || false}
                onChange={(e) =>
                  updateNotificationSetting(
                    e,
                    notificationSettingType.SYSTEM_MESSAGES
                  )
                }
              />{" "}
            </MKBox>
          </MKBox>
          <MKBox
            className={`${classes.AccountSettingsSecurityContainer2} ${classes.AccountSettingsSecurityContainer} ${classes.accountSettingDevicesPadding}`}
          >
            <h6 className={classes.AccountSettingTitle}>Devices</h6>
            {userDevices.length ? (
              userDevices.map((device, index) => (
                <MKBox key={index} className={classes.accountSettingsDevices}>
                  <Grid container className={classes.deviceRow}>
                    <Grid
                      item
                      lg={4}
                      md={5}
                      className={classes.deviceCol}
                      style={{ justifyContent: "flex-start" }}
                    >
                      <MKBox className={classes.DevicesContainer}>
                        <img
                          className={classes.accountImg}
                          src={getDeviceImage(device.device.type)}
                          alt="device"
                        />
                        &nbsp; &nbsp;
                        <span className={classes.AccountSettingLabel2}>
                          {device?.device?.device} {device?.device?.version}{" "}
                          <wbr />({device?.device?.os.trim()})
                        </span>
                      </MKBox>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={4}
                      className={classes.deviceCol}
                      style={{ justifyContent: "flex-start" }}
                    >
                      <MKBox className={classes.DevicesContainer4}>
                        <img
                          className={classes.accountImg1}
                          src={Location}
                          alt="Delete"
                        />
                        &nbsp; &nbsp;
                        <span className={classes.AccountSettingLabel2}>
                          {`${device.location.city}, ${device.location.country}`}
                        </span>
                      </MKBox>
                    </Grid>
                    <Grid item lg={3} md={2} className={classes.deviceCol}>
                      <MKBox className={classes.DevicesContainer2}>
                        <span className={classes.AccountSettingLabel2}>
                          {device.ip_address}
                        </span>
                      </MKBox>
                    </Grid>
                    <Grid
                      item
                      lg={2}
                      md={1}
                      className={classes.deviceCol}
                      style={{ justifyContent: "flex-end" }}
                    >
                      <MKBox className={classes.DevicesContainer1}>
                        {deleteUserId === device._id &&
                        isLoading.deleteUserDevice ? (
                          <CircularProgress
                            size={20}
                            // style={{ color: "black" }}
                          />
                        ) : (
                          <img
                            onClick={() => deleteDevice(device._id)}
                            className={classes.deleteIcon}
                            src={Trash}
                            alt="Delete"
                          />
                        )}
                      </MKBox>
                    </Grid>
                  </Grid>
                </MKBox>
              ))
            ) : (
              <MKBox className={classes.noDataRow}>No data</MKBox>
            )}
          </MKBox>
          <MKBox
            className={`${classes.AccountSettingsSecurityContainerMobileView} ${classes.AccountSettingsSecurityContainer}`}
          >
            <h6 className={classes.AccountSettingTitle}>Devices</h6>
            {userDevices.length ? (
              userDevices.map((device, index) => (
                <MKBox key={index} className={classes.accountSettingsDevices}>
                  <Grid
                    container
                    className={classes.AccountSettingGridContainer}
                  >
                    <Grid item xs={8}>
                      <MKBox className={classes.DevicesContainer}>
                        <img
                          className={classes.accountImg}
                          src={getDeviceImage(device.device.type)}
                          alt="Mobile"
                        />
                        &nbsp; &nbsp;
                        <span className={classes.AccountSettingLabel22}>
                          {device.device.device} {device.device.version} <wbr />
                          ({device.device.os})
                        </span>
                      </MKBox>
                      <MKBox
                        className={`${classes.DevicesContainer3} ${classes.DevicesContainer}`}
                      >
                        <img
                          className={classes.accountImg1}
                          src={Location}
                          alt="Location"
                        />
                        &nbsp; &nbsp;
                        <span className={classes.AccountSettingLabel2}>
                          {`${device.location.city}, ${device.location.country}`}
                        </span>
                      </MKBox>
                    </Grid>
                    <Grid item xs={4}>
                      <MKBox className={classes.DevicesContainer2}>
                        <span className={classes.AccountSettingLabel2}>
                          {device.ip_address}
                        </span>
                      </MKBox>
                      <MKBox className={classes.DevicesContainer1}>
                        {deleteUserId === device._id &&
                        isLoading.deleteUserDevice ? (
                          <CircularProgress
                            size={20}
                            // style={{ color: "black" }}
                          />
                        ) : (
                          <img
                            onClick={() => deleteDevice(device._id)}
                            className={classes.deleteIcon}
                            src={Trash}
                            alt="Delete"
                          />
                        )}
                      </MKBox>
                    </Grid>
                  </Grid>
                </MKBox>
              ))
            ) : (
              <MKBox className={classes.noDataRow}>No data</MKBox>
            )}
          </MKBox>
        </MKBox>
      </MKBox>
      <ChangePassword
        open={changePassword}
        handleClose={handleChangePassword}
      />
      <Choose2FAModal
        open={twoFA}
        handleClose={hanndleTwoFA}
        setTwoFAMthod={setTwoFAMthod}
        handleSubmit={handle2FASelect}
      />
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
        isLoading={isLoading?.securitySettings}
      />
      <PhoneNumberVerificationModal
        title="Verify Mobile Number"
        description={`Enter code sent to ${getHiddenPhoneNumber()}`}
        show={showModal}
        setShow={setShowModal}
        otpData={otpData}
        onSubmit={handlePhoneVerificationNext}
        handleResend={handleResend}
        isLoading={isLoading?.OTPVerify}
      />
      <RecoveryCodeModal
        open={openRecoveryCodeModal}
        handleClose={() => setOpenRecoveryCodeModal(false)}
        data={data}
        btnText="Ok"
        handleNext={() => handleRecoveryCodeNext()}
      />
      <AddPhoneNumberModal open={addPhone} handleClose={() => setAddPhone(false)} handleSuccess={handleAddSuccess}  />
    </MKBox>
  );
};

export default AccountSetting;

/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
import { put, call } from "redux-saga/effects";
import errorHandler from "utils/errorHandler";
import toaster from "utils/toaster";
import {
  resetApp,
  loginSuccess,
  loginFail,
  loginStart,
  logout,
  logoutStart,
  logoutSuccess,
  logoutFail,
  loginAuthenticationStart,
  loginAuthenticationSuccess,
  loginAuthenticationFail,
  signupSuccess,
  signupFail,
  signupStart,
  sendOTPSuccess,
  resendOtpSuccess,
  sendOTPFail,
  resendOtpFail,
  sendOTPStart,
  resendOtpStart,
  verifyOTPSuccess,
  verifyOTPFail,
  verifyOTPStart,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFail,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFail,
  resetPasswordAuthStart,
  resetPasswordAuthSuccess,
  resetPasswordAuthFail,
  checkUserError,
  checkLinkValidityStart,
  checkLinkValiditySuccess,
  checkLinkValidityFail,
  getLocationStart,
  getLocationSuccess,
  getLocationFail,
  profileFetchStart,
  profileFetchSuccess,
  profileFetchFail,
  loginVerifyStart,
  loginVerifySuccess,
  loginVerifyFail,
  resendEmailStart,
  resendEmailSuccess,
  resendEmailFail,
  emailVerificationStart,
  emailVerificationSuccess,
  emailVerificationFail,
  showModal,
  hideModal,
  forceUpdatePasswordStart,
  forceUpdatePasswordSuccess,
  forceUpdatePasswordFail,
  securityRequestStart,
  securityRequestSuccess,
  securityRequestFail,
  securitySettingsStart,
  securitySettingsSuccess,
  securitySettingsFail,
  kycInquiryStart,
  kycInquirySuccess,
  profileFetch,
  earlyAccessSubscribeSuccess,
  earlyAccessSubscribeFail,
  earlyAccessSubscribeStart,
  changePasswordStart,
  changePasswordSuccess,
  changePasswordFail,
  notificationSettingStart,
  notificationSettingSuccess,
  notificationSettingFail,
  fetchUserDevicesStart,
  fetchUserDevicesSuccess,
  fetchUserDevicesFail,
  deleteUserDeviceStart,
  deleteUserDeviceSuccess,
  deleteUserDeviceFail,
} from "store/actions";
import axios from "axios";
import {
  USER_BASE_URL,
  AUTH_BASE_URL,
  MARKETING_BASE_URL,
} from "constants/env";
import { routePaths } from "routes/mainRoutes/routePaths";

let cancelReq = "";

export function delay(delayMS) {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(true), delayMS);
  });
  return promise;
}

export const checkPersonalDetailStatus = (
  personalDetailsCheck,
  kycStatus,
  securityCheck,
  allowPendingKYC
) => {
  if (personalDetailsCheck === false) return 0;
  else if (
    [
      "pending",
      "created",
      "started",
      "failed",
      "declined",
      "canceled",
    ].includes(kycStatus)
  )
    return 1;
  else if (["whitelisting"].includes(kycStatus) && allowPendingKYC) return -2;
  else if (securityCheck === false) return 2;
  else {
    return -1;
  }
};

export const redirectToPersonalDetail = (
  personalDetailsCheck,
  kycStatus,
  securityCheck,
  navigate,
  allowPendingKYC
) => {
  let stepNumber = 0;
  // get step number for redirection
  stepNumber = checkPersonalDetailStatus(
    personalDetailsCheck,
    kycStatus,
    securityCheck,
    allowPendingKYC
  );
  if (stepNumber === -1) {
    navigate(routePaths.PORTFOLIO_PATH);
    return;
  } else if (stepNumber === -2) {
    navigate(routePaths.INVESTOR_PATH);
    return;
  }

  navigate(routePaths.PERSONAL_DETAILS_PATH, {
    state: {
      step: stepNumber,
    },
  });
};

// Login
export function* loginSaga({ payload }) {
  const { requestBody, navigate, id } = payload;
  yield put(loginStart());
  yield errorHandler({
    endpoint: `/user/login`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onLoginSuccess(response) {
      const { data } = response;
      const {
        twoFA,
        forceUpdatePassword,
        earlyAccess,
        _id,
      } = data;
      yield put(loginSuccess({ ...data }));
      if (earlyAccess && forceUpdatePassword) {
        yield call(
          [localStorage, "setItem"],
          "authToken",
          response.data.token
        );
        yield put(profileFetch());
        yield call([localStorage, "setItem"], "toaster-type", "success");
        yield call([localStorage, "setItem"], "userId", response.data._id);
        navigate(`${routePaths.FORCE_UPDATE_PASSWORD_PATH}/${_id}`);
      } else if (forceUpdatePassword) {
        yield call(
          [localStorage, "setItem"],
          "authToken",
          response.data.token
        );
        yield put(profileFetch());
        yield call([localStorage, "setItem"], "toaster-type", "success");
        yield call([localStorage, "setItem"], "userId", response.data._id);
        navigate(`${routePaths.FORCE_UPDATE_PASSWORD_PATH}/${_id}`);
      } else {
        if (twoFA.none) {
          // Storing data in local storage
          yield call(
            [localStorage, "setItem"],
            "authToken",
            response.data.token
          );
          yield put(profileFetch());
          yield call([localStorage, "setItem"], "toaster-type", "success");
          yield call([localStorage, "setItem"], "userId", response.data._id);
          !id ? navigate(routePaths.INVESTOR_PATH) : navigate(`${routePaths.PROPERTY_PROFILE_PATH}/?id=${id}&invest=open`)
        }

        if (twoFA.authenticator) {
          yield put(
            showModal({
              modalName: "LOGIN_SECURITY_VERIFICATION",
              modalData: { type: "AUTH_APP" },
            })
          );
        } else if (twoFA.sms) {
          yield put(
            showModal({
              modalName: "LOGIN_SECURITY_VERIFICATION",
              modalData: { type: "PHONE" },
            })
          );
        }
      }
    },
    failHandler: yield function* onLoginFail(response, resData) {
      const { showPopup, redirectToReset, id } = response;
      if (showPopup) {
        // show popup
        yield put(showModal({ modalName: "LOGIN_POPUP" }));
        yield put(loginFail(response));
      } else if (redirectToReset) {
        yield put(loginFail(response));
        navigate(`${routePaths.FORCE_UPDATE_PASSWORD_PATH}/${id}`);
      } else if (resData?.data?.emailVerified === false) {
        yield put(
          showModal({ modalName: "RESEND_EMAIL", modalData: { msg: response } })
        );
        yield put(loginFail(response));
      } else {
        yield put(loginFail(response));
        toaster.error(response);
      }
    },
    failHandlerType: "CUSTOM",
    payload: { ...requestBody, rememberMe: false },
    apiType: "post",
  });
}

// Login Verify
export function* loginVerifySaga(action) {
  yield put(loginVerifyStart());
  const { requestBody, navigate, id } = action.payload;
  yield errorHandler({
    endpoint: `/user/loginVerify`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onLoginVerifySuccess(response) {
      const { data } = response;
      yield put(loginVerifySuccess(data));
      // handleSuccess()
      // console.log(response.data, 'LOGGED IN DATA');
      yield call([localStorage, "setItem"], "authToken", response.data.token);
      yield call([localStorage, "setItem"], "userId", response.data._id);
      yield call([localStorage, "setItem"], "toaster-type", "success");
      yield put(hideModal());
      yield put(profileFetch());
      !id ? navigate(routePaths.INVESTOR_PATH) : navigate(`${routePaths.PROPERTY_PROFILE_PATH}/?id=${id}&invest=open`)
    },
    failHandler: yield function* onLoginVerifyFail(response) {
      yield put(loginVerifyFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
  });
}

// profile details
export function* profileFetchSaga(action) {
  yield put(profileFetchStart());
  yield errorHandler({
    endpoint: `/user/userDetails`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onProfileFetchSuccess(response) {
      const { data } = response;
      yield put(profileFetchSuccess(data));
      action?.payload?.handleSuccess && action?.payload?.handleSuccess();
    },
    failHandler: yield function* onProfileFetchFail(response) {
      yield put(profileFetchFail(response));
      // toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: {},
    token: true,
    apiType: "get",
  });
}

// Logout
export function* logoutSaga(action) {
  const { navigate } = action.payload;
  yield put(logoutStart());
  yield errorHandler({
    endpoint: "/user/logout",
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSecuritySequestSuccess(response) {
      const { data } = response;
      if (data) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("toaster-type");
        localStorage.removeItem("userId");
        localStorage.removeItem("persist:root");
        yield put(logoutSuccess({}));
        yield put(resetApp());
        toaster.success("You have logged out successfully!");
        navigate(routePaths.LANDING_PAGE_PATH);
      }
    },
    failHandler: yield function* onSecurityRequestFail(response) {
      yield put(logoutFail(response));
    },
    failHandlerType: "CUSTOM",
    payload: "",
    token: true,
    apiType: "delete",
  });
}

export function* securityRequestSaga(action) {
  yield put(securityRequestStart());
  const { requestBody, handleSuccess, handleFail } = action.payload;
  yield errorHandler({
    endpoint: "/user/security-request",
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSecuritySequestSuccess(response) {
      const { data } = response;
      yield put(securityRequestSuccess(data));
      handleSuccess && handleSuccess(data, requestBody.method);
    },
    failHandler: yield function* onSecurityRequestFail(response) {
      yield put(securityRequestFail(response));
      handleFail && handleFail();
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    token: true,
    apiType: "post",
  });
}

// security settings

export function* securitySettingsSaga(action) {
  yield put(securitySettingsStart());
  const { requestBody, handleSuccess, handleFail } = action.payload;
  yield errorHandler({
    endpoint: "/user/security",
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSecuritySettingsSuccess(response) {
      const { data } = response;
      yield put(securitySettingsSuccess(data));
      handleSuccess && handleSuccess(data);
    },
    failHandler: yield function* onSecuritySettingsFail(response) {
      yield put(securitySettingsFail(response));
      handleFail && handleFail(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    token: true,
    apiType: "put",
  });
}

export function* loginAuthenticationSaga({ payload }) {
  const { navigate } = payload;
  const { requestBody } = payload;
  yield put(loginAuthenticationStart());
  yield errorHandler({
    endpoint: `/auth/loginVerify`,
    successHandler: yield function* onLoginAuthenticationSuccess(response) {
      const { data } = response;
      yield put(loginAuthenticationSuccess(data));
      // Storing data in local storage
      yield call([localStorage, "setItem"], "authToken", response.data.token);
      yield call([localStorage, "setItem"], "toaster-type", "success");
      navigate(routePaths.INVESTOR_PATH);
    },
    failHandler: yield function* onSendOTPFail(response) {
      yield put(loginAuthenticationFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: {
      ...requestBody,
      user_fcm_token: localStorage.getItem("fcmtoken"),
    },
    apiType: "post",
  });
}

// Mobile/Email send otp
export function* sendOTPSaga(action) {
  yield put(sendOTPStart());
  const { requestBody, handleSuccess, handleFail } = action.payload;
  yield errorHandler({
    endpoint: `/auth/sendOTP`,
    baseURL: AUTH_BASE_URL,
    successHandler: yield function* onSendOTPSuccess(response) {
      const { data, msg } = response;
      yield put(sendOTPSuccess(data));
      handleSuccess && handleSuccess();
      toaster.success(msg);
    },
    failHandler: yield function* onSendOTPFail(response) {
      yield put(sendOTPFail(response.msg));
      handleFail && handleFail();
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
  });
}

// Resend OTP
export function* resendOTPSaga(action) {
  yield put(resendOtpStart());
  const { requestBody } = action.payload;
  yield errorHandler({
    endpoint: `/auth/sendOTP`,
    baseURL: AUTH_BASE_URL,
    successHandler: yield function* onresendOTPSuccess(response) {
      const { data, msg } = response;
      yield put(resendOtpSuccess(data));
      toaster.success(msg);
    },
    failHandler: yield function* onresendOTPFail(response) {
      yield put(resendOtpFail(response.msg));
      toaster.error(response.msg);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
  });
}

// Resend email verification
export function* resendEmailVerificationSaga(action) {
  yield put(resendEmailStart());
  const { requestBody } = action.payload;
  yield errorHandler({
    endpoint: `/user/signupUpdate`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onResendEmailSuccess(response) {
      const { data, msg } = response;
      yield put(resendEmailSuccess(data));
      toaster.success(msg);
    },
    failHandler: yield function* onResendEmailFail(response) {
      yield put(resendEmailFail(response.msg));
      toaster.error(response.msg);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    token: true,
    apiType: "put",
  });
}

// Signup saga
export function* signupSaga(action) {
  const { requestBody, navigate, sso, handleSignupSuccess } = action.payload || "";
  yield put(signupStart());
  yield errorHandler({
    endpoint: `/user/signup`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSignupSuccess(response) {
      const { data, msg } = response;
      yield put(signupSuccess(data));
      yield put(profileFetch());

      yield call([localStorage, "setItem"], "authToken", response.data.token);
      yield call([localStorage, "setItem"], "userId", response.data._id);

      toaster.success(msg);
      if (sso || !handleSignupSuccess) {
        navigate(routePaths.INVESTOR_PATH);
      } else {
        handleSignupSuccess(data.email || requestBody.email);
      }
    },
    failHandler: yield function* onSignupFail(response) {
      yield put(signupFail(response));
      toaster.error(response);
      sso && navigate(routePaths.LOGIN_PATH);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
  });
}

// email Verification
export function* emailVerificationSaga(action) {
  yield put(emailVerificationStart());
  const { requestBody, handleSuccess, handleFail } = action.payload;
  yield errorHandler({
    endpoint: `/user/emailVerification`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* (response) {
      const { data, msg } = response;
      yield put(emailVerificationSuccess(data));
      toaster.success(msg)
      handleSuccess && handleSuccess();
    },
    failHandler: yield function* (response) {
      yield put(emailVerificationFail(response));
      // const errMsg = yield localStorage.getItem("toaster-message");
      toaster.error(response);
      handleFail && handleFail(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
  });
}

// Mobile/Email verify otp
export function* verifyOTPSaga(action) {
  const { requestBody, handleSuccess, customeMsg } = action.payload;
  yield put(verifyOTPStart());
  yield errorHandler({
    endpoint: `/auth/verifyOTP`,
    baseURL: AUTH_BASE_URL,
    successHandler: yield function* onverifyOTPSuccess(response) {
      const { data, msg } = response;
      yield put(verifyOTPSuccess(data));
      handleSuccess && handleSuccess();
      if (!customeMsg) {
        toaster.success(msg);
      }
    },
    failHandler: yield function* onverifyOTPFail(response) {
      yield put(verifyOTPFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    // request body can either be for email or phone
    // Example EMAIL Payload
    //   {
    //     "channel": "email",
    //     "email": "something@solulab.co",
    //     "code": "649191"
    //   }
    // Example SMS Payload
    //   {
    //     "channel": "sms",
    //     "countryCode": "+91",
    //     "mobileNumber": 9999999999,
    //     "code": "050495"
    //   }
    payload: requestBody,
    apiType: "post",
  });
}

// Forgot Password
export function* forgotPasswordSaga(action) {
  yield put(forgotPasswordStart());
  const { requestBody, handleSuccess } = action.payload;
  yield errorHandler({
    endpoint: `/user/forgotPassword`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* (response) {
      handleSuccess();
      const { data } = response;
      yield put(forgotPasswordSuccess(data));
    },
    failHandler: yield function* (response) {
      yield put(forgotPasswordFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
  });
}

// Reset Password
export function* resetPasswordSaga(action) {
  yield put(resetPasswordStart());
  const { requestBody, handleSuccess, id } = action.payload;
  yield errorHandler({
    endpoint: `/user/resetPassword/${id}`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* (response) {
      handleSuccess();
      const { data, msg } = response;
      yield put(resetPasswordSuccess(data));
      toaster.success(msg);
    },
    failHandler: yield function* (response) {
      yield put(resetPasswordFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
  });
}

// Reset Password
export function* forceUpdatePasswordSaga(action) {
  yield put(forceUpdatePasswordStart());
  const { requestBody, navigate } = action.payload;
  yield errorHandler({
    endpoint: `/user/forcePasswordUpdate`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* (response) {
      const { data, msg } = response;
      yield put(forceUpdatePasswordSuccess(data));
      toaster.success(msg);
      navigate(routePaths.LANDING_PAGE_PATH);
    },
    failHandler: yield function* (response) {
      yield put(forceUpdatePasswordFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "put",
    token: true,
  });
}

// Reset Password when logged in
export function* resetPasswordAuthSaga(action) {
  yield put(resetPasswordAuthStart());
  const { requestBody, handleSuccess, navigate } = action.payload;
  yield errorHandler({
    endpoint: `/user/`,
    successHandler: yield function* (response) {
      handleSuccess();
      const { data, msg } = response;
      yield put(resetPasswordAuthSuccess(data));
      yield put(logout({ navigate }));
      yield put(resetApp());
      toaster.success(msg);
    },
    failHandler: yield function* (response) {
      yield put(resetPasswordAuthFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "put",
    token: true,
  });
}

export function* userCheckSaga(action) {
  const { name, value } = action.payload;
  if (cancelReq) {
    cancelReq.cancel();
  }
  cancelReq = axios.CancelToken.source();
  try {
    const response = yield axios
      .post(
        "/auth/checkUser",
        { [name]: value },
        { cancelToken: cancelReq.token }
      )
      .then((res) => res)
      .catch((er) => er);
    if (response.status === 200) {
      yield put(checkUserError({ name, error: response.data.msg }));
    } else {
      yield put(checkUserError({ name, error: "" }));
    }
  } catch (err) {
    // console.log(err);
  }
}

export function* authenticationValidatorSaga() {
  yield put(loginStart());
  const token = yield localStorage.getItem("authToken");
  if (!token) {
    // yield put(logout()); // logout action
    // alert("You are not logged in");
  } else {
    yield put(loginSuccess({ token }));
  }
}

// Check  Link validity
export function* checkResetPasswordLinkValidity(action) {
  yield put(checkLinkValidityStart());
  const { request, token, handleSuccess, handleFail } = action.payload;
  yield errorHandler({
    endpoint: `/user/checkToken/${request}/${token}`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* (response) {
      const { data } = response;
      yield put(checkLinkValiditySuccess(data));
      handleSuccess && handleSuccess();
    },
    failHandler: yield function* (response) {
      yield put(checkLinkValidityFail(response));
      // toaster.error(response);
      handleFail && handleFail(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
  });
}

// Check list of all the countries, states and city
export function* getLocations(action) {
  const { url, reqType, type, successHandler, failedHandler } = action.payload;
  yield put(getLocationStart({ type }));
  yield errorHandler({
    endpoint: url,
    baseURL: AUTH_BASE_URL,
    successHandler: yield function* onGetLocationsSuccess(response) {
      const { data } = response;
      yield put(getLocationSuccess({ data, type }));
      successHandler && successHandler();
    },
    failHandler: yield function* onGetLocationsFail(response) {
      yield put(getLocationFail({ msg: response.msg, type }));
      failedHandler && failedHandler();
      toaster.error(response.msg);
    },
    failHandlerType: "CUSTOM",
    payload: "",
    apiType: reqType,
  });
}

// Kyc inquiry
export function* kycInquirySaga(action) {
  const { requestBody, successHandler } = action.payload;
  yield put(kycInquiryStart());
  yield errorHandler({
    endpoint: "/user/kycInquiryId",
    baseURL: USER_BASE_URL,
    successHandler: yield function* onKYCInquirySuccess(response) {
      const { data } = response;
      yield put(kycInquirySuccess(data));
      successHandler && successHandler();
    },
    failHandler: yield function* onKYCInquiryFail(response) {
      yield put(getLocationFail());
      toaster.error(response.msg);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    token: true,
    apiType: "patch",
  });
}

// Early Access Subscribe
export function* earlyAccessSubscribeSaga(action) {
  const { requestBody, successHandler } = action.payload;
  yield put(earlyAccessSubscribeStart());
  yield errorHandler({
    endpoint: "/newsletter/subscribe/?type=investor",
    baseURL: MARKETING_BASE_URL,
    successHandler: yield function* onSubscribeSuccess(response) {
      const { data, msg } = response;
      yield put(earlyAccessSubscribeSuccess(data));
      toaster.success(msg);
      successHandler && successHandler();
    },
    failHandler: yield function* onSubscribeFail(response) {
      yield put(earlyAccessSubscribeFail());
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    token: true,
    apiType: "post",
  });
}

// Change Password
export function* changePasswordSaga(action) {
  const { requestBody, successHandler } = action.payload;
  yield put(changePasswordStart());
  yield errorHandler({
    endpoint: "/user/changePassword",
    baseURL: USER_BASE_URL,
    successHandler: yield function* onChangePasswordSuccess(response) {
      const { data, msg } = response;
      yield put(changePasswordSuccess(data));
      toaster.success(msg);
      successHandler && successHandler();
    },
    failHandler: yield function* onChangePasswordFail(response) {
      yield put(changePasswordFail());
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    token: true,
    apiType: "post",
  });
}

// Notification settings
export function* notificationSettingSaga(action) {
  const { requestBody, successHandler, failHandler } = action.payload;
  yield put(notificationSettingStart());
  yield errorHandler({
    endpoint: "/user/notificationSetting",
    baseURL: USER_BASE_URL,
    successHandler: yield function* onNotificationSettingSuccess(response) {
      const { data } = response;
      yield put(notificationSettingSuccess(data));
      successHandler && successHandler();
    },
    failHandler: yield function* onNotificationSettingFail(response) {
      yield put(notificationSettingFail());
      toaster.error(response);
      failHandler && failHandler();
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    token: true,
    apiType: "put",
  });
}

// Fetch user devices
export function* fetchUserDevicesSaga() {
  yield put(fetchUserDevicesStart());
  yield errorHandler({
    endpoint: "/user/userDevice",
    baseURL: USER_BASE_URL,
    successHandler: yield function* onfetchUserDevicesSuccess(response) {
      const { data } = response;
      yield put(fetchUserDevicesSuccess(data));
    },
    failHandler: yield function* onfetchUserDevicesFail(response) {
      yield put(fetchUserDevicesFail());
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    token: true,
    apiType: "get",
  });
}

// Delete user devices
export function* deleteUserDeviceSaga(action) {
  const { deviceId, successHandler } = action.payload;
  yield put(deleteUserDeviceStart());
  yield errorHandler({
    endpoint: `/user/deleteUserDevice/${deviceId}`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* ondeleteUserDeviceSuccess(response) {
      const { data } = response;
      yield put(deleteUserDeviceSuccess(data));
      successHandler && successHandler();
    },
    failHandler: yield function* ondeleteUserDeviceFail(response) {
      yield put(deleteUserDeviceFail());
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    token: true,
    apiType: "delete",
  });
}

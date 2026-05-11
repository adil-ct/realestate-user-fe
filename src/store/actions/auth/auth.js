import * as actionLabels from "../../actionLabels";

// Login

export const loginStart = () => ({
  type: actionLabels.LOGIN_START,
});

export const loginSaga = (payload) => ({
  type: actionLabels.LOGIN_SAGA,
  payload,
});

export const loginSuccess = (payload) => ({
  type: actionLabels.LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: actionLabels.LOGIN_FAIL,
  payload,
});

// Login Verify

export const loginVerifyStart = () => ({
  type: actionLabels.LOGIN_VERIFY_START,
});

export const loginVerify = (payload) => ({
  type: actionLabels.LOGIN_VERIFY_SAGA,
  payload,
});

export const loginVerifySuccess = (payload) => ({
  type: actionLabels.LOGIN_VERIFY_SUCCESS,
  payload,
});

export const loginVerifyFail = (payload) => ({
  type: actionLabels.LOGIN_VERIFY_FAIL,
  payload,
});

// Login authentication

export const loginAuthenticationStart = () => ({
  type: actionLabels.AUTH_LOGIN_START,
});

export const loginAuthenticationSaga = (payload) => ({
  type: actionLabels.AUTH_LOGIN_SAGA,
  payload,
});

export const loginAuthenticationSuccess = (payload) => ({
  type: actionLabels.AUTH_LOGIN_SUCCESS,
  payload,
});

export const loginAuthenticationFail = (payload) => ({
  type: actionLabels.AUTH_LOGIN_FAIL,
  payload,
});

// Signup Actions

export const signupStart = () => ({
  type: actionLabels.SIGNUP_START,
});

export const signupSaga = (payload) => ({
  type: actionLabels.SIGNUP_SAGA,
  payload,
});

export const signupSuccess = (payload) => ({
  type: actionLabels.SIGNUP_SUCCESS,
  payload,
});

export const signupFail = (payload) => ({
  type: actionLabels.SIGNUP_FAIL,
  payload,
});

// Security request

export const securityRequestStart = () => ({
  type: actionLabels.SECURITY_REQUEST_START
})

export const securityRequest = (payload) => ({
  type: actionLabels.SECURITY_REQUEST_SAGA,
  payload
})

export const securityRequestSuccess = (payload) => ({
  type: actionLabels.SECURITY_REQUEST_SUCCESS,
  payload
})

export const securityRequestFail = (payload) => ({
  type: actionLabels.SECURITY_REQUEST_FAIL,
  payload
})

// Security settings

export const securitySettingsStart = () => ({
  type: actionLabels.SECURITY_SETTINGS_START
})

export const securitySettings = (payload) => ({
  type: actionLabels.SECURITY_SETTINGS_SAGA,
  payload
})

export const securitySettingsSuccess = (payload) => ({
  type: actionLabels.SECURITY_SETTINGS_SUCCESS,
  payload
})

export const securitySettingsFail = (payload) => ({
  type: actionLabels.SECURITY_SETTINGS_FAIL,
  payload
})

// Resend email 

export const resendEmailStart = () => ({
  type: actionLabels.RESEND_EMAIL_START,
});

export const resendEmailSaga = (payload) => ({
  type: actionLabels.RESEND_EMAIL_SAGA,
  payload,
});

export const resendEmailSuccess = (payload) => ({
  type: actionLabels.RESEND_EMAIL_SUCCESS,
  payload,
});

export const resendEmailFail = (payload) => ({
  type: actionLabels.RESEND_EMAIL_FAIL,
  payload,
});

// Email Verification

export const emailVerificationStart = () => ({
  type: actionLabels.EMAIL_VERIFICATION_START,
});

export const emailVerificationSaga = (payload) => ({
  type: actionLabels.EMAIL_VERIFICATION_SAGA,
  payload,
});

export const emailVerificationSuccess = (payload) => ({
  type: actionLabels.EMAIL_VERIFICATION_SUCCESS,
  payload,
});

export const emailVerificationFail = (payload) => ({
  type: actionLabels.EMAIL_VERIFICATION_FAIL,
  payload,
});

// Profile fetch

export const profileFetchStart = () => ({
  type: actionLabels.PROFILE_FETCH_START,
});

export const profileFetch = (payload) => ({
  type: actionLabels.PROFILE_FETCH_SAGA,
  payload
});

export const profileFetchSuccess = (payload) => ({
  type: actionLabels.PROFILE_FETCH_SUCCESS,
  payload,
});

export const profileFetchFail = (payload) => ({
  type: actionLabels.PROFILE_FETCH_FAIL,
  payload,
});

// Mobile number OTP send

export const sendOTPStart = () => ({
  type: actionLabels.PHONE_SEND_OTP_START,
});

export const sendOTP = (payload) => ({
  type: actionLabels.PHONE_SEND_OTP_SAGA,
  payload,
});

export const sendOTPSuccess = (payload) => ({
  type: actionLabels.PHONE_SEND_OTP_SUCCESS,
  payload,
});

export const sendOTPFail = (payload) => ({
  type: actionLabels.PHONE_SEND_OTP_FAIL,
  payload,
});

// Mobile number otp verify

export const verifyOTPStart = () => ({
  type: actionLabels.PHONE_VERIFY_OTP_START,
});

export const verifyOTPSaga = (payload) => ({
  type: actionLabels.PHONE_VERIFY_OTP_SAGA,
  payload,
});

export const verifyOTPSuccess = (payload) => ({
  type: actionLabels.PHONE_VERIFY_OTP_SUCCESS,
  payload,
});

export const verifyOTPFail = (payload) => ({
  type: actionLabels.PHONE_VERIFY_OTP_FAIL,
  payload,
});

// Forgot Password

export const forgotPasswordStart = () => ({
  type: actionLabels.FORGOT_PASSWORD_START,
});

export const forgotPasswordSaga = (payload) => ({
  type: actionLabels.FORGOT_PASSWORD_SAGA,
  payload,
});

export const forgotPasswordSuccess = (payload) => ({
  type: actionLabels.FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordFail = (payload) => ({
  type: actionLabels.FORGOT_PASSWORD_FAIL,
  payload,
});

// Reset Password

export const resetPasswordStart = () => ({
  type: actionLabels.RESET_PASSWORD_START,
});

export const resetPasswordSaga = (payload) => ({
  type: actionLabels.RESET_PASSWORD_SAGA,
  payload,
});

export const resetPasswordSuccess = (payload) => ({
  type: actionLabels.RESET_PASSWORD_SUCCESS,
  payload,
});

export const resetPasswordFail = (payload) => ({
  type: actionLabels.RESET_PASSWORD_FAIL,
  payload,
});

// force update Password

export const forceUpdatePasswordStart = () => ({
  type: actionLabels.FORCE_UPDATE_PASSWORD_START,
});

export const forceUpdatePasswordSaga = (payload) => ({
  type: actionLabels.FORCE_UPDATE_PASSWORD_SAGA,
  payload,
});

export const forceUpdatePasswordSuccess = (payload) => ({
  type: actionLabels.FORCE_UPDATE_PASSWORD_SUCCESS,
  payload,
});

export const forceUpdatePasswordFail = (payload) => ({
  type: actionLabels.FORCE_UPDATE_PASSWORD_FAIL,
  payload,
});

// Resend Otp

export const resendOtpStart = () => ({
  type: actionLabels.RESEND_OTP_START,
});

export const resendOtpSaga = (payload) => ({
  type: actionLabels.RESEND_OTP_SAGA,
  payload,
});

export const resendOtpSuccess = (payload) => ({
  type: actionLabels.RESEND_OTP_SUCCESS,
  payload,
});

export const resendOtpFail = (payload) => ({
  type: actionLabels.RESEND_OTP_FAIL,
  payload,
});

// Reset Password when logged in

export const resetPasswordAuthStart = () => ({
  type: actionLabels.RESET_PASSWORD_START,
});

export const resetPasswordAuth = (payload) => ({
  type: actionLabels.RESET_PASSWORD_AUTH_SAGA,
  payload,
});

export const resetPasswordAuthSuccess = (payload) => ({
  type: actionLabels.RESET_PASSWORD_AUTH_SUCCESS,
  payload,
});

export const resetPasswordAuthFail = (payload) => ({
  type: actionLabels.RESET_PASSWORD_AUTH_FAIL,
  payload,
});

// Logout

export const logoutStart = () => ({
  type: actionLabels.LOGOUT_START,
});

export const logout = (payload) => ({
  type: actionLabels.LOGOUT_SAGA,
  payload,
});

export const logoutSuccess = (payload) => ({
  type: actionLabels.LOGOUT_SUCCESS,
  payload,
});

export const logoutFail = (payload) => ({
  type: actionLabels.LOGOUT_FAIL,
  payload,
});

export const authenticationValidator = () => ({
  type: actionLabels.AUTHENTICATION_VALIDATOR,
});

export const checkUser = (payload) => ({
  type: actionLabels.CHECK_USER,
  payload,
});

export const checkUserError = (payload) => ({
  type: actionLabels.CHECK_USER_ERROR,
  payload,
});

// check link is valid or not

export const checkLinkValidityStart = () => ({
  type: actionLabels.CHECK_LINK_VALIDITY_START,
});

export const checkLinkValidity = (payload) => ({
  type: actionLabels.CHECK_LINK_VALIDITY_SAGA,
  payload,
});

export const checkLinkValiditySuccess = (payload) => ({
  type: actionLabels.CHECK_LINK_VALIDITY_SUCCESS,
  payload,
});

export const checkLinkValidityFail = (payload) => ({
  type: actionLabels.CHECK_LINK_VALIDITY_FAIL,
  payload,
});

// Location for country, state, city

export const getLocationStart = (payload) => ({
  type: actionLabels.GET_LOCATION_START,
  payload,
});

export const getLocation = (payload) => ({
  type: actionLabels.GET_LOCATION_SAGA,
  payload,
});

export const getLocationSuccess = (payload) => ({
  type: actionLabels.GET_LOCATION_SUCCESS,
  payload,
});

export const getLocationFail = (payload) => ({
  type: actionLabels.GET_LOCATION_FAIL,
  payload,
});

// KYC Inquiry

export const kycInquiryStart = () => ({
  type: actionLabels.KYC_INQUIRY_START,
});

export const kycInquiry = (payload) => ({
  type: actionLabels.KYC_INQUIRY_SAGA,
  payload,
});

export const kycInquirySuccess = (payload) => ({
  type: actionLabels.KYC_INQUIRY_SUCCESS,
  payload,
});

export const kycInquiryFail = (payload) => ({
  type: actionLabels.KYC_INQUIRY_FAIL,
  payload,
});

// Early Access Subscribe

export const earlyAccessSubscribeStart = () => ({
  type: actionLabels.EARLY_ACCESS_SUBSCRIBE_START,
});

export const earlyAccessSubscribe = (payload) => ({
  type: actionLabels.EARLY_ACCESS_SUBSCRIBE_SAGA,
  payload,
});

export const earlyAccessSubscribeSuccess = (payload) => ({
  type: actionLabels.EARLY_ACCESS_SUBSCRIBE_SUCCESS,
  payload,
});

export const earlyAccessSubscribeFail = (payload) => ({
  type: actionLabels.EARLY_ACCESS_SUBSCRIBE_FAIL,
  payload,
});

// Change Password

export const changePasswordStart = () => ({
  type: actionLabels.CHANGE_PASSWORD_START,
});

export const changePasswordSaga = (payload) => ({
  type: actionLabels.CHANGE_PASSWORD_SAGA,
  payload,
});

export const changePasswordSuccess = (payload) => ({
  type: actionLabels.CHANGE_PASSWORD_SUCCESS,
  payload,
});

export const changePasswordFail = (payload) => ({
  type: actionLabels.CHANGE_PASSWORD_FAIL,
  payload,
});


// Notification setting

export const notificationSettingStart = () => ({
  type: actionLabels.NOTIFICATION_SETTING_START,
});

export const notificationSettingSaga = (payload) => ({
  type: actionLabels.NOTIFICATION_SETTING_SAGA,
  payload,
});

export const notificationSettingSuccess = (payload) => ({
  type: actionLabels.NOTIFICATION_SETTING_SUCCESS,
  payload,
});

export const notificationSettingFail = (payload) => ({
  type: actionLabels.NOTIFICATION_SETTING_FAIL,
  payload,
});

// Fetch user device

export const fetchUserDevicesStart = () => ({
  type: actionLabels.FETCH_USER_DEVICES_START,
});

export const fetchUserDevicesSaga = () => ({
  type: actionLabels.FETCH_USER_DEVICES_SAGA,
});

export const fetchUserDevicesSuccess = (payload) => ({
  type: actionLabels.FETCH_USER_DEVICES_SUCCESS,
  payload,
});

export const fetchUserDevicesFail = (payload) => ({
  type: actionLabels.FETCH_USER_DEVICES_FAIL,
  payload,
});

// Delete user device

export const deleteUserDeviceStart = () => ({
  type: actionLabels.DELETE_USER_DEVICE_START,
});

export const deleteUserDeviceSaga = (payload) => ({
  type: actionLabels.DELETE_USER_DEVICE_SAGA,
  payload
});

export const deleteUserDeviceSuccess = (payload) => ({
  type: actionLabels.DELETE_USER_DEVICE_SUCCESS,
  payload,
});

export const deleteUserDeviceFail = (payload) => ({
  type: actionLabels.DELETE_USER_DEVICE_FAIL,
  payload,
});
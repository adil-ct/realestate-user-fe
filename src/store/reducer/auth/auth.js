import * as actionLabels from "../../actionLabels";

export const initialState = {
  isLogin: false,
  isLoggedOut: false,
  isSignup: false,
  isMobileOTPSent: false,
  isMobileOTPVerified: false,
  userData: null,
  refereeDetails: null,
  refDetails: null,
  signupData: null,
  authToken: "",
  errorMsg: "",
  isLoading: {
    login: false,
    loginVerify: false,
    logout: false,
    profile: false,
    auth: false,
    signup: false,
    resendEmailVerification: false,
    OTPVerify: false,
    OTPSend: false,
    forgetPassword: false,
    resetPassword: false,
    forceUpdatePassword: false,
    resendOtp: false,
    securityRequest: false,
    securitySettings: false,
    emailVerification: false,
    checkLinkValidity: false,
    kycInquiry: false,
    countries: true,
    city: false,
    state: false,
    earlyAccessSubscribe: false,
    changePassword: false,
    notificationSetting: false,
    fetchUserDevices: false,
    deleteUserDevice: false,
  },
  location: {
    countries: [],
    state: {},
    city: [],
  },
  email: "",
  isLinkValid: false,
  isEmailVerified: false,
  userDevices: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Login
    case actionLabels.LOGIN_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          login: true,
        },
      };
    case actionLabels.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          login: false,
        },
        userData: payload,
        errorMsg: "",
        isLogin: true,
        isLoggedOut: false,
      };
    }
    case actionLabels.LOGIN_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          login: false,
        },
        errorMsg: payload,
      };
    }

    // Login Verify
    case actionLabels.LOGIN_VERIFY_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          loginVerify: true,
        },
      };
    case actionLabels.LOGIN_VERIFY_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          loginVerify: false,
        },
        userData: payload,
        errorMsg: "",
        isLogin: true,
        isLoggedOut: false,
      };
    }
    case actionLabels.LOGIN_VERIFY_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          loginVerify: false,
        },
        errorMsg: payload,
      };
    }

    // Profile
    case actionLabels.PROFILE_FETCH_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          profile: true,
        },
      };
    case actionLabels.PROFILE_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          profile: false,
        },
        userData: payload?.user,
        refDetails: payload?.referralDetails,
        refereeDetails: payload?.refereeDetails,
        errorMsg: "",
      };
    }
    case actionLabels.PROFILE_FETCH_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          profile: false,
        },
        errorMsg: payload,
      };
    }

    // Logout
    case actionLabels.LOGOUT_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          logout: true,
        },
      };
    case actionLabels.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          logout: false,
        },
        userData: payload,
        errorMsg: "",
        isLoggedOut: true,
        isLogin: false,
      };
    }
    case actionLabels.LOGOUT_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          logout: false,
        },
      };
    }

    // Login Authentication

    case actionLabels.AUTH_LOGIN_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          auth: true,
        },
      };
    case actionLabels.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        isLoading: {
          ...state.isLoading,
          auth: false,
        },
        userData: payload,
        errorMsg: "",
        authToken: payload.token,
      };
    }
    case actionLabels.AUTH_LOGIN_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          auth: false,
        },
        errorMsg: payload,
      };
    }

    // Signup reducers

    case actionLabels.SIGNUP_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          signup: true,
        },
      };
    case actionLabels.SIGNUP_SUCCESS: {
      return {
        ...state,
        isSignup: true,
        isLoading: {
          ...state.isLoading,
          signup: false,
        },
        signupData: payload,
        isLogin: true,
        isLoggedOut: false,
        errorMsg: "",
      };
    }
    case actionLabels.SIGNUP_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          signup: false,
        },
        errorMsg: payload,
      };
    }

    // Resend email verification reducers

    case actionLabels.RESEND_EMAIL_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resendEmailVerification: true,
        },
      };
    case actionLabels.RESEND_EMAIL_SUCCESS: {
      return {
        ...state,
        isSignup: true,
        isLoading: {
          ...state.isLoading,
          resendEmailVerification: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.RESEND_EMAIL_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resendEmailVerification: false,
        },
        errorMsg: payload,
      };
    }

    // Security request

    case actionLabels.SECURITY_REQUEST_START: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          securityRequest: true,
        },
      };
    }

    case actionLabels.SECURITY_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          securityRequest: false,
        },
        errorMsg: "",
      };
    }

    case actionLabels.SECURITY_REQUEST_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          securityRequest: false,
        },
        errorMsg: "",
      };
    }

    // Security settings

    case actionLabels.SECURITY_SETTINGS_START: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          securitySettings: true,
        },
      };
    }

    case actionLabels.SECURITY_SETTINGS_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          securitySettings: false,
        },
        errorMsg: "",
      };
    }

    case actionLabels.SECURITY_SETTINGS_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          securitySettings: false,
        },
        errorMsg: payload,
      };
    }

    // Mobile send otp

    case actionLabels.PHONE_SEND_OTP_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          OTPSend: true,
        },
      };
    case actionLabels.PHONE_SEND_OTP_SUCCESS: {
      return {
        ...state,
        isMobileOTPSent: true,
        isLoading: {
          ...state.isLoading,
          OTPSend: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.PHONE_SEND_OTP_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          OTPSend: false,
        },
        errorMsg: payload,
      };
    }

    // Mobile verify otp

    case actionLabels.PHONE_VERIFY_OTP_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          OTPVerify: true,
        },
      };
    case actionLabels.PHONE_VERIFY_OTP_SUCCESS: {
      return {
        ...state,
        isMobileOTPVerified: true,
        isLoading: {
          ...state.isLoading,
          OTPVerify: false,
        },
        errorMsg: "",
        signupData: payload,
      };
    }
    case actionLabels.PHONE_VERIFY_OTP_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          OTPVerify: false,
        },
        errorMsg: payload,
      };
    }

    // Forgot Password

    case actionLabels.FORGOT_PASSWORD_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          forgetPassword: true,
        },
      };
    case actionLabels.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          forgetPassword: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.FORGOT_PASSWORD_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          forgetPassword: false,
        },
        errorMsg: payload,
      };
    }

    // Email verification

    case actionLabels.EMAIL_VERIFICATION_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          emailVerification: true,
        },
      };
    case actionLabels.EMAIL_VERIFICATION_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          emailVerification: false,
        },
        isEmailVerified: true,
        errorMsg: "",
      };
    }
    case actionLabels.EMAIL_VERIFICATION_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          emailVerification: false,
        },
        isEmailVerified: false,
        errorMsg: payload,
      };
    }

    // Reset Password

    case actionLabels.RESET_PASSWORD_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resetPassword: true,
        },
      };
    case actionLabels.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resetPassword: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.RESET_PASSWORD_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resetPassword: false,
        },
        errorMsg: payload,
      };
    }

    // Force Update Password

    case actionLabels.FORCE_UPDATE_PASSWORD_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          forceUpdatePassword: true,
        },
      };
    case actionLabels.FORCE_UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          forceUpdatePassword: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.FORCE_UPDATE_PASSWORD_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          forceUpdatePassword: false,
        },
        errorMsg: payload,
      };
    }

    // Resend Otp

    case actionLabels.RESEND_OTP_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resendOtp: true,
        },
      };
    case actionLabels.RESEND_OTP_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resendOtp: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.RESEND_OTP_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          resendOtp: false,
        },
        errorMsg: payload,
      };
    }

    // KYC inquiry

    case actionLabels.KYC_INQUIRY_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          kycInquiry: true,
        },
      };
    case actionLabels.KYC_INQUIRY_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          kycInquiry: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.KYC_INQUIRY_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          kycInquiry: false,
        },
        errorMsg: payload,
      };
    }

    // Reset Password when logged in

    case actionLabels.RESET_PASSWORD_AUTH_START:
      return { ...state, isLoading: true };
    case actionLabels.RESET_PASSWORD_AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMsg: "",
      };
    }
    case actionLabels.CHECK_USER_ERROR: {
      return {
        ...state,
        [payload.name]: payload.error,
      };
    }
    case actionLabels.RESET_PASSWORD_AUTH_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }

    case actionLabels.CHECK_LINK_VALIDITY_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          checkLinkValidity: true,
        },
      };
    case actionLabels.CHECK_LINK_VALIDITY_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          checkLinkValidity: false,
        },
        isLinkValid: true,
        errorMsg: "",
      };
    }
    case actionLabels.CHECK_LINK_VALIDITY_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          checkLinkValidity: false,
        },
        isLinkValid: false,
        errorMsg: payload,
      };
    }
    case actionLabels.GET_LOCATION_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          [payload.type]: true,
        },
        location: {
          ...state.location,
          [type]: [],
          ["state"]: {},
        },
      };
    case actionLabels.GET_LOCATION_SUCCESS: {
      const { type, data } = payload;
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          [type]: false,
        },
        location: {
          ...state.location,
          [type]: data,
        },
        errorMsg: "",
      };
    }
    case actionLabels.GET_LOCATION_FAIL: {
      const { msg, type } = payload;

      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          [type]: true,
        },
        location: {
          ...state.location,
          [type]: {},
        },
        errorMsg: msg,
      };
    }
    // Early Access Subscribe
    case actionLabels.EARLY_ACCESS_SUBSCRIBE_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          earlyAccessSubscribe: true,
        },
      };
    case actionLabels.EARLY_ACCESS_SUBSCRIBE_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          earlyAccessSubscribe: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.EARLY_ACCESS_SUBSCRIBE_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          earlyAccessSubscribe: false,
        },
        errorMsg: payload,
      };
    }

    // Fetch user devices
    case actionLabels.FETCH_USER_DEVICES_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetchUserDevices: true,
        },
      };
    case actionLabels.FETCH_USER_DEVICES_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetchUserDevices: false,
        },
        userDevices: payload,
        errorMsg: "",
      };
    }
    case actionLabels.FETCH_USER_DEVICES_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetchUserDevices: false,
        },
        errorMsg: payload,
      };
    }

    // Delete user devices
    case actionLabels.DELETE_USER_DEVICE_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          deleteUserDevice: true,
        },
      };
    case actionLabels.DELETE_USER_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          deleteUserDevice: false,
        },
        errorMsg: "",
      };
    }
    case actionLabels.DELETE_USER_DEVICE_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          deleteUserDevice: false,
        },
        errorMsg: payload,
      };
    }

    default:
      return state;
  }
};

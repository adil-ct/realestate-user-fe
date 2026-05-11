import { all, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import * as actionLabels from "../actionLabels";

// Auth actions based imports
import {
  loginSaga,
  logoutSaga,
  profileFetchSaga,
  loginVerifySaga,
  loginAuthenticationSaga,
  authenticationValidatorSaga,
  signupSaga,
  sendOTPSaga,
  emailVerificationSaga,
  verifyOTPSaga,
  forgotPasswordSaga,
  resetPasswordSaga,
  forceUpdatePasswordSaga,
  resetPasswordAuthSaga,
  resendOTPSaga,
  resendEmailVerificationSaga,
  userCheckSaga,
  checkResetPasswordLinkValidity,
  getLocations,
  securityRequestSaga,
  securitySettingsSaga,
  kycInquirySaga,
  earlyAccessSubscribeSaga,
  changePasswordSaga,
  notificationSettingSaga,
  fetchUserDevicesSaga,
  deleteUserDeviceSaga,
} from "./auth/auth";

// Account actions based imports
import {
  getPlaidTokenSaga,
  addACHBankAccountSaga,
  addWireBankAccountSaga,
  getListOfBankAccountSaga,
  addCardSaga,
  getListOfCardsSaga,
  depositCurrencySaga,
  withdrawCurrencySaga,
  getWalletBalanceSaga,
  deleteCardSaga,
  getBankDetailsSaga,
  getListOfTransactionsSaga,
  getServiceFeesSaga,
  getPFOverviewData,
  getPFListData,
  getPFAssetData,
  getPropertyTxnData,
  getWireInstructionSaga,
  fileUpload,
  depositRent,
  getRentTxn,
} from "./accounts";

// User actions based imports
import {
  setUserProfileSaga,
  getWalletAddressSaga,
  getMoonpayUrlSaga,
  getPaymentMethodsSaga,
  getRefreeDetailsSaga,
  getRewardSingleTransactionSaga,
  getRewardTransactionsSaga,
} from "./user/user";

// Property Manager based imports
import {
  getProposalsDetailsSaga,
  getProposalsListSaga,
  getProposalsOverviewSaga,
  createProposalSaga,
  uploadDocumentSaga,
  createTransactionSaga,
  createVoteSaga,
  getCoownerListSaga,
} from "./pManager";

import {
  getPropertyDetailsSaga,
  getPropertyListSaga,
  getSimilarPropertyListSaga,
  getReserveTransactionsSaga,
  investPropertySaga,
} from "./marketplace";
import {
  getAllNotifications,
  markAsRead,
  getFilteredNotifications,
} from "./notifications";

import { commonAPISaga } from "./common";

// Auth actions based saga
export function* watchAuthentication() {
  yield all([
    takeLatest(actionLabels.LOGIN_SAGA, loginSaga),
    takeLatest(actionLabels.LOGOUT_SAGA, logoutSaga),
    takeLatest(actionLabels.AUTH_LOGIN_SAGA, loginAuthenticationSaga),
    takeLatest(actionLabels.PROFILE_FETCH_SAGA, profileFetchSaga),
    takeLatest(actionLabels.LOGIN_VERIFY_SAGA, loginVerifySaga),
    takeLatest(actionLabels.SIGNUP_SAGA, signupSaga),
    takeLatest(actionLabels.PHONE_SEND_OTP_SAGA, sendOTPSaga),
    takeLatest(actionLabels.EMAIL_VERIFICATION_SAGA, emailVerificationSaga),
    takeLatest(actionLabels.PHONE_VERIFY_OTP_SAGA, verifyOTPSaga),
    takeLatest(actionLabels.FORGOT_PASSWORD_SAGA, forgotPasswordSaga),
    takeLatest(
      actionLabels.FORCE_UPDATE_PASSWORD_SAGA,
      forceUpdatePasswordSaga
    ),
    takeLatest(actionLabels.RESET_PASSWORD_SAGA, resetPasswordSaga),
    takeLatest(actionLabels.RESEND_OTP_SAGA, resendOTPSaga),
    takeLatest(actionLabels.RESET_PASSWORD_AUTH_SAGA, resetPasswordAuthSaga),
    takeLatest(actionLabels.RESEND_EMAIL_SAGA, resendEmailVerificationSaga),
    takeLatest(
      actionLabels.AUTHENTICATION_VALIDATOR,
      authenticationValidatorSaga
    ),
    takeLatest(actionLabels.SET_PERSONAL_DETAILS_SAGA, setUserProfileSaga),
    takeLatest(actionLabels.SECURITY_REQUEST_SAGA, securityRequestSaga),
    takeLatest(actionLabels.SECURITY_SETTINGS_SAGA, securitySettingsSaga),
    takeLatest(actionLabels.CHECK_USER, userCheckSaga),

    takeLatest(
      actionLabels.CHECK_LINK_VALIDITY_SAGA,
      checkResetPasswordLinkValidity
    ),
    takeEvery(actionLabels.GET_LOCATION_SAGA, getLocations),
    takeEvery(actionLabels.KYC_INQUIRY_SAGA, kycInquirySaga),
    takeEvery(
      actionLabels.EARLY_ACCESS_SUBSCRIBE_SAGA,
      earlyAccessSubscribeSaga
    ),
    takeEvery(actionLabels.CHANGE_PASSWORD_SAGA, changePasswordSaga),
    takeEvery(actionLabels.NOTIFICATION_SETTING_SAGA, notificationSettingSaga),
    takeEvery(actionLabels.FETCH_USER_DEVICES_SAGA, fetchUserDevicesSaga),
    takeEvery(actionLabels.DELETE_USER_DEVICE_SAGA, deleteUserDeviceSaga),
    takeLatest(actionLabels.GET_WALLET_ADDRESS_SAGA, getWalletAddressSaga),
    takeLatest(actionLabels.GET_MOONPAY_URL_SAGA, getMoonpayUrlSaga),
    takeLatest(actionLabels.GET_PAYMENT_METHODS_SAGA, getPaymentMethodsSaga),
    takeLatest(actionLabels.GET_REFREE_DETAILS_SAGA, getRefreeDetailsSaga),
    takeLatest(
      actionLabels.GET_REWARD_SINGLE_TRANSACTION_SAGA,
      getRewardSingleTransactionSaga
    ),
    takeLatest(
      actionLabels.GET_REWARD_TRANSACTIONS_SAGA,
      getRewardTransactionsSaga
    ),
  ]);
}

// Account actions based saga
export function* watchAccountBasedSagas() {
  yield all([
    takeLatest(actionLabels.GET_PLAID_TOKEN_SAGA, getPlaidTokenSaga),
    takeLatest(actionLabels.ADD_ACH_BANK_ACCOUNT_SAGA, addACHBankAccountSaga),
    takeLatest(actionLabels.ADD_WIRE_BANK_ACCOUNT_SAGA, addWireBankAccountSaga),
    takeLatest(
      actionLabels.GET_LIST_OF_BANK_ACCOUNT_SAGA,
      getListOfBankAccountSaga
    ),
    takeLatest(actionLabels.ADD_CARD_SAGA, addCardSaga),
    takeLatest(actionLabels.GET_LIST_OF_CARDS_SAGA, getListOfCardsSaga),
    takeLatest(actionLabels.DEPOSIT_CURRENCY_SAGA, depositCurrencySaga),
    takeLatest(actionLabels.WITHDRAW_CURRENCY_SAGA, withdrawCurrencySaga),
    takeLatest(actionLabels.GET_WALLET_BALANCE_SAGA, getWalletBalanceSaga),
    takeLatest(actionLabels.DELETE_CARD_SAGA, deleteCardSaga),
    takeLatest(actionLabels.GET_BANK_DETAILS_SAGA, getBankDetailsSaga),
    takeLatest(
      actionLabels.GET_LIST_OF_TRANSACTIONS_SAGA,
      getListOfTransactionsSaga
    ),
    takeLeading(actionLabels.GET_PROPERTYDETAILS_SAGA, getPropertyDetailsSaga),
    takeLatest(actionLabels.GET_PROPERTYLIST_SAGA, getPropertyListSaga),
    takeLatest(actionLabels.GET_SIMILAR_PROPERTYLIST_SAGA, getSimilarPropertyListSaga),
    takeLatest(actionLabels.GET_SERVICE_FEES_SAGA, getServiceFeesSaga),
    takeLatest(actionLabels.INVEST_PROPERTY_SAGA, investPropertySaga),
    takeLatest(actionLabels.GET_PF_OVERVIEW_SAGA, getPFOverviewData),
    takeLatest(actionLabels.GET_PF_LIST_SAGA, getPFListData),
    takeLatest(actionLabels.GET_PF_ASSET_SAGA, getPFAssetData),
    takeLatest(actionLabels.GET_PROPERTY_TXN_SAGA, getPropertyTxnData),
    takeLatest(actionLabels.GET_WIRE_INSTRUCTION, getWireInstructionSaga),
    takeLatest(actionLabels.FILE_UPLOAD, fileUpload),
    takeLatest(actionLabels.DEPOSIT_RENT, depositRent),
    takeLatest(actionLabels.GET_RENT_TXN, getRentTxn),
    takeLatest(
      actionLabels.GET_RESERVE_TRANSACTIONS_SAGA,
      getReserveTransactionsSaga
    ),
  ]);
}

// Notification actions based saga
export function* watchNotificationBasedSagas() {
  yield all([
    takeLatest(actionLabels.GET_NOTIFICATIONS_SAGA, getAllNotifications),
    takeLatest(
      actionLabels.GET_FILTERED_NOTIFICATIONS_SAGA,
      getFilteredNotifications
    ),
    takeLatest(actionLabels.MARK_AS_READ_SAGA, markAsRead),
  ]);
}

// Property Manager based saga
export function* watchPropertyManagerBasedSagas() {
  yield all([
    takeLatest(actionLabels.GET_PROPOSAL_LIST_SAGA, getProposalsListSaga),
    takeLatest(actionLabels.GET_PROPOSAL_DETAILS_SAGA, getProposalsDetailsSaga),
    takeLatest(
      actionLabels.GET_PROPOSAL_OVERVIEW_SAGA,
      getProposalsOverviewSaga
    ),
    takeLatest(actionLabels.CREATE_PROPOSAL_SAGA, createProposalSaga),
    takeLatest(actionLabels.UPLOAD_DOCUMENT_SAGA, uploadDocumentSaga),
    takeLatest(actionLabels.CREATE_TRANSACTION_SAGA, createTransactionSaga),
    takeLatest(actionLabels.CREATE_VOTE_SAGA, createVoteSaga),
    takeLatest(actionLabels.GET_COOWNERS_LIST_SAGA, getCoownerListSaga),
  ]);
}

export function* watchCommon() {
  yield all([takeLatest(actionLabels.COMMON_SAGA, commonAPISaga)]);
}

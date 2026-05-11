import * as actionLabels from "../../actionLabels";

export const setEmailEntered = (payload) => ({
  type: actionLabels.SET_EMAIL_ENTERED,
  payload,
});

// set personal details
export const setPersonalDetailStart = () => ({
  type: actionLabels.SET_PERSONAL_DETAILS_START,
});

export const setPersonalDetail = (payload) => ({
  type: actionLabels.SET_PERSONAL_DETAILS_SAGA,
  payload,
});

export const setPersonalDetailSuccess = (payload) => ({
  type: actionLabels.SET_PERSONAL_DETAILS_SUCCESS,
  payload,
});

export const setPersonalDetailFail = (payload) => ({
  type: actionLabels.SET_PERSONAL_DETAILS_FAIL,
  payload,
});

export const getWalletAddressStart = () => ({
  type: actionLabels.GET_WALLET_ADDRESS_START,
});

export const getWalletAddress = (payload) => ({
  type: actionLabels.GET_WALLET_ADDRESS_SAGA,
  payload,
});

export const getWalletAddressSuccess = (payload) => ({
  type: actionLabels.GET_WALLET_ADDRESS_SUCCESS,
  payload,
});

export const getWalletAddressFail = (payload) => ({
  type: actionLabels.GET_WALLET_ADDRESS_FAIL,
  payload,
});

export const getMoonpayUrlStart = () => ({
  type: actionLabels.GET_MOONPAY_URL_START,
});

export const getMoonpayUrl = (payload) => ({
  type: actionLabels.GET_MOONPAY_URL_SAGA,
  payload,
});

export const getMoonpayUrlSuccess = (payload) => ({
  type: actionLabels.GET_MOONPAY_URL_SUCCESS,
  payload,
});

export const getMoonpayUrlFail = (payload) => ({
  type: actionLabels.GET_MOONPAY_URL_FAIL,
  payload,
});

export const getPaymentMethodsStart = () => ({
  type: actionLabels.GET_PAYMENT_METHODS_START,
});

export const getPaymentMethods = (payload) => ({
  type: actionLabels.GET_PAYMENT_METHODS_SAGA,
  payload,
});

export const getPaymentMethodsSuccess = (payload) => ({
  type: actionLabels.GET_PAYMENT_METHODS_SUCCESS,
  payload,
});

export const getPaymentMethodsFail = (payload) => ({
  type: actionLabels.GET_PAYMENT_METHODS_FAIL,
  payload,
});


export const getRefreeDetailsStart = () => ({
  type: actionLabels.GET_REFREE_DETAILS_START,
});

export const getRefreeDetails = (payload) => ({
  type: actionLabels.GET_REFREE_DETAILS_SAGA,
  payload,
});

export const getRefreeDetailsSuccess = (payload) => ({
  type: actionLabels.GET_REFREE_DETAILS_SUCCESS,
  payload,
});

export const getRefreeDetailsFail = (payload) => ({
  type: actionLabels.GET_REFREE_DETAILS_FAIL,
  payload,
});

export const getRewardTransactionsStart = () => ({
  type: actionLabels.GET_REWARD_TRANSACTIONS_START,
});

export const getRewardTransactions = (payload) => ({
  type: actionLabels.GET_REWARD_TRANSACTIONS_SAGA,
  payload,
});

export const getRewardTransactionsSuccess = (payload) => ({
  type: actionLabels.GET_REWARD_TRANSACTIONS_SUCCESS,
  payload,
});

export const getRewardTransactionsFail = (payload) => ({
  type: actionLabels.GET_REWARD_TRANSACTIONS_FAIL,
  payload,
});

export const getRewardSingleTransactionStart = () => ({
  type: actionLabels.GET_REWARD_SINGLE_TRANSACTION_START,
});

export const getRewardSingleTransaction = (payload) => ({
  type: actionLabels.GET_REWARD_SINGLE_TRANSACTION_SAGA,
  payload,
});

export const getRewardSingleTransactionSuccess = (payload) => ({
  type: actionLabels.GET_REWARD_SINGLE_TRANSACTION_SUCCESS,
  payload,
});

export const getRewardSingleTransactionFail = (payload) => ({
  type: actionLabels.GET_REWARD_SINGLE_TRANSACTION_FAIL,
  payload,
});


import { put } from "redux-saga/effects";
import errorHandler from "utils/errorHandler";
import {
  PAYMENT_BASE_URL,
  MARKETPLACE_URL,
  ADMIN_BASE_URL,
} from "constants/env";
import { fetchTokenLink, getAllBankLink, deleteBankLink } from "constants/paymentEndpoints"
import toaster from "utils/toaster";

import {
  getPlaidTokenStart,
  getPlaidTokenSuccess,
  getPlaidTokenFail,
  addACHBankAccountStart,
  addACHBankAccountSuccess,
  addACHBankAccountFail,
  addWireBankAccountStart,
  addWireBankAccountSuccess,
  addWireBankAccountFail,
  getListOfBankAccountStart,
  getListOfBankAccountSuccess,
  getListOfBankAccountFail,
  addCardStart,
  addCardSuccess,
  addCardFail,
  getListOfCardsStart,
  getListOfCardsSuccess,
  getListOfCardsFail,
  depositCurrencyStart,
  depositCurrencySuccess,
  depositCurrencyFail,
  withdrawCurrencyStart,
  withdrawCurrencySuccess,
  withdrawCurrencyFail,
  getWalletBalanceStart,
  getWalletBalanceSuccess,
  getWalletBalanceFail,
  deleteCardStart,
  deleteCardSuccess,
  deleteCardFail,
  getBankDetailsStart,
  getBankDetailsSuccess,
  getBankDetailsFail,
  getListOfTransactionsStart,
  getListOfTransactionsSuccess,
  getListOfTransactionsFail,
  getServiceFeesStart,
  getServiceFeesSuccess,
  getServiceFeesFail,
  getPFOverviewDataSuccess,
  getPFOverviewDataFail,
  getPFListDataSuccess,
  getPFListDataFail,
  getPFAssetDataSuccess,
  getPFAssetDataFail,
  getPropertyTxnDataFail,
  getPropertyTxnDataSuccess,
  getWireInstructionStart,
  getWireInstructionSuccess,
  getWireInstructionFail,
  fileUploadStart,
  fileUploadSuccess,
  fileUploadFail,
  depositRentStart,
  getRentTxnStart,
  getRentTxnSuccess,
  getRentTxnFail,
  depositRentSuccess,
  depositRentFail,
} from "../../actions";
import { getQueryParamStr } from "utils/getQueryParamStr";

export function* getPlaidTokenSaga({ payload }) {
  const { handleSuccess } = payload;
  yield put(getPlaidTokenStart());
  yield errorHandler({
    endpoint: fetchTokenLink,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetPlainTokenSuccess(response) {
      const { data } = response;
      yield put(getPlaidTokenSuccess({ data }));
      handleSuccess(data?.linkTokenResponse?.link_token);
    },
    failHandler: yield function* onGetPlainTokenFail(response) {
      yield put(getPlaidTokenFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}

export function* addACHBankAccountSaga({ payload }) {
  const { requestBody, handleSuccess } = payload;
  yield put(addACHBankAccountStart());
  yield errorHandler({
    endpoint: `/payment/ach`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onAddACHBankAccountSuccess(response) {
      const { data, msg } = response;
      yield put(addACHBankAccountSuccess({ data }));
      toaster.success(msg);
      handleSuccess();
    },
    failHandler: yield function* onAddACHBankAccountFail(response) {
      yield put(addACHBankAccountFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* addWireBankAccountSaga({ payload }) {
  const { requestBody, handleSuccess } = payload;
  yield put(addWireBankAccountStart());
  yield errorHandler({
    endpoint: `/payment/wire`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onAddWireBankAccountSuccess(response) {
      const { data, msg } = response;
      yield put(addWireBankAccountSuccess({ data }));
      toaster.success(msg);
      handleSuccess();
    },
    failHandler: yield function* onAddWireBankAccountFail(response) {
      yield put(addWireBankAccountFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

// Get list of all bank accounts
export function* getListOfBankAccountSaga({ payload }) {
  const { handleSuccess } = payload;
  // const { page, limit = 100, search = "" } = action.payload;
  yield put(getListOfBankAccountStart());
  yield errorHandler({
    // endpoint: `/payment/payment-method/listBanks/?page=${page}&limit=${limit}&search=${search}`,
    endpoint: getAllBankLink,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetListOfBankAccountSuccess(response) {
      const { data } = response;
      yield put(getListOfBankAccountSuccess(data));
      handleSuccess && handleSuccess(data?.paymentMethods[0])
    },
    failHandler: yield function* onGetListOfBankAccountFail(response) {
      yield put(getListOfBankAccountFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

export function* addCardSaga({ payload }) {
  const { requestBody, handleSuccess } = payload;
  yield put(addCardStart());
  yield errorHandler({
    endpoint: `/payment/addCard`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onAddCardSuccess(response) {
      const { data, msg } = response;
      yield put(addCardSuccess({ data }));
      toaster.success(msg);
      handleSuccess();
    },
    failHandler: yield function* onAddCardFail(response) {
      yield put(addCardFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

// Get list of all cards
export function* getListOfCardsSaga(action) {
  const { page = 1, limit = 100 } = action.payload || "";
  yield put(getListOfCardsStart());
  yield errorHandler({
    endpoint: `/payment/payment-method/card/?page=${page}&limit=${limit}`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetListOfCardsSuccess(response) {
      const { data } = response;
      yield put(getListOfCardsSuccess(data));
    },
    failHandler: yield function* onGetListOfCardsFail(response) {
      yield put(getListOfCardsFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Deposit currency using bank account
export function* depositCurrencySaga(action) {
  const { endpoint, requestBody, handleSuccess, formik, handleFail } =
    action.payload;
  yield put(depositCurrencyStart());
  yield errorHandler({
    endpoint,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onDepositCurrencySuccess(response) {
      const { data } = response;
      yield put(depositCurrencySuccess(data));
      handleSuccess();
      formik.resetForm();
    },
    failHandler: yield function* onDepositCurrencyFail(response) {
      yield put(depositCurrencyFail(response));
      handleFail && handleFail();
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "post",
    payload: requestBody,
    token: true,
  });
}

// Deposit currency using bank account
export function* withdrawCurrencySaga(action) {
  const { requestBody, handleSuccess } = action.payload;
  yield put(withdrawCurrencyStart());
  yield errorHandler({
    endpoint: `/payment/withdraw-usdc`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onWithdrawCurrencySuccess(response) {
      const { data } = response;
      yield put(withdrawCurrencySuccess(data));
      handleSuccess();
    },
    failHandler: yield function* onWithdrawCurrencyFail(response) {
      yield put(withdrawCurrencyFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "post",
    payload: requestBody,
    token: true,
  });
}

// Get Wallet Balance
export function* getWalletBalanceSaga({ payload }) {
  const { handleSuccess } = payload || "";
  yield put(getWalletBalanceStart());
  yield errorHandler({
    endpoint: `/payment/balance/`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetWalletBalanceSuccess(response) {
      const { data } = response;
      yield put(getWalletBalanceSuccess(data));
      handleSuccess && handleSuccess(data?.balance);
    },
    failHandler: yield function* onGetWalletBalanceFail(response) {
      yield put(getWalletBalanceFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Get Wallet Balance
export function* deleteCardSaga({ payload }) {
  const { requestBody, handleSuccess } = payload;
  yield put(deleteCardStart());
  yield errorHandler({
    endpoint: `${deleteBankLink}/${requestBody?.id}`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onDeleteCardSuccess(response) {
      const { data, msg } = response;
      yield put(deleteCardSuccess(data));
      handleSuccess();
      toaster.success(msg);
    },
    failHandler: yield function* onDeleteCardFail(response) {
      yield put(deleteCardFail(response));
      toaster.error(response);
    },
    payload: requestBody,
    failHandlerType: "CUSTOM",
    apiType: "delete",
    token: true,
  });
}

// Get Wallet Balance
export function* getBankDetailsSaga({ payload }) {
  const { id } = payload;
  yield put(getBankDetailsStart());
  yield errorHandler({
    endpoint: `/payment/bankDetails/${id}`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetBankDetailsSuccess(response) {
      const { data } = response;
      yield put(getBankDetailsSuccess(data));
    },
    failHandler: yield function* onGetBankDetailsFail(response) {
      yield put(getBankDetailsFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Get list of all transactions
export function* getListOfTransactionsSaga({ payload }) {
  const { page, txnType, duration, search } = payload;
  const queryParamsStr = getQueryParamStr({
    page,
    transactionType: txnType,
    duration,
    search,
  });
  yield put(getListOfTransactionsStart());
  yield errorHandler({
    endpoint: `/payment/transaction/?${queryParamsStr}`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetListOfTransactionsSuccess(response) {
      const { data } = response;
      yield put(getListOfTransactionsSuccess(data));
    },
    failHandler: yield function* onGetListOfTransactionsFail(response) {
      yield put(getListOfTransactionsFail(response));
      // toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Get Limits & Service fess
export function* getServiceFeesSaga() {
  yield put(getServiceFeesStart());
  yield errorHandler({
    endpoint: `/payment/config-values`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetServiceFeesSuccess(response) {
      const { data } = response;
      yield put(getServiceFeesSuccess(data));
    },
    failHandler: yield function* onGetServiceFeesFail(response) {
      yield put(getServiceFeesFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Portfolio Overview
export function* getPFOverviewData({ payload }) {
  const { endpoint } = payload;
  yield errorHandler({
    endpoint,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* onGetPFOverviewDataSuccess(response) {
      const { data } = response;
      yield put(getPFOverviewDataSuccess(data));
    },
    failHandler: yield function* onGetPFOverviewDataFail(response) {
      yield put(getPFOverviewDataFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Portfolio List
export function* getPFListData(action) {
  const { page, search = "" } = action.payload;
  yield errorHandler({
    endpoint: `/marketplace/list-assets?page=${page}&limit=10&search=${search}`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* onGetListDataSuccess(response) {
      const { data } = response;
      yield put(getPFListDataSuccess(data));
    },
    failHandler: yield function* onGetListDataFail(response) {
      yield put(getPFListDataFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Specific Portfolio asset cards Data
export function* getPFAssetData({ payload }) {
  yield errorHandler({
    endpoint: `/marketplace/asset-summary/${payload}`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* onGetAssetDataSuccess(response) {
      const { data } = response;
      yield put(getPFAssetDataSuccess(data));
    },
    failHandler: yield function* onGetAssetDataFail(response) {
      yield put(getPFAssetDataFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

// Property Transactions
export function* getPropertyTxnData({ payload }) {
  yield errorHandler({
    endpoint: `/marketplace/getPropertyTransactions/${payload}`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* onPropertyTxnDataSuccess(response) {
      const { data } = response;
      let sortedData = [];
      if (data?.items) {
        sortedData = data?.items?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      const resObj = { items: sortedData, ...data };
      yield put(getPropertyTxnDataSuccess(resObj));
    },
    failHandler: yield function* onPropertyTxnDataFail(response) {
      yield put(getPropertyTxnDataFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

export function* getWireInstructionSaga({ payload }) {
  const { id, handleSuccess } = payload;
  yield put(getWireInstructionStart());
  yield errorHandler({
    endpoint: `/payment/getWireInstruction/${id}`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onGetWireInstructionSuccess(response) {
      const { data } = response;
      yield put(getWireInstructionSuccess({ data }));
      handleSuccess();
    },
    failHandler: yield function* onGetWireInstructionFail(response) {
      yield put(getWireInstructionFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}
export function* fileUpload({ payload }) {
  const { handleSuccess, handleFail, requestBody } = payload;
  yield put(fileUploadStart());
  yield errorHandler({
    endpoint: `/property/file.upload`,
    baseURL: ADMIN_BASE_URL,
    successHandler: yield function* successFunc(response) {
      const { data } = response;
      yield put(fileUploadSuccess({ data }));
      handleSuccess(data);
    },
    failHandler: yield function* failFunc(response) {
      yield put(fileUploadFail(response));
      handleFail();
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* depositRent({ payload }) {
  const { handleSuccess, handleFail, requestBody } = payload || "";
  yield put(depositRentStart());
  yield errorHandler({
    endpoint: `/cashflow/deposit-rent`,
    baseURL: ADMIN_BASE_URL,
    successHandler: yield function* successFunc(response) {
      const { data } = response;
      yield put(depositRentSuccess({ data }));
      handleSuccess && handleSuccess(data);
    },
    failHandler: yield function* failFunc(response) {
      yield put(depositRentFail(response));
      handleFail && handleFail();
      toaster.error(response?.msg ? response?.msg : response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* getRentTxn({ payload }) {
  const { handleSuccess, handleFail, id, page, search = "" } = payload;
  yield put(getRentTxnStart());
  yield errorHandler({
    endpoint: `/cashflow/rent-transaction/${id}?page=${page}&search=${search}`,
    baseURL: ADMIN_BASE_URL,
    successHandler: yield function* successFunc(response) {
      const { data } = response;
      yield put(getRentTxnSuccess({ data }));
      handleSuccess && handleSuccess(data);
    },
    failHandler: yield function* failFunc(response) {
      yield put(getRentTxnFail(response));
      handleFail && handleFail();
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

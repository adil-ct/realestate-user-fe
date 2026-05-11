import { put } from "redux-saga/effects";
import errorHandler from "utils/errorHandler";
import toaster from "utils/toaster";

import { USER_BASE_URL, PAYMENT_BASE_URL } from "constants/env";
import {
  setPersonalDetailStart,
  setPersonalDetailSuccess,
  setPersonalDetailFail,
  getWalletAddressStart,
  getWalletAddressSuccess,
  getWalletAddressFail,
  getMoonpayUrlStart,
  getMoonpayUrlSuccess,
  getMoonpayUrlFail,
  getPaymentMethodsStart,
  getPaymentMethodsSuccess,
  getPaymentMethodsFail,
  getRefreeDetailsStart,
  getRefreeDetailsSuccess,
  getRefreeDetailsFail,
  getRewardSingleTransactionStart,
  getRewardSingleTransactionSuccess,
  getRewardSingleTransactionFail,
  getRewardTransactionsStart,
  getRewardTransactionsSuccess,
  getRewardTransactionsFail
} from "store/actions/user/user";

export function* setUserProfileSaga({ payload }) {
  const { requestBody, handleSuccess, handleFail, showToast=true } = payload;
  yield put(setPersonalDetailStart());
  yield errorHandler({
    endpoint: `/user/userDetails`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSetPersonalDetailSuccess(response) {
      const { data } = response;
      yield put(setPersonalDetailSuccess({ data }));
      if(showToast) toaster.success(response?.msg);
      handleSuccess && handleSuccess();
    },
    failHandler: yield function* onSetPersonalDetailFail(response) {
      yield put(setPersonalDetailFail(response));
      toaster.error(response);
      handleFail && handleFail()
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* getWalletAddressSaga({ payload }) {
  const { handleSuccess } = payload;
  yield put(getWalletAddressStart());
  yield errorHandler({
    endpoint: `/user/walletAddress`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSetPersonalDetailSuccess(response) {
      const { data } = response;
      yield put(getWalletAddressSuccess({ data }));
      handleSuccess && handleSuccess();
    },
    failHandler: yield function* onSetPersonalDetailFail(response) {
      yield put(getWalletAddressFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: "",
    apiType: "get",
    token: true,
  });
}

export function* getMoonpayUrlSaga({ payload }) {
  const { handleSuccess, url } = payload;
  yield put(getMoonpayUrlStart());
  yield errorHandler({
    endpoint: url,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onSetPersonalDetailSuccess(response) {
      const { data } = response;
      yield put(getMoonpayUrlSuccess({ data }));
      handleSuccess && handleSuccess(data);
    },
    failHandler: yield function* onSetPersonalDetailFail(response) {
      yield put(getMoonpayUrlFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: "",
    apiType: "get",
    token: true,
  });
}
export function* getPaymentMethodsSaga() {
  yield put(getPaymentMethodsStart());
  yield errorHandler({
    endpoint: `/payment/payment-methods`,
    baseURL: PAYMENT_BASE_URL,
    successHandler: yield function* onSetPersonalDetailSuccess(response) {
      const { data } = response;
      yield put(getPaymentMethodsSuccess({ data }));
    },
    failHandler: yield function* onSetPersonalDetailFail(response) {
      yield put(getPaymentMethodsFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: "",
    apiType: "get",
    token: true,
  });
}

export function* getRefreeDetailsSaga({ payload }) {
  const { endpoint } = payload;
  yield put(getRefreeDetailsStart());
  yield errorHandler({
    endpoint,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSuccess(response) {
      const { data } = response;
      yield put(getRefreeDetailsSuccess({ data }));
    },
    failHandler: yield function* onFail(response) {
      yield put(getRefreeDetailsFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: "",
    apiType: "get",
    token: true,
  });
}

export function* getRewardTransactionsSaga({ payload}) {
  const { page } = payload;
  yield put(getRewardTransactionsStart());
  yield errorHandler({
    endpoint: `/user/reward-transactions/?limit=10&page=${page}`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSuccess(response) {
      const { data } = response;
      yield put(getRewardTransactionsSuccess({ data }));
    },
    failHandler: yield function* onFail(response) {
      yield put(getRewardTransactionsFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: "",
    apiType: "get",
    token: true,
  });
}

export function* getRewardSingleTransactionSaga({ payload }) {
  const { id, page } = payload;
  yield put(getRewardSingleTransactionStart());
  yield errorHandler({
    endpoint: `/user/referee-transactions/${id}?page=${page}&limit=10`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onSuccess(response) {
      const { data } = response;
      yield put(getRewardSingleTransactionSuccess({ data }));
    },
    failHandler: yield function* onFail(response) {
      yield put(getRewardSingleTransactionFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: "",
    apiType: "get",
    token: true,
  });
}

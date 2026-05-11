import { put } from "redux-saga/effects";
import errorHandler from "utils/errorHandler";
import { MARKETPLACE_URL } from "constants/env";
import toaster from "utils/toaster";

import {
  getPropertyDetailsStart,
  getPropertyDetailsSuccess,
  getPropertyDetailsFail,
  getPropertyListStart,
  getPropertyListSuccess,
  getPropertyListFail,
  investPropertyStart,
  investPropertySuccess,
  investPropertyFail,
  getReserveTransactionsStart,
  getReserveTransactionsSuccess,
  getReserveTransactionsFail,
  getSimilarPropertyListStart,
  getSimilarPropertyListSuccess,
  getSimilarPropertyListFail,
} from "../../actions";

window.dataLayer = window.dataLayer || [];

export function* getPropertyDetailsSaga({ payload }) {
  yield put(getPropertyDetailsStart());
  yield errorHandler({
    endpoint:
      "/marketplace/property-details/" +
      payload.id +
      "?request=" +
      payload.tabSelected,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      payload?.handleSuccess && payload?.handleSuccess(data)
      yield put(getPropertyDetailsSuccess({ data }));
    },
    failHandler: yield function* failFun(response) {
      yield put(getPropertyDetailsFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}

export function* getPropertyListSaga({ payload }) {
  yield put(getPropertyListStart());
  yield errorHandler({
    endpoint: `/marketplace/property-list?${payload.qp}`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(getPropertyListSuccess(data?.items));
      payload?.handleSuccess && payload?.handleSuccess()
    },
    failHandler: yield function* failFun(response) {
      yield put(getPropertyListFail(response));
      payload?.handleSuccess && payload?.handleSuccess()
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}
// get similar Propeties
export function* getSimilarPropertyListSaga({ payload }) {
  yield put(getSimilarPropertyListStart());
  yield errorHandler({
    endpoint: `/marketplace/property/${payload.id}/comparable-properties?${payload.qp}`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(getSimilarPropertyListSuccess(data?.data));
      payload?.handleSuccess && payload?.handleSuccess()
    },
    failHandler: yield function* failFun(response) {
      yield put(getSimilarPropertyListFail(response));
      payload?.handleSuccess && payload?.handleSuccess()
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}
// Invest Property
export function* investPropertySaga({ payload }) {
  const { requestBody, handleSuccess } = payload;
  yield put(investPropertyStart());
  yield errorHandler({
    endpoint: `/marketplace/invest`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(investPropertySuccess(data?.items));
      handleSuccess();
      toaster.success("Congratulations! Investment successful!");
      window.dataLayer.push({event: "ConfirmInvestment"});
    },
    failHandler: yield function* failFun(response) {
      yield put(investPropertyFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* getReserveTransactionsSaga({ payload }) {
  yield put(getReserveTransactionsStart());
  yield errorHandler({
    endpoint: `/marketplace/reserves-transactions/${payload.id}`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(getReserveTransactionsSuccess(data));
    },
    failHandler: yield function* failFun(response) {
      yield put(getReserveTransactionsFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}

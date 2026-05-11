import { put } from "redux-saga/effects";
import errorHandler from "utils/errorHandler";
import { PROPOSAL_BASE_URL, MARKETPLACE_URL } from "constants/env";
import toaster from "utils/toaster";

import {
  getProposalListStart,
  getProposalListSuccess,
  getProposalListFail,
  getPropertyDetailsStart,
  getProposalDetailsSuccess,
  getProposalDetailsFail,
  getProposalOverviewStart,
  getProposalOverviewSuccess,
  getProposalOverviewFail,
  createProposalStart,
  createProposalSuccess,
  createProposalFail,
  uploadDocumentStart,
  uploadDocumentSuccess,
  uploadDocumentFail,
  createTransactionStart,
  createTransactionSuccess,
  createTransactionFail,
  createVoteStart,
  createVoteSuccess,
  createVoteFail,
  getCoownerListStart,
  getCoownerListSuccess,
  getCoownerListFail,
} from "../../actions";

export function* getProposalsListSaga({ payload }) {
  yield put(getProposalListStart());
  yield errorHandler({
    endpoint: `/proposals/property-proposals${payload}`,
    baseURL: PROPOSAL_BASE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(getProposalListSuccess(data));
    },
    failHandler: yield function* failFun(response) {
      yield put(getProposalListFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}

export function* getProposalsDetailsSaga({ payload }) {
  const { id, loading } = payload;
  yield put(getPropertyDetailsStart());
  loading && loading(true);
  yield errorHandler({
    endpoint: `/proposals/details/${id}`,
    baseURL: PROPOSAL_BASE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(getProposalDetailsSuccess(data));
      loading && loading(false);
    },
    failHandler: yield function* failFun(response) {
      yield put(getProposalDetailsFail(response));
      toaster.error(response);
      loading && loading(false);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}

export function* getProposalsOverviewSaga({ payload }) {
  const { id } = payload;
  yield put(getProposalOverviewStart());
  yield errorHandler({
    endpoint: `/proposals/property-proposals/${id}`,
    baseURL: PROPOSAL_BASE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(getProposalOverviewSuccess(data));
    },
    failHandler: yield function* failFun(response) {
      yield put(getProposalOverviewFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: { rememberMe: false },
    apiType: "get",
    token: true,
  });
}

export function* createProposalSaga({ payload }) {
  const { requestBody, handleSuccess, endpoint, type } = payload;
  yield put(createProposalStart());
  yield errorHandler({
    endpoint: `/proposals/${endpoint}`,
    baseURL: PROPOSAL_BASE_URL,
    successHandler: yield function* successFun(response) {
      const { data, msg } = response;
      yield put(createProposalSuccess(data));
      handleSuccess();
      toaster.success(msg);
    },
    failHandler: yield function* failFun(response) {
      yield put(createProposalFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: type,
    token: true,
  });
}

export function* uploadDocumentSaga({ payload }) {
  const { requestBody, handleSuccess } = payload;
  yield put(uploadDocumentStart());
  yield errorHandler({
    endpoint: `/proposals/file.upload`,
    baseURL: PROPOSAL_BASE_URL,
    successHandler: yield function* successFun(response) {
      const { data, msg } = response;
      yield put(uploadDocumentSuccess(data));
      toaster.success(msg);
      handleSuccess(data?.documents);
    },
    failHandler: yield function* failFun(response) {
      yield put(uploadDocumentFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* createTransactionSaga({ payload }) {
  const { requestBody, handleSuccess } = payload;
  yield put(createTransactionStart());
  yield errorHandler({
    endpoint: `/transactions/createTransaction`,
    baseURL: PROPOSAL_BASE_URL,
    successHandler: yield function* successFun(response) {
      const { data, msg } = response;
      yield put(createTransactionSuccess(data));
      handleSuccess();
      toaster.success(msg);
    },
    failHandler: yield function* failFun(response) {
      yield put(createTransactionFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* createVoteSaga({ payload }) {
  const { requestBody, handleSuccess, id } = payload;
  yield put(createVoteStart());
  yield errorHandler({
    endpoint: `/proposals/vote/${id}`,
    baseURL: PROPOSAL_BASE_URL,
    successHandler: yield function* successFun(response) {
      const { data, msg } = response;
      yield put(createVoteSuccess(data));
      handleSuccess();
      toaster.success(msg);
    },
    failHandler: yield function* failFun(response) {
      yield put(createVoteFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: requestBody,
    apiType: "post",
    token: true,
  });
}

export function* getCoownerListSaga({ payload }) {
  const { id } = payload;
  yield put(getCoownerListStart());
  yield errorHandler({
    endpoint: `/marketplace/coowners/${id}`,
    baseURL: MARKETPLACE_URL,
    successHandler: yield function* successFun(response) {
      const { data } = response;
      yield put(getCoownerListSuccess(data));
    },
    failHandler: yield function* failFun(response) {
      yield put(getCoownerListFail(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: {},
    apiType: "get",
    token: true,
  });
}

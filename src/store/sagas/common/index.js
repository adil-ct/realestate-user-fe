import { put } from 'redux-saga/effects';

import toaster from 'utils/toaster';
import { PAYMENT_BASE_URL, AUTH_BASE_URL } from "constants/env";
import errorHandler from "utils/errorHandler";
import {
  commonSuccess,
  commonStart,
  commonFail,
} from '../../actions';

const endpointMapping = (baseEP) => {
  let endpoint = "";
  switch (baseEP) {
    case "PAYMENT":
      endpoint = PAYMENT_BASE_URL;
      break;
    default:
      endpoint = AUTH_BASE_URL;
  }
  return endpoint;
}

export function* commonAPISaga({ payload }) {
  // console.log(payload, 'Payload in Common');
  yield put(commonStart(payload?.stateObj));
  yield errorHandler({
    endpoint: payload?.endPoint,
    successHandler: yield function* (response) {
      const { data, msg } = response;
      const resObj = { res: data, stateObj: payload?.stateObj };

      if (payload?.type === "post") {
        resObj.dataSaved = true;
      } else if (payload?.type === "patch" || payload?.type === "put") {
        resObj.dataUpdated = true;
      }

      if (payload?.showAlert) {
        toaster.success(msg);
      }

      if (payload?.fullResRequired) {
        resObj.fullResponse = response;
      }

      yield put(commonSuccess(resObj));
      payload?.successHandler(data)
    },
    failHandler: yield function* (response) {
      const resObj = { response, stateObj: payload?.stateObj };

      if (payload?.type === "post") {
        resObj.dataSaved = false;
      } else if (payload?.type === "patch" || payload?.type === "put") {
        resObj.dataUpdated = false;
      }

      if (payload?.fullResRequired) {
        resObj.fullResponse = response;
      }

      toaster.error(response);
      yield put(commonFail(resObj));
    },
    payload: ['put', 'post', 'patch'].indexOf(payload?.type) !== -1 ? (payload?.dataToPost || {}) : "",
    baseURL: payload?.baseEP ? endpointMapping(payload?.baseEP) : AUTH_BASE_URL,
    apiType: payload?.type || "get",
    failHandlerType: 'CUSTOM',
    token: typeof (payload?.token) === "boolean" ? payload?.token : true
  });
}
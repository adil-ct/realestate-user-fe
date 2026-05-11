/* eslint-disable no-lonely-if */
import { put } from "redux-saga/effects";
import axiosMain from "./axiosMain";

const createAPIUrl = (baseURL, endpoint) => {
  return `${baseURL}${endpoint}`;
};

export default function* errorHandler({
  endpoint,
  successHandler,
  failHandler,
  failHandlerType = "",
  payload = {},
  apiType = "",
  token = false,
  isLogoutCall = false,
  baseURL = "",
  // showToast = "",
}) {
  if (apiType.trim() === "") {
    throw new Error("apiType is require");
  }
  try {
    let response;
    if (!token) {
      if (apiType === "get") {
        response = yield axiosMain.get(createAPIUrl(baseURL, endpoint));
      } else if (apiType === "post") {
        response = yield axiosMain.post(
          createAPIUrl(baseURL, endpoint),
          payload
        );
      } else if (apiType === "put") {
        response = yield axiosMain.put(
          createAPIUrl(baseURL, endpoint),
          payload
        );
      } else if (apiType === "delete") {
        response = yield axiosMain.delete(createAPIUrl(baseURL, endpoint));
      } else if (apiType === "patch") {
        response = yield axiosMain.patch(
          createAPIUrl(baseURL, endpoint),
          payload
        );
      }
    } else {
      const authToken = yield localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      // eslint-disable-next-line no-lonely-if
      if (apiType === "get") {
        response = yield axiosMain.get(createAPIUrl(baseURL, endpoint), config);
      } else if (apiType === "post") {
        response = yield axiosMain.post(
          createAPIUrl(baseURL, endpoint),
          payload,
          config
        );
      } else if (apiType === "put") {
        response = yield axiosMain.put(
          createAPIUrl(baseURL, endpoint),
          payload,
          config
        );
      } else if (apiType === "delete") {
        response = yield axiosMain.delete(
          createAPIUrl(baseURL, endpoint),
          config
        );
      } else if (apiType === "patch") {
        response = yield axiosMain.patch(
          createAPIUrl(baseURL, endpoint),
          payload,
          config
        );
      }
    }
    if (
      response &&
      (response.status === 200 || response.status === 201) &&
      response.data
    ) {
      yield successHandler(response.data);
      // showToast && successToast(response.data);
    } else if (response.status === 422) {
      // show popup on status 422
      yield failHandler({ showPopup: true, msg: response.data.msg });
    } else if (response.status === 413) {
      // show popup on status 422
      yield failHandler("File exceeds the allowed size limit");
    } else if (
      response.data.data.earlyAccess &&
      response.data.data.forceUpdatePassword
    ) {
      // Redirect to reset
      yield failHandler({ redirectToReset: true, id: response.data.data._id });
    } else if (response !== undefined && response.status !== undefined) {
      if (
        response.data.msg !== undefined &&
        response.data.msg !== "" &&
        typeof response.data.msg === "string"
      ) {
        if (failHandlerType === "CUSTOM") {
          yield failHandler(response.data.msg, response.data);
        } else {
          yield put(failHandler(response.data.msg));
        }
      } else {
        if (failHandlerType === "CUSTOM") {
          yield failHandler("Server error! Please try again.");
        } else {
          yield put(failHandler("Server error! Please try again."));
        }
      }
    } else {
      if (failHandlerType === "CUSTOM") {
        yield failHandler("Something went wrong! Please try again.");
      } else {
        yield put(failHandler("Something went wrong! Please try again."));
      }
    }
  } catch (error) {
    if (
      error !== undefined &&
      error.response !== undefined &&
      error.response.status !== undefined
    ) {
      if (error.response.status === 400) {
        if (failHandlerType === "CUSTOM") {
          yield failHandler(error.response.data.msg);
        } else {
          yield put(failHandler(error.response.data.msg));
        }
      } else if (error.response.status === 401) {
        if (isLogoutCall) {
          successHandler({});
        } else {
          // yield put(logout({ logoutType: "manual" }));
        }
      } else if (
        error.response.data.msg !== undefined &&
        error.response.data.msg !== "" &&
        typeof error.response.data.msg === "string"
      ) {
        if (failHandlerType === "CUSTOM") {
          yield failHandler(error.response.data.msg);
        } else {
          yield put(failHandler(error.response.data.msg));
        }
      } else {
        if (failHandlerType === "CUSTOM") {
          yield failHandler("Server error! Please try again.");
        } else {
          yield put(failHandler("Server error! Please try again."));
        }
      }
    } else {
      if (failHandlerType === "CUSTOM") {
        yield failHandler("Something went wrong! Please try again.");
      } else {
        yield put(failHandler("Something went wrong! Please try again."));
      }
    }
  }
}

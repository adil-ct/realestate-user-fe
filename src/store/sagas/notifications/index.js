import { put } from "redux-saga/effects";
import errorHandler from "utils/errorHandler";
import {
  getNotificationsDataSuccess,
  getNotificationsDataFail,
  getNotificationsStart,
  markAsReadStart,
  markAsReadSuccess,
  markAsReadFail,
  getFilterNotificationDataSuccess,
  getFilterNotificationDataFail,
  getFilterNotificationStart
} from "store/actions";
import { USER_BASE_URL } from "constants/env";

export function* getAllNotifications() {
  yield put(getNotificationsStart());
  yield errorHandler({
    endpoint: `/user/notifications?page=1`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onGetAllNotificationSuccess(response) {
      const { data } = response;
      yield put(getNotificationsDataSuccess(data.notifications));
    },
    failHandler: yield function* onGetAllNotificationFail(response) {
      yield put(getNotificationsDataFail(response));
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

export function* getFilteredNotifications({payload}) {
  const {daysOld, page} = payload
  const daysOldParam = daysOld ? `&daysOld=${daysOld}` : "";
  yield put(getFilterNotificationStart());
  yield errorHandler({
    endpoint: `/user/notifications?page=${page}&limit=10${daysOldParam}`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onGetAllNotificationSuccess(response) {
      const { data } = response;
      yield put(getFilterNotificationDataSuccess(data));
    },
    failHandler: yield function* onGetAllNotificationFail(response) {
      yield put(getFilterNotificationDataFail(response));
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

export function* markAsRead(action) {
  const { notificationId, handleSuccess } = action.payload;
  yield put(markAsReadStart());
  yield errorHandler({
    endpoint: `/user/markAsRead/${notificationId}`,
    baseURL: USER_BASE_URL,
    successHandler: yield function* onMarkAsReadSuccess(response) {
      const { data } = response;
      yield put(markAsReadSuccess(data));
      handleSuccess && handleSuccess();
    },
    failHandler: yield function* onMarkAsReadFail(response) {
      yield put(markAsReadFail(response));
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
    token: true,
  });
}

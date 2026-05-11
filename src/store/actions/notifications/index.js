import {
    GET_NOTIFICATIONS_SAGA,
    GET_NOTIFICATIONS_SUCCESS,
    GET_NOTIFICATIONS_FAIL,
    ADD_ONE_NOTIFICATION,
    GET_NOTIFICATIONS_START,
    MARK_AS_READ_START,
    MARK_AS_READ_SAGA,
    MARK_AS_READ_SUCCESS,
    MARK_AS_READ_FAIL,
    GET_FILTERED_NOTIFICATIONS_SAGA,
    GET_FILTERED_NOTIFICATIONS_SUCCESS,
    GET_FILTERED_NOTIFICATIONS_START,
    GET_FILTERED_NOTIFICATIONS_FAIL,
} from "../../actionLabels";

  export const getNotificationsData = (payload) => ({
    type: GET_NOTIFICATIONS_SAGA,
    payload
  });

  export const getNotificationsStart = () => ({
    type: GET_NOTIFICATIONS_START,
  });
  
  export const getNotificationsDataSuccess = (payload) => ({
    type: GET_NOTIFICATIONS_SUCCESS,
    payload,
  });

  export const addOneNotification = (payload) => ({
    type: ADD_ONE_NOTIFICATION,
    payload,
  });
  
  export const getNotificationsDataFail = (payload) => ({
    type: GET_NOTIFICATIONS_FAIL,
    payload,
  });

  // Filterd notification
  export const getFilterNotificationData = (payload) => ({
    type: GET_FILTERED_NOTIFICATIONS_SAGA,
    payload
  });

  export const getFilterNotificationStart = () => ({
    type: GET_FILTERED_NOTIFICATIONS_START,
  });
  
  export const getFilterNotificationDataSuccess = (payload) => ({
    type: GET_FILTERED_NOTIFICATIONS_SUCCESS,
    payload,
  });
  
  export const getFilterNotificationDataFail = (payload) => ({
    type: GET_FILTERED_NOTIFICATIONS_FAIL,
    payload,
  });

  // Mark as Read

  export const markAsReadStart = () => ({
    type: MARK_AS_READ_START,
  });

  export const markAsReadSaga = (payload) => ({
    type: MARK_AS_READ_SAGA,
    payload,
  });

  export const markAsReadSuccess = (payload) => ({
    type: MARK_AS_READ_SUCCESS,
    payload,
  });

  export const markAsReadFail = (payload) => ({
    type: MARK_AS_READ_FAIL,
    payload,
  });
  
import * as actionLabels from "../../actionLabels";

export const initialState = {
  isLoading: {
    allNotifications: false,
    markAsRead: false,
  },
  topNotifications: [],
  notificationsList: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_NOTIFICATIONS_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          allNotifications: true,
        },
      };
    case actionLabels.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          allNotifications: false,
        },
        topNotifications: payload,
      };
    case actionLabels.ADD_ONE_NOTIFICATION:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          allNotifications: false,
        },
        notificationsList: {
          ...state.notificationsList,
          notifications: state?.notificationsList?.notifications?.length ? [payload, ...state.notificationsList.notifications] : [payload]
        },
        topNotifications: [payload, ...state.topNotifications],
      };
    case actionLabels.GET_NOTIFICATIONS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          allNotifications: false,
        },
      };

    //Filter notiifcation

    case actionLabels.GET_FILTERED_NOTIFICATIONS_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          allNotifications: true,
        },
      };
    case actionLabels.GET_FILTERED_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          allNotifications: false,
        },
        notificationsList: payload,
      };
    case actionLabels.GET_FILTERED_NOTIFICATIONS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          allNotifications: false,
        },
      };

    // Mark as read
    case actionLabels.MARK_AS_READ_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          markAsRead: true,
        },
      };
    case actionLabels.MARK_AS_READ_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          markAsRead: false,
        },
        notificationsList: {
          ...state.notificationsList,
          notifications: state.notificationsList.notifications.length
          ? state.notificationsList.notifications.map((item) => ({ ...item, isRead: true }))
          : []
        },
        topNotifications: state.topNotifications?.length
          ? state.topNotifications?.map((item) => ({ ...item, isRead: true }))
          : [],
      };
    case actionLabels.MARK_AS_READ_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          markAsRead: false,
        },
      };
    default:
      return state;
  }
};

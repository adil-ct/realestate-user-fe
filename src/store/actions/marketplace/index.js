import * as actionLabels from "../../actionLabels";

export const getPropertyDetailsStart = () => ({
  type: actionLabels.GET_PROPERTYDETAILS_START,
});

export const getPropertyDetailsSaga = (payload) => ({
  type: actionLabels.GET_PROPERTYDETAILS_SAGA,
  payload,
});

export const getPropertyDetailsSuccess = (payload) => ({
  type: actionLabels.GET_PROPERTYDETAILS_SUCCESS,
  payload,
});

export const getPropertyDetailsFail = (payload) => ({
  type: actionLabels.GET_PROPERTYDETAILS_FAIL,
  payload,
});

export const getPropertyListStart = () => ({
  type: actionLabels.GET_PROPERTYLIST_START,
});

export const getPropertyListSaga = (payload) => ({
  type: actionLabels.GET_PROPERTYLIST_SAGA,
  payload,
});

export const getPropertyListSuccess = (payload) => ({
  type: actionLabels.GET_PROPERTYLIST_SUCCESS,
  payload,
});

export const getPropertyListFail = (payload) => ({
  type: actionLabels.GET_PROPERTYLIST_FAIL,
  payload,
});

// similar properties
export const getSimilarPropertyListStart = () => ({
  type: actionLabels.GET_SIMILAR_PROPERTYLIST_START,
});

export const getSimilarPropertyListSaga = (payload) => ({
  type: actionLabels.GET_SIMILAR_PROPERTYLIST_SAGA,
  payload,
});

export const getSimilarPropertyListSuccess = (payload) => ({
  type: actionLabels.GET_SIMILAR_PROPERTYLIST_SUCCESS,
  payload,
});

export const getSimilarPropertyListFail = (payload) => ({
  type: actionLabels.GET_SIMILAR_PROPERTYLIST_FAIL,
  payload,
});

// Invest Property

export const investPropertyStart = () => ({
  type: actionLabels.INVEST_PROPERTY_START,
});

export const investPropertySaga = (payload) => ({
  type: actionLabels.INVEST_PROPERTY_SAGA,
  payload,
});

export const investPropertySuccess = (payload) => ({
  type: actionLabels.INVEST_PROPERTY_SUCCESS,
  payload,
});

export const investPropertyFail = (payload) => ({
  type: actionLabels.INVEST_PROPERTY_FAIL,
  payload,
});

// Update tokens sold
export const updateTokensSold = (payload) => ({
  type: actionLabels.UPDATE_TOKENS_SOLD,
  payload,
});

export const getReserveTransactionsStart = () => ({
  type: actionLabels.GET_RESERVE_TRANSACTIONS_START,
});

export const getReserveTransactionsSaga = (payload) => ({
  type: actionLabels.GET_RESERVE_TRANSACTIONS_SAGA,
  payload,
});

export const getReserveTransactionsSuccess = (payload) => ({
  type: actionLabels.GET_RESERVE_TRANSACTIONS_SUCCESS,
  payload,
});

export const getReserveTransactionsFail = (payload) => ({
  type: actionLabels.GET_RESERVE_TRANSACTIONS_FAIL,
  payload,
});

/* eslint-disable no-case-declarations */
import * as actionLabels from "../../actionLabels";

export const initialState = {
  isLoading: false,
  loader: {
    investProperty: false,
    reserveTxns: false,
  },
  propertyData: {},
  propertyList: [],
  reserveTxns: [],
  investProperty: {},
  similarPropertyList: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_PROPERTYDETAILS_START:
      return {
        ...state,
        isLoading: true,
        propertyData: {},
      };
    case actionLabels.GET_PROPERTYDETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        propertyData: payload,
      };
    case actionLabels.GET_PROPERTYDETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case actionLabels.GET_PROPERTYLIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionLabels.GET_PROPERTYLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        propertyList: payload,
      };
    case actionLabels.GET_PROPERTYLIST_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    // Similar Properties
    case actionLabels.GET_SIMILAR_PROPERTYLIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionLabels.GET_SIMILAR_PROPERTYLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        similarPropertyList: payload,
      };
    case actionLabels.GET_SIMILAR_PROPERTYLIST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    // Invest property
    case actionLabels.INVEST_PROPERTY_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          investProperty: true,
        },
      };
    case actionLabels.INVEST_PROPERTY_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          investProperty: false,
        },
        investProperty: payload,
      };
    case actionLabels.INVEST_PROPERTY_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          investProperty: false,
        },
      };
    // Update tokens sold
    case actionLabels.UPDATE_TOKENS_SOLD:
      const updatedData = state.propertyList.map((item) => {
        if (item._id === payload._property) {
          return {
            ...item,
            tokensSold: item.tokensSold + payload.tokens,
          };
        } else return item;
      });
      return {
        ...state,
        isLoading: false,
        propertyList: updatedData,
      };
    case actionLabels.GET_RESERVE_TRANSACTIONS_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          reserveTxns: true,
        },
      };
    case actionLabels.GET_RESERVE_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          reserveTxns: false,
        },
        reserveTxns: payload,
      };
    case actionLabels.GET_RESERVE_TRANSACTIONS_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          reserveTxns: false,
        },
      };
    default:
      return state;
  }
};

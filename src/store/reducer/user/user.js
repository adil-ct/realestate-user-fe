import * as actionLabels from "../../actionLabels";

export const initialState = {
  isLoading: {
    userProfile: false,
    setPersonalDetails: false,
    verifyKYC: false,
    walletAddress: false,
    moonpay: false,
    paymentMethods: false,
    refreeDetails: false,
    rewardTransactions: false,
    rewardSingleTransaction: false,
  },
  email: '',
  userProfile: {},
  walletAddress: {},
  moonpay: {},
  paymentMethods: [],
  rewardTransactions: {},
  rewardSingleTransaction: {},
  refreeDetails: {}
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Entered email on home page
    case actionLabels.SET_EMAIL_ENTERED:
      return {
        ...state,
        email: payload
      };
    //Set User Profile
    case actionLabels.SET_PERSONAL_DETAILS_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          setPersonalDetails: true,
        },
      };
    case actionLabels.SET_PERSONAL_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          setPersonalDetails: false,
        },
      };
    case actionLabels.SET_PERSONAL_DETAILS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          setPersonalDetails: false,
        },
      };
    case actionLabels.GET_WALLET_ADDRESS_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          walletAddress: true,
        },
      };
    case actionLabels.GET_WALLET_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          walletAddress: false,
        },
        walletAddress: payload,
      };
    case actionLabels.GET_WALLET_ADDRESS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          walletAddress: false,
        },
      };
    case actionLabels.GET_MOONPAY_URL_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          moonpay: true,
        },
      };
    case actionLabels.GET_MOONPAY_URL_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          moonpay: false,
        },
        moonpay: payload,
      };
    case actionLabels.GET_MOONPAY_URL_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          moonpay: false,
        },
      };
    case actionLabels.GET_PAYMENT_METHODS_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          paymentMethods: true,
        },
      };
    case actionLabels.GET_PAYMENT_METHODS_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          paymentMethods: false,
        },
        paymentMethods: payload,
      };
    case actionLabels.GET_PAYMENT_METHODS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          paymentMethods: false,
        },
      };
      case actionLabels.GET_REFREE_DETAILS_START:
        return {
          ...state,
          isLoading: {
            ...state.isLoading,
            refreeDetails: true,
          },
        };
      case actionLabels.GET_REFREE_DETAILS_SUCCESS:
        return {
          ...state,
          isLoading: {
            ...state.isLoading,
            refreeDetails: false,
          },
          refreeDetails: payload,
        };
      case actionLabels.GET_REFREE_DETAILS_FAIL:
        return {
          ...state,
          isLoading: {
            ...state.isLoading,
            refreeDetails: false,
          },
        };
        case actionLabels.GET_REWARD_TRANSACTIONS_START:
          return {
            ...state,
            isLoading: {
              ...state.isLoading,
              rewardTransactions: true,
            },
          };
        case actionLabels.GET_REWARD_TRANSACTIONS_SUCCESS:
          return {
            ...state,
            isLoading: {
              ...state.isLoading,
              rewardTransactions: false,
            },
            rewardTransactions: payload,
          };
        case actionLabels.GET_REWARD_TRANSACTIONS_FAIL:
          return {
            ...state,
            isLoading: {
              ...state.isLoading,
              rewardTransactions: false,
            },
          };
          case actionLabels.GET_REWARD_SINGLE_TRANSACTION_START:
          return {
            ...state,
            isLoading: {
              ...state.isLoading,
              rewardSingleTransaction: true,
            },
          };
        case actionLabels.GET_REWARD_SINGLE_TRANSACTION_SUCCESS:
          return {
            ...state,
            isLoading: {
              ...state.isLoading,
              rewardSingleTransaction: false,
            },
            rewardSingleTransaction: payload,
          };
        case actionLabels.GET_REWARD_SINGLE_TRANSACTION_FAIL:
          return {
            ...state,
            isLoading: {
              ...state.isLoading,
              rewardSingleTransaction: false,
            },
          };
    default:
      return state;
  }
};

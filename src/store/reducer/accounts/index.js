import {
  GET_PLAID_TOKEN_START,
  GET_PLAID_TOKEN_SUCCESS,
  GET_PLAID_TOKEN_FAIL,
  ADD_ACH_BANK_ACCOUNT_START,
  ADD_ACH_BANK_ACCOUNT_SUCCESS,
  ADD_ACH_BANK_ACCOUNT_FAIL,
  ADD_WIRE_BANK_ACCOUNT_START,
  ADD_WIRE_BANK_ACCOUNT_SUCCESS,
  ADD_WIRE_BANK_ACCOUNT_FAIL,
  GET_LIST_OF_BANK_ACCOUNT_START,
  GET_LIST_OF_BANK_ACCOUNT_SUCCESS,
  GET_LIST_OF_BANK_ACCOUNT_FAIL,
  ADD_CARD_START,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAIL,
  GET_LIST_OF_CARDS_START,
  GET_LIST_OF_CARDS_SUCCESS,
  GET_LIST_OF_CARDS_FAIL,
  DEPOSIT_CURRENCY_START,
  DEPOSIT_CURRENCY_SUCCESS,
  DEPOSIT_CURRENCY_FAIL,
  WITHDRAW_CURRENCY_START,
  WITHDRAW_CURRENCY_SUCCESS,
  WITHDRAW_CURRENCY_FAIL,
  GET_WALLET_BALANCE_START,
  GET_WALLET_BALANCE_SUCCESS,
  GET_WALLET_BALANCE_FAIL,
  DELETE_CARD_START,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAIL,
  GET_BANK_DETAILS_START,
  GET_BANK_DETAILS_SUCCESS,
  GET_BANK_DETAILS_FAIL,
  GET_LIST_OF_TRANSACTIONS_START,
  GET_LIST_OF_TRANSACTIONS_SUCCESS,
  GET_LIST_OF_TRANSACTIONS_FAIL,
  GET_SERVICE_FEES_START,
  GET_SERVICE_FEES_SUCCESS,
  GET_SERVICE_FEES_FAIL,
  GET_PF_OVERVIEW_SAGA,
  GET_PF_OVERVIEW_SUCCESS,
  GET_PF_OVERVIEW_FAIL,
  GET_PF_LIST_SAGA,
  GET_PF_LIST_SUCCESS,
  GET_PF_LIST_FAIL,
  GET_PF_ASSET_SAGA,
  GET_PF_ASSET_SUCCESS,
  GET_PF_ASSET_FAIL,
  GET_PROPERTY_TXN_SAGA,
  GET_PROPERTY_TXN_SUCCESS,
  GET_PROPERTY_TXN_FAIL,
  GET_WIRE_INSTRUCTION_START,
  GET_WIRE_INSTRUCTION_SUCCESS,
  GET_WIRE_INSTRUCTION_FAIL,
  FILE_UPLOAD_START,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAIL,
  DEPOSIT_RENT_START,
  DEPOSIT_RENT_SUCCESS,
  DEPOSIT_RENT_FAIL,
  GET_RENT_TXN_START,
  GET_RENT_TXN_SUCCESS,
  GET_RENT_TXN_FAIL,
} from "../../actionLabels";

export const initialState = {
  isLoading: {
    plaidLinkToken: false,
    addACHBankAccount: false,
    addWireBankAccount: false,
    getBankAccountList: false,
    addCard: false,
    getCardsList: false,
    depositCurrency: false,
    withdrawCurrency: false,
    walletBalance: false,
    deleteCard: false,
    getBankDetails: true,
    getTransactionsList: false,
    getServiceFees: false,
    pfOverviewData: false,
    pfListData: false,
    pfAssetData: false,
    propertyTxnsList: false,
    getWireInstruction: false,
    fileUpload: false,
    depositRent: false,
    rentTxn: false,
  },
  plaidLinkToken: "",
  plaidCreatedAt: "",
  addACHBankAccountData: {},
  addWireBankAccountData: {},
  linkedBankAccounts: {},
  addCardData: {},
  linkedCards: { data: [] },
  depositCurrencyData: {},
  withdrawCurrencyData: {},
  deposites: [],
  walletBalance: {},
  deleteCardData: {},
  getBankDetailsData: {},
  transactions: [],
  serviceFees: [],
  pfOverviewData: {
    propertyData: [],
  },
  pfListData: [],
  pfAssetData: {},
  propertyTxnsList: {},
  wireInstruction: {},
  rentTxn: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Get Plaid Link Token
    case GET_PLAID_TOKEN_START:
      return {
        ...state,
        plaidLinkToken: "",
        plaidCreatedAt: "",
        isLoading: {
          ...state.isLoading,
          plaidLinkToken: true,
        },
      };
    case GET_PLAID_TOKEN_SUCCESS: {
      return {
        ...state,
        plaidLinkToken: payload.data?.linkTokenResponse?.link_token,
        plaidCreatedAt: payload.data?.linkTokenResponse?.expiration,
        isLoading: {
          ...state.isLoading,
          plaidLinkToken: false,
        },
      };
    }
    case GET_PLAID_TOKEN_FAIL: {
      return {
        ...state,
        plaidLinkToken: "",
        plaidCreatedAt: "",
        isLoading: {
          ...state.isLoading,
          plaidLinkToken: false,
        },
      };
    }

    // Add ACH Bank Account
    case ADD_ACH_BANK_ACCOUNT_START:
      return {
        ...state,
        addACHBankAccountData: {},
        isLoading: {
          ...state.isLoading,
          addACHBankAccount: true,
        },
      };
    case ADD_ACH_BANK_ACCOUNT_SUCCESS: {
      return {
        ...state,
        addACHBankAccountData: payload.data,
        isLoading: {
          ...state.isLoading,
          addACHBankAccount: false,
        },
      };
    }
    case ADD_ACH_BANK_ACCOUNT_FAIL: {
      return {
        ...state,
        addACHBankAccountData: {},
        isLoading: {
          ...state.isLoading,
          addACHBankAccount: false,
        },
      };
    }

    // Add WIRE Bank Account
    case ADD_WIRE_BANK_ACCOUNT_START:
      return {
        ...state,
        addWireBankAccountData: {},
        isLoading: {
          ...state.isLoading,
          addWireBankAccount: true,
          getBankAccountList: true,
        },
      };
    case ADD_WIRE_BANK_ACCOUNT_SUCCESS: {
      return {
        ...state,
        addWireBankAccountData: payload.data,
        isLoading: {
          ...state.isLoading,
          addWireBankAccount: false,
          getBankAccountList: false,
        },
        linkedBankAccounts: {
          ...state.linkedBankAccounts,
          banks: [...state.linkedBankAccounts.banks, payload.data],
        },
      };
    }
    case ADD_WIRE_BANK_ACCOUNT_FAIL: {
      return {
        ...state,
        addWireBankAccountData: {},
        isLoading: {
          ...state.isLoading,
          addWireBankAccount: false,
          getBankAccountList: false,
        },
      };
    }

    // Get list of bank account
    case GET_LIST_OF_BANK_ACCOUNT_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getBankAccountList: true,
        },
      };
    case GET_LIST_OF_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getBankAccountList: false,
        },
        linkedBankAccounts: payload,
      };
    case GET_LIST_OF_BANK_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getBankAccountList: false,
        },
      };

    // Add WIRE Bank Account
    case ADD_CARD_START:
      return {
        ...state,
        addCardData: {},
        isLoading: {
          ...state.isLoading,
          addCard: true,
          getCardsList: true,
        },
      };
    case ADD_CARD_SUCCESS: {
      const { billingDetails, expMonth, expYear, last4, network, status, id } =
        payload.data;
      const response = {
        lastFour: last4,
        cardType: network,
        expMonth,
        expYear,
        cardId: id,
        accountHolder: billingDetails.name,
        status,
      };
      return {
        ...state,
        addCardData: payload.data,
        isLoading: {
          ...state.isLoading,
          addCard: false,
          getCardsList: false,
        },
        linkedCards: [...state.linkedCards, response],
      };
    }
    case ADD_CARD_FAIL: {
      return {
        ...state,
        addCardData: {},
        isLoading: {
          ...state.isLoading,
          addCard: false,
          getCardsList: false,
        },
      };
    }

    // Get list of cards
    case GET_LIST_OF_CARDS_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getCardsList: true,
        },
      };
    case GET_LIST_OF_CARDS_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getCardsList: false,
        },
        linkedCards: payload,
      };
    case GET_LIST_OF_CARDS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getCardsList: false,
        },
      };

    // Deposit currency using bank account
    case DEPOSIT_CURRENCY_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          depositCurrency: true,
        },
      };
    case DEPOSIT_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          depositCurrency: false,
        },
        depositCurrencyData: payload,
      };
    case DEPOSIT_CURRENCY_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          depositCurrency: false,
        },
      };

    // Withdraw currency using bank account
    case WITHDRAW_CURRENCY_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          withdrawCurrency: true,
        },
      };
    case WITHDRAW_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          withdrawCurrency: false,
        },
        withdrawCurrencyData: payload,
      };
    case WITHDRAW_CURRENCY_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          withdrawCurrency: false,
        },
      };

    // Get Wallet Balance
    case GET_WALLET_BALANCE_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          walletBalance: true,
        },
      };
    case GET_WALLET_BALANCE_SUCCESS: {
      const { balance, ...rest } = payload;
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          walletBalance: false,
        },
        walletBalance: {
          availableBalance: balance,
          balance,
          ...rest,
        },
      };
    }
    case GET_WALLET_BALANCE_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          walletBalance: false,
        },
      };

    // Delete Card
    case DELETE_CARD_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          deleteCard: true,
        },
      };
    case DELETE_CARD_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          deleteCard: false,
        },
        deleteCardData: payload,
      };
    }
    case DELETE_CARD_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          deleteCard: false,
        },
      };

    // Get Bank Details
    case GET_BANK_DETAILS_START: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getBankDetails: true,
        },
      };
    }
    case GET_BANK_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getBankDetails: false,
        },
        getBankDetailsData: payload,
      };
    }
    case GET_BANK_DETAILS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getBankDetails: false,
        },
      };

    // Get list of transactions
    case GET_LIST_OF_TRANSACTIONS_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getTransactionsList: true,
        },
      };
    case GET_LIST_OF_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getTransactionsList: false,
        },
        transactions: payload,
      };
    case GET_LIST_OF_TRANSACTIONS_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getTransactionsList: false,
        },
      };

    // Get Limits & Service fess
    case GET_SERVICE_FEES_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getServiceFees: true,
        },
      };
    case GET_SERVICE_FEES_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getServiceFees: false,
        },
        serviceFees: payload,
      };
    case GET_SERVICE_FEES_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getServiceFees: false,
        },
      };
    // Portfolio Overview
    case GET_PF_OVERVIEW_SAGA:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfOverviewData: true,
        },
        // pfOverviewData: {},
      };
    case GET_PF_OVERVIEW_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfOverviewData: false,
        },
        pfOverviewData: payload,
      };
    case GET_PF_OVERVIEW_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfOverviewData: false,
        },
        pfOverviewData: {},
      };
    case GET_PF_LIST_SAGA:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfListData: true,
        },
        pfListData: [],
      };
    case GET_PF_LIST_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfListData: false,
        },
        pfListData: payload,
      };
    case GET_PF_LIST_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfListData: false,
        },
        pfListData: [],
      };
    case GET_PF_ASSET_SAGA:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfAssetData: true,
        },
        pfAssetData: {},
      };
    case GET_PF_ASSET_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfAssetData: false,
        },
        pfAssetData: payload,
      };
    case GET_PF_ASSET_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          pfAssetData: false,
        },
        pfAssetData: {},
      };
    case GET_PROPERTY_TXN_SAGA:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          propertyTxnsList: true,
        },
        propertyTxnsList: {},
      };
    case GET_PROPERTY_TXN_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          propertyTxnsList: false,
        },
        propertyTxnsList: payload,
      };
    case GET_PROPERTY_TXN_FAIL:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getWireInstruction: false,
        },
        wireInstruction: {},
      };

    // Get Plaid Link Token
    case GET_WIRE_INSTRUCTION_START:
      return {
        ...state,
        wireInstruction: {},
        isLoading: {
          ...state.isLoading,
          getWireInstruction: true,
        },
      };
    case GET_WIRE_INSTRUCTION_SUCCESS: {
      return {
        ...state,
        wireInstruction: payload.data.data,
        isLoading: {
          ...state.isLoading,
          getWireInstruction: false,
        },
      };
    }
    case GET_WIRE_INSTRUCTION_FAIL: {
      return {
        ...state,
        wireInstruction: {},
        isLoading: {
          ...state.isLoading,
          getWireInstruction: false,
        },
      };
    }

    // File upload
    case FILE_UPLOAD_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fileUpload: true,
        },
      };
    case FILE_UPLOAD_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fileUpload: false,
        },
      };
    }
    case FILE_UPLOAD_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fileUpload: false,
        },
      };
    }

    // Deposit rent
    case DEPOSIT_RENT_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          depositRent: true,
        },
      };
    case DEPOSIT_RENT_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          depositRent: false,
        },
      };
    }
    case DEPOSIT_RENT_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          depositRent: false,
        },
      };
    }

    // Deposit rent
    case GET_RENT_TXN_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          rentTxn: true,
        },
      };
    case GET_RENT_TXN_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          rentTxn: false,
        },
        rentTxn: payload,
      };
    }
    case GET_RENT_TXN_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          rentTxn: false,
        },
      };
    }

    default:
      return state;
  }
};

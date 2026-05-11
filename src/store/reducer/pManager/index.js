/* eslint-disable no-case-declarations */
import * as actionLabels from "../../actionLabels";

export const initialState = {
  isLoading: false,
  loader: {
    getProposalList: false,
    getProposalDetails: false,
    getProposalOverview: false,
    createProposal: false,
    uploadDocument: false,
    createTransaction: false,
    createVote: false,
    getCoownerList: false,
  },
  proposalDetails: {},
  proposalOverview: {},
  proposalList: [],
  createProposal: {},
  uploadDocument: {},
  createTransaction: {},
  createVote: {},
  coownerList: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_PROPOSAL_LIST_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalList: true,
        },
      };
    case actionLabels.GET_PROPOSAL_LIST_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalList: false,
        },
        proposalList: payload,
      };
    case actionLabels.GET_PROPOSAL_LIST_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalList: false,
        },
      };
    case actionLabels.GET_PROPOSAL_DETAILS_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalDetails: true,
        },
      };
    case actionLabels.GET_PROPOSAL_DETAILS_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalDetails: false,
        },
        proposalDetails: payload,
      };
    case actionLabels.GET_PROPOSAL_DETAILS_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalDetails: false,
        },
      };
    case actionLabels.GET_PROPOSAL_OVERVIEW_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalOverview: true,
        },
      };
    case actionLabels.GET_PROPOSAL_OVERVIEW_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalOverview: false,
        },
        proposalOverview: payload,
      };
    case actionLabels.GET_PROPOSAL_OVERVIEW_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          getProposalOverview: false,
        },
      };
    case actionLabels.CREATE_PROPOSAL_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          createProposal: true,
        },
      };
    case actionLabels.CREATE_PROPOSAL_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          createProposal: false,
        },
        createProposal: payload,
      };
    case actionLabels.CREATE_PROPOSAL_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          createProposal: false,
        },
      };

    case actionLabels.UPLOAD_DOCUMENT_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          uploadDocument: true,
        },
      };
    case actionLabels.UPLOAD_DOCUMENT_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          uploadDocument: false,
        },
        uploadDocument: payload,
      };
    case actionLabels.UPLOAD_DOCUMENT_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          uploadDocument: false,
        },
      };

    case actionLabels.CREATE_TRANSACTION_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          createTransaction: true,
        },
      };
    case actionLabels.CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          createTransaction: false,
        },
        createTransaction: payload,
      };
    case actionLabels.CREATE_TRANSACTION_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          createTransaction: false,
        },
      };

    case actionLabels.CREATE_VOTE_START:
      return {
        ...state,
        loader: {
          ...state.loader,
          createVote: true,
        },
      };
    case actionLabels.CREATE_VOTE_SUCCESS:
      return {
        ...state,
        loader: {
          ...state.loader,
          createVote: false,
        },
        createVote: payload,
      };
    case actionLabels.CREATE_VOTE_FAIL:
      return {
        ...state,
        loader: {
          ...state.loader,
          createVote: false,
        },
      };

      case actionLabels.GET_COOWNERS_LIST_START:
        return {
          ...state,
          loader: {
            ...state.loader,
            getCoownerList: true,
          },
        };
      case actionLabels.GET_COOWNERS_LIST_SUCCESS:
        return {
          ...state,
          loader: {
            ...state.loader,
            getCoownerList: false,
          },
          coownerList: payload,
        };
      case actionLabels.GET_COOWNERS_LIST_FAIL:
        return {
          ...state,
          loader: {
            ...state.loader,
            getCoownerList: false,
          },
        };

    default:
      return state;
  }
};

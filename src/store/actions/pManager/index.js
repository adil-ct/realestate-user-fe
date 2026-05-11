import * as actionLabels from "../../actionLabels";

export const getProposalListStart = () => ({
  type: actionLabels.GET_PROPOSAL_LIST_START,
});

export const getProposalListSaga = (payload) => ({
  type: actionLabels.GET_PROPOSAL_LIST_SAGA,
  payload,
});

export const getProposalListSuccess = (payload) => ({
  type: actionLabels.GET_PROPOSAL_LIST_SUCCESS,
  payload,
});

export const getProposalListFail = (payload) => ({
  type: actionLabels.GET_PROPOSAL_LIST_FAIL,
  payload,
});

export const getProposalDetailsStart = () => ({
  type: actionLabels.GET_PROPOSAL_DETAILS_START,
});

export const getProposalDetailsSaga = (payload) => ({
  type: actionLabels.GET_PROPOSAL_DETAILS_SAGA,
  payload,
});

export const getProposalDetailsSuccess = (payload) => ({
  type: actionLabels.GET_PROPOSAL_DETAILS_SUCCESS,
  payload,
});

export const getProposalDetailsFail = (payload) => ({
  type: actionLabels.GET_PROPOSAL_DETAILS_FAIL,
  payload,
});

export const getProposalOverviewStart = () => ({
  type: actionLabels.GET_PROPOSAL_OVERVIEW_START,
});

export const getProposalOverviewSaga = (payload) => ({
  type: actionLabels.GET_PROPOSAL_OVERVIEW_SAGA,
  payload,
});

export const getProposalOverviewSuccess = (payload) => ({
  type: actionLabels.GET_PROPOSAL_OVERVIEW_SUCCESS,
  payload,
});

export const getProposalOverviewFail = (payload) => ({
  type: actionLabels.GET_PROPOSAL_OVERVIEW_FAIL,
  payload,
});

export const createProposalStart = () => ({
  type: actionLabels.CREATE_PROPOSAL_START,
});

export const createProposalSaga = (payload) => ({
  type: actionLabels.CREATE_PROPOSAL_SAGA,
  payload,
});

export const createProposalSuccess = (payload) => ({
  type: actionLabels.CREATE_PROPOSAL_SUCCESS,
  payload,
});

export const createProposalFail = (payload) => ({
  type: actionLabels.CREATE_PROPOSAL_FAIL,
  payload,
});

export const uploadDocumentStart = () => ({
  type: actionLabels.UPLOAD_DOCUMENT_START,
});

export const uploadDocumentSaga = (payload) => ({
  type: actionLabels.UPLOAD_DOCUMENT_SAGA,
  payload,
});

export const uploadDocumentSuccess = (payload) => ({
  type: actionLabels.UPLOAD_DOCUMENT_SUCCESS,
  payload,
});

export const uploadDocumentFail = (payload) => ({
  type: actionLabels.UPLOAD_DOCUMENT_FAIL,
  payload,
});

export const createTransactionStart = () => ({
  type: actionLabels.CREATE_TRANSACTION_START,
});

export const createTransactionSaga = (payload) => ({
  type: actionLabels.CREATE_TRANSACTION_SAGA,
  payload,
});

export const createTransactionSuccess = (payload) => ({
  type: actionLabels.CREATE_TRANSACTION_SUCCESS,
  payload,
});

export const createTransactionFail = (payload) => ({
  type: actionLabels.CREATE_TRANSACTION_FAIL,
  payload,
});

export const createVoteStart = () => ({
  type: actionLabels.CREATE_VOTE_START,
});

export const createVoteSaga = (payload) => ({
  type: actionLabels.CREATE_VOTE_SAGA,
  payload,
});

export const createVoteSuccess = (payload) => ({
  type: actionLabels.CREATE_VOTE_SUCCESS,
  payload,
});

export const createVoteFail = (payload) => ({
  type: actionLabels.CREATE_VOTE_FAIL,
  payload,
});

export const getCoownerListStart = () => ({
  type: actionLabels.GET_COOWNERS_LIST_START,
});

export const getCoownerListSaga = (payload) => ({
  type: actionLabels.GET_COOWNERS_LIST_SAGA,
  payload,
});

export const getCoownerListSuccess = (payload) => ({
  type: actionLabels.GET_COOWNERS_LIST_SUCCESS,
  payload,
});

export const getCoownerListFail = (payload) => ({
  type: actionLabels.GET_COOWNERS_LIST_FAIL,
  payload,
});

import * as yup from "yup";
import {
  VOTING_DATE_REQUIRED,
  VOTING_OPTION_REQUIRED,
  DESCRIPTION_REQUIRED,
  SUMMARY_REQUIRED,
  TITLE_REQUIRED,
  MAX_TITLE_LENGTH,
} from "constants/errorConstants";

const initiateTransactionValidation = yup.object({
  title: yup.string().max(75, MAX_TITLE_LENGTH).required(TITLE_REQUIRED),
  votingStartDate: yup.string().nullable().required(VOTING_DATE_REQUIRED),
  votingEndDate: yup.string().nullable().required(VOTING_DATE_REQUIRED),
  votingOption1: yup.string().required(VOTING_OPTION_REQUIRED),
  votingOption2: yup.string().required(VOTING_OPTION_REQUIRED),
  summary: yup.string().required(SUMMARY_REQUIRED),
  description: yup.string().required(DESCRIPTION_REQUIRED),
});

export default initiateTransactionValidation;

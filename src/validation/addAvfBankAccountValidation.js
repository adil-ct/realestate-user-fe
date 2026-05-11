import * as yup from "yup";
import {
  PLAID_TOKEN_REQUIRED,
  ACCOUNT_TYPE_REQUIRED,
} from "constants/errorConstants";

const addAvfBankAccountValidation = yup.object({
  publicToken: yup.string().required(PLAID_TOKEN_REQUIRED),
  bankAccountType: yup.string().required(ACCOUNT_TYPE_REQUIRED),
});

export default addAvfBankAccountValidation;

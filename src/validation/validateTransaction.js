import * as yup from "yup";
import {
  TRANSACTION_TYPE_REQUIRED,
  WITHDRAW_AMOUNT_VALUE_REQUIRED,
} from "constants/errorConstants";

const initiateTransactionValidation = yup.object({
  transactionType: yup.string().required(TRANSACTION_TYPE_REQUIRED),
  withdrawAmount: yup.string().required(WITHDRAW_AMOUNT_VALUE_REQUIRED),
});

export default initiateTransactionValidation;

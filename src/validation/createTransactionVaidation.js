import * as yup from "yup";
import {
  DESCRIPTION_REQUIRED,
} from "constants/errorConstants";

const initiateTransactionValidation = yup.object({
  description: yup.string().required(DESCRIPTION_REQUIRED),
});

export default initiateTransactionValidation;

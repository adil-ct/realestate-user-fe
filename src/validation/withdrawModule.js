import * as yup from "yup";
import {
    WITHDRAW_AMOUNT_REQUIRED,
    WITHDRAW_ACCOUNT_REQUIRED

} from "constants/errorConstants";

const addWireBankAccountValidation = yup.object({
  withdrawAccount:yup.string().required(WITHDRAW_AMOUNT_REQUIRED),
  withdrawAmount:yup.string().required(WITHDRAW_ACCOUNT_REQUIRED),
 
  })


export default addWireBankAccountValidation;
import * as yup from "yup";
import {
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
  USERNAME_LENGTH,
  ACCOUNT_NUMBER_VALID,
  ACCOUNT_NUMBER_REQUIRED,
  ROUTING_NUMBER_REQUIRED,
  COUNTRY_REQUIRED,
} from "constants/errorConstants";

const addBankAccountValidation = yup.object({
  firstName: yup.string().max(256, USERNAME_LENGTH).trim().required(FIRSTNAME_REQUIRED),
  lastName: yup.string().max(256, USERNAME_LENGTH).trim().required(LASTNAME_REQUIRED),
  accountNumber: yup
    .string()
    .min(6, ACCOUNT_NUMBER_VALID)
    .max(35, ACCOUNT_NUMBER_VALID)
    .required(ACCOUNT_NUMBER_REQUIRED),
  routingNumber: yup.string().required(ROUTING_NUMBER_REQUIRED),
  bankAddress: yup.object().shape({
    country: yup.string().required(COUNTRY_REQUIRED),
  }),
});

export default addBankAccountValidation;

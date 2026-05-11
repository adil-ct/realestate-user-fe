import * as yup from "yup";
import {
  BANK_ACCOUNT_NUMBER_REQUIRED,
  BANK_ROUTING_NUMBER_REQUIRED,
  BANK_NAME_REQUIRED,
  WIRE_BANK_COUNTRY_REQUIRED,
  WIRE_BANK_CITY_REQUIRED,
  WIRE_ACCOUNT_TYPE_REQUIRED,
  SET_ACCOUNT_NUMBER_NOT_MATCH,
  SET_ROUTING_NUMBER_NOT_MATCH,
  RE_BANK_ACCOUNT_NUMBER_REQUIRED,
  RE_BANK_ROUTING_NUMBER_REQUIRED,
} from "constants/errorConstants";

const addWireBankAccountValidation = yup.object({
  bankType: yup.string().required(WIRE_ACCOUNT_TYPE_REQUIRED),
  accountNumber: yup.string().required(BANK_ACCOUNT_NUMBER_REQUIRED),
  routingNumber: yup.string().when("bankType", {
    is: "NONUS-IBAN",
    then: yup.string(),
    otherwise: yup.string().required(BANK_ROUTING_NUMBER_REQUIRED),
  }),
  reAccountNumber: yup
    .string()
    .oneOf([yup.ref("accountNumber"), null], SET_ACCOUNT_NUMBER_NOT_MATCH)
    .required(RE_BANK_ACCOUNT_NUMBER_REQUIRED),
  reRoutingNumber: yup
    .string()
    .oneOf([yup.ref("routingNumber"), null], SET_ROUTING_NUMBER_NOT_MATCH)
    .when("bankType", {
      is: "NONUS-IBAN",
      then: yup.string(),
      otherwise: yup.string().required(RE_BANK_ROUTING_NUMBER_REQUIRED),
    }),
  bankName: yup.string().when("bankType", {
    is: "NONUS-NIBAN",
    then: yup.string().required(BANK_NAME_REQUIRED),
    otherwise: yup.string(),
  }),
  country: yup.string().required(WIRE_BANK_COUNTRY_REQUIRED),
  city: yup.string().when("bankType", {
    is: "USBANK",
    then: yup.string(),
    otherwise: yup.string().required(WIRE_BANK_CITY_REQUIRED),
  }),
});

export { addWireBankAccountValidation };

import * as yup from "yup";
import {
  COUNTRY_REQUIRED,
  STATE_REQUIRED,
  CITY_REQUIRED,
  PINCODE_TYPE_NUMBER,
  PINCODE_REQUIRED,
  ADDRESS_REQUIRED,
  TC_REQUIRED,
} from "constants/errorConstants";

const addBillingDetailsValidation = yup.object({
  billingDetails: yup.object().shape({
    country: yup.string().required(COUNTRY_REQUIRED),
    city: yup.string().required(CITY_REQUIRED),
    line1: yup.string().required(ADDRESS_REQUIRED),
    district: yup.string().required(STATE_REQUIRED),
    postalCode: yup.number().required(PINCODE_REQUIRED).typeError(PINCODE_TYPE_NUMBER),
  }),
  tc: yup.bool().oneOf([true], TC_REQUIRED),
});

export default addBillingDetailsValidation;

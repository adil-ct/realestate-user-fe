import * as yup from "yup";
import {
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
  DISTRICT_COUNTRY_REQUIRED,
  BANK_ZIP_CODE_REQUIRED,
  BANK_ADDRESS_REQUIRED,
  BILL_COUNTRY_REQUIRED,
  BILL_CITY_REQUIRED,
} from "constants/errorConstants";

const addBillingDetailValidation = yup.object({
  firstName: yup.string().required(FIRSTNAME_REQUIRED),
  lastName: yup.string().required(LASTNAME_REQUIRED),
  district: yup.string().required(DISTRICT_COUNTRY_REQUIRED),
  postalCode: yup.string().required(BANK_ZIP_CODE_REQUIRED),
  line1: yup.string().required(BANK_ADDRESS_REQUIRED),
  line2: yup.string(),
  country: yup.string().required(BILL_COUNTRY_REQUIRED),
  city: yup.string().required(BILL_CITY_REQUIRED),
});

export default addBillingDetailValidation;

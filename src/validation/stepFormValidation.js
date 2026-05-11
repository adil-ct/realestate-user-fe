import * as yup from "yup";


import {
  SSN_REQUIRED,
  DOB_REQUIRED,
  COUNTRY_REQUIRED,
  PINCODE_TYPE_NUMBER,
  INVALID_DATE,
  STATE_REQUIRED,
  CITY_REQUIRED,
  PINCODE_REQUIRED,
  ADDRESS_REQUIRED,
} from "constants/errorConstants";
import { MIN_ADDRESS_LENGTH } from "constants/errorConstants";

export const addressValidation = yup.object({
  country: yup.object().required(COUNTRY_REQUIRED),
  state: yup.object().required(STATE_REQUIRED),
  city: yup.string().required(CITY_REQUIRED),
  postalCode: yup
    .string()    
    .required(PINCODE_REQUIRED)
    .typeError(PINCODE_TYPE_NUMBER),
  address1: yup.string().min(6, MIN_ADDRESS_LENGTH).required(ADDRESS_REQUIRED),
  address2: yup.string(),
});

export const dobValidation = yup.object({
  dob: yup
    .date()
    .required(DOB_REQUIRED)
    .test("validDate", INVALID_DATE, function (value) {
      // Check if the date is valid
      if (!value || isNaN(value.getTime())) {
        return false; // Invalid date
      }
      return true; // Valid date
    })
    .test("MinAge", "You must be at least 18 years old", function (value) {
      const today = new Date();
      const eighteenYearsAgo = new Date(today);
      eighteenYearsAgo.setFullYear(today.getFullYear() - 18);
      return value <= eighteenYearsAgo;
    }),
});

export const ssnValidation = yup.object({
  ssn: yup
    .string()
    .matches(/^\d{3}-?\d{2}-?\d{4}$/, "Format must be xxx-xx-xxxx")
    .min(11)
    .required(SSN_REQUIRED),
});

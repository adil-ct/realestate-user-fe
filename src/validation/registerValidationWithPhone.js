/* eslint-disable no-unused-vars */
import * as yup from "yup";
import parse from "date-fns/parse";
import differenceInYears from "date-fns/differenceInYears";

// Static imports
import {
    FIRSTNAME_REQUIRED,
    LASTNAME_REQUIRED,
    COUNTRY_REQUIRED,
    SSN_REQUIRED,
    DOB_REQUIRED,
    USERNAME_LENGTH,
    PINCODE_TYPE_NUMBER,
    INVALID_DATE,
    FUTURE_DATE_ERROR,
    STATE_REQUIRED,
    CITY_REQUIRED,
    PINCODE_REQUIRED,
    ADDRESS_REQUIRED,
} from "constants/errorConstants";
import { MIN_ADDRESS_LENGTH } from "constants/errorConstants";

const registerValidationSchema = yup.object({
    firstName: yup
        .string()
        .matches(/^[^0-9]+$/, "Name must not contain digits")
        .max(256, USERNAME_LENGTH)
        .trim()
        .required(FIRSTNAME_REQUIRED),
    lastName: yup
        .string()
        .matches(/^[^0-9]+$/, "Name must not contain digits")
        .max(256, USERNAME_LENGTH)
        .trim()
        .required(LASTNAME_REQUIRED),
    dob: yup
        .date()
        .required(DOB_REQUIRED),
    ssn: yup
        .string()
        .matches(/^\d{3}-?\d{2}-?\d{4}$/, "Format must be xxx-xx-xxxx")
        .min(11)
        .required(SSN_REQUIRED),
    country: yup.object().required(COUNTRY_REQUIRED),
    state: yup.object().required(STATE_REQUIRED),
    city: yup.string().required(CITY_REQUIRED),
    postalCode: yup
        .string()
        .min(5, 'Must be exactly 5 digits')
        .required(PINCODE_REQUIRED)
        .typeError(PINCODE_TYPE_NUMBER),
    address1: yup.string().min(6, MIN_ADDRESS_LENGTH).required(ADDRESS_REQUIRED),
    address2: yup.string(),
    mobileNumber: yup.string(),
    isMobileVerified: yup.bool()
        .when('mobileNumber', {
            is: exist => !!exist,
            then: yup.bool()
                .oneOf([true], 'Mobile number not verified'),
            otherwise: yup.bool(),
        })
    // .oneOf([true],'Mobile number not verified'),
});

export default registerValidationSchema;

// Other conditions for mobile numbers

// mobileNumber: yup.string().matches(
//       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
//       PHONE_VALID
//     ).required(PHONE_REQUIRED)

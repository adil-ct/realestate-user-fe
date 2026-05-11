import * as yup from "yup";
import {
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
} from "constants/errorConstants";

const addBillingDetailValidation = yup.object({
  firstName: yup.string().required(FIRSTNAME_REQUIRED),
  lastName: yup.string().required(LASTNAME_REQUIRED),
  district: yup.string(),
  postalCode: yup.string(),
  line1: yup.string(),
  line2: yup.string(),
  country: yup.string(),
  city: yup.string(),
});

export default addBillingDetailValidation;

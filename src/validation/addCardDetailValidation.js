import * as yup from "yup";

import {
  CARD_NUMBER_REQUIRED,
  EXPIRY_DATE_REQUIRED,
  CVV_REQUIRED,
  CVV_TYPE_ERROR,
} from "constants/errorConstants";

const cardValidationSchema = yup.object({
  cardNumber: yup.number().required(CARD_NUMBER_REQUIRED),
  expiryDate: yup
    .string()
    .required(EXPIRY_DATE_REQUIRED)
    .min(5, "Invalid expiry date")
    .max(5, "Invalid expiry date"),
  cvv: yup.number().required(CVV_REQUIRED).typeError(CVV_TYPE_ERROR),
});

export default cardValidationSchema;

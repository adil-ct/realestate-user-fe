import * as yup from "yup";

import {
  SELECT_VALUE_REQUIRED,
  AMOUNT_REQUIRED,
  CARD_NAME_REQUIRED,
  CARD_NUMBER_REQUIRED,
  EXPIRY_DATE_REQUIRED,
  CVV_REQUIRED,
  CVV_TYPE_ERROR,
  EMAIL_VALID,
  EMAIL_REQUIRED,
} from "constants/errorConstants";

export const bankAccountTransferValidationScheme = yup.object({
  from: yup.string().required(SELECT_VALUE_REQUIRED),
  to: yup.string().required(SELECT_VALUE_REQUIRED),
  amount: yup.number().required(AMOUNT_REQUIRED),
});

export const creditCardTransferValidationScheme = yup.object({
  amount: yup.number().required(AMOUNT_REQUIRED),
  selectCard: yup.string().required(SELECT_VALUE_REQUIRED),
  nameOnCard: yup.string().required(CARD_NAME_REQUIRED),
  cardNumber: yup.number().required(CARD_NUMBER_REQUIRED),
  expiryDate: yup.string().required(EXPIRY_DATE_REQUIRED),
  cvv: yup.number().required(CVV_REQUIRED).typeError(CVV_TYPE_ERROR),
});

export const withdrawalUSDValidationScheme = yup.object({
  toUSD: yup.string().required(SELECT_VALUE_REQUIRED),
  amountUSD: yup.number().required(AMOUNT_REQUIRED),
  email: yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
});

export const withdrawalUSDCValidationScheme = yup.object({
  toUSDC: yup.string().required(SELECT_VALUE_REQUIRED),
  amountUSDC: yup.number().required(AMOUNT_REQUIRED),
});

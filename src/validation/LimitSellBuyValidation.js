import * as yup from "yup";

import { QUANTITY_REQUIRED, QUANTITY_VALID } from "constants/errorConstants";

const limitBuySellValidation = yup.object({
  marketAmount: yup.number().min(1).min(1, QUANTITY_VALID).required(QUANTITY_REQUIRED),
  // price: yup.number().min(1).required(AMOUNT_IS_REQUIRED),
});

export default limitBuySellValidation;

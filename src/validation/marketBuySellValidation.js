import * as yup from "yup";

import { QUANTITY_REQUIRED, QUANTITY_VALID, AMOUNT_IS_REQUIRED } from "constants/errorConstants";

const marketBuySellValidation = yup.object({
  amount: yup.number().min(1).min(1, QUANTITY_VALID).required(QUANTITY_REQUIRED),
  price: yup.number().min(1).required(AMOUNT_IS_REQUIRED),
});

export default marketBuySellValidation;

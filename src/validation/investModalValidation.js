import * as yup from "yup";

import { AMOUNT_REQUIRED } from "constants/errorConstants";

const investModalValidation = yup.object({
  amount: yup.number().min(1).required(AMOUNT_REQUIRED),
});

export default investModalValidation;

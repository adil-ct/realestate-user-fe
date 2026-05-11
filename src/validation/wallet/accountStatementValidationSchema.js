import * as yup from "yup";

import { START_DATE_REQUIRED, END_DATE_REQUIRED, TOKEN_REQUIRED } from "constants/errorConstants";

const accountStatementValidationSchema = yup.object({
  startDate: yup.string().required(START_DATE_REQUIRED),
  endDate: yup.string().required(END_DATE_REQUIRED),
  token: yup.string().required(TOKEN_REQUIRED),
});

export default accountStatementValidationSchema;

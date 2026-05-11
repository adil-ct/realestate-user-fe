import * as yup from "yup";
import {
  PASSWORD_REQUIRED,
  EMAIL_VALID,
  EMAIL_REQUIRED,
} from "constants/errorConstants";

const loginValidation = yup.object({
  email: yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  password: yup
    .string()
    .required(PASSWORD_REQUIRED),
});

export default loginValidation;

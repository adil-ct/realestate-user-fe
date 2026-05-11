import * as yup from "yup";
import {
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
  USERNAME_LENGTH,
  PASSWORD_REQUIRED,
  TC_REQUIRED,
  PASSWORD_VALIDATION,
  EMAIL_VALID,
  EMAIL_REQUIRED,
} from "constants/errorConstants";

const registerValidation = yup.object({
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
  email: yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  password: yup
    .string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),._?":\-/=+'{};\[\]|<>])[A-Za-z\d!@#$%^&*(),._?":\-/=+'{};\[\]|<>]{10,}$/,
      PASSWORD_VALIDATION
    )
    .required(PASSWORD_REQUIRED),
  tc: yup.bool().oneOf([true], TC_REQUIRED),
});

export default registerValidation;

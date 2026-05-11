import * as yup from "yup";
import {
  CONFIRM_PASSWORD_REQUIRED,
  SET_PASSWORDS_NOT_MATCH,
  PASSWORD_REQUIRED,
  PASSWORD_VALIDATION,
} from "constants/errorConstants";

const createNewPassword = yup.object({
  createPassword: yup
    .string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),._?":\-/=+'{};\[\]|<>])[A-Za-z\d!@#$%^&*(),._?":\-/=+'{};\[\]|<>]{10,}$/,
      PASSWORD_VALIDATION
    )
    .required(PASSWORD_REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("createPassword"), null], SET_PASSWORDS_NOT_MATCH)
    .required(CONFIRM_PASSWORD_REQUIRED),
});

export default createNewPassword;

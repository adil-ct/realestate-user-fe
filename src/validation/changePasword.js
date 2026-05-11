import * as yup from "yup";
import {
    CONFIRM_PASSWORD_REQUIRED,
    SET_PASSWORDS_NOT_MATCH,
    PASSWORD_VALIDATION,
    NEW_PASSWORD_REQUIRED,
    OLD_PASSWORD_REQUIRED
  } from "constants/errorConstants";

  const changePassword = yup.object({
    newPassword: yup
    .string()
    .matches(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),._?":\-/=+'{};\[\]|<>])[A-Za-z\d!@#$%^&*(),._?":\-/=+'{};\[\]|<>]{10,}$/,
        PASSWORD_VALIDATION
      )
      .required(NEW_PASSWORD_REQUIRED),
      oldPassword: yup
    .string()
    .required(OLD_PASSWORD_REQUIRED),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], SET_PASSWORDS_NOT_MATCH)
    .required(CONFIRM_PASSWORD_REQUIRED)

  })

  export default changePassword;
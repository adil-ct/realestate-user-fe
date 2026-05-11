import * as yup from "yup";
import {
  NEW_PASSWORD_REQUIRED,
  CONFIRM_PASSWORD_REQUIRED,
  SET_PASSWORDS_NOT_MATCH,
  OLD_PASSWORD_REQUIRED,
  PASSWORD_VALIDATION,
} from "constants/errorConstants";

const resetPasswordValidationSchema = yup.object({
  oldPassword: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/, PASSWORD_VALIDATION)
    .required(OLD_PASSWORD_REQUIRED),
  newPassword: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/, NEW_PASSWORD_REQUIRED)
    .required(NEW_PASSWORD_REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], SET_PASSWORDS_NOT_MATCH)
    .required(CONFIRM_PASSWORD_REQUIRED),
});

export default resetPasswordValidationSchema;

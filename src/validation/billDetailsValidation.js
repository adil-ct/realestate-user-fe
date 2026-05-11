import * as yup from "yup";
import {
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
  USERNAME_LENGTH,
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
});

export default registerValidation;

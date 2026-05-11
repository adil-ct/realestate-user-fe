import * as yup from "yup";
import { PHONE_VALID, MOBILE_REQUIRED } from "constants/errorConstants";
// import { PHONE_NOT_VERIFIED } from "constants/errorConstants";

const registerValidationSchema = yup.object({
  mobileNumber: yup
    .string()
    .required(MOBILE_REQUIRED)
    .min(4, PHONE_VALID)
    .max(13, PHONE_VALID),

  isMobileVerified: yup.bool(),
});

export default registerValidationSchema;

import * as yup from "yup";
import { FIRSTNAME_REQUIRED, LASTNAME_REQUIRED, USERNAME_LENGTH } from "constants/errorConstants";

const updateProfileValidationSchema = yup.object({
  firstName: yup.string().max(256, USERNAME_LENGTH).trim().required(FIRSTNAME_REQUIRED),
  lastName: yup.string().max(256, USERNAME_LENGTH).trim().required(LASTNAME_REQUIRED),
});

export default updateProfileValidationSchema;

// Other conditions for mobile numbers

// mobileNumber: yup.string().matches(
//       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
//       PHONE_VALID
//     ).required(PHONE_REQUIRED)

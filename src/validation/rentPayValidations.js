import * as yup from "yup";
import {
  INTEREST_REQUIRED,
  INSURANCE_REQUIRED,
  VALUE_REQUIRED,
  KEY_REQUIRED,
  TAXES_REQUIRED,
  PRINCIPAL_REQUIRED,
  UNSUPPORTED_FILE_FORMAT,
  FILE_TOO_LARGE
} from "constants/errorConstants";

const validationSchema = yup.object({
  principle: yup.string().required(PRINCIPAL_REQUIRED),
  interest: yup.string().required(INTEREST_REQUIRED),
  taxes: yup.string().required(TAXES_REQUIRED),
  insurance: yup.string().required(INSURANCE_REQUIRED),
  HOAFee: yup.string(),
  LLCAdminFee: yup.string(),
  extraFields: yup.array().of(
    yup.object().shape({
      key: yup.string().required(KEY_REQUIRED),
      value: yup.string().required(VALUE_REQUIRED),
    })
  ),
  document: yup
    .mixed()
    .test(
      "fileSize",
      FILE_TOO_LARGE,
      (value) => value.size <= 2000000
    )
    .test("fileType", UNSUPPORTED_FILE_FORMAT, (value) =>
      ["png", "jpeg", "pdf"].includes(value?.name?.split(".").pop())
    ),
});

export default validationSchema;

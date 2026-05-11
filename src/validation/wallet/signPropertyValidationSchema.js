/* eslint-disable import/prefer-default-export */
import * as yup from "yup";

export const signpropertySchema = yup.object({
  salePrice: yup.number().required("sale price is required"),
  saleEquity: yup.number().min(0).max(50).required("holding equity is required"),
  legalDocument: yup.string().required("please choose legal document"),
});

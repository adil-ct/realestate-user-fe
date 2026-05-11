import { PAYMENT_METHOD_NAME } from "./env";

export const isDwolla = PAYMENT_METHOD_NAME === "Dwolla"

// Common for both Dwolla & Plaid
export const fetchTokenLink = "/payment/plaid/link-token";

// Depends on Payment Method Name 
// Dwolla or Plaid

export const addBankLink = isDwolla ? "/payment/dwolla/funding-source" : "/payment/plaid/access-token"
export const getAllBankLink = isDwolla ? "/payment/dwolla/source-list" : "/payment/plaid/accounts"
export const deleteBankLink = isDwolla ? "/payment/dwolla/funding-account" : "/payment/plaid/unlink-account"
export const transferLink = isDwolla ? "/payment/dwolla/transfer" : "/payment/plaid/transfer"


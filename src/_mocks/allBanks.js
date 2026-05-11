import { useSelector } from "react-redux";

const BankAccountsList = () => {
  const { linkedBankAccounts } = useSelector((state) => state.accounts);
  return {
    column: [
      "Account  Holder",
      "Account Number",
      "Bank Name",
      "Action",
    ],
    row: linkedBankAccounts?.data?.map((bank) => ({
      "Account  Holder": bank.billing_details?.name,
      "Bank Name": bank.us_bank_account?.bank_name,
      "Account Number": `*********${bank.us_bank_account?.last4}`,
      id: bank.id,
      default: bank?.defaultMethod ? bank?.defaultMethod : false,
      disabled: bank?.defaultMethod ? true : false,
      Action: "",
    })),
  };
};

export default BankAccountsList;

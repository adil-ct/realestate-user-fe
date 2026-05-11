import { isDwolla } from "constants/paymentEndpoints";
import { useSelector } from "react-redux";

const BankAccountsList = () => {
  const { linkedBankAccounts } = useSelector((state) => state.accounts);
  return {
    column: isDwolla ? [
      "Account  Holder",
      // "Account Number",
      "Bank Name",
      "Action",
    ] : [
      // "Account  Holder",
      "Account Number",
      "Bank Name",
      "Action",
    ],
    row: linkedBankAccounts?.paymentMethods?.map((bank) => ({
      "Account  Holder": bank?.name,
      "Bank Name": isDwolla ? bank?.bankName : bank?.name,
      "Account Number":  `*********${bank?.mask}`,
      id: isDwolla ? bank?.id : bank?._id,
      default: false,
      disabled: bank?.default ? true : false,
      Action: "",
    })),
  };
};

export default BankAccountsList;

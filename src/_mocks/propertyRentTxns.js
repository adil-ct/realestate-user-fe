import CurrencyFormat from "components/CurrencyFormat";
import moment from "moment";
import { useSelector } from "react-redux";

const propertyRentTxns = () => {
  const { rentTxn } = useSelector((state) => state.accounts);

  return {
    column: ["Date", "Total Rent", "Amount", "Number of Tokens", "Action"],
    row: rentTxn?.data?.data?.map((item) => ({
      tableData: item,
      Date: moment(item?.updatedAt).format("lll"),
      "Total Rent": <CurrencyFormat prefix={"$"} value={item?.totalRent} />,
      "Amount": <CurrencyFormat prefix={"$"} value={item?.amount} /> ,
      "Number of Tokens": item?.numberOfTokens,
      "Action": ""
    })),
  };
};

export default propertyRentTxns;
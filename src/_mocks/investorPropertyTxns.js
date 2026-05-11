import CurrencyFormat from "components/CurrencyFormat";
import { useSelector } from "react-redux";
import moment from "moment";

const balances = () => {
  const { reserveTxns } = useSelector((state) => state.marketplace);
  return {
    column: ["Date", "Amount", "Txn Type", "To", "From"],
    row: reserveTxns?.map((item) => ({
      data: item,
      Date: moment(item?.updatedAt).format("lll"),
      Amount: (
        <b>
          {item?.amount ? (
            <CurrencyFormat
              prefix={"$"}
              value={
                typeof item?.amount === "number"
                  ? item?.amount
                  : item?.amount?.amount
              }
            />
          ) : (
            "- -"
          )}
        </b>
      ),
      "Txn Type":
        item?.transactionType === "transaction"
          ? "Reserve Withdrawal"
          : item?.transactionType?.charAt(0)?.toUpperCase() +
            item?.transactionType?.slice(1),
      To: item?.destination,
      From: item?.source,
    })),
  };
};

export default balances;

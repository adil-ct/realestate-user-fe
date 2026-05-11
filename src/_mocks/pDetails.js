import CurrencyFormat from "components/CurrencyFormat";
import { useSelector } from "react-redux";
import moment from "moment";

const balances = () => {
  const { propertyTxnsList } = useSelector((state) => state.accounts);

  // const getStatusStyle = (status) => {
  //   if (status === "completed") {
  //     return {
  //       color: "green",
  //     };
  //   } else {
  //     return {
  //       color: "#FB8C00",
  //     };
  //   }
  // };

  const getStatusText = (status) => {
    if (status === "completed") {
      return "Completed";
    } else if (status === "pending") {
      return "Pending";
    } else {
      return status;
    }
  };

  return {
    column: ["Date", "Amount", "Txn Type", "To", "From", "Status"],
    row: propertyTxnsList?.data?.map((item) => ({
      data: item,
      Date: moment(item?.createdAt).format("lll"),
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
        item?.txnType === "transaction"
          ? "Reserve Withdrawal"
          : item?.txnType.charAt(0).toUpperCase() + item?.txnType.slice(1),
      To: item?.destination,
      From: item?.source,
      Status: (
        <span /*style={getStatusStyle(item.status)}*/>
          {getStatusText(item.status)}
        </span>
      ),
    })),
  };
};

export default balances;

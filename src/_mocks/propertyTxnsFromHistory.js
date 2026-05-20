import { useSelector } from "react-redux";
import moment from "moment";

import TransactionItem from "components/TableSubComponents/transactionItem";
import CurrencyFormat from "components/CurrencyFormat";

const getAmount = (item) =>
  typeof item?.amount === "number"
    ? item?.amount
    : Number(item?.amount?.amount) || 0;

const getFees = (item) =>
  typeof item?.fees === "number"
    ? item?.fees
    : Number(item?.fees?.amount) || 0;

const getTxnType = (item) => {
  const t = item?.transactionType;
  if (t === "Checkout" || t === "checkout") return "Buy";
  if (item?.transferType === "received") return "Received";
  if (item?.transferType === "sent") return "Sent";
  if (!t) return "-";
  const s = String(t);
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getTxnPropertyId = (item) =>
  (typeof item?.propertyId === "object"
    ? item?.propertyId?._id
    : item?.propertyId) ||
  item?.property?._id ||
  item?._property ||
  null;

const propertyTxnsFromHistory = ({
  propertyId,
  propertyTitle,
  pricePerToken,
} = {}) => {
  const { transactions } = useSelector((state) => state.accounts);
  const all = transactions?.data || [];
  const title = propertyTitle ? String(propertyTitle).trim().toLowerCase() : "";

  const items = all.filter((item) => {
    const txnPid = getTxnPropertyId(item);
    if (txnPid && propertyId) return txnPid === propertyId;
    if (!title) return false;
    return (
      String(item?.destination || "").trim().toLowerCase() === title
    );
  });

  return {
    column: ["Date", "Type", "# of Tokens", "Amount", "Transaction Id"],
    row: items.map((item) => {
      const amount = getAmount(item);
      const fees = getFees(item);
      const netForTokens = Math.max(amount - fees, 0);
      const price = Number(pricePerToken) || 1;
      const tokens = Number(item?.tokens) || Math.round(netForTokens / price);
      return {
        Date: moment(item?.createdAt).format("MMM DD, YYYY HH:mm A"),
        Type: getTxnType(item),
        "# of Tokens": tokens
          ? tokens.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          : "-",
        Amount: <CurrencyFormat prefix={"$"} value={amount} />,
        "Transaction Id": (
          <TransactionItem
            noLink={item?.transactionHash ? false : true}
            value={item?.transactionHash ? item?.transactionHash : item?._id}
          />
        ),
      };
    }),
  };
};

export default propertyTxnsFromHistory;

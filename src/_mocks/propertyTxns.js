import { useSelector } from "react-redux";
import moment from "moment";

import TransactionItem from "components/TableSubComponents/transactionItem";
import TxnAmount from "components/TableSubComponents/txnAmount";
import {OvalSpinner} from "components/Loader/GenericLoaders";

const Date = (item) => {
  return <div style={{display: "flex"}}>
      <OvalSpinner height={15} isLoading={true} /> 
      {moment(item?.createdAt).format('MMM DD,YYYY HH:mm A')}
    </div>
}
const propertyTxns = () => {
  const { userData } = useSelector((state) => state.auth);
  const { propertyTxnsList } = useSelector((state) => state.accounts);
  return {
    column: ["Date", "Type", "# of Tokens", "Amount", "Transaction Hash"],
    row: propertyTxnsList?.items?.map((item) => ({
      Date: item?.status === "pending" ? <Date item /> : moment(item?.createdAt).format('MMM DD,YYYY HH:mm A'),
      Type: userData?._id === item?.buyerId ? "Buy" : "Sell",
      "# of Tokens": `${item?.tokens?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} ($${Number(item?.price).toFixed(2)})` || "-",
      "Amount": <TxnAmount symbol={userData?._id === item?.buyerId ? "-" : "+"} amount= {item?.tokens*item?.price} />,
      "Transaction Hash": item?.transactionHash && <TransactionItem value={item?.transactionHash} /> || "N/A"
    })),
  };
};

export default propertyTxns;
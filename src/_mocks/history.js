import { useSelector } from "react-redux";
import moment from "moment";

import TransHistory from "../components/TableSubComponents/amountHistory";
import TransHistoryStatus from "../components/TableSubComponents/transcationStatus";
import TransactionItem from "components/TableSubComponents/transactionItem";
import toaster from "utils/toaster";

const history = () => {
  const { transactions } = useSelector((state) => state.accounts);

  const copyToCLipBoard = (value) => {
    try {
      navigator.clipboard.writeText(value);
      toaster.success("Copied to clipboard!");
    } catch (err) {
      // console.log(err);
    }
  };

  const getToValue = (txn) => {
    return txn?.includes("0x") ? (
      <p
        className="cursor-pointer"
        onClick={() => copyToCLipBoard(txn)}
      >{`${txn?.slice(0, 4)}......${txn?.slice(
        -4
      )}`}</p>
    ) : (
      txn
    );
  };

  const getFromValue = (txn) => {
    return txn?.includes("0x") ? (
      <p
        className="cursor-pointer"
        onClick={() => copyToCLipBoard(txn)}
      >{`${txn?.slice(0, 4)}......${txn?.slice(-4)}`}</p>
    ) : (
      txn
    )
  };

  return {
    column: [
      "Date & Time",
      "Amount",
      "Fees",
      "To",
      "From",
      "Transaction Hash / Id",
      "Status",
    ],
    row: transactions?.data?.map((item, index) => ({
      "Date & Time": moment(item?.createdAt).format("lll"),
      To: getToValue(item?.destination),
      From: getFromValue(item?.source),
      Amount: (
          <TransHistory
            tooltip={item?.credits > 0 ? true : false}
            credits={item?.credits}
            amount={item?.amount?.amount}
            type={
              item?.transactionType === "Deposit" ||
                item?.transferType === "received"
                ? true
                : false
            }
          />
      ),
      Fees: item?.fees?.amount
        ? parseFloat(item?.fees?.amount).toFixed(2)
        : "- -",
      "Transaction Hash / Id":
        <TransactionItem noLink={item?.transactionHash ? false : true} value={item?.transactionHash ? item?.transactionHash: item?._id} />,
      Status: (
        <TransHistoryStatus
          txn={item}
          index={index}
          txnType={item?.transactionType}
        />
      ),
    })),
  };
};

export default history;



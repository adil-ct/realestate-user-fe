import { useSelector } from "react-redux";
import moment from "moment";

import TransHistory from "../components/TableSubComponents/amountHistory";
import TransHistoryStatus from "../components/TableSubComponents/transcationStatus";
import TransactionItem from "components/TableSubComponents/transactionItem";
import toaster from "utils/toaster";

const history = () => {
  const { transactions } = useSelector((state) => state.accounts);

  // Fallback for non-secure contexts (plain HTTP) where
  // navigator.clipboard is unavailable.
  const legacyCopy = (value) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = value;
      textArea.style.position = "fixed";
      textArea.style.top = "-9999px";
      textArea.style.left = "-9999px";
      textArea.setAttribute("readonly", "");
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, value.length);
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      return false;
    }
  };

  const copyToCLipBoard = async (value) => {
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        toaster.success("Copied to clipboard!");
        return;
      } catch (err) {
        // Fall through to legacy path below.
      }
    }

    if (legacyCopy(value)) {
      toaster.success("Copied to clipboard!");
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



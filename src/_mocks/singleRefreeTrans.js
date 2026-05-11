import CurrencyFormat from "components/CurrencyFormat";
import { useSelector } from "react-redux";
import moment from "moment";

const singleRefreeTrans = () => {
    const { rewardSingleTransaction } = useSelector((state) => state.user);

    return {
        column: [
            "Property Name",
            "Date",
            "Amount Invested"
        ],
        row: rewardSingleTransaction?.data?.transactions?.map((item, index) => ({
            "Property Name" : <span key={index}>{item?.propertyName}</span>,
            Date: <span key={index}>{moment(item?.createdAt).format("lll")}</span>,
            "Amount Invested": <b key={index}><CurrencyFormat prefix={"$"} value={item?.amount?.amount - (item?.fees?.amount || 0)} /></b>
        })),
    };
};

export default singleRefreeTrans;

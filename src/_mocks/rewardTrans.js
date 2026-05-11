import CurrencyFormat from "components/CurrencyFormat";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { routePaths } from "../routes/mainRoutes/routePaths";

const rewardTrans = () => {
    const { rewardTransactions } = useSelector((state) => state.user);

    return {
        column: [
            "Name",
            "Date",
            "Amount Invested",
            "Reward Type",
            "Rewards Earned",
        ],
        row: rewardTransactions?.data?.data?.map((referee) => ({
            Name: referee?.refereeId ? <NavLink to={`${routePaths.REFERRALS_TRANSACTIONS_PATH}/${referee?.refereeId}`} exact className="nav-link-user">{referee?.referee ? referee?.referralUser : referee?.refereeUser}</NavLink> : referee?.referee ? referee?.referralUser : referee?.refereeUser,
            "Date": moment(referee?.updatedAt).format("lll"),
            "Amount Invested": (
                <b>
                    <CurrencyFormat prefix={"$"}
                        value={referee?.rewardsForInvestment} />
                </b>
            ),
            "Reward Type": (
                <span>
                    {referee?.rewardType}
                </span>
            ),
            "Rewards Earned": <b>{<CurrencyFormat prefix={"$"}
                value={referee?.quoteCurrencyAmount} />}</b>,
        })),
    };
};

export default rewardTrans;

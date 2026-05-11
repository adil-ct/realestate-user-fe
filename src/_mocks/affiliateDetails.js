import { routePaths } from "routes/mainRoutes/routePaths";
import CurrencyFormat from "components/CurrencyFormat";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from '@mui/styles';

const BankAccountsList = () => {
    const { refreeDetails } = useSelector((state) => state.user);
    const theme = useTheme();
    const colors = theme.palette;
  
    const getTextColor = (status) => {
      switch (status) {
        case "approved": {
          return colors.success.main;
        }
        case "completed": {
          return colors.success.main;
        }
        case "failed": {
          return colors.error.main;
        }
        default: return colors.warning.main;
      }
    };
  
    const getStatusText = (text) => {
      switch (text) {
        case "approved": {
          return "Approved"
        }
        case "completed": {
          return "Completed"
        }
        case "failed": {
          return "Failed"
        }
        default: return "Pending"
      }
    }

    return {
        column: [
            "Name",
            "Email",
            "Phone Number",
            "Status",
            "Amount Invested",
        ],
        row: refreeDetails?.data?.result?.map((referee) => ({
            Name: <NavLink to={`${routePaths.REFERRALS_TRANSACTIONS_PATH}/${referee?.refereeId}`} exact className="nav-link-user">{referee?.name}</NavLink>,
            "Email": referee?.email,
            "Phone Number": referee?.phone || '-',
            "Status": <span style={{ color: getTextColor(referee?.kycStatus) }}>
                {getStatusText(referee?.kycStatus)}
            </span>,
            "Amount Invested": <b>{referee?.amountSettled ? <CurrencyFormat prefix={"$"}
                value={referee?.amountSettled} /> : "- -"}</b>,
        })),
    };
};

export default BankAccountsList;

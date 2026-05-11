import CurrencyFormat from "components/CurrencyFormat";
import moment from "moment";
import { useSelector } from "react-redux";
import { useTheme } from '@mui/styles';

const refreeDetailsData = () => {
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
      "Registered On",
      "KYC Status",
      "Rewards Earned",
    ],
    row: refreeDetails?.data?.result?.map((referee) => ({
      Name: referee?.name,
      "Registered On": moment(referee?.createdAt).format("lll"),
      "KYC Status": <span style={{ color: getTextColor(referee?.kycStatus) }}>
        {getStatusText(referee?.kycStatus)}
      </span>,
      "Rewards Earned": <b>{referee?.refereeReward ? <CurrencyFormat prefix={"$"}
        value={referee?.reward} /> : "- -"}</b>,
    })),
  };
};

export default refreeDetailsData;

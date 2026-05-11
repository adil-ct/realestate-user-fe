import { useSelector } from "react-redux";

import Asset from "components/TableSubComponents/asset";
import Balance from "components/TableSubComponents/balance";
import Progress from "components/TableSubComponents/progress";

const balances = () => {
  const { pfListData, pfOverviewData } = useSelector((state) => state.accounts);
  return {
    column: ["Asset", "Allocation", "Balance", "Action"],
    row: pfListData?.value?.map((item, index) => ({
      Asset: <Asset title={item?.title} icon={item?.mainImage?.url} index={index} to={`/property-details-card/${item?._property}`} />,
      Allocation: <Progress decimalAllowed={true} value={((item?.tokens * item?.currentPrice) / pfOverviewData?.portfolioValue) * 100} />,
      Balance: (
        <Balance
          ele={{
            diff: item?.tokens * item?.currentPrice,
            stats: item?.currentPrice - item?.boughtAtPrice > 0 ? "down" : "up",
            balance: item?.tokens,
          }}
        />
      ),
      Action: "",
      id: item._property,
      pricePerToken: item.currentPrice,
      tokensSold: item.tokensSold,
      numberOfTokens: item.numberOfTokens,
      tokensSoldPercentage: item.tokensSoldPercentage,
      mainImage: item.mainImage,
      minInvestment: item?.minInvestment,
      title: item?.title,
      city: item?.city || "",
      state: item?.state || ""
    })),
  };
};

export default balances;

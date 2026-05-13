import { useSelector } from "react-redux";

import Asset from "components/TableSubComponents/asset";
import Balance from "components/TableSubComponents/balance";
import Progress from "components/TableSubComponents/progress";

const balances = () => {
  const { pfListData } = useSelector((state) => state.accounts);

  const rows = pfListData?.value || [];

  return {
    column: ["Asset", "Allocation", "Balance", "Action"],
    row: rows.map((item, index) => {
      const tokenCount = Number(item?.tokens) || 0;
      const price = Number(item?.currentPrice) || 0;
      const boughtAt = Number(item?.boughtAtPrice) || 0;
      const dollarValue = tokenCount * price;
      const allocationPct = Number(item?.tokensSoldPercentage) || 0;

      return {
        Asset: (
          <Asset
            title={item?.title}
            icon={item?.mainImage?.url}
            index={index}
            to={`/property-details-card/${item?._property}`}
          />
        ),
        Allocation: (
          <Progress decimalAllowed={true} value={allocationPct} />
        ),
        Balance: (
          <Balance
            ele={{
              diff: dollarValue,
              stats: price - boughtAt >= 0 ? "up" : "down",
              balance: tokenCount,
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
        state: item?.state || "",
      };
    }),
  };
};

export default balances;

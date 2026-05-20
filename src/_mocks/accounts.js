import { useSelector } from "react-redux";

import Asset from "components/TableSubComponents/asset";
import Balance from "components/TableSubComponents/balance";
import Progress from "components/TableSubComponents/progress";

const balances = () => {
  const { pfListData } = useSelector((state) => state.accounts);

  const rows = pfListData?.value || [];

  return {
    column: ["Asset", "Allocation", "Tokens", "Action"],
    row: rows.map((item, index) => {
      const tokenCount = Number(item?.tokens ?? item?.balanceTokens) || 0;
      const totalTokens = Number(item?.numberOfTokens) || 0;
      const allocationPct = Number(item?.allocationPercentage) || 0;
      const mainImage =
        typeof item?.mainImage === "string"
          ? item?.mainImage
          : item?.mainImage?.url;

      return {
        Asset: (
          <Asset
            title={item?.title}
            icon={mainImage}
            index={index}
            to={`/property-details-card/${item?._property}`}
          />
        ),
        Allocation: (
          <Progress decimalAllowed={true} value={allocationPct} />
        ),
        Tokens: (
          <Balance
            ele={{
              balance: tokenCount,
              totalTokens,
            }}
          />
        ),
        Action: "",
        id: item._property,
        pricePerToken: item.currentPrice,
        tokensSold: item.tokensSold,
        numberOfTokens: item.numberOfTokens,
        tokensSoldPercentage: item.tokensSoldPercentage,
        mainImage,
        minInvestment: item?.minInvestment,
        title: item?.title,
        city: item?.city || "",
        state: item?.state || "",
      };
    }),
  };
};

export default balances;

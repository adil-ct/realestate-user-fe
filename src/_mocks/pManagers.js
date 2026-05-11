import Asset from "components/TableSubComponents/asset";
import CurrencyFormat from "components/CurrencyFormat";
import { useSelector } from "react-redux";

const balances = () => {
  const { pfOverviewData } = useSelector((state) => state.accounts);
  return {
    column: [
      "Asset",
      "Open Proposals",
      "Maintenance Reserve Balance",
      "Vacancy Reserve Balance",
      "Earnings",
      "Rent Per Month",
      "Action",
    ],
    row: pfOverviewData?.result?.propertyData?.map((item, index) => ({
      tableData: item,
      id: item?._id,
      Asset: (
        <Asset
          title={item?.propertyName}
          index={index}
          icon={item?.mainImage?.url}
          to={`/property-details-card/${item?._id}`}
        />
      ),
      "Open Proposals": item?.proposalCount ? item?.proposalCount : 0,
      "Maintenance Reserve Balance": (
        <b>
          {item?.maintenanceReserveBal ? (
            <CurrencyFormat prefix={"$"} value={item?.maintenanceReserveBal} />
          ) : (
            "- -"
          )}
        </b>
      ),
      "Vacancy Reserve Balance": (
        <b>
          {item?.vacancyReserveBal ? (
            <CurrencyFormat prefix={"$"} value={item?.vacancyReserveBal} />
          ) : (
            "- -"
          )}
        </b>
      ),
      Earnings: (
        <b>
          {item?.rent?.earnings ? (
            <CurrencyFormat prefix={"$"} value={item?.rent?.earnings} />
          ) : (
            "- -"
          )}
        </b>
      ),
      "Rent Per Month": (
        <b>
          {item?.rent?.rent ? (
            <CurrencyFormat prefix={"$"} value={item?.rent?.rent} />
          ) : (
            "- -"
          )}
        </b>
      ),
      Action: "",
    })),
  };
};

export default balances;

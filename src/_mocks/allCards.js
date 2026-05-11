import { useSelector } from "react-redux";

const BankCardsList = () => {
  const { linkedCards } = useSelector((state) => state.accounts);
  return {
    column: ["Name", "Card Type", "Expiry", "Action"],
    row: linkedCards?.data?.map((card) => ({
      Name: card?.billing_details?.name,
      "Card Type": card?.card?.brand,
      AccountNumber: `**** **** **** ${card?.card?.last4}`,
      Expiry: `${card?.card?.exp_month}/${card?.card?.exp_year}`,
      Action: "",
      id: card.id,
      default: card?.defaultMethod ? card?.defaultMethod : false,
      disabled: card?.defaultMethod ? true : false,
    })),
  };
};

export default BankCardsList;

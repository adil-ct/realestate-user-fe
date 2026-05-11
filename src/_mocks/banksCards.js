import { useSelector } from "react-redux";
import { NBank, CCard } from "constants/assets"

const bankCardsList = () => {
    const { bankCards } = useSelector((state) => state.common);

    const banks = bankCards?.dataObj?.paymentMethods?.map((payment) => ({
        id: payment?.id,
        name: payment?.type === "card" ? 
            `${payment?.card?.brand?.charAt(0).toUpperCase() + payment?.card?.brand?.slice(1)} *********${payment?.card?.last4}` 
            : `${payment?.us_bank_account?.bank_name} *********${payment?.us_bank_account?.last4}`,
        subtitle: "",
        tagline: "",
        status: payment?.defaultMethod ? payment?.defaultMethod : false,
        Image: payment?.type === "card" ? CCard : NBank,
        alt: payment?.type === "card" ? 
            `${payment?.card?.brand?.charAt(0).toUpperCase() + payment?.card?.brand?.slice(1)} *********${payment?.card?.last4}` 
            : `${payment?.us_bank_account?.bank_name} *********${payment?.us_bank_account?.last4}`,
        key: payment?.type,
        disabled: false,
        disableMsg: "Coming soon!",
        data: payment,
    }))

    return banks ? banks : []
};

export default bankCardsList;

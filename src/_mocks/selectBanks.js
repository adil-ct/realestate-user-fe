import { useSelector } from "react-redux";
import { NBank } from "constants/assets"
import { isDwolla } from "constants/paymentEndpoints";

const bankCardsList = () => {
    const { linkedBankAccounts } = useSelector((state) => state.accounts);

    const banks = linkedBankAccounts?.paymentMethods?.map((payment) => ({
        id: payment?.id,
        name: isDwolla ? `${payment?.bankName}` : `${payment?.name} *********${payment?.mask}`,
        subtitle: "",
        tagline: "",
        status: false,
        Image:  NBank,
        alt:  isDwolla ? `${payment?.bankName}` : `${payment?.name} *********${payment?.mask}`,
        key: "us_bank_account",
        disabled: false,
        disableMsg: "Coming soon!",
        data: payment,
    }))

    return banks ? banks : []
};

export default bankCardsList;

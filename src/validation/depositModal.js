import * as yup from "yup";
import { DEPOSIT_AMOUNT_REQUIRED,SELECT_CARD_REQUIRED } from "constants/errorConstants";


const addDepositModalValidation = yup.object({
    SelectCard:yup.string().required(SELECT_CARD_REQUIRED),
    DepositAmount:yup.string().required(DEPOSIT_AMOUNT_REQUIRED),
    // To:yup.string().required(To_REQUIRED)
   
    })

export default addDepositModalValidation;
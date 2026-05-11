import { Skeleton } from "@mui/material";

const BankDetailsSkelton = {
  column: ["Bank Details", "Billing Details"],
  row: [
    {
      "Bank Details": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Billing Details": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
    },
    {
      "Bank Details": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Billing Details": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
    },
  ],
};

export default BankDetailsSkelton;

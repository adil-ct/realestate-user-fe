import { Skeleton } from "@mui/material";

const SkeletonAddaccount = {
  column: ["Bank Username", "Account Number", "Bank Name", "Status", "Action"],
  row: [
    {
      "Bank Username": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Bank Name": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Account Number": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      Status: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
      Action: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
    },
    {
      "Bank Username": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Bank Name": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Account Number": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),

      Status: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
      Action: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
    },

    {
      "Bank Username": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Bank Name": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Account Number": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      Status: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,

      Action: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
    },
  ],
};

export default SkeletonAddaccount;

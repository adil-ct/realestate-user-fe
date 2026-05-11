import { Skeleton } from "@mui/material";

const SkeletonAddcard = {
  column: ["Name On Card", "Card Number", "Card Type", "Status", "Action"],
  row: [
    {
      "Name On Card": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Card Number": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Card Type": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      Status: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
      Action: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
    },
    {
      "Name On Card": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Card Number": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Card Type": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      Status: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
      Action: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
    },

    {
      "Name On Card": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Card Number": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      "Card Type": (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      ),
      Status: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
      Action: <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />,
    },
  ],
};

export default SkeletonAddcard;

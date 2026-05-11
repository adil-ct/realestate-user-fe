import { Link, Typography } from "@mui/material";

// Updated to Occurrence branding
const NonUsAddress = () => {
  return (
    <div>
      <Typography
        variant="body2"
        gutterBottom
        sx={{ minHeight: "180px", padding: "30px 15px" , textAlign: "justify"}}
      >
        At this time due to our banking provider we offer white glove service
        for international users. Please reach out to{" "}
        <Link
          href="mailto:support@occurrence.com"
          variant="body2"
          sx={{ color: (theme) => theme.palette.callToAction.light }}
        >
          support@occurrence.com
        </Link>{" "}
        for personalized service.
      </Typography>
    </div>
  );
};

export default NonUsAddress;

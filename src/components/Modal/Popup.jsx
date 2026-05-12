import React from "react";

// Static imports
import ConfirmationModal from "./ConfirmationModal";
import MKTypography from "components/custom/MKTypography";
import { MOGUL_SUPPORT_EMAIL } from "constants/env";

const Popup = ({ open, handleClose }) => {
  const SubTitle = () => (
    <MKTypography
      variant="body2"
      // color="text"
      textAlign="center"
      fontSize="18px"
      fontWeight="regular"
    >
      Welcome to Occurrence! <br />
      Unfortunately, you did not sign up for early access through our waitlist.
      If you think this is a mistake, please reach out to {MOGUL_SUPPORT_EMAIL}
    </MKTypography>
  );

  const data = {
    title: "",
    subtitle: SubTitle,
    showImg: false,
  };

  return (
    <div>
      <ConfirmationModal open={open} handleClose={handleClose} data={data} />
    </div>
  );
};

export default Popup;

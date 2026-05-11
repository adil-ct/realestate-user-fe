import React from "react";

import QRModal from "components/Modal/QRCodeModal";
import { styles } from "../styles/registerStyles";
import { GOOGLE_AUTH_APP_URL } from "constants/env";

const QRCodeModal = ({
  open,
  qrImage,
  secretCode,
  setOpen,
  handleNext,
}) => {
  const classes = styles();

  const handleClose = () => {
    setOpen(false);
  };

  const SubTitle = () => (
    <>
      Download
      <span className={classes.linkColor}>
        <a
          href={GOOGLE_AUTH_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Authenticator
        </a>
      </span>{" "}
      to scan the code
    </>
  );

  const data = {
    title: "Scan QR Code",
    subtitle: SubTitle,
    link: "Resend Email",
    qrImage,
    secretCode,
  };
  return (
    <div>
      <QRModal
        open={open}
        handleClose={handleClose}
        data={data}
        secretCode={secretCode}
        handleNext={handleNext}
      />
    </div>
  );
};

export default QRCodeModal;

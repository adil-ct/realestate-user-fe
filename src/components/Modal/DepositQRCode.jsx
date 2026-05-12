import React from "react";
import QRModal from "components/Modal/QRCodeModal";

const QRCodeModal = ({
  open,
  qrImage,
  secretCode,
  setOpen,
  handleNext,
  type = "",
  backBtn = false,
  code = "",
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const data = {
    title: "Scan QR Code",
    subtitle: () => {},
    tagline: !type
      ? "Scan the QR code or copy the wallet address to transfer USDC (Polygon) to your Occurrence wallet"
      : `Scan the QR code to share the ${type} link or copy the ${type} code`,
    link: "Resend Email",
    qrImage,
    secretCode: type ? code : secretCode,
  };
  return (
    <div>
      <QRModal
        open={open}
        handleClose={handleClose}
        data={data}
        secretCode={type ? code : secretCode}
        handleNext={handleNext}
        noButton={true}
        backBtn={type ? false : true}
        backBtnHandler={backBtn}
      />
    </div>
  );
};

export default QRCodeModal;

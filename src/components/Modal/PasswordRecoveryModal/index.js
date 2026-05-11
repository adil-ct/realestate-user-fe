import * as React from "react";

// import Grid from "@mui/material/Grid";

// import MKButton from "components/custom/MKButton";
import ConfirmationModal from "components/Modal/ConfirmationModal";

export default function PasswordRecoveryModal({ open, setOpen,email }) {
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const getMaskedEmail = (email) => {
    if(!email?.length) return "";
    const [userName, domin] = email.split("@")
    const maskedUsername = userName ? `${userName.slice(0,3)}****` : "";
    const maskedDomin = domin ? `${domin.slice(0,2)}***` : "";
    return `${maskedUsername}@${maskedDomin}`
  }

  const SubTitle = () => (
    <>
      Link to reset password has been sent to your email
      <br />
      <b>{getMaskedEmail(email)}</b>
      <br />
      <br />
      If not received, check your spam folder.
    </>
  );

  const data = {
    title: "",
    subtitle: SubTitle,
  };

  return (
    <div>
      <ConfirmationModal open={open} handleClose={handleClose} data={data} />
    </div>
  );
}

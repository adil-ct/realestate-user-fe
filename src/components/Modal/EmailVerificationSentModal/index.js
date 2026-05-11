import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import ConfirmationModal from "components/Modal/ConfirmationModal";
import { resendEmailSaga, hideModal } from "store/actions";

export default function PasswordRecoveryModal({ open, setOpen, email }) {
  const dispatch = useDispatch()
  const [time, setTime] = useState(30);
  const [timer, setTimer] = useState("");
  const handleClose = () => {
    setOpen(false);
    dispatch(hideModal());
  };

  React.useEffect(() => {
    if (time && open) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          setTime(time - 1);
        }, 1000)
      );
    }
  }, [time, open]);

  const resendEmail = ()=> {
    const requestBody = {
      email: email,
      status: "resend"
    }
    if(!time){
      dispatch(resendEmailSaga({requestBody}))
      setTime(30);
    }
  }

  const SubTitle = () => (
    <>
      A verification link has been sent to
      <b> {email}</b>
      <br />
      Please click on the link to complete your registration
    </>
  );

  const data = {
    title: "Email Verification",
    subtitle: SubTitle,
    link: time ? `Resend in ${time} secs` : `Resend Link`,
  };

  return (
    <div>
      <ConfirmationModal open={open} handleClose={handleClose} handleLinkClick={resendEmail} data={data} />
    </div>
  );
}

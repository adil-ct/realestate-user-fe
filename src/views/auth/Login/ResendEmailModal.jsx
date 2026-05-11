import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountCreationSuccess from "components/Modal/AccountCreationSuccessModal";
import { errorImg } from "constants/assets";
import { resendEmailSaga } from "store/actions";

const ResendEmailModal = ({ open, msg, email, handleClose }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState("");
  const {isLoading} = useSelector(state=>state.auth)

  const SubTitleFailed = () => <>{msg}</>;

  const data = {
    subtitle: SubTitleFailed,
    img: errorImg,
    link: "Resend Email",
  };

  const resendEmail = () => {
    const requestBody = {
      email: email,
      status: "resend",
    };
    if(!time){
    dispatch(resendEmailSaga({ requestBody }));
    setTime(30)
    }
  };

  useEffect(() => {
    if (time && open) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          setTime(time - 1);
        }, 1000)
      );
    }
  }, [time, open]);

  return (
    <div>
      <AccountCreationSuccess
        open={open}
        handleClose={handleClose}
        data={data}
        handleSubmit={resendEmail}
        btnName={!time  ? "Send email" : `Resend in ${time}s`}
        showCloseIcon={true}
        isBtnLoading={isLoading.resendEmailVerification}
        disabled={!!time}
      />
    </div>
  );
};

export default ResendEmailModal;

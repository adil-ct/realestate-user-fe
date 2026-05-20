import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AccountCreationSuccess from "components/Modal/AccountCreationSuccessModal";
import { styles } from "./styles/registerStyles";
import { Success, errorImg } from "constants/assets";
import { emailVerificationSaga } from "store/actions";
import { checkLinkValidity } from "store/actions";
import Tick from "assets/images/Tick.svg";
import { profileFetch, resendEmailSaga } from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";

const EmailVerificationSuccess = () => {
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLinkValid, setIsLinkValid] = useState();
  const { userData } = useSelector((state) => state.auth);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();

  const classes = styles();
  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailVerificationSuccess = () => {
    userData?.userType && dispatch(profileFetch());
    setIsLinkValid(true);
    setIsLoading(false);
  };

  const handleEmailVerificationFailed = (msg) => {
    setIsLinkValid(false);
    setIsLoading(false);
    setErrorMsg(msg);
  };

  const handleLinkValiditySuccess = () => {
    const requestBody = {
      token: id,
    };
    dispatch(
      emailVerificationSaga({
        requestBody,
        handleSuccess: handleEmailVerificationSuccess,
        handleFail: handleEmailVerificationFailed,
      })
    );
  };
  const handleLinkValidityFail = (msg) => {
    setIsLoading(false);
    setIsLinkValid(false);
    setErrorMsg(msg);
  };

  useEffect(() => {
    dispatch(
      checkLinkValidity({
        request: "email",
        token: id,
        handleSuccess: handleLinkValiditySuccess,
        handleFail: handleLinkValidityFail,
      })
    );
  }, []);

  const SubTitleSuccess = () => (
    <>
      <img src={Success} alt="success" className={classes.crackerIcon} />
      Your email has been verified successfully!
    </>
  );

  const SubTitleFailed = () => (
    <>
      {errorMsg?.length
        ? errorMsg
        : "Looks like either link is expired or something might went wrong!"}
    </>
  );

  const resendEmail = () => {
    const requestBody = {
      email: userData?.email,
      status: "resend",
    };
    dispatch(resendEmailSaga({ requestBody }));
  };

  const handleSubmit = () => {
    if(errorMsg?.length){
      resendEmail()
    }
    else{
      userData?.userType
      ? navigate(routePaths.HOME_PATH)
      : navigate(routePaths.LANDING_PAGE_PATH);
    }
  };

  const data = {
    subtitle: !isLinkValid ? SubTitleFailed : SubTitleSuccess,
    img: !isLinkValid ? errorImg : Tick,
    link: "Resend Email",
  };

  return (
    <div>
      <AccountCreationSuccess
        open={open}
        handleClose={handleClose}
        data={data}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        btnName={userData?.userType ? errorMsg?.length ? "Resend Email" : "Start Investing" : "Login"}
        showCloseIcon={false}
      />
    </div>
  );
};

export default EmailVerificationSuccess;

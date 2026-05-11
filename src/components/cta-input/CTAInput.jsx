import { InputContainer, Input } from "./CTAInput.style";
import { setEmailEntered } from "store/actions";
import { useDispatch } from "react-redux";
import CTAButton from "../button/CTAButton.jsx";
import { useState } from "react";
import { routePaths } from "routes/mainRoutes/routePaths";
import { useNavigate } from 'react-router-dom';

function CTAInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const newValue = e.target.value || "";
    setEmail(newValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmailEntered(email));
    window.dataLayer.push({ event: "EmailSubmission", email: email });
    navigate(routePaths.LOGIN_REGISTER_PATH);
  };

  const hasAuthToken = Boolean(localStorage.getItem("authToken"));

  return !hasAuthToken ? (
    <InputContainer onSubmit={onSubmit}>
      <Input
        type="email"
        id="email"
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={handleEmailChange}
      />
      <CTAButton as="button" type="submit">Join Now</CTAButton>
    </InputContainer>
  ) : <></>;
}

export default CTAInput;

import ExpandCircleDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandCircleTopIcon from '@mui/icons-material/ArrowDropUp';
import { Link, useNavigate, useParams } from "react-router-dom";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";

import EmailVerificationSentModal from "components/Modal/EmailVerificationSentModal";
import { NODE_ENV, PRIVACY_LINK, TERMS_AND_CONDITION } from "constants/env";
import HeadingLayout from "components/HeadingLayout/HeadingLayout";
import { PASSWORD_VALIDATION } from "constants/errorConstants";
import registerValidation from "validation/registerValidation";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKTypography from "components/custom/MKTypography";
import { isDwolla } from "constants/paymentEndpoints";
import loginStyle from "../Login/styles/loginStyle";
import MKButton from "components/custom/MKButton";
import MKInput from "components/custom/MKInput";
import MKBox from "components/custom/MKBox";
import { signupSaga } from "store/actions";
import { publicRoutes } from "routes";

const singupObj = {
  firstName: "",
  lastName: "",
  password: "",
  referral: "",
  confirm: "",
  email: "",
  tc: true,
};

function Register({ showModal, sso, noIdCheck, pid=""}) {
  const classes = loginStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { modalName } = useSelector((state) => state.modal);
  const { isLoading } = useSelector((state) => state.auth);
  const { email } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState({ create: false, confirm: false });
  const [verified, setVerified] = useState(false);
  const [refCode, setRefCode] = useState(false);
  const [open, setOpen] = useState(false);
  
  const initialValues = NODE_ENV === "development" ? singupObj : {...singupObj, tc: false};
  const passedReferralCode = id?.toUpperCase();
  const searchParams = new URLSearchParams(window.location.search);
  const queryParamsStr = searchParams.get('sharedCredentialsUuid');

  useEffect(() => {
    if(!formik.values.email && email){
      formik.setFieldValue("email", email);
    }
  }, [email]);

  useEffect(() => {
    if (modalName === "EMAIL_CONFIRMATION") {
      setOpen(true);
    }
  }, [modalName]);

  useEffect(() => {
    if (queryParamsStr) {
      if(sso && queryParamsStr){
          showModal()
      } 
      getOneClickProfile(queryParamsStr);
    }
  }, [queryParamsStr]);

  const getOneClickProfile = async function(sharedCredentialsUuid) {
    const requestBody = {
      sharedCredentialsUuid,
      oneclick: true
    };
    dispatch(signupSaga({ requestBody, navigate, sso }));
  }

  const submitBtnhandler = (values) => {
    const {email, password,firstName, referral, lastName  } = values;
    const requestBody = {
      email,
      password,
      firstName,
      lastName,
      ...((passedReferralCode && !noIdCheck || referral) && { referralCode: (passedReferralCode && !noIdCheck) ? passedReferralCode : formik.values.referral }),
    };
    dispatch(signupSaga({ requestBody, navigate }));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerValidation,
    onSubmit: (values) => {
      submitBtnhandler(values);
    },
  });

  // Verified check mark if user enters correct password format otherwise show validation message
  const verifyStatus = () => {
    if (
      formik.errors && // 👈 null and undefined check
      Object.keys(formik?.errors)?.length === 0 &&
      Object.getPrototypeOf(formik?.errors) === Object.prototype
    ) {
      return "";
    } else {
      const status =
        formik.errors?.password === undefined &&
          formik.values.password.length > 0
          ? true
          : false;
      if (status) {
        !verified && setVerified(status);
        return "";
      } else {
        verified && setVerified(status);
        return PASSWORD_VALIDATION;
      }
    }
  };

  const handleClickShowPassword = (prop) => {
    setShowPassword({ ...showPassword, [prop]: !showPassword[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleReferralCodeChange = (event) => {
    if (event?.target?.value) {
      event.target.value = event.target.value.toUpperCase();
    }
    formik.handleChange(event);
  };

  // const handlePaste = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
    <MKBox>
          <Grid
            container
            item
            justifyContent="center"
            className={classes.mt20}
            textAlign="center"
            display="block"
            px="20px"
            autoComplete="off"
          >
            {/* <MKBox>
              <img src={Logo} alt="logo" className={classes.logo} />
            </MKBox> */}
            <HeadingLayout
              heading="Create Your Login"
              subHeading={"Generational wealth tomorrow results from steps taken today"}
              subHeading1={"Real Estate Investing for You"}
              type="all"
            />
          </Grid>
          <Grid container item mx="auto">
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <MKBox px={3} py={3}>
                <Grid container spacing={3} >
                <Grid item xs={12} md={6}>
                  <MKInput
                    fullWidth
                    id="first-name"
                    name="firstName"
                    label="First Name"
                    requiredLabel
                    // labelColor={classes.labelColor}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6} className={classes.mTopReg}>
                  <MKInput
                    fullWidth
                    id="last-name"
                    label="Last Name"
                    requiredLabel
                    // labelColor={classes.labelColor}
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
                  <Grid item xs={12} md={12} lg={12} style={{ paddingTop: 5 }}>
                    <MKInput
                      fullWidth
                      id="email"
                      autoComplete="email"
                      label="Email"
                      requiredLabel
                      name="email"
                      // labelColor={classes.labelColor}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} style={{ paddingTop: 5 }}>
                    <MKInput
                      fullWidth
                      type={showPassword.create ? "text" : "password"}
                      id="password"
                      autoComplete="new-password"
                      requiredLabel
                      label="Create Password"
                      // labelColor={classes.labelColor}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.errors.password && formik.touched.password
                          ? formik.errors.password
                          : formik.values.password.length > 0
                            ? verifyStatus()
                            : ""
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                handleClickShowPassword("create");
                              }}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="small"
                            >
                              {!showPassword.create ? (
                                <Visibility className={classes.passwordIcon} />
                              ) : (
                                <VisibilityOff
                                  className={classes.passwordIcon}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        className: "hideMSReveal",
                      }}
                    />
                    {verified && (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          sx={{
                            // color: "#4F4F4F",
                            fontSize: "13px",
                            fontWeight: 500,
                            marginLeft: "4px",
                          }}
                        >
                          Verified
                        </Typography>
                        <CheckCircleIcon className={classes.checkCircleIcon} />
                      </Box>
                    )}
                  </Grid>
                  { !passedReferralCode && <Grid item  display="flex" alignItems="center">
                    <Typography
                        className={`${classes.link1}`}
                        display="flex"
                        alignItems="center"
                        onClick={() => setRefCode(!refCode)}                      
                    >
                      {" "}
                      Use Referral Code { 
                        !refCode ? <ExpandCircleDownIcon style={{ height: "30px", width: "30px", marginLeft:"0px", marginTop: "0px"}} /> 
                                 : <ExpandCircleTopIcon  style={{ height: "30px", width: "30px", marginLeft:"0px", marginTop: "0px"}} /> }
                    </Typography>
                  </Grid> }
                  { (refCode || id) && <Grid item xs={12} md={12} lg={12} style={{ paddingTop: 5 }}>
                    <MKInput
                      fullWidth
                      type="text"
                      id="referral"
                      label={passedReferralCode ? "Referral Code" : ""}
                      // labelColor={classes.labelColor}
                      value={(passedReferralCode && !noIdCheck) ? passedReferralCode : formik.values.referral}
                      onChange={handleReferralCodeChange}
                      // onPaste={handlePaste}
                      error={
                        formik.touched.referral &&
                        Boolean(formik.errors.referral)
                      }
                      helperText={
                        formik.touched.referral && formik.errors.referral
                      }
                      inputProps={{
                        className: "hideMSReveal",
                        //style: {textTransform: 'uppercase'}
                      }}
                      disabled={passedReferralCode && !noIdCheck}
                    />
                  </Grid> }
                  <Grid
                    item
                    xs={12}
                    alignItems="center"
                    ml={-1}
                    // mt={-2}
                    padding="24px"
                    className={classes.sectionTerms}
                  >
                    <CheckBox
                      checked={formik.values.tc}
                      id="tc"
                      label="tc"
                      name="tc"
                      className={
                        formik.touched.tc && formik.errors.tc
                          ? `${classes.checkBox} error_checkbox`
                          : `${classes.checkBox}`
                      }
                      onChange={formik.handleChange}
                    />
                    <MKBox sx={{ lineHeight: "15px", marginTop: "5px" }}>
                      <MKTypography
                        display="inline"
                        fontWeight="regular"
                        name="tc"
                        className={
                          formik.touched.tc && formik.errors.tc
                            ? `${classes.termsText} error`
                            : `${classes.termsText} text`
                        }
                        onClick={() =>
                          formik.setFieldValue("tc", !formik.values.tc)
                        }
                      >
                        I have read and accept the
                      </MKTypography>

                      <MKTypography
                        className={classes.termsText}
                        display="inline"
                        fontWeight="regular"
                        // color="primary"
                      >
                        <MKTypography
                          className={`${classes.termsText} ${classes.link}`}
                          component="span"
                          display="inline"
                        >
                          <a 
                            href={TERMS_AND_CONDITION}
                            target="_blank"
                            rel="noreferrer"
                          >
                          {" "}
                          Terms & Conditions
                          </a>
                        </MKTypography>
                        <MKTypography
                          variant="span"
                          display="inline"
                          className={classes.termsText}
                        >
                          {" "}
                          and{" "}
                        </MKTypography>
                        <MKTypography
                          display="inline"
                          className={`${classes.termsText} ${classes.link}`}
                          component="span"
                          target="_blank"
                        >
                          <a 
                            href={PRIVACY_LINK}
                            target="_blank"
                            rel="noreferrer"
                          >
                          {" "}
                          Privacy Policy
                          </a>
                        </MKTypography>
                        <MKTypography
                          variant="span"
                          display="inline"
                          className={classes.termsText}
                        >
                          {" "}
                          {isDwolla && "as well as our partner Dwolla's"}
                        </MKTypography>
                        {isDwolla && (
                          <>
                          <MKTypography
                            className={`${classes.termsText} ${classes.link}`}
                            component="a"
                            display="inline"
                            href={
                              "https://www.dwolla.com/legal/dwolla-account-terms-of-service/"}
                            target="_blank"
                          >
                            {" "}
                            Terms & Conditions
                          </MKTypography>
                          <MKTypography
                            variant="span"
                            display="inline"
                            className={classes.termsText}
                          >
                            {" "}
                            and{" "}
                          </MKTypography>
                          <MKTypography
                            display="inline"
                            className={`${classes.termsText} ${classes.link}`}
                            component="span"
                            href={"https://www.dwolla.com/legal/privacy/"}
                            target="_blank"
                          >
                            <a href={PRIVACY_LINK}>
                              Privacy Policy.
                            </a>
                          </MKTypography>
                        </>
                        )}

                      </MKTypography>
                      
                      {formik.errors.tc &&
                      <MKTypography
                        display="block"
                        fontWeight="regular"
                        name="tc"
                        className={
                          formik.touched.tc && formik.errors.tc
                            ? `${classes.termsText} error`
                            : `${classes.termsText} text`
                        }       
                        sx={{ color: (theme) =>  theme.palette.error.main}}
                      >
                        {formik.errors.tc}
                      </MKTypography>
                      }
                    </MKBox>
                  </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={12} lg={12} sm={12}>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      // color="primary"
                      style={{ marginTop: 10 }}
                      fullWidth
                    >
                      <ButtonSpinner
                        text="Sign Up"
                        isLoading={isLoading.signup}
                      />
                    </MKButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={12}
                  sm={12}
                  style={{ textAlign: "center" }}
                  mt={2}
                  mb={3}
                >
                  <MKTypography
                    variant="description"
                    mb={1}
                    // sx={{ color: "#4F4F4F" }}
                  >
                    Already have an account?
                  </MKTypography>

                  <MKTypography variant="button" fontWeight="medium" ml={1}>
                    <Link
                      to={noIdCheck ? `/?id=${pid}` : publicRoutes.find(x => x.name === 'Login').path}
                      className={`${classes.formLink} ${classes.formLink1}`}
                    >
                      Login Here
                    </Link>
                  </MKTypography>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
    </MKBox>
     <EmailVerificationSentModal
     open={open}
     setOpen={setOpen}
     email={formik.values.email}
   />
   </>
  );
}

export default Register;

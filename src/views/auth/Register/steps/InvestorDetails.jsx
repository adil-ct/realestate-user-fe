import { useEffect, useState } from "react";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormHelperText } from "@material-ui/core";
import {
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import "react-phone-input-2/lib/material.css";
import toaster from "utils/toaster";

import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import PhoneInput from "components/custom/PhoneInput";
import DatePickerIcon from "assets/images/svgs/datePickerIcon";
import axios from "axios";

// consist of form validations
import validationSchema from "validation/registerValidationSchema";
import validationSchemaMobile from "validation/mobileValidation";

import { styles } from "../styles/registerStyles";
import {
  verifyOTPSaga,
  sendOTP,
  getLocation,
  resendEmailSaga,
} from "store/actions";
import { setPersonalDetail } from "store/actions/user/user";
import Virtualize from "components/Autocomplete";

const InvestorDetails = (props) => {
  const classes = styles();
  const [step, setStep] = useState(0);
  const { setActiveStep } = props;
  const [dialCode, setDialCode] = useState("1");
  const [rawNumber, setRawNumber] = useState("");
  // const [hasFocus, setHasFocus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [verifiedNumber, setVerifiedNumber] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("");
  const [fetchingLocation, setFetchLocation] = useState(true);
  const { countries, state } = useSelector((state) => state.auth.location);
  const { isLoading: isLoadingAuth, userData } = useSelector(
    (state) => state.auth
  );
  const { isLoading: isLoadingUser } = useSelector((state) => state.user);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const fetchUserLocation = async () => {
    try {
      const res = await axios.get("https://ipinfo.io/json");
      setDefaultCountry(res?.data?.country);
      setFetchLocation(false);
    } catch (err) {
      setDefaultCountry("United States");
      setFetchLocation(false);
    }
  };

  useEffect(() => {
    dispatch(
      getLocation({
        reqType: "get",
        url: "/auth/country-code",
        type: "countries",
      })
    );
  }, []);

  useEffect(() => {
    if (countries?.length) {
      fetchUserLocation();
    }
  }, [countries]);

  // useEffect(() => {
  //   dispatch(
  //     getLocation({
  //       reqType: "get",
  //       url: "/auth/district/United States",
  //       type: "state",
  //     })
  //   );
  // }, []);

  const setCountryField = async (selected) => {
    formik.setFieldValue("country", selected);
    getStates(selected);
    // const fieldName = await countries.filter(
    //   (item) => item.country_name === selected
    // );
    // if (fieldName.length > 0) {

    //   // getCities(selected); // Remove once city API work currect
    // } else {
    //   formik.setFieldValue("country", "");
    // }
  };

  const setStateField = async (selected) => {
    if (state && state?.data && Object.keys(state?.data).length) {
      Object.values(state?.data).find((item, index) => {
        if (item.name === selected) {
          setStateCode(Object.keys(state.data)[index]);
          formik.setFieldValue("state", selected);
        }
      });
    }
    // getCities(selected)  uncomment once city API work currect
  };

  // const setCityField = async (selected) => {
  //   const fieldName = await city.filter((item) => item === selected);
  //   if (fieldName.length > 0) {
  //     formik.setFieldValue("city", fieldName[0]);
  //   } else {
  //     formik.setFieldValue("city", "");
  //   }
  // };

  // const getCities = async (stateName) => {
  //   formik.setFieldValue("city", "");
  //   await dispatch(
  //     getLocation({
  //       reqType: "get",
  //       url: `/auth/cities/${stateName}`,
  //       type: "city",
  //       successHandler: () => setDisabled(false),
  //     })
  //   );
  // };

  const getStates = async (cityName) => {
    formik.setFieldValue("state", "");
    await dispatch(
      getLocation({
        reqType: "get",
        url: `/auth/district/${cityName}`,
        type: "state",
        successHandler: () => setDisabled(false),
        failedHandler: () => setDisabled(false),
      })
    );
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    mobileNumber: "",
    countryCode: "+1",
    address1: "",
    address2: "",
    isMobileVerified: false,
    userAccountType: "investor",
  };

  const handleSuccess = () => {
    setActiveStep(1);
    window.scrollTo(0, 0);
  };

  // Signup api handler
  const submitBtnhandler = (values) => {
    const requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      dob: moment(values.dob).format("MM/DD/YYYY"),
      country: values.country,
      state: values.state,
      city: values.city,
      zipCode: values.postalCode,
      address1: values.address1,
      mobileVerified: true,
      stateCode: stateCode,
    };
    if (values.mobileNumber) {
      requestBody.mobileNumber = values.mobileNumber;
    }
    if (values.countryCode) {
      requestBody.countryCode = values.countryCode;
    }
    if (values.address2) {
      requestBody.address2 = values.address2;
    }

    dispatch(setPersonalDetail({ requestBody, handleSuccess }));
  };

  // shows last 2 digit of phone number
  const getHiddenPhoneNumber = () => {
    return `********${formik.values.mobileNumber?.toString()?.slice(-2)}`;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: step === 0 ? validationSchemaMobile : validationSchema,
    onSubmit: (values) => {
      step === 0 ? gotoNextStep() : submitBtnhandler(values);
    },
  });

  const gotoNextStep = () => {
    setStep(1);
    formik.setErrors({});
    formik.setTouched({}, false);
  };

  const otpData = {
    mobileNumber: formik.values.mobileNumber,
    countryCode: formik.values.countryCode,
  };

  // Success handler once otp is verified
  const handleVerifyOtpSuccess = () => {
    setShowModal(false);
    toaster.success("Your mobile number has been verified successully");
    formik.setFieldValue("isMobileVerified", true);
    setVerifiedNumber(
      `${formik.values.countryCode}${formik.values.mobileNumber}`
    );
  };

  const handleOTPVerify = (reqBody) => {
    const requestBody = {
      mobileNumber: `${formik.values.countryCode}${formik.values.mobileNumber}`,
      code: reqBody.code,
    };
    dispatch(
      verifyOTPSaga({
        requestBody,
        handleSuccess: handleVerifyOtpSuccess,
        customeMsg: true,
      })
    );
  };

  const handleResend = () => {
    const requestBody = {
      channel: "SMS",
      mobileNumber: `${formik.values.countryCode}${formik.values.mobileNumber}`,
    };
    dispatch(sendOTP({ requestBody }));
  };

  const handleStateChange = (e) => {
    formik.handleChange(e);
    setStateCode(e.target.value.slice(0, 2).toUpperCase());
  };

  const sendOTPSuccess = () => {
    // show modal to enter otp
    setShowModal(true);
  };

  const sendOTPToMobile = async (event) => {
    event.preventDefault();
    if (userData?.emailVerified) {
      // send otp
      const requestBody = {
        channel: "SMS",
        mobileNumber: `${formik.values.countryCode}${formik.values.mobileNumber}`,
      };
      dispatch(sendOTP({ requestBody, handleSuccess: sendOTPSuccess }));
    } else {
      toaster.info("Email Verification is pending !");
    }
  };

  const getMaxDate = (dayCount) => {
    const date = new Date();
    date.setDate(date.getDate() - dayCount);
    return date;
  };

  const resendEmail = () => {
    const requestBody = {
      email: userData?.email,
      status: "resend",
    };
    dispatch(resendEmailSaga({ requestBody }));
  };

  return (
    <>
      {!userData?.emailVerified && (
        <Alert severity="warning">
          An email verification link has been sent to
          <b> {userData?.email}</b>
          <br />
          Please verify your email to complete your registration process. In
          case you have not received the email verification link, please{" "}
          {isLoadingAuth.resendEmailVerification ? (
            <b className={classes.disabledText}> click here</b>
          ) : (
            <b className={classes.cursorPointer} onClick={resendEmail}>
              click here
            </b>
          )}{" "}
          to resend.
        </Alert>
      )}
      <Grid
        container
        item
        className={classes.borderDesktop}
        sx={{ mx: "auto" }}
      >
        {step == 0 ? (
          <MKBox
            width="100%"
            component="form"
            method="post"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <MKBox className={classes.formContainer1}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <InputLabel
                    error={
                      (formik.touched.mobileNumber &&
                        Boolean(formik.errors.mobileNumber)) ||
                      (formik.values.mobileNumber &&
                        formik.touched.isMobileVerified &&
                        formik.errors.isMobileVerified)
                    }
                  >
                    Phone Number
                    <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                      {" "}
                      *
                    </Typography>
                  </InputLabel>
                  <div style={{ position: "relative" }}>
                    <PhoneInput
                      inputProps={{
                        name: "mobileNumber",
                        required: true,
                        autoFocus: false,
                      }}
                      value={`${dialCode}${rawNumber}`}
                      // onFocus={() => {
                      //   setHasFocus(true);
                      // }}
                      // onBlur={() => {
                      //   setHasFocus(false);
                      // }}
                      inputStyle={{
                        // borderColor: hasFocus
                        //   ? "#00BFFF"
                        //   : (formik.touched?.mobileNumber &&
                        //       formik.errors?.mobileNumber &&
                        //       "#db4b5e") ||
                        //     (formik.touched?.isMobileVerified &&
                        //       formik.errors?.isMobileVerified &&
                        //       "#db4b5e") ||
                        //     "#CACACA",
                        width: "100%",
                        paddingTop: "11px",
                        paddingBottom: "12px",
                        boxShadow: "none",
                      }}
                      onChange={async (value, current) => {
                        // Show verified tag if user enter verified number
                        if (
                          verifiedNumber ===
                          `+${current.dialCode}${value.slice(
                            current.dialCode.length
                          )}`
                        ) {
                          formik.setFieldValue("isMobileVerified", true);
                        } else {
                          formik.setFieldValue("isMobileVerified", false);
                        }

                        // update formik value fields
                        if (current.dialCode !== dialCode) {
                          formik.setFieldValue(
                            "countryCode",
                            `+${current.dialCode}`
                          );
                          setDialCode(current.dialCode);
                        } else {
                          formik.setFieldValue(
                            "mobileNumber",
                            value.slice(current.dialCode.length)
                          );
                          setRawNumber(value.slice(current.dialCode.length));
                        }
                      }}
                    />
                    <div className={classes.phoneNumberBox}>
                      {formik.values.isMobileVerified ? (
                        <MKTypography
                          variant="button"
                          fontWeight="regular"
                          // color="success"
                          ml={2}
                          mr={2}
                          className={classes.phoneText}
                        >
                          <CheckCircleIcon className={classes.checkIcon} />
                          <MKTypography className={classes.verifiedText}>
                            Verified
                          </MKTypography>
                        </MKTypography>
                      ) : (
                        <Button
                          className={classes.verifyBtn}
                          disabled={
                            !formik.values.mobileNumber ||
                            formik.errors.mobileNumber
                          }
                          onClick={sendOTPToMobile}
                        >
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                  <FormHelperText error className={classes.inputError}>
                    {formik.touched.mobileNumber && formik.errors.mobileNumber}
                  </FormHelperText>
                  <FormHelperText error className={classes.inputError}>
                    {formik.values.mobileNumber &&
                      formik.touched.isMobileVerified &&
                      formik.errors.isMobileVerified}
                  </FormHelperText>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sm={12}
                  className={classes.nextBtnBox}
                >
                  <MKButton
                    type="submit"
                    variant="gradient"
                    // color="primary"
                    className={classes.nextBtnVerify}
                    disabled={
                      isLoadingUser.setPersonalDetails ||
                      !(formik.isValid && formik.dirty) ||
                      !formik.values.isMobileVerified
                    }
                  >
                    <ButtonSpinner
                      text="Next"
                      isLoading={isLoadingUser.setPersonalDetails}
                    />
                  </MKButton>
                  <MKButton
                    variant="gradient"
                    onClick={
                      !formik.values.isMobileVerified
                        ? sendOTPToMobile
                        : formik.handleSubmit
                    }
                    // color="primary"
                    className={classes.nextBtnMobile}
                    disabled={
                      isLoadingUser.setPersonalDetails ||
                      !(formik.isValid && formik.dirty)
                    }
                  >
                    <ButtonSpinner
                      text={formik.values.isMobileVerified ? "Next" : "Verify"}
                      isLoading={isLoadingUser.setPersonalDetails}
                    />
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        ) : (
          <MKBox
            width="100%"
            component="form"
            method="post"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <MKBox className={classes.formContainer1}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <MKInput
                    fullWidth
                    id="first-name"
                    name="firstName"
                    label={
                      <>
                        First Name
                        <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                          {" "}
                          *
                        </Typography>
                      </>
                    }
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
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <MKInput
                    fullWidth
                    id="last-name"
                    label={
                      <>
                        Last Name
                        <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                          {" "}
                          *
                        </Typography>
                      </>
                    }
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
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    helperText={formik.touched.dob && formik.errors.dob}
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                  >
                    <DatePicker
                      inputFormat="MM/dd/yyyy"
                      maxDate={getMaxDate(1)} // if 1 then it's yesterday
                      id="dob"
                      name="dob"
                      label={
                        <>
                          Date of Birth
                          <Typography
                            component="span"
                            // sx={{ color: "#db4b5e" }}
                          >
                            {" "}
                            *
                          </Typography>
                        </>
                      }
                      value={formik.values.dob}
                      onChange={(newValue) => {
                        formik.setFieldValue("dob", newValue);
                      }}
                      components={{
                        OpenPickerIcon: DatePickerIcon,
                      }}
                      renderInput={(params) => (
                        <MKInput
                          {...params}
                          helperText={formik.touched.dob && formik.errors.dob}
                          error={
                            formik.touched.dob && Boolean(formik.errors.dob)
                          }
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <InputLabel
                    error={
                      (formik.touched.mobileNumber &&
                        Boolean(formik.errors.mobileNumber)) ||
                      (formik.values.mobileNumber &&
                        formik.touched.isMobileVerified &&
                        formik.errors.isMobileVerified)
                    }
                  >
                    Phone Number
                    <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                      {" "}
                      *
                    </Typography>
                  </InputLabel>
                  <div style={{ position: "relative" }}>
                    <PhoneInput
                      inputProps={{
                        name: "mobileNumber",
                        required: true,
                        autoFocus: false,
                      }}
                      value={`${dialCode}${rawNumber}`}
                      // onFocus={() => {
                      //   setHasFocus(true);
                      // }}
                      // onBlur={() => {
                      //   setHasFocus(false);
                      // }}
                      inputStyle={{
                        // borderColor: hasFocus
                        //   ? "#00BFFF"
                        //   : (formik.touched?.mobileNumber &&
                        //       formik.errors?.mobileNumber &&
                        //       "#db4b5e") ||
                        //     (formik.touched?.isMobileVerified &&
                        //       formik.errors?.isMobileVerified &&
                        //       "#db4b5e") ||
                        //     "#CACACA",
                        width: "100%",
                        paddingTop: "11px",
                        paddingBottom: "12px",
                        boxShadow: "none",
                      }}
                      onChange={async (value, current) => {
                        // Show verified tag if user enter verified number
                        if (
                          verifiedNumber ===
                          `+${current.dialCode}${value.slice(
                            current.dialCode.length
                          )}`
                        ) {
                          formik.setFieldValue("isMobileVerified", true);
                        } else {
                          formik.setFieldValue("isMobileVerified", false);
                        }

                        // update formik value fields
                        if (current.dialCode !== dialCode) {
                          formik.setFieldValue(
                            "countryCode",
                            `+${current.dialCode}`
                          );
                          setDialCode(current.dialCode);
                        } else {
                          formik.setFieldValue(
                            "mobileNumber",
                            value.slice(current.dialCode.length)
                          );
                          setRawNumber(value.slice(current.dialCode.length));
                        }
                      }}
                    />
                    <div className={classes.phoneNumberBox}>
                      {formik.values.isMobileVerified ? (
                        <MKTypography
                          variant="button"
                          fontWeight="regular"
                          // color="success"
                          ml={2}
                          mr={2}
                          className={classes.phoneText}
                        >
                          <CheckCircleIcon className={classes.checkIcon} />
                          <MKTypography className={classes.verifiedText} component="span">
                            Verified
                          </MKTypography>
                        </MKTypography>
                      ) : (
                        <Button
                          className={classes.verifyBtn}
                          disabled={
                            !formik.values.mobileNumber ||
                            formik.errors.mobileNumber
                          }
                          onClick={sendOTPToMobile}
                        >
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                  <FormHelperText error className={classes.inputError}>
                    {formik.touched.mobileNumber && formik.errors.mobileNumber}
                  </FormHelperText>
                  <FormHelperText error className={classes.inputError}>
                    {formik.values.mobileNumber &&
                      formik.touched.isMobileVerified &&
                      formik.errors.isMobileVerified}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <MKInput
                    fullWidth
                    multiline
                    label={
                      <>
                        Address Line 1
                        <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                          {" "}
                          *
                        </Typography>
                      </>
                    }
                    aria-label="minimum height"
                    minRows={1}
                    id="filled-multiline-flexible1"
                    name="address1"
                    placeholder="Street number and name"
                    value={formik.values.address1}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address1 && Boolean(formik.errors.address1)
                    }
                    helperText={
                      formik.touched.address1 && formik.errors.address1
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <MKInput
                    fullWidth
                    multiline
                    label={
                      <>
                        Address Line 2
                        <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                          {" "}
                        </Typography>
                      </>
                    }
                    aria-label="minimum height"
                    minRows={1}
                    id="filled-multiline-flexible2"
                    name="address2"
                    placeholder="Unit / Apartment number and name"
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <MKInput
                    fullWidth
                    id="city"
                    label={
                      <>
                        City
                        <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                          {" "}
                          *
                        </Typography>
                      </>
                    }
                    sx={{ marginY: "10px" }}
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <MKInput
                    fullWidth
                    id="pin-code"
                    label={
                      <>
                        Zip Code
                        <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                          {" "}
                          *
                        </Typography>
                      </>
                    }
                    sx={{ marginY: "10px" }}
                    name="postalCode"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.postalCode &&
                      Boolean(formik.errors.postalCode)
                    }
                    helperText={
                      formik.touched.postalCode && formik.errors.postalCode
                    }
                  />
                </Grid>
                {!state?.data || isLoadingAuth.state ? (
                  <Grid item xs={12} md={6} className={classes.pTop}>
                    <MKInput
                      fullWidth
                      id="state"
                      label={
                        <>
                          State
                          <Typography
                            component="span"
                            // sx={{ color: "#db4b5e" }}
                          >
                            {" "}
                            *
                          </Typography>
                        </>
                      }
                      sx={{ marginY: "10px" }}
                      name="state"
                      value={formik.values.state}
                      onChange={handleStateChange}
                      error={
                        formik.touched.state && Boolean(formik.errors.state)
                      }
                      helperText={formik.touched.state && formik.errors.state}
                      disabled={disabled}
                    />
                  </Grid>
                ) : (
                  <Grid item xs={12} md={6} className={classes.pTop}>
                    <InputLabel
                      error={
                        formik.touched.state && Boolean(formik.errors.state)
                      }
                    >
                      State
                      <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                        {" "}
                        *
                      </Typography>
                    </InputLabel>
                    <FormControl
                      fullWidth
                      error={
                        formik.touched.state && Boolean(formik.errors.state)
                      }
                    >
                      <Virtualize
                        isLoading={disabled || isLoadingAuth.state}
                        formik={formik}
                        name="state"
                        id="state"
                        data={state?.data ? Object.values(state.data) : []}
                        onChangeHandler={setStateField}
                        valueField="name"
                      />
                    </FormControl>
                  </Grid>
                )}
                <Grid item xs={12} md={6} className={classes.pTop}>
                  <InputLabel
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                  >
                    Country
                    <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                      {" "}
                      *
                    </Typography>
                  </InputLabel>
                  <FormControl
                    fullWidth
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                  >
                    <Virtualize
                      isLoading={isLoadingAuth.countries || fetchingLocation}
                      formik={formik}
                      name="country"
                      id="country"
                      data={countries}
                      onChangeHandler={setCountryField}
                      defaultValue={countries.find(
                        (country) => country.country_name === defaultCountry
                      )}
                      valueField="country_name"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sm={12}
                  className={classes.nextBtnBox}
                >
                  <MKButton
                    type="submit"
                    variant="gradient"
                    // color="primary"
                    className={classes.nextBtn}
                    disabled={isLoadingUser.setPersonalDetails}
                  >
                    <ButtonSpinner
                      text="Next"
                      isLoading={isLoadingUser.setPersonalDetails}
                    />
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        )}
        <PhoneNumberVerificationModal
          title="Verify Mobile Number"
          description={`Enter code sent to ${getHiddenPhoneNumber()}`}
          show={showModal}
          setShow={setShowModal}
          otpData={otpData}
          onSubmit={handleOTPVerify}
          handleResend={handleResend}
          isLoading={isLoadingAuth?.OTPVerify}
        />
      </Grid>
    </>
  );
};
export default InvestorDetails;

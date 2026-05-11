import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FormHelperText } from "@material-ui/core";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import {
  InputLabel,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import _ from "lodash"
import "react-phone-input-2/lib/material.css";

import colors from "assets/theme/base/colors";
import style from "./profileStyle";
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import PhoneInput from "components/custom/PhoneInput";
import toaster from "utils/toaster";

import validationSchema from "validation/registerValidationSchema";
import registerValidationWithPhone from "validation/registerValidationWithPhone"
import { verifyOTPSaga, sendOTP, getLocation } from "store/actions";
import { setPersonalDetail } from "store/actions/user/user";
import { profileFetch } from "store/actions";
import VirtualizedSelect from "components/VirtualizedSelect";
import { routePaths } from "routes/mainRoutes/routePaths";

const Profile = ({ modal=false, handler= () => {}, alldDisabled=false, setAllDisabled }) => {
  const classes = style();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [screenWidth, setScreenWidth]   = useState(window.innerWidth);
  const [dialCode, setDialCode] = useState("1");
  const [showModal, setShowModal] = useState(false);
  const [verifiedNumber, setVerifiedNumber] = useState("");
  const [isStateUpdating, setIsStateUpdating] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const { countries, state } = useSelector((state) => state.auth.location);
  const { isLoading: isLoadingAuth, userData } = useSelector(
    (state) => state.auth
  );
  const requiredCheck = userData?.address1 && userData?.dob;


  let defaultCountry = useMemo(() => ({
    value: "US",
    label: "United States"
  }), []);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  }

  // Save countries data coming from api 
  useEffect(() => {
    if(countries?.length)
    {
      const updatedRes = countries.map((item) => ({
        value: item.TLD,
        label: item.country_name
      }));
      setCountryList(updatedRes)
    }
  }, [countries])

  // Save states data coming from api 
  useEffect(() => {
    if(!(_.isEmpty(state?.data)))
    {
      const updatedRes = Object.keys(state?.data).map(key => ({
        label: state?.data[key].name,
        value: key
      }));
      setStateList(updatedRes)
    }
    else{
      setStateList([])
    }
    
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [state])

  // Calling getListOfCountries api
  useEffect(() => {
    dispatch(
      getLocation({
        reqType: "get",
        url: "/auth/country-code",
        type: "countries",
      })
    );
    dispatch(profileFetch())
  }, []);

  // On Country Change Handler
  const setCountryField = async (selected) => {
    formik.setFieldValue("country", selected);
    getStates(selected?.label);
  };

  // On State Change Handler
  const setStateField = async (selected) => {
    formik.setFieldValue("state", selected);
  };

  // Calling GetListOfStatesApi
  const getStates = async (countryName) => {
    if (!alldDisabled) {
      formik.setFieldValue("state", "");
    }
    await dispatch(
      getLocation({
        reqType: "get",
        url: `/auth/district/${countryName}`,
        type: "state",
        successHandler: () => {},
        failedHandler: () => {},
      })
    );
  };

  // Fetching states for default country selected
  useEffect(() => {
    if(defaultCountry?.label?.length && !userData?.country && !isLoadingAuth?.profile){
      getStates(defaultCountry?.label)
    }
  }, [defaultCountry, userData?.country])

  // Fetching states for user selected country
  useEffect(() => {
    if(userData?.country)
    {
      defaultCountry = {
        label: "",
        value: "",
      }
      getStates(userData?.country)
    }
  }, [userData?.country])

  // Profile Update Success Handler
  const handleSuccess = () => {
    !modal && setAllDisabled(true);
    dispatch(profileFetch({ handleSuccess: handleProfileFetchSuccess }));
    if(modal){
      handler()
    }
    else{
      if(!requiredCheck) navigate(routePaths.INVESTOR_PATH)
    }
  };

  // Setting Verified Phone number
  useEffect(() => {
    if(verifiedNumber?.length === 0 &&  !modal){
      if( userData?.mobileNumber &&  userData?.countryCode)
      {
        setVerifiedNumber(userData?.countryCode + userData?.mobileNumber)
      }
    }
  }, [userData])

  const handleProfileFetchSuccess = () => {
    // disable loading
    setIsStateUpdating(false);
  };

  const formatDob = (dobString) => {
    if(!dobString) {
      return '';
    }
    const zonelessDate = dobString.replace('Z', '');
    return dayjs(zonelessDate);
  };

  const initialValues = {
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    dob: formatDob(userData?.dob),
    country: userData?.country ? { value: userData?.countryISO2, label: userData?.country } : defaultCountry,
    state: userData?.state ? { value: userData?.stateCode, label: userData?.state} : { value: "", label: ""},
    city: userData?.city || '',
    postalCode: userData?.zipCode || '',
    mobileNumber: userData?.mobileNumber || '',
    countryCode: userData?.countryCode || '',
    address1: userData?.address1 || '',
    address2: userData?.address2 || '',
    isMobileVerified: userData?.mobileVerified ? userData?.mobileVerified :false,
    email: userData?.email || '',
    userAccountType: "investor",
    ssn: userData?.ssn || ''
  };

  // Signup api handler
  const submitBtnhandler = (values) => {
    const requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      dob: values.dob.format("MM-DD-YYYY"),
      country: values.country.label,
      state: values.state?.label,
      city: values.city,
      zipCode: values.postalCode,
      address1: values.address1,
      mobileVerified: values.isMobileVerified,
      stateCode: values.state.value,
      ssn: values.ssn,
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
    setIsStateUpdating(true);
    dispatch(setPersonalDetail({ requestBody, handleSuccess, handleFail: handleProfileFetchSuccess }));
  };

  // shows last 2 digit of phone number
  const getHiddenPhoneNumber = () => {
    return `********${formik.values.mobileNumber?.toString()?.slice(-2)}`;
  };


  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: modal ? validationSchema : registerValidationWithPhone,
    onSubmit: (values) => {
      submitBtnhandler(values);
    },
  });

  const otpData = {
    mobileNumber: formik.values.mobileNumber,
    countryCode: formik.values.countryCode,
  };

  // Success handler once otp is verified
  const handleVerifyOtpSuccess = () => {
    setShowModal(false);
    toaster.success("Your mobile number has been verified successully");
    formik.setFieldValue("isMobileVerified", true);
  };

  const handleOTPVerify = (reqBody) => {
    const requestBody = {
      mobileNumber: `${formik.values.countryCode}${formik.values.mobileNumber}`,
      code: reqBody.code,
    };
    dispatch(
      verifyOTPSaga({ requestBody, handleSuccess: handleVerifyOtpSuccess, customeMsg: true })
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
    // formik.handleChange(e);
    formik.setFieldValue("state", {
      label: e.target.value,
      value: e.target.value.slice(0, 2).toUpperCase()
    })
  };

  const sendOTPSuccess = () => {
    // show modal to enter otp
    setShowModal(true);
    setVerifiedNumber(
      `${formik.values.countryCode}${formik.values.mobileNumber}`
    );
  };

  const verifyMobileNumber = async (event) => {
    event.preventDefault();
    // send otp
    const requestBody = {
      channel: "SMS",
      mobileNumber: `${formik.values.countryCode}${formik.values.mobileNumber}`,
    };
    dispatch(sendOTP({ requestBody, handleSuccess: sendOTPSuccess }));
  };

  return (
     <MKBox
     width="100%"
     component="form"
     method="post"
     autoComplete="off"
     onSubmit={formik.handleSubmit}
     className={classes.profileFormTopContainer}
   >
     <MKBox p={3} mt={-2}>
       <Grid container spacing={3}>
         <Grid item xs={6} sm={6} md={6} lg={6}   className={classes.gridItem}>
           <MKInput
             fullWidth
             id="first-name"
             name="firstName"
             label={<>First Name</>}
             requiredLabel
             value={formik.values.firstName}
             disabled={alldDisabled}
             onChange={formik.handleChange}
             error={
               formik.touched.firstName &&
               Boolean(formik.errors.firstName)
             }
             helperText={
               formik.touched.firstName ? '' : formik.errors.firstName
             }
           />
         </Grid>
         <Grid item xs={6} sm={6} md={6} lg={6}  className={classes.gridItem}>
           <MKInput
             fullWidth
             id="last-name"
             label={<>Last Name</>}
             requiredLabel
             name="lastName"
             value={formik.values.lastName}
             disabled={alldDisabled}
             onChange={formik.handleChange}
             error={
               formik.touched.lastName && Boolean(formik.errors.lastName)
             }
             helperText={
               formik.touched.lastName ? '' : formik.errors.lastName
             }
           />
         </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.gridItem} mt={-1}>
            <InputLabel
              error={
                (formik.touched.dob &&
                  Boolean(formik.errors.dob)) ||
                (Boolean(formik.values.dob) && formik.touched.dob &&
                  !formik.values.dob)
              }
              sx={{ textAlign: "left"  }}
            >
              Date of Birth
              <Typography component="span" sx={{ color: colors.inputs.label.asterisk.main }}>
                {" *"}
              </Typography>
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  hiddenLabel
                  fullWidth
                  clearable
                  name='dob'
                  id='dob'
                  value={formik?.values?.dob}
                  className={classes.dobInput}
                  onChange={(newValue) =>  {
                    formik.setFieldValue("dob", newValue)
                  }}
                  format="MM/DD/YYYY"
                  disabled={alldDisabled}
                />
              </LocalizationProvider>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} mt={-1}
          className={`${classes.gridItem} ${classes.ssnInput}`} 
        >
          <MKInput
            fullWidth
            id='ssn'
            autoComplete='off'
            label={<>{screenWidth > 620 ? 'Social Security Number' : 'SSN'}</>}
            labelTailIcon={{
              toolTip : {
                text : 'Federal regulation requires that we collect this information. It is used solely for identification purposes and will not affect your credit.',
                placement : 'bottom-end'
              },
              Icon : HelpOutlineIcon
            }}
            requiredLabel
            name='ssn'
            inputProps={{ maxLength: 11 }}
            disabled={alldDisabled}
            placeholder="___-__-____"
            value={alldDisabled ? `XXX-XX-${formik?.values?.ssn.slice(-4)}` : formik?.values?.ssn}
            onChange={(e) => {
              const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
              if(!e.target.value == '' && !ssnRegex.test(e.target.value)) {
                if(formik.values.ssn.length > e.target.value.length 
                  && formik.values.ssn.charAt(formik.values.ssn.length-1) === '-') { // backspace at dash
                    e.target.value = e.target.value.slice(0, -1);
                } else {
                  let val = e.target.value.replace(/\D/g, '');
                  val = val.replace(/^(\d{3})/, '$1-');
                  val = val.replace(/-(\d{2})/, '-$1-');
                  val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
                  e.target.value = val;
                }
              }
              formik.handleChange(e);
            }}
            error={
              formik.touched.ssn && Boolean(formik.errors.ssn)
            }
            helperText={
              formik.touched.ssn ? '' : formik.errors.ssn
            }
          />
        </Grid>
         { !modal && 
            <Grid 
              item xs={12} 
              md={6} 
              className={classes.gridItem} 
              mt={-1}
              justify="space-between"
            >
              <InputLabel
                error={
                  (formik.touched.mobileNumber &&
                    Boolean(formik.errors.mobileNumber)) ||
                  (Boolean(formik.values.mobileNumber) && formik.touched.isMobileVerified &&
                    !formik.values.isMobileVerified)
                }
                sx={{ textAlign: "left"  }}
              >
                Phone Number
                <Typography component="span" /*sx={{ color: "#db4b5e" }}*/>
                  {" "}
                </Typography>
              </InputLabel>
              <div style={{ position: "relative" }}>
                <PhoneInput
                  value={`${formik.values.countryCode}${formik.values.mobileNumber}`}
                  minLength="10"
                  disabled={alldDisabled}
                  error={
                    formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
                  }
                  inputProps={{
                    name: "mobileNumber",
                    required: false,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    //  borderColor: hasFocus
                    //    ? "#00BFFF"
                    //    : (formik.touched.mobileNumber &&
                    //     Boolean(formik.errors.mobileNumber)) ||
                    //   (formik.values.mobileNumber && formik.touched.isMobileVerified &&
                    //    !formik.values.isMobileVerified) ?
                    //        "#db4b5e" :
                    //      "#CACACA",
                    width: "100%",
                    boxShadow: "none",
                    //  background: alldDisabled ? "#F5F5F5" : "#fff",
                  }}
                  onChange={(value, current, e) => {
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
                    if (value.length > 10 + current.dialCode.length) {
                      e.preventDefault();
                    } else {
                      if (current.dialCode !== dialCode) {
                        setDialCode(current.dialCode);
                      }
                      formik.setFieldValue(
                        "mobileNumber",
                        value.slice(current.dialCode.length)
                      );
                      formik.setFieldValue(
                        "countryCode",
                        `+${current.dialCode}`
                      );
                    }
                  }}
                />
                <div className={classes.phoneNumberBox}>
                  {formik.values.isMobileVerified ? (
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
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
                    <MKButton
                      className={classes.verifyBtn}
                      disabled={
                        !formik.values.mobileNumber ||
                        formik.errors.mobileNumber ||
                        alldDisabled
                      }
                      onClick={verifyMobileNumber}
                    >
                      Verify
                    </MKButton>
                  )}
                </div>
              </div>
              <FormHelperText error className={classes.inputError}>
                {formik.touched.mobileNumber ? '' : formik.errors.mobileNumber}
              </FormHelperText>
              <FormHelperText error className={classes.inputError}>
                { (formik.values.mobileNumber && !formik.values.isMobileVerified) ? 'Mobile number not verified' :
                  ""}
              </FormHelperText>
         </Grid> }
         <Grid item xs={12} md={6} className={classes.gridItem} mt={-1}>
           <MKInput
             fullWidth
             multiline
             label={<>Address</>}
             aria-label="address-line-1"
             minRows={1}
             requiredLabel
             id="filled-multiline-flexible1"
             name="address1"
             placeholder="Street address"
             value={formik.values.address1}
             disabled={alldDisabled}
             onChange={formik.handleChange}
             error={
               formik.touched.address1 && Boolean(formik.errors.address1)
             }
             helperText={
               formik.touched.address1 ? '' : formik.errors.address1
             }
           />
         </Grid>
         <Grid item xs={12} md={6} className={`${classes.gridItem} ${classes.address2}`} mt={-1}>
           <MKInput
             fullWidth
             label={<>Address Line 2</>}
             aria-label="address-line-2"
             minRows={1}
             id="filled-multiline-flexible2"
             name="address2"
             placeholder="Apt, suite, unit, building, floor, etc."
             value={formik.values.address2}
             disabled={alldDisabled}
             onChange={formik.handleChange}
           />
         </Grid>
         <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
           <MKInput
             fullWidth
             id="city"
             label={<>City</>}
             requiredLabel
             sx={{ marginY: "10px" }}
             name="city"
             value={formik.values.city}
             placeholder=""
             disabled={alldDisabled}
             onChange={formik.handleChange}
             error={formik.touched.city && Boolean(formik.errors.city)}
             helperText={formik.touched.city ? '' : formik.errors.city}
           />
         </Grid>
         <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
           <MKInput
             fullWidth
             id="pin-code"
             inputProps={{ maxLength: 5 }}
             placeholder=""
             label={<>Zip Code</>}
             requiredLabel
             sx={{ marginY: "10px" }}
             name="postalCode"
             value={formik.values.postalCode}
             disabled={alldDisabled}
             onChange={(e) => {
              const reg = /^[0-9\b]+$/;
              if (e.target.value === '' || reg.test(e.target.value)) {
                formik.handleChange(e);
              }
             }}
             error={
               formik.touched.postalCode &&
               Boolean(formik.errors.postalCode)
             }
             helperText={
               formik.touched.postalCode ? '' : formik.errors.postalCode
             }
           />
         </Grid>
         <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
           <InputLabel
             sx={{ textAlign: "left" }}
           >
             Country
             <Typography component="span" sx={{ color: colors.inputs.label.asterisk.main }}>
               {" *"}
             </Typography>
           </InputLabel>
           <FormControl
             fullWidth
             error={
               formik.touched.country && Boolean(formik.errors.country)
             }
           >
            <div id="country">
              <VirtualizedSelect 
                isDisabled={alldDisabled} 
                formik={formik} 
                list={countryList} 
                fieldName="country" 
                handleOptionChange={setCountryField} />
            </div>
          </FormControl>
         </Grid>
         { !stateList?.length || isLoadingAuth.state ? (
           <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
             <MKInput
               fullWidth
               id="state"
               placeholder="Enter State"
               requiredLabel
               label={
                 <>
                   State
                   <Typography
                     component="span"
                    //  sx={{ color: "#db4b5e" }}
                   >
                     {" "}
                   </Typography>
                 </>
               }
               sx={{ marginY: "10px" }}
               name="state"
               value={formik.values.state?.label}
               onChange={handleStateChange}
               error={
                 formik.touched.state && Boolean(formik.errors.state)
               }
               helperText={formik.touched.state ? '' : formik.errors.state}
               disabled={alldDisabled}
             />
           </Grid>
         ) : (
           <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
             <InputLabel
                sx={{ textAlign: "left" }}
             >
               State
               <Typography component="span" sx={{ color: colors.inputs.label.asterisk.main }}>
                 {" *"}
               </Typography>
             </InputLabel>
             <FormControl
               fullWidth
               error={
                 formik.touched.state && Boolean(formik.errors.state)
               }
             >
              <div id="state">
                <VirtualizedSelect isDisabled={alldDisabled} formik={formik} list={stateList} fieldName="state" handleOptionChange={setStateField} />
              </div>   
            </FormControl>
           </Grid>
         )}
         { !modal && <Grid item xs={12} md={6} className={classes.gridItem}>
           <MKInput
             fullWidth
             id="email"
             name="email"
             label={<>Email</>}
             value={formik.values.email}
             disabled={true}
             onChange={formik.handleChange}
             error={formik.touched.email && Boolean(formik.errors.email)}
             helperText={formik.touched.email ? '' : formik.errors.email}
           />
         </Grid>}
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
            //  color="primary"
             className={classes.nextBtn}
             disabled={isStateUpdating || alldDisabled || !(formik.isValid) || !(formik.dirty)}
           >
             <ButtonSpinner
               text={modal ? "Complete Profile" : "Save Changes"}
               isLoading={isStateUpdating}
               onClick={(e) => { e.currentTarget.blur();}}
             />
           </MKButton>
         </Grid>
       </Grid>
     </MKBox>
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
   </MKBox>
  );
};

export default Profile;

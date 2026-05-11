import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Grid } from "@mui/material";
import dayjs from 'dayjs';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import style from "views/profile/profileStyle.js";
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKInput from "components/custom/MKInput";
import { setPersonalDetail } from "store/actions/user/user";
import { ssnValidation } from "validation/stepFormValidation";
import { profileFetch } from "store/actions";

const UserSSN = ({ handler = () => {} , alldDisabled = false }) => {
  const classes = style();

  const dispatch = useDispatch();

  const [isStateUpdating, setIsStateUpdating] = useState(false);

  const [maskedSSN, setMaskedSSN] = useState(true);

  const { userData } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.user);

  // Profile Update Success Handler
   const handleSuccess = () => {
    dispatch(profileFetch({ handleSuccess: handler }));
  };

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
    country: userData?.country ? { value: userData?.countryISO2, label: userData?.country } : '',
    state: userData?.state ? { value: userData?.stateCode, label: userData?.state} : { value: "", label: ""},
    city: userData?.city || '',
    postalCode: userData?.zipCode || '',
    mobileNumber: userData?.mobileNumber || '',
    countryCode: userData?.countryCode || '',
    address1: userData?.address1 || '',
    email: userData?.email || '',   
    ssn: userData?.ssn || "",
  };

  // Signup api handler
  const submitBtnhandler = (values) => {
    const requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      dob: values.dob,
      country: values.country.label,
      state: values.state?.label,
      city: values.city,
      zipCode: values.postalCode,
      address1: values.address1,    
      stateCode: values.state.value,
      ssn: values.ssn,
    };
  
    setIsStateUpdating(false);
    dispatch(
      setPersonalDetail({
        requestBody,
        handleSuccess,
        handleFail: handleProfileFetchSuccess,
        showToast: false
      })
    );
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: ssnValidation,
    onSubmit: (values) => {
      submitBtnhandler(values);
    },
  });


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
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.gridItem}
            mt={-1}
          >            
            <MKInput
              fullWidth
              id="ssn"
              autoComplete="off"
              label={"Social Security Number"}
              type={maskedSSN ? "password" : "text"}
              labelTailIcon={{
                toolTip: {
                  text: "Federal regulation requires that we collect this information. It is used solely for identification purposes and will not affect your credit.",
                  placement: "bottom-end",
                },
                Icon: HelpOutlineIcon,
              }}
              requiredLabel
              caption="Federal regulation requires that we collect this information. It is used solely for identification purposes and will not affect your credit."
              name="ssn"
              inputProps={{ maxLength: 11 }}
              disabled={alldDisabled}
              placeholder="___-__-____"
              value={formik?.values?.ssn}
              onChange={(e) => {
                const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
                if (!e.target.value == "" && !ssnRegex.test(e.target.value)) {
                  if (
                    formik?.values?.ssn?.length > e.target.value.length &&
                    formik?.values?.ssn?.charAt(
                      formik?.values?.ssn?.length - 1
                    ) === "-"
                  ) {
                    // backspace at dash
                    e.target.value = e.target.value.slice(0, -1);
                  } else {
                    let val = e.target.value.replace(/\D/g, "");
                    val = val.replace(/^(\d{3})/, "$1-");
                    val = val.replace(/-(\d{2})/, "-$1-");
                    val = val.replace(/(\d)-(\d{4}).*/, "$1-$2");
                    e.target.value = val;
                  }
                }
                formik.handleChange(e);
              }}
              error={formik.touched.ssn && Boolean(formik.errors.ssn)}
              helperText={formik.touched.ssn ? "" : formik.errors.ssn}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=>setMaskedSSN(!maskedSSN)}                     
                      edge="end"
                      size="small"
                    >
                      {!maskedSSN.masked ? (
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
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6} sm={12} className={classes.nextBtnBox}>
            <MKButton
              type="submit"
              variant="gradient"
              //  color="primary"
              className={classes.nextBtn}
              disabled={
                isStateUpdating || isLoading?.setPersonalDetails ||
                alldDisabled ||
                !formik.isValid ||
                !formik.dirty
              }
            >
              <ButtonSpinner
                text={"Next"}
                isLoading={isStateUpdating || isLoading?.setPersonalDetails}
                onClick={(e) => {
                  e.currentTarget.blur();
                }}
              />
            </MKButton>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
};

export default UserSSN;

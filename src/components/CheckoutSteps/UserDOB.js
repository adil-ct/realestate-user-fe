import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { InputLabel, Grid, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";

import colors from "assets/theme/base/colors";
import style from "views/profile/profileStyle.js";
import MKBox from "components/custom/MKBox";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { setPersonalDetail } from "store/actions/user/user";
import { profileFetch } from "store/actions";
import { dobValidation } from "validation/stepFormValidation";

const UserDOB = ({ handler = () => {}, alldDisabled = false }) => {
  const classes = style();

  const dispatch = useDispatch();

  const [isStateUpdating, setIsStateUpdating] = useState(false);

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
    if (!dobString) {
      return "";
    }
    const zonelessDate = dobString.replace("Z", "");
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
    countryCode: userData?.countryCode || '',
    address1: userData?.address1 || '',
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
      stateCode: values.state.value,
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
    validationSchema: dobValidation,
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
            <InputLabel
              error={
                (formik.touched.dob && Boolean(formik.errors.dob)) ||
                (Boolean(formik.values.dob) &&
                  formik.touched.dob &&
                  !formik.values.dob)
              }
              sx={{ textAlign: "left" }}
            >
              Date of Birth
              <Typography
                component="span"
                sx={{ color: colors.inputs.label.asterisk.main }}
              >
                {" *"}
              </Typography>
            </InputLabel>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ textAlign: "left", marginBottom: "10px" }}
            >
              You must be 18 years old to open a invest tech account
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                hiddenLabel
                fullWidth
                clearable
                name="dob"
                value={formik?.values?.dob}
                className={classes.dobInput}
                onChange={(newValue) => {
                  formik.setFieldValue("dob", newValue);
                }}
                format="MM/DD/YYYY"
                disabled={alldDisabled}
              />
            </LocalizationProvider>
            {formik.errors.dob && (
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{
                  textAlign: "left",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                {formik?.errors?.dob}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6} sm={12} className={classes.nextBtnBox}>
            <MKButton
              type="submit"
              variant="gradient"
              //  color="primary"
              className={classes.nextBtn}
              disabled={isStateUpdating || alldDisabled || !formik.isValid || isLoading?.setPersonalDetails}
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

export default UserDOB;

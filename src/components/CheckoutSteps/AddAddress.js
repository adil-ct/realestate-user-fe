import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { InputLabel, FormControl, Grid, Typography } from "@mui/material";
import _ from "lodash";

import colors from "assets/theme/base/colors";
import style from "views/profile/profileStyle.js";
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { setPersonalDetail } from "store/actions/user/user";
import { getLocation, profileFetch } from "store/actions";
import VirtualizedSelect from "components/VirtualizedSelect";
import zipCodeValidation from "utils/zipCodeValidation";
import AddressAutocomplete from "components/AddressAutocomplete";
import { addressValidation } from "validation/stepFormValidation";

const AddAddress = ({ handler = () => {}, alldDisabled = false }) => {
  const classes = style();

  const dispatch = useDispatch();

  const [isStateUpdating, setIsStateUpdating] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [showOtherDetails, setShowOtherDetails] = useState({
    showDetail: false,
    manuallEdit: false,
  });

  const { countries, state } = useSelector((state) => state.auth.location);
  const { isLoading: isLoadingAuth, userData } = useSelector(
    (state) => state.auth
  );

  const { isLoading } = useSelector((state) => state.user);

  let defaultCountry = useMemo(
    () => ({
      value: "US",
      label: "United States",
    }),
    []
  );

  // Save countries data coming from api
  useEffect(() => {
    if (countries?.length) {
      const updatedRes = countries.map((item) => ({
        value: item.TLD,
        label: item.country_name,
      }));
      setCountryList(updatedRes);
    }
  }, [countries]);

  // Save states data coming from api
  useEffect(() => {
    if (!_.isEmpty(state?.data)) {
      const updatedRes = Object.keys(state?.data).map((key) => ({
        label: state?.data[key].name,
        value: key,
      }));
      setStateList(updatedRes);
    } else {
      setStateList([]);
    }
  }, [state]);

  // Calling getListOfCountries api
  useEffect(() => {
    dispatch(
      getLocation({
        reqType: "get",
        url: "/auth/country-code",
        type: "countries",
      })
    );
    dispatch(profileFetch());
  }, []);

  const initialValues = {
    country: defaultCountry,
    state: { value: "", label: "" },
    city: "",
    postalCode: "",
    address1: "",
    address2: "",
  };
 

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: addressValidation,
    onSubmit: (values) => {
      submitBtnhandler(values);
    },
  });

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
    if (
      defaultCountry?.label?.length &&
      !userData?.country &&
      !isLoadingAuth?.profile
    ) {
      getStates(formik?.values?.country?.label);
    }
  }, [defaultCountry, userData?.country , formik?.values?.country]);

  // Fetching states for user selected country
  useEffect(() => {
    if (userData?.country) {
      defaultCountry = {
        label: "",
        value: "",
      };
      getStates(userData?.country);
    }
  }, [userData?.country]);

  // Profile Update Success Handler
  const handleSuccess = () => {
    dispatch(profileFetch({ handleSuccess: handler }));
  };

  const handleProfileFetchSuccess = () => {
    // disable loading
    setIsStateUpdating(false);
  };

  // Signup api handler
  const submitBtnhandler = (values) => {
    const requestBody = {
      country: values.country.label,
      state: values.state?.label,
      city: values.city,
      zipCode: values.postalCode,
      address1: values.address1,
      stateCode: values.state.value,
    };
    if (values.address2) {
      requestBody.address2 = values.address2;
    }
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

  const handleStateChange = (e) => {
    // formik.handleChange(e);
    formik.setFieldValue("state", {
      label: e.target.value,
      value: e.target.value.slice(0, 2).toUpperCase(),
    });
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
        <Typography variant="h5" gutterBottom sx={{ textAlign: "left" }}>
          Hello there!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "left", marginBottom: "20px" }}
        >
          Lets start with some basic info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} className={classes.gridItem} mt={-1}>
            <AddressAutocomplete
              formik={formik}
              disabled={alldDisabled}
              setShowOtherDetails={setShowOtherDetails}
              showDetails={showOtherDetails?.showDetail}
            />
          </Grid>
          {(showOtherDetails.manuallEdit || showOtherDetails.showDetail) && (
            <>
              <Grid
                item
                xs={12}
                md={12}
                className={`${classes.gridItem} ${classes.address2}`}
                mt={-1}
              >
                <MKInput
                  fullWidth
                  label={<>Address Line 2</>}
                  aria-label="address-line-2"
                  minRows={1}
                  id="filled-multiline-flexible2"
                  name="address2"
                  placeholder="Apt, suite, unit, etc."
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
                  helperText={formik.touched.city ? "" : formik.errors.city}
                />
              </Grid>
         
              <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
                <MKInput
                  fullWidth
                  id="pin-code"
                  // inputProps={{ maxLength: 5 }}
                  placeholder=""
                  label={<>Zip Code</>}
                  requiredLabel
                  sx={{ marginY: "10px" }}
                  name="postalCode"
                  value={formik.values.postalCode}
                  disabled={alldDisabled}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (e.target.value !== "") {
                      zipCodeValidation(e.target.value, formik , showOtherDetails.manuallEdit);
                    }
                  }}
                  error={
                    formik.touched.postalCode &&
                    Boolean(formik.errors.postalCode)
                  }
                  helperText={
                    formik.touched.postalCode ? "" : formik.errors.postalCode
                  }
                />
              </Grid>

              <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
                <InputLabel sx={{ textAlign: "left" }}>
                  Country
                  <Typography
                    component="span"
                    sx={{ color: colors.inputs.label.asterisk.main }}
                  >
                    {" *"}
                  </Typography>
                </InputLabel>
                <FormControl
                  fullWidth
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                >
                  <VirtualizedSelect
                    isDisabled={alldDisabled}
                    id="country"
                    formik={formik}
                    list={countryList}
                    fieldName="country"
                    handleOptionChange={setCountryField}
                  />
                </FormControl>
              </Grid>

              {!stateList?.length || isLoadingAuth.state ? (
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
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state ? "" : formik.errors.state}
                    disabled={alldDisabled}
                  />
                </Grid>
              ) : (
                <Grid item xs={6} md={6} className={classes.gridItem} mt={-1}>
                  <InputLabel sx={{ textAlign: "left" }}>
                    State
                    <Typography
                      component="span"
                      sx={{ color: colors.inputs.label.asterisk.main }}
                    >
                      {" *"}
                    </Typography>
                  </InputLabel>
                  <FormControl
                    fullWidth
                    error={formik.touched.state && Boolean(formik.errors.state)}
                  >
                    <VirtualizedSelect
                      isDisabled={alldDisabled}
                      formik={formik}
                      list={stateList}
                      fieldName="state"
                      handleOptionChange={setStateField}
                    />
                  </FormControl>
                </Grid>
              )}
            </>
          )}
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6} sm={12} className={classes.nextBtnBox}>
            <MKButton
              type="submit"
              variant="gradient"
              //  color="primary"
              className={classes.nextBtn}
              disabled={
                isStateUpdating ||
                isLoading?.setPersonalDetails ||
                isLoadingAuth.profile ||
                alldDisabled ||
                !formik.isValid ||
                !formik.dirty
              }
            >
              <ButtonSpinner
                text={"Next"}
                isLoading={
                  isStateUpdating ||
                  isLoading?.setPersonalDetails ||
                  isLoadingAuth.profile
                }
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

export default AddAddress;

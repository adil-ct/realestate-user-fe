import { React, useEffect } from "react";
import { Grid, Switch, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

//static
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKTypography from "components/custom/MKTypography";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";
import Placeholder from "components/Placeholder";
import { getLocation } from "store/actions";

//style
import { AddBillDetailsModuls } from "./styles/styles";

const AddBillDetailsModul = ({
  open,
  handleClose,
  handleCancel,
  formik,
  setSameAsPersonal,
  sameAsPersonal,
  validationSchema,
}) => {
  const classes = AddBillDetailsModuls();
  const dispatch = useDispatch();
  const { countries, state } = useSelector((state) => state.auth.location);
  const { isLoading } = useSelector((state) => state.auth);
  const { stripeState } = useSelector((state) => (state?.common));

  // Get list of country codes
  useEffect(() => {
    dispatch(
      getLocation({
        reqType: "get",
        url: "/auth/country-code",
        type: "countries",
      })
    );
  }, []);

  // Get list of states according to the country name which is stored in user profile
  useEffect(() => {
    sameAsPersonal && getStates(formik.values.country);
  }, []);

  // Get states list according to country name
  const getStates = async (val) => {
    const fieldName = await countries.filter((item) => item.TLD === val);
    fieldName.length > 0 &&
      (await dispatch(
        getLocation({
          reqType: "get",
          url: `/auth/district/${fieldName[0].country_name}`,
          type: "state",
          successHandler: () => {},
        })
      ));
  };
  const { isLoading: apiLoader } = useSelector((state) => state.accounts);
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  // Condition check for either the fields are required dynamically
  const isRequired = (field) => {
    return validationSchema.fields[field].exclusiveTests.required || false;
  };

  return (
    <>
      <Dialog open={open} aria-labelledby="responsive-dialog-title">
        <MKBox>
          <MKBox
            display="flex"
            justifyContent="space-between"
            top="30px"
            left={30}
          >
            <Typography
              onClick={handleCancel}
              variant="h6"
              className={classes.backArrow}
            >
              {" "}
              <ArrowBackIosIcon className={classes.arrowAline} />
              Back
            </Typography>
            <CloseButton
              className={classes.closeIconRight}
              P={3}
              onClick={handleClose}
            />
          </MKBox>
          <MKBox>
            <DialogTitle
              display="flex"
              justifyContent="center"
              className={classes.title}
            >
              <Typography
                variant="h3"
                width={400}
                className={classes.mainTitle}
              >
                Add Billing Details
              </Typography>
            </DialogTitle>
          </MKBox>
          <MKBox className={classes.mainpadding}>
            <MKBox className={classes.wireSwitch}>
              <MKTypography variant="h6" className={classes.switchHeader}>
                Same as personal details
              </MKTypography>
              <Switch
                {...label}
                onChange={() => {
                  setSameAsPersonal(!sameAsPersonal);
                }}
                defaultChecked={sameAsPersonal}
              />
            </MKBox>
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <Grid container className={classes.wireModulMargin} mt={1}>
              <Grid item xs={12} sm={12} md={12} lg={6} className={classes.pright8} >
                  <MKTypography variant="h7" className={classes.subHeader}>
                    First Name
                  </MKTypography>
                  <MKTypography variant="h7" className={classes.subHeaderRed}>
                    {isRequired("firstName") ? " *" : ""}
                  </MKTypography>
                  <MKInput
                    fullWidth
                    id="firstName"
                    name="firstName"
                    placeholder="Wade"
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
                  <Grid item xs={12} sm={12} md={12} lg={6} className={classes.pleft8}>
                  <MKTypography variant="h7" className={classes.subHeader}>
                    Last Name
                  </MKTypography>
                  <MKTypography variant="h7" className={classes.subHeaderRed}>
                    {isRequired("lastName") ? " *" : ""}
                  </MKTypography>
                  <MKInput
                    fullWidth
                    id="lastName"
                    name="lastName"
                    placeholder="Warren"
                    // labelColor={classes.labelColor}
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
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={6} sm={6} mt={2}>
                  <InputLabel>
                    <MKTypography variant="h7" className={classes.subHeader}>
                      Country
                    </MKTypography>
                    <MKTypography variant="h7" className={classes.subHeaderRed}>
                      {isRequired("country") ? " *" : ""}
                    </MKTypography>
                  </InputLabel>
                  <FormControl
                    fullWidth
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="country"
                      name="country"
                      className={classes.countryHeight}
                      IconComponent={KeyboardArrowDownIcon}
                      // labelColor={classes.labelColor}
                      value={formik.values.country || "default"}
                      onChange={(e) => {
                        formik.handleChange(e);
                        getStates(e.target.value);
                        formik.setFieldValue("district", "");
                      }}
                      defaultValue="select"
                      disabled={isLoading.countries}
                      renderValue={
                        formik.values.country !== ""
                          ? isLoading.countries
                            ? () => <Placeholder>Loading...</Placeholder>
                            : undefined
                          : () => <Placeholder>Select</Placeholder>
                      }
                    >
                      {countries.map((country) => (
                        <MenuItem value={country.TLD} key={country._id}>
                          {country.country_name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText error>
                      {formik.touched.country && formik.errors.country}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                {!state?.data || isLoading.state ? (
                  <Grid item xs={6} md={6} lg={6} sm={6} mt={1}>
                    <Grid>
                      <MKTypography variant="h7" className={classes.subHeader}>
                        State
                      </MKTypography>
                      <MKTypography
                        variant="h7"
                        className={classes.subHeaderRed}
                      >
                        {isRequired("district") ? " *" : ""}
                      </MKTypography>
                    </Grid>
                    {sameAsPersonal ? (
                      <MKInput
                        id="state"
                        placeholder="State"
                        name="stateFull"
                        value={formik.values.stateFull}
                        onChange={(e) => {
                          formik.handleChange(e);
                          formik.setFieldValue("district", e.target.value);
                        }}
                        error={
                          formik.touched.district &&
                          Boolean(formik.errors.district)
                        }
                        helperText={
                          formik.touched.district && formik.errors.district
                        }
                      />
                    ) : (
                      <MKInput
                        id="state"
                        placeholder="State"
                        name="district"
                        value={formik.values.district}
                        onChange={(e) => {
                          formik.handleChange(e);
                          formik.setFieldValue("district", e.target.value);
                        }}
                        error={
                          formik.touched.district &&
                          Boolean(formik.errors.district)
                        }
                        helperText={
                          formik.touched.district && formik.errors.district
                        }
                      />
                    )}
                  </Grid>
                ) : (
                  <Grid item xs={6} md={6} lg={6} sm={6} mt={2}>
                    <InputLabel>
                      <MKTypography variant="h7" className={classes.subHeader}>
                        State
                      </MKTypography>
                      <MKTypography
                        variant="h7"
                        className={classes.subHeaderRed}
                      >
                        {isRequired("district") ? " *" : ""}
                      </MKTypography>
                    </InputLabel>
                    <FormControl
                      fullWidth
                      error={
                        formik.touched.district &&
                        Boolean(formik.errors.district)
                      }
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="district"
                        name="district"
                        className={classes.countryHeight}
                        IconComponent={KeyboardArrowDownIcon}
                        // labelColor={classes.labelColor}
                        defaultValue="select"
                        disabled={isLoading.state}
                        value={formik.values.district || "default"}
                        onChange={formik.handleChange}
                        renderValue={
                          formik.values.district !== ""
                            ? isLoading.state
                              ? () => <Placeholder>Loading...</Placeholder>
                              : undefined
                            : () => <Placeholder>Select</Placeholder>
                        }
                      >
                        <MenuItem value="default">Select</MenuItem>
                        {state &&
                        Object.keys(state).length === 0 &&
                        Object.getPrototypeOf(state) === Object.prototype ? (
                          <></>
                        ) : (
                          Object.values(state?.data).map((item, index) => (
                            <MenuItem
                              key={item.name}
                              value={Object.keys(state?.data)[index]}
                            >
                              {item.name}
                            </MenuItem>
                          ))
                        )}
                      </Select>
                      <FormHelperText error>
                        {formik.touched.district && formik.errors.district}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                )}
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={6} sm={6} mt={2}>
                  <InputLabel>
                    <MKTypography variant="h7" className={classes.subHeader}>
                      City
                    </MKTypography>
                    <MKTypography variant="h7" className={classes.subHeaderRed}>
                      {isRequired("city") ? " *" : ""}
                    </MKTypography>
                  </InputLabel>
                  <MKInput
                    id="city"
                    name="city"
                    placeholder="City"
                    // labelColor={classes.labelColor}
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={6} sm={6} mt={2}>
                  <MKBox>
                    <Grid>
                      <InputLabel>
                        <MKTypography
                          variant="h7"
                          className={classes.subHeader}
                          mt={2}
                        >
                          Zip Code
                        </MKTypography>
                        <MKTypography
                          variant="h7"
                          className={classes.subHeaderRed}
                        >
                          {isRequired("postalCode") ? " *" : ""}
                        </MKTypography>
                      </InputLabel>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} sm={12}>
                      <MKInput
                        fullWidth
                        id="postalCode"
                        name="postalCode"
                        placeholder="560091"
                        type="number"
                        // labelColor={classes.labelColor}
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
                  </MKBox>
                </Grid>
              </Grid>
              <MKBox className={classes.wireModulMargin}>
                <Grid>
                  <MKTypography
                    variant="h7"
                    className={classes.subHeader}
                    mt={2}
                  >
                    Street Address 1
                  </MKTypography>
                  <MKTypography variant="h7" className={classes.subHeaderRed}>
                    {isRequired("line1") ? " *" : ""}
                  </MKTypography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sm={12}>
                  <MKInput
                    fullWidth
                    id="line1"
                    name="line1"
                    placeholder="Street Address 1"
                    // labelColor={classes.labelColor}
                    value={formik.values.line1}
                    onChange={formik.handleChange}
                    error={formik.touched.line1 && Boolean(formik.errors.line1)}
                    helperText={formik.touched.line1 && formik.errors.line1}
                  />
                </Grid>
              </MKBox>
              <MKBox className={classes.wireModulMargin}>
                <Grid>
                  <MKTypography
                    variant="h7"
                    className={classes.subHeader}
                    mt={2}
                  >
                    Street Address 2
                  </MKTypography>
                  <MKTypography variant="h7" className={classes.subHeaderRed}>
                    {isRequired("line2") ? " *" : ""}
                  </MKTypography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sm={12}>
                  <MKInput
                    fullWidth
                    id="line2"
                    name="line2"
                    placeholder="Street Address 2"
                    // labelColor={classes.labelColor}
                    value={formik.values.line2}
                    onChange={formik.handleChange}
                    error={formik.touched.line2 && Boolean(formik.errors.line2)}
                    helperText={formik.touched.line2 && formik.errors.line2}
                  />
                </Grid>
              </MKBox>
            </MKBox>
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                mt={4}
                mb={5}
              >
                <Grid
                  item
                  xs={12}
                  lg={12}
                  sm={12}
                  display="flex"
                  justifyContent="space-evenly"
                >
                  <MKButton
                    type="button"
                    variant="outlined"
                    // color="primary"
                    className={`${classes.button50Width} ${classes.marginRight20}`}
                    onClick={handleCancel}
                  >
                    <ButtonSpinner text="Cancel" />
                  </MKButton>
                  <MKButton
                    type="submit"
                    variant="gradient"
                    // color="primary"
                    onClick={formik.handleSubmit}
                    className={classes.button50Width}
                  >
                    <ButtonSpinner
                      isLoading={
                        apiLoader.addACHBankAccount ||
                        apiLoader.addWireBankAccount ||
                        apiLoader.addCard ||
                        stripeState?.isLoading
                      }
                      text="Submit"
                    />
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
      </Dialog>
    </>
  );
};

export default AddBillDetailsModul;

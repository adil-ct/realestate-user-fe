import { React, useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//static
import MKTypography from "components/custom/MKTypography";
import MKInput from "components/custom/MKInput";
import MKBox from "components/custom/MKBox";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKButton from "components/custom/MKButton";
import Placeholder from "components/Placeholder";
import { getLocation } from "store/actions";

//style
import { AddWireFieldModuls } from "./styles/styles";

const AddWireFieldModul = ({
  formik,
  handleBillingCancel,
  openBillDetailsModal,
  validationSchema,
}) => {
  const classes = AddWireFieldModuls();
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.auth.location);
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      getLocation({
        reqType: "get",
        url: "/auth/country-code",
        type: "countries",
      })
    );
  }, []);

  // Condition check for either the fields are required dynamically
  const isRequired = (field) => {
    const bankType = formik.values.bankType;
    if (validationSchema.fields[field].deps.length > 0) {
      switch (field) {
        case "routingNumber":
          if (bankType === "NONUS-IBAN") return false;
          else return true;
        case "reRoutingNumber":
          if (bankType === "NONUS-IBAN") return false;
          else return true;
        case "bankName":
          if (bankType === "NONUS-NIBAN") return true;
          else return false;
        case "city":
          if (bankType === "USBANK") return false;
          else return true;
        default:
          return false;
      }
    }
    return validationSchema.fields[field].exclusiveTests.required || false;
  };

  return (
    <>
      <MKBox className={classes.mainpadding}>
        <MKBox
          width="100%"
          component="form"
          method="post"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Grid item xs={12} md={12} lg={12} sm={12} mt={3}>
            <InputLabel>
              <MKTypography variant="h7" className={classes.subHeader}>
                Account Type
              </MKTypography>
              <MKTypography variant="h7" className={classes.subHeaderRed}>
                {isRequired("bankType") ? " *" : ""}
              </MKTypography>
            </InputLabel>
            <FormControl
              fullWidth
              error={formik.touched.bankType && Boolean(formik.errors.bankType)}
            >
              <Select
                labelId="demo-simple-select-label"
                id="bankType"
                name="bankType"
                className={classes.countryHeight}
                IconComponent={KeyboardArrowDownIcon}
                // labelColor={classes.labelColor}
                value={formik.values.bankType || "default"}
                onChange={formik.handleChange}
              >
                <MenuItem value="default">Select</MenuItem>
                <MenuItem value="USBANK">US Bank Account</MenuItem>
                <MenuItem value="NONUS-IBAN">
                  Non-US Bank Account-IBAN Supported
                </MenuItem>
                <MenuItem value="NONUS-NIBAN">
                  Non-US Bank Account-IBAN Not Supported
                </MenuItem>
              </Select>

              <FormHelperText error>
                {formik.touched.bankType && formik.errors.bankType}
              </FormHelperText>
            </FormControl>
          </Grid>
          {isRequired("accountNumber") && (
            <MKBox className={classes.wireModulMargin}>
              <Grid>
                <MKTypography variant="h7" className={classes.subHeader} mt={3}>
                  {formik.values.bankType === "NONUS-IBAN"
                    ? "IBAN"
                    : "Bank Account Number"}
                </MKTypography>
                <MKTypography variant="h7" className={classes.subHeaderRed}>
                  {isRequired("accountNumber") ? " *" : ""}
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <MKInput
                  fullWidth
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Account Number"
                  // labelColor={classes.labelColor}
                  value={formik.values.accountNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.accountNumber &&
                    Boolean(formik.errors.accountNumber)
                  }
                  helperText={
                    formik.touched.accountNumber && formik.errors.accountNumber
                  }
                />
              </Grid>
              {formik.values.bankType === "NONUS-IBAN" && (
                <MKTypography variant="h2" className={classes.subHeaderGrey}>
                  International Bank Account Number(IBAN) that identifies the
                  account. Required for accounts outside of the US
                </MKTypography>
              )}
            </MKBox>
          )}
          {isRequired("reAccountNumber") && (
            <MKBox className={classes.wireModulMargin}>
              <Grid>
                <MKTypography variant="h7" className={classes.subHeader} mt={3}>
                  {formik.values.bankType === "NONUS-IBAN"
                    ? "Re-enter IBAN"
                    : "Re-enter Bank Account Number"}
                </MKTypography>
                <MKTypography variant="h7" className={classes.subHeaderRed}>
                  {isRequired("reAccountNumber") ? " *" : ""}
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <MKInput
                  fullWidth
                  id="reAccountNumber"
                  name="reAccountNumber"
                  placeholder="Re-enter Account Number"
                  // labelColor={classes.labelColor}
                  value={formik.values.reAccountNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.reAccountNumber &&
                    Boolean(formik.errors.reAccountNumber)
                  }
                  helperText={
                    formik.touched.reAccountNumber &&
                    formik.errors.reAccountNumber
                  }
                />
              </Grid>
            </MKBox>
          )}
          {isRequired("routingNumber") && (
            <MKBox className={classes.wireModulMargin}>
              <Grid>
                <MKTypography variant="h7" className={classes.subHeader} mt={3}>
                  Bank Routing Number
                </MKTypography>
                <MKTypography variant="h7" className={classes.subHeaderRed}>
                  {isRequired("routingNumber") ? " *" : ""}
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <MKInput
                  fullWidth
                  id="routingNumber"
                  name="routingNumber"
                  placeholder="Bank Routing Number"
                  // labelColor={classes.labelColor}
                  value={formik.values.routingNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.routingNumber &&
                    Boolean(formik.errors.routingNumber)
                  }
                  helperText={
                    formik.touched.routingNumber && formik.errors.routingNumber
                  }
                />
              </Grid>
            </MKBox>
          )}
          {isRequired("reRoutingNumber") && (
            <MKBox className={classes.wireModulMargin}>
              <Grid>
                <MKTypography variant="h7" className={classes.subHeader} mt={3}>
                  Re-enter Bank Routing Number
                </MKTypography>
                <MKTypography variant="h7" className={classes.subHeaderRed}>
                  {isRequired("reRoutingNumber") ? " *" : ""}
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <MKInput
                  fullWidth
                  id="reRoutingNumber"
                  name="reRoutingNumber"
                  placeholder="Re-enter Bank Routing Number"
                  // labelColor={classes.labelColor}
                  value={formik.values.reRoutingNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.reRoutingNumber &&
                    Boolean(formik.errors.reRoutingNumber)
                  }
                  helperText={
                    formik.touched.reRoutingNumber &&
                    formik.errors.reRoutingNumber
                  }
                />
              </Grid>
            </MKBox>
          )}
          {isRequired("bankName") && (
            <MKBox className={classes.wireModulMargin}>
              <Grid>
                <MKTypography variant="h7" className={classes.subHeader} mt={3}>
                  Bank Name
                </MKTypography>
                <MKTypography variant="h7" className={classes.subHeaderRed}>
                  {isRequired("bankName") ? " *" : ""}
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <MKInput
                  fullWidth
                  id="bankName"
                  name="bankName"
                  placeholder="Bank Name"
                  // labelColor={classes.labelColor}
                  value={formik.values.bankName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bankName && Boolean(formik.errors.bankName)
                  }
                  helperText={formik.touched.bankName && formik.errors.bankName}
                />
              </Grid>
            </MKBox>
          )}
          {isRequired("country") && (
            <Grid item xs={12} md={12} lg={12} sm={12} mt={3}>
              <InputLabel>
                <MKTypography variant="h7" className={classes.subHeader}>
                  Bank Country
                </MKTypography>
                <MKTypography variant="h7" className={classes.subHeaderRed}>
                  {isRequired("country") ? " *" : ""}
                </MKTypography>
              </InputLabel>
              <FormControl
                fullWidth
                error={formik.touched.country && Boolean(formik.errors.country)}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="country"
                  name="country"
                  className={classes.countryHeight}
                  IconComponent={KeyboardArrowDownIcon}
                  // labelColor={classes.labelColor}
                  value={formik.values.country || "default"}
                  onChange={formik.handleChange}
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
                    <MenuItem
                      value={country.TLD}
                      // onClick={() => getStates(country.country_name)}
                      key={country._id}
                    >
                      {country.country_name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error>
                  {formik.touched.country && formik.errors.country}
                </FormHelperText>
              </FormControl>
            </Grid>
          )}
          {isRequired("city") && (
            <Grid item xs={12} md={12} lg={12} sm={12} mt={3}>
              <InputLabel>
                <MKTypography variant="h7" className={classes.subHeader}>
                  Bank City
                </MKTypography>
                <MKTypography variant="h7" className={classes.subHeaderRed}>
                  {isRequired("city") ? " *" : ""}
                </MKTypography>
              </InputLabel>
              <MKInput
                fullWidth
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
          )}
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
                onClick={handleBillingCancel}
              >
                <ButtonSpinner text="Cancel" />
              </MKButton>
              <MKButton
                type="submit"
                variant="gradient"
                // color="primary"
                className={classes.button50Width}
                onClick={openBillDetailsModal}
              >
                <ButtonSpinner text="Add Billing Details" />
              </MKButton>
            </Grid>
          </Grid>
        </MKBox>
      </MKBox>
    </>
  );
};

export default AddWireFieldModul;

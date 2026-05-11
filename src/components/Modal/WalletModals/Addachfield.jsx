/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePlaidLink } from "react-plaid-link";
import { Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Static imports
import MKTypography from "components/custom/MKTypography";
import MKInput from "components/custom/MKInput";
import MKBox from "components/custom/MKBox";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKButton from "components/custom/MKButton";
import { Plaid } from "constants/assets";
import { getPlaidTokenSaga } from "store/actions";

//Style
import { AddAchFieldModuls } from "./styles/styles";

const AddAchFieldModul = ({
  formik,
  handleAccountCancel,
  openBillDetailsModal,
}) => {
  const classes = AddAchFieldModuls();
  const dispatch = useDispatch();
  const [fetchToken, setFetchToken] = useState(false);
  const { isLoading, plaidLinkToken } = useSelector((state) => state.accounts);
  const [plaidConfigToken, setPlaidConfigToken] = useState({});

  useEffect(() => {
    setPlaidConfigToken(plaidLinkToken);
  }, [plaidLinkToken]);

  const config = {
    token: plaidConfigToken,
    onSuccess: (public_token) => {
      // send public_token to server
      formik.setFieldValue("publicToken", public_token);
    },
    onExit: (error, metadata) => {
      // Using the console for debugging the error if any errors occur
      console.log("data", error, metadata);
    },
  };

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (ready && fetchToken && plaidConfigToken.length > 0) {
      open();
      setFetchToken(false);
    }
  }, [fetchToken, ready, open]);

  // Get plaid token link from api
  const getPlaidTokenHandler = async () => {
    await dispatch(getPlaidTokenSaga({ handleSuccess: setFetchToken }));
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
          <Grid item xs={12} md={12} lg={12} sm={12} mt={1}>
            <InputLabel>
              <MKTypography variant="h7" className={classes.subHeader}>
                Plaid
              </MKTypography>
            </InputLabel>
            {!formik.values.publicToken.length > 0 ? (
              <MKButton
                variant="outlined"
                className={classes.mkButton1}
                // color="primary"
                size="medium"
                fullWidth
                // sx={{
                //   border:
                //     formik.touched.publicToken &&
                //     Boolean(formik.errors.publicToken)
                //       ? "1px solid #D32F2F"
                //       : "1px solid #EEEEEE",
                // }}
                onClick={getPlaidTokenHandler}
              >
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  fontSize="14px"
                  className={classes.plaidText}
                >
                  <img className={classes.plaidImage} src={Plaid} alt="plaid" />
                  Connect With Plaid
                </MKTypography>
              </MKButton>
            ) : (
              <MKButton
                variant="outlined"
                className={classes.mkButton1}
                // color="primary"
                size="medium"
                fullWidth
              >
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  className={classes.plaidText1}
                >
                  <MKBox sx={{ display: "flex" }}>
                    <img
                      className={classes.plaidImage}
                      src={Plaid}
                      alt="plaid"
                    />
                    Connect With Plaid
                  </MKBox>
                  <CheckCircleIcon
                    // color="success"
                    className={classes.checkIcon}
                  />
                </MKTypography>
              </MKButton>
            )}
            {formik.touched.publicToken &&
              Boolean(formik.errors.publicToken) && (
                <Typography
                  variant="button"
                  fontWeight="light"
                  fontSize="12px"
                  // color="#D32F2F"
                  ml={2}
                  mt={"2px"}
                  mr={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Please Connect with Plaid
                </Typography>
              )}
          </Grid>
          <Grid item xs={12} md={12} lg={12} sm={12} mt={2}>
            <InputLabel>
              <MKTypography variant="h7" className={classes.subHeader}>
                Account Type
              </MKTypography>
              <MKTypography variant="h7" className={classes.subHeaderRed}>
                {" "}
                *
              </MKTypography>
            </InputLabel>
            <FormControl
              fullWidth
              error={
                formik.touched.bankAccountType &&
                Boolean(formik.errors.bankAccountType)
              }
            >
              <Select
                labelId="demo-simple-select-label"
                id="bankAccountType"
                name="bankAccountType"
                placeholder="select"
                className={classes.countryHeight}
                IconComponent={KeyboardArrowDownIcon}
                // labelColor={classes.labelColor}
                value={formik.values.bankAccountType || "default"}
                onChange={formik.handleChange}
              >
                <MenuItem value="default">Select</MenuItem>
                <MenuItem value="retail">Personal Bank Account</MenuItem>
                <MenuItem value="business">Bussiness Bank Account</MenuItem>
              </Select>
              <FormHelperText error>
                {formik.touched.bankAccountType &&
                  formik.errors.bankAccountType}
              </FormHelperText>
            </FormControl>
          </Grid>
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
                onClick={handleAccountCancel}
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

export default AddAchFieldModul;

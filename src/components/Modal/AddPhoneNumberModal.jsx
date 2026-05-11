import React, { useState} from "react";
import Dialog from "@mui/material/Dialog";
import {DialogContent, Grid, InputLabel, Typography, Button, FormHelperText} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneInput from "react-phone-input-2";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

// Static imports
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import CloseButton from "components/CloseButton";
import { sendOTP, verifyOTPSaga } from "store/actions";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import "react-phone-input-2/lib/material.css";
import styles from "./styles";
import toaster from "utils/toaster";
import { setPersonalDetail } from "store/actions";

const ConfirmationModal = ({
  open,
  handleClose,
  isBtnLoading,
  disabled,
  handleSuccess
}) => {

    const defaultCountry = 'us';  //default country US
    const classes = styles();
    const [dialCode, setDialCode] = useState("1");
    const [rawNumber, setRawNumber] = useState("");
    // const [hasFocus, setHasFocus] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [verifiedNumber, setVerifiedNumber] = useState("");
    const dispatch = useDispatch()
    const { isLoading: isLoadingAuth } = useSelector(
        (state) => state.auth
      );

    const { isLoading } = useSelector(
      (state) => state.user
    );

    const initialValues = {
        mobileNumber: "",
        countryCode: "+1",
        isMobileVerified: false,
    }

    const formik = useFormik({
        initialValues,
        // validationSchema:  validationSchema,
        onSubmit: () => {
          // console.log("values", values);
        },
      });

        // shows last 2 digit of phone number
    const getHiddenPhoneNumber = () => {
      return `********${formik.values.mobileNumber?.toString()?.slice(-2)}`;
    };

    const otpData = {
      mobileNumber: formik.values.mobileNumber,
      countryCode: formik.values.countryCode,
      mobileVerified: true,
    };
    

    const handleSubmit = () => {
      dispatch(setPersonalDetail({ requestBody:otpData, handleSuccess, handleFail: () => {} }))
    }

    // Success handler once otp is verified
    const handleVerifyOtpSuccess = () => {
      setShowModal(false);
      toaster.success("Your mobile number has been verified successully");
      formik.setFieldValue("isMobileVerified", true);
      setVerifiedNumber(
        `${formik.values.countryCode}${formik.values.mobileNumber}`
      );
    };

    const sendOTPSuccess = () => {
      // show modal to enter otp
      setShowModal(true);
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

    const sendOTPToMobile = async (event) => {
      event.preventDefault();
        // send otp
        const requestBody = {
          channel: "SMS",
          mobileNumber: `${formik.values.countryCode}${formik.values.mobileNumber}`,
        };
        dispatch(sendOTP({ requestBody, handleSuccess: sendOTPSuccess }));
    };

  return (
    <>
    <Dialog
      open={open}
      aria-labelledby="responsive-dialog-title"
      maxWidth="670px"
      className={classes.mainDialogAdd}
    >
      
          <MKBox className={classes.closeIconContainer1}>
            <CloseButton
              className={classes.closeIconRight}
              onClick={handleClose}
            />
          </MKBox>
            <DialogContent
              display="flex"
              justify="center"
            >
              <MKTypography
                variant="body2"
                // color="text"
                textAlign="center"
                className={classes.subtitlePhone}
              >
                Add Phone Number
              </MKTypography>
              <Grid container spacing={3} pl={{ lg: 2, sm: 1 }} pr={{  lg: 2, sm: 1 }}>
                <Grid item xs={12} md={12} className={classes.pTop}>
                  <InputLabel
                    error={
                      (formik.touched.mobileNumber &&
                        Boolean(formik.errors.mobileNumber)) ||
                      (Boolean(formik.values.mobileNumber) &&
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
                  <div style={{ position: "relative" }} className="add-phone">
                    <PhoneInput
                      dropdownStyle={{ zIndex: 100 }}
                      inputProps={{
                        name: "mobileNumber",
                        required: true,
                        autoFocus: false,
                      }}
                      country={defaultCountry}
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
                          `+${current?.dialCode}${value.slice(
                            current?.dialCode?.length
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
            </DialogContent>
          <MKBox
            display="flex"
            justifyContent="center"
            className={classes.buttonContainer}
            p={2}
          >
            <MKButton
              variant="gradient"
              // color="primary"
              size="medium"
              // customSize="200px"
              onClick={handleSubmit}
              disabled={disabled || !formik.values.isMobileVerified}
            >
              <ButtonSpinner
                text="Continue"
                classes={classes.navigateLogin}
                isLoading={isBtnLoading || isLoadingAuth?.securityRequest || isLoading?.setPersonalDetails}
              />
            </MKButton>
          </MKBox>
    </Dialog>
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
  </>
  );
};

export default ConfirmationModal;

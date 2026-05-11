import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  Grid,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

// Static imports
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKBox from "components/custom/MKBox";
import HeadingLayout from "components/HeadingLayout/HeadingLayout";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import createNewPassword from "validation/createNewPassword";
import styles from "./styles/loginStyle";
import { resetPasswordSaga } from "store/actions";
import { PASSWORD_VALIDATION } from "constants/errorConstants";
import { checkLinkValidity } from "store/actions";
import MKTypography from "components/custom/MKTypography";
import { routePaths } from "routes/mainRoutes/routePaths";

function CreateNewPassword() {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showPassword, setShowPassword] = useState({
    confirm: false,
    create: false,
  });
  const [verified, setVerified] = useState(false);
  const { isLoading, isLinkValid } = useSelector((state) => state.auth);

  const initialValues = {
    createPassword: "",
    confirmPassword: "",
  };

  // Reset password api success handler
  const handleSuccess = () => {
    navigate(routePaths.LANDING_PAGE_PATH);
  };

  useEffect(() => {
    dispatch(checkLinkValidity({ request: "password", token: id }));
  }, []);

  // Reset password api handler
  const onSubmitBtnHandler = (values) => {
    const requestBody = {
      password: values.createPassword,
    };
    dispatch(resetPasswordSaga({ requestBody, id, handleSuccess }));
  };

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
        formik.errors?.createPassword === undefined &&
        formik.values.createPassword.length > 0
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

  const formik = useFormik({
    initialValues,
    validationSchema: createNewPassword,
    onSubmit: (values) => {
      onSubmitBtnHandler(values);
    },
  });

  const handleClickShowPassword = (prop) => {
    setShowPassword({ ...showPassword, [prop]: !showPassword[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <MKBox component="section" py={12} className={classes.paddingModal}>
      <Container>
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={8}
          lg={5}
          xl={4.5}
          className={classes.formContainer}
        >
          <Grid
            container
            item
            justifyContent="center"
            mx="auto"
            className={classes.mBottom50}
            textAlign="center"
          >
            <HeadingLayout heading="Reset Password" type="all" />
          </Grid>
          <Grid container item mx="auto" className={classes.maxWidth}>
            <MKBox width="100%">
              <MKBox p={2} />
            </MKBox>
          </Grid>
          {isLoading.checkLinkValidity ? (
            <MKBox className={classes.loaderContainer}>
              <CircularProgress />
            </MKBox>
          ) : !isLinkValid ? (
            <MKBox className={classes.resetTextBox}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                // color="error"
                className={classes.resetText}
              >
                Reset password link expired. Please try again
              </MKTypography>
            </MKBox>
          ) : (
            <MKBox
              m="auto"
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <MKBox py={3} px={3}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} m="auto">
                    <MKInput
                      fullWidth
                      type={showPassword.create ? "text" : "password"}
                      id="createPassword"
                      name="createPassword"
                      label="New Password"
                      requiredLabel
                      // labelColor={classes.labelColor}
                      value={formik.values.createPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.createPassword &&
                        Boolean(formik.errors.createPassword)
                      }
                      helperText={
                        formik.errors.createPassword &&
                        formik.touched.createPassword
                          ? formik.errors.createPassword
                          : formik.values.createPassword?.length > 0
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
                              className={classes.iconButton}
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
                        className:"hideMSReveal"
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    mt={0}
                    sx={{
                      margin: "10px auto auto auto",
                    }}
                  >
                    <MKInput
                      fullWidth
                      type={showPassword.confirm ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm New Password"
                      requiredLabel
                      // labelColor={classes.labelColor}
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                      }
                      helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                handleClickShowPassword("confirm");
                              }}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              className={classes.iconButton}
                            >
                              {!showPassword.confirm ? (
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
                        className:"hideMSReveal"
                      }}
                    />
                  </Grid>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    pt={2}
                    mb={2}
                  >
                    <Grid item xs={12} lg={12} sm={12}>
                      <MKButton
                        type="submit"
                        variant="gradient"
                        // color="primary"
                        className={classes.resetButton}
                        fullWidth
                        disabled={!isLinkValid || isLoading.resetPassword}
                      >
                        <ButtonSpinner
                          text="Reset"
                          isLoading={isLoading.resetPassword}
                        />
                      </MKButton>
                    </Grid>
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CreateNewPassword;

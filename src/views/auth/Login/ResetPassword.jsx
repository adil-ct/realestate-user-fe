import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

// Static imports
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import HeadingLayout from "components/HeadingLayout/HeadingLayout";
import { EMAIL_REQUIRED, EMAIL_VALID } from "constants/errorConstants";
import PasswordRecoveryModal from "components/Modal/PasswordRecoveryModal";
import styles from "./styles/loginStyle";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordSaga } from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";

function TwoFactorAuthentication() {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { isLoading } = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  });

  // Forgot password api success handler
  const handleSuccess = () => {
    setOpen(true);
  };

  // Forgot password api call
  const submitBtnHandler = (values) => {
    const requestBody = {
      email: values.email,
    };
    console.log("req", requestBody);
    dispatch(forgotPasswordSaga({ requestBody, handleSuccess }));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      submitBtnHandler(values);
    },
  });

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
            textAlign="center"
            mt="20px"
            className={classes.sectionDesktop}
          >
            <HeadingLayout
              heading="Forgot Password"
              subHeading="Please enter your registered email address."
              type="desktop"
            />
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            mx="auto"
            textAlign="center"
            display="block"
            className={classes.sectionMobile}
          >
            <HeadingLayout
              heading="Forgot Password"
              subHeading="Please enter your registered email address."
              type="mobile"
            />
          </Grid>
          <Grid container item mx="auto" mb="40px">
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <MKBox py={3} px={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <MKInput
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      autoComplete="on"
                      // labelColor={classes.labelColor}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  mt={2}
                >
                  <Grid item xs={12} lg={12} sm={12}>
                    <MKButton
                      type="button"
                      variant="outlined"
                      // color="primary"
                      onClick={() => {
                        if(!window.history || window.history < 2 || !window.history.state) {
                          navigate(routePaths.LANDING_PAGE_PATH);
                        } else {
                          navigate(-1);
                        }
                      }}
                      className={`${classes.button50Width} ${classes.marginRight20}`}
                    >
                      <ButtonSpinner
                        text="Back"
                      />
                    </MKButton>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      // color="primary"
                      className={classes.button51Width}
                      disabled={isLoading.forgetPassword}
                    >
                      <ButtonSpinner
                        text="Submit"
                        isLoading={isLoading.forgetPassword}
                      />
                    </MKButton>
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <PasswordRecoveryModal
        open={open}
        setOpen={setOpen}
        email={formik.values.email}
      />
    </MKBox>
  );
}

export default TwoFactorAuthentication;

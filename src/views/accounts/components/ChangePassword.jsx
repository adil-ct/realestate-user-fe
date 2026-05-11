import {  useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dialog, Grid, InputAdornment,IconButton } from "@mui/material";
import { useFormik } from "formik";
// Static imports
import styles from "components/Modal/styles";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import MKInput from "components/custom/MKInput";
import changePassword from "validation/changePasword";
import { PASSWORD_VALIDATION } from "constants/errorConstants";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { changePasswordSaga } from "store/actions";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";
import { logout } from "store/actions";


const ChangePassword = ({ handleClose, open }) => {
  const classes = styles();
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    old: false,
    new:false,
    confirm: false,
  });
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: changePassword,
    onSubmit: (values,  { resetForm }) => {
      const requestBody = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      }
      dispatch(changePasswordSaga({requestBody, successHandler: () => {
        handleClose()
        resetForm()
        dispatch(logout({navigate}));
      }}))
    },
  });

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
        formik.errors?.newPassword === undefined &&
        formik.values.newPassword.length > 0
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
  // it will check confirm password matches or Not
  // const confirmVerify = () => {
  //   if (
  //     formik.errors && // 👈 null and undefined check
  //     Object.keys(formik?.errors)?.length === 0 &&
  //     Object.getPrototypeOf(formik?.errors) === Object.prototype
  //   ) {
  //     return "";
  //   } else {
  //     const status =
  //       formik.errors?.confirmPassword === undefined &&
  //       formik.values.confirmPassword.length > 0
  //         ? true
  //         : false;
  //     if (status) {
  //       return "";
  //     } else {
  //       return CONFIRM_PASSWORD_NOT_MATCH;
  //     }
  //   }

  // }
  const handleClickShowPassword = (prop) => {
    setShowPassword({ ...showPassword, [prop]: !showPassword[prop] });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const closeModal = () => {
    handleClose()
    formik.resetForm()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={classes.ChangePaswordMainConatiner}
    >
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={closeModal} />
      </MKBox>
      <MKBox>
        <MKTypography
          variant="h3"
          align="center"
          className={classes.depositModalTitle}
        >
          Change Password
        </MKTypography>
        <MKBox component="form" onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.changePasswordInput}>
              <MKInput 
                fullWidth
                type={showPassword.old ? "text" : "password"}
                autoComplete="current-password"
                id="oldPassword"
                name="oldPassword"
                label="Old Password"
                // labelColor={classes.whiteLabelColor}
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                error={
                      formik.touched.oldPassword &&
                      Boolean(formik.errors.oldPassword)
                    }
                helperText={
                        formik.errors.oldPassword && formik.touched.oldPassword
                          ? formik.errors.oldPassword
                          : formik.values.oldPassword?.length > 0
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                handleClickShowPassword("old");
                              }}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              className={classes.iconButton}
                            >
                              {!showPassword.old ? (
                                <Visibility className={classes.passwordIcon} />
                              ) : (
                                <VisibilityOff className={classes.passwordIcon} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        className:"hideMSReveal"
                      }}
              />
              <MKInput className={classes.changePasswordMainInput}
                fullWidth
                type={showPassword.new ? "text" : "password"}
                autoComplete="new-password"
                id="newPassword"
                name="newPassword"
                label="New Password"
                // labelColor={classes.whiteLabelColor}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={
                      formik.touched.newPassword &&
                      Boolean(formik.errors.newPassword)
                    }
                helperText={
                        Boolean(formik.errors.newPassword) && formik.touched.newPassword
                          ? formik.errors.newPassword
                          : formik.values.newPassword?.length > 0
                          ? verifyStatus()
                          : ""
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                handleClickShowPassword("new");
                              }}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              className={classes.iconButton}
                            >
                              {!showPassword.new ? (
                                <Visibility className={classes.passwordIcon} />
                              ) : (
                                <VisibilityOff className={classes.passwordIcon} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        className:"hideMSReveal"
                      }}
              />
              <MKInput className={classes.changePasswordMainInput}
                fullWidth
                type={showPassword.confirm ? "text" : "password"}
                autoComplete="new-password"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm New Password"
                // labelColor={classes.whiteLabelColor}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                helperText={
                        Boolean(formik.errors.confirmPassword) && formik.touched.confirmPassword
                          ? formik.errors.confirmPassword
                          : formik.values.confirmPassword?.length > 0
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
                                <VisibilityOff className={classes.passwordIcon} />
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
          </Grid>
          <MKBox display="flex" justifyContent="center">
            <MKButton
              type="submit"
              variant="gradient"
              // color="primary"
              className={classes.ChangePasswordBtn}
            >
              Confirm
            </MKButton>
          </MKBox>
        </MKBox>
      </MKBox>
    </Dialog>
  );
};

export default ChangePassword;

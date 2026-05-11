import React from "react";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { hideModal } from "store/actions";
import Modal from "pages/wallet/components/Modal";
import successImg from "assets/images/success.svg";
import { routePaths } from "routes/mainRoutes/routePaths";

function RegistrationSuccessModel(props) {
  const { message } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(hideModal());
  };
  return (
    <Modal
      title={
        <MKTypography
          variant="h3"
          align="center"
          width={680}
          sx={{
            fontSize: "30px",
            fontWeight: "800",

            "@media (max-width:600px)": {
              fontSize: "20px",
              fontWeight: "700",
            },
            "@media (max-width:376px)": {
              fontSize: "18px",
              fontWeight: "700",
            },
            "@media (max-width:320px)": {
              fontSize: "15px",
              fontWeight: "700",
            },
          }}
        >
          Registration Completed Successfully!
        </MKTypography>
      }
      width="auto"
    >
      <Grid container item spacing={3}>
        <Grid item xs={12} display="flex" justifyContent="center">
          <img src={successImg} alt="" />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <MKTypography variant="genericRegular">{message}</MKTypography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" mt={4}>
        <Grid item xs={12} lg={6} sm={12} style={{ marginBottom: 25 }}>
          <MKButton
            variant="gradient"
            // color="primary"
            fullWidth
            onClick={handleClick}
            component={NavLink}
            to={routePaths.LOGIN_PATH}
          >
            Log in
          </MKButton>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default RegistrationSuccessModel;

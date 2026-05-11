import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Static imports
import MKBox from "components/custom/MKBox";
import loginStyle from "../Login/styles/loginStyle";
import RegisterForm from "./RegisterForm";
import InstantSign from "components/Modal/InstantSign";

function Register() {
  const classes = loginStyle();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MKBox>
        <MKBox component="section" className={classes.paddingModal1}>
          <Container>
            <Grid
              container
              item
              xs={12}
              sm={10}
              md={8}
              lg={6}
              xl={5.2}
              sx={{ mx: "auto" }}
              className={classes.formContainer}
            >
            <RegisterForm sso={true} showModal={() => setShowModal(true)} />
            </Grid>
          </Container>
          <InstantSign open={showModal} handleClose={() => setShowModal(false)}/>
        </MKBox>
    </MKBox>
  );
}

export default Register;

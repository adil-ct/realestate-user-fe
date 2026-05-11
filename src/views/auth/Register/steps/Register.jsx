import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Alert from "@mui/material/Alert";
import "react-phone-input-2/lib/material.css";

import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import MKStepper from "components/custom/MKStepper";
import { checkPersonalDetailStatus } from "store/sagas/auth/auth";
import InvestorDetails from "./InvestorDetails";
import TwoFA from "./TwoFA";
import KYC from "./kyc";
import { profileFetch } from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";

// styles
import { styles } from "../styles/registerStyles";

function Registration() {
  const classes = styles();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(state?.step ?? 0);
  const { userData } = useSelector((state) => state.auth);

  const steps = ["About You", "Verify Your Identity", "2FA Setup"];

  useEffect(() => {
    setTimeout(() => {
      dispatch(profileFetch());
    }, [1000]);
  }, [activeStep]);

  useEffect(() => {
    if (userData?.userType) {
      const { personalDetailsCheck, kycStatus, securityCheck } = userData || "";
      const stepNumber = checkPersonalDetailStatus(
        personalDetailsCheck,
        kycStatus,
        securityCheck,
        false
      );

      if (stepNumber === -1) {
        navigate(routePaths.PORTFOLIO_PATH);
        return;
      } else if (stepNumber !== activeStep) {
        setActiveStep(stepNumber);
      }
    }
    window.history.replaceState({}, document.title);
  }, [userData]);

  const getStepComponent = (step) => {
    switch (step) {
      case 0:
        return <InvestorDetails setActiveStep={setActiveStep} />;
      case 1:
        return <KYC setActiveStep={setActiveStep} />;
      default:
        return <TwoFA />;
    }
  };

  return (
    <MKBox component="section">
      <div className={classes.detailsContainerBox}>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          className={classes.detailsOutterBox}
        >
          <div className={classes.detailsInnerBox}>
            <div className={classes.stepperBox}>
              <MKStepper steps={steps} activeStep={activeStep} />
            </div>
            <div className={classes.headingBoxOutter}>
              <div className={classes.headingBox}>
                <MKTypography variant="h5" className={classes.headingText}>
                  {activeStep === 0
                    ? "Tell us a little bit about you"
                    : steps[activeStep]}
                </MKTypography>
              </div>
              <div className={classes.detailsSection}>
                {state?.access && (
                  <Alert
                    variant="filled"
                    severity="info"
                    className={classes.infoAlert}
                  >
                    Please set your account to get complete access
                  </Alert>
                )}
                {getStepComponent(activeStep)}
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </MKBox>
  );
}

export default Registration;

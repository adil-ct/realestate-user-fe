import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Persona from "persona";
import { Grid } from "@mui/material";

import { styles } from "../styles/registerStyles";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import {
  PERSONA_ENV,
  PERSONA_TEMPLATE_ID,
  PERSONA_ENV_ID,
} from "constants/env";
import toaster from "utils/toaster";

const KYC = ({ setActiveStep }) => {
  const classes = styles();
  const { isLoading, userData } = useSelector((state) => state.auth);
  const [client, setClient] = useState();
  const { _id } = userData;
  const [isPersonalLoaded, setPersonaLoaded] = useState(false);
  const language = "en-US"; // hard code for now 

  const loadScripts = (url) => {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
    setPersonaLoaded(true);
  }

  useEffect(() => {
      loadScripts("https://cdn.withpersona.com/dist/persona-v4.2.0.js");
  }, [])

  useEffect(() => {
    if(isPersonalLoaded) {
      const personaClient = new Persona.Client({
        templateId: PERSONA_TEMPLATE_ID,
        environment: PERSONA_ENV,
        environmentId: PERSONA_ENV_ID,
        language: language,
        onComplete: () => {
          successHandler();
        },
        referenceId: _id,
      });
      setClient(personaClient);
    }
  }, [isPersonalLoaded]);

  const successHandler = () => {
    // move to 2FA step
    toaster.success(
      "ID verification completed! Confirm order to invest."
    );
    setActiveStep(2);
    window.scrollTo(0, 0);
  };

  const handleStartKyc = () => {
    client?.open();
  };

  return (
    <>
      <Grid
        container
        item
        className={classes.borderDesktop}
        sx={{ mx: "auto" }}
      >
        <MKTypography
          variant="description"
          className={classes.kycdescription1}
        >
          Complete ID verification in just 2 minutes to access Invest Tech.
        </MKTypography>
        <MKTypography variant="description" className={classes.kycdescription}>
          Given we are a US-based entity dealing with money, we are required to
          verify the identity of all of our users. In compliance with US
          regulations, we have partnered with Persona for our verification
          process, one of the largest service providers in the compliance space
          and trusted by institutions such as Square, Brex, Toast, and more.
          These verification measures are required for all platforms dealing
          with money such as Robinhood, Fidelity, and more. The
          verification has nothing to do with credit, and this verification will
          not impact your credit.
        </MKTypography>
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            lg={6}
            sm={12}
            mt={-5}
            className={classes.nextBtnBox1}
          >
            <MKButton
              type="submit"
              variant="gradient"
              // color="primary"
              className={classes.nextBtn}
              onClick={handleStartKyc}
              disabled={!_id}
            >
              <ButtonSpinner
                text="Complete Verification"
                isLoading={isLoading.kycInquiry}
              />
            </MKButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default KYC;

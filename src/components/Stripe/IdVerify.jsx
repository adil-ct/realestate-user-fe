import { useState } from "react"
import { useSelector } from "react-redux";
import Persona from "persona";

import {
    PERSONA_ENV,
    PERSONA_TEMPLATE_ID,
    PERSONA_ENV_ID,
  } from "constants/env";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import { ID } from "constants/assets";
import styles from "../Modal/styles";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";

const IdVerification = ({ successHandler}) => {
    const classes = styles();
    const [isLoading, setIsLoading] = useState(false);
    const { userData } = useSelector((state) => state.auth);
    const { _id } = userData || "";
    const language = "en-US"; // hard code for now 

    const handleStartKyc = () => {
        if(userData?.kycStatus === "created" || userData?.kycStatus === "started" ||  userData?.kycStatus === "pending" || userData?.kycStatus === "failed" || userData?.kycStatus === "declined"){
            setIsLoading(true);
            // Create instance
            const personaClient = new Persona.Client({
                templateId: PERSONA_TEMPLATE_ID,
                environment: PERSONA_ENV,
                environmentId: PERSONA_ENV_ID,
                language: language,
                onReady: () => {
                    personaClient.open();
                    setIsLoading(false);},
                onError: () => {},
                // onEvent: (name, metadata) => { console.log((name, metadata)); },
                onComplete: () => {
                    successHandler();
                },
                referenceId: _id,
            });
            // personaClient?.open();
        }
        else{
            successHandler();
        }
      };

    // const loadScripts = (url) => {
    //     let script = document.createElement('script');
    //     script.src = url;
    //     document.getElementsByTagName('head')[0].appendChild(script);
    // }

    // useEffect(() => {
    //     loadScripts("https://cdn.withpersona.com/dist/persona-v4.2.0.js", true);
    // }, [])

    return (
        <MKBox>
            <MKTypography className={classes.subtitleHeadId}>
                <b>One-Time ID verification</b>: Federal regulation requires that we verify your identity one time before using the platform. This won&apos;t impact your credit score.
            </MKTypography>
            <MKBox mb={"80px"} display="flex" flexDirection="column" alignItems="center">
                <img src={ID} className={classes.idVerification} />
                <MKButton
                    type="submit"
                    variant="gradient"
                    // color="primary"
                    onClick={handleStartKyc}
                    disabled={isLoading}
                    className={classes.button50Width}
                  >
                    <ButtonSpinner isLoading={isLoading} text="Verify ID" />
                  </MKButton>
            </MKBox>
        </MKBox>
    );
};

export default  IdVerification;
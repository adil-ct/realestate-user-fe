import React from "react";
import MKButton from "components/custom/MKButton";
import styles from "./styles";

const TourTooltip = (data) => {
  const {
    continuous,
    index,
    step,
    backProps,
    closeProps,
    primaryProps,
    tooltipProps,
    isLastStep,
  } = data;
  const classes = styles();
  return (
    <div
      {...tooltipProps}
     className={classes.mainBox}
    >
      {step.title && <div>{step.title}</div>}
      <div className={classes.tourContent}>
        {step.content}
      </div>
      <div
       className={classes.tourBtnContainer}
      >
        <div
          className={classes.tourBtnLeftContainer}
          {...(isLastStep ? backProps: closeProps)}
          id="close"
        >
          {isLastStep ? "Back" : "Skip"}
        </div>  
        <div
         className={classes.tourBtnRightContainer}
        >
          {continuous && index !== 0 && (
            <MKButton
              type="submit"
              variant="gradient"
              // color="primary"
              fontSize="14px"
              fontWeight="500"
              id="back"
              className={classes.maxHWidth}
              {...(isLastStep ? closeProps : backProps )}
            >
              {isLastStep ? "Complete Tutorial" : "Back"}
            </MKButton>
          )}
          {continuous && !isLastStep && (
            <MKButton
              type="submit"
              variant="gradient"
              // color="primary"
              fontSize="14px"
              fontWeight="500"
              id="next"
              className={classes.maxHWidth}
              {...primaryProps}
            >
              Next
            </MKButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourTooltip;

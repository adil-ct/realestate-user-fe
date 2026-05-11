import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import colors from "assets/theme/base/colors";

const fillColor = colors.secondary.main;

const MKStepperConnector = styled(StepConnector)(({showlabel}) => {
  return ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: fillColor,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: fillColor,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: fillColor,
    borderTopWidth: 3,
    borderRadius: 1,
    width: showlabel ? "80%" : "100%",
    minWidth: "20px",
    margin: "auto"
  },
})});

const MKStepperStepIconRoot = styled('div')(({ theme, ownerState }) => {
  return ({
  // color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 25,
  alignItems: 'center',
  ...(ownerState.active && {
    // color: '#784af4',
  }),
  '& .MKStepperStepIcon-completedIcon': {
    color: theme.palette.success.main,
    // color: '#784af4',
    zIndex: 1,
    fontSize: 16,
    width: "25px",
    height: "25px",
  },
  '& .MKStepperStepIcon-filled-circle': {
    width: "25px",
    height: "25px",
    borderRadius: '50%',
    backgroundColor: fillColor,
    color: colors.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 700
  },
  '& .MKStepperStepIcon-circle': {
    width: "25px",
    height: "25px",
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: fillColor,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: fillColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 400
  },

})});

const MKStepLabel = styled(StepLabel)(() => ({
   "& .MuiStepLabel-label": {
    color: fillColor,
    fontSize: "14px",
    whiteSpace: "nowrap",
    fontWeight: 400,
    "&.Mui-active":{
        color: fillColor,
        fontWeight: 600,
    },
    "&.Mui-completed":{
        fontWeight: 500,
        color: "#046149"
    }
   }
  }));

  const MKStepperComp = styled(Stepper)(({activeStep}) => {
    return {
      justifyContent: activeStep === 0 
      ? "flex-start" 
      : (activeStep === 1) ? "center": "flex-end" ,
     }
  });

  const MKStack = styled(Stack)(() => ({
    width: "100%"
  }));

function MKStepperStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <MKStepperStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
         <CheckCircleIcon className="MKStepperStepIcon-completedIcon"/>
      ) : active ? (
        <div className="MKStepperStepIcon-filled-circle">
            {props.icon}
        </div>
      ): (
        <div className="MKStepperStepIcon-circle">
            {props.icon}
        </div>
      )}
    </MKStepperStepIconRoot>
  );
}

MKStepperStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
   icon: PropTypes.node,
};


export default function MKStepper({steps, activeStep, showlabel=true}) {
  return (
    <MKStack spacing={4}>
      <MKStepperComp activeStep={activeStep} connector={<MKStepperConnector showlabel={showlabel}/>}>
        {steps?.map((label, index) => (
          <Step key={index}>           
            <MKStepLabel StepIconComponent={MKStepperStepIcon}>{showlabel ? label : ""}</MKStepLabel>
          </Step>
        ))}
      </MKStepperComp>
    </MKStack>
  );
}

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import colors from "assets/theme/base/colors";

// Custom styles for MKInput
import MKInputRoot from "components/custom/MKInput/MKInputRoot";
import { Box, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Tooltip from "@mui/material/Tooltip";

const MKInput = forwardRef(
  (
    {
      disabled,
      defaultInput,
      id,
      label,
      error,
      labelColor,
      requiredLabel,
      labelTailIcon,
      sx,
      manualEntry = false,
      showAdditionalDetails,      
      caption="",
      ...rest
    },
    ref
  ) => (
    <>
      {requiredLabel ? (
      <Box sx={{display: "flex" , justifyContent: "space-between"}}>
        <Typography
          display="inline"
          className={labelColor || ""}
          htmlFor={id}
          error={error ? 1 : 0}
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            display: "block",
            textAlign: "left"
          }}
        >
          {label}
          <Typography
            display="inline"
            className={labelColor || ""}
            sx={{ color: colors.inputs.label.asterisk.main }}
            htmlFor={id}
            component="span"
            error={error ? 1 : 0}
          >
            &nbsp;*
          </Typography>
          {labelTailIcon && (<>
            {labelTailIcon.toolTip ? (
              <Tooltip
                title={labelTailIcon.toolTip.text}
                placement={labelTailIcon.toolTip.placement}
                enterTouchDelay={0}
              >
                <IconButton sx={{padding: 0}}>
                  {labelTailIcon.Icon && 
                    <labelTailIcon.Icon sx={{ width: '14px'}}/>}
                </IconButton>
              </Tooltip>
            ):(
              <IconButton sx={{padding: 0}}>
                {labelTailIcon.Icon && 
                  <labelTailIcon.Icon sx={{ width: '14px'}}/>}
              </IconButton>
            )}
          </>)}
        </Typography>
        {manualEntry && 
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          sx={{
            display: disabled ? "none" : "block",
            textAlign: "right",         
            marginTop: "10px",
            cursor: "pointer",
            color: (theme) =>  theme.palette.callToAction.light
          }}
          onClick={showAdditionalDetails}
        >
          Enter Manually
        </Typography>
        }
      </Box>
      ) : (
        <Typography className={labelColor || ""} htmlFor={id}  error={error ? 1 : 0} sx={{
          fontSize: "14px",
          fontWeight: 400,
          textAlign: "left"
        }}>
          {label}
        </Typography>
      )}
      {caption?.length ? 
       <Typography
       variant="caption"
       display="block"
       gutterBottom
       sx={{ textAlign: "left", marginBottom: "10px" , marginTop: "10px"}}
     >
       {caption}
     </Typography> : null}
      <MKInputRoot
        {...rest}
        id={id}
        ref={ref}
        margin="dense"
        ownerState={{ disabled, defaultInput }}
        error={error}
        disabled={disabled}
        sx={{
          input: {color: disabled ? colors.bodyText.disabled : colors.bodyText.primary },
          ...sx
        }}
      />
    </>
  )
);

// Setting default values for the props of MKInput
MKInput.defaultProps = {
  error: false,
  // success: false,
  disabled: false,
  defaultInput: true,
  id: "",
  label: "",
};

// Typechecking props for the MKInput
MKInput.propTypes = {
  error: PropTypes.bool,
  // success: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultInput: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default MKInput;

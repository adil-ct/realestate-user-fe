import { forwardRef } from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKTypography from "components/custom/MKTypography";

// Custom styles for MKProgress
import MKProgressRoot from "components/custom/MKProgress/MKProgressRoot";

const MKProgress = forwardRef(
  ({ variant, color, value, label, height, background, activeBG, borderRadius, ...rest }, ref) => {
    return (
      <>
        {label && (
          <MKTypography variant="button" fontWeight="medium" /*color="text"*/>
            {value}%
          </MKTypography>
        )}
        <MKProgressRoot
          {...rest}
          ref={ref}
          variant="determinate"
          value={value}
          ownerState={{ color, value, variant, height, background, activeBG, borderRadius }}
        />
      </>
    );
  }
);

// Setting default values for the props of MKProgress
MKProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the MKProgress
MKProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default MKProgress;

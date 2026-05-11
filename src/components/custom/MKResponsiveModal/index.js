import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKButton
import MKResponsiveModalRoot from "components/custom/MKResponsiveModal/MKResponsiveModalRoot";

const MKResponsiveModal = forwardRef(({ variant, size, children, ...rest }, ref) => (
  <MKResponsiveModalRoot
    {...rest}
    ref={ref}
    variant={variant === "backdrop" ? "nobackdrop" : variant}
    size={size}
    ownerState={{ variant, size }}
  >
    {children}
  </MKResponsiveModalRoot>
));

// Setting default values for the props of MKButton
MKResponsiveModal.defaultProps = {
  size: "medium",
  variant: "backdrop",
};

// Typechecking props for the MKButton
MKResponsiveModal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["backdrop", "nobackdrop"]),
  children: PropTypes.node.isRequired,
};

export default MKResponsiveModal;

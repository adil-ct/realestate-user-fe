// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Kit 2 React helper functions
// import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";
// import linearGradient from "assets/theme/functions/linearGradient";

const { borderWidth } = borders;
const { md } = boxShadows;

export default {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {

      "&:hover": {
        backgroundColor: "transparent",
      },

      "&.Mui-checked": {

        "&:hover": {
          backgroundColor: "transparent",
        },

        "& .MuiSwitch-thumb": {
          borderColor: `${colors.callToAction.light} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: colors.callToAction.light,
          borderColor: colors.callToAction.light, 
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      // "&.Mui-focusVisible .MuiSwitch-thumb": {
      //   backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      // },
    },

    thumb: {
      backgroundColor: colors.callToAction.white,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${colors.callToAction.off}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: colors.callToAction.off,
      border: `${borderWidth[1]} solid ${colors.callToAction.off}`,
      opacity: 1,
    },

    checked: {},
  },
};

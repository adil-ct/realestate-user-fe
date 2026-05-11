// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Kit 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

// const { white, text, info, secondary } = colors;
const { size } = typography;

const contained = {
  base: {
    minHeight: pxToRem(41),
    minWidth: pxToRem(121),
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },
  extraSmall: {
    minHeight: pxToRem(32),

    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(41),
    minWidth: pxToRem(325),
    padding: `${pxToRem(16)} ${pxToRem(100)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: colors.callToAction.primary,

    "&:hover": {
      backgroundColor: colors.callToAction.active,
    },

    "&:focus:not(:hover)": {
      backgroundColor: colors.callToAction.active,
    },
  },

  secondary: {
    backgroundColor: colors.callToAction.secondary.main,

    "&:hover": {
      backgroundColor: colors.callToAction.secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: colors.callToAction.secondary.active,
    },
  },
};


export default contained;

import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { callToAction } = colors;

const contained = {
  base: {
    minHeight: pxToRem(44),
    minWidth: pxToRem(120),
    padding: `${pxToRem(11)} ${pxToRem(28)}`,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(34),
    padding: `${pxToRem(7)} ${pxToRem(18)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  extraSmall: {
    minHeight: pxToRem(30),
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(52),
    minWidth: pxToRem(200),
    padding: `${pxToRem(14)} ${pxToRem(40)}`,
    fontSize: size.md,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(20)} !important`,
    },
  },

  // Gold CTA — primary action
  primary: {
    backgroundColor: callToAction.primary,
    color: "#1A2B4A",

    "&:hover": {
      backgroundColor: callToAction.dark,
      color: "#FFFFFF",
      boxShadow: "0 6px 20px rgba(201,168,76,0.35)",
    },

    "&:focus:not(:hover)": {
      backgroundColor: callToAction.dark,
    },
  },

  // Navy secondary
  secondary: {
    backgroundColor: callToAction.secondary.main,
    color: "#FFFFFF",

    "&:hover": {
      backgroundColor: callToAction.secondary.dark,
      boxShadow: "0 6px 20px rgba(26,43,74,0.3)",
    },

    "&:focus:not(:hover)": {
      backgroundColor: callToAction.secondary.dark,
    },
  },
};

export default contained;

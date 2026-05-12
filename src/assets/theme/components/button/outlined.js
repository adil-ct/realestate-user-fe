import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { primary, callToAction } = colors;

export default {
  base: {
    minHeight: pxToRem(44),
    padding: `${pxToRem(10)} ${pxToRem(26)}`,
    border: `1.5px solid ${primary.main}`,
    color: primary.main,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: "rgba(26,43,74,0.06)",
      borderColor: primary.light,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(34),
    padding: `${pxToRem(6)} ${pxToRem(18)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(52),
    padding: `${pxToRem(13)} ${pxToRem(32)}`,
    fontSize: size.md,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    border: `1.5px solid ${primary.main}`,
    color: primary.main,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: "rgba(26,43,74,0.06)",
      borderColor: primary.dark,
    },
  },

  secondary: {
    border: `1.5px solid ${callToAction.primary}`,
    color: callToAction.primary,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: "rgba(201,168,76,0.08)",
      borderColor: callToAction.dark,
    },
  },
};

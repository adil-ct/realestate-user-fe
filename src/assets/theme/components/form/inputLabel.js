import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightMedium } = typography;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      fontWeight: fontWeightMedium,
      color: colors.bodyText.disabled,
      lineHeight: 0.9,
      letterSpacing: "0.01em",

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        color: colors.primary.main,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.85em",
        },
      },

      "&.Mui-focused": {
        color: colors.primary.main,
      },

      "&.Mui-error": {
        color: colors.error.main,
      },
    },

    sizeSmall: {
      fontSize: size.xs,
      lineHeight: 1.625,

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.6,
        fontSize: size.sm,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.72em",
        },
      },
    },
  },
};

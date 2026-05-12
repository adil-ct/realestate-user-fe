import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import typography from "assets/theme/base/typography";
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;
const { size } = typography;

export default {
  styleOverrides: {
    root: {
      backgroundColor: colors.inputs.background.primary,
      color: colors.bodyText.primary,
      fontSize: size.sm,
      borderRadius: borderRadius.xl,
      transition: "box-shadow 150ms ease, border-color 150ms ease",

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.inputs.border.primary,
        borderWidth: "1.5px",
      },

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.primary.light,
      },

      "&.Mui-focused": {
        boxShadow: "0 0 0 3px rgba(26,43,74,0.10)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.primary.main,
          borderWidth: "2px",
        },
      },

      "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
      },

      "&.Mui-disabled": {
        backgroundColor: colors.inputs.background.disabled,
        color: colors.bodyText.disabled,
      },
    },

    input: {
      color: colors.bodyText.primary,
      padding: `${pxToRem(10)} ${pxToRem(14)}`,
      backgroundColor: "transparent",

      "&.Mui-disabled": {
        backgroundColor: colors.inputs.background.disabled,
        color: colors.bodyText.disabled,
      },
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: `${pxToRem(10)} ${pxToRem(14)}`,
    },

    multiline: {
      color: colors.bodyText.primary,
      padding: 0,
      lineHeight: "inherit",
      backgroundColor: "transparent",
    },
  },
};

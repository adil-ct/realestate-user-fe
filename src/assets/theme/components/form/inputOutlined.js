// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import typography from "assets/theme/base/typography";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// const { inputBorderColor, info, grey, transparentColor } = colors;
const { borderRadius } = borders;
const { size } = typography;

export default {
  styleOverrides: {
    root: {
      backgroundColor: colors.inputs.background.primary,
      color: colors.bodyText.primary,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.callToAction.active,
        opacity: 0.7,
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.callToAction.active,
        },
      },
      "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
        {
          display: "none",
        },

      "&:disabled": {
        backgroundColor: colors.inputs.background.disabled,
        color: colors.bodyText.disabled,
      }
    },

    // notchedOutline: {
    //   borderColor: inputBorderColor,
    // },

    input: {
      color: colors.bodyText.primary,
      padding: pxToRem(12),
      backgroundColor: colors.inputs.background.primary,
      borderColor: colors.inputs.border.primary,

      "&:disabled": {
        backgroundColor: colors.inputs.background.disabled,
        borderColor: colors.inputs.border.disabled,
        color: colors.bodyText.disabled,
      }
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: colors.bodyText.primary,
      padding: 0, 
      lineHeight: 'inherit',
      backgroundColor: colors.inputs.background.primary, 

      "&:disabled": {
        backgroundColor: colors.inputs.background.disabled,
        borderColor: colors.inputs.border.disabled,
        color: colors.bodyText.disabled,
      }
    },
  },
};

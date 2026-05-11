// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

const { size } = typography;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: colors.bodyText.primary,
      backgroundColor: colors.inputs.background.primary,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${colors.inputs.border.primary}`,
      },

      "&:before": {
        borderColor: colors.inputs.border.primary,
      },

      // "&:after": {
      //   borderColor: info.main,
      // },

      "&:disabled": {
        backgroundColor: colors.inputs.background.disabled,
        // borderColor: colors.inputs.border.disabled,
        // "& fieldset": {
        //   color: colors.bodyText.disabled,
        // }
        
      }
    },
  },
};

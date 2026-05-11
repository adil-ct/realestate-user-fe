import { createStyles, makeStyles } from '@mui/styles';
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { borderWidth } = borders;

const styles = makeStyles(() => createStyles({
    customInput: {
      fontSize: size.sm,
      color: colors.bodyText.primary,
      padding: "auto",
      lineHeight: 'inherit',

      "& input.form-control": {
        fontSize: size.sm,
        lineHeight: "0.9",
        paddingTop: pxToRem(15),
        paddingBottom: pxToRem(15),

          "&:after": {
            borderColor: colors.callToAction.active,
            borderWidth: borderWidth[1],
          },
    
          "&:hover": {
            borderColor: colors.callToAction.hover,
            borderWidth: borderWidth[1],
          },

          "&:focus": {
            borderColor: colors.callToAction.light,
            borderWidth: borderWidth[2],
          },

          "&:disabled": {
            backgroundColor: colors.inputs.background.disabled,
            color: colors.bodyText.disabled,
            borderColor: colors.inputs.border.disabled,
          }
      },

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${colors.inputs.border.primary}`,
      },

      "&:before": {
        borderColor: colors.inputs.border.primary,
      },

      "& .error": {
        borderColor: colors.inputs.border.error,
      }
    }
}));

export default styles;
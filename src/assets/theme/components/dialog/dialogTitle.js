import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightBold } = typography;

export default {
  styleOverrides: {
    root: {
      padding: `${pxToRem(24)} ${pxToRem(28)} ${pxToRem(16)}`,
      fontSize: size.xl,
      fontWeight: fontWeightBold,
      color: colors.bodyText.primary,
      letterSpacing: "-0.01em",
      borderBottom: `1px solid ${colors.grey[100]}`,
    },
  },
};

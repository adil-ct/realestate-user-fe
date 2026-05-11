// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: colors.bodyText.primary,
    },
  },
};

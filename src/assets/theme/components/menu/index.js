import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { borderRadius } = borders;

export default {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(200),
      boxShadow: "0 12px 40px rgba(26,43,74,0.14), 0 4px 12px rgba(26,43,74,0.08)",
      padding: `${pxToRem(8)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: colors.bodyText.primary,
      textAlign: "left",
      backgroundColor: "#FFFFFF",
      borderRadius: borderRadius.xl,
      border: "1px solid #E2E8F0",
    },
  },
};

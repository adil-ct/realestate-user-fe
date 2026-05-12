import Fade from "@mui/material/Fade";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { borderRadius } = borders;

export default {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(240),
      backgroundColor: colors.primary.dark,
      color: "#FFFFFF",
      fontSize: size.xs,
      fontWeight: 400,
      textAlign: "center",
      borderRadius: borderRadius.lg,
      padding: `${pxToRem(8)} ${pxToRem(12)}`,
      boxShadow: "0 8px 24px rgba(26,43,74,0.2)",
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },

    arrow: {
      color: colors.primary.dark,
    },
  },
};

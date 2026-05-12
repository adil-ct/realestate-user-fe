import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      height: pxToRem(7),
      borderRadius: borderRadius.xxxl,
      overflow: "hidden",
      backgroundColor: colors.grey[100],
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: colors.grey[100],
    },

    bar: {
      height: pxToRem(7),
      borderRadius: borderRadius.xxxl,
      position: "absolute",
      transform: "translate(0, 0) !important",
      transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important",
      background: `linear-gradient(90deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
    },
  },
};

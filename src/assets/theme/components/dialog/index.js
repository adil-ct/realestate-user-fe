import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    paper: {
      color: colors.bodyText.primary,
      borderRadius: borderRadius.xxl,
      boxShadow: "0 24px 64px rgba(26,43,74,0.18), 0 8px 24px rgba(26,43,74,0.12)",
      border: "1px solid #E2E8F0",
      backgroundColor: "#FFFFFF",
      overflow: "hidden",
    },
    paperFullScreen: {
      borderRadius: 0,
      border: "none",
    },
  },
};

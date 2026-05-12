import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

const { size, fontWeightSemiBold } = typography;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      transition: "all 200ms ease",
    },

    rounded: {
      borderRadius: borderRadius.xl,
    },

    img: {
      height: "100%",
      objectFit: "cover",
    },

    fallback: {
      height: "75% !important",
      width: "75% !important",
    },

    colorDefault: {
      backgroundColor: colors.primary.main,
      color: "#FFFFFF",
      fontSize: size.sm,
      fontWeight: fontWeightSemiBold,
      letterSpacing: "0.05em",
    },
  },
};

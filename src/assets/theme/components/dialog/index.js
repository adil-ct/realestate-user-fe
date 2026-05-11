// Material Kit 2 React base styles
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
import colors from "assets/theme/base/colors";

const { borderRadius } = borders;
const { xxl } = boxShadows;

export default {
  styleOverrides: {
    paper: {
      color: colors.bodyText.primary,
      borderRadius: borderRadius.lg,
      boxShadow: xxl,
    },

    paperFullScreen: {
      borderRadius: 0,
    },
  },
};

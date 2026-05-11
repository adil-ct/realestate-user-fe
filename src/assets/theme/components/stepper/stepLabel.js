// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
// import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
// import pxToRem from "assets/theme/functions/pxToRem";
// import rgba from "assets/theme/functions/rgba";

const { size, fontWeightRegular } = typography;
// const { white } = colors;

export default {
  styleOverrides: {
    label: {
      fontWeight: fontWeightRegular,
      fontSize: size.md,
      // color: "#2D355A",

      "&.Mui-active": {
        fontWeight: `600 !important`,
        // color: `#2D355A !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        // color: `#51566B !important`,
      },
    },
  },
};

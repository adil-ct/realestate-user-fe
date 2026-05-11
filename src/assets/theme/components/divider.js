// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

export default {
  styleOverrides: {
    root: {
      width: "80%",
      height: pxToRem(1),
      margin: `${pxToRem(16)} auto`,
      borderBottom: "none",
      color: colors.bodyText.primary,
    },

    vertical: {
      // background: rgba(dark.main, 0.2),
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      background: colors.grey[50],

      "&.MuiDivider-vertical": {
        background: colors.grey[50],
      },
    },
  },
};

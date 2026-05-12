import colors from "assets/theme/base/colors";
import pxToRem from "assets/theme/functions/pxToRem";

export default {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      backgroundImage: "none !important",
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: `1px solid ${colors.grey[100]}`,
      opacity: 1,
    },

    vertical: {
      backgroundColor: "transparent",
      backgroundImage: "none !important",
      borderRight: `1px solid ${colors.grey[100]}`,
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
    },

    light: {
      borderColor: colors.grey[50],

      "&.MuiDivider-vertical": {
        borderColor: colors.grey[50],
      },
    },
  },
};

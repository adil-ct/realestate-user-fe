// Material Kit 2 React base styles
// import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// const { transparentColor } = colors;

export default {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${pxToRem(12)} !important`,

      // "& .Mui-selected": {
      //   backgroundColor: transparentColor.main,
      // },
    },

    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset",
    },

    icon: {
      width: "28px",
      height: "28px",
      top: "10px"
    },
  },
};

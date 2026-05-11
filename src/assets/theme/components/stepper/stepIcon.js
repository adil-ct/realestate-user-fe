// Material Kit 2 React base styles
// import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// const { white } = colors;

export default {
  styleOverrides: {
    root: {
      // background: "transparent",
      width: pxToRem(32),
      height: pxToRem(32),
      // color: "#fff",
      borderRadius: "50%",
      // border: "2px solid #2D355A",
      // "&.Mui-active": {
      //   fill: "#2D355A",
      //   border: "none",
      //   "& .MuiStepIcon-text":{
      //     fill: "#ffffffde",
      //   },
      // },

      // "&.Mui-completed": {
      //   background: "#2D355A",
      //   borderColor: "#2D355A",
      //   border: "none",
      // },
    },
  },
};

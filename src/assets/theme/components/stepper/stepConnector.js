// Material Kit 2 React base styles
import borders from "assets/theme/base/borders";
// import colors from "assets/theme/base/colors";

// const { white } = colors;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      // background: "#2D355A",
      transition: "all 200ms linear",
      height: "3px",

      // "&.Mui-active": {
      //   color: "red",
      // },

      // "&.Mui-completed": {
      //   color: "red",
      // },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
      opacity: 0.5,
    },
  },
};

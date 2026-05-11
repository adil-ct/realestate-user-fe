// Material Kit 2 React Base Styles
// import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Kit 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

// const { text, info, secondary, greyMain } = colors;
const { size } = typography;

export default {
  base: {
    // backgroundColor: `${greyMain} !important`,
    minHeight: pxToRem(41),
    minWidth: pxToRem(121),
    // color: text.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    // "&:hover": {
    //   backgroundColor: greyMain,
    // },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },
  extraSmall: {
    minHeight: pxToRem(32),

    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(41),
    minWidth: pxToRem(325),
    padding: `${pxToRem(16)} ${pxToRem(100)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  // primary: {
  //   backgroundColor: info.main,

  //   "&:hover": {
  //     backgroundColor: info.main,
  //   },

  //   "&:focus:not(:hover)": {
  //     backgroundColor: info.focus,
  //   },
  // },

  // secondary: {
  //   backgroundColor: secondary.main,

  //   "&:hover": {
  //     backgroundColor: secondary.main,
  //   },

  //   "&:focus:not(:hover)": {
  //     backgroundColor: secondary.focus,
  //   },
  // },
};

// @mui material components
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default styled(Button)(({ theme, ownerState }) => {
  const { /*palette,*/ functions, borders, /*boxShadows*/ } = theme;
  const { /*color,*/ variant, size, circular, iconOnly, customSize } = ownerState;

  // const { white, black, text, gradients, dark, primary } = palette;
  const { /*boxShadow,*/ pxToRem, /*rgba*/ } = functions;
  const { borderRadius } = borders;
  // const { colored } = boxShadows;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    // background color value
    // const backgroundValue = palette.callToAction.main; //palette[color] ? palette[color].main : white.main;

  //   // backgroundColor value when button is focused
  //   const focusedBackgroundValue = palette[color]
  //     ? palette[color].focus
  //     : white.focus;

  //   // boxShadow value
  //   const boxShadowValue = colored[color]
  //     ? `${boxShadow([0, 3], [3, 0], palette[color].main, 0.15)}, ${boxShadow(
  //         [0, 3],
  //         [1, -2],
  //         palette[color].main,
  //         0.2
  //       )}, ${boxShadow([0, 1], [5, 0], palette[color].main, 0.15)}`
  //     : "none";

  //   // boxShadow value when button is hovered
  //   const hoveredBoxShadowValue = colored[color]
  //     ? `${boxShadow(
  //         [0, 14],
  //         [26, -12],
  //         palette[color].main,
  //         0.4
  //       )}, ${boxShadow(
  //         [0, 4],
  //         [23, 0],
  //         palette[color].main,
  //         0.15
  //       )}, ${boxShadow([0, 8], [10, -5], palette[color].main, 0.2)}`
  //     : "none";

  //   // color value
  //   let colorValue = white.main;

  //   if (color === "default" || !palette[color]) {
  //     colorValue = text.main;
  //   } else if (color === "white") {
  //     colorValue = primary.main;
  //   } else if (color === "light") {
  //     colorValue = dark.main;
  //   }
  
  //   return {
  //     background: backgroundValue,
  //     color: colorValue,
  //     boxShadow: boxShadowValue,

  //     "&:hover": {
  //       backgroundColor: backgroundValue,
  //       boxShadow: hoveredBoxShadowValue,
  //     },

  //     "&:focus:not(:hover)": {
  //       backgroundColor: focusedBackgroundValue,
  //       boxShadow: palette[color]
  //         ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
  //         : boxShadow([0, 0], [0, 3.2], white.main, 0.5),
  //     },

  //     "&:disabled": {
  //       backgroundColor: "rgba(0,0,0,0.2) !important",
  //       opacity: 0.5,
  //       color: colorValue,
  //       borderColor: colorValue,
  //     },
  //   };
    // return {
    //       background: backgroundValue,
    // }
  };

  // // styles for the button with variant="outlined"
  const outliedStyles = () => {
    // background color value
    // const backgroundValue = palette.callToAction.main;

    // return {background: backgroundValue};

  //   // color value
  //   const colorValue = black.secondary;

  //   // boxShadow value
  //   const boxShadowValue = palette[color]
  //     ? boxShadow([0, 0], [0, 1], "grey", 0.5)
  //     : boxShadow([0, 0], [0, 3], backgroundValue, 0.5);

  //   // border color value
  //   let borderColorValue = "#E5E5E5";

  //   if (color === "white") {
  //     borderColorValue = rgba(white.main, 0.75);
  //   }

  //   return {
  //     background: backgroundValue,
  //     color: colorValue,
  //     borderColor: borderColorValue,
  //     width: customSize ? customSize : size,
  //     "&:hover": {
  //       background: backgroundValue,
  //       borderColor: borderColorValue,
  //       boxShadow: boxShadowValue,
  //       opacity: 1,
  //     },
  //     "&.active": {
  //       backgroundColor: colorValue,
  //       color: white.main,
  //     },

  //     "&:focus:not(:hover)": {
  //       // background: transparent.main,
  //       boxShadow: boxShadowValue,
  //     },

  //     "&:active:not(:hover)": {
  //       backgroundColor: colorValue,
  //       color: white.main,
  //       opacity: 0.85,
  //     },

  //     "&:disabled": {
  //       backgroundColor: "rgba(0,0,0,0.2) !important",
  //       opacity: 0.5,
  //       color: colorValue,
  //       borderColor: colorValue,
  //     },
  //   };
  // };

  // // styles for the button with variant="gradient"
  // const gradientStyles = () => {
  //   // background value
  //   const backgroundValue =
  //     color === "white" || !gradients[color]
  //       ? white.main
  //       : gradients[color].main;

  //   // boxShadow value
  //   const boxShadowValue = colored[color]
  //     ? `${boxShadow([0, 3], [3, 0], palette[color].main, 0.15)}, ${boxShadow(
  //         [0, 3],
  //         [1, -2],
  //         palette[color].main,
  //         0.2
  //       )}, ${boxShadow([0, 1], [5, 0], palette[color].main, 0.15)}`
  //     : "none";

  //   // boxShadow value when button is hovered
  //   const hoveredBoxShadowValue = colored[color]
  //     ? `${boxShadow(
  //         [0, 14],
  //         [26, -12],
  //         palette[color].main,
  //         0.4
  //       )}, ${boxShadow(
  //         [0, 4],
  //         [23, 0],
  //         palette[color].main,
  //         0.15
  //       )}, ${boxShadow([0, 8], [10, -5], palette[color].main, 0.2)}`
  //     : "none";

  //   // color value
  //   let colorValue = black.main;

  //   if (color === "white") {
  //     colorValue = gradients.primary.main;
  //   } else if (color === "light") {
  //     colorValue = gradients.dark.state;
  //   }

  //   return {
  //     width: customSize ? customSize : size,
  //     background: backgroundValue,
  //     color: colorValue,
  //     boxShadow: boxShadowValue,

  //     "&:hover": {
  //       backgroundColor: primary.focus,
  //       boxShadow: hoveredBoxShadowValue,
  //     },

  //     "&:active": {
  //       background: backgroundValue,
  //       color: colorValue,
  //       boxShadow: boxShadowValue,
  //     },

  //     "&:focus:not(:hover)": {
  //       background: backgroundValue,
  //       color: colorValue,
  //       boxShadow: boxShadowValue,
  //     },

  //     "&:disabled": {
  //       backgroundColor: "rgba(0,0,0,0.2) !important",
  //       opacity: 0.5,
  //       color: colorValue,
  //       borderColor: colorValue,
  //     },
  //   };
  };

  // styles for the button with variant="text"
  const textStyles = () => {
    // color value
    // const colorValue = palette.callToAction.main; //palette[color] ? palette[color].main : white.main;

  //   // color value when button is focused
  //   const focusedColorValue = palette[color]
  //     ? palette[color].focus
  //     : white.focus;

  //   return {
  //     color: colorValue,

  //     "&:hover": {
  //       color: focusedColorValue,
  //     },

  //     "&:focus:not(:hover)": {
  //       color: focusedColorValue,
  //     },
  //   };

    // return {
    //     color: colorValue,
    // };
  };

  // styles for the button with circular={true}
  const circularStyles = () => ({
    borderRadius: borderRadius.section,
  });

  // styles for the button with iconOnly={true}
  const iconOnlyStyles = () => {
    // width, height, minWidth and minHeight values
    let sizeValue = pxToRem(38);

    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(52);
    }

    // padding value
    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(16);
    }

    return {
      width: customSize ? customSize : sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,

      "& .material-icons": {
        marginTop: 0,
      },

      "&:hover, &:focus, &:active": {
        transform: "none",
      },
    };
  };

  return {
    ...(variant === "contained" && containedStyles()),
    ...(variant === "outlined" && outliedStyles()),
    // ...(variant === "gradient" && gradientStyles()),
    ...(variant === "text" && textStyles()),
    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});

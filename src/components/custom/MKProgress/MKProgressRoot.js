// @mui material components
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

export default styled(LinearProgress)(({ /*theme,*/ ownerState }) => {
  // const { palette, functions } = theme;
  const { color, value, /*variant,*/ height, /*background, activeBG,*/ borderRadius } = ownerState;

  // const { gradients } = palette;
  // const { linearGradient } = functions;

  // background value
  // let backgroundValue;

  // if (variant === "gradient") {
  //   backgroundValue = gradients[color]
  //     ? linearGradient(gradients[color].main, gradients[color].state)
  //     : linearGradient(gradients.info.main, gradients.info.state);
  // } else {
  //   backgroundValue = "#12E6E3";
  // }

  return {
    width: "100%",
    height: height || "8px",
    // background: background || "rgba(18, 230, 227, 0.2)",
    borderRadius: height ? 0 : "0.375rem",
    cursor: "default",
    "& .MuiLinearProgress-bar": {
      // background: activeBG || backgroundValue,
      width: `${Math.floor(value)}%`,
      height: height || "8px !important",
      borderRadius: height ? 0 : borderRadius ? borderRadius : "20px !important",
      cursor: "default",
      color,
    },
  };
});

/* "& .MuiLinearProgress-bar:hover:after": {
  content: `"${value}%"`,
  position: "absolute",
  color: "#fff",
  right: "50%"
},
"&:hover:after": {
  content: `"${value}%"`,
  position: "absolute",
  color: "#fff",
  right: "50%"
}, */
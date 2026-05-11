// @mui material components
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default styled(Typography)(({ theme, ownerState }) => {
  const { typography } = theme;

  const {
    color,
    textTransform,
    verticalAlign,
    fontWeight,
    opacity,
    fontSize,
  } = ownerState;

  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const fontValue = fontSize?.split("px");
  const customFontSize =
    mediumScreen && fontSize && !smallScreen
      ? `${fontValue[0] - 2}px`
      : smallScreen && fontSize
        ? Number(fontValue[0]) > 14 ? `${fontValue[0] - 2}px` : fontSize
        : fontSize;

  const {
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    fontWeightExtraBold,
  } = typography;

  // fontWeight styles
  const fontWeights = {
    light: fontWeightLight, //300
    regular: fontWeightRegular, //400
    medium: fontWeightMedium, //500
    bold: fontWeightBold, //700
    extrabold: fontWeightExtraBold, //900
  };

  return {
    opacity,
    textTransform,
    verticalAlign,
    fontSize: customFontSize,
    textDecoration: "none",
    color,
    letterSpacing: "-0.125px",
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
  };
});

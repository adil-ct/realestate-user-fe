// Material Kit 2 React Base Styles
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

// Material Kit 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightBold } = typography;
const { borderRadius } = borders;

export default {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  borderRadius: borderRadius.xxxl,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: "center",
  fontWeight: fontWeightBold,
  // textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: "all 150ms ease-in",

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightSemiBold } = typography;
const { borderRadius } = borders;

export default {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.sm,
  borderRadius: borderRadius.xl,
  padding: `${pxToRem(10)} ${pxToRem(24)}`,
  lineHeight: 1.5,
  textAlign: "center",
  fontWeight: fontWeightSemiBold,
  letterSpacing: "0.01em",
  userSelect: "none",
  transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "none",

  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 16px rgba(26,43,74,0.18)",
  },

  "&:active": {
    transform: "translateY(0)",
    boxShadow: "none",
    opacity: 0.92,
  },

  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.45,
    transform: "none",
    boxShadow: "none",
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import typography from "assets/theme/base/typography";
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;
const { size } = typography;

export default {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(9)} ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      fontSize: size.sm,
      color: colors.bodyText.primary,
      transition: "background-color 150ms ease, color 150ms ease",

      "&:hover, &:focus": {
        backgroundColor: "rgba(26,43,74,0.05)",
        color: colors.primary.main,
      },

      "&.Mui-selected": {
        backgroundColor: "rgba(201,168,76,0.08)",
        color: colors.primary.main,
        fontWeight: 600,

        "&:hover": {
          backgroundColor: "rgba(201,168,76,0.14)",
        },
      },
    },
  },
};

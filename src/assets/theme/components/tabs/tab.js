import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightMedium } = typography;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.sm,
      fontWeight: fontWeightMedium,
      textTransform: "none",
      lineHeight: "inherit",
      padding: `${pxToRem(10)} ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      color: colors.bodyText.disabled,
      opacity: "1 !important",
      letterSpacing: "0.01em",
      transition: "color 150ms ease",

      "&.Mui-selected": {
        color: colors.primary.main,
        fontWeight: 600,
      },

      "&:hover": {
        color: colors.primary.main,
        borderBottom: "none",
      },

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& i.MuiTab-iconWrapper": {
        marginBottom: 0,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

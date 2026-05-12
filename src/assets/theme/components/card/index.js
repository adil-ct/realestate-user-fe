import borders from "assets/theme/base/borders";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: "#FFFFFF",
      backgroundClip: "border-box",
      border: "1px solid #E2E8F0",
      borderRadius: borderRadius.xxl,
      boxShadow: "0 2px 12px rgba(26,43,74,0.07), 0 1px 3px rgba(26,43,74,0.05)",
      overflow: "visible",
      transition: "box-shadow 200ms ease, transform 200ms ease",

      "&:hover": {
        boxShadow: "0 8px 32px rgba(26,43,74,0.12), 0 2px 8px rgba(26,43,74,0.08)",
        transform: "translateY(-2px)",
      },
    },
  },
};

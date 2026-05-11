const styles = () => ({
  voteMainContainer: {
    // background: "#EEEEEE",
    width: "89%",
    height: "10px",
    borderRadius: "999px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 600px)": { width: "100%", },
  },
  voteMainContainer1: {
    // background: "#EEEEEE",
    width: "100%",
    height: "10px",
    borderRadius: "999px",
    display: "flex",
    justifyContent: "space-between",
    "&:hover $hoverBar": {
      display: "block",
    },
  },
  leftBar: {
    // background: "#4CAF50",
    height: "10px",
    borderRadius: "999px",
    position: "relative",
    cursor: "pointer",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    "&:hover $hoverBar": {
      display: "block",
    },
  },
  rightBar: {
    // background: "#4CAF50",
    height: "10px",
    borderRadius: "999px",
    position: "relative",
    cursor: "pointer",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "&:hover $hoverBar": {
      display: "block",
    },
  },
  bar: {
    // background: "#4CAF50",
    height: "10px",
    borderRadius: "999px",
    position: "relative",
    cursor: "pointer",

    "&:hover $hoverBar": {
      display: "block",
    },
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
  },
  exclamation: {
    marginLeft: "5px",
    // color: "red",
    fontSize: "17px !important",
  },
  hoverBar: {
    position: "absolute",
    overflow: "visible",
    display: "none",
    whiteSpace: "nowrap",
    padding: "10px 8px",
    top: "12px",
    fontWeight: 600,
    fontSize: "12px",
    // background: "#fff",
    borderRadius: "8px",
    zIndex: "500",
  },
  greenHoverBar: {
  //   border: "1px solid #4CAF50",
  //   boxShadow: "0px 4px 10px rgba(76, 175, 80, 0.2)",
  },
  greyHoverBar: {
  //   border: "1px solid #2D9CDB",
  //   boxShadow: "0px 4px 10px rgba(76, 175, 80, 0.2)",
  },
  redHoverBar: {
  //   border: "1px solid #F95C66",
  //   boxShadow: "0px 4px 10px rgba(249, 92, 102, 0.2)",
  },
});

export default styles;

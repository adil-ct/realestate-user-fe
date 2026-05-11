
const usePlaceholderStyles = () => ({
  placeholder: {
    // color: "#4F4F4F",
    lineHeight: "3rem",
  },
});

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};

export default Placeholder;
import Button from "@mui/material/Button";

const CustomButton = ({ variant, text, onClick, className }) => {
  return (
    //The Button comes with three variants: text (default), contained, and outlined.
    <Button variant={variant} onClick={onClick} className={className}>
      {text}
    </Button>
  );
};

export default CustomButton;

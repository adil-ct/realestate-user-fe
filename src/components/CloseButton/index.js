import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles";

const sizes = {
  sm: '8px',
  md: '12px',
  lg: '20px',
  xl: '26px'
};

const CustomCloseButton = ({ onClick, className, size = 'lg', ...rest }) => {
  const classes = styles();
  const classNames = className ? `${classes.customCloseIcon} ${className}` 
    : classes.customCloseIcon;
  
    return (
      <CloseIcon
        className={classNames}
        onClick={onClick}
        height={sizes[size]}
        width={sizes[size]}
        {...rest}
      />
  );
};

export default CustomCloseButton;
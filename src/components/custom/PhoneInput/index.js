import PhoneInput from "react-phone-input-2";
import styles from "./styles";


const CustomPhoneInput = ({ onClick, className, error=false, ...rest }) => {
    const classes = styles();
    const classNames = (className ? `${classes.customInput} ${className}` 
      : classes.customInput) + (error? 'error' : '');
    
      return (
        <PhoneInput
          country="us"
          type="name"
          specialLabel={false}
          size="small"
          enableSearch
          id="mobileNumber"
          name="mobileNumber"
          onMouseDown="none"
          countryCodeEditable={false}
          className={classNames}
          onClick={onClick}
          {...rest}
        />
    );
  };
  
  export default CustomPhoneInput;
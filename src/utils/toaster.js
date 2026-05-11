import { CloseCircle, CloseCircleWhite } from "constants/assets";
import { toast } from "react-toastify";

const CloseButtonBlue = ({ closeToast }) => {
  return (
    <img src={CloseCircle} alt="close" onClick={closeToast} style={{marginLeft: "6px"}}/>
  )
}
const CloseButtonBlueWhite = ({ closeToast }) => {
  return (
    <img src={CloseCircleWhite} alt="close" onClick={closeToast} style={{marginLeft: "6px"}}/>
  )
}


const toaster = {
  success: (message, options ={}) => toast.success(message,{
    ...options,
    className: 'toast-success-container toast-success-container-after',
    progressClassName: {
      // background: '#A6F8C7',
    },
    closeButton: CloseButtonBlue
  }),
  error: (message, options ={}) => toast.error(message,{
    ...options,
    className: 'toast-error-container toast-error-container-after',
    progressClassName: {
      // background: '#F95C66',
    },
    closeButton: CloseButtonBlueWhite
  }),
  warn: (message) => toast.warn(message),
  info: (message) => toast.info(message),
};

export default toaster;

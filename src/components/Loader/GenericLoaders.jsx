import { ThreeDots } from "react-loader-spinner";
import { CircularProgress } from "@material-ui/core";

export const ThreeDotsSpinner = ({ isLoading }) =>
  isLoading &&  <ThreeDots height="40"  width="80"  radius="9" /*color="#58F2F0"*/  ariaLabel="three-dots-loading" visible={true}/>

// Custom OvalSpinner without logo - using Material-UI CircularProgress instead
export const OvalSpinner = ({isLoading, height=80}) => {
  if (!isLoading) return null;
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      width: height,
      height: height,
      position: 'relative'
    }}>
      <CircularProgress 
        size={height} 
        thickness={4}
        style={{ color: '#34c38f' }}
      />
    </div>
  );
};

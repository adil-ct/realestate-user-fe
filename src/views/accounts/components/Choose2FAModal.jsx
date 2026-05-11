import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Static imports
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import styles from "components/Modal/styles";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";

const Choose2FAModal = ({
  open,
  handleClose,
  setTwoFAMthod,
  handleSubmit,
}) => {
  const classes = styles();
  const [disabled, setDisabled] = useState(true);
  const [select2FA, setSelect2FA] = useState();
  const paymentMethodsList = [
    {
      id: 1,
      name: "Authenticator App",
      status: false,
    },
    {
      id: 2,
      name: "Phone Number Verification",
      status: false,
    },
    {
      id: 3,
      name: "None",
      status: false,
    },
  ];
  const [paymentMethods, setPaymentMethods] = useState(paymentMethodsList);

  // Toggle the status of payment methods
  const toggleCheckedStatus = async (id) => {
    setSelect2FA(id);
    const modifiedList = await paymentMethods.map((item) => {
      if (item.id === id) {
        if (!item.status) {
          setDisabled(false);
          setTwoFAMthod(item);
        } else setDisabled(true);
        return {
          ...item,
          status: !item.status,
        };
      }
      return {
        ...item,
        status: false,
      };
    });
    setPaymentMethods(modifiedList);
  };

  useEffect(() => {
     if(!open){
      setPaymentMethods(paymentMethodsList)
     }
  },[open])

  const handle2FASelect = () => {
    handleSubmit(select2FA);
  };

  return (
    <Dialog open={open} onClose={handleClose} className={classes.dialog}>
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={() => {
          handleClose();
          setPaymentMethods(paymentMethodsList)
        }} />
      </MKBox>
      <DialogTitle
        display="flex"
        justify="center"
        className={classes.dialogTitle2}
        component="div"
      >
        <MKTypography
          variant="h3"
          align="center"
          className={classes.depositModalTitle}
        >
          Choose 2FA
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContent}
      >
        <MKBox display="flex" className={classes.depositSelectBox3}>
          <MKBox className={classes.selectBoxMainContainer}>
            {paymentMethods.map((item) => (
              <MKBox
                key={item.id}
                className={
                  item.status
                    ? classes.selectBoxContainerSelected
                    : classes.selectBoxContainer
                }
                onClick={() => toggleCheckedStatus(item.id)}
              >
                <MKBox display="flex" alignItems="center">
                  <MKTypography className={classes.choose2FAOption}>
                    {item.name}
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" alignItems="center" pl="5px">
                  {item.status && (
                    <CheckCircleIcon className={classes.checkedIcon}/>
                  )}
                </MKBox>
              </MKBox>
            ))}
          </MKBox>
        </MKBox>
        <MKBox display="flex" justifyContent="center">
          <MKButton
            variant="gradient"
            // color="primary"
            className={classes.depoitContinueBtn1}
            disabled={disabled}
            onClick={handle2FASelect}
          >
            <ButtonSpinner text="Continue" />
          </MKButton>
        </MKBox>
      </DialogContent>
    </Dialog>
  );
};

export default Choose2FAModal;

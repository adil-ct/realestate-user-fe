import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DialogContent, Grid } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Static imports
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { OvalSpinner } from "components/Loader/GenericLoaders";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import styles from "../Modal/styles";
import MKButton from "components/custom/MKButton";
import { NoDownload } from "constants/assets";

const DepositModal = ({
  handelMainDepositModalContinue,
  paymentMethods,
  setPaymentMethods,
  setPaymentmethod,
  loading,
  paymentMethod,
  disabledState,
  addMethod
}) => {
  const classes = styles();
  const [disabled, setDisabled] = useState(true);
  const { isLoading: pLoading } = useSelector((state) => state.user);
  // const { isLoading: authLoader } = useSelector((state) => state.auth);

  // Toggle the status of payment methods
  const toggleCheckedStatus = async (id) => {
    const modifiedList = await paymentMethods?.map((item) => {
      if (item?.id === id) {
        setPaymentmethod(item?.key);
        if (!item?.status) {
          setDisabled(false);
        } else setDisabled(true);
        return {
          ...item,
          status: !item?.status,
        };
      }
      return {
        ...item,
        status: false,
      };
    });
    setPaymentMethods(modifiedList);  
    const selectedItem =  modifiedList.find((item) => item.id === 1)
    if (id === 1 && selectedItem.status) {
      return addMethod();
    }
  };

  const continueToPaymentMethods = () => {
    switch (paymentMethod) {
      case "usdc":
        handelMainDepositModalContinue()
        break;
      case "card":
        handelMainDepositModalContinue()
        break;
      case "ach":
        handelMainDepositModalContinue()
        break;
      case "stripe-ach":
        handelMainDepositModalContinue()
        break;
      case "stripe-card":
        handelMainDepositModalContinue()
        break;

      default: return false;
    }
  }

  return (
    <>
        <DialogContent
          display="flex"
          justify="center"
          p={2}
          className={classes.dialogContent}
        ><>
            <MKBox display="flex" className={classes.depositSelectBox}>
              <MKBox className={classes.selectBoxMainContainer}>
               { paymentMethods?.length > 0 &&  <MKTypography
                  variant="h3"
                  align="left"
                  className={classes.dTitle3}
                >
                  Funding Method
                </MKTypography> }
                {paymentMethods?.length === 0 && (
                  <MKBox className={classes.noContentBox}>
                    {
                      pLoading?.paymentMethods ? <MKBox className={classes.noContentBox} height="30vh">
                        <OvalSpinner isLoading={true} />
                      </MKBox> : <>
                        <span className={classes.noContentText}>
                          We are working on something awesome. stay tuned!
                        </span>

                        <MKBox className={classes.iconContainer1}>
                          <img
                            src={NoDownload}
                            alt="No Data"
                            className={classes.noPaymentM}
                          />
                        </MKBox></>
                    }

                  </MKBox>
                )
                }
                {paymentMethods?.map((item) => (
                  <MKBox
                    key={item.id}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    className={
                      item.status
                        ? classes.selectBoxContainerSelectedNew
                        : item.disabled
                          ? classes.disabledBoxContainer
                          : classes.selectBoxContainer1New
                    }
                    onClick={() =>
                      item.disabled ? "" : toggleCheckedStatus(item.id)
                    }
                  >
                    <Grid container>
                      <Grid item xs={11} sm={11} md={11} lg={11}>
                        <MKBox className={classes.mainIconContainer}>
                          <MKBox display="flex" alignItems="center" >
                            <MKBox display="flex" alignItems="center">
                              <MKBox className={classes.iconContainer}>
                                <img
                                  src={item.Image}
                                  className={classes.depositImg2}
                                  alt={item.alt}
                                />
                              </MKBox>
                            </MKBox>
                            <MKBox className={classes.selectMethod}>
                              <MKTypography
                                variant="gradient"
                                fontWeight="bold"
                                fontSize="14px"
                                className={classes.methodTagline1}
                              >
                                {item.name}
                              </MKTypography>
                              <MKBox className={classes.selectMethod2}>
                                <MKTypography className={classes.walletAvaLmt}>
                                  {item.noLimit && !item?.disabled ? item.noLimit : ""}
                                </MKTypography>
                                {!item?.disabled ? (
                                  <MKTypography className={classes.walletAvaLmt}>
                                    {item.limit ? "Available limit " : ""}
                                  </MKTypography>
                                ) : (
                                  <MKTypography className={classes.walletAvaLmt}>
                                    {item?.disableMsg}
                                  </MKTypography>
                                )}
                                {!item?.disabled && (
                                  <MKTypography className={classes.walletAvaLmt2}>
                                    {item.limit}
                                  </MKTypography>
                                )}
                              </MKBox>
                            </MKBox>
                          </MKBox>
                        </MKBox>
                      </Grid>
                      <Grid item xs={1} sm={1} md={1} lg={1} display="flex">
                        {item.status && (
                          <MKBox display="flex" alignItems="center" pl="5px">
                            <CheckCircleIcon className={classes.checkedIcon}/>
                          </MKBox>
                        )}
                      </Grid>
                    </Grid>
                  </MKBox>
                ))}
              </MKBox>

            </MKBox>
            {paymentMethods?.length !== 0 && (
              <MKBox display="flex" justifyContent="center">
                <MKButton
                  variant="gradient"
                  className={classes.depoitContinueBtnNew}
                  // color="primary"
                  size="medium"
                  onClick={continueToPaymentMethods}
                  disabled={disabled || disabledState || loading}
                >
                  <ButtonSpinner isLoading={loading} text="Continue" />
                </MKButton>
              </MKBox>
            )}
          </>
        </DialogContent>
    </>
  );
};

export default DepositModal;

import React from "react";
import { DialogContent, Grid, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import _ from "lodash";

// Static imports
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { OvalSpinner } from "components/Loader/GenericLoaders";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import styles from "../Modal/styles";
import MKButton from "components/custom/MKButton";
import { AddButton } from "constants/assets";

const SelectBankOrCard = ({
  handelMainDepositModalContinue,
  paymentMethods,
  setPaymentMethods,
  loading,
  addMethod,
  defaultChecked,
  setDefaultChecked,
}) => {
  const classes = styles();

  // Toggle the status of payment methods
  const toggleCheckedStatus = async (id) => {
    const modifiedList = await paymentMethods?.map((item) => {
      if (item?.id === id) {
        setDefaultChecked(item?.data)
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
  };

  const continueToPaymentMethods = () => {
    handelMainDepositModalContinue()
  };

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
                  Choose a payment method
                </MKTypography> }
                {paymentMethods?.length === 0 && (
                  <MKBox className={classes.noContentBox1} mt={-1}>
                      <MKBox className={classes.noContentBox1} height="40vh">
                        <OvalSpinner isLoading={true} />
                      </MKBox>
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
                      defaultChecked && (defaultChecked?.id === item.id)
                        ? classes.selectBoxContainerSelected50
                        : item.disabled
                          ? classes.disabledBoxContainer
                          : classes.selectBoxContainer50
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
                        {defaultChecked && (defaultChecked?.id === item.id) && (
                          <MKBox display="flex" alignItems="center" pl="5px">
                           <CheckCircleIcon className={classes.checkedIcon}/>
                          </MKBox>
                        )}
                      </Grid>
                    </Grid>
                  </MKBox>
                ))}
              </MKBox>
              <MKBox display="flex" mb={3} justifyContent="flex-start" alignItems="center">
                  <img src={AddButton} onClick={() => {!loading && addMethod("stripe-ach")}}/>
                    <Typography className={classes.addPay} onClick={() => {!loading && addMethod("stripe-ach")}}>
                      Add a bank account
                    </Typography>
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
                  disabled={_.isEmpty(defaultChecked) || loading}
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

export default SelectBankOrCard;

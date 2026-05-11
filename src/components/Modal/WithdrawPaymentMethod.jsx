import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Static imports
import { getWalletBalance } from "store/actions";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import CurrencyFormat from "components/CurrencyFormat";
import CloseButton from "components/CloseButton";
import styles from "./styles";
import { NoDownload } from "constants/assets";

const DepositModal = ({
  open,
  handleClose,
  setDepositMethod,
  handelMainDepositModalContinue,
  paymentMethods,
  setPaymentMethods,
}) => {
  const classes = styles();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const { walletBalance, isLoading } = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(getWalletBalance());
  }, []);

  // Toggle the status of payment methods
  const toggleCheckedStatus = async (id) => {
    const modifiedList = await paymentMethods?.map((item) => {
      if (item.id === id) {
        if (!item.status) {
          setDisabled(false);
          setDepositMethod(item.key);
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

  return (
    <Dialog open={open} onClose={handleClose} className={classes.mainDialog3}>
      <MKBox display="flex" justifyContent="right" className={classes.mkBox}>
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      {paymentMethods?.length > 0 && (
        <DialogTitle
          display="flex"
          flexDirection="column"
          justify="center"
          className={classes.dialogTitle}
        >
          <MKTypography
            variant="h3"
            align="center"
            className={classes.depositModalTitle}
          >
            Select Withdrawal Method
          </MKTypography>

          <MKTypography
            variant="h3"
            align="center"
            className={classes.depositModalSubTitle1}
          >
            Withdraw USDC
          </MKTypography>
        </DialogTitle>
      )}
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={classes.dialogContent}
      >
        {paymentMethods?.length > 0 && (
          <MKBox>
            <MKTypography variant="body2" className={classes.depositSubititle1}>
              {isLoading.walletBalance ? (
                "$0"
              ) : (
                <CurrencyFormat
                  prefix={"$"}
                  value={walletBalance.availableBalance}
                  zeroAllowed
                />
              )}
            </MKTypography>
            <span className={classes.currentBalance}>Current balance</span>
          </MKBox>
        )}
        <MKBox display="flex" className={classes.depositSelectBox}>
          <MKBox className={classes.selectBoxMainContainer}>
            {paymentMethods?.length === 0 && (
              <MKBox className={classes.noContentBox}>
                <span className={classes.noContentText}>
                  We are working on something awesome. stay tuned!
                </span>

                <MKBox className={classes.iconContainer1}>
                  <img
                    src={NoDownload}
                    alt="No Data"
                    className={classes.noPaymentM}
                  />
                </MKBox>
              </MKBox>
            )}
            {paymentMethods?.map((item) => (
              <MKBox
                key={item.id}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                className={
                  item.status
                    ? classes.selectBoxContainerSelected1
                    : item.disabled
                      ? classes.disabledBoxContainer
                      : classes.selectBoxContainer1
                }
                onClick={() =>
                  item.disabled ? "" : toggleCheckedStatus(item.id)
                }
              >
                <MKBox display="flex" alignItems="center" width="100%" >
                  <MKTypography
                    variant="h1"
                    fontWeight="bold"
                    fontSize="14px"
                    className={classes.methodName}
                  >
                    {item.name}
                  </MKTypography>
                  <MKBox display="flex" alignItems="center">
                    {item?.pIcons?.map(item => (
                      <img
                        src={item}
                        key={item}
                        className={classes.depositImg1}
                        alt={item}
                      />))}
                  </MKBox>
                </MKBox>
                <Grid container mb={2}>
                  <Grid item xs={11} sm={11} md={11} lg={11}>
                    <MKBox className={classes.mainIconContainer}>
                      <MKBox display="flex" alignItems="center" >
                        <MKBox display="flex" alignItems="center">
                          <MKBox className={classes.iconContainer}>
                            <img
                              src={item.Image}
                              className={classes.depositImg}
                              alt={item.alt}
                            />
                          </MKBox>
                        </MKBox>
                        <MKBox className={classes.selectMethod}>
                          {/* Todo: To be used later if required */}
                          {/* <MKTypography
                          variant="gradient"
                          fontWeight="bold"
                          fontSize="14px"
                          className={classes.methodSubtitle}
                        >
                          {item.subtitle}
                        </MKTypography> */}
                          <MKTypography
                            variant="gradient"
                            fontWeight="bold"
                            fontSize="14px"
                            className={classes.methodTagline}
                          >
                            {item.tagline}
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
                {paymentMethods?.length > 0 && (
                  <MKBox display="flex" className={classes.knowMoreContainer}>
                    <MKTypography className={classes.walletAvaLmt}>
                      Click{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={classes.knowMoreLink}
                        href="https://help.mogul.ooo/hc/en-us/articles/9651604977309-How-to-Deposit-Withdraw-USDC"
                      >
                        here
                      </a>{" "}
                      to learn more about how to convert USDC
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
          </MKBox>
        </MKBox>
        {paymentMethods?.length !== 0 && (
          <MKBox display="flex" mt={2} justifyContent="center">
            <Button
              variant="outlined"
              className={classes.depoitContinueBtn}
              // color="primary"
              size="medium"
              onClick={handelMainDepositModalContinue}
              disabled={disabled}
            >
              Continue
            </Button>
          </MKBox>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;

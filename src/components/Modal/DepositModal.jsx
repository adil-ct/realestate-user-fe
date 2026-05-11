import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Static imports
import { getWalletBalance } from "store/actions";
import CurrencyFormat from "components/CurrencyFormat";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { OvalSpinner } from "components/Loader/GenericLoaders";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import styles from "./styles";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";
import { NoDownload } from "constants/assets";

const DepositModal = ({
  open,
  handleClose,
  handelMainDepositModalContinue,
  paymentMethods,
  setPaymentMethods,
  setPaymentmethod,
  loading,
  paymentMethod,
  noAction = false,
  // amount,
  // setMainDepositOptionModal,
  // setOptions,
  // connection
}) => {
  const classes = styles();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const { walletBalance, isLoading } = useSelector((state) => state.accounts);
  const { isLoading: pLoading } = useSelector((state) => state.user);
  const { isLoading: authLoader } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getWalletBalance());
  }, []);

  // Toggle the status of payment methods
  const toggleCheckedStatus = async (id) => {
    const modifiedList = await paymentMethods?.map((item) => {
      if (item?.id === id) {
        setPaymentmethod(item?.key);
        // if (item.key === "ach") {
        //   setOptions(item?.options)
        // }
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
        // setMainDepositOptionModal(true)
        // handleClose()
        break;

      default: return false;
    }
  }

  return (
    <>
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
            {noAction ? <MKTypography
              variant="h3"
              align="center"
              className={classes.depositModalTitle}
            >
              Connect Payment Method
            </MKTypography>
              : <MKTypography
                variant="h3"
                align="center"
                className={classes.depositModalTitle}
              >
                Connect Payment Method
              </MKTypography>}
            {/* {<Tooltip
              classes={{
                tooltip: classes.customTooltip,
                arrow: classes.customArrow,
              }}
              title="As a blockchain-based platform, USDC is required to be able to purchase real estate. USDC is a stablecoin that represents USD on blockchain."
            > */}
              <MKTypography
                variant="h3"
                align="center"
                className={classes.depositModalSubTitle}
              >
                As a blockchain based platform, the deposit will exchange to USDC (a representation of USD to invest on our platform)
              </MKTypography>
            {/* </Tooltip>} */}
          </DialogTitle>
        )}
        <DialogContent
          display="flex"
          justify="center"
          p={2}
          className={classes.dialogContent}
        ><>
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
                <span className={classes.currentBalance}>Wallet balance</span>
                {/* {NODE_ENV === "development" && <p className={classes.currentBalance}>Socket : {connection ? "Connected" : "Not-Connected"}</p>} */}
              </MKBox>
            )}
            {/* { noAction && <MKBox display="flex" alignItems="flex-start" flexDirection="column">
              <MKTypography
                variant="h3"
                className={classes.dTitle1}
              >
                Summary
              </MKTypography>
              <MKTypography
                variant="h3"
                className={classes.dTitle2}
              >
                Deposit <strong> 
                  <CurrencyFormat
                      prefix={"$"}
                      value={amount}
                      zeroAllowed
                    /></strong> to complete your investment
              </MKTypography>
            </MKBox>} */}
            <MKBox display="flex" className={classes.depositSelectBox}>
              <MKBox className={classes.selectBoxMainContainer}>
               { paymentMethods?.length > 0 &&  <MKTypography
                  variant="h3"
                  align="left"
                  className={classes.dTitle3}
                >
                  Payment Methods
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
                    <Grid container>
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
                  </MKBox>
                ))}
                {paymentMethods?.length > 0 && (
                  <MKBox display="flex" className={classes.knowMoreContainer}>
                    <MKTypography className={classes.walletAvaLmt}>
                      Click{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={classes.knowMoreLink}
                        href="https://help.mogul.ooo/hc/en-us/articles/8384731673885-Depositing-Funds-"
                      >
                        here
                      </a>{" "}
                      to learn more about the different funding methods
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            </MKBox>
            {paymentMethods?.length !== 0 && (
              <MKBox display="flex" justifyContent="center">
                <MKButton
                  variant="gradient"
                  className={classes.depoitContinueBtn}
                  // color="primary"
                  size="medium"
                  onClick={continueToPaymentMethods}
                  disabled={disabled || authLoader?.profile}
                >
                  <ButtonSpinner isLoading={loading} text="Submit" />
                </MKButton>
              </MKBox>
            )}
          </>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DepositModal;

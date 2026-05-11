import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CheckBox from "@mui/material/Checkbox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import _ from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Static imports
import { routePaths } from "routes/mainRoutes/routePaths";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import MKInput from "components/custom/MKInput";
import CurrencyFormat from "components/CurrencyFormat";
import CloseButton from "components/CloseButton";
import {
  commonSaga,
  getPropertyDetailsSaga,
  profileFetch,
  getListOfBankAccount,
  getWalletBalance,
} from "store/actions";
import styles from "./styles";
import Checkout from "./Checkout";
import toaster from "utils/toaster";
import { transferLink, isDwolla } from "constants/paymentEndpoints";
import MKStepper from "components/custom/MKStepper";

// import colors from "assets/theme/base/colors";

import { MOGUL_SUPPORT_EMAIL } from "constants/env";

const PropertyInvestModal = ({
  open,
  handleClose,
  pricePerToken,
  id,
  numberOfTokens: numberOfTokensDefault,
  tokensSold: tokensSoldDefault,
  handleInvestClick: verifyEmail,
  property,
  minInvestment,
}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [numberOfTokens, setNumberOfTokens] = useState(numberOfTokensDefault);
  const [tokensSold, setTokensSold] = useState(tokensSoldDefault);
  const {
    walletBalance,
    isLoading: balanceLoader,
    linkedBankAccounts,
  } = useSelector((state) => state.accounts);
  const { loader, isLoading: tokenFetchLoader } = useSelector(
    (state) => state.marketplace
  );
  const { isLoading, userData } = useSelector((state) => state.auth);
  const { plaidState } = useSelector((state) => state.common);
  const creditAvailable = walletBalance?.credits > 0;
  const tokensLeftForPurchase = Number(numberOfTokens) - Number(tokensSold);
  const [flow, setFlow] = useState(1);
  const [defaultChecked, setDefaultChecked] = useState(
    linkedBankAccounts?.defaultMethod
  );
  const [checked, setChecked] = useState(true);
  const [profilePending, setProfilePending] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tokenError, setTokenError] = useState(false);
  const [noOfToken, setNoOfToken] = useState(0);
  const [buttonText, setButtonText] = useState("Proceed to Checkout");
  const nfObject = new Intl.NumberFormat("en-US");
  const [checkout, setCheckout] = useState(false);
  const [investStarted, setInvestStarted] = useState(false);
  const [directCheckout, setDirectCheckout] = useState(false);
  const [breakupAmount, setBreakupAmount] = useState({
    credits: 0,
    totalFees: 0,
    processingFees: 0,
  });

  const [stepDetail, setStepDetails] = useState({
   totalSteps: [],
   activeStep: 0,
   showSteps: false
  })

  // const { grey } = colors;

  useEffect(() => {
    if (userData?.kycStatus === "approved") {
      dispatch(getListOfBankAccount({ page: 1, limit: 3 }));
    }

    dispatch(
      getPropertyDetailsSaga({
        tabSelected: "rationale",
        id,
        handleSuccess: (data) => {
          data?.numberOfTokens && setNumberOfTokens(data?.numberOfTokens);
          data?.tokensSold && setTokensSold(data?.tokensSold);
        },
      })
    );
  }, []);

  useEffect(() => {
    if (!_.isEqual(defaultChecked, linkedBankAccounts?.defaultMethod)) {
      setDefaultChecked(linkedBankAccounts?.defaultMethod);
    }
  }, [linkedBankAccounts?.defaultMethod]);

  useEffect(() => {
    if (walletBalance?.credits === 0) {
      checked && setChecked(false);
    }
  }, [walletBalance]);

  useEffect(() => {
    if (!defaultChecked) {
      setDefaultChecked(linkedBankAccounts?.paymentMethods?.[0]);
    }
  }, [linkedBankAccounts]);

  const calculateBreakUpAmount = (totalInvestAmount, checkedStatus) => {
    // User wants to spend credits in the purchase
    if (checkedStatus) {
      // Is credits amount is enough to make the purchase
      const creditsOnly = totalInvestAmount < walletBalance?.credits;
      // Credits sufficient to make the purchase
      if (creditsOnly) {
        setBreakupAmount({
          credits: walletBalance?.credits,
          processingFees: 0,
          totalFees: 0,
        });
      }
      // Credits not sufficient to make the purchase - so user will pay the rest amount
      else {
        setBreakupAmount({
          credits: walletBalance?.credits,
          processingFees: 0,
          totalFees: totalInvestAmount - walletBalance?.credits,
        });
      }
    }
    //  User doesn't wants to spend credits in the purchase
    else {
      setBreakupAmount({
        credits: 0,
        processingFees: 0,
        totalFees: totalInvestAmount,
      });
    }
    setButtonText("Proceed to Checkout");
    return;
  };

  // Add existing tokens which were there before the user hits on Add Token Button - +100, +200 , etc..,
  const addWithExistingTokensInput = (value) => {
    if (!isNaN(noOfToken)) {
      const totalInputTokens = value + Number(noOfToken);
      updateTotalAmount(totalInputTokens);
      return;
    } else return;
  };

  // Update total tokens and total amount on user click on add token button or user input token
  const updateTotalAmount = (inputTokens) => {
    const value = inputTokens;
    if (isNaN(value)) return;
    if (isNaN(pricePerToken)) return;

    // Total Amount corresponding to the number of tokens purchased
    const totalPurchaseAmount = value * pricePerToken;
    setNoOfToken(value);
    setTotalAmount(totalPurchaseAmount);

    if (value > tokensLeftForPurchase) {
      setTokenError(true);
    } else {
      setTokenError(false);
    }
  };

  const investNow = async () => {
    setInvestStarted(true);

    // Check if payment method is a Stripe card
    // Stripe cards have: id (pm_xxx), card object, or type === 'card'
    // Plaid banks have: _id (MongoDB ObjectId)
    const isStripeCard = defaultChecked?.card || defaultChecked?.type === 'card' || (defaultChecked?.id?.startsWith('pm_') && !defaultChecked?._id);

    console.log('=== investNow Debug ===');
    console.log('defaultChecked:', defaultChecked);
    console.log('isStripeCard:', isStripeCard);

    if (isStripeCard) {
      // Use Stripe payment intent for card payments
      const requestBody = {
        amount: parseFloat(breakupAmount?.totalFees),
        paymentMethodType: 'card',
        paymentMethodId: defaultChecked?.id,
        propertyId: id,
        tokens: Number(noOfToken),
        credits: breakupAmount?.credits,
        saved: true,
      };

      dispatch(commonSaga({
        endPoint: '/payment/paymentIntent',
        type: "post",
        stateObj: "plaidState",
        dataToPost: requestBody,
        baseEP: "PAYMENT",
        successHandler: () => {
          toaster.success("Payment successful! Your shares have been added to your portfolio.");
          handleClose();
          dispatch(getWalletBalance());
          setNoOfToken(0);
          setTotalAmount(0);
          setInvestStarted(false);
          setBreakupAmount({
            credits: 0, totalFees: 0, processingFees: 0,
          });
          navigate(routePaths.TRANSACTION_HISTORY_PATH);
          setStepDetails((prevState) =>({...prevState,showSteps: false}));
        },
        errorHandler: () => {
          setInvestStarted(false);
        }
      }));
    } else {
      // Use Plaid/Dwolla for bank transfers
      let res;
      if (!isDwolla) res = await axios.get("https://ipinfo.io/json");
      const requestBody = {
        ...(isDwolla
          ? { sourceFundingId: defaultChecked?.id }
          : {
              bank_id: defaultChecked?._id ? defaultChecked?._id : "",
              ip_address: res?.data?.ip ? res.data.ip : "",
            }),
        amount: parseFloat(breakupAmount?.totalFees)?.toFixed(2)?.toString(),
        propertyId: id,
        tokens: Number(noOfToken),
        credits: breakupAmount?.credits,
      };

      dispatch(commonSaga({
        endPoint: transferLink, type: "post", stateObj: "plaidState", dataToPost: requestBody, baseEP: "PAYMENT", successHandler: (data) => {
          if(data.status)
          {
            toaster.info("Processing payment. Your shares in the property will be in your account when the payment is successfully completed (for banks, this is typically 3-5 business days).");
            handleClose();
            dispatch(getWalletBalance());
            setNoOfToken(0);
            setTotalAmount(0);
            setInvestStarted(false);
            setBreakupAmount({
              credits: 0, totalFees: 0, processingFees: 0,
            })
            navigate(routePaths.TRANSACTION_HISTORY_PATH)
          }
          setStepDetails((prevState) =>({...prevState,showSteps: false}))
        }}));
    }
  }

  const validateTokensBeforeInvest = () => {
    console.log('=== validateTokensBeforeInvest called ===');
    console.log('userData.kycStatus:', userData?.kycStatus);
    console.log('noOfToken:', noOfToken);
    console.log('defaultChecked:', defaultChecked);
    
    if (userData?.kycStatus === "approved") {
      setProfilePending(false);
      console.log('KYC approved, fetching property details...');
      dispatch(
        getPropertyDetailsSaga({
          tabSelected: "rationale",
          id,
          handleSuccess: (data) => {
            console.log('Property details fetched:', data);
            console.log('Available tokens:', Number(data?.numberOfTokens) - Number(data?.tokensSold));
            if (
              Number(noOfToken) >
              Number(data?.numberOfTokens) - Number(data?.tokensSold)
            ) {
              console.log('Not enough tokens available!');
              setTokenError(true);
            } else {
              console.log('Tokens available, calling investNow()...');
              setTokenError(false);
              investNow();
            }
          },
        })
      );
    } else {
      console.log('KYC not approved:', userData?.kycStatus);
      toaster.info(
        "ID verification still in process (will be completed in <1 minute)"
      );
      setProfilePending(true);
    }
  };

  const selectCredits = (e) => {
    const finalCheck = e.target.checked;
    setChecked(finalCheck);
    // calculateBreakUpAmount(totalAmount, finalCheck )
  };

  const handleSubmit = () => {
    const response = verifyEmail();
    const hasPaymentMethod = linkedBankAccounts?.paymentMethods?.length > 0;

    // Direct Checkout without payment method selection
    if (walletBalance?.credits >= totalAmount && checked) {
      setDirectCheckout(true);
      setCheckout(true);
      setButtonText("Confirm Order");
    } else {
      if (response) {
        // Profile info is completed
        // Validate Payment method && KYC Status
        const kycSuccessful = userData?.kycStatus === "approved";

        if (hasPaymentMethod && !kycSuccessful) {
          setFlow(3);
        } else if (hasPaymentMethod && kycSuccessful) {
          setFlow(4);
        } else if (!hasPaymentMethod && !kycSuccessful) {
          setFlow(5);
        } else if (!hasPaymentMethod && kycSuccessful) {
          setFlow(6);
        }
        setOpenDeposit(true);
      } else {
        if (typeof response == "boolean" && !response && !checked) {
          // Profile info is pending
          // Validate Payment method

          if (hasPaymentMethod) {
            setFlow(2);
            setOpenDeposit(true);
          } else {
            setFlow(1);
            setOpenDeposit(true);
          }
        }
        setDefaultChecked(linkedBankAccounts?.defaultMethod);
        setDirectCheckout(false);
        setProfilePending(false);
      }
    }
  };

  const handleCheckout = (data) => {
    console.log('=== handleCheckout called ===');
    console.log('data received:', data);
    
    // CRITICAL: Set the selected payment method!
    if (data) {
      setDefaultChecked(data);
      console.log('defaultChecked SET to:', data);
    }
    
    calculateBreakUpAmount(totalAmount, checked, data);
    setTokenError(false);
    setCheckout(true);
    setButtonText("Confirm Order");
  };
  
  const handleSteps = (updatedState) => {
   setStepDetails((prevState) =>( {
    ...prevState,
    ...updatedState
   }))
  }

  return (
    <>
      <Dialog
        sx={{ display: openDeposit ? "none !important" : "block" }}
        open={open}
        onClose={handleClose}
        className={classes.investDialog}
      >
        <MKBox
          display="flex"
          justifyContent="space-between"
          top="30px"
          left={30}
          className={classes.mkBox}
        >
          { checkout && <Typography
            variant="button"
            className={classes.backButton2}
            display="flex"
            alignItems="center"
            color="white"
            onClick={() => {
              setCheckout(false);
              setButtonText("Proceed to Checkout")
              dispatch(profileFetch());
              !directCheckout && handleSubmit()
            }}
          >
            <ArrowBackIosIcon />
            Back
          </Typography> }
          <CloseButton
            className={classes.closeIconRight}
            onClick={() => {
              if (!checkout) {
                handleClose();
                setNoOfToken(0);
                setTotalAmount(0);
                setProfilePending(false);
              } else {
                if (loader.investProperty || plaidState?.isLoading) {
                  handleClose();
                  setNoOfToken(0);
                  setTotalAmount(0);
                  setProfilePending(false);
                  setCheckout(false);
                  setButtonText("Proceed to Checkout");
                  setProfilePending(false);
                  setInvestStarted(false);
                } else {
                  setCheckout(false);
                  setButtonText("Proceed to Checkout");
                  setProfilePending(false);
                  setInvestStarted(false);
                }
                setStepDetails((prevState) =>({...prevState,showSteps: false}))
              }
              dispatch(profileFetch());
            }}
          />
        </MKBox>
        <DialogContent
          display="flex"
          justify="center"
          p={2}
          className={classes.dialogInvestContent}
        >
          <>
            <MKBox className={classes.imageContainer}>
              <LazyLoadImage
                src={property?.mainImage?.url}
                className={
                  property?.mainImage?.url
                    ? classes.image
                    : classes.imagePlaceholder
                }
                alt={property?.tag}
                effect="blur"
              />
            </MKBox>
            {stepDetail.showSteps &&
            <MKBox className={classes.stepperBox} >
                 <MKStepper steps={stepDetail?.totalSteps} activeStep={stepDetail?.activeStep} showlabel={false}/>
             </MKBox>
             }
            <MKBox className={classes.investContent}>
              <MKBox className={classes.topSection}>
                <MKTypography
                  variant="h4"
                  fontWeight="bold"
                  fontSize="20px"
                  width="100%"
                  component="span"
                >
                  {property?.title || "Property Title"}
                </MKTypography>
                <MKTypography
                  variant="h4"
                  className={classes.locationEle}
                  component="span"
                >
                  {property?.city && property?.city + " , "} {property?.state}
                </MKTypography>
              </MKBox>
              {!checkout && (
                <Grid container className={classes.centerGrid}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className={classes?.dFlex1}
                  >
                    <Tooltip
                      title="The total amount of the offering inclusive of the purchase price, reserves, and closing costs net of debt"
                      placement="top-start"
                    >
                      <MKTypography
                        component="span"
                        className={classes.cardfooterLabel}
                      >
                        Offering Amount
                      </MKTypography>
                    </Tooltip>
                    <MKTypography
                      component="span"
                      className={classes.cardfooterValue}
                    >
                      <CurrencyFormat
                        prefix={"$"}
                        value={
                          property?.pricePerToken * property?.numberOfTokens
                        }
                      />
                    </MKTypography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className={classes?.dFlex1}
                  >
                    <Tooltip
                      title="The price of each share"
                      placement="top-start"
                    >
                      <MKTypography
                        component="span"
                        className={classes.cardfooterLabel}
                      >
                        Price Per Share
                      </MKTypography>
                    </Tooltip>
                    <MKTypography
                      component="span"
                      className={classes.cardfooterValue}
                    >
                      <CurrencyFormat
                        prefix={"$"}
                        value={property?.pricePerToken}
                      />
                    </MKTypography>
                  </Grid>
                </Grid>
              )}
              {!checkout && (
                <Grid item xs={12} md={12} mt={2}>
                  {Number(numberOfTokens) - Number(tokensSold) - noOfToken >=
                    750 && (
                    <MKTypography className={classes.PIamountLabel}>
                      Number of Shares
                    </MKTypography>
                  )}
                  <MKBox className={classes.tBoxContainer}>
                    {Number(numberOfTokens) - Number(tokensSold) - noOfToken >=
                      750 && (
                      <MKBox
                        className={classes.tBox}
                        onClick={() => addWithExistingTokensInput(750)}
                      >
                        <MKTypography
                          component="span"
                          className={classes.tokenVal}
                        >
                          + 750
                        </MKTypography>
                      </MKBox>
                    )}
                    {Number(numberOfTokens) - Number(tokensSold) - noOfToken >=
                      1500 && (
                      <MKBox>
                        <MKBox className={classes.specs1}>
                          <MKTypography
                            className={classes.tagsEle}
                            component="span"
                          >
                            Most Popular
                          </MKTypography>
                        </MKBox>
                        <MKBox
                          className={classes.tBox}
                          onClick={() => addWithExistingTokensInput(1500)}
                        >
                          <MKTypography
                            component="span"
                            className={classes.tokenVal}
                          >
                            + 1,500
                          </MKTypography>
                        </MKBox>
                      </MKBox>
                    )}
                    {Number(numberOfTokens) - Number(tokensSold) - noOfToken >=
                      3000 && (
                      <MKBox
                        className={classes.tBox}
                        onClick={() => addWithExistingTokensInput(3000)}
                      >
                        <MKTypography
                          component="span"
                          className={classes.tokenVal}
                        >
                          + 3,000
                        </MKTypography>
                      </MKBox>
                    )}
                  </MKBox>
                  <MKInput
                    fullWidth
                    id="amount"
                    name="amount"
                    placeholder="eg. 1,000"
                    value={noOfToken ? nfObject.format(noOfToken) : ""}
                    autoComplete="off"
                    onChange={(e) =>
                      updateTotalAmount(
                        Number(e?.target?.value?.replaceAll(",", ""))
                      )
                    }
                    inputProps={{ style: { textAlign: "right" } }}
                  />
                </Grid>
              )}
              {checkout && (
                <>
                  <Grid container justifyContent="space-between" mt={1}>
                    <Grid item>
                      <MKTypography fontSize="12px" fontWeight="regular">
                        Property Amount
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography
                        fontSize="12px"
                        fontWeight="regular"
                        textAlign="right"
                      >
                        {" "}
                        <CurrencyFormat
                          prefix={"$"}
                          value={totalAmount}
                          zeroAllowed
                        />
                      </MKTypography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="space-between"
                    mt={0.5}
                    className={classes.borderBottomLight}
                  >
                    <Grid item>
                      <MKTypography fontSize="12px" fontWeight="regular">
                      Invest Tech Fees
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography fontSize="12px" fontWeight="regular">
                        {" "}
                        <CurrencyFormat
                          prefix={"$"}
                          value={property?.mogulFee || 0}
                          zeroAllowed
                        />
                      </MKTypography>
                    </Grid>
                  </Grid>
                  {!directCheckout && (
                    <Grid container justifyContent="space-between" mt={0.5}>
                      <Grid item>
                        <MKTypography fontSize="12px" fontWeight="bold">
                          Total before processing
                        </MKTypography>
                      </Grid>
                      <Grid item>
                        <MKTypography fontSize="12px" fontWeight="regular">
                          <strong>
                            <CurrencyFormat
                              prefix={"$"}
                              value={
                                totalAmount + (Number(property?.mogulFee) || 0)
                              }
                              zeroAllowed
                            />
                          </strong>
                        </MKTypography>
                      </Grid>
                    </Grid>
                  )}
                  {!directCheckout && (
                    <Grid container justifyContent="space-between" mt={0.5}>
                      <Grid item>
                        <MKTypography fontSize="12px">
                          Estimated processing
                        </MKTypography>
                      </Grid>
                      <Grid item>
                        <MKTypography fontSize="12px" fontWeight="regular">
                          <CurrencyFormat
                            prefix={"$"}
                            value={property?.processingFee}
                            zeroAllowed
                          />
                        </MKTypography>
                      </Grid>
                    </Grid>
                  )}
                  {breakupAmount?.credits > 0 && (
                    <Grid container justifyContent="space-between" mt={0.5}>
                      <Grid item>
                        <MKTypography fontSize="12px">
                          Order credits:
                        </MKTypography>
                      </Grid>
                      <Grid item>
                        <MKTypography fontSize="12px" fontWeight="regular">
                          -{" "}
                          <CurrencyFormat
                            prefix={"$"}
                            value={breakupAmount?.credits}
                            zeroAllowed
                          />
                        </MKTypography>
                      </Grid>
                    </Grid>
                  )}
                  {!directCheckout && (
                    <Grid
                      container
                      justifyContent="space-between"
                      mt={0.5}
                      className={classes.borderBottomLight}
                    >
                      <Grid item>
                        <MKTypography fontSize="12px">
                          Payment Method
                        </MKTypography>
                      </Grid>
                      <Grid item>
                        <MKTypography fontSize="12px" fontWeight="regular">
                          {" "}
                          {isDwolla
                            ? `${defaultChecked?.bankName} ************`
                            : defaultChecked?.card
                              ? `${defaultChecked?.card?.brand?.toUpperCase()} ****${defaultChecked?.card?.last4}`
                              : `${defaultChecked?.name || 'Card'} ****${defaultChecked?.mask || defaultChecked?.last4 || ''}`}
                        </MKTypography>
                      </Grid>
                    </Grid>
                  )}
                  <Grid container justifyContent="space-between" mt={1}>
                    <Grid item>
                      <MKTypography
                        // color="#2D355A"
                        fontSize="20px"
                        className={classes.pColor}
                        fontWeight="medium"
                      >
                        Order Total
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography
                        fontSize="20px"
                        fontWeight="regular"
                        className={classes.pColor}
                      >
                        <strong>
                          <CurrencyFormat
                            prefix={"$"}
                            value={
                              breakupAmount?.totalFees +
                              (Number(property?.mogulFee) || 0) +
                              (Number(property?.processingFee) || 0)
                            }
                            zeroAllowed
                          />
                        </strong>
                      </MKTypography>
                    </Grid>
                  </Grid>
                </>
              )}
              {creditAvailable && !checkout && (
                <Grid
                  item
                  xs={12}
                  alignItems="center"
                  ml={-1}
                  padding="10px 0px 0px"
                  className={classes.sectionTerms}
                >
                  <CheckBox
                    checked={checked}
                    id="tc"
                    label="tc"
                    name="tc"
                    className={`${classes.checkBox}`}
                    onChange={(e) => selectCredits(e)}
                  />
                  <MKBox sx={{ lineHeight: "15px", marginTop: "5px" }}>
                    <MKTypography
                      fontWeight="regular"
                      name="tc"
                      className={`${classes.termsText} ${classes.link1}`}
                    >
                      Pay Using Credits
                    </MKTypography>
                    <MKBox display="flex">
                      <MKTypography
                        display="inline"
                        className={`${classes.termsText} text`}
                      >
                        {" "}
                        Available Credits:{" "}
                        <CurrencyFormat
                          prefix={"$"}
                          value={walletBalance?.credits}
                        />
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
              )}
              {tokenError && (
                <MKTypography
                  className={classes.PIblncLabel}
                  fontSize="13px"
                  fontWeight="regular"
                >
                  <MKTypography
                    fontSize="13px"
                    component="span"
                    className={classes.textPrimary}
                  >
                    Only{" "}
                    <CurrencyFormat
                      prefix={" "}
                      value={numberOfTokens - tokensSold}
                    />{" "}
                    shares remaining in this property
                  </MKTypography>
                </MKTypography>
              )}
              {Number(noOfToken) < Number(minInvestment) && noOfToken > 0 && (
                <MKTypography
                  className={classes.PIblncLabel}
                  fontSize="13px"
                  fontWeight="regular"
                >
                  <MKTypography
                    fontSize="13px"
                    component="span"
                    className={classes.textPrimary}
                  >
                    Minimum number of tokens to invest are {minInvestment}.
                    Please enter the number of tokens greater than the minimum
                    no. of tokens{" "}
                  </MKTypography>
                </MKTypography>
              )}
              <MKBox display="flex" justifyContent="center" mt={2}>
                <MKButton
                  variant="contained"
                  className={classes.depoitContinueBtn2}
                  id="referralUserinvest-btn"
                  // color="primary"
                  size="medium"
                  onClick={() => {
                    console.log('=== Button Clicked ===');
                    console.log('checkout:', checkout);
                    console.log('buttonText:', buttonText);
                    console.log('noOfToken:', noOfToken);
                    console.log('defaultChecked:', defaultChecked);
                    console.log('minInvestment:', minInvestment);
                    console.log('disabled conditions:', {
                      'noOfToken <= 0': noOfToken <= 0,
                      'loader.investProperty && investStarted': loader.investProperty && investStarted,
                      'tokenError': tokenError,
                      'isLoading?.profile': isLoading?.profile,
                      'balanceLoader?.walletBalance': balanceLoader?.walletBalance,
                      'tokenFetchLoader': tokenFetchLoader,
                      'profilePending': profilePending,
                      'plaidState?.isLoading && investStarted': plaidState?.isLoading && investStarted,
                      'balanceLoader?.getBankAccountList': balanceLoader?.getBankAccountList,
                      'checkout && _.isEmpty(defaultChecked)': checkout && _.isEmpty(defaultChecked),
                      'Number(noOfToken) < Number(minInvestment)': Number(noOfToken) < Number(minInvestment),
                    });
                    if (checkout) {
                      console.log('Calling validateTokensBeforeInvest...');
                      validateTokensBeforeInvest();
                    } else {
                      console.log('Calling handleSubmit...');
                      handleSubmit();
                    }
                  }}
                  disabled={
                    noOfToken <= 0 ||
                    (loader.investProperty && investStarted) ||
                    tokenError ||
                    isLoading?.profile ||
                    balanceLoader?.walletBalance ||
                    tokenFetchLoader ||
                    profilePending ||
                    (plaidState?.isLoading && investStarted) ||
                    balanceLoader?.getBankAccountList ||
                    (checkout && _.isEmpty(defaultChecked)) ||
                    Number(noOfToken) < Number(minInvestment)
                  }
                >
                  <ButtonSpinner
                    id="invest-btn"
                    text={buttonText}
                    classes={classes.navigateLogin}
                    isLoading={
                      (loader.investProperty && investStarted) ||
                      balanceLoader?.walletBalance ||
                      (plaidState?.isLoading && investStarted) ||
                      tokenFetchLoader
                    }
                  />
                </MKButton>
              </MKBox>
              {checkout ? (
                <MKBox display="flex" justifyContent="center" mt={2}>
                  <MKTypography
                    component="span"
                    // color={grey[500]}
                    className={classes.paymentAuthDisclaimer}
                  >
                    Please note: You are authorizing a one-time payment; if a
                    problem arises, contact {MOGUL_SUPPORT_EMAIL}.
                  </MKTypography>
                </MKBox>
              ) : (
                <MKBox
                  className={classes.depoitContinueBtn2MarginPadding}
                ></MKBox>
              )}
            </MKBox>
          </>
        </DialogContent>
      </Dialog>
     {/* <DepositScreens amount={checked ? Math.ceil(Number(totalAmount) - (walletBalance?.availableBalance + walletBalance?.credits)) : Math.ceil(Number(totalAmount) - walletBalance?.availableBalance)} noAction handleAddFundsSuccess={handleAddFundsSuccess} open={openDeposit} setOpen={setOpenDeposit} /> */}
     {openDeposit && <Checkout propertyId={id} open={openDeposit} defaultChecked={defaultChecked} setDefaultChecked={setDefaultChecked} setOpen={setOpenDeposit} currentFlow={flow} handleCheckout={handleCheckout} back handleSteps={handleSteps}/>}
    </>
  );
};

export default PropertyInvestModal;

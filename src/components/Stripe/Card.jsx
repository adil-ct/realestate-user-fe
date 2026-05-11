import { React, useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { loadStripe } from '@stripe/stripe-js';

// Static imports
import { STRIPE_KEY } from "constants/env";
import toaster from "utils/toaster";
import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { AddCardDetailsModuls } from "components/Modal/WalletModals/styles/styles";
import { commonSaga, getListOfCards, getListOfBankAccount } from "store/actions";

const AddCardDetailModuls = ({ handleSuccess, reset = () => {}, type="", setDefaultChecked }) => {
  const classes = AddCardDetailsModuls();
  const [stripe, setStripe] = useState(null);
  const [cardElement, setCardElement] = useState(null);
  const dispatch = useDispatch();
  const isMountedRef = useRef(true); // Track if component is mounted
  
  // Load Stripe.js (client-side SDK) and create Card Element
  useEffect(() => {
    console.log('========================================');
    console.log('STRIPE KEY BEING USED:', STRIPE_KEY);
    console.log('First 20 chars:', STRIPE_KEY?.substring(0, 20));
    console.log('Last 10 chars:', STRIPE_KEY?.substring(STRIPE_KEY.length - 10));
    console.log('========================================');
    
    loadStripe(STRIPE_KEY).then(stripeInstance => {
      if (!isMountedRef.current) return; // Don't update if unmounted
      console.log('Stripe instance loaded successfully!');
      setStripe(stripeInstance);
      // Create Elements instance
      const elements = stripeInstance.elements();
      // Create and mount Card Element with wallet disabled
      const card = elements.create('card', {
        style: {
          base: {
            fontSize: '16px',
            color: '#32325d',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
        },
        // Disable wallet features to prevent wallet-config API call
        hidePostalCode: false,
      });
      console.log('Card element created, mounting...');
      card.mount('#card-element');
      console.log('Card element mounted successfully!');
      setCardElement(card);
    }).catch(error => {
      console.error('Error loading Stripe:', error);
    });
    
    // Cleanup function
    return () => {
      isMountedRef.current = false;
      if (cardElement) {
        cardElement.unmount();
      }
    };
  }, []);
  
  const { stripeState, bankCards } = useSelector((state) => state.common)
  const { userData } = useSelector((state) => (state?.auth));
  const [disabled, setDisabled] = useState(false);

  const initialValues = {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    tc: true,
    fullName: (userData?.firstName &&  userData?.lastName) ?  `${userData?.firstName} ${userData?.lastName}` : "",
    default: true,
  };

  const generateTokenAndCreateCard = async(values) => {
    try{
      if (!stripe || !cardElement) {
        toaster.error('Stripe is not loaded yet. Please try again.');
        return;
      }
      
      // Create token from Card Element
      const { token, error } = await stripe.createToken(cardElement, {
        name: values?.fullName,
      });
      
      if (error) {
        toaster.error(error.message);
        return;
      }
      const requestBody = {
        sourceToken: token?.id, saveCard: values?.tc
      }
      dispatch(commonSaga({
        endPoint: `/payment/payment-method/card`, type: "post", stateObj: "stripeState", dataToPost: requestBody, baseEP: "PAYMENT", showAlert: true, successHandler: (cardRes) => {
          if(!values?.tc && type !== "account"){
            setDefaultChecked(cardRes);
            handleClick(values?.tc, cardRes)
          }
          if(values.default)
          {
            dispatch(commonSaga({
              endPoint: `/payment/payment-method/default`, type: "post", stateObj: "stripeState", dataToPost: { paymentMethodId : cardRes?.id }, baseEP: "PAYMENT", showAlert: true, successHandler: () => {
                if(type === "account") {
                  dispatch(getListOfCards({ page: 1, limit: 3 }))
                  dispatch(getListOfBankAccount({ page: 1, limit: 3 }))
                  handleClick(values?.tc, cardRes);
                }
                else{
                  dispatch(commonSaga({
                    endPoint:  `/payment/payment-method/listMethods`, type: "get", stateObj: "bankCards", baseEP: "PAYMENT", successHandler: () => {
                      handleClick(values?.tc, cardRes);
                    }
                  }));
                }
              }}));
          }
          else{
            if(type === "account"){
              dispatch(getListOfCards({ page: 1, limit: 3 }))
              dispatch(getListOfBankAccount({ page: 1, limit: 3 }))
              handleClick(values?.tc, cardRes);
            }
            else{
              values?.tc && dispatch(commonSaga({
                endPoint:  `/payment/payment-method/listMethods`, type: "get", stateObj: "bankCards", baseEP: "PAYMENT", successHandler: (data) => {
                  const cardsList = data?.paymentMethods?.filter((item) => item.type === "card");
                  if(bankCards?.dataObj?.totalCount === 0)
                  {
                    setDefaultChecked(cardsList && cardsList[0])
                    handleClick(values?.tc, cardsList && cardsList[0]);
                  }
                  else
                  handleClick(values?.tc, cardRes);
                }
            }));
            }
          }
        }
      }));
    }
    catch(error){
      toaster.error(error?.message)
    }
    // moveToBillingDetails(card, formik)
  }

  const formik = useFormik({
    initialValues,
    // No validation schema needed - Stripe Element handles card validation
    onSubmit: (values) => {
      generateTokenAndCreateCard(values)
    },
  });

  const handleClick = (tc, data) => {
    // Call parent success handler first
    handleSuccess(tc, data);
    
    // Only reset form if component is still mounted
    if (isMountedRef.current) {
      formik?.resetForm();
    }
  };

  return (
    <div>
        <MKBox>
          <MKBox p={3} display="flex" justifyContent="center">
            <MKBox
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik?.handleSubmit}
            >
            { type !== "account" && <MKTypography onClick={reset} className={classes.termsText1}>Select different payment method</MKTypography> }
              
              {/* Stripe Card Element - replaces individual card input fields */}
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <MKBox mb={2}>
                  <MKTypography variant="caption" fontWeight="regular">
                    Card Details *
                  </MKTypography>
                  <MKBox 
                    id="card-element" 
                    sx={{ 
                      padding: '12px',
                      border: '1px solid #d2d6da',
                      borderRadius: '0.5rem',
                      marginTop: '8px'
                    }}
                  />
                </MKBox>
              </Grid>
              <MKBox mt={1}>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                  <MKInput
                    fullWidth
                    label="Full Name "
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder=""
                    value={formik?.values.fullName}
                    onChange={formik?.handleChange}
                    error={
                      formik?.touched.fullName &&
                      Boolean(formik?.errors.fullName)
                    }
                    helperText={
                      formik?.touched.fullName && formik?.errors.fullName
                    }
                  />
                </Grid>
              </MKBox>
              { type !== "account" && <Grid
                    item
                    xs={12}
                    alignItems="center"
                    // ml={-1}
                    mt={-2}
                    padding="24px"
                    className={classes.sectionTerms}
                  >
                    <Checkbox
                      checked={formik.values.tc}
                      id="tc"
                      label="tc"
                      name="tc"
                      className={
                        formik.touched.tc && formik.errors.tc
                          ? `${classes.checkBox} error_checkbox`
                          : `${classes.checkBox}`
                      }
                      onChange={(e) => {
                        formik.handleChange(e);
                        if(!e.target.checked){
                          formik.setFieldValue("default", false)
                          setDisabled(true);
                        }
                        else{
                          setDisabled(false)
                        }
                      }}
                    />
                    <MKBox sx={{ lineHeight: "15px", marginTop: "5px" }}>
                      <MKTypography
                        display="inline"
                        fontWeight="regular"
                        name="tc"
                        className={
                          formik.touched.tc && formik.errors.tc
                            ? `${classes.termsText} error`
                            : `${classes.termsText} text`
                        }
                        onClick={() =>
                          formik.setFieldValue("tc", !formik.values.tc)
                        }
                      >
                         I agree to save my debit/credit card information for future use.
                      </MKTypography>
                    </MKBox>
                  </Grid> }
                  <Grid
                    item
                    xs={12}
                    alignItems="center"
                    // ml={-1}
                    mt={-2}
                    padding="24px"
                    className={classes.sectionTerms}
                  >
                    <Checkbox
                      checked={formik.values.default}
                      id="default"
                      label="default"
                      name="default"
                      disabled={disabled}
                      className={
                        formik.touched.default && formik.errors.default
                          ? `${classes.checkBox} error_checkbox`
                          : `${classes.checkBox}`
                      }
                      onChange={formik.handleChange}
                    />
                    <MKBox sx={{ lineHeight: "15px", marginTop: "5px" }}>
                      <MKTypography
                        display="inline"
                        fontWeight="regular"
                        name="default"
                        className={
                          formik.touched.default && formik.errors.default
                            ? `${classes.termsText} error`
                            : `${classes.termsText} text`
                        }
                        onClick={() =>
                          formik.setFieldValue("default", !formik.values.default)
                        }
                      >
                         Set this card as default payment.
                      </MKTypography>
                    </MKBox>
                  </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                my={3}
              >
                <Grid
                  item
                  xs={12}
                  lg={12}
                  sm={12}
                  display="flex"
                  justifyContent="space-evenly"
                >
                  <MKButton
                    type="button"
                    variant="outlined"
                    // color="primary"
                    className={`${classes.button50Width} ${classes.marginRight20}`}
                    onClick={handleClick}
                  >
                    <ButtonSpinner text="Cancel" />
                  </MKButton>
                  <MKButton
                    type="submit"
                    variant="gradient"
                    // color="primary"
                    className={classes.button50Width}
                  >
                    <ButtonSpinner text="Continue" isLoading={stripeState?.isLoading || bankCards?.isLoading} />
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
    </div>
  );
};

export default AddCardDetailModuls;

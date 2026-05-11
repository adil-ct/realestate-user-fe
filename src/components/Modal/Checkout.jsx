import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dialog, DialogContent, Typography, DialogTitle } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LockIcon from '@mui/icons-material/Lock';
import { usePlaidLink } from "react-plaid-link";
import _ from "lodash"

// Static imports
import styles from "./styles";
import MKBox from "components/custom/MKBox";
import MKStepper from "components/custom/MKStepper";
import CloseButton from "components/CloseButton";
// import ProfileForm from "views/profile/profileForm";
import { paymentMethodsList } from "_mocks/newPaymentMethods";
import bankCards from "_mocks/selectBanks";
import SelectPayment from "../Stripe/SelectPayment";
import IdVerify from "components/Stripe/IdVerify";
import toaster from "utils/toaster";
import { profileFetch, getListOfBankAccount, commonSaga, getPlaidTokenSaga } from "store/actions";
import SelectBankOrCard from "components/Stripe/SelectBank";
import SetDefault from "components/Stripe/SetDefault";
import { addBankLink, isDwolla } from "constants/paymentEndpoints";
import AddAddress from "components/CheckoutSteps/AddAddress";
import UserDOB from "components/CheckoutSteps/UserDOB";
import UserSSN from "components/CheckoutSteps/UserSSN";
import NonUsAddress from "components/CheckoutSteps/NonUsAddress";
import AddCardDetailModuls from "components/Stripe/Card";

const CheckoutModal = ({
  open,
  back,
  currentFlow,
  setOpen,
  handleCheckout,
  defaultChecked,
  setDefaultChecked,
  handleSteps
}) => {
    const classes = styles();
    const dispatch = useDispatch();

    const { bankCards: getDefault, plaidState } = useSelector((state) => state.common);
    const { isLoading } = useSelector((state) => state.accounts);
    const { userData } = useSelector((state) => state.auth);

    const [activeStep, setActiveStep] = useState(0);
    const bankCardsData = bankCards()
    const [paymentMethods, setPaymentMethods] = useState(paymentMethodsList || []);
    const [bankCardsList, setBankCardsList] = useState(bankCardsData || []);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [addMethod, setAddMethod] = useState(false);
    const [addMethodWithExisting, setAddMethodWithExisting] = useState(false);
    const [showCardForm, setShowCardForm] = useState(false);
    const [fetchToken, setFetchToken] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [addBankRes, setAddBankRes] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [nextSteps, setNextSteps] = useState([]);
  
    const config = {
        token: fetchToken,
        onSuccess: (public_token, metadata) => {
          // send public_token to server
          dispatch(commonSaga({
            endPoint: addBankLink , type: "post", stateObj: "plaidState", dataToPost: { public_token: public_token, ...(isDwolla && {account_id: metadata?.account_id, subtype: metadata?.account?.subtype}) }, baseEP: "PAYMENT", showAlert: false, successHandler: (bankDetails) => {
                (currentFlow === 1 || currentFlow === 5) && dispatch(profileFetch());
              dispatch(getListOfBankAccount({ page: 1, limit: 3, handleSuccess: (res) => {
              // addMethodWithExisting = false  ->  Means user is adding bank for first time
              // If adding bank for first time store the bank data from add bank api response and continue to review order page - where we will display the saved bank details in review order
              // Else we will not store the bank data and let user select the bank he want to continue with - the newly added one or from the previous listed one
                if(!addMethodWithExisting){                  
                    setDefaultChecked(res)
                    getNextStep()
                }
              } }));
            setAddMethod(false);
            setAddMethodWithExisting(false);
            // setAddMethod(true);
            if (currentFlow === 2 || currentFlow === 3 || currentFlow === 4) {       
                setDefaultChecked(bankDetails)                
                getNextStep(bankDetails)
              }
            }
          }));
        },
        onExit: (error) => {
          // Using the console for debugging the error if any errors occur
          // console.log("data", error, metadata);
          setFetchToken("");
          toaster?.error(error);
        },
      };
    
      const { open: openPlaid, ready } = usePlaidLink(config);
    
      useEffect(() => {
        if (ready && fetchToken.length) {
          openPlaid();
        }
      }, [fetchToken, ready, openPlaid]);
    
      // Get plaid token link from api
    const getPlaidTokenHandler = async (data) => {
        // Adding a new bank account with existing bank accounts
        // addMethodWithExisting = true 
        // else if we are adding bank for first time 
        // addMethodWithExisting = false
        
        data && setAddMethodWithExisting(true);
        await dispatch(getPlaidTokenSaga({ handleSuccess: setFetchToken }));
    };

    // Not in use for now
   const setDefaultPayment = () => {
        dispatch(commonSaga({
            endPoint: `/payment/plaid/account/default`, type: "post", stateObj: "plaidState", dataToPost: { bank_id: !addMethodWithExisting ? defaultChecked?._id : addBankRes?._id }, baseEP: "PAYMENT", showAlert: true, successHandler: () => {
            dispatch(getListOfBankAccount({ page: 1, limit: 3 }));
            !addMethodWithExisting && getNextStep()
            setAddMethod(false);
            setAddMethodWithExisting(false);
            }
        }));
   }
    

    useEffect(() => {
        return () => {
            setPaymentMethods(paymentMethodsList);
            setBankCardsList(bankCardsData)
        }
    }, [])

    useEffect(() => {
        if(!_.isEqual(bankCardsData, bankCardsList))
            setBankCardsList(bankCardsData)
    }, [bankCardsData])
  
    const getSteps = useMemo(() => {
    // Allow all users regardless of country
    if (!userData?.address1 && !nextSteps.includes("Investor Info"))
      nextSteps.push("Investor Info");
    
    // Remove country restriction - allow all users to proceed
    if (!userData?.dob && !nextSteps.includes("DOB")) nextSteps.push("DOB");
    if (!userData?.ssn && !nextSteps.includes("SSN")) nextSteps.push("SSN");
    if ((currentFlow === 1 || currentFlow === 5) && !nextSteps.includes("Review Order")) 
      nextSteps.push("Payment Method", "Review Order");
    else if((currentFlow === 2 || currentFlow === 3) && !nextSteps.includes("Review Order"))
      nextSteps.push("Select Method", "Review Order");
  
    switch (currentFlow) {
      case 1:
      case 2:
      case 3:
      case 5:
        return [...nextSteps];
      case 4:
        return ["Select Method", "Review Order"];
      case 6:
        return ["Payment Method", "Review Order"];
      default:
        return [];
    }
  },[currentFlow, userData]);
  
  console.log(currentFlow, getSteps)
    // const getSteps = () => {
    //     switch(currentFlow){ 
    //         case 1: return ["Investor Info", "Payment Method"]  // Hasn't verified email and !hasPaymentMethod
    //         case 2: return ["Investor Info", "Select Method"]   // Hasn't verified email and  hasPaymentMethod
    //         case 3: return ["Investor Info", "Select Method"]   // hasPaymentMethod && !kycSuccessful
    //         case 4: return ["Select Method", "Review Order"]    // hasPaymentMethod &&  kycSuccessful
    //         case 5: return ["Investor Info", "Payment Method"]  //!hasPaymentMethod && !kycSuccessful 
    //         case 6: return ["Payment Method", "Review Order"]   //!hasPaymentMethod &&  kycSuccessful

    //         default: return [];
    //     }
    // }

    const successHandler = () => {
        // setActiveStep(activeStep + 1);
        getNextStep()
    }

    const idVerificationSuccess = () => {
        dispatch(profileFetch());
        toaster.success(
          "ID verification completed!"
        );
        getNextStep()
    }

    const handelMainDepositModalContinue = () => {
        switch(paymentMethod){
            case "stripe-ach": {
                getPlaidTokenHandler()
                break;
            }
            case "stripe-card": {
                // Show Stripe card input form
                setShowCardForm(true);
                break;
            }
            default: return false;
        }
    }  

    const getNextStep = (data) => {
      const totalSteps = getSteps?.length - 1;
      if (activeStep < totalSteps) {
        if ((currentFlow === 4 || currentFlow === 6) && activeStep === 0) {
          setOpen(false);
          setActiveStep(0);
          handleSteps({
            totalSteps: getSteps,
            activeStep: activeStep + 1,
            showSteps: true,
          });
          handleCheckout(data ? data : getDefault?.dataObj?.defaultMethod);
        } else if (
          (currentFlow === 1 ||
            currentFlow === 2 ||
            currentFlow === 3 ||
            currentFlow === 5) &&
          activeStep === getSteps.length - 2
        ) {
          setOpen(false);
          setActiveStep(0);
          handleSteps({
            totalSteps: getSteps,
            activeStep: activeStep + 1,
            showSteps: true,
          });
          handleCheckout(data ? data : getDefault?.dataObj?.defaultMethod);
        } else setActiveStep(activeStep + 1);
      } else {
        setOpen(false);
        setActiveStep(0);
        handleSteps({
          totalSteps: getSteps,
          activeStep: activeStep,
          showSteps: true,
        });
        handleCheckout(data ? data : getDefault?.dataObj?.defaultMethod);
      }
    };
 
    return (
        <>
        <Dialog open={open} className={classes.mainDialogCheckout} pb={0}>
            <DialogContent
            display="flex"
            justify="center"
            p={0}
            mt={2}
            className={classes.dialogContentCheckout}
            >
                <MKBox
                    display="flex"
                    justifyContent="space-between"
                    mr={2}
                >
                    {back && <Typography
                        variant="button"
                        className={classes.backButton}
                        display="flex"
                        alignItems="center"
                        marginLeft="16px"
                        onClick={() => {
                           if (activeStep > 0) setActiveStep(activeStep - 1);
                           handleSteps({showSteps: false})
                        }}
                    >  
                    {(activeStep > 0) && <>
                        <ArrowBackIosIcon />
                        Back</>}
                    </Typography>}
                    <CloseButton
                        className={classes.closeIcon1}
                        onClick={() =>{ setOpen(false)  
                           handleSteps({showSteps: false})}
                          }
                    />
                </MKBox>
                <MKBox>
                    <DialogTitle
                        display="flex"
                        justifyContent="center"
                        mt={-3}
                        className={classes.title}
                        component="div"
                    >
                        <MKBox className={classes.titleBox}>
                            <Typography
                                variant="h3"
                                width={400}
                                className={classes.mainTitle}
                            >
                                Checkout
                                <LockIcon className={classes.checkoutLockIcon}/>
                            </Typography>
                        </MKBox>
                    </DialogTitle>
                    <MKBox className={classes.checkoutContainer}>
                       { getSteps?.length > 1 &&  <MKBox className={classes.stepperBox} >
                            <MKStepper steps={getSteps} activeStep={activeStep} showlabel={false}/>
                            </MKBox>
                        }
                        <MKBox mt={2}>
                            {getSteps?.map((item, index) => {
                                switch(item){
                                    case "Investor Info": {
                                        if (index === activeStep)
                                        return <AddAddress key={index} handler={successHandler}/>
                                        else return;
                                    }
                                    case "Support": {
                                      if (index === activeStep)
                                        return (
                                          <NonUsAddress key={index} />
                                        );
                                      else return;
                                    }    
                                    case "DOB": {
                                        if (index === activeStep)
                                        return <UserDOB key={index} handler={successHandler}/>
                                        else return;
                                    }
                                    case "SSN": {
                                        if (index === activeStep)
                                        return <UserSSN key={index} handler={successHandler}/>
                                        else return;
                                    }                                     
                                    case "Payment Method": {
                                        if (index === activeStep) {
                                            if (showCardForm) {
                                                // Show Stripe card input form
                                                return <AddCardDetailModuls 
                                                    key={index} 
                                                    handleSuccess={(tc, cardData) => {
                                                        setDefaultChecked(cardData);
                                                        setShowCardForm(false);
                                                        getNextStep(cardData);
                                                    }}
                                                    reset={() => {
                                                        setShowCardForm(false);
                                                    }}
                                                    setDefaultChecked={setDefaultChecked}
                                                />
                                            } else if (!addMethod) {
                                                return <SelectPayment key={index} loading={plaidState?.isLoading || isLoading?.getBankAccountList} disabledState={isLoading?.plaidLinkToken} paymentMethods={paymentMethods} setPaymentMethods={setPaymentMethods} paymentMethod={paymentMethod} setPaymentmethod={setPaymentMethod} handelMainDepositModalContinue={handelMainDepositModalContinue} addMethod={getPlaidTokenHandler}/>
                                            } else {
                                                return <SetDefault isLoading={plaidState?.isLoading} handleClose={() => {
                                                    getNextStep();
                                                    setAddMethod(false);
                                                }}
                                                handleSuccess={() => setDefaultPayment()}
                                                 />
                                            }
                                        }
                                        else return
                                    }
                                    case "ID Verification": {
                                        if (index === activeStep)
                                        return <IdVerify key={index} successHandler={idVerificationSuccess} />
                                        else return;
                                    }
                                    case "Select Method": {
                                        if (index === activeStep)
                                        return (!addMethod) ?  <SelectBankOrCard key={index} loading={plaidState?.isLoading || isLoading?.plaidLinkToken} defaultChecked={defaultChecked} setDefaultChecked={setDefaultChecked} paymentMethods={bankCardsList} setPaymentMethods={setBankCardsList} addMethod={getPlaidTokenHandler} handelMainDepositModalContinue={() => { 
                                            setAddMethod(false);
                                            getNextStep(defaultChecked)
                                        }} /> : <SetDefault isLoading={plaidState?.isLoading} handleClose={() => {
                                            !addMethodWithExisting && getNextStep();
                                            setAddMethod(false);
                                            setAddMethodWithExisting(false)
                                        }}
                                        handleSuccess={() => setDefaultPayment()}
                                         />
                                        else return;
                                    }
                                    default: return;
                                }
                            })}
                        </MKBox>
                    </MKBox>
                </MKBox>
            </DialogContent>
        </Dialog>
        </>
    );
};

export default CheckoutModal;

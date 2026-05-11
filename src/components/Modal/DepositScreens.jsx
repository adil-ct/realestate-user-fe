import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Persona from "persona";

// Static imports
import paymentList from "_mocks/paymentMethods";
import {
    PERSONA_ENV,
    PERSONA_TEMPLATE_ID,
    PERSONA_ENV_ID,
  } from "constants/env";
import toaster from "utils/toaster";
import DepositOptionsModal from "components/Modal/DepositOptionsModal"
import QRCodeModal from "components/Modal/DepositQRCode";
import WalletDepositModal from "components/Modal/WalletModals/WalletDepositModal";
import DepositViaStripe from "components/Modal/WalletModals/DepositViaStripe";
import DepositModalSuccess from "components/Modal/DepositModalSuccess";
import DepositModal from "components/Modal/DepositModal";
import {
    getWalletAddress,
    getMoonpayUrl,
    commonSaga,
    profileFetch
} from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";

const DepositScreens = ({ open, setOpen, noRedirection = false, noAction=false, handleAddFundsSuccess = () => {}, amount }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const paymentMethodsList = paymentList();
    const [depositModal, setDepositModal] = useState(false);
    const [openQRModal, setOpenQRModal] = useState(false);
    const [depositStripe, setDepositStripe] = useState(false);
    const [paymentMethod, setPaymentmethod] = useState("");
    const [mainDepositmodal, setMainDepositModal] = useState(open);
    const [depositModalSuccess, setDepositModalSucces] = useState(false);
    const [mainDepositOptionModal, setMainDepositOptionModal] = useState(false);
    const [paymentMethods, setPaymentMethods] = useState(paymentMethodsList?.data || []);
    const [options, setOptions] = useState([]);

    const { commonData } = useSelector((stateObj) => ({
        commonData: stateObj.common,
    }));
    const { walletAddress, moonpay, isLoading: userLoader } = useSelector((state) => state.user);
    const { userData, isLoading } = useSelector((state) => state.auth);
    const { _id } = userData || "";

    // Kyc flow starts here

    const loadScripts = (url) => {
        let script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
        // persona && setPersonaLoaded(true);
      }
    
      useEffect(() => {
          loadScripts("https://cdn.withpersona.com/dist/persona-v4.2.0.js", true);
      }, [])

    
      const successHandler = () => {
        // move to 2FA step
        dispatch(profileFetch());
        toaster.success(
          "ID verification completed! Confirm order to invest."
        );
        window.scrollTo(0, 0);
    };
    
      const handleStartKyc = () => {
        // Create instance
        const personaClient = new Persona.Client({
            templateId: PERSONA_TEMPLATE_ID,
            environment: PERSONA_ENV,
            environmentId: PERSONA_ENV_ID,
            onComplete: () => {
              successHandler();
            },
            referenceId: _id,
          });
          personaClient?.open();
      };

      // Kyc flow ends here

    // Set payment methods data
    useEffect(() => {
        if (paymentMethods?.length === 0) setPaymentMethods(paymentMethodsList?.data || [])
    }, [paymentMethodsList?.data])

    // Open main deposit modal
    useEffect(() => {
        open && !mainDepositmodal && setMainDepositModal(open)
    }, [open])

    // Load stripe payment scripts
    useEffect(() => {
        loadScripts("https://js.stripe.com/v3/");
        loadScripts("https://crypto-js.stripe.com/crypto-onramp-outer.js");
    }, [])

    const successModalData = {
        title: "Deposit Initiated",
        subtitle:
            "",
    };

    const handelDepositModalSuccess = ({ redirect }) => {
        if (redirect && !noRedirection) {
            navigate(routePaths.TRANSACTION_HISTORY_PATH);
        } else {
            setDepositModalSucces(false);
        }
    };

    const closeStripeModal = () => {
        setDepositStripe();
        setPaymentMethods(paymentMethodsList?.data);
    }

    // Toggle main deposit modal
    const handelMainDepositModal = () => {
        setMainDepositModal(!mainDepositmodal);
        setOpen(!open)
        setPaymentMethods(paymentMethodsList?.data);
    };

    // Open next modal accordint to choosed payment method
    const openNextModal = (value) => {
        switch (paymentMethod) {
            case "usdc":
                setOpenQRModal(value);
                break;
            case "card":
                setDepositModal(value);
                break;
            case "Transak":
                setDepositModal(value);
                break;
            case "ach":
                break;

            default: return false;
        }

    };

    // Call api to get the payment info for next modal to display 
    const handelMainDepositModalContinue = () => {
        switch (paymentMethod) {
            case "usdc":
                if(userData?.kycStatus === "created" || userData?.kycStatus === "started" ||  userData?.kycStatus === "pending" || userData?.kycStatus === "failed" || userData?.kycStatus === "declined")
                {
                    // KYC setup
                    handleStartKyc()
                }
                else if(userData?.kycStatus === "completed"){
                    toaster.info("Your KYC is under progress!")
                }
                else{
                    dispatch(
                        getWalletAddress({
                            handleSuccess: () => {
                                setMainDepositModal(!mainDepositmodal);
                                setOpen(!open)
                                setPaymentMethods(paymentMethodsList?.data);
                                if (mainDepositmodal) openNextModal(true);
                            },
                        })
                    );
                }
               
                break;
            case "card":
                dispatch(
                    getMoonpayUrl({
                        url: amount ? `/payment/moonpay-widget/?directInvest=true&baseAmount=${amount}` : "/payment/moonpay-widget",
                        handleSuccess: () => {
                            setMainDepositModal(!mainDepositmodal);
                            setOpen(!open)
                            setPaymentMethods(paymentMethodsList?.data);
                            if (mainDepositmodal) openNextModal(true);
                        },
                    })
                );
                break;
            case "Transak": {
                dispatch(
                    getMoonpayUrl({
                        url: "/payment/transak-widget?paymentMethod=pm_jach",
                        handleSuccess: () => {
                            setMainDepositOptionModal(false);
                            setMainDepositModal(false)
                            setOpen(false)
                            openNextModal(true);
                        },
                    })
                );
                break;
            }
            case "ach":
                dispatch(commonSaga({
                    endPoint: amount ? `/payment/stripe-onramp-sessions/?directInvest=true&baseAmount=${amount}` : `/payment/stripe-onramp-sessions`, type: "get", stateObj: "stripeState", baseEP: "PAYMENT", successHandler: () => {
                        setDepositStripe(true);
                        setMainDepositOptionModal(false);
                        setMainDepositModal(false)
                        setOpen(false)
                        openNextModal(true);
                    }
                }));
                break;

            default: return false;
        }
    };

    // Go back to previous modal
    const backButtonModal = async () => {
        setPaymentMethods(paymentMethodsList?.data);
        setDepositModal(false);
        setOpenQRModal(false);
        setMainDepositOptionModal(false);
        setOpen(false)
        setDepositStripe(false)
        // Transak or Stripe
        if (paymentMethod === "Transak" || paymentMethod === "Stripe") {
            if (mainDepositOptionModal) {
                setMainDepositModal(true)
                setOpen(true)
            }
            else
                setMainDepositOptionModal(true)
            const modifiedList = await options?.map((item) => {
                return {
                    ...item,
                    status: false,
                };
            });
            setOptions(modifiedList)
        }
        else {
            setMainDepositModal(true);
            setOpen(true)
        }
    };

    // Close main deposit modal
    const onCloseMainDepositModal = () => {
        setMainDepositModal(false);
        setOpen(false)
        setDepositModal(false);
        setMainDepositOptionModal(false)
    };

    const handleSuccessTransaction = () => {
        setDepositModal(false);
        setDepositStripe(false);
        if(!noAction) setDepositModalSucces(true)
        else 
        {
            toaster.success("Deposit Initiated!");
            handleAddFundsSuccess();
        }
    };

    const handleFailedTransaction = () => {
        setDepositModal(false);
        setDepositStripe(false);
        toaster.error("Deposit failed!")
    };

    return (
        <>
            {mainDepositmodal && (
                <DepositModal
                    noAction={noAction}
                    setPaymentMethods={setPaymentMethods}
                    paymentMethods={paymentMethods}
                    paymentMethod={paymentMethod}
                    open={mainDepositmodal}
                    handleClose={() => {
                        handelMainDepositModal()
                    }}
                    setPaymentmethod={setPaymentmethod}
                    loading={userLoader?.walletAddress || userLoader?.moonpay || commonData?.stripeState?.isLoading || isLoading?.profile} 
                    handelMainDepositModalContinue={handelMainDepositModalContinue}
                    setOptions={setOptions}
                    setMainDepositOptionModal={setMainDepositOptionModal}
                    amount={amount}
                />
            )}
            {openQRModal && (
                <QRCodeModal
                    open={openQRModal}
                    setOpen={setOpenQRModal}
                    handleNext={() => { }}
                    qrImage={walletAddress?.data?.qr}
                    secretCode={walletAddress?.data?.walletAddress}
                    backBtn={backButtonModal}
                />
            )}
            {mainDepositOptionModal && (
                <DepositOptionsModal
                    setPaymentMethods={setOptions}
                    paymentMethods={options}
                    open={mainDepositOptionModal}
                    handleClose={onCloseMainDepositModal}
                    setPaymentmethod={setPaymentmethod}
                    loading={userLoader?.moonpay || commonData?.stripeState?.isLoading}
                    handelMainDepositModalContinue={handelMainDepositModalContinue}
                    backBtn={backButtonModal}
                />
            )}
            {depositModal && <WalletDepositModal
                onClose={onCloseMainDepositModal}
                open={depositModal}
                paymentMethod={paymentMethod}
                handleWithdraw={openNextModal}
                backBtn={backButtonModal}
                url={moonpay?.data}
                handleSuccessTransaction={handleSuccessTransaction}
                handleFailedTransaction={handleFailedTransaction}
                amount={amount}
            />}

            {depositStripe && <DepositViaStripe
                open={depositStripe}
                onClose={closeStripeModal}
                backBtn={backButtonModal}
                clientSecret={commonData?.stripeState?.dataObj?.client_secret}
                amount={amount}
                handleSuccessTransaction={handleSuccessTransaction}
                handleFailedTransaction={handleFailedTransaction}
            />}
            {depositModalSuccess && (
                <DepositModalSuccess
                    open={depositModalSuccess}
                    data={successModalData}
                    handelDepositModalSuccess={handelDepositModalSuccess}
                />
            )}
        </>
    );
};

export default DepositScreens;

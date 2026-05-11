import { useState, useEffect } from "react";
import { Grid, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

// Static imports
import billDetailsValidation from "validation/billDetailsValidation"
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { commonSaga, getListOfBankAccount, getListOfCards } from "store/actions";
import { WithdrawModuls } from "components/Modal/WalletModals/styles/styles";
import toaster from "utils/toaster";
import { STRIPE_KEY } from "constants/env";


const DepositViaStripe = ({ handleSuccess, reset, type, setDefaultChecked }) => {
    const classes = WithdrawModuls();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const { stripeState, bankCards } = useSelector((state) => (state?.common));
    const { userData } = useSelector((state) => (state?.auth));
    const [clientSecret, setClientSecret] = useState("");
    const [stripe, setStripe] = useState("")

    const initialValues = {
        firstName: userData?.firstName ? userData?.firstName : "",
        lastName: userData?.lastName ? userData?.lastName : "",
        default :true,
    }

    const loadScripts = (url) => {
        let script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
        script.onload = function () {
            setStripe(window.Stripe(STRIPE_KEY));
        }
        // persona && setPersonaLoaded(true);
    }

    useEffect(() => {
        loadScripts("https://js.stripe.com/v3/");
        dispatch(commonSaga({
            endPoint: `/payment/payment-method/setupIntent`, type: "get", stateObj: "stripeState", baseEP: "PAYMENT", successHandler: () => { }
        }));
    }, [])

    useEffect(() => {
        if (stripeState?.dataObj?.client_secret) {
            setClientSecret(stripeState?.dataObj?.client_secret)
        }
    }, [stripeState])


    const submitForm = (values) => {
        // Calling this method will open the instant verification dialog.
        stripe.collectBankAccountForSetup({
            // stripe.collectBankAccountForPayment({
            clientSecret: clientSecret,
            params: {
                payment_method_type: 'us_bank_account',
                payment_method_data: {
                    billing_details: {
                        name: values?.firstName + " " + values?.lastName,
                    },
                },
            },
            expand: ['payment_method'],
        })
            .then(({ setupIntent, error }) => {
                if (error) {
                    console.error(error.message);
                    // PaymentMethod collection failed for some reason.
                } else if (setupIntent.status === 'requires_payment_method') {
                    // Customer canceled the hosted verification modal. Present them with other
                    // payment method type options.
                } else if (setupIntent.status === 'requires_confirmation') {
                    // We collected an account - possibly instantly verified, but possibly
                    // manually-entered. Display payment method details and mandate text
                    // to the customer and confirm the intent once they accept
                    // the mandate.
                    setLoading(true);
                    finalSubmitForm(values)
                }
            });
    }

    const finalSubmitForm = (values) => {
        stripe.confirmUsBankAccountSetup(clientSecret)
            .then(({ setupIntent, error }) => {
                if (error) {
                    console.error(error.message);
                    // The payment failed for some reason.
                } else if (setupIntent.status === "requires_payment_method") {
                    // Confirmation failed. Attempt again with a different payment method.
                } else if (setupIntent.status === "succeeded") {
                    if(values.default)
                    {
                        dispatch(commonSaga({
                            endPoint: `/payment/payment-method/default`, type: "post", stateObj: "stripeState", dataToPost: { paymentMethodId : setupIntent?.payment_method }, baseEP: "PAYMENT", showAlert: true, successHandler: () => {
                              if(type === "account") {
                                dispatch(getListOfBankAccount({ page: 1, limit: 3 }))
                                dispatch(getListOfCards({ page: 1, limit: 3 }))
                                handleSuccess(true)
                              }
                              else{
                                dispatch(commonSaga({
                                    endPoint:  `/payment/payment-method/listMethods`, type: "get", stateObj: "bankCards", baseEP: "PAYMENT", successHandler: () => {
                                        handleSuccess(true)
                                    }
                                }));
                              }
                        }}));
                    }
                    else{
                        if(type === "account"){
                            dispatch(getListOfBankAccount({ page: 1, limit: 3 }))
                            dispatch(getListOfCards({ page: 1, limit: 3 }))
                            handleSuccess(true)
                        }
                        else{
                            dispatch(commonSaga({
                                endPoint:  `/payment/payment-method/listMethods`, type: "get", stateObj: "bankCards", baseEP: "PAYMENT", successHandler: (data) => {
                                    if(!bankCards?.dataObj?.totalCount) {
                                        setDefaultChecked(data?.paymentMethods[0])
                                        handleSuccess(true, data?.paymentMethods[0])
                                    }
                                    else
                                    handleSuccess(true);
                                }
                            }));
                        }
                    }
                    toaster.success("Bank Account added Successfully!")
                    setLoading(false);
                    // Confirmation succeeded! The account is now saved.
                    // Display a message to customer.
                } else if (setupIntent.next_action?.type === "verify_with_microdeposits") {
                    // The account needs to be verified via microdeposits.
                    // Display a message to consumer with next steps (consumer waits for
                    // microdeposits, then enters a statement descriptor code on a page sent to them via email).
                }
            });
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema: billDetailsValidation,
        onSubmit: (values) => {
            submitForm(values);
        },
    });

    return (
        <MKBox height="100%">
            <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                p={2}
                mt={-1}
            >
                <Grid container className={classes.wireModulMarginNew} mt={1}>
                { type !== "account" && <MKTypography onClick={reset} className={classes.termsText1}>Select different payment method</MKTypography>}
                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.pright8} >
                        <MKTypography display="block" textAlign="left" >
                            <MKTypography variant="h7" className={classes.subHeader}>
                                First Name
                            </MKTypography>
                            <MKTypography variant="h7" className={classes.subHeaderRed}>
                                {" "}*
                            </MKTypography>
                        </MKTypography>
                        <MKInput
                            fullWidth
                            id="firstName"
                            name="firstName"
                            placeholder="Wade"
                            // labelColor={classes.labelColor}
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.firstName &&
                                Boolean(formik.errors.firstName)
                            }
                            helperText={
                                formik.touched.firstName && formik.errors.firstName
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.pleft8}>
                        <MKTypography display="block" textAlign="left" >
                            <MKTypography variant="h7" className={classes.subHeader}>
                                Last Name
                            </MKTypography>
                            <MKTypography variant="h7" className={classes.subHeaderRed}>
                                {" "}*
                            </MKTypography>
                        </MKTypography>
                        <MKInput
                            fullWidth
                            id="lastName"
                            name="lastName"
                            placeholder="Warren"
                            // labelColor={classes.labelColor}
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.lastName && Boolean(formik.errors.lastName)
                            }
                            helperText={
                                formik.touched.lastName && formik.errors.lastName
                            }
                        />
                    </Grid>
                </Grid>
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
                         Set this bank as default payment.
                      </MKTypography>
                    </MKBox>
                  </Grid>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    mt={4}
                    mb={5}
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
                            type="submit"
                            variant="gradient"
                            // color="primary"
                            className={classes.button50Width}
                        >
                            <ButtonSpinner
                                isLoading={
                                    stripeState?.isLoading || isLoading || bankCards?.isLoading
                                }
                                text="Continue"
                            />
                        </MKButton>
                    </Grid>
                </Grid>
            </MKBox>
        </MKBox>
    );
};

export default DepositViaStripe;

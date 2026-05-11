import { React, useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

// Static imports
import MKBox from "components/custom/MKBox";
import { NODE_ENV } from "constants/env";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";

import Addachfield from "./Addachfield";
import Addwirefield from "./Addwirefields";
import AddBillDetails from "./Addbilldetails";

import {
  addACHBankAccountSaga,
  addWireBankAccountSaga,
  profileFetch,
} from "store/actions";
import addAvfBankAccountValidation from "validation/addAvfBankAccountValidation";
import { addWireBankAccountValidation } from "validation/addWireValidation";
import billAccountValidation from "validation/billDetailValidation";
import billAccountValidationACH from "validation/billDetailsValidationACH";
import { ACH_MODE } from "constants/env";
import { walletModalStyles } from "./styles/styles";
import toaster from "utils/toaster";

const AddBankAccountModul = ({
  open,
  handleAddCard,
  defaultSelect,
}) => {
  const classes = walletModalStyles();
  const [selectedOption, setOption] = useState(
    ACH_MODE === "false"
      ? "wire"
      : defaultSelect
      ? defaultSelect === "wire"
        ? "wire"
        : "avf"
      : "avf"
  );
  const [bankDetails, setBankDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [sameAsPersonal, setSameAsPersonal] = useState(true);
  const [openBillingModal, setBillingModal] = useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { plaidCreatedAt } = useSelector((state) => state.accounts);

  // Get user profile
  useEffect(() => {
    dispatch(profileFetch());
  }, []);

  // Making an intial values to be autofilled in billing details page
  // If user selects the option of same as personal details
  useEffect(() => {
    const {
      firstName,
      lastName,
      zipCode,
      address1,
      address2,
      stateCode,
      city,
      countryISO2,
      state,
    } = userData || "";
    setUserDetails({
      firstName,
      lastName,
      district: stateCode,
      postalCode: zipCode,
      line1: address1,
      line2: address2,
      country: countryISO2,
      city,
      stateFull: state,
    });
  }, [userData]);

  // Close Modal (General for all)
  const handleClick = () => {
    handleAddCard(false);
    setOption("avf");
    setBillingModal(false);
    billformik.resetForm();
    wireformik.resetForm();
    avfformik.resetForm();
  };

  // Once api call is success for add ACH/Wire Bank account
  const handleSuccess = () => {
    setBillingModal(false);
    handleAddCard(false);
    billformik.resetForm();
    wireformik.resetForm();
    avfformik.resetForm();
  };

  const handleSelection = (option) => {
    setOption(option);
  };

  // Intial values start here for three types of forms
  // 1. ACH bank account
  // 2. Wire bank account
  // 3. Billing Details
  const avfInitialValues = {
    publicToken: "",
    bankAccountType: "retail",
  };

  const wireInitialValues =
    NODE_ENV === "development"
      ? {
          accountNumber: "12340010",
          routingNumber: "121000248",
          bankName: "",
          country: "US",
          city: "Boston",
          bankType: "USBANK",
          reAccountNumber: "12340010",
          reRoutingNumber: "121000248",
        }
      : {
          accountNumber: "",
          routingNumber: "",
          bankName: "",
          country: "US",
          city: "",
          bankType: "USBANK",
          reAccountNumber: "",
          reRoutingNumber: "",
        };

  const billInitialValues = {
    firstName: "",
    lastName: "",
    district: "",
    postalCode: "",
    line1: "",
    country: "",
    city: "",
  };

  const billInitialValuesWire = {
    firstName: "",
    lastName: "",
    district: "",
    postalCode: "",
    line1: "",
    country: "",
    city: "",
    stateFull: "",
  };

  // Api call handler for creating bank ACH/Wire bank account
  const submitBankDetails = async (values) => {
    const {
      publicToken,
      bankAccountType,
      accountNumber,
      routingNumber,
      bankType,
      ...bankAddress
    } = bankDetails;

    if (selectedOption === "avf") {
      // eslint-disable-next-line no-unused-vars
      const { firstName, lastName, stateFull, ...otherBillingDetails } = values;

      const requestBody = {
        publicToken,
        bankAccountType,
        plaid_created_at: plaidCreatedAt,
        billingDetails: {
          ...otherBillingDetails,
          name: firstName + " " + lastName,
        },
        metadata: {
          email: "",
        },
      };
      await dispatch(addACHBankAccountSaga({ requestBody, handleSuccess }));
    }

    if (selectedOption === "wire") {
      // eslint-disable-next-line no-unused-vars
      const { firstName, lastName, stateFull, ...otherBillingDetails } = values;
      // eslint-disable-next-line no-unused-vars
      const { reAccountNumber, reRoutingNumber, ...bankAddressFiltered } =
        bankAddress;

      const requestBody =
        bankType === "NONUS-IBAN"
          ? {
              iban: accountNumber,
              // Todo: To set empty field for both accountnumber and routing number
              accountNumber: "",
              routingNumber: "",
              bankType,
              billingDetails: {
                ...otherBillingDetails,
                name: firstName + " " + lastName,
              },
              bankAddress: bankAddressFiltered,
            }
          : {
              accountNumber,
              routingNumber,
              bankType,
              billingDetails: {
                ...otherBillingDetails,
                name: firstName + " " + lastName,
              },
              bankAddress: bankAddressFiltered,
            };
      await dispatch(addWireBankAccountSaga({ requestBody, handleSuccess }));
    }
  };

  // Save the ACH/Wire forms data and proceed to billing details form
  const submitBtnhandler = (values) => {
    setBankDetails(values);
  };

  // Formik instances start here for three types of forms
  // 1. ACH bank account
  // 2. Wire bank account
  // 3. Billing Details

  const avfformik = useFormik({
    initialValues: avfInitialValues,
    validationSchema: addAvfBankAccountValidation,
    onSubmit: (values) => {
      submitBtnhandler(values);
    },
  });

  const wireformik = useFormik({
    enableReinitialize: true,
    initialValues: wireInitialValues,
    validationSchema: addWireBankAccountValidation,
    onSubmit: (values) => {
      submitBtnhandler(values);
    },
  });

  const billformik = useFormik({
    enableReinitialize: true,
    initialValues: sameAsPersonal
      ? userDetails
      : selectedOption === "avf"
      ? billInitialValues
      : billInitialValuesWire,
    validationSchema:
      selectedOption === "avf"
        ? billAccountValidationACH
        : billAccountValidation,
    onSubmit: (values) => {
      submitBankDetails(values);
    },
  });

  // Closes add bank account modal
  const handleAccountCancel = () => {
    // Reset form after modal is closed
    avfformik.resetForm();
    wireformik.resetForm();
    setOption("avf");
    handleAddCard(false);
  };

  // Closes billing modal
  const handleBillingCancel = () => {
    setBillingModal(false);
    handleAddCard(true);
  };

  // Opens billing Details modal and save the forms data which was previously filled in bank details form
  const openBillDetailsModal = async () => {
    // Check if all the required fields of form are filled
    const validateForm =
      selectedOption === "avf"
        ? await avfformik.validateForm()
        : await wireformik.validateForm();

    selectedOption === "avf" ? avfformik.submitForm() : wireformik.submitForm();

    // If all the required forms field are filled then goto next steps
    if (
      validateForm &&
      Object.keys(validateForm).length === 0 &&
      Object.getPrototypeOf(validateForm) === Object.prototype
    ) {
      // handleAddCard(false);
      setBillingModal(true);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="responsive-dialog-title"
        className={classes.bankModal}
      >
        <MKBox>
          <MKBox display="flex" justifyContent="right" top="30px" left={30}>
            <CloseButton
              P={3}
              className={classes.closeIconRight}
              onClick={handleClick}
            />
          </MKBox>
          <MKBox>
            <DialogTitle
              display="flex"
              justifyContent="center"
              className={classes.title}
            >
              <Typography
                variant="h3"
                width={400}
                className={classes.mainTitle}
              >
                Add Bank Account
              </Typography>
            </DialogTitle>
          </MKBox>
          <MKBox text-alignItems="center" className={classes.radioBtn}>
            <FormControl>
              <MKTypography variant="h7" className={classes.subHeader}>
                Select Funding Method
              </MKTypography>
              <MKBox className={classes.radioButtonGroup}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedOption}
                  className={classes.radioButtonGroupBox}
                >
                  <FormControlLabel
                    value="avf"
                    control={<Radio />}
                    className={classes.radioLabelBox}
                    sx={{ marginRight: "28px" }}
                    label={
                      <Typography className={classes.labelText}>ACH</Typography>
                    }
                    disabled
                    onClick={() =>
                      ACH_MODE === "true"
                        ? handleSelection("avf")
                        : toaster.info(
                            "ACH payment method will be available soon"
                          )
                    }
                  />

                  <FormControlLabel
                    value="wire"
                    control={<Radio />}
                    label={
                      <Typography className={classes.labelText}>
                        Wire
                      </Typography>
                    }
                    className={classes.radioLabelBox}
                    onClick={() => handleSelection("wire")}
                  />
                </RadioGroup>
                <Typography className={classes.labelText1}>
                  ACH transfers are processed in batches so they will typically
                  take 1-2 business days to complete, though can take less time
                  in some instances. Wire transfers are real-time transfers
                  through a secure network. We charge $8 for wire transfers so
                  you can invest immediately, and your bank may charge you as
                  well. ACH transfers are free.
                </Typography>
              </MKBox>
            </FormControl>
          </MKBox>
          <MKBox>
            {selectedOption === "avf" && (
              <Addachfield
                formik={avfformik}
                handleAccountCancel={handleAccountCancel}
                openBillDetailsModal={openBillDetailsModal}
              />
            )}
            {selectedOption === "wire" && (
              <Addwirefield
                formik={wireformik}
                validationSchema={addWireBankAccountValidation}
                handleBillingCancel={handleAccountCancel}
                openBillDetailsModal={openBillDetailsModal}
              />
            )}
          </MKBox>
        </MKBox>
      </Dialog>
      {openBillingModal && (
        <AddBillDetails
          validationSchema={
            selectedOption === "avf"
              ? billAccountValidationACH
              : billAccountValidation
          }
          formik={billformik}
          open={openBillingModal}
          handleClose={handleClick}
          handleCancel={handleBillingCancel}
          sameAsPersonal={sameAsPersonal}
          setSameAsPersonal={setSameAsPersonal}
        />
      )}
    </div>
  );
};

export default AddBankAccountModul;

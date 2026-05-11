/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { usePlaidLink } from "react-plaid-link";

// Static imports
import Addbankaccountmodal from "components/Modal/DepositViaBank";
import Addcardaccountmodal from "components/Modal/WalletModals/Addcarddetail";
import AddBillDetails from "components/Modal/WalletModals/Addbilldetails";
import MKTypography from "components/custom/MKTypography";
import SkeletonAddaccount from "./SkeletonData/AddcardSkeleton";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import DynamicCard from "components/Cards/DynamicCard/DynamicCard";
import ConfirmationModal from "components/Modal/CustomConfirmationModal";
import DynamicTable from "components/DynamicTable/DynamicTable";
import BankAccounts from "./components/BankAccounts";
import AllBankCardsData from "_mocks/allCards";
import billAccountValidation from "validation/billDetailValidation";
import { CREDIT_CARD_MODE } from "constants/env";
import toaster from "utils/toaster";
import { addBankLink, isDwolla } from "constants/paymentEndpoints";
import {
  profileFetch,
  getListOfCards,
  deleteCard,
  getListOfBankAccount,
  commonSaga,
  getPlaidTokenSaga
} from "store/actions";
import style from "./style/style";

const enable = {
  badge: "badge",
  progressBar: "progressBar",
  priceChange: "priceChange",
  blueLink: "blueLink",
  deleteAndEditButton: "deleteAndEditButton",
  clockicon: "clockicon",
  edittrash: "edittrash",
  visacard: "visacard",
  mastercard: "mastercard",
  blueLinkBalance: "blueLinkBalance",
  trash: "trash",
};

const tableConfig = {};

const cardConfig = {};

const Accounts = () => {
  const classes = style();
  const bankCardsList = AllBankCardsData();
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openCardModal, setOpenCardModal] = useState(false);
  const [openBillingModal, setOpenBillingModal] = useState(false);
  const [sameAsPersonal, setSameAsPersonal] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [defaultState, setDefaultState] = useState(false);
  const [listBank, setListBank] = useState("");
  const [deleteType, setDeleteType] = useState("");
  const [fetchToken, setFetchToken] = useState("");
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { linkedBankAccounts, linkedCards } = useSelector((state) => state.accounts);
  const { isLoading } = useSelector((state) => state.accounts);
  const { stripeState } = useSelector((state) => state.common);

  const config = {
    token: fetchToken,
    onSuccess: (public_token, metadata) => {
      // console.log("metadata", metadata);
      // send public_token to server
      dispatch(commonSaga({
        endPoint: addBankLink , type: "post", stateObj: "plaidState", dataToPost: { public_token: public_token, ...(isDwolla && {account_id: metadata?.account_id, subtype: metadata?.account?.subtype}) }, baseEP: "PAYMENT", showAlert: true, successHandler: (data) => {
          dispatch(getListOfBankAccount({ page: 1, limit: 3 }));
          setListBank(data?._id);
          // setDefaultState(true);
          // setOpen(true);
        }
      }));
      // console.log("publicToken", public_token);
    },
    onExit: (error, metadata) => {
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
  const getPlaidTokenHandler = async () => {
    await dispatch(getPlaidTokenSaga({ handleSuccess: setFetchToken }));
  };


  const data = {
    title: defaultState ? `Do you want to set this as default payment method?` : `Do you still want to delete your ${deleteType}?`,
    cancel: "Cancel",
    success: "I'm Sure",
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setDefaultState(false);
    setListBank("")
  }

  let maxCount = linkedCards?.totalCount
    ? Math.ceil(Number(linkedCards?.totalCount / 3))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
    dispatch(getListOfCards({ page, limit: 3 }));
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  const handleDeleteSuccess = () => {
    setOpen(false);
    deleteType === "card"
      ? dispatch(getListOfCards({ page: 1, limit: 3 }))
      : dispatch(getListOfBankAccount({ page: 1, limit: 3 }));
  };

  const handleDefaultSet = () => {
    dispatch(commonSaga({
      endPoint: `/payment/plaid/account/default`, type: "post", stateObj: "stripeState", dataToPost: { bank_id: listBank.length ? listBank : deleteId }, baseEP: "PAYMENT", showAlert: true, successHandler: () => {
        dispatch(getListOfBankAccount({ page: 1, limit: 3 }));
        setOpen(false);
        setDefaultState(false);
        setListBank("")
      }
    }));
  }

  const handleDeleteConfirmation = async () => {
    const requestBody = {
      id: deleteId,
    };
    await dispatch(
      deleteCard({ requestBody, handleSuccess: handleDeleteSuccess })
    );
  };

  const cardActions = {
    linkActions: [],
    actions: [
      {
        name: "Delete",
        handler: (id) => {
          setDefaultState(false);
          setDeleteId(id);
          setDeleteType("card");
          handleOpen(true);
        },
      },
      // {
      //   name: "Set as default",
      //   data: true,
      //   disableCustom: true,
      //   disabled: (data) => {
      //     return data?.disabled;
      //   },
      //   handler: (data) => {
      //     setDeleteId(data?.id);
      //     setDeleteType("card");
      //     handleOpen(true);
      //     setDefaultState(true);
      //   },
      // },
    ],
    cardActions: {
      delete: {
        handler: (id) => {
          setDeleteId(id);
          setDeleteType("card");
          handleOpen(true);
        },
      },
    },
  };

  // Get user profile
  useEffect(() => {
    dispatch(profileFetch());
    // dispatch(getListOfCards({ page: currentPage, limit: 3 }));
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

  const modalHandler = (value) => {
    setOpenModal(value);
  };

  const modalCardHandler = (value) => {
    setOpenCardModal(value);
  };

  const billInitialValues = {
    firstName: "",
    lastName: "",
    district: "",
    postalCode: "",
    line1: "",
    line2: "",
    country: "",
    city: "",
  };

  const moveToBillingDetails = async () => {
    // setOpenBillingModal(true);
  };

  const billformik = useFormik({
    enableReinitialize: true,
    initialValues: sameAsPersonal ? userDetails : billInitialValues,
    validationSchema: billAccountValidation,
    onSubmit: (values) => {
      submitBankDetails(values);
    },
  });

  const submitBankDetails = async () => {
    //
  };

  // Closes billing modal
  const handleBillingCancel = () => {
    setOpenBillingModal(false);
    modalCardHandler(true);
  };

  // Close Modal (General for all)
  const handleClick = () => {
    modalCardHandler(false);
    setOpenBillingModal(false);
    billformik.resetForm();
    // formik.resetForm();
  };

  return (
    <MKBox className={classes.accountContainer}>
      <Box className={classes.subContainer}>
        <MKTypography
          fontWeight="medium"
          variant="p4"
          className={classes.mainTitle}
        >
          Connect Your Account
        </MKTypography>
        <Box className={classes.bankDetails}>
          <MKTypography
            variant="p4"
            fontWeight="medium"
            className={classes.subtitle}
          >
            {linkedBankAccounts?.data?.length > 0
              ? "Bank Details"
              : "Please add your bank account below to make your first investment"}
          </MKTypography>
          <MKButton
            variant="contained"
            className={classes.addButton}
            // onClick={() => modalHandler(true)}
            onClick={() => getPlaidTokenHandler()}
            disabled={isLoading?.plaidLinkToken}
          // id="joyride-payment-mathod"
          >
            <AddIcon className={classes.addIcon} />
            Add Account
          </MKButton>
        </Box>
        <MKButton
          variant="gradient"
          className={classes.addButton1}
          onClick={() => getPlaidTokenHandler()}
          disabled={isLoading?.plaidLinkToken}
          id="joyride-payment-mathod"
        >
          <AddIcon className={classes.addIcon1} />
          Add Account
        </MKButton>
        <Box>
          <BankAccounts
            modalHandler={getPlaidTokenHandler}
            openDeleteModal={handleOpen}
            setDefaultState={setDefaultState}
            setDeleteType={setDeleteType}
            setDeleteId={setDeleteId}
          />
        </Box>
      </Box>
      {openModal && (
        <Addbankaccountmodal open={openModal} modalHandler={modalHandler} />
      )}
      {openCardModal && (
        <Addcardaccountmodal
          open={openCardModal}
          handleAddCard={modalCardHandler}
          moveToBillingDetails={moveToBillingDetails}
        />
      )}
      {openBillingModal && (
        <AddBillDetails
          validationSchema={billAccountValidation}
          formik={billformik}
          open={openBillingModal}
          handleClose={handleClick}
          handleCancel={handleBillingCancel}
          sameAsPersonal={sameAsPersonal}
          setSameAsPersonal={setSameAsPersonal}
        />
      )}
      {open && (
        <ConfirmationModal
          open={open}
          handleClose={handleClose}
          handleSuccess={defaultState ? handleDefaultSet : handleDeleteConfirmation}
          data={data}
          isLoading={isLoading.deleteCard || stripeState?.isLoading}
        />
      )}
    </MKBox>
  );
};

export default Accounts;

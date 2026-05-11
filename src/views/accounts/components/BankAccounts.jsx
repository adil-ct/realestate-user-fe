/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Static imports
import AllBanksData from "_mocks/allPlaidBanks";
import MKBox from "components/custom/MKBox";
import BankAccountDetails from "components/Modal/BankAccountDetails";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import DynamicTable from "components/DynamicTable/DynamicTable";
import DynamicCard from "components/Cards/DynamicCard/DynamicCard";
import { getListOfBankAccount, getBankDetails } from "store/actions";
import styles from "../style/style";
import { isDwolla } from "constants/paymentEndpoints";

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
  viewWithDots: "viewWithDots",
  bank: "bank",
  dots: "dots",
};

const tableConfig = {};

const cardConfig = {};

const BankAccounts = (props) => {
  const classes = styles();
  const { openDeleteModal, setDeleteType, setDeleteId, setDefaultState } = props;
  const [viewDetails, setViewDetails] = useState();
  const [bankAccountDetails, setBankAccountDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { isLoading, addACHBankAccountData, linkedBankAccounts } = useSelector(
    (state) => state.accounts
  );
  const { plaidState } = useSelector((state) => state.common)
  const bankAccountsList = AllBanksData();
  
  let maxCount = linkedBankAccounts?.totalCount
  ? Math.ceil(Number(linkedBankAccounts?.totalCount / 3))
  : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
    dispatch(getListOfBankAccount({page, limit: 3}));
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  const bankActions = {
    view: {
      handler: (content) => {
        // dispatch(getBankDetails({ id: content }));
        setViewDetails(content);
        handelBankAccountDepositModal();
      },
    },
    actions: [
      {
        name: "Delete",
        handler: (id) => {
          setDeleteId(id);
          setDeleteType("bank");
          openDeleteModal();
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
      //     openDeleteModal(true);
      //     setDefaultState(true);
      //   },
      // },
    ],
    cardActions: {
      delete: {
        handler: (id) => {
          setDeleteId(id);
          setDeleteType("bank");
          openDeleteModal();
        },
      },
      view: {
        handler: (content) => {
          dispatch(getBankDetails({ id: content }));
          setViewDetails(content);
          handelBankAccountDepositModal();
        },
      },
    },
  };

  useEffect(() => {
    dispatch(getListOfBankAccount({page: currentPage, limit: 3}));
  }, [addACHBankAccountData]);

  const handelBankAccountDepositModal = () => {
    setBankAccountDetails(!bankAccountDetails);
  };

  return (
    <MKBox>
      <MKBox className={classes.sectionDesktopFlex}>
        {isLoading.getBankAccountList || plaidState?.isLoading ? (
          <TableSkeleton dynamicField={true} {...bankAccountsList} />
        ) : (
          <DynamicTable
            {...bankAccountsList}
            tableConfig={{
              ...tableConfig,
              ...( !isDwolla && {0: enable.bank }),
              2: enable.dots,
            }}
            headColStyle={{
              0: { width: "500px", textAlign: "left" },
              1: { width: "300px", textAlign: "left" },
            }}
            // paginationConfig={paginationConfig}
            noDataType="Bank"
            noDataHandler={props?.modalHandler}
            tableAdvancedActions={bankActions}
          />
        )}
      </MKBox>
      <MKBox className={classes.sectionMobile} sx={{ ml: -2, mr: -2 }}>
        {isLoading.getBankAccountList ? (
          <CardSkeleton />
        ) : (
          <DynamicCard
            {...bankAccountsList}
            cardConfig={{
              ...cardConfig,
              // 1: enable.bank,
              2: enable.dots,
            }}
            // pagination={paginationConfig}
            noDataHandler={props?.modalHandler}
            noDataType="Bank"
            tableAdvancedActions={bankActions}
          />
        )}
      </MKBox>
      <BankAccountDetails
        open={bankAccountDetails}
        data={viewDetails}
        handleClose={handelBankAccountDepositModal}
      />
    </MKBox>
  );
};

export default BankAccounts;

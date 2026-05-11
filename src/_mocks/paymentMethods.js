import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentMethods } from "store/actions";

const blacklist = [
  "Louisiana",
  "New York",
  "Texas",
  "Virgin Islands",
];

const usePaymentMethods = (withdraw) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPaymentMethods());
  }, [dispatch]);

  const { userData } = useSelector((state) => state.auth);
  const { paymentMethods } = useSelector((state) => state.user);
  
  const city = userData?.state;
  const blackListUser = blacklist.includes(city);
  
  const processedPaymentMethods = paymentMethods?.data
    ?.slice(0)
    .reverse()
    .filter((item) =>
      !item?.isHidden && !withdraw
        ? blackListUser
          ? item?.canDeposit && item.method !== "Credit / Debit Card"
          : item?.canDeposit
        : item?.canWithdraw
    )
    .map((payment) => ({
      id: payment?._id,
      name: payment?.method,
      subtitle: payment?.subHeading,
      tagline: payment?.description,
      status: payment?.isHidden,
      Image: payment?.icon,
      alt: payment?.method,
      key: payment?.type,
      disabled: false,
      pIcons: payment?.supportedPaymentIcon ? payment?.supportedPaymentIcon : [],
      options: payment?.platform?.map((option, index) => ({
        id: index,
        name: option?.name,
        subtitle: "",
        tagline: "",
        status: false,
        Image: option?.icon,
        alt: option?.name,
        key: option?.name,
        disabled: false,
        disableMsg: "Coming soon!",
      })),
      disableMsg: "Coming soon!",
    }));
    
  return {
    data: processedPaymentMethods,
  };
};

export default usePaymentMethods;

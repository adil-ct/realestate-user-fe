import React from "react";

const PropertyManagerDetails = React.lazy(() =>
  import("./property-manager/components/property-details")
);
const InitiateTransaction = React.lazy(() =>
  import("./property-manager/components/initiate-transaction")
);
const EmailVerificationSuccess = React.lazy(() =>
  import("./auth/Register/EmailVerificationSuccess")
);
const CreateProposal = React.lazy(() =>
  import("./property-manager/components/create-proposal")
);
const ViewProposal = React.lazy(() =>
  import("./property-manager/components/view-proposal")
);
const RentPayout = React.lazy(() =>
  import("./property-manager/components/rent-payout")
);
const PersonalInformation = React.lazy(() =>
  import("./auth/Register/steps/Register")
);
const Proposals = React.lazy(() =>
  import("./property-manager/components/proposals")
);
const AccountSettings = React.lazy(() =>
  import("./account-settings/AccountSetting")
);
const TransactionHistory = React.lazy(() =>
  import("./wallet/TranscationHistory")
);
const ResetPassword = React.lazy(() => import("./auth/Login/CreatNewPassword"));
const PropertyDetailsCard = React.lazy(() => import("./property-details-card"));
const ForgotPassword = React.lazy(() => import("./auth/Login/ResetPassword"));
const QrCodeModal = React.lazy(() => import("./auth/Register/steps/Qrcode"));
const PropertyProfile = React.lazy(() => import("./property-profile"));
const PropertyManager = React.lazy(() => import("./property-manager"));
const Register = React.lazy(() => import("./auth/Register/Register"));
const PageNotFound = React.lazy(() => import("./page-not-found"));
const Notifications = React.lazy(() => import("./notifications"));
const Accounts = React.lazy(() => import("./accounts/Accounts"));
const Login = React.lazy(() => import("./auth/Login/Login"));
const Wallet = React.lazy(() => import("./wallet/Wallet"));
const Portfolio = React.lazy(() => import("./Portfolio"));
const DemoModal = React.lazy(() => import("./DemoModal"));
const Investor = React.lazy(() => import("./investor"));
const MoonPay = React.lazy(() => import("./DemoModal"));
const Profile = React.lazy(() => import("./profile"));
const ReferralDetails = React.lazy(() => import("./referral-details"));
const ReferralTransactions = React.lazy(() =>
  import("./referrals/referralTransaction")
);
const ForceUpdatePassword = React.lazy(() =>
  import("./auth/Login/ForceUpdatePassword")
);
const HowItWorks = React.lazy(() => import("./how-it-works/HowItWorks"));
const AboutUs = React.lazy(() => import("./about-us/AboutUs"));
const WhyRealEstate = React.lazy(() =>
  import("./why-real-estate/WhyRealEstate")
);
const MogulClub = React.lazy(() => import("./mogul-club/MogulClub"));

export {
  ForceUpdatePassword,
  EmailVerificationSuccess,
  PropertyManagerDetails,
  PersonalInformation,
  PropertyDetailsCard,
  InitiateTransaction,
  TransactionHistory,
  PropertyProfile,
  AccountSettings,
  PropertyManager,
  ForgotPassword,
  CreateProposal,
  Notifications,
  ResetPassword,
  PageNotFound,
  ViewProposal,
  QrCodeModal,
  RentPayout,
  Portfolio,
  DemoModal,
  Proposals,
  Register,
  Accounts,
  Investor,
  Profile,
  MoonPay,
  Wallet,
  Login,
  ReferralDetails,
  ReferralTransactions,
  AboutUs,
  HowItWorks,
  WhyRealEstate,
  MogulClub,
};

// This Folder will contain all the pages which will be served for every individual routes

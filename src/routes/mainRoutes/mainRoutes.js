import React from "react";
import {
  Login,
  Register,
  EmailVerificationSuccess,
  ForgotPassword,
  ResetPassword,
  PersonalInformation,
  PageNotFound,
  Wallet,
  Accounts,
  Investor,
  TransactionHistory,
  PropertyProfile,
  Portfolio,
  PropertyDetailsCard,
  AccountSettings,
  Profile,
  Notifications,
  PropertyManager,
  PropertyManagerDetails,
  InitiateTransaction,
  ViewProposal,
  CreateProposal,
  Proposals,
  ReferralDetails,
  RentPayout,
  DemoModal,
  MoonPay,
  // ReferralTransactions,
  ForceUpdatePassword,
  // AboutUs,
  HowItWorks,
  WhyRealEstate,
  // MogulClub,
  Home,
} from "views";

// import Home from "views/home";
// import OurBlog from "views/our-blog";
// import OurBlogDetails from "views/our-blog-detail";
import { routePaths } from "./routePaths";

// Routes Management
export const publicRoutes = [
  {
    path: routePaths.LOGIN_PATH,
    name: "Login",
    component: <Login />,
  },
  {
    path: routePaths.LANDING_PAGE_PATH,
    exact: true,
    name: "LandingPage",
    //component: React.lazy(() => import('../../views/landing')),
    component: <Login />,
  },
  {
    path: routePaths.HOW_IT_WORKS_PATH,
    exact: true,
    name: "HowItWorks",
    component: <HowItWorks />,
  },
  {
    path: routePaths.WHY_REAL_ESTATE_PATH,
    exact: true,
    name: "WhyRealEstate",
    component: <WhyRealEstate />,
  },
  // {
  //   path: routePaths.MOGUL_CLUB_PATH,
  //   exact: true,
  //   name: "Login",
  //   //component: React.lazy(() => import('../../views/how-it-works')),
  //   // component: <MogulClub />,
  //   // component: <Login />,

  // },
  // {
  //   path: routePaths.OUR_BLOGS_PATH,
  //   exact: true,
  //   name: "OurBlogs",
  //   //component: React.lazy(() => import('../../views/our-blog')),
  //   component: <Login />,
  // },
  // {
  //   path: routePaths.ABOUT_US_PATH,
  //   exact: true,
  //   name: "AboutUs",
  //   //component: React.lazy(() => import('../../views/about-us')),
  //   component: <Login />,
  // },
  // {
  //   path: routePaths.BLOG_DETAILS_PATH,
  //   exact: true,
  //   name: "BlogDetail",
  //   //component: React.lazy(() => import('../../views/our-blog-detail')),
  //   // component: <OurBlogDetails />,
  // },
  // {
  //   path: routePaths.PERSONAL_DETAILS_PATH,
  //   name: "PersonalDetails",
  //   component: <PersonalInformation />,
  // },
  {
    path: routePaths.LOGIN_REGISTER_ID_PATH,
    exact: true,
    name: "LoginRegisterId",
    component: <Register />,
  },
  {
    path: routePaths.LOGIN_REGISTER_PATH,
    name: "LoginRegister",
    component: <Register />,
  },
  {
    path: routePaths.LOGIN_FORGOT_PATH,
    name: "LoginForgot",
    component: <ForgotPassword />,
  },
  {
    path: routePaths.LOGIN_RESET_PATH,
    name: "LoginReset",
    component: <ResetPassword />,
  },
  {
    path: routePaths.FORCE_UPDATE_PASSWORD_ID_PATH,
    name: "Login Force Update",
    component: <ForceUpdatePassword />,
  },
  {
    path: routePaths.EMAIL_VERIFIED_PATH,
    name: "EmailVerificationSuccess",
    component: <EmailVerificationSuccess />,
  },
  {
    path: routePaths.PAGE_NOT_FOUND_PATH,
    name: "PageNotFound",
    component: <PageNotFound />,
  },
  {
    path: routePaths.INVESTOR_PATH,
    name: "Investor",
    component: <Investor />,
  },
  {
    path: routePaths.PROPERTY_PROFILE_PATH,
    name: "PropertyProfile",
    component: <PropertyProfile />,
  },
  {
    path: routePaths.DEMO_MODAL_PATH,
    name: "DemoModal",
    component: <DemoModal />,
  },
  // {
  //   redirectRoute: true,
  //   redirectPath: "/page-not-found",
  //   path: "*",
  //   name: "PageNotFound",
  // },
];

export const guestRoutes = [
  // {
  //   path: routePaths.REWARDS_PATH,
  //   exact: true,
  //   name: "Referral Details",
  //   component: <ReferralDetails />,
  // },
  {
    path: routePaths.PERSONAL_DETAILS_PATH,
    name: "PersonalDetails",
    component: <PersonalInformation />,
  },
  {
    path: routePaths.PROFILE_PATH,
    name: "Profile",
    component: <Profile />,
  },
  {
    path: routePaths.ACCOUNT_SETTINGS_PATH,
    name: "AccountSettings",
    component: <AccountSettings />,
  },
  {
    path: "*",
    name: "404",
    redirectRoute: true,
    redirectPath: routePaths.PERSONAL_DETAILS_PATH,
  },
].concat(publicRoutes);

export const kycVerifiedUserRoutes = [
  {
    path: routePaths.HOME_PATH,
    name: "Home",
    component: <Home />,
  },
  // {
  //   path: routePaths.REWARDS_PATH,
  //   exact: true,
  //   name: "Referral Details",
  //   component: <ReferralDetails />,
  // },
  {
    path: routePaths.WALLET_PATH,
    name: "Wallet",
    component: <Wallet />,
  },
  {
    path: routePaths.NOTIFICATIONS_PATH,
    name: "Notifications",
    component: <Notifications />,
  },
  {
    path: routePaths.TRANSACTION_HISTORY_PATH,
    name: "TransactionHistory",
    component: <TransactionHistory />,
  },
  // {
  //   path: routePaths.REFERRALS_TRANSACTIONS_ID_PATH,
  //   name: "ReferralsTransactions",
  //   component: <ReferralTransactions />,
  // },
  {
    path: routePaths.ACCOUNTS_PATH,
    name: "Accounts",
    component: <Accounts />,
  },
  {
    path: routePaths.PROFILE_PATH,
    name: "Profile",
    component: <Profile />,
  },
  {
    path: routePaths.PORTFOLIO_PATH,
    name: "Portfolio",
    component: <Portfolio />,
  },
  {
    path: routePaths.PROPERTY_DETAILS_ID_PATH,
    name: "PropertyDetailsCard",
    component: <PropertyDetailsCard />,
  },
  {
    path: routePaths.ACCOUNT_SETTINGS_PATH,
    name: "AccountSettings",
    component: <AccountSettings />,
  },
  {
    path: routePaths.PERSONAL_DETAILS_PATH,
    name: "PersonalDetails",
    component: <PersonalInformation />,
  },
  {
    path: routePaths.PROPERTY_MGR_PROPERTY_PROPOSALS_ID_PATH,
    name: "Property Manager Property Proposals",
    component: <Proposals />,
  },
  {
    path: routePaths.PROPERTY_MGR_VIEW_PROPOSAL_PATH,
    name: "Property Manager View Proposal",
    component: <ViewProposal />,
  },
  // {
  //   path: routePaths.REWARDS_PATH,
  //   exact: true,
  //   name: "Referral Details",
  //   component: <ReferralDetails />,
  // },
  {
    path: "*",
    name: "404",
    redirectRoute: true,
    redirectPath: routePaths.INVESTOR_PATH,
  },
  {
    path: routePaths.MOONPAY_DEMO_PATH,
    name: "Moonpay",
    component: <MoonPay />,
  },
].concat(publicRoutes);

export const kycPendingUserRoutes = [
  {
    path: routePaths.HOME_PATH,
    name: "Home",
    component: <Home />,
  },
  // {
  //   path: routePaths.REWARDS_PATH,
  //   exact: true,
  //   name: "Referral Details",
  //   component: <ReferralDetails />,
  // },
  {
    path: routePaths.WALLET_PATH,
    name: "Wallet",
    component: <Wallet />,
  },
  {
    path: routePaths.NOTIFICATIONS_PATH,
    name: "Notifications",
    component: <Notifications />,
  },
  {
    path: routePaths.TRANSACTION_HISTORY_PATH,
    name: "TransactionHistory",
    component: <TransactionHistory />,
  },
  {
    path: routePaths.ACCOUNTS_PATH,
    name: "Accounts",
    component: <Accounts />,
  },
  {
    path: routePaths.PROFILE_PATH,
    name: "Profile",
    component: <Profile />,
  },
  {
    path: routePaths.PROPERTY_DETAILS_ID_PATH,
    name: "PropertyDetailsCard",
    component: <PropertyDetailsCard />,
  },
  {
    path: routePaths.ACCOUNT_SETTINGS_PATH,
    name: "AccountSettings",
    component: <AccountSettings />,
  },
  {
    path: routePaths.PERSONAL_DETAILS_PATH,
    name: "PersonalDetails",
    component: <PersonalInformation />,
  },
  {
    path: routePaths.PROPERTY_MGR_PROPERTY_PROPOSALS_ID_PATH,
    name: "Property Manager Property Proposals",
    component: <Proposals />,
  },
  {
    path: routePaths.PROPERTY_MGR_VIEW_PROPOSAL_PATH,
    name: "Property Manager View Proposal",
    component: <ViewProposal />,
  },
  {
    path: "*",
    name: "404",
    redirectRoute: true,
    redirectPath: routePaths.INVESTOR_PATH,
  },
  {
    path: routePaths.MOONPAY_DEMO_PATH,
    name: "Moonpay",
    component: <MoonPay />,
  },
].concat(publicRoutes);

export const affiliateRoutes = [
  {
    path: routePaths.REWARDS_PATH,
    exact: true,
    name: "Referral Details",
    component: <ReferralDetails />,
  }
].concat(kycVerifiedUserRoutes);

export const pManagersRoutes = [
  {
    path: routePaths.WALLET_PATH,
    name: "Wallet",
    component: <Wallet />,
  },
  {
    path: routePaths.NOTIFICATIONS_PATH,
    name: "Notifications",
    component: <Notifications />,
  },
  {
    path: routePaths.TRANSACTION_HISTORY_PATH,
    name: "TransactionHistory",
    component: <TransactionHistory />,
  },
  {
    path: routePaths.ACCOUNTS_PATH,
    name: "Accounts",
    component: <Accounts />,
  },
  {
    path: routePaths.PROFILE_PATH,
    name: "Profile",
    component: <Profile />,
  },
  {
    path: routePaths.PORTFOLIO_PATH,
    name: "Portfolio",
    component: <PropertyManager />,
  },
  {
    path: routePaths.PROPERTY_MGR_INITIATE_TRANSACTION_PATH,
    name: "Property Manager Initiate Transaction",
    component: <InitiateTransaction />,
  },
  {
    path: routePaths.PROPERTY_MGR_PROPERTY_PROPOSALS_ID_PATH,
    name: "Property Manager Property Proposals",
    component: <Proposals />,
  },
  {
    path: routePaths.PROPERTY_MGR_VIEW_PROPOSAL_PATH,
    name: "Property Manager View Proposal",
    component: <ViewProposal />,
  },
  {
    path: routePaths.PROPERTY_MGR_CREATE_PROPOSAL_PATH,
    name: "Property Manager Create Proposal",
    component: <CreateProposal />,
  },
  {
    path: routePaths.PROPERTY_MGR_RENT_PAYOUT_PATH,
    name: "Property Manager Rent Payout",
    component: <RentPayout />,
  },
  {
    path: routePaths.PROPERTY_DETAILS_ID_PATH,
    name: "Property Manager Property Details",
    component: <PropertyManagerDetails />,
  },
  {
    path: routePaths.ACCOUNT_SETTINGS_PATH,
    name: "AccountSettings",
    component: <AccountSettings />,
  },
  {
    path: routePaths.PERSONAL_DETAILS_PATH,
    name: "PersonalDetails",
    component: <PersonalInformation />,
  },
  // {
  //   path: routePaths.REWARDS_PATH,
  //   exact: true,
  //   name: "Referral Details",
  //   component: <ReferralDetails />,
  // },
  {
    path: "*",
    name: "404",
    redirectRoute: true,
    redirectPath: routePaths.INVESTOR_PATH,
  },
].concat(publicRoutes);

publicRoutes.push({
  redirectRoute: true,
  redirectPath: routePaths.LANDING_PAGE_PATH,
  path: "*",
  name: "Home",
});

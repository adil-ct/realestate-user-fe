import React from "react";

import MKBox from "components/custom/MKBox";
const TopSection = React.lazy(() => import("./top-section"));
const Ticker = React.lazy(() => import("./ticker"));
// const TweetSection = React.lazy(() => import("./tweet-section"));
const InvitationSection = React.lazy(() => import("./invitation-section"));
const OpenBookInvestingSection = React.lazy(
  () => import("./open-book-investing-section"),
);
const AdsBannedSection = React.lazy(() => import("./banned-section"));
// const InvestorsSection = React.lazy(() => import("./investorsSection"));
import CTASection from "components/cta/CTASection";
import FaqSection from "components/faq/FaqSection";

import styles from "./styles";
import SwiperCore, { Autoplay, Navigation, EffectCoverflow } from "swiper";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import ctaBgImage from "../../assets/images/global/cta-home-v2.png";
SwiperCore.use([Autoplay, Navigation, EffectCoverflow]);

const HomePage = () => {
  const classes = styles();

  return (
    <>
      <MKBox className={classes.root}>
        <TopSection />
        <Ticker />
        {/* <TweetSection /> */}
        <InvitationSection />
        <OpenBookInvestingSection />
        <AdsBannedSection />
        <FaqSection />
        <CTASection
          bgImage={ctaBgImage}
          title="Estates were meant to <b>be fought over</b>"
          description="If you’re a Occurrence, your grandkids will be fighting over your estate"
        />
      </MKBox>
    </>
  );
};

export default HomePage;

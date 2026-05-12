import React from "react";
import openBookBg from "../../../assets/images/open-book-section/open-book-bg.png";
import ContractIcon from "../../../components/icons/ContractIcon";
import RealStateAgentIcon from "../../../components/icons/RealStateAgentIcon";
import WorkspacesIcon from "../../../components/icons/WorkspacesIcon";
import AttachMoneyIcon from "../../../components/icons/AttachMoneyIcon";
import StreamIcon from "../../../components/icons/StreamIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import leftIcon from "../../../assets/icons/left.svg";
import rightIcon from "../../../assets/icons/right.svg";
import {
  BgImage,
  CTAButton,
  MobileButtonsContainer,
  NavigationButton,
  OpenBookContainer,
  OpenBookSection,
  OpenBookSubTitle,
  OpenBookTitle,
  Step,
  StepDescription,
  StepNumber,
  StepTitle,
  StepsSwiperContainer,
  StepsWrapper,
} from "./styles";
import { routePaths } from "routes/mainRoutes/routePaths";

const OpenBookInvestingSection = () => {
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <OpenBookSection>
      <BgImage src={openBookBg} alt="Section Background" />
      <OpenBookContainer>
        <OpenBookTitle>
          Open book <b>investing</b>
        </OpenBookTitle>
        <OpenBookSubTitle>
          We&#39;re not throwing away the book. It&#39;s the same story you
          love, but with new characters. Old money assets, new money methods.
        </OpenBookSubTitle>
        <StepsWrapper>
          <Step>
            <ContractIcon />
            <div>
              <StepNumber>1</StepNumber>
              <StepTitle>Send Criteria to Partners</StepTitle>
            </div>
            <StepDescription>
              Institutional level diligence, mastery & transparency are the
              Occurrence foundation. We send our carefully crafted investment
              criteria to our partners.
            </StepDescription>
          </Step>
          <Step>
            <RealStateAgentIcon />
            <div>
              <StepNumber>2</StepNumber>
              <StepTitle>Purchase Property</StepTitle>
            </div>
            <StepDescription>
              Our investment banking backgrounds formed our relentless approach
              to diligence. {"<1% "}of deals considered make it under the
              Occurrence name.
            </StepDescription>
          </Step>
          <Step>
            <WorkspacesIcon />
            <div>
              <StepNumber>3</StepNumber>
              <StepTitle>
                Open the <br />
                Club
              </StepTitle>
            </div>
            <StepDescription>
              Through our investment clubs, you invest and vote on key decisions
              alongside other occurrence, your peers & friends.
            </StepDescription>
          </Step>
          <Step>
            <AttachMoneyIcon />
            <div>
              <StepNumber>4</StepNumber>
              <StepTitle>Earn, Benefit, & Liquidate</StepTitle>
            </div>
            <StepDescription>
              Real time appreciation, monthly rental income, tax benefits. Sell
              after the typical 5-7 year hold, or on our Secondary market
              (coming soon).
            </StepDescription>
          </Step>
          <Step>
            <StreamIcon />
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <StepNumber>5</StepNumber>
              <StepTitle>Experience</StepTitle>
            </div>
            <StepDescription>
              As a diverse community of investors, leaders, creators, &
              influencers, we celebrate both figuratively & literally with
              Occurrence club perks & experiences.
            </StepDescription>
          </Step>
        </StepsWrapper>

        <StepsSwiperContainer>
          <Swiper
            direction={"horizontal"}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={40}
            centeredSlides={true}
            grabCursor={true}
            navigation={{
              nextEl: "#mobile-button-next",
              prevEl: "#mobile-button-prev",
            }}
          >
            <SwiperSlide>
              <Step>
                <ContractIcon />
                <div>
                  <StepNumber>1</StepNumber>
                  <StepTitle>Send Criteria to Partners</StepTitle>
                </div>
                <StepDescription>
                  Institutional level diligence, mastery & transparency are the
                  Occurrence foundation. We send our carefully crafted
                  investment criteria to our partners.
                </StepDescription>
              </Step>
            </SwiperSlide>
            <SwiperSlide>
              <Step>
                <RealStateAgentIcon />
                <div>
                  <StepNumber>2</StepNumber>
                  <StepTitle>Purchase Property</StepTitle>
                </div>
                <StepDescription>
                  Our investment banking backgrounds formed our relentless
                  approach to diligence. {"<1% "}of deals considered make it
                  under the Occurrence name.
                </StepDescription>
              </Step>
            </SwiperSlide>
            <SwiperSlide>
              <Step>
                <WorkspacesIcon />
                <div>
                  <StepNumber>3</StepNumber>
                  <StepTitle>Open the Club</StepTitle>
                </div>
                <StepDescription>
                  Through our investment clubs, you invest and vote on key
                  decisions alongside other occurrence, your peers & friends.
                </StepDescription>
              </Step>
            </SwiperSlide>
            <SwiperSlide>
              <Step>
                <AttachMoneyIcon />
                <div>
                  <StepNumber>4</StepNumber>
                  <StepTitle>Earn, Benefit, & Liquidate</StepTitle>
                </div>
                <StepDescription>
                  Real time appreciation, monthly rental income, tax benefits.
                  Sell after the typical 5-7 year hold, or on our Secondary
                  market (coming soon).
                </StepDescription>
              </Step>
            </SwiperSlide>
            <SwiperSlide>
              <Step>
                <StreamIcon />
                <div>
                  <StepNumber>5</StepNumber>
                  <StepTitle>Experience</StepTitle>
                </div>
                <StepDescription>
                  As a diverse community of investors, leaders, creators, &
                  influencers, we celebrate both figuratively & literally with
                  Occurrence club perks & experiences.
                </StepDescription>
              </Step>
            </SwiperSlide>
          </Swiper>
          <MobileButtonsContainer>
            <NavigationButton id="mobile-button-prev">
              <img src={leftIcon} alt="icon" />
            </NavigationButton>
            <NavigationButton id="mobile-button-next">
              <img src={rightIcon} alt="icon" />
            </NavigationButton>
          </MobileButtonsContainer>
        </StepsSwiperContainer>

        <CTAButton
          style={{ marginBottom: "40px", alignSelf: "center" }}
          to={
            isLoggedIn
              ? routePaths.INVESTOR_PATH
              : routePaths.LOGIN_REGISTER_PATH
          }
        >
          Invest in Real Estate
        </CTAButton>
      </OpenBookContainer>
    </OpenBookSection>
  );
};

export default OpenBookInvestingSection;

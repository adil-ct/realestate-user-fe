import {
  HeroContainer,
  HeroParagraph,
  HeroSection,
  HeroTitle,
  OurProcessSection,
  OurProcessContainer,
  OurProcessTitle,
  OurProcessTitleBlock,
  ProcessStepWrapper,
  ProcessNumber,
  ProcessTitle,
  ProcessTitleRegular,
  ProcessDescriptionWrapper,
  ProcessDescription,
  ImageShadow,
  ProcessImage,
  ProcessTitleDescription,
  JoinOurTeamSection,
  JoinOurTeamTitleWrapper,
  JoinOurTeamTitle,
  JoinOurTeamContainer,
  JoinOurTeamTitleBold,
  JoinOurTeamTitleDescription,
  FormWrapper,
  Input,
  SubmitButton,
} from "./styles";
import processOne from "assets/images/how-it-works/process-one.png";
import processThree from "assets/images/how-it-works/process-three.png";
import FaqSection from "components/faq/FaqSection";
import CTASection from "components/cta/CTASection";
import { useNavigate } from "react-router-dom";
import { routePaths } from "routes/mainRoutes/routePaths";
import { useDispatch } from "react-redux";
import { setEmailEntered } from "store/actions";
import ctaBgImage from "assets/images/global/cta-how-it-works-v2.png";

function HowItWorks() {
  const hasAuthToken = Boolean(localStorage.getItem("authToken"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    dispatch(setEmailEntered(email));
    window.dataLayer.push({ event: "EmailSubmission", email: email });
    navigate(routePaths.LOGIN_REGISTER_PATH);
  };

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroTitle>How it works</HeroTitle>
          <HeroParagraph>
            Buy fractional shares of income-producing rental properties starting
            at $250. Earn a share of monthly rent and property appreciation,
            without managing tenants, maintenance, or paperwork.
          </HeroParagraph>
        </HeroContainer>
      </HeroSection>

      <OurProcessSection>
        <OurProcessTitle>
          Three steps to start
          <OurProcessTitleBlock>From sign-up to first payout.</OurProcessTitleBlock>
        </OurProcessTitle>
        <OurProcessContainer>
          <ProcessStepWrapper>
            <ProcessNumber>1</ProcessNumber>
            <ProcessTitle>
              <ProcessTitleRegular>Browse</ProcessTitleRegular> vetted properties.
            </ProcessTitle>
          </ProcessStepWrapper>
          <ProcessImage src={processOne} alt="Browse properties" />
          <ProcessDescriptionWrapper>
            <ProcessDescription>
              Each property on the marketplace is screened by our acquisitions
              team. We review the local market, rent comps, condition reports,
              and underlying financials before listing.
            </ProcessDescription>
            <ProcessDescription>
              You see the full deal: purchase price, expected annual rent,
              operating expenses, projected cash-on-cash yield, and the share
              price per token. Minimum investment is $250.
            </ProcessDescription>
          </ProcessDescriptionWrapper>
        </OurProcessContainer>
        <OurProcessContainer>
          <ProcessStepWrapper>
            <ProcessNumber>2</ProcessNumber>
            <ProcessTitle>
              <ProcessTitleRegular>Invest</ProcessTitleRegular> in minutes.
            </ProcessTitle>
          </ProcessStepWrapper>
          <ProcessDescriptionWrapper>
            <ProcessDescription>
              Pick how many tokens you want and pay with a debit card, credit
              card, or linked bank account. Card payments settle the same day;
              ACH transfers typically complete in 3–5 business days.
            </ProcessDescription>
            <ProcessDescription>
              Each token represents a fractional ownership interest in the
              property-owning LLC. Holdings appear in your portfolio
              immediately, with a transaction receipt and contract on record.
            </ProcessDescription>
          </ProcessDescriptionWrapper>
        </OurProcessContainer>
        <OurProcessContainer>
          <ProcessStepWrapper>
            <ProcessNumber>3</ProcessNumber>
            <ProcessTitle>
              <ProcessTitleRegular>Earn</ProcessTitleRegular> rent and appreciation.
            </ProcessTitle>
          </ProcessStepWrapper>
          <ImageShadow src={processThree} alt="Earn" />
          <ProcessDescriptionWrapper>
            <div>
              <ProcessTitleDescription>Monthly rental income</ProcessTitleDescription>
              <ProcessDescription>
                Net rent (after maintenance, insurance, property management,
                and taxes) is distributed pro rata to your wallet on the 5th of
                each month. You can withdraw to your bank or reinvest.
              </ProcessDescription>
            </div>
            <div>
              <ProcessTitleDescription>Property appreciation</ProcessTitleDescription>
              <ProcessDescription>
                Token value tracks the underlying property value, re-appraised
                annually. When the property is sold (typical hold: 5–7 years),
                net sale proceeds are distributed to token holders.
              </ProcessDescription>
            </div>
          </ProcessDescriptionWrapper>
        </OurProcessContainer>
      </OurProcessSection>

      <JoinOurTeamSection>
        <JoinOurTeamContainer>
          <JoinOurTeamTitleWrapper>
            <JoinOurTeamTitle>
              Ready to start?{" "}
              <JoinOurTeamTitleBold>Create your account.</JoinOurTeamTitleBold>
            </JoinOurTeamTitle>
            <JoinOurTeamTitleDescription>
              Sign up takes under two minutes. No commitment until you place
              your first order.
            </JoinOurTeamTitleDescription>
            {!hasAuthToken && (
              <FormWrapper onSubmit={onFormSubmit}>
                <Input
                  id="email"
                  autocomplete="email"
                  type="email"
                  placeholder="Email address"
                  name="email"
                />
                <SubmitButton as="button" type="submit">
                  Get started
                </SubmitButton>
              </FormWrapper>
            )}
          </JoinOurTeamTitleWrapper>
        </JoinOurTeamContainer>
      </JoinOurTeamSection>

      <FaqSection />
      <CTASection
        bgImage={ctaBgImage}
        title="Start with <b>$250.</b>"
        description="Build a real-estate portfolio one property at a time, on your schedule."
      />
    </>
  );
}

export default HowItWorks;

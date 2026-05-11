import {
  HeroContainer,
  HeroExtra,
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
  StepsContainer,
  StepWrapper,
  StepNumber,
  StepTitle,
  StepDescription,
  StepDescriptionBold,
  TypewriterWrapper,
} from "./styles";
import processOne from "assets/images/how-it-works/process-one.png";
import processTwo from "assets/icons/process-two.svg";
import processThree from "assets/images/how-it-works/process-three.png";
import FaqSection from "components/faq/FaqSection";
import CTASection from "components/cta/CTASection";
import { Collapse } from "react-collapse";
import { useNavigate } from "react-router-dom";
import { routePaths } from "routes/mainRoutes/routePaths";
import { useDispatch } from "react-redux";
import { setEmailEntered } from "store/actions";
import ctaBgImage from "assets/images/global/cta-how-it-works-v2.png";
import Typewriter from "typewriter-effect";

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
          <HeroTitle>Affluency Requires Fluency</HeroTitle>
          <TypewriterWrapper>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: ["Manjati", "Magnát", "Magnatas", "Mogol", "Invest Tech"],
              }}
            />
          </TypewriterWrapper>
          <HeroParagraph>
            When you dream in a language, you cross the line between
            conversational and fluent. We dream of Census data, accretive
            leverage, and price-to-rent dislocation.
          </HeroParagraph>
          <HeroExtra>
            We don&#39;t just speak real estate, we speak Invest Tech, the long lost
            dialect of legacy.
          </HeroExtra>
        </HeroContainer>
      </HeroSection>

      <OurProcessSection>
        <OurProcessTitle>
          Our process, translated.
          <OurProcessTitleBlock>The executive brief.</OurProcessTitleBlock>
        </OurProcessTitle>
        <OurProcessContainer>
          <ProcessStepWrapper>
            <ProcessNumber>1</ProcessNumber>
            <ProcessTitle>
              <ProcessTitleRegular>Our properties perform</ProcessTitleRegular>{" "}
              under pressure.
            </ProcessTitle>
          </ProcessStepWrapper>
          <img src={processOne} alt="Process One" />
          <ProcessDescriptionWrapper>
            <ProcessDescription>
              Our boots on the ground partners (investor brokerages, property
              managers, and local vendors) bring us thousands of properties, and
              less than 1% are ultimately purchased. Our analysts relentlessly
              scrutinize, underwrite, and structure each one before seeking
              final approval from our investment committee.
            </ProcessDescription>
            <ProcessDescription>
              Uncompromising diligence brings a deal to committee. However, a
              closing question determines whether a deal combusts or proceeds:
              “Would we put our mothers&#39; savings into this deal?”
            </ProcessDescription>
          </ProcessDescriptionWrapper>
        </OurProcessContainer>
        <OurProcessContainer>
          <ProcessStepWrapper>
            <ProcessNumber>2</ProcessNumber>
            <ProcessTitle>
              <ProcessTitleRegular>
                Deploy capital alongside
              </ProcessTitleRegular>{" "}
              other invest tech.
            </ProcessTitle>
          </ProcessStepWrapper>
          <img src={processTwo} alt="Process Two" />
          <ProcessDescriptionWrapper>
            <ProcessDescription>
              Take your seat at the investment committee. You direct, allocate,
              and deploy capital into properties of your choosing. Cash buys you
              coffee, capital buys you conviction.
            </ProcessDescription>
          </ProcessDescriptionWrapper>
        </OurProcessContainer>
        <OurProcessContainer>
          <ProcessStepWrapper>
            <ProcessNumber>3</ProcessNumber>
            <ProcessTitle>
              <ProcessTitleRegular>Keep score in your</ProcessTitleRegular>{" "}
              Invest Tech portfolio.
            </ProcessTitle>
          </ProcessStepWrapper>
          <ImageShadow src={processThree} alt="Process Three" />
          <ProcessDescriptionWrapper>
            <div>
              <ProcessTitleDescription>Track your wins</ProcessTitleDescription>
              <ProcessDescription>
                Appreciation, monthly income, tax benefits, and sales proceeds
                are seamlessly delivered to give you a real time picture of your
                properties.
              </ProcessDescription>
            </div>
            <div>
              <ProcessTitleDescription>
                Direct the plays
              </ProcessTitleDescription>
              <ProcessDescription>
                You&#39;re not just a spectator of your portfolio; you&#39;re an
                active participant. You&#39;ll have the chance to vote on key
                decisions alongside your fellow invest tech.
              </ProcessDescription>
            </div>
          </ProcessDescriptionWrapper>
        </OurProcessContainer>
      </OurProcessSection>

      <JoinOurTeamSection>
        <JoinOurTeamContainer>
          <JoinOurTeamTitleWrapper>
            <JoinOurTeamTitle>
              For our full playbook,{" "}
              <JoinOurTeamTitleBold>join the team.</JoinOurTeamTitleBold>
            </JoinOurTeamTitle>
            <JoinOurTeamTitleDescription>
              Add your email below to unlock our full playbook.
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
                  Put Me in Coach
                </SubmitButton>
              </FormWrapper>
            )}
          </JoinOurTeamTitleWrapper>

          <Collapse isOpened={hasAuthToken}>
            <StepsContainer>
              <StepWrapper>
                <StepNumber>1</StepNumber>
                <StepTitle>Determine National Tailwinds</StepTitle>
                <StepDescription>
                  First, we aggregate raw data around population growth,
                  population shifts, and employment trends across the US to
                  better understand the fundamentals that will directly affect
                  returns within each target market.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>2</StepNumber>
                <StepTitle>Target Top-Performing Metro Areas</StepTitle>
                <StepDescription>
                  Sharpening our analysis, we target the best performing
                  metro-areas, and begin local research to substantiate demand
                  trends.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>3</StepNumber>
                <StepTitle>Analyze Local Supply vs. Demand</StepTitle>
                <StepDescription>
                  Once we feel confident in the demand drivers shaping our
                  operating business plans, we look into supply. What is the
                  current inventory in the market? What does future supply look
                  like? What submarkets within each market are becoming
                  increasingly saturated with supply versus those that are just
                  starting to grow?
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>4</StepNumber>
                <StepTitle>Craft “Buy-Box” with Acquisition Criteria</StepTitle>
                <StepDescription>
                  Now that we have conviction on a metropolitan area and
                  submarket, we utilize recent sales and leases to form a target
                  purchase price, asset type, square footage, rental rate,
                  vintage, and more. We derive necessary rental rates to achieve
                  yields based on interest rates pre-quoted from our lending
                  partners.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>5</StepNumber>
                <StepTitle>
                  Inventory Partners Scour Markets for Properties Fulfilling
                  “Buy Box”
                </StepTitle>
                <StepDescription>
                  On a monthly basis, we provide this “buy box” to our inventory
                  partners (network of investor brokerages, property managers,
                  licensed vendors, and more), empowering each partner to scour
                  the market for the most attractive opportunities (sourcing
                  both on and off market deals).
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>6</StepNumber>
                <StepTitle>
                  Narrow Thousands of Properties to ~10 Properties
                </StepTitle>
                <StepDescription>
                  Our partners provide a list of thousands of properties with
                  opinions of value and yields based on our buy box. We narrow
                  down the pool to ~100 opportunities with the most attractive
                  fundamentals in the most competitive markets. We underwrite
                  each one. We poke holes in the business plan, we stress test
                  the underwriting, we form capital structures, and we
                  ultimately decide on ~10 properties to learn more about.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>7</StepNumber>
                <StepTitle>
                  Gather Qualitative Information from Seller&#39;s Agent (Narrow
                  Further)
                </StepTitle>
                <StepDescription>
                  Of the 10, about half are ruled out due to both qualitative
                  and quantitative information derived from initial screenings
                  with Sellers and Sellers&#39; agents. The 5 remaining
                  properties are ranked and toured by our team of local licensed
                  professionals.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>8</StepNumber>
                <StepTitle>
                  Take Properties to Investment Committee for Final Approval
                  (submit offer)
                </StepTitle>
                <StepDescription>
                  At the Invest Tech investment committee, we only push properties
                  through with a unanimous decision. During the committee, we go
                  through all of the data previously researched around market,
                  asset type, capital structure, underwriting, and more. Once a
                  property has been thoroughly scrutinized and approved, we put
                  an offer out.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>9</StepNumber>
                <StepTitle>Negotiate Any Repairs with Seller</StepTitle>
                <StepDescription>
                  Once accepted, we have a week long inspection period, during
                  which, we send certified professionals to inspect the property
                  for any and all flaws. If any deal-breakers arise, we walk
                  away free and clear. If minor repairs are needed, we negotiate
                  with the owner to facilitate those repairs prior to
                  transferring ownership. Once both parties agree, we execute a
                  final contract with these new terms.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>10</StepNumber>
                <StepTitle>Close on Property</StepTitle>
                <StepDescription>
                  During the next 21 days, we form the LLC entity that will act
                  as the buyer of the property and the investment club. We
                  capitalize the deal including our costs for maintenance
                  reserves, vacancy reserves, miscellaneous closing costs and
                  Invest Tech&#39;s platform fee. We engage our setup and property
                  management teams to get the property furnished and leased.
                  Ultimately, we perform the final walk-through, and we close on
                  the property.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>11</StepNumber>
                <StepTitle>Offer Property on Invest Tech Platform</StepTitle>
                <StepDescription>
                  At this point, we meticulously package the diligence to date
                  from our deal memos into the “property cards” that are offered
                  on platform. We make sure our users have all of the
                  information to make the most informed decision possible. We
                  then offer the property equity for purchase.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>12</StepNumber>
                <StepTitle>
                  Distribute Benefits (Appreciation, Rental Income, Tax
                  Benefits)
                </StepTitle>
                <StepDescription>
                  Once you purchase ownership in the property, you receive all
                  of the benefits directly to your dashboard including:
                  appreciation, rental income, tax benefits. Any major
                  operational decisions are put to a vote. The property managers
                  will interface with your investment club to make sure all
                  details are conveyed and options presented. Finally, a vote
                  will be held, and real world outcomes will be determined by
                  on-platform events.
                </StepDescription>
              </StepWrapper>
              <StepWrapper>
                <StepNumber>13</StepNumber>
                <StepTitle>Sell Property</StepTitle>
                <StepDescription>
                  Sell your property holdings in 1 of 2 ways to receive Sales
                  Proceeds
                </StepDescription>
                <StepDescription>
                  After a typical 5-7 year hold period, our team will sell the
                  property at the market value with your input. Once sold,
                  proceeds will be distributed pro rata to your Invest Tech dashboard.
                </StepDescription>
                <StepDescription>
                  <StepDescriptionBold>Coming Soon:</StepDescriptionBold>
                  Sell your share of the property on a fully liquid secondary
                  market at the asset value.
                </StepDescription>
              </StepWrapper>
            </StepsContainer>
          </Collapse>
        </JoinOurTeamContainer>
      </JoinOurTeamSection>

      <FaqSection />
      <CTASection
        bgImage={ctaBgImage}
        title="What will happen to your <b>$500 in 5 years?</b>"
        description="In a bank account with 3% inflation $500 becomes $429. Assuming latest property projections, $500 becomes $1,525"
      />
    </>
  );
}

export default HowItWorks;

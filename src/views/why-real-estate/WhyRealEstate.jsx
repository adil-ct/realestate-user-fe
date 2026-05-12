import { useState } from "react";
import {
  ContainerSingleFamily,
  CardsRow,
  ContainerChartImage,
  ContainerTextSingleFamily,
  TextDate,
  TextDescWhyReal,
  TextTitleWhyReal,
  SectionSingleFamily,
  AcordionContainer,
  AcordionSeparator,
  CardsRow2,
  ContainerReturn,
  TitleReturn,
  TitleReturn1,
  TitleReturn2,
  ContainerReturnImage,
  ContainerTextReturn,
  TextCardReturn,
  TitleCardReturn,
  SectionReturn,
  GoDownIconWrapper,
  WhyRealEstateHeroContainer,
  WhyRealEstateHeroDescription,
  WhyRealEstateHeroSection,
  WhyRealEstateHeroTitle,
  WhyRealEstateHeroTitleWrapper,
  ChartVideo,
  WhyRealEstateChartContainer,
  WhyRealEstateChartContent,
  WhyRealEstateChartDescription,
  WhyRealEstateChartDetail,
  WhyRealEstateChartSection,
  WhyRealEstateChartTitle,
} from "./styles";
import { Collapse } from "react-collapse";
import { Button } from "../../components/button/CTAButton.style";
import FaqSection from "../../components/faq/FaqSection";
import CTASection from "../../components/cta/CTASection";
import GoDownIcon from "../../components/icons/GoDownIcon";
import chart1 from "../../assets/images/why-real-estate/chart-green-1.png";
import chart2 from "../../assets/images/why-real-estate/chart-green-2.png";
import apreciation from "../../assets/images/why-real-estate/apreciation.png";
import monthly from "../../assets/images/why-real-estate/monthly-v2.png";
import less from "../../assets/images/why-real-estate/less.png";
import leverage from "../../assets/images/why-real-estate/leverage.png";
import chartVideo from "../../assets/videos/pie-chart-animation.mp4";
import { routePaths } from "routes/mainRoutes/routePaths";
import ctaBgImage from "assets/images/global/cta-why-real-v2.png";

function WhyRealEstate() {
  const isLoggedIn = !!localStorage.getItem("authToken");
  function AcordionItem({ title, line1, line2 }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <AcordionContainer onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h4 style={{ fontWeight: "600" }}>{title}</h4>
          {isOpen ? <b>-</b> : <b>+</b>}
        </div>
        <Collapse isOpened={isOpen}>
          <p>{line1}</p>
          <p>{line2}</p>
        </Collapse>
      </AcordionContainer>
    );
  }

  return (
    <>
      <WhyRealEstateHeroSection>
        <WhyRealEstateHeroContainer>
          <WhyRealEstateHeroTitleWrapper>
            <WhyRealEstateHeroTitle>
              We all need a <b>place to live</b>
            </WhyRealEstateHeroTitle>
            <WhyRealEstateHeroDescription>
              A staple of life needs to be a staple of your portfolio.
            </WhyRealEstateHeroDescription>
          </WhyRealEstateHeroTitleWrapper>
        </WhyRealEstateHeroContainer>
        <GoDownIconWrapper href="#chart">
          <GoDownIcon />
        </GoDownIconWrapper>
      </WhyRealEstateHeroSection>
      <WhyRealEstateChartSection id="chart">
        <WhyRealEstateChartContainer>
          <WhyRealEstateChartContent>
            <WhyRealEstateChartTitle>
              How much should you <b>allocate to real estate?</b>
            </WhyRealEstateChartTitle>
            <WhyRealEstateChartDescription>
              From 1985 to 2021, two prized Yale economists went head to head
              over portfolio strategy. One allocated to real estate, one
              didn&#39;t. Who prevailed, becoming the foremost strategy coined
              the “Yale Method?”
            </WhyRealEstateChartDescription>
            <WhyRealEstateChartDetail>
              The one that allocated 20% to real estate.
            </WhyRealEstateChartDetail>
          </WhyRealEstateChartContent>
          <ChartVideo
            playsInline
            src={chartVideo}
            muted
            autoPlay
            loop
            controls={false}
          />
        </WhyRealEstateChartContainer>
      </WhyRealEstateChartSection>
      <SectionSingleFamily>
        <ContainerSingleFamily>
          <CardsRow>
            <ContainerChartImage>
              <img src={chart1} alt="image chart" width="100%" />
            </ContainerChartImage>
            <ContainerTextSingleFamily>
              <TextDate>1993 - 2023</TextDate>
              <TextTitleWhyReal marginTop="44px">
                Single Family Rentals returned{" "}
                <span style={{ fontWeight: "600" }}>
                  39% more than the S&P 500.
                </span>
              </TextTitleWhyReal>
              <TextDescWhyReal marginTop="44px">
                Leveraging 50+ years of data from the US Federal Reserve and the
                Case-Shiller Home Index, we analyzed total returns of single
                family rentals vs. other asset classes.
              </TextDescWhyReal>
              <Button
                maxWidth="230px"
                marginTop="44px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Invest in Real Estate
              </Button>
            </ContainerTextSingleFamily>
          </CardsRow>

          <CardsRow2>
            <ContainerTextSingleFamily>
              <TextDate>1993 - 2023</TextDate>
              <TextTitleWhyReal marginTop="44px">
                45% Less Volatility,{" "}
                <span style={{ fontWeight: "600" }}>44% Higher Returns.</span>
              </TextTitleWhyReal>
              <TextDescWhyReal marginTop="44px">
                What do Ryan Reynolds and Blake Lively have to do with real
                estate? Ryan Reynolds & Blake Lively&#39;s relationship is to
                society what Real Estate returns are to investors, stable and
                sexy.
              </TextDescWhyReal>
              <AcordionSeparator>
                <AcordionItem
                  title="Less Volatile."
                  line1="Like their relationship, real estate is a picture of stability. Standard Deviation is a measure of variability or volatility around an investment’s average return. The lower the standard deviation the less volatile the return (the better). The S&P 500 has an 82% higher volatility (standard deviation) than real estate."
                  line2="In the case of Ryan, Blake, and real estate returns, stability doesn’t mean there’s a lack of sex appeal."
                />
                <AcordionItem
                  title="Higher Returns."
                  line1="Over a 15-year period, real estate on average returned 511% (44% higher annually) than the S&P 500 during the same period."
                  line2="Over the same period, Ryan & Blake had 4 kids, created $12.9 billion in market value, bought or started 5 companies, became owners of 2 sports teams, and were the highest paid seat fillers at Hollywood award shows (Gossip Girl and Green Lantern don't scream Emmy)."
                />
              </AcordionSeparator>

              <Button
                maxWidth="230px"
                marginTop="44px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Invest in Real Estate
              </Button>
            </ContainerTextSingleFamily>
            <ContainerChartImage>
              <img src={chart2} alt="image chart" width="100%" />
            </ContainerChartImage>
          </CardsRow2>
        </ContainerSingleFamily>
      </SectionSingleFamily>

      {/* //-------------------------------> section white ---------------> */}

      <SectionReturn>
        <ContainerReturn>
          <TitleReturn>
            <TitleReturn1>Occurrence:</TitleReturn1>
            <TitleReturn2>The Return(s) of Real Estate</TitleReturn2>
          </TitleReturn>
          <CardsRow>
            <ContainerReturnImage>
              <img src={apreciation} alt="image 1" />
            </ContainerReturnImage>
            <ContainerTextReturn>
              <TitleCardReturn>Appreciation</TitleCardReturn>
              <TextCardReturn>
                Buy land, they&#39;re not making any more! Over the past 36
                years, property values increased 377% (4.4% per year) or 1,185%
                (8.5% per year) with an 80% mortgage.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Invest in Real Estate
              </Button>
            </ContainerTextReturn>
          </CardsRow>

          <CardsRow2>
            <ContainerTextReturn>
              <TitleCardReturn>Monthly Income</TitleCardReturn>
              <TextCardReturn>
                Monthly income comes from the latin words “to-éarn” and
                “cashflõw.” Owners earn income from tenant rent minus upkeep.
                Rent typically increases faster than expenses, so income
                increases over time.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Invest in Real Estate
              </Button>
            </ContainerTextReturn>
            <ContainerReturnImage>
              <img src={monthly} alt="image 1" />
            </ContainerReturnImage>
          </CardsRow2>

          <CardsRow>
            <ContainerReturnImage>
              <img src={less} alt="image 1" />
            </ContainerReturnImage>
            <ContainerTextReturn>
              <TitleCardReturn>Less Taxes</TitleCardReturn>
              <TextCardReturn>
                The tax code in the US was written to incentivize marriage,
                procreation, and property ownership. Since our lawyers are
                adamant that we can&#39;t legally offer the first two, let us
                help you with the latter.
                <br />
                <br />
                Ever wonder how billionaires don&#39;t pay taxes? Property
                taxes, mortgage interest, operating costs, and depreciation are
                all passed along to help lower your tax bill.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Invest in Real Estate
              </Button>
            </ContainerTextReturn>
          </CardsRow>

          <CardsRow2>
            <ContainerTextReturn>
              <TitleCardReturn>Leverage</TitleCardReturn>
              <TextCardReturn>
                People take out debt, occurrence take out leverage. Borrowing
                funds to purchase an investment property means less of your own
                capital down. With rental income paying borrowing costs and
                property&#39;s appreciating on the whole value, leverage
                amplifies returns.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Invest in Real Estate
              </Button>
            </ContainerTextReturn>
            <ContainerReturnImage>
              <img src={leverage} alt="image 1" />
            </ContainerReturnImage>
          </CardsRow2>
        </ContainerReturn>
      </SectionReturn>
      <FaqSection />
      <CTASection
        bgImage={ctaBgImage}
        title="Invest like the <b>Ivies</b>"
        description="Allocate 20% to real estate without ever stepping foot in New Haven."
      />
    </>
  );
}

export default WhyRealEstate;

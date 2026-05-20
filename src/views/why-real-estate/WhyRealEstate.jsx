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
              Why <b>real estate?</b>
            </WhyRealEstateHeroTitle>
            <WhyRealEstateHeroDescription>
              Real estate is the largest asset class in the world, valued at
              roughly $380 trillion globally. It has historically delivered
              steady income and appreciation with lower volatility than public
              equities.
            </WhyRealEstateHeroDescription>
          </WhyRealEstateHeroTitleWrapper>
        </WhyRealEstateHeroContainer>
        <GoDownIconWrapper href="#returns">
          <GoDownIcon />
        </GoDownIconWrapper>
      </WhyRealEstateHeroSection>

      <SectionSingleFamily id="returns">
        <ContainerSingleFamily>
          <CardsRow>
            <ContainerChartImage>
              <img src={chart1} alt="Returns chart" width="100%" />
            </ContainerChartImage>
            <ContainerTextSingleFamily>
              <TextDate>1992 – 2024</TextDate>
              <TextTitleWhyReal marginTop="44px">
                US residential real estate returned an average of{" "}
                <span style={{ fontWeight: "600" }}>
                  10.6% per year, including rent and price growth.
                </span>
              </TextTitleWhyReal>
              <TextDescWhyReal marginTop="44px">
                Based on the FHFA House Price Index combined with average net
                rental yields tracked by NCREIF over the same period. Past
                performance does not guarantee future results.
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
                Browse properties
              </Button>
            </ContainerTextSingleFamily>
          </CardsRow>

          <CardsRow2>
            <ContainerTextSingleFamily>
              <TextDate>2000 – 2024</TextDate>
              <TextTitleWhyReal marginTop="44px">
                Lower volatility than{" "}
                <span style={{ fontWeight: "600" }}>stocks or REITs.</span>
              </TextTitleWhyReal>
              <TextDescWhyReal marginTop="44px">
                Direct residential real estate has historically shown about
                one-third the year-over-year volatility of the S&P 500 and
                roughly half the volatility of publicly traded REITs, because
                home values are tied to local rent and replacement cost rather
                than daily trading sentiment.
              </TextDescWhyReal>
              <AcordionSeparator>
                <AcordionItem
                  title="Lower drawdowns"
                  line1="Between 2000 and 2024, the S&P 500 had two drawdowns deeper than 30% (2008 and 2020). The Case-Shiller National Home Price Index peaked at a 27% drawdown over the same span and recovered fully by 2017."
                  line2="Rental income continued during both downturns, cushioning total returns for direct owners."
                />
                <AcordionItem
                  title="Income is contractual"
                  line1="Rent is governed by a signed lease, not market sentiment. Stabilized single-family rentals in the US run at roughly 95% average occupancy according to RentCafe."
                  line2="This makes the cash-flow portion of return more predictable than dividends, which companies can cut at any time."
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
                Browse properties
              </Button>
            </ContainerTextSingleFamily>
            <ContainerChartImage>
              <img src={chart2} alt="Volatility chart" width="100%" />
            </ContainerChartImage>
          </CardsRow2>
        </ContainerSingleFamily>
      </SectionSingleFamily>

      <SectionReturn>
        <ContainerReturn>
          <TitleReturn>
            <TitleReturn1>Four ways</TitleReturn1>
            <TitleReturn2>real estate pays you back</TitleReturn2>
          </TitleReturn>
          <CardsRow>
            <ContainerReturnImage>
              <img src={apreciation} alt="Appreciation" />
            </ContainerReturnImage>
            <ContainerTextReturn>
              <TitleCardReturn>Appreciation</TitleCardReturn>
              <TextCardReturn>
                US home prices have risen on average 4.3% per year over the past
                30 years (FHFA HPI, 1994–2024). Tokens you hold are revalued
                annually to reflect the latest appraisal.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Browse properties
              </Button>
            </ContainerTextReturn>
          </CardsRow>

          <CardsRow2>
            <ContainerTextReturn>
              <TitleCardReturn>Monthly rental income</TitleCardReturn>
              <TextCardReturn>
                Tenants pay rent every month. After expenses (taxes, insurance,
                maintenance, property management), net rental income is
                distributed pro rata to token holders on the 5th of the
                following month.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Browse properties
              </Button>
            </ContainerTextReturn>
            <ContainerReturnImage>
              <img src={monthly} alt="Monthly income" />
            </ContainerReturnImage>
          </CardsRow2>

          <CardsRow>
            <ContainerReturnImage>
              <img src={less} alt="Tax advantages" />
            </ContainerReturnImage>
            <ContainerTextReturn>
              <TitleCardReturn>Tax advantages</TitleCardReturn>
              <TextCardReturn>
                The property-owning LLC passes through deductions for property
                tax, mortgage interest, operating costs, and depreciation. These
                typically offset a significant share of rental income on your
                K-1, which we file and send each March. Consult a tax advisor
                for your specific situation.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Browse properties
              </Button>
            </ContainerTextReturn>
          </CardsRow>

          <CardsRow2>
            <ContainerTextReturn>
              <TitleCardReturn>Leverage</TitleCardReturn>
              <TextCardReturn>
                Most properties on the platform carry a 50–65% LTV mortgage from
                a community bank. Rental income covers debt service while the
                tenant effectively pays down principal, building equity for you
                month over month.
              </TextCardReturn>
              <Button
                maxWidth="220px"
                to={
                  isLoggedIn
                    ? routePaths.INVESTOR_PATH
                    : routePaths.LOGIN_REGISTER_PATH
                }
              >
                Browse properties
              </Button>
            </ContainerTextReturn>
            <ContainerReturnImage>
              <img src={leverage} alt="Leverage" />
            </ContainerReturnImage>
          </CardsRow2>
        </ContainerReturn>
      </SectionReturn>
      <FaqSection />
      <CTASection
        bgImage={ctaBgImage}
        title="Add real estate to your <b>portfolio.</b>"
        description="Start with a single property. Minimum investment is $250."
      />
    </>
  );
}

export default WhyRealEstate;

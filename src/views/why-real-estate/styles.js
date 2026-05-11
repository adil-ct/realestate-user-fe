import styled from "styled-components";
import bgHero from "../../assets/images/why-real-estate/bg-why.png";
import bgHeroMobile from "../../assets/images/why-real-estate/bg-mobile.png";

export const WhyRealEstateHeroSection = styled.section`
  min-height: 796px;
  background: url(${bgHero});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  position: relative;
  @media (max-width: 768px) {
    background: url(${bgHeroMobile});

    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
`;

export const WhyRealEstateHeroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-inline: 20px;
  }
`;

export const WhyRealEstateHeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 600px;
  margin-top: 206px;
`;

export const WhyRealEstateHeroTitle = styled.h1`
  font-size: 72px;
  line-height: 1.2em;
  color: #4360AB;
  text-align: center;
  font-weight: 400;
  font-family: PPFragment-Sans;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const WhyRealEstateHeroDescription = styled.p`
  font-size: 22px;
  text-align: center;
  color: #4360AB;
  font-weight: 300;
  line-height: 1.4em;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const GoDownIconWrapper = styled.a`
  position: absolute;
  bottom: 90px;
  left: 0;
  right: 0;
  margin-inline: auto;
  width: min-content;
`;

export const SectionSingleFamily = styled.section`
  background: linear-gradient(0deg, #4360AB 0%, #01281c 100%);
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerSingleFamily = styled.section`
  color: #ffff;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 124px;
  padding-inline: 80px;
  padding-block: 124px;
  @media (max-width: 1200px) {
    padding-inline: 40px;
    padding-block: 80px;
    gap: 80px;
  }
  @media (max-width: 900px) {
    padding-inline: 20px;
  }
`;

export const CardsRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 80px;
  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const CardsRow2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 80px;
  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin-top: 0px;
  }
`;

export const ContainerChartImage = styled.div`
  padding-inline: 56px;
  padding-block: 10px;
  width: 50%;
  @media (max-width: 900px) {
    padding-inline: 20px;
    width: 100%;
  }
`;
export const ContainerTextSingleFamily = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  max-width: 510px;
  @media (max-width: 900px) {
    padding-inline: 0px;
    width: 100%;
  }
`;

export const TextDate = styled.p`
  font-size: 16px;
  line-height: 120%;
  opacity: 0.5;
`;

export const TextTitleWhyReal = styled.p`
  margin-top: ${(props) => props.marginTop || "0px"};
  font-size: 42px;
  font-weight: 400;
  line-height: 120%;
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const TextDescWhyReal = styled.p`
  margin-top: ${(props) => props.marginTop || "0px"};
  font-size: 16px;
  line-height: 160%;
  opacity: 0.7;
  margin-bottom: 20px;
`;

export const AcordionContainer = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  justify-content: space-between;
  width: 100%;
  transition: all 0.5s ease;

  cursor: pointer;
  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 20px;
    > h4 {
      font-size: 18px;
      @media (max-width: 450px) {
        font-size: 16px;
      }
    }
  }
  p {
    font-size: 16px;
    opacity: 0.7;
    margin-top: 20px;
    line-height: 130%;
  }
`;

export const AcordionSeparator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
//-------------------------------> section white --------------->

export const SectionReturn = styled.section`
  width: 100%;
  background: #f0eeeb;
  display: flex;
  justify-content: center;
`;

export const ContainerReturn = styled.section`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  max-width: 1440px;
  color: #4360AB;
  gap: 80px;
  padding-inline: 80px;
  padding-block: 124px;
  @media (max-width: 1200px) {
    padding-inline: 40px;
    padding-block: 80px;
    gap: 80px;
  }
  @media (max-width: 900px) {
    padding-inline: 20px;
    gap: 40px;
  }
`;

export const TitleReturn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleReturn1 = styled.p`
  text-align: center;
  font-size: 48px;
  line-height: 120%;
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;
export const TitleReturn2 = styled.p`
  text-align: center;
  font-size: 48px;
  line-height: 120%;
  font-weight: 800;
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const ContainerReturnImage = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContainerTextReturn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  max-width: 510px;
  gap: 44px;
  @media (max-width: 900px) {
    padding-inline: 0px;
    width: 100%;
  }
  @media (max-width: 450px) {
    gap: 20px;
  }
`;

export const TitleCardReturn = styled.p`
  font-size: 40px;
  font-weight: 800;
  line-height: 120%;
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const TextCardReturn = styled.p`
  color: #51585f;
  font-size: 18px;
  line-height: 160%;
`;

export const WhyRealEstateChartSection = styled.section`
  background-color: white;
  padding: 124px 0;
`;

export const WhyRealEstateChartContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding-inline: 20px;
  }
`;

export const WhyRealEstateChartContent = styled.div`
  max-width: 510px;
`;

export const WhyRealEstateChartTitle = styled.h2`
  color: #4360AB;
  font-size: 48px;
  line-height: 1.2em;
  max-width: 467px;
  font-weight: 400;
  font-family: PPFragment-Sans;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const WhyRealEstateChartDescription = styled.p`
  margin-top: 44px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #51585f;
  line-height: 1.6em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const WhyRealEstateChartDetail = styled.b`
  color: #4360AB;
  font-size: 22px;
  line-height: 1.6em;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ChartVideo = styled.video`
  max-width: 715px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

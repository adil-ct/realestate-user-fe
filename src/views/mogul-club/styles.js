import styled from "styled-components";
import bg from "../../assets/images/mogul-club/banner-club.png";
import bgCta from "../../assets/images/mogul-club/banner-cta.png";
import Marquee from "react-fast-marquee";

export const HeroSection = styled.section`
  background-color: #000;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 760px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 1440px;
  padding-inline: 80px;
  padding-block: 40px;
  border-radius: 16px;
  gap: 32px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 1250px) {
    padding-inline: 40px;
    margin-inline: 20px;
  }
  @media (max-width: 540px) {
    padding-inline: 20px;
    gap: 20px;
  }
`;

export const MogulClubSubtitle = styled.span`
  text-align: center;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: "ss01" on;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.72px;
`;

export const MogulClubTitle = styled.h1`
  text-align: center;
  font-size: 104px;
  line-height: 120%;
  @media (max-width: 800px) {
    font-size: 52px;
  }
`;

export const GoDownIconWrapper = styled.a`
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  margin-inline: auto;
  width: min-content;
`;

export const MogulClubDescription = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 140%;
  opacity: 0.7;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const OriginStorySection = styled.section`
  padding-bottom: 80px;
  padding-top: 50px;
  background-color: #ffff;
`;

export const OriginStoryMarqueeContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
`;

export const ImagesMarqueeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  height: 350px;
  @media (max-width: 500px) {
    height: 300px;
    width: 500px;
  }
`;

export const ImageMarquee = styled.img`
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  align-self: ${(props) => (props.align ? props.align : "flex-start")};
  z-index: ${(props) => (props.isAbove ? 10 : "auto")};
  position: relative;
`;

export const WordsMarquee = styled(Marquee)`
  width: 100%;
  padding-top: 30px;
  position: relative;
  z-index: 10;
`;

export const Word = styled.p`
  color: #4360AB;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  padding-inline: 20px;
`;

export const OriginStoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 1440px;
  padding-inline: 80px;
  margin: 0 auto;
  margin-top: 120px;

  @media (max-width: 1250px) {
    padding-inline: 40px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 540px) {
    flex-direction: column;
    padding-inline: 20px;
    gap: 20px;
  }
`;

export const OriginStoryText = styled.p`
  color: #4360AB;
  text-align: justify;
  font-size: 22px;
  font-weight: 300;
  line-height: 160%;
  max-width: 526px;
`;

export const OriginStoryImage = styled.img``;

export const ExperienceContainerFull = styled.div`
  display: flex;
  width: 100%;
  background-color: #f0eeeb;
`;
export const ExperienceContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding-inline: 80px;
  padding-block: 124px;
  margin: 0 auto;
  background-color: #f0eeeb;
  color: #4360AB;
  gap: 189px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0px;
    align-items: center;
    padding-inline: 20px;
    padding-block: 80px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 354px;

  p:nth-child(odd) {
    font-size: 48px;
    line-height: 120%;
  }
  p:nth-child(even) {
    font-size: 18px;
    line-height: 160%;
    color: #51585f;
  }
  @media (max-width: 800px) {
    justify-content: center;
    text-align: center;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const RightElement = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
`;
export const RightElementText = styled.div`
  display: flex;
  flex-direction: column;
  p:nth-child(odd) {
    font-family: PP Fragment;
    font-size: 32px;
    line-height: 120%;
  }
  p:nth-child(even) {
    font-family: PP Fragment;
    font-size: 18px;
    line-height: 160%;
    color: #51585f;
  }
`;

export const FormSection = styled.div`
  padding: 124px 0px;
  background-image: url(${bgCta});
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    padding: 40px 0px;
  }
`;

export const TitleForm = styled.h3`
  color: #ffff;
  font-size: 56px;
  font-weight: normal;
  max-width: 690px;
  text-align: center;

  @media (max-width: 850px) {
    font-size: 28px;
    max-width: 340px;
  }
`;

export const IntroducingSection = styled.div`
  background: #fff;
  color: #4360AB;
  padding-block: 80px;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

export const IntroducingTextContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  max-width: 780px;
  p:nth-child(odd) {
    font-size: 48px;
    line-height: 120%;
    @media (max-width: 800px) {
      font-size: 24px;
      padding-inline: 20px;
      text-align: center;
    }
  }
  p:nth-child(even) {
    font-size: 72px;
    line-height: 120%;
    font-weight: 800;
    @media (max-width: 800px) {
      font-size: 52px;
      padding-inline: 20px;
      text-align: center;
    }
  }
`;

export const IntroducingDesc = styled.p`
  text-align: center;
  font-family: PP Fragment;
  font-size: 18px;
  line-height: 160%;
  color: #51585f;
  max-width: 780px;
  @media (max-width: 800px) {
    padding-inline: 20px;
  }
`;

export const GalerySection = styled.div`
  position: relative;
  width: 100%;
  max-width: 1900px;
  display: flex;
  overflow: auto;
`;

export const ItemGalery = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px;
  height: 585px;
  display: flex;
  flex: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 20px;
  @media (max-width: 1150px) {
    min-width: 360px;
  }

  p:nth-child(odd) {
    text-align: center;
    font-size: 32px;
    line-height: 110%;
    max-width: 230px;
    z-index: 90;
    @media (max-width: 1150px) {
      font-size: 24px;
    }
  }
  p:nth-child(even) {
    text-align: center;
    line-height: 110%;
    z-index: 90;
    opacity: 0.7;
    @media (max-width: 1150px) {
      font-size: 14px;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(9, 12, 14, 0) 0%, #090c0e 100%);
  @media (max-width: 1150px) {
    min-width: 1440px;
    max-width: 1920px;
  }
`;

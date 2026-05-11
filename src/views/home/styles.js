import { createStyles, makeStyles } from "@mui/styles";
import styled from "styled-components";
import { Button } from "../../components/button/CTAButton.style";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding-inline: 80px;
  margin: 0 auto;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};

  @media (max-width: 768px) {
    padding-inline: 20px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #4360AB;
  padding-top: 180px;
  padding-bottom: 80px;
  min-height: 750px;
  position: relative;
`;

export const HeroTitle = styled.h1`
  color: white;
  display: inline;
  font-size: 72px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HeroDescription = styled.p`
  color: white;
  font-size: 18px;
  opacity: 0.7;
  max-width: 572px;
  line-height: 140%;
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const KPIsContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -100px;
  max-width: 1062px;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding-inline: 20px;
`;

export const KPIWrapper = styled.div`
  border-radius: 16px;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  background-color: white;
`;

export const KPISource = styled.span`
  font-family: PPFragment-Sans;
  color: #6a7379;
  font-size: 14px;
  line-height: 120%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const KPIsItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const KPIItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;

  > span {
    font-size: 36px;
    line-height: 120%;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  > p {
    font-size: 16px;
    line-height: 120%;
    font-family: PPFragment-Sans;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const HeroBrandsContainer = styled.div`
  width: 100%;
  background-color: #f0eeeb;
  padding-top: 135px;
  padding-bottom: 56px;
  padding-inline: 80px;
  overflow: visible;
`;

export const VideoSection = styled.section`
  background-color: #4360AB;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* @media (max-width: 1250px) {
    padding-inline: 40px;
  }
  @media (max-width: 540px) {
    padding-inline: 20px;
  } */
`;

export const VideoContainer = styled.div`
  background-color: #4360AB;
  color: #ffff;
  position: relative;
  display: flex;
  gap: 80px;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  padding-top: 146px;
  padding-bottom: 146px;
  padding-inline: 80px;
  @media (max-width: 1200px) {
    padding-inline: 40px;
    gap: 40px;
  }
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding-top: 60px;
    padding-bottom: 40px;
    padding-inline: 20px;
    gap: 40px;
    justify-content: center;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleSlider = styled.p`
  font-size: 48px;
  line-height: 120%;
  max-width: 433px;
  min-height: 280px;
  @media (max-width: 600px) {
    font-size: 32px;
    min-height: 100px;
  }
  @media (max-width: 490px) {
    font-size: 32px;
    min-height: 160px;
  }
`;

export const SecondaryText = styled.p`
  font-size: 20px;
  line-height: 120%;
  opacity: 0.7;
  max-width: 433px;
  min-height: 80px;
  @media (max-width: 600px) {
    font-size: 18px;
    min-height: 40px;
  }
  @media (max-width: 490px) {
    font-size: 18px;
    min-height: 80px;
  }
`;

export const ContentSlider = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
    padding-inline: 20px;
  }
`;

export const ContainerPageMarker = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Marker = styled.div`
  opacity: ${(prop) => prop.opacity || 0.5};
  width: 16px;
  height: 4px;
  background: #fff;
`;

export const NavigationButton = styled.div`
  position: absolute;
  opacity: ${(prop) => prop.opacity || 1};
  top: 49%;
  right: -5%;
  width: 24px;
  height: 24px;
  z-index: 99;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const NavigationButtonRight = styled.div`
  position: absolute;
  opacity: ${(prop) => prop.opacity || 1};
  top: 49%;
  left: -5%;
  width: 24px;
  height: 24px;
  z-index: 99;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const OpenBookSection = styled.section`
  position: relative;
  background: #4360AB;
`;

export const BgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const OpenBookContainer = styled.div`
  max-width: 1440px;
  padding-inline: 80px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  padding-top: 26%;

  @media (max-width: 768px) {
    padding-inline: 20px;
  }
`;

export const OpenBookTitle = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 1.04em;
  text-align: center;
  color: #ffffff;
`;

export const OpenBookSubTitle = styled.h3`
  font-size: 20px;
  color: #ffffff;
  line-height: 1.4em;
  font-weight: 400;
  opacity: 0.7;
  text-align: center;
  max-width: 770px;
  margin-inline: auto;
  margin-top: 24px;
`;

export const StepsWrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
  margin-top: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Step = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StepNumber = styled.span`
  font-size: 24px;
  color: #ffffff;
  line-height: 1.25em;
  opacity: 0.5;
`;

export const StepTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 8px;
  line-height: 1.25em;
`;

export const StepDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4em;
  opacity: 0.7;
  color: #ffffff;
`;

export const CTAButton = styled(Button)`
  position: relative;
  width: 210px;
  padding: 0;
  margin-top: 80px;
  align-self: center;
`;

export const ImageGray = styled.img`
  filter: grayscale(100%);
  transition: all 200ms ease;
  &:hover {
    filter: grayscale(0%);
  }
`;

const styles = makeStyles((theme) =>
  createStyles(
    {
      root: {
        backgroundColor: theme.palette.primary.main,
        display: "block",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    { name: "home-page-base-view" }
  )
);

export default styles;

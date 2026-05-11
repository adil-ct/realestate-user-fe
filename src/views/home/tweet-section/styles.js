import { createStyles, makeStyles } from "@mui/styles";
import styled from "styled-components";

export const VideoSection = styled.section`
  background-color: #4360AB;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  height: 700px;
  @media (max-width: 1200px) {
    padding-inline: 40px;
    gap: 40px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-inline: 40px;
    gap: 40px;
    justify-content: center;
    height: fit-content;
  }
  @media (max-width: 500px) {
    height: 700px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-inline: 20px;
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
  @media (max-width: 490px) {
    gap: 36px;
  }
`;

export const TitleSlider = styled.p`
  font-size: 48px;
  line-height: 120%;
  max-width: 433px;
  @media (max-width: 600px) {
    font-size: 28px;
  }
  @media (max-width: 490px) {
    font-size: 28px;
  }
`;

export const SecondaryText = styled.p`
  font-size: 20px;
  line-height: 120%;
  opacity: 0.7;
  max-width: 433px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 490px) {
    font-size: 16px;
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

const styles = makeStyles((theme) =>
  createStyles(
    {
      root: {
        background: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "460px",
        padding: "3% 1% 2% 1%",
      },
      mainContainer: {
        height: "100%",
      },
      carouselContainer: {
        paddingTop: "2%",
      },
      tweetCarousel: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 1%",

        "& .carousel-status": {
          display: "none",
        },

        "& slider": {
          transform: "none",
        },

        "& li.slide": {
          padding: "0 4%",

          [theme.breakpoints.down("sm")]: {
            padding: "0 8%",
          },
        },

        [theme.breakpoints.down("sm")]: {
          padding: "5% 2% 2% 2%",
        },
      },
      carouselItem: {},
    },
    { name: "home-page-tweet-section-view" }
  )
);

export default styles;

import styled from "styled-components";
import bg from "../../assets/images/about-us/bg-text.png";

export const FirstSection = styled.section`
  background-color: #4360AB;
  color: #ffff;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 124px;
  @media (max-width: 540px) {
    padding-inline: 20px;
  }

  > div {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapTitleGray = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  position: relative;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0px;
  }
`;
export const Scratched = styled.div`
  position: absolute;
  top: 26px;
  right: -10px;
  width: 280px;
  @media (max-width: 1000px) {
    top: initial;
    bottom: 18px;
  }
  @media (max-width: 540px) {
    width: 200px;
    bottom: 6px;
  }
`;

export const Title1 = styled.p`
  font-size: 62px;
  line-height: 120%;
  margin-top: 32px;
  @media (max-width: 540px) {
    font-size: 42px;
    text-align: center;
  }
`;
export const Title2 = styled.p`
  font-size: 62px;
  line-height: 120%;
  font-weight: 800;
  display: inline;
  white-space: nowrap;
  @media (max-width: 540px) {
    font-size: 42px;
  }
`;
export const Title3 = styled.p`
  font-size: 62px;
  line-height: 120%;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.3);
  display: inline;
  @media (max-width: 540px) {
    font-size: 42px;
  }
`;

export const ParagraphAbout = styled.p`
  margin-top: ${(props) => props.marginTop || "0px"};
  font-size: 18px;
  line-height: 160%;
  font-weight: 300;
  max-width: 488px;
  text-align: justify;
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

export const ImageAbsolute = styled.img`
  position: absolute;
  top: ${(prop) => prop.top || "0"};
  left: ${(prop) => prop.left || "initial"};
  right: ${(prop) => prop.right || "0"};
  z-index: 20;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const ContainerGreen = styled.section`
  background-color: #046149;
  color: #ffff;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  align-items: center;
  padding-top: 146px;
  padding-bottom: 146px;
  padding-inline: 80px;
  background: linear-gradient(0deg, #4360AB 0%, #01281c 100%);
  @media (max-width: 1250px) {
    padding-inline: 40px;
  }
  @media (max-width: 540px) {
    padding-inline: 20px;
  }
`;

export const TitleGreen = styled.p`
  font-size: 48px;
  line-height: 120%;
  font-weight: 400px;
  @media (max-width: 540px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding-inline: 80px;
  gap: 80px;
  @media (max-width: 1250px) {
    padding-inline: 40px;
    gap: 40px;
  }
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 540px) {
    padding-inline: 20px;
    gap: 20px;
  }
`;

export const Picture = styled.img`
  height: 524px;

  @media (max-width: 850px) {
    height: fit-content;
  }
`;

export const TextContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 56px;
  padding-top: 56px;
  padding-bottom: 56px;
  @media (max-width: 1250px) {
    padding-left: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (max-width: 540px) {
    padding-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .role-text {
    font-size: 20px;
    line-height: 120%;
    opacity: 0.5;
    margin-top: 16px;
    @media (max-width: 540px) {
      font-size: 16px;
    }
  }
  .desc-text {
    font-size: 18px;
    line-height: 160%;
    margin-top: 16px;
    @media (max-width: 540px) {
      font-size: 16px;
    }
  }
`;

export const NameAboutUs = styled.p`
  font-size: 32px;
  font-weight: 800;
  margin-top: 8px;
  @media (max-width: 540px) {
    font-size: 24px;
    font-weight: 600;
  }
`;
export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > a img {
    margin-top: 8px;
  }
`;

export const ContainerHistoryText = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  padding-inline: 32px;
  padding-top: 22px;
  padding-bottom: 22px;
  background-image: url(${bg});
  background-size: cover;
  background-position: top;
  @media (max-width: 540px) {
    padding-inline: 14px;
  }
`;

export const HistoryText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
`;

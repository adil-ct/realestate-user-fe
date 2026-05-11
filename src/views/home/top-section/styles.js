import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #4360AB;
  position: relative;
`;
export const HeroContainer2 = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1022px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1022px) {
    padding-inline: 20px;
  }
  @media (max-width: 769px) {
    top: 38%;
    height: fit-content;
  }
`;

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

export const LayoutContainerAbsolute = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  text-align: center;
  padding-inline: 20px;
  padding-block: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 769px) {
    padding-block: 60px;
    height: 350px;
  }
  @media (max-width: 500px) {
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  display: inline;
  font-size: 72px;
  font-weight: normal;
  white-space: nowrap;
  word-spacing: 5px;
  margin: 0px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 52px;
  }
`;
export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 0px;
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
    gap: 44px;
  }
`;

export const KPIItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  > span {
    font-size: 36px;
    line-height: 120%;
    color: #4360AB;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  > p {
    font-size: 16px;
    line-height: 120%;
    font-family: "PP Fragment-Sans";
    color: #4360AB;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

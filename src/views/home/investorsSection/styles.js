import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #e4e2df;
  color: #4360AB;
  padding-top: 124px;
  gap: 80px;
  align-items: center;
`;

export const ContainerText = styled.div`
  display: flex;
  padding-inline: 80px;
  max-width: 1440px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 800px) {
    padding-inline: 20px;
    align-items: center;
  }
`;

export const Title = styled.p`
  font-size: 48px;
  line-height: 120%;
  max-width: 420px;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  max-width: 460px;
`;

export const WrapLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  padding-inline: 80px;
  gap: 40px;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    padding-inline: 20px;
  }
`;

export const NavigationButton = styled.div`
  position: absolute;
  top: 35%;
  right: 5%;
  width: 50px;
  height: 50px;
  z-index: 99;
  opacity: ${(prop) => prop.opacity || 0.4};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  user-select: none;
  transition: opacity 0.3s;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavigationButtonRight = styled(NavigationButton)`
  left: 5%;
`;

export const WrapSwipper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  max-width: 1920px;
  padding-bottom: 40px;
  &:hover ${NavigationButton} {
    opacity: 1;
  }
`;

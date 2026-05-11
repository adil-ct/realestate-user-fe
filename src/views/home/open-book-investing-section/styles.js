import styled from "styled-components";
import { Button } from "../../../components/button/CTAButton.style";

export const OpenBookSection = styled.section`
  position: relative;
  background: #000;
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

  @media (max-width: 850px) {
    display: none;
  }
`;

export const StepsSwiperContainer = styled.div`
  display: none;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 850px) {
    display: block;
  }
`;

export const MobileButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  width: 100%;
  margin-top: 20px;
`;

export const NavigationButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
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
  font-family: "PP Fragment-Sans";
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
  margin-top: 50px;
  transition: all 0.2s ease;
  font-family: "PP Fragment-Sans";
  font-size: 14px;
  padding: 14px 24px;
  text-align: center;

  &:hover {
    background-color: #1145d6;
  }

  @media (max-width: 850px) {
    margin-top: 32px;
    width: 100%;
    margin-bottom: 40px;
    align-self: center;
  }
`;

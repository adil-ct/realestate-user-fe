import styled from "styled-components";
import heroBg from "../../assets/images/how-it-works/background-image.png";
import { Button } from "../../components/button/CTAButton.style";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: 0 80px;
  gap: 32px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const HeroSection = styled.section`
  min-height: 796px;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-size: 22px;
  line-height: 1.2em;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const TypewriterWrapper = styled.span`
  span {
    font-size: 104px !important;
    font-weight: 800 !important;
    line-height: 1em !important;
    color: #ffffff !important;

    @media (max-width: 768px) {
      font-size: 48px !important;
    }
  }
`;

export const HeroParagraph = styled.p`
  font-size: 22px;
  line-height: 1.4em;
  color: #ffffff;
  font-weight: 300;
  max-width: 579px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeroExtra = styled.b`
  font-size: 22px;
  color: #ffffff;
  line-height: 1.4em;
  font-weight: 800;
  max-width: 507px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const OurProcessSection = styled.section`
  padding: 124px 0;
  display: flex;
  flex-direction: column;
  gap: 124px;
  background-color: #f0eeeb;

  @media (max-width: 768px) {
    gap: 48px;
  }
`;

export const OurProcessTitle = styled.h2`
  font-size: 48px;
  line-height: 1.2em;
  font-weight: 800;
  text-align: center;
  padding: 0 24px;
  color: #4360AB;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const OurProcessTitleBlock = styled.span`
  display: block;
  font-weight: 400;
`;

export const OurProcessContainer = styled.div`
  display: flex;
  gap: 24px;
  max-width: 1440px;
  width: 100%;
  padding: 0 80px;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProcessStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProcessNumber = styled.b`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2em;
  color: #046149;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const ProcessTitle = styled.h2`
  font-size: 32px;
  line-height: 1.2em;
  font-weight: 800;
  max-width: 302px;
  color: #4360AB;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
`;
export const ProcessTitleRegular = styled.span`
  font-weight: 400;
`;

export const ProcessDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px;
  gap: 24px;
  max-width: 411px;

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

export const ProcessDescription = styled.p`
  font-size: 18px;
  color: #51585f;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProcessTitleDescription = styled.b`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.6em;
  margin-bottom: 4px;
  color: #4360AB;
`;

export const ImageShadow = styled.img`
  border-radius: 24px;
  margin-bottom: -100px;
  @media (max-width: 768px) {
    margin-bottom: -90px;
  }
`;

export const JoinOurTeamSection = styled.section`
  background-color: #f0eeeb;
  padding-bottom: 124px;
`;

export const JoinOurTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const JoinOurTeamTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 642px;
  gap: 32px;
  align-items: center;
  margin: 0 auto;
`;

export const JoinOurTeamTitle = styled.h2`
  max-width: 500px;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  line-height: 1.2em;
  color: #4360AB;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const JoinOurTeamTitleBold = styled.b`
  display: block;
`;

export const JoinOurTeamTitleDescription = styled.p`
  font-size: 18px;
  color: #51585f;
  text-align: center;
`;

export const FormWrapper = styled.form`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 8px 8px 8px 24px;
  background-color: #ffffff;
  backdrop-filter: blur(8px);
  border-radius: 1000px;
  border: 1px solid #d8e0e5;
  width: 100%;
  height: 58px;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 0px 0px 2px rgba(35, 88, 245, 0);
  transition: all 200ms;

  ::placeholder {
    color: #6a7379;
  }
  :hover {
    border-color: #4360AB;
  }
  :focus {
    border-color: #2358f5;
    box-shadow: 0px 0px 0px 2px rgba(35, 88, 245, 0.2);
  }
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 42px;
`;

export const SubmitButtonSuccess = styled.img`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 32px;
`;

export const StepsContainer = styled.div`
  margin-top: 124px;

  div:nth-child(even) {
    margin-left: 1px !important;
    margin-right: auto !important;
    padding-left: 0px !important;
    padding-right: 104px;
    border-left: none !important;
    border-right: 1px solid rgba(8, 11, 13, 0.2);
    align-items: flex-end;

    * {
      text-align: right;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 104px;
  gap: 24px;
  border-left: 1px solid rgba(8, 11, 13, 0.2);
  width: 50%;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 !important;
    border: none !important;
  }
`;

export const StepNumber = styled.b`
  color: #046149;
  font-size: 32px;
  line-height: 1.2em;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const StepTitle = styled.h2`
  font-size: 32px;
  line-height: 1.2em;
  font-weight: 400;
  color: #4360AB;
  max-width: 432px;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const StepDescription = styled.p`
  font-size: 18px;
  line-height: 1.6em;
  color: rgba(8, 11, 13, 0.7);
  max-width: 432px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const StepDescriptionBold = styled.span`
  display: block;
  font-size: 16px;
  color: #4360AB;
  margin-bottom: 4px;
`;

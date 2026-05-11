import styled from "styled-components";
import bg from "assets/images/global/cta-home-v2.png";

export const Section = styled.section`
  padding: 124px 0px;
  background-image: url(${(props) => (props.image ? props.image : bg)});
  background-repeat: no-repeat;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-position: center;
  background-size: cover;
  @media (max-width: 850px) {
    padding: 60px 0px;
  }
`;

export const Title = styled.h3`
  color: #ffff;
  font-size: 56px;
  font-weight: normal;
  max-width: 670px;
  text-align: center;

  @media (max-width: 850px) {
    font-size: 28px;
    max-width: 340px;
    padding-inline: 20px;
  }
`;

export const Description = styled.p`
  color: #ffff;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.7;
  text-align: center;
  @media (max-width: 850px) {
    padding-inline: 20px;
  }
`;

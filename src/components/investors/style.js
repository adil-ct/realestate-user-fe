import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 24px 64px 0px rgba(29, 35, 41, 0.1);
  max-height: ${({ isActive }) => (isActive ? "460px" : "fit-content")};
  @media (max-width: 800px) {
    max-width: 300px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  filter: ${({ isGrayscale }) => (isGrayscale ? "grayscale(100%)" : "none")};
`;

export const CardTextContent = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 500px) {
    padding: 24px;
    gap: 16px;
  }
`;
export const CardTextWarp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;
export const CardText1 = styled.p`
  font-size: 24px;
  font-weight: 800;
  line-height: 110%;
`;
export const CardText2 = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 120%;
  color: #6a7379;
`;
export const CardText3 = styled.p`
  font-size: 16px;
  line-height: 160%;
`;

export const CardWarpIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

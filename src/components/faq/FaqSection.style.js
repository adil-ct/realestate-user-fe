import styled from "styled-components";

export const Section = styled.section`
  background-color: white;
  width: 100%;
  padding-top: 124px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const Title = styled.h3`
  color: #4360AB;
  font-size: 32px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 80px;
  font-family: PPFragment-Sans;
  font-weight: 400;
`;

export const FaqsList = styled.div`
  max-width: 842px;
  width: 100%;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    padding: 0px 60px;
  }

  @media (max-width: 540px) {
    padding: 0px 20px;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #bcc5cc;

  > header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    color: #4360AB;
  }

  h4 {
    font-family: "PP Fragment-Sans";
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-family: "PP Fragment-Sans";
    font-weight: 400;
    font-size: 14px;
    margin-top: 24px;
    color: #4360AB;
  }
`;

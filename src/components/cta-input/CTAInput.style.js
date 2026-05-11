import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  height: 60px;
  padding: 8px;
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 30px;
  gap: 8px;

  @media (max-width: 850px) {
    max-width: 340px;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  font-family: "PP Fragment-Sans";
  font-weight: 400;
  height: 100%;
  border-radius: 30px;
  padding: 8px;
  display: flex;
  border: none;
  flex: 1;
  width: 100%;
`;

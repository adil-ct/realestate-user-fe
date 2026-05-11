import styled from "styled-components";

export const CustonSlider = styled.input.attrs({ type: "range" })`
  width: 150px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 16px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #92D4C0 0%, #92D4C0 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background: #fff;
    border-radius: 50%;
    /* box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5); */
  }
`;

export const ButtonSum = styled.button`
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  color: #2358f5;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f4f4f4;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

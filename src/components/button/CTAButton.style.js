import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  padding: 14px 24px;
  border-radius: 30px;
  border: none;
  background-color: #2358f5;
  color: white;
  font-size: 14px;
  text-align: center;
  font-family: "PP Fragment-Sans";
  font-weight: 800;
  cursor: pointer;
  max-width: ${(props) => props.maxWidth || "auto"};
  margin-top: ${(props) => props.marginTop || "initial"};
  transition: all 0.3s ease;

  &:hover {
    background-color: #1340c6;
  }

  @media (max-width: 374px) {
    font-weight: 600;
    white-space: nowrap;
    padding: 10px 16px;
  }
`;

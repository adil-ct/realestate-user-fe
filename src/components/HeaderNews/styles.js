import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 99;
  padding: 0px 12px;
  margin-top: ${(props) => (props.$display ? "0px" : "-40px")};
  transition: all 0.5s ease;
`;

export const TextNews = styled.p`
  color: #4360AB;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const TextNewsMobile = styled.p`
  color: #4360AB;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 500;
  display: none;

  @media (max-width: 750px) {
    display: block;
  }
`;

export const ButtonNews = styled(Link)`
  padding: 4px 12px;
  border-radius: 100px;
  border: none;
  background-color: #2358f5;
  color: white;
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
  font-family: "PP Fragment-Sans";
  font-weight: 800;
  cursor: pointer;
  max-width: ${(props) => props.maxWidth || "auto"};
  margin-top: ${(props) => props.marginTop || "initial"};
  transition: all 0.3s ease;

  @media (max-width: 750px) {
    display: none;
  }

  &:hover {
    background-color: #1340c6;
  }
`;

export const SirenImg = styled.img`
  @media (max-width: 750px) {
    display: none;
  }
`;

export const LinkBanner = styled(Link)`
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
  font-family: "PP Fragment-Sans";
  border-bottom: 1px solid #f5f5f5;
  color: #1340c6;
  font-weight: 600;

  @media (max-width: 750px) {
    display: none;
  }

  &:hover {
    border-bottom: 1px solid #1340c6;
  }
`;

import styled from "styled-components";

export const MosaicContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 700px;
  opacity: 0.6;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const ImageMosaic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
`;

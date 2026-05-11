import React from "react";
import Marquee from "react-fast-marquee";
import styles, { HeroBrandsContainer, ImageItem } from "./styles";

import {
  Media1,
  Media2,
  Media3,
  Media4,
  Media5,
  Media6,
  Media7,
  Media8,
} from "constants/assets";

const MediaTicker = () => {
  const classes = styles();
  const mediaImages = [
    Media1,
    Media2,
    Media3,
    Media4,
    Media5,
    Media6,
    Media7,
    Media8,
    Media1,
    Media2,
    Media3,
    Media4,
    Media5,
    Media6,
    Media7,
    Media8,
  ];

  return (
    <HeroBrandsContainer>
      <Marquee className={classes.imageContainer} autoFill="true" speed="20">
        {mediaImages.map((image, index) => (
          <ImageItem src={image} key={`img-${index}`} loading="lazy" />
        ))}
      </Marquee>
    </HeroBrandsContainer>
  );
};

export default MediaTicker;

import React, { useEffect, useState } from "react";
import { ImageMosaic, ImageWrapper, MosaicContainer } from "./style";
import img2 from "../../assets/images/mosaic/m2.jpg";
import img6 from "../../assets/images/mosaic/m6.jpg";
import img8 from "../../assets/images/mosaic/m8.jpg";
import img10 from "../../assets/images/mosaic/m10.jpg";
import img11 from "../../assets/images/mosaic/m11.jpg";
import img12 from "../../assets/images/mosaic/m12.jpg";
import img13 from "../../assets/images/mosaic/m13.jpg";
import img15 from "../../assets/images/mosaic/m15.jpg";
import img21 from "../../assets/images/mosaic/m21.jpg";
import img29 from "../../assets/images/mosaic/m29.jpg";
import img30 from "../../assets/images/mosaic/m30.jpg";
import img36 from "../../assets/images/mosaic/m36.jpg";

const Mosaic = () => {
  const mosaicImages = [
    [img6, img13],
    [img2, img15],
    [img8, img21],
    [img10, img29],
    [img11, img30],
    [img12, img36],
  ];

  const [currentIndex, setCurrentIndex] = useState({
    display: [0, 0, 0, 0, 0, 0],
    line: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((old) => {
        // const randomLine = Math.floor(Math.random() * 6);
        const randomLine = old.line;
        const newArray = Array.from(old.display);
        if (newArray[randomLine] < 1) {
          newArray[randomLine] += 1;
        } else {
          newArray[randomLine] = 0;
        }

        return { display: newArray, line: old.line < 5 ? old.line + 1 : 0 };
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MosaicContainer>
      {mosaicImages.map((item, index) => (
        <ImageWrapper key={index}>
          {item.map((subItem, subIndex) => {
            return (
              <ImageMosaic
                key={subIndex * 11}
                alt={`Image`}
                src={subItem}
                loading="lazy"
                style={{
                  opacity: currentIndex.display[index] === subIndex ? 1 : 0,
                }}
              />
            );
          })}
        </ImageWrapper>
      ))}
    </MosaicContainer>
  );
};

export default Mosaic;

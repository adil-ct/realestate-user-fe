import React from "react";
import {
  HeroContainer,
  HeroDescription,
  HeroTitle,
  KPIItem,
  KPISource,
  KPIWrapper,
  KPIsContainer,
  KPIsItemsContainer,
  LayoutContainerAbsolute,
  WrapTitle,
  HeroContainer2,
} from "./styles";
import CTAInput from "../../../components/cta-input/CTAInput";
import Mosaic from "../../../components/home/Mosaic";

const TopSection = () => {
  return (
    <HeroContainer>
      <Mosaic />
      <HeroContainer2>
        <LayoutContainerAbsolute align="center">
          <WrapTitle>
            <HeroTitle>Real Estate</HeroTitle>
            <HeroTitle style={{ fontWeight: "600" }}>Investing</HeroTitle>
          </WrapTitle>

          <HeroDescription>
            Wall Street Founders. Vetted Properties. Appreciation. Monthly
            Income. Tax Benefits. <b>No Bul$*#!</b>
          </HeroDescription>
          <CTAInput />
        </LayoutContainerAbsolute>
      </HeroContainer2>
      <KPIsContainer>
        <KPIWrapper>
          <KPIsItemsContainer>
            <KPIItem>
              <span>$4.4 Trillion</span>
              <p>Single Family Rental Market</p>
            </KPIItem>
            <KPIItem>
              <span>40%</span>
              <p>of Avg. Millionaire Portfolio</p>
            </KPIItem>
            <KPIItem>
              <span>20%</span>
              <p>of Recommended Portfolio</p>
            </KPIItem>
          </KPIsItemsContainer>
          <KPISource>
            Sources: Nuveen Real Estate, The Federal Reserve, Yale Method
          </KPISource>
        </KPIWrapper>
      </KPIsContainer>
    </HeroContainer>
  );
};

export default TopSection;

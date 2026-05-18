import React from "react";
import { routePaths } from "routes/mainRoutes/routePaths";

import {
  BottomLink,
  BottomLinks,
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterDivider,
  FooterLogoWrapper,
  FooterSection,
  FooterTagline,
  GridItem,
  GridItemTitle,
  GridLink,
  GridLinksContainer,
  LinksGrid,
  Text,
  TextContainer,
} from "./styles";
import Logo from "components/Logo";

const Footer = () => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  const productLinks = [
    { name: "Marketplace", link: routePaths.INVESTOR_PATH, external: false },
    { name: "Portfolio", link: routePaths.PORTFOLIO_PATH, external: false },
  ];

  const companyLinks = [
    {
      name: "How it Works",
      link: routePaths.HOW_IT_WORKS_PATH,
      external: false,
    },
    {
      name: "Why Real Estate",
      link: routePaths.WHY_REAL_ESTATE_PATH,
      external: false,
    },
  ];

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          {/* Brand */}
          <FooterLogoWrapper>
            <div>
              <Logo tone="dark" height={44} />
              <FooterTagline>
                Fractional real estate investing &mdash; where cash becomes
                capital.
              </FooterTagline>
            </div>
          </FooterLogoWrapper>

          {/* Link columns */}
          <LinksGrid>
            <GridItem>
              <GridItemTitle>Product</GridItemTitle>
              <GridLinksContainer>
                {productLinks.map((l) => (
                  <GridLink key={l.name} to={l.link}>
                    {l.name}
                  </GridLink>
                ))}
              </GridLinksContainer>
            </GridItem>

            <GridItem>
              <GridItemTitle>Company</GridItemTitle>
              <GridLinksContainer>
                {companyLinks.map((l) => (
                  <GridLink key={l.name} to={l.link}>
                    {l.name}
                  </GridLink>
                ))}
              </GridLinksContainer>
            </GridItem>

            <GridItem>
              <GridItemTitle>Account</GridItemTitle>
              <GridLinksContainer>
                {isAuthenticated ? (
                  <>
                    <GridLink to={routePaths.PROFILE_PATH}>Profile</GridLink>
                    <GridLink to={routePaths.PERSONAL_DETAILS_PATH}>Personal Info</GridLink>
                    <GridLink to={routePaths.ACCOUNT_SETTINGS_PATH}>Settings</GridLink>
                  </>
                ) : (
                  <>
                    <GridLink to={routePaths.LOGIN_PATH}>Login</GridLink>
                    <GridLink to={routePaths.LOGIN_REGISTER_PATH}>Register</GridLink>
                  </>
                )}
              </GridLinksContainer>
            </GridItem>

            <GridItem>
              <GridItemTitle>Support</GridItemTitle>
              <GridLinksContainer>
                <GridLink to={routePaths.NOTIFICATIONS_PATH}>
                  Notifications
                </GridLink>
                <GridLink to={routePaths.ACCOUNT_SETTINGS_PATH}>
                  Settings
                </GridLink>
              </GridLinksContainer>
            </GridItem>
          </LinksGrid>
        </FooterContent>

        <FooterDivider />

        {/* Legal disclaimer */}
        <TextContainer>
          <Text>
            This site is operated by Occurrence, Inc.
            (&ldquo;Occurrence&rdquo;), which is not a registered broker-dealer
            or investment advisor. Nothing on this website should be construed
            as an offer to sell, solicitation of an offer to buy, or a
            recommendation in respect of a security. All investments involve
            risk and may result in partial or total loss.
          </Text>
        </TextContainer>

        <FooterDivider />

        <FooterBottom>
          <Text style={{ opacity: 1 }}>
            © {new Date().getFullYear()} Occurrence Inc. All rights reserved.
          </Text>
          <BottomLinks>
            <BottomLink href="#">Privacy Policy</BottomLink>
            <BottomLink href="#">Terms of Use</BottomLink>
            <BottomLink href="#">Disclosures</BottomLink>
          </BottomLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;

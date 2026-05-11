import React from "react";
// import bottomLogo from "../../assets/images/MOGUL_LOGO_WHITE.svg";
// Logo removed for whitelabeling

// Relative imports
// import {
//   INSTAGRAM_LINK,
//   TWITTER_LINK,
//   LINKEDIN_LINK,
//   YOUTUBE_LINK,
//   TERMS_AND_CONDITION,
//   HELP_LINK,
//   PRIVACY_LINK,
//   DISCLOSURES_LINK,
// } from "constants/env";
import {
  // BottomImage,
  FooterContainer,
  FooterContent,
  FooterHeading,
  FooterHeadingBold,
  FooterLogoWrapper,
  FooterSection,
  // GridItem,
  // GridItemTitle,
  // GridLink,
  // GridLinksContainer,
  // LinksGrid,
  Text,
  // TextContainer,
  // NormalLink,
} from "./styles";
// import instagram from "../../assets/images/social/instagram.svg";
// import linkedin from "../../assets/images/social/linkedin.svg";
// import x from "../../assets/images/social/x-logo.svg";
// import youtube from "../../assets/images/social/youtube.svg";
// import { routePaths } from "routes/mainRoutes/routePaths";

const Footer = () => {
  // const socialLinks = [
  //   {
  //     id: 1,
  //     icon: <img src={instagram} alt="Instagram" />,
  //     link: INSTAGRAM_LINK,
  //     name: "Instagram",
  //   },
  //   {
  //     id: 2,
  //     icon: <img src={x} alt="X" />,
  //     link: TWITTER_LINK,
  //     name: "Twitter",
  //   },
  //   {
  //     id: 3,
  //     icon: <img src={linkedin} alt="LinkedIn" />,
  //     link: LINKEDIN_LINK,
  //     name: "Linkedin",
  //   },
  //   {
  //     id: 4,
  //     icon: <img src={youtube} alt="Youtube" />,
  //     link: YOUTUBE_LINK,
  //     name: "Youtube",
  //   },
  // ];

  // const productLinks = [
  //   {
  //     id: 1,
  //     name: "Properties",
  //     link: routePaths.INVESTOR_PATH,
  //     external: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Portfolio",
  //     link: routePaths.PORTFOLIO_PATH,
  //     external: false,
  //   },
  // ];

  // const companyLinks = [
  //   {
  //     id: 1,
  //     name: "Why Real Estate",
  //     link: routePaths.WHY_REAL_ESTATE_PATH,
  //     external: false,
  //   },
  //   {
  //     id: 2,
  //     name: "How it Works",
  //     link: routePaths.HOW_IT_WORKS_PATH,
  //     external: false,
  //   },
  //   {
  //     id: 3,
  //     name: "About us",
  //     link: routePaths.ABOUT_US_PATH,
  //     external: false,
  //   },
  //   {
  //     id: 8,
  //     name: "Invest Tech Club",
  //     link: routePaths.MOGUL_CLUB_PATH,
  //     external: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Blog",
  //     link: routePaths.OUR_BLOGS_PATH,
  //     external: false,
  //   },
  //   {
  //     id: 5,
  //     name: "Help Center",
  //     link: HELP_LINK,
  //     external: true,
  //   },
  //   {
  //     id: 6,
  //     name: "Media Kit",
  //     link: "https://www.dropbox.com/scl/fo/4fp55vsonz0lj6rah85bi/h?dl=0&rlkey=tze9a38kju8j0y4m6aqmfsnns",
  //     external: true,
  //   },
  //   {
  //     id: 7,
  //     name: "Media Inquiries",
  //     link: "mailto:media@investtech.club",
  //     external: false,
  //   },
  // ];

  // const legalLinks = [
  //   {
  //     id: 1,
  //     name: "Terms of Use",
  //     link: TERMS_AND_CONDITION,
  //     external: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Privacy",
  //     link: PRIVACY_LINK,
  //     external: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Disclosures",
  //     link: DISCLOSURES_LINK,
  //     external: true,
  //   },
  // ];

  // const footerLinks = [
  //   {
  //     id: 8,
  //     link: routePaths.LANDING_PAGE_PATH,
  //     name: "Home",
  //     external: false,
  //   },
  //   {
  //     id: 1,
  //     link: routePaths.ABOUT_US_PATH,
  //     name: "About Us",
  //     external: false,
  //   },
  //   {
  //     id: 2,
  //     link: routePaths.HOW_IT_WORKS_PATH,
  //     name: "How It Works",
  //     external: false,
  //   },
  //   {
  //     id: 3,
  //     link: routePaths.OUR_BLOGS_PATH,
  //     name: "Blog",
  //     external: false,
  //   },
  //   {
  //     id: 4,
  //     link: HELP_LINK,
  //     name: "Support",
  //     external: true,
  //   },
  //   {
  //     id: 5,
  //     link: FAQ_LINK,
  //     name: "FAQ",
  //     external: true,
  //   },
  //   {
  //     id: 6,
  //     link: PRIVACY_LINK,
  //     external: true,
  //     name: "Privacy",
  //   },
  //   {
  //     id: 7,
  //     link: TERMS_AND_CONDITION,
  //     external: true,
  //     name: "Terms",
  //   },
  // ];

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterLogoWrapper>
            <div style={{fontSize: '24px', fontWeight: 'bold', color: '#34c38f'}}>Occurrence</div>
            <FooterHeading>
              Where Cash
              <FooterHeadingBold>Becomes Capital.</FooterHeadingBold>
            </FooterHeading>
          </FooterLogoWrapper>
          {/* <LinksGrid>
            <GridItem>
              <GridItemTitle>Product</GridItemTitle>
              <GridLinksContainer>
                {productLinks.map((link) => (
                  <GridLink
                    key={link.name}
                    to={link.link}
                    target={link.external ? "_blank" : "_self"}
                  >
                    {link.name}
                  </GridLink>
                ))}
              </GridLinksContainer>
            </GridItem>
            <GridItem>
              <GridItemTitle>Company</GridItemTitle>
              <GridLinksContainer>
                {companyLinks.map((link) => (
                  <NormalLink
                    key={link.name}
                    href={link.link}
                    rel="noreferrer"
                    target={link.external ? "_blank" : "_self"}
                  >
                    {link.name}
                  </NormalLink>
                ))}
              </GridLinksContainer>
            </GridItem>
            <GridItem>
              <GridItemTitle>Legal</GridItemTitle>
              <GridLinksContainer>
                {legalLinks.map((link) => (
                  <NormalLink
                    key={link.name}
                    href={link.link}
                    rel="noreferrer"
                    target={link.external ? "_blank" : "_self"}
                  >
                    {link.name}
                  </NormalLink>
                ))}
              </GridLinksContainer>
            </GridItem>
            <GridItem>
              <GridItemTitle>Social</GridItemTitle>
              <GridLinksContainer row>
                {socialLinks.map((link) => (
                  <NormalLink
                    key={link.name}
                    href={link.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.icon}
                  </NormalLink>
                ))}
              </GridLinksContainer>
            </GridItem>
          </LinksGrid> */}
        </FooterContent>
        {/* <TextContainer>
          <Text>
            This site is operated by Invest Tech, Inc. (“Invest Tech”), which
            is not a registered broker-dealer or investment advisor. Invest tech does
            not provide investment advice, endorsement, or recommendations with
            respect to any properties listed on the site. Nothing on this
            website should be construed as an offer to sell, solicitation of an
            offer to buy, or a recommendation or offer in respect of a security.
            You are solely responsible for determining whether any investment,
            investment strategy, or related transaction is appropriate for you
            based on your personal investment objectives, financial
            circumstances, and risk tolerance. You should consult with licensed
            legal professionals and investment advisors for any legal, tax,
            insurance, or investment advice. Invest Tech does not guarantee any
            investment performance, outcome, or return of capital for any
            investment opportunity posted on this site. By accessing this site
            and any pages thereof, you agree to be bound by the User Agreement
            and all other regulations and policies set forth on this site.
          </Text>
          <Text>
            All investments involve risk and may result in partial or total
            loss. By accessing this site, investors understand and acknowledge
            that investing in real estate, like investing in other fields, is
            risky and unpredictable, that the real estate industry has its ups
            and downs, that the real property you invest in might not result in
            a positive cash flow or perform as you expected, and that the value
            of any real property you invest in may decline at any time and the
            future property value is unpredictable. Before making an investment
            decision, prospective investors are advised to review all available
            information and consult with their tax and legal advisors. Invest Tech
            does not provide investment advice or recommendations regarding any
            offering posted on this website.
          </Text>
          <Text>
            Any investment-related information contained herein has been secured
            from sources that Invest Tech believes to be reliable, but Invest Tech makes no
            representations or warranties as to the accuracy or completeness of
            such information and accept no liability therefore. Hyperlinks to
            third-party sites, or reproduction of third-party articles, do not
            constitute an approval or endorsement by Invest Tech of the linked or
            reproduced content. Some properties may be subject to encumbrances
            which are clearly indicated on such property’s listing.
          </Text>
          <Text>
            INVESTMENTS ON THE SITE ARE SET UP AS AN INVESTMENT CLUB, HOWEVER,
            THE SECURITIES AND EXCHANGE COMMISSION HAS NOT APPROVED THE SAME
            DIRECTLY AS AN INVESTMENT CLUB. USER UNDERSTANDS AND ACCEPTS THE
            RISK THAT THE SECURITIES AND EXCHANGE COMMISSION MAY DEEM THE
            TRANSACTIONS CONTEMPLATED HEREUNDER TO BE DEEMED SECURITIES AND HAS
            HAD INDEPENDENT COUNSEL AND A CERTIFIED PUBLIC ACCOUNT REVIEW THE
            TERMS HEREIN AND ACCEPTS THE IMPLICATIONS OF THE STRUCTURE ON USER’S
            PARTICIPATION NOW AND IN THE FUTURE AND ANY TAX IMPLICATIONS TO USER
            THAT MAY BE IMPARTED PURSUANT TO THE TRANSACTIONS CONTEMPLATED
            HEREUNDER. USER BY ITS EXECUTION AND PARTICIPATION ACCEPTS THESE
            INHERENT RISKS AND IMPLICATIONS.
          </Text>
        </TextContainer> */}
        <Text>Copyright Invest Tech Inc 2024</Text>
      </FooterContainer>
      {/* <BottomImage src={bottomLogo} /> */}
    </FooterSection>
  );
};

export default Footer;

import GoDownIcon from "../../components/icons/GoDownIcon";
import {
  GoDownIconWrapper,
  HeroContainer,
  HeroSection,
  ImageMarquee,
  ImagesMarqueeContainer,
  MogulClubDescription,
  MogulClubSubtitle,
  MogulClubTitle,
  OriginStoryContainer,
  OriginStoryImage,
  OriginStoryMarqueeContainer,
  OriginStorySection,
  OriginStoryText,
  Word,
  WordsMarquee,
  ExperienceContainer,
  ContainerLeft,
  ContainerRight,
  RightElement,
  RightElementText,
  FormSection,
  TitleForm,
  IntroducingSection,
  IntroducingTextContainer,
  IntroducingDesc,
  GalerySection,
  ItemGalery,
  Gradient,
  ExperienceContainerFull,
} from "./styles";
import mogulClubOrigin from "../../assets/images/mogul-club/mogul-origin.png";
import image1 from "../../assets/images/mogul-club/image-marquee-1.png";
import image2 from "../../assets/images/mogul-club/image-marquee-2.png";
import image3 from "../../assets/images/mogul-club/image-marquee-8.png";
import image4 from "../../assets/images/mogul-club/image-marquee-4.png";
import image5 from "../../assets/images/mogul-club/image-marquee-5.png";
import image6 from "../../assets/images/mogul-club/image-marquee-6.png";
import image7 from "../../assets/images/mogul-club/image-marquee-7.png";
import image9 from "../../assets/images/mogul-club/image-marquee-9.png";
import icon1 from "../../assets/icons/mogul-club/hub.svg";
import icon2 from "../../assets/icons/mogul-club/local_library.svg";
import icon3 from "../../assets/icons/mogul-club/new_releases.svg";
import icon4 from "../../assets/icons/mogul-club/stream.svg";
import galery1 from "../../assets/images/mogul-club/investiments.png";
import galery2 from "../../assets/images/mogul-club/doctors.png";
import galery3 from "../../assets/images/mogul-club/lawyers.png";
import galery4 from "../../assets/images/mogul-club/propose.png";
import { CTAButton } from "../home/open-book-investing-section/styles";
import CTAInput from "../../components/cta-input/CTAInput";
import { routePaths } from "routes/mainRoutes/routePaths";
import { useSelector } from "react-redux";

function MogulClub() {
  const userData = useSelector((state) => state.auth.userData);
  const wordsLeft = [
    "Doctors",
    "Influencers",
    "Marketers",
    "Investment Bankers",
    "Lawyers",
    "Consultants",
    "Private Equity Investors",
    "Gatsby",
    "Socialites",
  ];

  const wordsRight = [
    "Investors",
    "Gatsby",
    "Socialites",
    "Hedge Fund PM's",
    "PM's",
    "Tastemakers",
    "Nurses",
    "Innovator",
    "Entrepreneurs",
    "Small Business Owners",
    "Milburn Pennybags",
  ];
  const expirenceElement = [
    {
      icon: icon1,
      title: "Networking",
      Subtitle:
        "Gain recognition and build your network as you invest alongside other invest tech.",
    },
    {
      icon: icon2,
      title: "Education",
      Subtitle: "Quarterly virtual masterclasses.",
    },
    {
      icon: icon3,
      title: "Experience",
      Subtitle: "Quarterly in-person events, gatherings, and celebrations.",
    },
    {
      icon: icon4,
      title: "Exclusive Access",
      Subtitle: "invest tech get exclusive early access to future products.",
    },
  ];

  const galeryDara = [
    {
      image: galery1,
      title: "Investment Banking & Private Equity",
      subtitle: "",
    },
    { image: galery2, title: "Doctors", subtitle: "" },
    { image: galery3, title: "Lawyers", subtitle: "" },
    {
      image: galery4,
      title: "Propose a Cohort",
      subtitle:
        "Are you part of a profession or thought group that would be a fit for a Invest Tech cohort? Let us know!",
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <MogulClubSubtitle>Occurrence club</MogulClubSubtitle>
          <MogulClubTitle>Members Only</MogulClubTitle>
          <MogulClubDescription>
            Real estate unlocks legacy, Occurrence unlocks status, network, and
            experience.
          </MogulClubDescription>
        </HeroContainer>
        <GoDownIconWrapper href="#origin">
          <GoDownIcon color="#fff" />
        </GoDownIconWrapper>
      </HeroSection>
      <OriginStorySection id="origin">
        <OriginStoryMarqueeContainer>
          <ImagesMarqueeContainer>
            <ImageMarquee src={image1} alt="Image marquee" align="flex-end" />
            <ImageMarquee src={image2} alt="Image marquee" />
            <ImageMarquee src={image3} alt="Image marquee" align="center" />
            <ImageMarquee src={image4} alt="Image marquee" />
            <ImageMarquee src={image5} alt="Image marquee" align="flex-end" />
            <ImageMarquee src={image6} alt="Image marquee" />
            <ImageMarquee src={image7} alt="Image marquee" align="center" />
            <ImageMarquee src={image9} alt="Image marquee" />
          </ImagesMarqueeContainer>
          <WordsMarquee autoFill speed={30}>
            {wordsLeft.map((word, i) => (
              <Word key={i}>{word}</Word>
            ))}
          </WordsMarquee>
          <WordsMarquee autoFill direction="right" speed={30}>
            {wordsRight.map((word, i) => (
              <Word key={i}>{word}</Word>
            ))}
          </WordsMarquee>
        </OriginStoryMarqueeContainer>
        <OriginStoryContainer>
          <OriginStoryText>
            Investment clubs originated on the golf course and tennis courts of
            the old boys clubs. In a cruel real world example of a catch-22, a
            prerequisite for status and legacy meant already having an elite
            country club membership. Steve Jobs famously stated the wild ones
            would change the world, yet no space exists for them to do so in the
            old world order.
            <br />
            <br />
            Until now…
            <br />
            <br />
            The interested, interesting, rising stars, renegades, the wild
            cards. Invest Tech invites you to join a club that feels like a timeless
            tradition, a place where everyone is welcome, yet the privilege of
            belonging becomes the ultimate status symbol.
          </OriginStoryText>
          <OriginStoryImage src={mogulClubOrigin} />
        </OriginStoryContainer>
      </OriginStorySection>
      <ExperienceContainerFull>
        <ExperienceContainer>
          <ContainerLeft>
            <p>
              Network, Education, <b>Experience</b>
            </p>
            <p>Invest in real estate on Invest Tech, unlock membership.</p>
            <CTAButton
              to={routePaths.LOGIN_REGISTER_PATH}
              style={{
                width: "250px",
                marginTop: "0px",
              }}
            >
              Sign Up to Get Access
            </CTAButton>
          </ContainerLeft>
          <ContainerRight>
            {expirenceElement.map((item, index) => (
              <RightElement key={index}>
                <img
                  src={item.icon}
                  alt="icon"
                  style={{ alignSelf: "flex-start" }}
                />
                <RightElementText>
                  <p>{item.title}</p>
                  <p>{item.Subtitle}</p>
                </RightElementText>
              </RightElement>
            ))}
          </ContainerRight>
        </ExperienceContainer>
      </ExperienceContainerFull>
      <FormSection>
        <TitleForm>
          Once you’re in,{" "}
          <b>
            <i>you’re in.</i>
          </b>
        </TitleForm>
        <CTAInput />
      </FormSection>
      <IntroducingSection>
        <IntroducingTextContainer>
          <p>Introducing</p>
          <p>Invest Tech Cohorts</p>
        </IntroducingTextContainer>
        <IntroducingDesc>
          We built Invest Tech with ourselves, our earliest investors, and adopters in
          mind. We realize these professions have unique requirements,
          preferences, and inhibitors that make Invest Tech enticing. As an homage to
          where we have been and where we are going, we have curated unique
          cohorts of investors with tailored experiences, offerings, and
          exclusive content.
        </IntroducingDesc>
      </IntroducingSection>
      <GalerySection>
        <Gradient />
        {galeryDara.map((item, index) => (
          <ItemGalery imageUrl={item.image} key={index}>
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
            <CTAButton
              to={
                userData
                  ? routePaths.INVESTOR_PATH
                  : routePaths.LOGIN_REGISTER_PATH
              }
              style={{ marginTop: "0px" }}
            >
              Request to Join
            </CTAButton>
          </ItemGalery>
        ))}
      </GalerySection>
    </>
  );
}

export default MogulClub;

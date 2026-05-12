import {
  LayoutContainer,
  WrapSwipper,
  ContainerText,
  Description,
  Title,
  WrapLogos,
  NavigationButton,
  NavigationButtonRight,
} from "./styles";
import logo1 from "../../../assets/icons/investors/icon1.svg";
import logo2 from "../../../assets/icons/investors/icon2.svg";
import logo3 from "../../../assets/icons/investors/icon3.svg";
import logo4 from "../../../assets/icons/investors/icon4.svg";
import logo5 from "../../../assets/icons/investors/icon5.svg";
import logo6 from "../../../assets/icons/investors/icon6.svg";
import img1 from "../../../assets/images/investors/card1.png";
import img2 from "../../../assets/images/investors/card2.png";
import img3 from "../../../assets/images/investors/card3.png";
import img4 from "../../../assets/images/investors/card4.png";
import img5 from "../../../assets/images/investors/card5.png";
import img6 from "../../../assets/images/investors/card6.png";
import img7 from "../../../assets/images/investors/card7.png";
import img8 from "../../../assets/images/investors/card8.png";
import CardInvestors from "../../../components/investors";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useState } from "react";
import leftIcon from "assets/icons/left.svg";
import rightIcon from "assets/icons/right.svg";

const InvestorsSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const dataCards = [
    {
      image: img5,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      image: img1,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com",
      },
    },
    {
      image: img2,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "",
        linkedin: "https://www.linkedin.com",
      },
    },
    {
      image: img3,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "",
        linkedin: "https://www.linkedin.com",
      },
    },
    {
      image: img4,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "https://twitter.com",
        linkedin: "",
      },
    },

    {
      image: img6,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "",
        linkedin: "https://www.linkedin.com",
      },
    },
    {
      image: img7,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "https://twitter.com",
        linkedin: "",
      },
    },

    {
      image: img8,
      title: "Lorem",
      subTitle:
        "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur sequi est maxime quaerat excepturi id debitis ipsum alias? Eum iste doloribus expedita eos unde quibusdam mollitia possimus ad accusamus.",
      socialMedia: {
        instagram: "",
        twitter: "",
        linkedin: "https://www.linkedin.com/",
      },
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <LayoutContainer>
      <ContainerText>
        <Title>
          Occurrence Investors <b>& Advisors</b>{" "}
        </Title>
        <Description>
          Our investors were also early backers of companies like Robinhood,
          SpaceX, Tesla, Skype. Here’s what they have to say about Occurrence.
        </Description>
      </ContainerText>
      <WrapLogos>
        {logos.map((l, i) => (
          <img key={i} src={l} alt="logo" />
        ))}
      </WrapLogos>
      <WrapSwipper className="wrap-swiper">
        <Swiper
          effect="coverflow"
          grabCursor={false}
          centeredSlides={true}
          className="mySwiper-investors "
          slidesPerView={"auto"}
          loop
          coverflowEffect={{
            rotate: 0.5,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {dataCards.map((card, i) => (
            <SwiperSlide className="swiper-slide-investors" key={i}>
              <CardInvestors
                isActive={i != activeIndex}
                image="data:image/png;base64,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"
                title={card.title}
                subTitle={card.subTitle}
                desc={card.desc}
                socialMedia={card.socialMedia}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <NavigationButton className="button-next">
          <img src={rightIcon} alt="icon" />
        </NavigationButton>
        <NavigationButtonRight className="button-prev">
          <img src={leftIcon} alt="icon" />
        </NavigationButtonRight>
      </WrapSwipper>
    </LayoutContainer>
  );
};

export default InvestorsSection;

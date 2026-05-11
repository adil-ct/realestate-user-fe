import {
  ContainerPageMarker,
  ContentSlider,
  ContentText,
  Marker,
  NavigationButton,
  NavigationButtonRight,
  SecondaryText,
  TitleSlider,
  VideoContainer,
  VideoSection,
} from "./styles";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import video1 from "assets/videos/01-Tesla.mp4";
import video2 from "assets/videos/02-Peloton.mp4";
import video3 from "assets/videos/03-Corona.mp4";
import leftIcon from "assets/icons/left.svg";
import rightIcon from "assets/icons/right.svg";
import { Button } from "components/button/CTAButton.style";
import { routePaths } from "routes/mainRoutes/routePaths";

const TweetSection = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const isLoggedIn = !!localStorage.getItem("authToken");

  const data = [
    {
      title: "One Elon Musk tweet could",
      subTitle: "sink your 401k.",
      textSmall: "Your house can't tweet. Even if it could, there's insurance.",
      opacity: 1,
    },
    {
      title: "An HBO spinoff kills off main",
      subTitle: "character and your portfolio.",
      textSmall:
        "Your house doesn't exercise. Even if it could, it exercises good judgment.  ",
      opacity: 2,
    },
    {
      title: "Corona or corona? You and your portfolio",
      subTitle: "lose your taste for beer.",
      textSmall:
        "Your house doesn't have a name. Even if it did, it'd be something like Wayne Manor or Whitecaps.",

      opacity: 3,
    },
  ];

  return (
    <>
      <VideoSection>
        <VideoContainer>
          <ContentText>
            <TitleSlider>
              {data[contentIndex]?.title}{" "}
              <span style={{ fontWeight: "800" }}>
                {data[contentIndex]?.subTitle}
              </span>
            </TitleSlider>
            <SecondaryText>{data[contentIndex]?.textSmall}</SecondaryText>
            <ContainerPageMarker>
              <Marker opacity={data[contentIndex]?.opacity === 1 ? 1 : 0.5} />
              <Marker opacity={data[contentIndex]?.opacity === 2 ? 1 : 0.5} />
              <Marker opacity={data[contentIndex]?.opacity === 3 ? 1 : 0.5} />
            </ContainerPageMarker>
            <Button
              to={
                isLoggedIn
                  ? routePaths.INVESTOR_PATH
                  : routePaths.LOGIN_REGISTER_PATH
              }
              style={{ maxWidth: "230px" }}
            >
              Invest in Real Estate
            </Button>
          </ContentText>
          <ContentSlider>
            <Swiper
              direction={"horizontal"}
              className="mySwiper"
              slidesPerView={1}
              spaceBetween={40}
              centeredSlides={true}
              grabCursor={false}
              loop
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }}
              onSlideChange={(swiper) => setContentIndex(swiper.realIndex)}
            >
              <SwiperSlide>
                <video
                  src={video1}
                  width="100%"
                  autoPlay
                  playsInline
                  muted
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src={video2}
                  width="100%"
                  autoPlay
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src={video3}
                  width="100%"
                  autoPlay
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                  controls={false}
                />
              </SwiperSlide>
            </Swiper>
            <NavigationButton className="button-next">
              <img src={rightIcon} alt="icon" />
            </NavigationButton>
            <NavigationButtonRight className="button-prev">
              <img src={leftIcon} alt="icon" />
            </NavigationButtonRight>
          </ContentSlider>
        </VideoContainer>
      </VideoSection>
    </>
  );
};

export default TweetSection;

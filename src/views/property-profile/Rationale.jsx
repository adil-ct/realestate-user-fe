import React from "react";
import { Grid, Box } from "@mui/material";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
import MKTypography from "components/custom/MKTypography";
import PropertDetailsCard from "components/Cards/Investor/PropertDetailsCard";
import styles, { NavigationButton, NavigationButtonRight } from "./styles";
import { useSelector } from "react-redux";
import MKBox from "components/custom/MKBox";
import { Swiper, SwiperSlide } from "swiper/react";
import leftIcon from "assets/icons/left.svg";
import rightIcon from "assets/icons/right.svg";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/core";
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Rationale = ({
  propertyObj,
  handleInvestClick,
  onPhotosViewerClick,
  ref,
}) => {
  const classes = styles();
  const { propertyData } = useSelector((state) => state.marketplace);

  // propertyObj?.rationale.images?.filter((ele, i) => (i < 12 ? ele : “”))
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (  
    <Grid container spacing={5}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
        order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
      >
        <MKTypography component="p" className={classes.rationalHeader}>
          {propertyObj?.rationale?.heading}
        </MKTypography>
        <Box className={classes.badgeContainer}>
          <MKTypography
            variant="p"
            fontWeight="bold"
            className={classes.heading1}
          >
            {propertyData?.data?.tags?.slice(0, 3)?.map((ele, i) => (
              <Box className={classes.propertyBadge} key={i}>
                {ele}
              </Box>
            ))}
          </MKTypography>
        </Box>
        {propertyObj?.rationale && (
          <Box position="relative" marginBottom="48px">
            <Swiper
              direction={"horizontal"}
              className="mySwiper"
              slidesPerView={1}
              spaceBetween={40}
              centeredSlides={true}
              pagination={true}
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
            >
              {propertyObj?.rationale.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.url}
                    alt="image"
                    style={{
                      borderRadius: "16px",
                      height: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
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
          </Box>
        )}

        {propertyData?.data?.video?.contentType.includes("video") &&
          propertyObj?.rationale?.video?.url && (
            <Player playsInline fluid={false} width={"100%"} height={450}>
              <source src={propertyObj?.rationale?.video?.url} />
              <ControlBar>
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton
                  rates={[5, 2, 1, 0.5, 0.1]}
                  order={7.1}
                />
                <VolumeMenuButton />
              </ControlBar>
              <BigPlayButton position="center" />
            </Player>
          )}
          
        {/* {propertyData?.data?.video?.contentType === "application/pdf" &&
          propertyObj?.rationale?.video?.url && (
            <div>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                <Viewer fileUrl={propertyObj?.rationale?.video?.url} 
                  plugins={[
                    defaultLayoutPluginInstance,
                ]}
                />
              </Worker>
            </div>
          )} */}
        {propertyData?.data?.video?.contentType.includes("image") && (
          <div>
            <img
              src={propertyObj?.rationale?.video?.url}
              alt="img"
              className="lazy-load-image-background"
            />
          </div>
        )}
        <MKBox>
          {propertyObj?.rationale?.description && (
            <>
              <MKTypography component="p" className={classes.rationalDesc}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: propertyObj?.rationale?.description,
                  }}
                ></span>
              </MKTypography>
            </>
          )}
        </MKBox>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
        order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
        ref={ref}
      >
        <PropertDetailsCard
          data={propertyObj?.rationale}
          onInvestClick={handleInvestClick}
          onPhotosViewerClick={onPhotosViewerClick}
        />
      </Grid>
    </Grid>
  );
};

export default Rationale;

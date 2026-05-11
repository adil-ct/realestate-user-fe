import { Grid, Typography } from "@mui/material";
import MKButton from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/core";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import leftIcon from "../../../assets/icons/left.svg";
import rightIcon from "../../../assets/icons/right.svg";
import styles, {
  MobileButtonsContainer,
  NavigationButton,
  SwiperContainer,
} from "./styles";
import { routePaths } from "routes/mainRoutes/routePaths";
import {
  HomePropertyCard1,
  HomePropertyCard2,
  HomePropertyCard3,
} from "constants/assets";
SwiperCore.use([Autoplay, Navigation]);

const BannedSection = () => {
  const classes = styles();
  const hasAuthToken = Boolean(localStorage.getItem("authToken"));
  const cardsPath = hasAuthToken ? routePaths.INVESTOR_PATH : routePaths.LOGIN_REGISTER_PATH

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.line1}>
          Google Ads initially banned us citing{" "}
        </Typography>
        <Typography variant="h2" className={classes.line2}>
          {'"unrealistic returns"'}
        </Typography>
        <Typography variant="subtitle2" className={classes.line3}>
          We showed them just how conservative our underwriting was.
        </Typography>
        <Typography variant="subtitle2" className={classes.line4}>
          We can now advertise with Google. 😉
        </Typography>
      </Grid>

      <Grid container className={classes.imageArea}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.imageContainer}
        >
          <Link to={cardsPath}>
            <img src={HomePropertyCard1} className={classes.propertyImage} />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.imageContainer}
        >
          <Link to={cardsPath}>
            <img src={HomePropertyCard2} className={classes.propertyImage} />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.imageContainer}
        >
          <Link to={cardsPath}>
            <img src={HomePropertyCard3} className={classes.propertyImage} />
          </Link>
        </Grid>
      </Grid>

      <SwiperContainer>
        <Swiper
          direction={"horizontal"}
          className="mySwiper"
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={17}
          grabCursor={true}
          navigation={{
            nextEl: "#google-ads-button-next",
            prevEl: "#google-ads-button-prev",
          }}
        >
          <SwiperSlide>
            <Link to={cardsPath}>
              <img src={HomePropertyCard1} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={cardsPath}>
              <img src={HomePropertyCard2} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={cardsPath}>
              <img src={HomePropertyCard3} />
            </Link>
          </SwiperSlide>
        </Swiper>
        <MobileButtonsContainer>
          <NavigationButton id="google-ads-button-prev">
            <img src={leftIcon} alt="icon" />
          </NavigationButton>
          <NavigationButton id="google-ads-button-next">
            <img src={rightIcon} alt="icon" />
          </NavigationButton>
        </MobileButtonsContainer>
      </SwiperContainer>
      <Grid item xs={12} className={classes.btnArea}>
        <MKButton
          variant="contained"
          to={routePaths.INVESTOR_PATH}
          //className={classes.investButton}
          component={Link}
        >
          Load More Properties
        </MKButton>
      </Grid>
    </Grid>
  );
};

export default BannedSection;

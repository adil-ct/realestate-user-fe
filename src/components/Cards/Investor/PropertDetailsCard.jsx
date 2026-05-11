import { useSelector } from "react-redux";
// import { useState } from "react";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Box, Button } from "@mui/material";

// Static imports
import MKTypography from "components/custom/MKTypography";
// import CurrencyFormat from "components/CurrencyFormat";
import { DISABLE_INVEST } from "constants/env";
import styles from "./styles";
import InvestorsAvatars from "./InvestorsAvatars";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
// import Timer from "components/Timer";
// import MKBox from "components/custom/MKBox";
// import getTimeRemaining from "utils/getRemainingTime";
// import { Trending1 } from "constants/assets";

// const CCarousel = styled(Carousel)`
//   // & .control-dots .dot.selected {
//   //   background: #58f2f0 !important;
//   // }
//   ,
//   & .control-dots .dot {
//     // border: 1px solid #58f2f0;
//     opacity: 1 !important;
//     // background: transparent !important;
//   }
//   ,
//   // & .control-prev.control-arrow:before {
//   //   border-right: 8px solid #58f2f0 !important;
//   // }
//   // ,
//   // & .control-prev.control-arrow:before {
//   //   border-right: 8px solid #58f2f0 !important;
//   // }
//   // & .control-next.control-arrow:before {
//   //   border-left: 8px solid #58f2f0 !important;
//   // }
// `;

const PropertDetailsCard = ({ data, onInvestClick }) => {
  const classes = styles();
  // const { hours, minutes, seconds, days } = getTimeRemaining(data?.startDate);
  // const [cardHover, setCardHover] = useState(false);
  const { userData } = useSelector((state) => state.auth);

  const getNumInvestorsText = () => {
    // TODO: we need an API call for this?
    return data?.title === "The Logan"
      ? "Raise in Process" // Jomar
      : data?.title === "The Roman"
      ? "Raise in Process" // Tallheath
      : data?.title === "Bowser Ave"
      ? "37 Investors"
      : "Raise in Process";
  };

  useEffect(() => {
    const sidepanel = document.getElementById("sidepanel");
    window.addEventListener("scroll", function () {
      var scrollPosition =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;
      if (scrollPosition > 400) {
        // console.log(data?.numberOfTokens - data?.tokensSold);
        if (data?.numberOfTokens - data?.tokensSold > 0) {
          sidepanel.classList.add("show-mobile");
        } else {
          sidepanel.classList.remove("show-mobile");
        }
      } else {
        sidepanel.classList.remove("show-mobile");
      }
    });
    // document.addEventListener("scroll", () => {
    //   setTimeout(() => {}, [2000]);
    // });

    // return () => {
    //   document.removeEventListener("scroll", () => {
    //     setTimeout(() => {
    //       sidepanel.classList.add("show-mobile");
    //     }, [2000]);
    //   });
    // };
  }, [data]);

  return (
    <>
      <div
        id="sidepanel"
        className={`${classes.PDCbox} ${classes.hideMobile}`}
        hidden={!(data?.numberOfTokens - data?.tokensSold)}
      >
        <Box className={`${classes.bottomSectionVariant}`}>
          <LazyLoadImage
            src={data?.mainImage.url}
            className={`${classes.fixedPanelImage} ${classes.hideMobile}`}
            alt={data?.title}
            effect="blur"
          />
          <Box className={classes.topSection}>
            <MKTypography
              variant="h5"
              // fontSize="20px"
              width="100%"
              component="span"
              className={classes.propertyTitle}
            >
              {data?.title || "Property Title"}
            </MKTypography>
            <MKTypography
              variant="h4"
              className={classes.locationEleCard}
              component="span"
            >
              {data?.city && data?.city + " , "} {data?.state}
            </MKTypography>
          </Box>
          <Button
            className={
              data?.numberOfTokens - data?.tokensSold &&
              DISABLE_INVEST !== "true" &&
              userData?.userType !== "property_manager"
                ? classes.buttonSolid
                : classes.buttonOutlined
            }
            variant={
              data?.numberOfTokens - data?.tokensSold &&
              DISABLE_INVEST !== "true" &&
              userData?.userType !== "property_manager"
                ? "contained"
                : "outlined"
            }
            type="submit"
            id="joyride-invest2"
            onClick={
              data?.numberOfTokens - data?.tokensSold
                ? onInvestClick
                : undefined
            }
            disabled={!(data?.numberOfTokens - data?.tokensSold)}
            disableElevation
          >
            {data?.numberOfTokens - data?.tokensSold
              ? "Invest Now"
              : "Sold Out"}
          </Button>
          <Box className={`${classes.separator} ${classes.hideMobile}`} />
          <Box
            className={`${classes.investorsContainer} ${classes.hideMobile}`}
          >
            <MKTypography variant="body2" className={classes.investorsNumber}>
              {getNumInvestorsText()}
            </MKTypography>
            <InvestorsAvatars title={data?.title} />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default PropertDetailsCard;

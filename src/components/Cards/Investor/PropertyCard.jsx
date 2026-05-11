import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
// import Tooltip from "@mui/material/Tooltip";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

// Static imports
// import IconButton from "@mui/material/IconButton";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
//import MovingIcon from '@mui/icons-material/Moving';
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { placeholderImg } from "constants/assets";
// import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKTypography from "components/custom/MKTypography";
// import CurrencyFormat from "components/CurrencyFormat";
// import getTimeRemaining from "utils/getRemainingTime";
// import MKButton from "components/custom/MKButton";
import { DISABLE_INVEST } from "constants/env";
// import MKBox from "components/custom/MKBox";
// import Timer from "components/Timer";
import styles from "./styles";
import { ArrowForward } from "@mui/icons-material";
import InvestorsAvatars from "./InvestorsAvatars";

const PropertyCard = ({
  setHoverCard,
  handleClose,
  hoverCard,
  // index,
  data,
}) => {
  const classes = styles();
  const navigate = useNavigate();
  // const { hours, minutes, seconds, days } = getTimeRemaining(data?.startDate);
  const { showHoverCard, tourHoverCardIndex } = useSelector(
    (state) => state.tour
  );

  useEffect(() => {
    if (showHoverCard) {
      const updatedData = hoverCard.map((item, itemIndex) => {
        if (itemIndex == tourHoverCardIndex ?? 0) {
          return { status: true };
        } else return { status: false };
      });
      setHoverCard(updatedData);
    }
  }, [showHoverCard, tourHoverCardIndex]);

  const onInvestClick = (e) => {
    e.stopPropagation();
    handleClose();
  };

  const handleOutsideInvestClick = () => {
    navigate("/property-profile/?id=" + data?._id);
  };

  const getNumInvestorsText = () => {
    // TODO: we need an API call for this?
    return data?.title === 'The Logan'  ? 'Raise in Process' : // Jomar 
           data?.title === 'The Roman'  ? 'Raise in Process' : // Tallheath 
           data?.title === 'Bowser Ave' ? '37 Investors' :
           'Raise in Process';
  };

  return (
    <div className={`${classes.mainContainer} joyride21`}>
      <Box
        className={`${
          data?.mainImage?.url
            ? classes.imageContainer
            : `${classes.imageContainer} ${classes.pt65}`
        }`}
      >
        <LazyLoadImage
          src={data?.mainImage?.url || placeholderImg}
          className={
            data?.mainImage?.url ? classes.image : classes.imagePlaceholder
          }
          alt={data?.tag}
          effect="blur"
        />
        {data?.trending && (
          <MKTypography className={classes.trendingBadge} component="span">
            Trending
          </MKTypography>
        )}
        <Box className={classes.propertyNameContainer}>
          <MKTypography
            variant="h5"
            width="100%"
            component="span"
            color="white"
            className={classes.propertyTitle}
          >
            {data?.title || "Property Title"}
          </MKTypography>
          <Box className={classes.propertyLocationContainer}>
            <LocationOnOutlinedIcon color="white" fontSize="20px" />
            <MKTypography
              variant="h4"
              className={classes.locationEle}
              component="span"
            >
              {data?.city && data?.city + " , "} {data?.state}
            </MKTypography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.infoContainer}>
        {/* <Box className={classes.investmentsContainer}>
          <ProgressBar progress={30} />
          <Box className={classes.investedContainer}>
            <MKTypography variant="h6" component="span" color="#51585F">
              <MKTypography component="span" fontSize="0.75rem">
                $
              </MKTypography>
              257,000.00{" "}
              <MKTypography
                component="span"
                fontSize="0.75rem"
                fontWeight="400"
              >
                of $500,000.00
              </MKTypography>
            </MKTypography>
            <MKTypography
              variant="body2"
              className={classes.investedPercentage}
            >
              51.4%
            </MKTypography>
          </Box>
        </Box> */}

        <Box className={classes.buttonsContainer}>
          <Button
            className={
              data?.numberOfTokens - data?.tokensSold &&
              DISABLE_INVEST !== "true"
                ? classes.buttonSolid
                : classes.buttonOutlined
            }
            variant={
              data?.numberOfTokens - data?.tokensSold &&
              DISABLE_INVEST !== "true"
                ? "contained"
                : "outlined"
            }
            // disabled={
            //   data?.numberOfTokens - data?.tokensSold &&
            //   DISABLE_INVEST !== "true"
            //     ? false
            //     : true
            // }
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
          <Button
            className={classes.buttonOutlined}
            variant="outlined"
            onClick={handleOutsideInvestClick}
            endIcon={<ArrowForward />}
          >
            View Property
          </Button>
        </Box>
        <Box className={classes.separator} />
        <Box className={classes.investorsContainer}>
          <MKTypography variant="body2" className={classes.investorsNumber}>
            {getNumInvestorsText()}
          </MKTypography>
          <InvestorsAvatars title={data?.title}/>
        </Box>
      </Box>
    </div>
  );
};

export default PropertyCard;

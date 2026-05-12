import React, { useState, useEffect } from "react";
import { Grid, Box, IconButton } from "@mui/material";
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
import MKTypography from "components/custom/MKTypography";
import PropertDetailsCard from "components/Cards/Investor/PropertDetailsCard";
import styles from "./styles";
import { useSelector } from "react-redux";
import MKBox from "components/custom/MKBox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Rationale = ({
  propertyObj,
  handleInvestClick,
  onPhotosViewerClick,
  ref,
}) => {
  const classes = styles();
  const { propertyData } = useSelector((state) => state.marketplace);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = propertyObj?.rationale?.images || [];
  const total = images.length;

  useEffect(() => {
    setActiveIndex(0);
  }, [propertyObj?.rationale?._id]);

  const goPrev = () => setActiveIndex((i) => (i <= 0 ? total - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i >= total - 1 ? 0 : i + 1));

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
          <MKTypography variant="p" fontWeight="bold" className={classes.heading1}>
            {propertyData?.data?.tags?.slice(0, 3)?.map((ele, i) => (
              <Box className={classes.propertyBadge} key={i}>{ele}</Box>
            ))}
          </MKTypography>
        </Box>

        {total > 0 && (
          <Box
            marginBottom="24px"
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#f0f0f0",
              position: "relative",
            }}
          >
            <img
              src={images[activeIndex]?.url}
              alt={`slide-${activeIndex}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                zIndex: 1,
              }}
            />

            {total > 1 && (
              <>
                <IconButton
                  onClick={goPrev}
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.35)",
                    color: "#fff",
                    width: 36,
                    height: 36,
                    zIndex: 10,
                    "&:hover": { background: "rgba(0,0,0,0.55)" },
                  }}
                >
                  <ChevronLeftIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={goNext}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.35)",
                    color: "#fff",
                    width: 36,
                    height: 36,
                    zIndex: 10,
                    "&:hover": { background: "rgba(0,0,0,0.55)" },
                  }}
                >
                  <ChevronRightIcon fontSize="small" />
                </IconButton>

                {/* Dot indicators */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px",
                    zIndex: 10,
                  }}
                >
                  {images.map((_, i) => (
                    <Box
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      sx={{
                        width: i === activeIndex ? 18 : 7,
                        height: 7,
                        borderRadius: "4px",
                        background: i === activeIndex ? "#C9A84C" : "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        transition: "all 200ms ease",
                      }}
                    />
                  ))}
                </Box>
              </>
            )}
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
                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                <VolumeMenuButton />
              </ControlBar>
              <BigPlayButton position="center" />
            </Player>
          )}

        {propertyData?.data?.video?.contentType.includes("image") && (
          <Box
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "24px",
              position: "relative",
            }}
          >
            <img
              src={propertyObj?.rationale?.video?.url}
              alt="img"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        )}

        <MKBox>
          {propertyObj?.rationale?.description && (
            <MKTypography component="p" className={classes.rationalDesc}>
              <span
                dangerouslySetInnerHTML={{
                  __html: propertyObj?.rationale?.description,
                }}
              />
            </MKTypography>
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

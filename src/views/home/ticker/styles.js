import { createStyles, makeStyles } from "@mui/styles";
import styled from "styled-components";

export const HeroBrandsContainer = styled.div`
  width: 100%;
  background-color: #f0eeeb;
  padding-top: 135px;
`;

export const ImageItem = styled.img`
  padding-inline: 40px;
  height: 58px;
  filter: grayscale(100%);
  transition: all 200ms ease;
  @media (max-width: 768px) {
    padding-inline: 16px;
  }

  :hover {
    filter: grayscale(0);
  }
`;

const styles = makeStyles((theme) =>
  createStyles(
    {
      root: {
        background: theme.palette.subBackground.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      tickerLabel: {
        color: theme.palette.bodyText.primary,
        overflow: "hidden",
        background: theme.palette.subBackground.primary,
        float: "left",
        whiteSpace: "nowrap",
        padding: "18px 40px",
        borderRight: `1px solid ${theme.palette.primary.main}`,
      },
      imageContainer: {
        padding: "40px 0 96px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          padding: "20px 0 40px 0",
        },

        "& img": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      imageItem: {
        padding: "11px 34px",
        height: "58px",
      },
    },
    { name: "home-page-media-ticker-view" }
  )
);

export default styles;

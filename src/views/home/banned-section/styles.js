import { createStyles, makeStyles } from "@mui/styles";
import styled from "styled-components";

export const SwiperContainer = styled.div`
  display: none;
  width: 100%;
  margin: 40px 0;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const MobileButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  width: 100%;
  padding-inline: 20px;
  margin-top: 20px;
`;

export const NavigationButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
`;

const styles = makeStyles((theme) =>
  createStyles(
    {
      root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "7%",
      },
      imageArea: {
        padding: "2% 11% 1% 11%",
      },
      imageContainer: {
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      propertyImage: {
        width: "90%",
        height: "auto",
        padding: "3%",
      },
      btnArea: {
        padding: "1% 0 7% 0",
        [theme.breakpoints.down("sm")]: {
          padding: "1% 0 7% 0",
        },
        [theme.breakpoints.down("xs")]: {
          padding: "1% 0 5% 0",
        },
      },
      line1: {
        fontWeight: 300,
        color: "#FFFFFF",
      },
      line2: {
        paddingBottom: "1%",
        color: "#FFFFFF",
      },
      line3: {
        opacity: 0.85,
        color: "#CBD5E1",
      },
      line4: {
        fontWeight: 800,
        color: "#FFFFFF",
      },
    },
    { name: "home-page-banned-section-view" }
  )
);

export default styles;

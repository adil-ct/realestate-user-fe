import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  background-color: #4360AB;
  padding-top: 80px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding-inline: 80px;
  gap: 56px;
  margin: 0 auto;
  @media (max-width: 1250px) {
    padding-inline: 40px;
    gap: 40px;
  }
  @media (max-width: 540px) {
    padding-inline: 20px;
    gap: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FooterHeading = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;

export const FooterHeadingBold = styled.b`
  display: block;
`;

export const LinksGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 190px);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GridItemTitle = styled.b`
  font-size: 14px;
  line-height: 16px;
`;

export const GridLinksContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  gap: 12px;
`;

export const GridLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  opacity: 0.7;
  color: #fff;
`;

export const NormalLink = styled.a`
  font-size: 14px;
  line-height: 16px;
  opacity: 0.7;
  color: #fff;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 10px;
  line-height: 17px;
  opacity: 0.5;
`;

export const BottomImage = styled.img`
  max-width: 100%;
  width: 100%;
  margin-top: 170px;

  @media (max-width: 850px) {
    margin-top: 40px;
  }
`;

const styles = makeStyles((theme) =>
  createStyles(
    {
      mainGrid: {
        background: theme.palette.primary.main,
        paddingTop: "50px",
        boxSizing: "border-box",
        height: "auto",
        [theme.breakpoints.down(701)]: {
          paddingTop: "40px",
        },
        [theme.breakpoints.down(426)]: {
          paddingTop: "80px",
        },
      },
      sBox: {
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          alignItems: "flex-start",
        },
      },
      loader: {
        marginLeft: "-70px !important",
      },
      logo: {
        height: "50px",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      flexBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: "50px",
      },
      flexBox1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingRight: "0px",
        [theme.breakpoints.down("md")]: {
          justifyContent: "unset",
        },
      },
      headerButton: {
        border: "none",
        // background: '#58F2F0',
        fontWeight: "500",
        // fontFamily: 'Roboto',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "240px",
        height: "48px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "30px",
        // color: 'black',
        marginTop: "30px",
        // '&:hover': {
        //   background: '#58F2F0',
        //   color: "black",
        //   boxShadow: '0px 4px 30px rgba(88, 242, 240, 0.2)',
        // },
        // '&:focus': {
        //   background: '#58F2F0',
        //   color: "black !important",
        //   boxShadow: 'none',
        // },
        [theme.breakpoints.down("lg")]: {
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          marginTop: "0px",
          marginBottom: "10px",
          width: "40%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
        [theme.breakpoints.down(426)]: {
          marginTop: "20px",
          marginBottom: "10px",
        },
      },
      flexBox2: {
        display: "none",
        justifyContent: "flex-start",
        flexDirection: "row",
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          marginTop: "0px",
        },
      },
      flexBox2a: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        [theme.breakpoints.down("sm")]: {
          display: "none",
          marginTop: "0px",
        },
      },
      flexBox3: {
        display: "flex",
        height: "80px",
        justifyContent: "center",
        alignItems: "center",
      },
      flexBox4: {
        // background: '#1E233C',
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "-20px",
        [theme.breakpoints.down("sm")]: {
          marginTop: "20px",
        },
      },
      socialIcon: {
        marginRight: "20px",
        width: "17px",
        height: "20px",
      },
      copyrightIcon: {
        padding: 0,
        // color: 'rgba(245, 245, 245, 1)',
        margin: "0px 5px",
      },
      inputHeight: {
        // '&:hover': {
        //   border: '1px solid #58f2f0',
        // },
        "& input": {
          height: "30px",
          // color: 'white',
          padding: "0px !important",
          margin: "0px 20px",
          [theme.breakpoints.down("md")]: {
            paddingLeft: "5px",
            margin: "0px 10px",
          },
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "30px",
            margin: "0px 10px",
          },
        },

        "&::placeholder": {
          // border: '1px solid #6976B4',
          borderRadius: "30px",
          marginTop: "10px",
          // color: '#6976B4',
          lineHeight: "18px",
          fontWeight: "540",
          fontSize: "16px",
          opacity: 1,
        },
      },

      placeHolder: {
        "&::placeholder": {
          // color: '#6976B4',
          lineHeight: "18px",
          fontWeight: "540",
          fontSize: "16px",
          opacity: 1,
        },
      },
      button: {
        borderRadius: "30px",
        // background: '#58F2F0',
        margin: "5px 0",
        padding: "10px",

        // '&:hover': {
        //   background: '#58F2F0',
        //   boxShadow: '0px 4px 20px rgba(88, 242, 240, 0.2)',
        // },
      },
      sIcon: {
        marginRight: "10px",
        // '&:hover': {
        //   color: 'white',
        // },
      },
      links: {
        color: theme.palette.footerLinks.primary,
        textDecoration: "none",
      },
      header1: {
        // fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "20px",
        // color: '#C2C7E1',
        letterSpacing: "0.04em",
        marginBottom: "0px",
      },
      header2: {
        cursor: "pointer",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        padding: 0,
        marginTop: "15px",
        lineHeight: "20px",
        // color: '#9AA2CC',
        // '&:hover': {
        //   color: 'white',
        // },
      },
      header3: {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        padding: 0,
        lineHeight: "20px",
        // color: '#9AA2CC',
      },
      header4: {
        // fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "20px",
        // color: '#C2C7E1',
        letterSpacing: "0.04em",
        marginBottom: "15px",
        [theme.breakpoints.down("sm")]: {
          marginBottom: "20px",
        },
      },
      headerTerms: {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "11px",
        lineHeight: "20px",
        letterSpacing: "0.02em",
        marginBottom: "15px",
        [theme.breakpoints.down("sm")]: {
          marginBottom: "20px",
          marginLeft: "10px",
        },
      },
      header5: {
        cursor: "pointer",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        padding: 0,
        lineHeight: "20px",
        // color: '#9AA2CC',
        [theme.breakpoints.down("sm")]: {
          fontSize: "12px",
        },
      },
      header6: {
        cursor: "pointer",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        padding: 0,
        lineHeight: "20px",
        // color: '#9AA2CC',
        // '&:hover': {
        //   color: 'white',
        // },
      },
    },
    { name: "footer-component" }
  )
);

export default styles;

import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;

  height: 100%;
  @media (max-width: 1250px) {
    padding-inline: 40px;
  }
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 540px) {
    padding-inline: 20px;
  }
`;

export const LogoLink = styled(Link)`
  max-height: 100px;
  height:100px;
  display: grid;
  place-content: center;
`;

export const ActionsButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LoginButton = styled(Link)`
  color: white;
  font-weight: 800;
  font-size: 14px;
  font-family: "PP Fragment-Sans";
`;

const headerStyle = makeStyles((theme) =>
  createStyles(
    {
      appBar: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundSize: "100% 100%",
        borderRadius: 0,
        
        // Override MUI
        maxHeight: "106px",
        minWidth: "auto",
        maxWidth: "none !important",
        margin: 0,
        padding: 0,
      },
      hidden: {
        display: "none",
      },
      headerContainer: {
        display: "flex",
        alignItems: "center",
        // Overriding the default padding of mui container
        margin: "auto",
        padding: 0,
        height: "100%",
        width: "100%",
        minWidth: "auto",
        // Overriding the default maxWidth of mui container
        maxWidth: "1440px !important",
        paddingInline: "80px !important",
        [theme.breakpoints.down("sm")]: {
          // Overriding the default padding of mui container
          paddingLeft: "30px !important",
          margin: 0,
        },
      },
      toolbar: {
        backgroundColor: "transparent",
        padding: 0,
        margin: 0,
        height: 'auto',
        minHeight: "auto !important",
        justifyContent: "flex-start !important",
        gap: "58px",
      },
      flexCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        
      },
      txtCapitalize: {
        textTransform: "capitalize",
      },
      dropDownMenuHeader: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        marginBottom: "8px",
        paddingBottom: "3px",
      },
      logo: {
        cursor: "pointer",
        // backgroundColor: "transparent",
        border: "none",
        borderRadius: 0,
        width: "100%",
        height:"80px"
      },
      flex1: {
        flex: 1,
        display: "flex",
        alignItems: "center",
      },
      height100: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      },
      width100: {
        width: "100%",
      },
      headerTitle: {
        marginLeft: "10px",
        fontWeight: 700,
        // color: "#ffffff",
        fontSize: "14px",
        textDecoration: "none",
        cursor: "pointer",
        marginTop: "5px",
        letterSpacing: "0.05rem",
      },
      navLinkIcon: {
        height: "18px",
        width: "18px",
      },
      navLinkIconHover: {
        height: "18px",
        width: "18px",
        display: "none",
      },
      navLinkText: {
        display: "inline-flex",
        justifyContent: "center",
        marginLeft: "10px",
        marginBottom: 0,
        marginTop: 0,
        alignItems: "center",
        fontFamily: "PP Fragment-Sans",
        marginRight: "25px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        color: theme.palette.headerLinks.primary,
        opacity: 0.8,
        "&:hover": {
          opacity: 1,
        },
        [theme.breakpoints.down("sm")]: {
          marginRight: "15px",
        },
        [theme.breakpoints.down(360)]: {
          marginRight: "5px",
          fontSize: "12px",
        },
      },
      pIcon1: {
        // color: "white",
        marginRight: "30px",
        [theme.breakpoints.down("md")]: {
          marginRight: "30px",
        },
        [theme.breakpoints.down("sm")]: {
          marginRight: "0px",
        },
      },
      navLinkTextActive: {
        color: theme.palette.headerLinks.active,
        opacity: 0.5,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
        fontFamily: "PP Fragment-Sans",
        marginRight: "25px",
        marginBottom: 0,
        marginTop: 0,
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        "&:hover": {
          opacity: 0.9,
        },
        [theme.breakpoints.down("sm")]: {
          marginRight: "15px",
        },
        [theme.breakpoints.down(360)]: {
          marginRight: "5px",
          fontSize: "12px",
        },
      },
      navLinkSelected: {
        // color: "#58F2F0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
        marginRight: "35px",
        cursor: "pointer",
      },
      actionsBox: {
        position: "relative",
        display: "flex",
        flex: 1,
        justifyContent: "flex-end",
      },
      newNotification: {
        height: "9px",
        width: "9px",
        borderRadius: "9px",
        position: "absolute",
        right: "0",
        top: "0",
      },
      notificationIconBox: {
        marginRight: "30px",
        display: "flex",
        position: "relative",
        alignItems: "center",
        cursor: "pointer",
        "&:hover .bellIcon": {
          display: "none",
        },
        "&:hover .bellIconHover": {
          display: "block",
        },
      },
      iconButton: {
        p: 0,
        // border: "1.6px solid #58F2F0",
        height: "34px",
        width: "34px",
      },
      smallScreenMenuIcon: {
        color: theme.palette.headerLinks.primary,
      },
      profileAvatar: {
        // background: "transparent",
        // color: "#58F2F0",
        fontSize: "13px",
        fontWeight: "500",
      },
      ".navIcon": {
        height: "18px",
        width: "18px",
      },
      ".navIconHover": {
        height: "18px",
        width: "18px",
        display: "none",
      },
      dFlex1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      dFlex2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      },
      dFlex: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        "&:hover .navIcon": {
          display: "none",
        },
        "&:hover .navIconHover": {
          display: "block",
        },
        // "&:hover .navLinkText": {
        //   color: "#58F2F0",
        // },
        margin: 0,
      },
      svgIcon: {
        // "&:hover": {
        //   fill: "red",
        // },
      },
      displaySM: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
          display: "flex",
        },
      },
      displayLG: {
        display: "flex",
        alignItems: "center",
        flex: "1",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      displayAll: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down(800)]: {
          display: "none",
        },
      },
      displaySMAll: {
        display: "none",
        [theme.breakpoints.down(800)]: {
          display: "flex",
          alignItems: "center",
        },
      },
      headerRightContainer: {
        position: "relative",
      },
      profileNavItem: {
        fontSize: "14px",
        // color: "#51566B",
        fontWeight: "400",
        lineHeight: "24px",
        textAlign: "center",
      },
      loggedOutNavItem: {
        color: theme.palette.bodyText.primary,
        border: "none",
        margin: 0,
        padding: 0,
        fontSize: "1rem",
        letterSpacing: "0.00938em",
      },
      loggedOutMenuItem: {
        display: "flex",
        alignItems: "center",
      },
      sellButton: {
        fontSize: "14px",
        // color: "#51566B",
        fontWeight: "400",
        lineHeight: "24px",
        textAlign: "center",
        // background: "transparent",
        cursor: "pointer",
        border: 0,
        margin: 0,
        padding: 0,
        marginLeft: "-2px",
      },
      profileNavIcon: {
        marginRight: "13px",
      },
      profileNavIcon1: {
        marginRight: "13px",
        height: "25px",
        width: "25px",
      },
      profileNavIcon1Hover: {
        marginRight: "13px",
        height: "25px",
        width: "25px",
        display: "none",
      },
      profileNavSName: {
        // background: "#2D355A",
        margin: "12px 16px 15px 12px",
        // border: "1.6px solid #58F2F0",
        width: "18px",
        height: "18px",
        cursor: "auto",
      },
      profileNav: {
        padding: "2px 22px 2px 12px",
        margin: "2px 0",
      },
      profileNav1: {
        padding: "2px 22px 2px 12px",
        margin: "10px 0",
      },
      headerButton: {
        letterSpacing: "0.03em",
        width: "80px",
        height: "40px",
        cursor: "pointer",
        borderRadius: "30px",
        marginRight: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        [theme.breakpoints.down("lg")]: {
          maxWidth: "70px",
          height: "40px",
        },
        [theme.breakpoints.down("md")]: {
          maxWidth: "60px",
          height: "35px",
          marginLeft: "10px",
        },
        [theme.breakpoints.down("sm")]: {
          maxWidth: "50px",
          height: "28px",
          marginLeft: "4px",
        },
        [theme.breakpoints.down("xs")]: {
          maxWidth: "48px",
          height: "26px",
          marginLeft: "3px",
        },
      },
      // headerButtonSmall: {
      //   letterSpacing: "0.03em",
      //   cursor: "pointer",
      //   borderRadius: "30px",
      //   padding: "0px",
      //   marginLeft: "10px",
      // },
    },
    { name: "header-component" }
  )
);

export default headerStyle;

import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* ─── Outer wrapper: constrain to max-width ─── */
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding-inline: 56px;

  @media (max-width: 1250px) { padding-inline: 36px; }
  @media (max-width: 640px)  { padding-inline: 20px; }
`;

/* ─── Logo ─── */
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  text-decoration: none !important;
  flex-shrink: 0;
`;

export const LogoBadge = styled.div`
  width: 34px;
  height: 34px;
  background: linear-gradient(135deg, #C9A84C 0%, #A8872F 100%);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 900;
  color: #1A2B4A;
  font-family: "PP Fragment-Serif", serif;
  flex-shrink: 0;
`;

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  font-family: "PP Fragment-Serif", serif;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

/* ─── Desktop login/register CTAs ─── */
export const ActionsButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  @media (max-width: 800px) { display: none; }
`;

/* ─── Ghost Login link ─── */
export const LoginButton = styled(Link)`
  color: rgba(255,255,255,0.75);
  font-weight: 500;
  font-size: 13px;
  font-family: "PP Fragment-Sans", sans-serif;
  padding: 6px 14px;
  border-radius: 7px;
  transition: color 140ms ease, background 140ms ease;
  text-decoration: none !important;
  white-space: nowrap;

  &:hover {
    color: #FFFFFF;
    background: rgba(255,255,255,0.08);
  }
`;

/* ─── makeStyles ─── */
const headerStyle = makeStyles((theme) =>
  createStyles({
    /* AppBar override */
    appBar: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      borderRadius: "0 !important",
      backgroundColor: "#111E35 !important",
      borderBottom: "1px solid rgba(255,255,255,0.07) !important",
      boxShadow: "none !important",
      height: "72px",
      maxHeight: "72px",
      minHeight: "72px",
      minWidth: "auto",
      maxWidth: "none !important",
      margin: 0,
      padding: 0,
      position: "sticky !important",
      top: 0,
      zIndex: "1200 !important",
    },

    hidden:     { display: "none" },

    toolbar: {
      backgroundColor: "transparent",
      padding: 0,
      margin: 0,
      height: "auto",
      minHeight: "auto !important",
      justifyContent: "flex-start !important",
      gap: "40px",
      width: "100%",
    },

    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },

    txtCapitalize: { textTransform: "capitalize" },

    /* Dropdown header row */
    dropDownMenuHeader: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 14px 10px 10px",
      borderBottom: "1px solid #E2E8F0",
      marginBottom: "4px",
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
      alignItems: "center",
    },

    width100: { width: "100%" },

    /* Nav links */
    navLinkText: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: '"PP Fragment-Sans", sans-serif',
      padding: "5px 12px",
      borderRadius: "7px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "500",
      color: "rgba(255,255,255,0.68)",
      transition: "color 140ms ease, background 140ms ease",
      marginRight: "2px",
      "&:hover": {
        color: "#FFFFFF",
        backgroundColor: "rgba(255,255,255,0.07)",
      },
    },

    navLinkTextActive: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: '"PP Fragment-Sans", sans-serif',
      padding: "5px 12px",
      borderRadius: "7px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "600",
      color: "#C9A84C",
      backgroundColor: "rgba(201,168,76,0.10)",
      marginRight: "2px",
      "&:hover": {
        color: "#E8CC82",
        backgroundColor: "rgba(201,168,76,0.14)",
      },
    },

    actionsBox: {
      position: "relative",
      display: "flex",
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "6px",
    },

    iconButton: {
      padding: "4px !important",
      height: "34px",
      width: "34px",
    },

    /* Avatar */
    profileAvatar: {
      backgroundColor: "#C9A84C !important",
      color: "#1A2B4A !important",
      fontSize: "11px !important",
      fontWeight: "800 !important",
      width: "32px !important",
      height: "32px !important",
      cursor: "pointer",
      transition: "box-shadow 140ms ease",
      "&:hover": {
        boxShadow: "0 0 0 2.5px rgba(201,168,76,0.4)",
      },
    },

    smallScreenMenuIcon: { color: "rgba(255,255,255,0.85)" },

    dFlex1: { display: "flex", justifyContent: "center", alignItems: "center" },
    dFlex2: { display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" },
    dFlex:  { display: "flex", cursor: "pointer", alignItems: "center", margin: 0 },

    displayLG: {
      display: "flex",
      alignItems: "center",
      flex: "1",
      [theme.breakpoints.down("sm")]: { display: "none" },
    },

    displayAll: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down(800)]: { display: "none" },
    },

    displaySMAll: {
      display: "none",
      [theme.breakpoints.down(800)]: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
      },
    },

    headerRightContainer: { position: "relative" },

    profileNavItem: {
      fontSize: "13px",
      color: "#1A1A2E",
      fontWeight: "500",
      lineHeight: "20px",
    },

    loggedOutNavItem: {
      color: "#1A1A2E",
      border: "none",
      margin: 0,
      padding: 0,
      fontSize: "13px",
      fontWeight: "500",
    },

    loggedOutMenuItem: {
      display: "flex",
      alignItems: "center",
      borderRadius: "7px",
    },

    sellButton: {
      fontSize: "13px",
      color: "#1A1A2E",
      fontWeight: "500",
      lineHeight: "20px",
      background: "transparent",
      cursor: "pointer",
      border: 0,
      margin: 0,
      padding: 0,
    },

    profileNavIcon: {
      marginRight: "10px",
      width: "16px",
      height: "16px",
      opacity: 0.55,
    },

    profileNavSName: {
      width: "32px",
      height: "32px",
      cursor: "auto",
      marginRight: "4px",
    },

    profileNav: {
      padding: "7px 14px",
      margin: "1px 4px",
      borderRadius: "7px",
      transition: "background 140ms ease",
      "&:hover": { backgroundColor: "rgba(26,43,74,0.05)" },
    },

    /* Join Now button */
    headerButton: {
      backgroundColor: "#C9A84C !important",
      color: "#111E35 !important",
      fontWeight: "700 !important",
      letterSpacing: "0.01em",
      height: "34px",
      cursor: "pointer",
      borderRadius: "8px !important",
      padding: "0 18px !important",
      fontSize: "13px !important",
      fontFamily: '"PP Fragment-Sans", sans-serif',
      minWidth: "unset !important",
      transition: "all 180ms ease !important",
      boxShadow: "none !important",
      "&:hover": {
        backgroundColor: "#A8872F !important",
        transform: "translateY(-1px)",
        boxShadow: "0 4px 14px rgba(201,168,76,0.35) !important",
      },
    },

    headerButtonSmall: {
      backgroundColor: "#C9A84C !important",
      color: "#111E35 !important",
      fontWeight: "700 !important",
      height: "32px",
      cursor: "pointer",
      borderRadius: "7px !important",
      padding: "0 14px !important",
      fontSize: "12px !important",
      minWidth: "unset !important",
    },
  }),
  { name: "header-component" }
);

export default headerStyle;

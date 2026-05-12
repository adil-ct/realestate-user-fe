import { createStyles, makeStyles } from "@mui/styles";
import styled from "styled-components";

export const NavigationButton = styled.div`
  position: absolute;
  opacity: ${(prop) => prop.opacity || 1};
  top: 49%;
  right: 0;
  width: 50px;
  height: 50px;
  z-index: 99;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const NavigationButtonRight = styled.div`
  position: absolute;
  opacity: ${(prop) => prop.opacity || 1};
  top: 49%;
  left: 0;
  width: 50px;
  height: 50px;
  z-index: 99;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const styles = makeStyles((theme) =>
  createStyles(
    {
      paddingContainer: {
        margin: "0",
        padding: "28px 40px",
        [theme.breakpoints.down("md")]: {
          padding: "20px 16px",
        },
      },
      tar: {
        textAlign: "right",
      },
      saleTimerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      },
      saleText: {
        marginTop: "10px",
        fontWeight: 500,
        fontSize: "12px",
        // color: "#613ED2",
        textAlign: "right",
        whiteSpace: "nowrap",
      },
      mainContainer: {
        color: theme.palette.bodyText.primary,
        background: theme.palette.foreground.primary,
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        [theme.breakpoints.down("md")]: {
          padding: "0",
          height: "auto",
          borderRadius: "12px",
        },
        [theme.breakpoints.down("xs")]: {
          padding: "0",
          height: "auto",
        },
        "& .MuiTableContainer-root": {
          color: theme.palette.bodyText.primary,
          background: theme.palette.foreground.primary,
        },
      },
      Googlemaps: {
        margin: "3px 5px 0 15px",
        display: "inline-block",
        cursor: "pointer",
      },
      flexCenter: {
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      badgeContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        marginBottom: "24px",
      },
      dFlex: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: "8px",
        padding: "24px 24px 0 24px",
        [theme.breakpoints.down("sm")]: {
          padding: "0",
        },
      },
      dFlex1: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      },
      dFlex2: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
      },
      bottomContainer: {
        marginTop: "-10px",
      },
      dFlex3: {
        display: "flex",
        alignItems: "center",
        marginTop: "30px",
      },
      dFlex4: {
        display: "flex",
        marginTop: "30px",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      navigation: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        // background: "#58F2F0",
        // border: "1px solid #E5E5E5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      mLeft20: {
        marginLeft: "20px",
      },
      height40: {
        height: "40px",
      },
      specs: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "40px",
        [theme.breakpoints.down("sm")]: {
          marginTop: "20px",
        },
      },
      dotContainer: {
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        margin: "0px 15px",
        // background: "#C7CCE3",
      },
      progressContainer: {
        marginTop: "8px",
        display: "flex",
        alignItems: "center",
      },
      homeIcon: {
        width: "28px",
        height: "23px",
      },
      upIcon: {
        width: "18px",
        height: "12px",
        marginLeft: "10px",
      },
      heading1: {
        fontSize: "20px",
        fontWeight: "700",
        letterSpacing: "-0.02em",
        color: "#1A1A2E",
        fontFamily: '"PP Fragment-Serif", serif',
        [theme.breakpoints.down("md")]: {
          fontSize: "17px",
        },
      },
      heading2: {
        fontSize: "18px",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        marginLeft: "10px",
      },
      topTrending: {
        marginTop: "30px",
      },
      topTrendingContainer: {
        height: "380px",
        width: "100%",
        borderRadius: "20px",
        marginTop: "20px",
        [theme.breakpoints.down("md")]: {
          height: "auto",
        },
      },
      leftGrid: {
        height: "100%",
        [theme.breakpoints.down("md")]: {
          height: "auto",
        },
        [theme.breakpoints.down("xs")]: {
          height: "150px",
        },
      },
      trendingImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        [theme.breakpoints.down("md")]: {
          height: "none",
        },
        [theme.breakpoints.down("xs")]: {
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          width: "100%",
          height: "150px",
        },
      },
      rightGrid: {
        height: "100%",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "30px 30px",
        [theme.breakpoints.down("md")]: {
          padding: "30px 20px",
          height: "none",
        },
        [theme.breakpoints.down("xs")]: {
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          width: "100%",
        },
      },
      topSection: {
        borderBottom: `1px solid ${theme.palette.dividers.main}`,
        paddingBottom: "10px",
      },
      centerGrid: {
        marginTop: "30px",
        [theme.breakpoints.down("xs")]: {
          marginTop: "10px",
        },
      },
      upcomingContainer: {
        height: "auto",
        marginTop: "20px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
      },
      marketStatsContainer: {
        width: "100%",
        display: "flex",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        boxShadow: "0 1px 6px rgba(26,43,74,0.05)",
      },
      marketStats: {
        gap: "8px",
        flex: "1",
        background: "#FFFFFF",
        borderRight: "1px solid #E2E8F0",
        padding: "20px 14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&:last-child": { borderRight: "none" },
        [theme.breakpoints.down("md")]: {
          padding: "14px 8px",
          alignItems: "center",
          textAlign: "center",
        },
      },
      marketStatsVal: {
        color: "#1A1A2E",
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: 1.15,
        fontFamily: '"PP Fragment-Serif", serif',
        [theme.breakpoints.down("md")]: {
          fontSize: "18px",
        },
      },
      iconBox: {
        width: "42px",
        height: "42px",
        // background: "#FAFAFA",
        // border: "1px solid #F5F5F5",
        // boxShadow:
        //   "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.06), inset -1.0668e-16px -1.74222px 1.74222px #E7E7E7, inset 1.0668e-16px 1.74222px 1.74222px #FFFFFF",
        borderRadius: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
          width: "38px",
          height: "38px",
          position: "absolute",
          top: "5px",
          right: "5px",
          display: "none",
        },
      },
      marketStatsHead: {
        fontSize: "11px",
        fontWeight: "500",
        fontFamily: "PP Fragment-Sans",
        color: "#6B7280",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        display: "flex !important",
        [theme.breakpoints.down("md")]: {
          fontSize: "10px",
          padding: "0 4px",
        },
      },
      featureListBox: {
        display: "flex",
        gap: "16px",
        marginBottom: "24px",
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "2fr 2fr",
          display: "grid",
          flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "2fr 2fr",
          display: "grid",
          flexDirection: "column",
        },
      },
      featureBox: {
        flex: "1",
        color: "#374151",
        display: "flex",
        gap: "6px",
        flexDirection: "column",
        padding: "14px 16px",
        border: "1px solid #E2E8F0",
        borderRadius: "10px",
        background: "#FFFFFF",
        transition: "border-color 150ms ease",
        "&:hover": { borderColor: "#1A2B4A" },
      },
      overviewTextsContainer: {
        display: "flex",
        flexDirection: "column",
      },
      featuresContainer: {
        margin: "16px 0 28px",
        "& > div": {
          padding: "8px",
        },
      },
      featuresIconBox: {
        background: "none",
        display: "flex",

        "& svg.MuiSvgIcon-root": {
          width: "auto",
        },
      },
      featureLabel: {
        fontSize: "14px",
        fontFamily: "PP Fragment-Sans",
        // color: "#7466A0",
      },
      propertyBadge: {
        color: "#1A2B4A",
        fontSize: "11px",
        fontWeight: 600,
        textAlign: "center",
        padding: "3px 10px",
        fontFamily: "PP Fragment-Sans",
        borderRadius: "20px",
        background: "rgba(201,168,76,0.12)",
        border: "1px solid rgba(201,168,76,0.25)",
        width: "auto",
        display: "inline-block",
        margin: "0 6px 0 0",
        textTransform: "capitalize",
        userSelect: "none",
      },
      circle: {
        height: "10px",
        width: "10px",
        borderRadius: "10px",
        background: theme.palette.secondary.dark,
        marginRight: "8px",
        display: "inline-block",
      },
      lightCircle: {
        height: "10px",
        width: "10px",
        borderRadius: "10px",
        marginRight: "8px",
        display: "inline-block",
        background: theme.palette.secondary.light,
      },
      arwOpen: {
        display: "inline-block",
        width: "8px",
        height: "8px",
        borderRight: "2px solid black",
        borderTop: "2px solid black",
        transform: "rotate(135deg)",
        margin: "0 10px 3px",
      },
      arwClose: {
        display: "inline-block",
        width: "8px",
        height: "8px",
        borderRight: "2px solid black",
        borderTop: "2px solid black",
        transform: "rotate(315deg)",
        margin: "0 10px -3px",
      },
      downloadTitle: {
        color: "#272833",
        fontWeight: "700",
      },
      downloadIcon: {
        color: theme.palette.callToAction.light,
        cursor: "pointer",
      },
      mt30: {
        marginTop: "16px",
      },
      mr20: {
        marginRight: "20px",
      },
      mtb30: {
        margin: 0,
      },
      mt16: {
        marginBlock: "12px",
        fontSize: "20px",
      },
      toolsBox: {
        margin: "28px 0 40px",
        [theme.breakpoints.down("md")]: {
          margin: "12px 0 24px",
        },
      },
      mktBtns: {
        width: "140px",
        height: "36px",
        borderRadius: "8px 0 0 8px !important",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        fontWeight: "600 !important",
        fontSize: "12px !important",
        textTransform: "none !important",
        background: "#FFFFFF !important",
        color: "#1A2B4A !important",
        border: "1px solid #E2E8F0 !important",
        boxShadow: "none !important",
        letterSpacing: "0.01em",
        transition: "all 160ms ease",
        "&:hover": {
          background: "rgba(26,43,74,0.04) !important",
        },
      },
      mktBtnsRight: {
        width: "140px",
        height: "36px",
        borderRadius: "0 8px 8px 0 !important",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        fontWeight: "600 !important",
        fontSize: "12px !important",
        textTransform: "none !important",
        background: "#FFFFFF !important",
        color: "#1A2B4A !important",
        border: "1px solid #E2E8F0 !important",
        borderLeft: "none !important",
        boxShadow: "none !important",
        letterSpacing: "0.01em",
        transition: "all 160ms ease",
        "&:hover": {
          background: "rgba(26,43,74,0.04) !important",
        },
      },
      customBtn: {
        width: "140px",
        height: "36px",
        borderRadius: "8px 0 0 8px !important",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        fontWeight: "700 !important",
        fontSize: "12px !important",
        textTransform: "none !important",
        background: "#1A2B4A !important",
        color: "#FFFFFF !important",
        border: "1px solid #1A2B4A !important",
        boxShadow: "none !important",
        letterSpacing: "0.01em",
        "&:hover": {
          background: "#2C4270 !important",
        },
        "&:focus:not(:hover)": {
          background: "#1A2B4A !important",
        },
      },
      customOutlineBtn: {
        width: "140px",
        height: "36px",
        borderRadius: "0 8px 8px 0 !important",
        fontFamily: '"PP Fragment-Sans", sans-serif',
        fontWeight: "700 !important",
        fontSize: "12px !important",
        textTransform: "none !important",
        background: "#1A2B4A !important",
        color: "#FFFFFF !important",
        border: "1px solid #1A2B4A !important",
        borderLeft: "none !important",
        boxShadow: "none !important",
        letterSpacing: "0.01em",
        "&:hover": {
          background: "#2C4270 !important",
          cursor: "pointer",
        },
        "&:focus:not(:hover)": {
          background: "#1A2B4A !important",
        },
      },
      timelineDotBox: {
        background: "transparent",
        boxShadow: "none",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "24px 0 0 0",
        padding: "0",
      },
      timelineDot: {
        height: "10px",
        width: "10px",
        background: "#D8E0E6",
        borderRadius: "11px",
        position: "absolute",
      },
      timelineConnector: {
        backgroundColor: "#D8E0E6",
      },
      customToggle: {
        background: theme.palette.grey[100],
        // border: "1px solid #DCE1E7",
        boxShadow: "none",
        minHeight: "30px",
        minWidth: "50px",
        padding: 0,
        "&:hover": {
          background: theme.palette.grey[50],
          boxShadow: "none",
          // border: "1px solid #58F2F0",
        },
        "&:focus:not(:hover)": {
          background: theme.palette.grey[100],
          boxShadow: "none",
        },
      },
      tabsContainer: {
        position: "relative",
        paddingTop: "20px",
        // boxShadow: "0px 8px 12px 0px rgba(29, 35, 41, 0.10)",
        "& .MuiTabs-root": {
          minHeight: "35px",
        },
      },
      tabStyle: {
        padding: "12px 20px",
        height: "44px",
        minWidth: "120px !important",
        maxWidth: "140px !important",
        color: "#6B7280",
        opacity: 1,
        fontSize: "13px",
        fontWeight: "500",
        textTransform: "none",
        [theme.breakpoints.down("md")]: {
          minWidth: "80px !important",
          maxWidth: "100px !important",
          fontSize: "12px",
          padding: "10px 12px",
        },
        "&:hover": {
          borderRadius: "0",
          color: "#1A2B4A",
        },
        "&.Mui-selected": {
          opacity: 1,
          outline: "none",
          color: "#1A2B4A",
          fontWeight: "600",
        },
      },
      headerMargin: {
        listStylePosition: "inside",
        margin: "16px 0",
      },
      progressBox: {
        flexGrow: 1,
      },
      timelineContent: {
        padding: "24px 16px",
      },
      timelineStepLabel: {
        color: theme.palette.bodyText.disabled,
      },
      slideBox: {
        textAlign: "center",
        zoom: "1",
        [theme.breakpoints.down("md")]: {
          zoom: "0.6",
        },
      },
      timelineBox: {
        paddingLeft: 0,
        "& .MuiTimelineItem-root:nth-child(odd)": {
          backgroundColor: "#F2F5F7",
        },
        "& .MuiTimelineItem-root": {
          paddingInline: "16px",
        },
        [theme.breakpoints.down("md")]: {
          padding: "0px",
        },
      },
      tableHead: {
        color: theme.palette.bodyText.primary,
        backgroundColor: "#F2F5F7",
        fontSize: "14px",
        fontWeight: "600",
        border: 0,
        width: "100%",
      },
      radiusTab: {
        borderRadius: "16px",
        border: "1px solid #D8E0E5",
      },
      styledTC: {
        borderBottom: "1px solid #F2F5F7",
        "&:first-child": {
          borderLeft: "1px solid #F2F5F7",
        },
        "&:last-child": {
          borderRight: "1px solid #F2F5F7",
        },
      },
      uploadDate: {
        color: theme.palette.bodyText.primary,
      },
      profit: {
        color: theme.palette.bodyText.primary,
        background: theme.palette.tables.subheader.background,
        fontSize: "14px",
        fontWeight: "600",
        border: 0,
        textAlign: "right",
      },
      profitHead: {
        color: theme.palette.bodyText.primary,
        background: theme.palette.tables.subheader.background,
        fontSize: "14px",
        fontWeight: "600",
        border: 0,
        textAlign: "left",
      },
      tooltipText: {
        // borderBottom: "1px dashed",
        display: "inline",
      },
      colorLigthGray: {
        color: "#8B8BA7",
      },
      investmentLabel: {
        fontSize: "30px",
        fontWeight: "700",
        [theme.breakpoints.down("md")]: {
          fontSize: "18px",
          fontWeight: "500",
        },
      },
      footerWap: {
        display: "none",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          position: "fixed",
          bottom: 0,
          zIndex: "10",
          // background: "#fff",
          // boxShadow: "0px -2px 4px rgb(0 0 0 / 8%)",
          margin: 0,
          padding: 0,
          height: "60px",
          left: 0,
        },
      },
      footerToken: {
        fontSize: "16px",
        fontStyle: "italic",
        fontWeight: "500",
        // color: "#613ED2",
      },
      label: {
        fontStyle: "italic",
        // color: "#7466A0",
        fontSize: "15px",
        fontWeight: "400",
      },
      tokenLabel: {
        fontSize: "12px",
        fontWeight: 400,
        fontStyle: "italic",
      },
      chartBox: {
        height: "325px",
        width: "100%",
      },
      wrapBar: {
        overflow: "hidden",
        borderRadius: "100px",
        position: "relative",
      },
      labelBarLeft: {
        position: "absolute",
        top: 20,
        left: 20,
        color: "#fff",
        fontSize: "16px",
      },
      labelBarRight: {
        position: "absolute",
        top: 20,
        right: 20,
        color: "#fff",
        fontSize: "16px",
      },
      chartBoxMarket: {
        height: "320px",
        width: "100%",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        padding: "16px",
        boxSizing: "border-box",
      },
      noContentText: {
        fontSize: "14px",
        // color: "#613ED2",
        marginTop: "18px",
      },
      noContentBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          minHeight: "160px",
        },
      },
      processDesc: {
        fontSize: "14px",
        fontWeight: "normal",
        wordBreak: "break-word",
      },
      pb60: {
        paddingBottom: "60px",
      },
      marketDescription: {
        color: "#374151",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: 1.6,
        padding: "16px 18px",
        width: "100%",
        display: "block",
        background: "#F8F7F4",
        borderLeft: "3px solid #C9A84C",
        borderRadius: "8px",
        margin: "16px 0",
      },
      rationalHeader: {
        fontFamily: '"PP Fragment-Serif", serif',
        borderBottom: `1px solid ${theme.palette.dividers.main}`,
        fontSize: "18px",
        fontWeight: "700",
        color: "#1A1A2E",
        letterSpacing: "-0.02em",
        paddingBottom: "12px",
        marginBottom: "16px",
      },
      rationalDesc: {
        fontSize: "14px",
        lineHeight: "1.7",
        color: "#374151",
        margin: "16px 0",
        "& ol": { padding: "0 16px" },
        "& ul": { padding: "0 16px" },
      },
      headerIcon: {
        height: "32px",
        width: "32px",
        color: "#1A2B4A",
        cursor: "pointer",
        transition: "color 140ms ease",
        "&:hover": { color: "#2C4270" },
        [theme.breakpoints.down("md")]: {
          height: "22px",
          width: "22px",
        },
      },
      goBack: {
        fontSize: "20px",
        fontWeight: "700",
        color: "#1A1A2E",
        letterSpacing: "-0.02em",
        fontFamily: '"PP Fragment-Serif", serif',
        [theme.breakpoints.down("md")]: {
          fontSize: "17px",
        },
      },
      tabPanel: {
        padding: "16px",
        [theme.breakpoints.down("md")]: {
          padding: "0px",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "0px",
        },
      },
    },
    { name: "property-profile-view" }
  )
);

export default styles;

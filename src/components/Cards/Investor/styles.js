import { createStyles, makeStyles } from "@mui/styles";
import styled from "styled-components";

const styles = makeStyles((theme) =>
  createStyles(
    {
      pt65: {
        paddingTop: "65px",
      },
      mainContainer: {
        height: "auto",
        overflow: "hidden",
        borderRadius: "16px",
        position: "relative",
        background: theme.palette.foreground.primary,
        border: "1px solid #E2E8F0",
        boxShadow: "0 2px 12px rgba(26,43,74,0.06)",
        transition: "box-shadow 200ms ease, transform 200ms ease",
        "&:hover": {
          boxShadow: "0 8px 28px rgba(26,43,74,0.12)",
          transform: "translateY(-2px)",
        },
      },
      mainContainerVariant1: {
        height: "370px",
        borderRadius: "15px",
        width: "88%",
        position: "absolute",
        // border: "2px solid #58F2F0",
        cursor: "pointer",
        top: "-10%",
        [theme.breakpoints.down("sm")]: {
          position: "static",
          width: "98%",
        },
        [theme.breakpoints.down("xs")]: {
          width: "100%",
        },
      },
      centerBox: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      },
      mainContainerVariant: {
        height: "310px",
        borderRadius: "15px",
        width: "95%",
        position: "relative",
        // border: "2px solid #58F2F0",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
          width: "98%",
        },
        [theme.breakpoints.down("xs")]: {
          width: "100%",
        },
      },
      topSectionVariant: {
        height: "40%",
        background: theme.palette.subBackground,
        overflow: "hidden",
        width: "100%",
        borderTopRightRadius: "15px",
        borderTopLeftRadius: "15px",
        position: "relative",
      },
      imageVariant: {
        height: "100%",
        width: "100%",
        borderTopRightRadius: "15px",
        borderTopLeftRadius: "15px",
        objectFit: "cover",
      },
      topSectionAbsolute: {
        paddingBottom: "5px",
        position: "absolute",
        bottom: 0,
        // background:
        //   "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%)",
        width: "100%",
        padding: "5px 10px",
      },
      bottomSectionVariant: {
        height: "60%",
        // background: "#fff",
        width: "100%",
        padding: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
          padding: "12px",
        },
      },
      cardfooterLabel: {
        // color: "#2D355A",
        fontSize: "14px",
        fontWeight: "400",
        opacity: "0.5",
        letterSpacing: "0.04em",
      },
      flexCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      saleTimerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
      saleText: {
        fontWeight: 500,
        fontSize: "12px",
        // color: "#1A1F35",
        textAlign: "left",
        whiteSpace: "nowrap",
      },
      learnIcon: {
        color: theme.palette.callToAction.primary,
        background: "transparent",
        width: "38px",
        height: "38px",
        cursor: "pointer",
        "&:hover": {
          transform: "translatex(1px)",
          transition: "0.4s ease-out",
          background: "transparent",
          color: theme.palette.callToAction.active,
        },
        [theme.breakpoints.down("sm")]: {
          width: "30px",
          height: "30px",
        },
      },
      learnText: {
        margin: 0,
        textAlign: "right",
        fontSize: "15px",
        fontWeight: "500",
        cursor: "pointer",
        "&:hover": {
          opacity: 0.7,
        },
      },
      w100: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      },
      w100Transformed: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        transform: `scale(${1.1}, ${1.1})`,
        transition: "0.7s all",
        position: "relative",
        zIndex: 199,
        [theme.breakpoints.down("sm")]: {
          transform: `scale(${1.05}, ${1.05})`,
        },
      },
      imageContainer: {
        height: "220px",
        width: "100%",
        borderRadius: "15px",
        // background: "#efefef",
        display: "flex",
        justifyContent: "center",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        position: "relative",
      },
      imageContainerSkelton: {
        height: "220px",
        width: "100%",
        borderRadius: "12px",
        // background: "#efefef",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      image: {
        borderRadius: "15px",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        objectFit: "cover",
        height: "100%",
        width: "100%",
      },
      imagePlaceholder: {
        height: "50px",
        width: "50px",
        borderRadius: "15px",
        objectFit: "cover",
        margin: "0 auto",
        position: "absolute",
        right: 0,
        left: 0,
      },
      carouselImgBox: {
        height: "221px",
        widt: "100%",
        // background: "#efefef",
      },
      carouselImg: {
        height: "221px",
        width: "100%",
        borderRadius: "15px",
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        objectFit: "cover",
      },
      infoContainer: {
        width: "100%",
        padding: "16px 20px",
        display: "flex",
        borderBottomRightRadius: "16px",
        borderBottomLeftRadius: "16px",
        position: "relative",
        gap: "14px",
        flexDirection: "column",
      },
      infoContainerSkelton: {
        bottom: "0",
        width: "100%",
        padding: "10px 20px",
        display: "flex",
        gap: "24px",
        flexDirection: "column",
        // background:
        //   "linear-gradient(0deg, rgb(0 0 0 / 23%) 0%, rgb(0 0 0 / 7%) 100%)",
        borderBottomRightRadius: "15px",
        borderBottomLeftRadius: "15px",
      },
      ml10: {
        marginLeft: "5px",
      },
      imageSkelton: {
        height: "220px",
        width: "100%",
        // background: "#80808008",
        borderRadius: "14px",
        transform: "scale(1,1) !important",
      },
      buttonSkelton: {
        minHeight: "48px",
        flex: 1,
      },
      topSection: {
        // borderBottom: "1px solid #EEEEEE",
        display: "flex",
        width: "100%",
        gap: "14px",
        alignItems: "center",
      },
      propertyTitle: {
        fontSize: "1.25rem",
        textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.35rem",
        }
      },
      centerGrid: {
        marginTop: "10px",
        [theme.breakpoints.down("xs")]: {
          marginTop: "10px",
        },
      },
      centerGrid1: {
        justifyContent: "center",
      },
      coomingSoonCard: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "0",
        width: "100%",
        backdropFilter: "blur(5px)",
        borderRadius: "15px",
      },
      topSectionVariant1: {
        height: "100%",
        // background: "#efefef",
        width: "100%",
        // borderTopRightRadius: "15px",
        // borderTopLeftRadius: "15px",
        position: "relative",
        // borderBottomRightRadius: "15px",
        borderRadius: "15px",
      },
      carouselMinHeight: {
        minHeight: "221px",
      },
      imageVariant1: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: "15px",
      },
      topSectionAbsolute1: {
        paddingBottom: "5px",
        // position: "absolute",
        bottom: 0,
        // background:
        //   "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%)",
        width: "100%",
        padding: "5px 0px",
      },
      dFlex1: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      },
      dFlex2: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
        top: "10px",
        right: "10px",
        // background: "#2D355A",
        borderRadius: "20px",
        padding: "8px 10px 6px",
      },
      upIcon: {
        width: "18px",
        height: "12px",
        marginLeft: "10px",
      },
      flexBox: {
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
      },
      bottomSectionVariant1: {
        position: "absolute",
        // height: "50%",
        bottom: 0,
        // background: "rgba(0, 0, 0, 0.65)",
        width: "100%",
        borderBottomRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        padding: "15px 20px",
        [theme.breakpoints.down("sm")]: {
          bottom: "2px",
          width: "99%",
        },
        [theme.breakpoints.between(950, 1180)]: {
          padding: "15px 15px",
        },
      },
      buttonWidth: {
        [theme.breakpoints.down("md")]: {
          width: "90%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
      p40: {
        padding: "20px",
        [theme.breakpoints.down("md")]: {
          padding: "20px 10px",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "18px",
        },
      },
      bottomContainer: {},
      bottomContainer1: {
        marginTop: "-10px",
      },
      dFlex3: {
        display: "flex",
        alignItems: "center",
      },
      height40: {
        height: "37px",
        width: "139px",
        marginTop: "5px",
        [theme.breakpoints.down("sm")]: {
          height: "30px",
          //width: "110px",
        },
      },
      f16: {
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "14px",
        },
      },
      mLeft20: {
        marginLeft: "20px",
      },
      dFlex4: {
        display: "flex",
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
      centerGridVariant: {
        marginBottom: "15px",
        paddingBottom: "10px",
        display: "flex",
        alignItems: "flex-start",
        [theme.breakpoints.down("xs")]: {
          marginTop: "10px",
        },
      },
      centerGridVariant1: {
        marginTop: "5px",
        // borderBottom: "1px solid #4C5A99",
        paddingBottom: "5px",
        display: "flex",
        alignItems: "flex-start",
        [theme.breakpoints.down("xs")]: {
          marginTop: "10px",
        },
      },
      specs: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "10px",
        overflow: "auto",
        whiteSpace: "nowrap",
        minHeight: "20px",
      },
      specs1: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "5px",
        overflow: "auto",
        whiteSpace: "nowrap",
        minHeight: "20px",
      },
      dotContainer: {
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        margin: "0px 15px",
        // background: "#C7CCE3",
        display: "inline-block",
      },
      progressContainer: {
        display: "flex",
        alignItems: "center",
      },
      PDCbox: {
        position: "sticky",
        overflow: "hidden",
        top: "92px",
        right: "24px",
        background: theme.palette.foreground.primary,
        color: theme.palette.bodyText.primary,
        boxShadow: "0px 24px 64px 0px rgba(29, 35, 41, 0.10)",
        border: "1px solid #D8E0E5",
        borderRadius: "16px",
        [theme.breakpoints.down("sm")]: {
          position: "fixed",
          bottom: "0",
          top: "auto",
          left: "0",
          right: "0",
          marginInline: "auto",
          zIndex: "100",
        },
      },
      incrementIcon: {
        marginLeft: "6px",
        "& svg": {
          width: "20px",
        },
      },
      infoLabel: {
        fontWeight: "400",
        // color: "#AEB5D6",
        fontSize: "12px",
        textAlign: "center",
      },
      hoverBtn: {
        position: "absolute",
        zIndex: "1",
        top: "20px",
        right: "20px",
      },
      tagsEle: {
        fontSize: "11px",
        textTransform: "capitalize",
        fontWeight: "500",
        marginRight: "11px",
        borderRadius: "29px",
      },
      quote: {
        fontWeight: "400",
        fontStyle: "italic",
        marginTop: "6px",
        fontSize: "12px",
        width: "100%",
      },
      tooltipText: {
        borderBottom: "1px dashed",
        display: "table",
        margin: "0 auto",
      },
      tooltipTextInline: {
        borderBottom: "1px dashed",
      },
      cardfooterLabel1: {
        fontSize: "12px",
        marginTop: "-5px",
        fontWeight: 400,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
        },
      },
      cardfooterValue: {
        fontSize: "15px",
        fontWeight: "700",
        [theme.breakpoints.between(950, 1180)]: {
          fontSize: "16px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "16px",
        },
      },
      cardNavigation: {
        display: "inline-grid",
        height: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        borderRadius: "15px",
        width: "100%",
      },
      mt20: {
        marginTop: "20px",
        [theme.breakpoints.down("sm")]: {
          marginTop: "10px",
        },
      },
      mtb20: {
        position: "absolute",
        width: "90%",
        bottom: "20px",
        [theme.breakpoints.down("sm")]: {
          marginTop: "10px 0",
        },
      },
      progressBarWrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: "99%",
        margin: "0 auto",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        // background: "#d8d8d8"
      },
      locationEle: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#fff",
        lineHeight: 1,
        flexShrink: 0,
        textShadow: "0 1px 3px rgba(0,0,0,0.5)",
      },
      locationEleCard: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#4360AB",
        lineHeight: 1,
        flexShrink: 0,
      },
      quoteLabel: {
        fontSize: "14px",
        fontWeight: "500",
        borderBottom: `1px solid ${theme.palette.dividers.main}`,
        paddingBottom: "6px",
        marginBottom: "6px",
        fontStyle: "italic",
      },
      valuesRow: {
        margin: "6px 0",
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      },
      emptyProgressBar: {
        // backgroundColor: "rgb(45 53 90 / 20%)",
        background: theme.palette.secondary.main,
        bottom: "10px",
        height: "13px",
        overflow: "hidden",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
          bottom: "15px",
        },
      },
      fillingProgressBar: {
        background: theme.palette.secondary.main,
        borderRadius: "0px",
        height: "100%",
        width: "100%",
        position: "absolute",
      },
      percentage: {
        // color: "#5273e6",
        fontSize: "46px",
      },
      mainProgressBarDiv: {
        display: "flex",
        position: "absolute",
        width: "140%",
        left: "-50px",
        bottom: "-33px",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          bottom: "-40px",
        },
      },
      pdcProgress: {
        position: "relative",
        bottom: "-30px",
        width: "120%",
        left: "-24px",
      },
      trendingBadge: {
        justifyContent: "center",
        background: "rgba(201,168,76,0.90)",
        backdropFilter: "blur(8px)",
        borderRadius: "20px",
        position: "absolute",
        alignItems: "center",
        padding: "3px 10px",
        fontWeight: "700",
        fontSize: "11px",
        lineHeight: "12px",
        display: "flex",
        color: "#1A2B4A",
        height: "22px",
        left: "16px",
        top: "14px",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        overflow: "hidden",
      },
      propertyNameContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "48px 16px 16px",
        background: "linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.28) 60%, transparent 100%)",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },
      propertyLocationContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "#fff",
        marginTop: "2px",
      },
      investmentsContainer: {
        width: "100%",
      },
      investedContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "4px",
      },
      investedPercentage: {
        fontSize: "0.75rem",
        lineHeight: "normal",
        color: "#51585F",
      },
      buttonsContainer: {
        display: "flex",
        width: "100%",
        gap: "16px",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      },
      buttonSolid: {
        flex: 1,
        fontSize: "0.75rem",
        fontWeight: "700",
        lineHeight: 1,
        color: "#FFFFFF",
        backgroundColor: "#1A2B4A",
        height: "40px",
        borderRadius: "8px",
        textTransform: "none",
        letterSpacing: "0.01em",
        transition: "all 160ms ease",
        "&:hover": {
          backgroundColor: "#2C4270",
          transform: "translateY(-1px)",
          boxShadow: "0 4px 14px rgba(26,43,74,0.22)",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.78rem",
        },
      },
      buttonOutlined: {
        flex: 1,
        fontSize: "0.75rem",
        fontWeight: "600",
        lineHeight: 1,
        color: "#1A2B4A",
        borderColor: "#CBD5E1 !important",
        height: "40px",
        borderRadius: "8px",
        textTransform: "none",
        letterSpacing: "0.01em",
        transition: "all 160ms ease",
        "&:hover": {
          borderColor: "#1A2B4A !important",
          backgroundColor: "rgba(26,43,74,0.04)",
        },
        "&:disabled": {
          cursor: "not-allowed",
          pointerEvents: "all",
          color: "#94A3B8",
          borderColor: "#E2E8F0 !important",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.78rem",
        },
      },
      separator: {
        height: "1px",
        width: "100%",
        backgroundColor: "#E2E8F0",
      },
      investorsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      investorsNumber: {
        color: "#6A7379",
      },
      avatar: {
        width: "32px",
        height: "32px",
        borderRadius: "100px",
        objectFit: "cover",
        border: "1px solid white",
      },
      surplus: {
        height: "32px",
        minWidth: "32px",
        borderRadius: "100px",
        border: "1px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        backgroundColor: "#D8E0E5",
        color: "#99A2A8",
        lineHeight: 1,
        position: "relative",
      },
      fixedPanelImage: {
        borderRadius: "12px",
        width: "100%",
        height: "160px",
        objectFit: "cover",
        display: "block",
      },
      hideMobile: {
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    },
    { name: "cards-investor" }
  )
);

export const AvatarsGroupContainer = styled.div`
  display: flex;

  > * {
    margin-left: -10px;
  }
  > *:first-child {
    margin-left: 0px;
  }
`;

export const ProgressBar = styled.span`
  height: 8px;
  overflow: hidden;
  border-radius: 40px;
  position: relative;
  background-color: #d8e0e5;
  width: 100%;
  display: block;

  ::before {
    content: "";
    width: 100%;
    height: 8px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    transform-origin: left;
    background-color: #5bc1a1;
    border-radius: 40px;
    transition: transform 200ms ease;
    transform: translateX(
      -${(props) => (props.progress ? 100 - props.progress : 100)}%
    );
  }
`;

export default styles;

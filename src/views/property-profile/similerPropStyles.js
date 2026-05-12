import { createStyles, makeStyles } from "@mui/styles";

const SimilarPropStyles = makeStyles((theme) =>
  createStyles(
    {
      investorPage: {
        color: theme.palette.bodyText.primary,
      },
      paddingContainer: {
        margin: "0",
        padding: "24px 40px 32px",
        [theme.breakpoints.down("md")]: {
          padding: "20px 16px 24px",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "16px 12px 20px",
        },
      },
      mainContainer: {
        color: theme.palette.bodyText.primary,
        padding: "0",
        width: "100%",
        boxSizing: "border-box",
      },
      flexCenter: {
        minHeight: "calc(100vh - 85px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
          padding: "20px",
          height: "auto",
        },
      },
      dFlex: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "50px",
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
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
        whiteSpace: "nowrap",
        overflow: "auto",
        [theme.breakpoints.down("sm")]: {
          marginTop: "20px",
        },
      },
      dotContainer: {
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        margin: "0px 10px",
        // background: "#C7CCE3",
        "&, &:after": {
          content: " ",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          margin: "0px 10px",
          // background: "#C7CCE3",
          display: "inline-block",
        },
      },
      progressContainer: {
        marginTop: "8px",
        display: "flex",
        alignItems: "center",
      },
      homeIcon: {
        width: "22px",
        height: "22px",
        color: "#C9A84C",
        flexShrink: 0,
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
        marginLeft: "8px",
      },
      heading2: {
        fontSize: "18px",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        marginLeft: "10px",
      },
      topTrending: {
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "1fr",
        },
      },
      topTrendingContainer: {
        height: "380px",
        width: "100%",
        borderRadius: "20px",
        // border: "2px solid #E3E5F1",
        marginTop: "20px",
        [theme.breakpoints.down("md")]: {
          height: "auto",
        },
      },
      leftGrid: {
        height: "100%",
        // background:
        //   "url(https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif)",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // borderTopLeftRadius: "20px",
        // borderBottomLeftRadius: "20px",
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
        // background: "#2D355A",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "30px 30px",
        [theme.breakpoints.down("md")]: {
          padding: "30px 20px",
          height: "auto",
        },
        [theme.breakpoints.down("xs")]: {
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          width: "100%",
        },
      },
      topSection: {
        // borderBottom: "1px solid #4C5A99",
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
        marginTop: "18px",
        marginBottom: "18px",
        display: "flex",
        justifyContent: "center",
        "&:hover": {
          transform: "translateY(-5px)",
          transition: "0.8s ease-out",
        },
      },
      tagsEle: {
        fontSize: "13px",
        // color: "#C7CCE4",
        fontWeight: 500,
        textTransform: "capitalize",
        width: "auto",
      },
      noContentText: {
        fontSize: "14px",
        // color: "black",
        marginTop: "18px",
        fontStyle: "italic",
        letterSpacing: "0.02em",
        fontWeight: 400,
      },
      noContentBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        flexDirection: "column",
      },
      quote: {
        fontWeight: "400",
        fontStyle: "italic",
        marginTop: "6px",
        // color: "#ECEEF6",
        fontSize: "12px",
        width: "100%",
      },
      cardfooterLabel: {
        // color: "#AEB5D6",
        fontSize: "13px",
        textAlign: "center",
      },
      cardfooterValue: {
        fontSize: "24px",
        fontWeight: "bold",
        // color: "#fff",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
          fontSize: "18px",
        },
      },
      tooltipText: {
        borderBottom: "1px dashed",
        display: "table",
        margin: "0 auto",
      },
    },
    { name: "views-investor-styles" }
  )
);

export default SimilarPropStyles;

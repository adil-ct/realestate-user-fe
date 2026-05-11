import { createStyles, makeStyles } from "@mui/styles";
import Background from "assets/images/Background1.jpg";

const styles = makeStyles((theme) =>
  createStyles(
    {
      avatar: {
        height: "500px",
        width: "100%",
        objectFit: "cover",
      },
      root: {
        paddingTop: "70px",
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "100vh",
        paddingBottom: "50px",
      },
      mainContainer: {
        background: theme.palette.foreground.primary,
        color: theme.palette.bodyText.primary,
      },
      btnSection: {
        marginTop: "50px",
      },
      blogDetailSection: {
        marginTop: "50px",
        display: "flex",
        gap: "24px",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },
      },
      blogDetailSocials: {
        flexShrink: "0",
        display: "flex",
        padding: "40px 26px",
        flexDirection: "column",
        gap: "8px",
        ["&>a img"]: {
          padding: "6px",
          borderRadius: "50%",
          border: "1px solid #4360AB",
        },
        [theme.breakpoints.down("md")]: {
          flexDirection: "row",
          padding: "0px",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "0px",
          flexDirection: "row",
        },
      },
      bottomSection: {
        width: "100%",
        display: "flex",
        paddingTop: "20px",
        paddingBottom: "30px",
        bottom: "0",
        height: "12%",
        [theme.breakpoints.down("md")]: {
          position: "unset",
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          marginTop: "0px",
          height: "30%",
          width: "100%",
          paddingBottom: "15px",
        },
      },
      bottomContentContainer: {
        width: "100%",
        gap: "24px",
        borderTop: "1px solid #BCC5CC",
        borderBottom: "1px solid #BCC5CC",
        padding: "40px 0px",
        display: "flex",
      },
      profile: {
        objectFit: "cover",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
      },

      blogDetailSectionDescription: {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "28px",
        letterSpacing: "0.08",
        margin: "20px 0",
        [theme.breakpoints.down("md")]: {
          fontSize: "16px",
          margin: "0px",
        },
        [theme.breakpoints.down("sm")]: {
          margin: "0px",
          fontSize: "16px",
        },
      },
      heroBlogDetails: {
        fontSize: "16px",
        fontFamily: "PP Fragment-Glare",
        color: "#6A7379",
        textTransform: "capitalize",
      },
      heroBlogTitle: {
        fontSize: "56px",
        fontFamily: "PP Fragment-Serif",
        maxWidth: "650px",
        textAlign: "center",
        lineHeight: "120%",
        [theme.breakpoints.down("md")]: {
          fontSize: "28px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "24px",
        },
      },
      heroBlogAuthorDetails: {
        display: "flex",
        gap: "12px",
        alignItems: "center",
        ["&>img"]: {
          width: "32px",
          height: "32px",
          objectFit: "cover",
          borderRadius: "50%",
        },
      },
      heroBlogAuthorDetailsName: {
        fontSize: "16px",
        fontFamily: "PP Fragment-Glare",
      },
      blogSection1: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "180px",
        paddingBottom: "80px",
        alignItems: "center",
        gap: "24px",
        [theme.breakpoints.down("md")]: {
          paddingTop: "100px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "13px",
          paddingTop: "80px",
        },
      },
      blogSection2: {
        marginTop: "40px",
      },
      blogDetail: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        [theme.breakpoints.down("xl")]: {
          fontSize: "14px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "16px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "13px",
        },
      },
      blogDetail1: {
        marginTop: "6px",
        paddingLeft: "10px",
        [theme.breakpoints.down("xl")]: {
          fontSize: "14px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "16px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "13px",
        },
      },
      header3: {
        fontStyle: "normal",
        fontWeight: 600,
        fontFamily: "PP Fragment-Serif",
        fontSize: "19px",
        lineHeight: "140%",
        [theme.breakpoints.down("xl")]: {
          fontSize: "18px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "19px",
        },
        [theme.breakpoints.down("sm")]: {
          lineHeight: "26px",
        },
      },
      blogDetailAuthorDescription: {
        fontFamily: "PP Fragment-Sans",
        fontSize: "14px",
        lineHeight: "160%",
      },
      // blogDetailAuthorLinksContainer: {
      //     display: "flex",
      //     gap: "20px",
      // },
    },
    { name: "our-blog-detail-view" }
  )
);

export default styles;

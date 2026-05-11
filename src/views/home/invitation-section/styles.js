import { createStyles, makeStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles(
    {
      root: {
        background: theme.palette.foreground.primary,
        color: theme.palette.bodyText.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 0,
      },
      alignLeft: {
        textAlign: "left",
      },
      pageColumn: {
        padding: "10% 15%",
        [theme.breakpoints.down("sm")]: {
          padding: "56px 20px 0 20px",
        },
      },
      titleContainer: {
        marginBottom: "8px",
      },
      title1: {
        fontWeight: 300,

        [theme.breakpoints.up("lg")]: {
          fontSize: "3.6vw",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "36px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "36px",
        },
      },
      title2: {
        [theme.breakpoints.up("lg")]: {
          fontSize: "3.6vw",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "36px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "36px",
        },
      },
      text: {
        maxWidth: "470px",
        fontSize: "18px",
      },
      finalText: {
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "18px",
        },
      },
      signatureImage: {
        width: "230px",
        height: "85px",
        marginTop: "8px",
      },
      heroImageArea: {
        paddingTop: "0 !important",
      },
      heroImage: {
        width: "100%",
      },
    },
    { name: "home-page-invitation-section-view" }
  )
);

export default styles;

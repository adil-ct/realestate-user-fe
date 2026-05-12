import { styled } from "@mui/material/styles";
import { Grid, Typography, Box, Paper } from "@mui/material";
import MKButton from "@mui/material/Button";

// Relative imports
import useConfig from "utils/config";
import Phone from "assets/images/phone1.png";
import Partners from "assets/images/partners.png";
import Clockwise from "assets/images/clock2.gif";
import styles from "./styles";

const LeftItem = styled(Paper, { name: "top-section-left-item" })(
  ({ theme }) => ({
    // backgroundColor: 'transparent',
    ...theme.typography.body2,
    display: "flex",
    flexDirection: "column",
    padding: "80px 0px 50px",
    boxShadow: "none",
    // color: theme.palette.text.secondary,
    [theme.breakpoints.down("md")]: {
      padding: "70px 0px 0px",
      height: "auto",
      marginBottom: "70px",
    },
    [theme.breakpoints.between(320, 426)]: {
      marginBottom: "10px",
      padding: "20px 0px 0px",
    },
    [theme.breakpoints.down(321)]: {
      marginBottom: "10px",
      padding: "20px 0px 0px",
    },
  }),
);

const RightItem = styled(Paper, { name: "top-section-right-item" })(
  ({ theme }) => ({
    // backgroundColor: 'transparent',
    ...theme.typography.body2,
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    // color: theme.palette.text.secondary,
    position: "relative",
    marginLeft: "-20px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      marginLeft: "0px",
      width: "418px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      height: "400px",
      marginBottom: "40px",
    },
    [theme.breakpoints.down(theme.breakpoints.values.xs + 321)]: {
      height: "350px",
    },
  }),
);

const LeftBackground = styled(Paper, { name: "top-section-left-background" })(
  ({ theme }) => ({
    boxShadow: "none",
    background: `url(${Clockwise})`,
    position: "absolute",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    top: "5px",
    left: "-30px",
    [theme.breakpoints.down("md")]: {
      left: "-15px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "235px",
      width: "235px",
      backgroundSize: "100% 100%",
      left: "30px",
      top: "-10px",
    },
    [theme.breakpoints.down(theme.breakpoints.values.xs + 321)]: {
      height: "210px",
      width: "210px",
    },
  }),
);

const RightBackground = styled(Paper, { name: "top-section-right-background" })(
  ({ theme }) => ({
    boxShadow: "none",
    background: `url(${Clockwise})`,
    position: "absolute",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    bottom: "-230px",
    right: "-60px",
    [theme.breakpoints.down("md")]: {
      right: "-70px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "235px",
      width: "235px",
      backgroundSize: "100% 100%",
      right: "25px",
      bottom: "-40px",
    },
    [theme.breakpoints.down(theme.breakpoints.values.xs + 321)]: {
      height: "210px",
      width: "210px",
    },
  }),
);

const TopSection = () => {
  const classes = styles();
  const { REGISTER_LINK } = useConfig();

  const handleCloseNavMenu = (link) => {
    if (link) window.location = link;
  };

  return (
    <Box className={`${classes.root} top-container-lg`}>
      <Grid container spacing={2} className="max-width1400">
        {/* Left side content */}
        <Grid item sm={12} md={6} lg={8} className="no-padding-left">
          <LeftItem>
            <Typography
              variant="h4"
              display="inline"
              className={classes.header1}
            >
              Invest like a{" "}
              <Typography display="inline" className={classes.header2}>
                Occurrence
              </Typography>
            </Typography>

            <Box mt={2}>
              <Typography
                className={classes.header3Block}
                variant="h5"
                display="inline"
              >
                Create a second source of income, earn appreciation, and receive
                tax benefits from expertly vetted rental properties. Start
                building your real estate portfolio with $100
              </Typography>
            </Box>
            <Box className={classes.dFlex}>
              <MKButton
                variant="contained"
                onClick={() => handleCloseNavMenu(REGISTER_LINK)}
                className={classes.headerButton}
              >
                Get Started
              </MKButton>
            </Box>
            <Box
              mt={{
                xs: "20px",
                md: "30px",
                lg: "50px",
              }} /*style={{display : 'inline-block'}}*/
            >
              <Typography
                className={classes.header3BlockItalic}
                variant="h5"
                display="inline"
              >
                Partnered with the{" "}
                <Typography className={classes.header3} display="inline">
                  <Typography
                    className={classes.header3Light1Italic}
                    display="inline"
                    component={"span"}
                  >
                    best
                  </Typography>
                </Typography>
              </Typography>
              <img
                src={Partners}
                alt="Partners"
                className={classes.partnersIcon}
              />
            </Box>
          </LeftItem>
        </Grid>
        {/* Right side content */}
        <Grid
          item
          sm={12}
          md={6}
          lg={4}
          className={`${classes.rightGrid} right-grid-landing`}
        >
          <RightItem>
            <LeftBackground className="left_back_mock" />
            <RightBackground className="right_back_mock" />
            <img
              src={Phone}
              alt="phone"
              title="Single Family Rental Marketplace"
              className={classes.avatar}
            />
          </RightItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopSection;

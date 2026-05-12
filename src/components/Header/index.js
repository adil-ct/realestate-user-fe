/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MKButton from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { PopupButton } from "@typeform/embed-react";
// Logo removed for whitelabeling
import headerStyle, {
  ActionsButtonsContainer,
  HeaderContainer,
  LoginButton,
  LogoLink,
} from "./styles";
import Logo from "components/Logo";

// Static imports
import {
  PaymentCard,
  BellBlack,
  ProfileCircle,
  Logout,
  Settings,
  Help,
  HomeBlack,
  LoginBlack,
  LoginDark,
  Menu3Black,
  Referral,
  MogulClubMenu,
} from "constants/assets";
import { HELP_LINK, MOGUL_SUPPORT_EMAIL } from "constants/env";
import MKTypography from "components/custom/MKTypography";
import { logout, profileFetch } from "store/actions";
import MKBox from "components/custom/MKBox";
import { routePaths } from "routes/mainRoutes/routePaths";

const pages = [
  {
    name: "Properties",
    link: routePaths.INVESTOR_PATH,
  },
  {
    name: "Portfolio",
    link: routePaths.PORTFOLIO_PATH,
  },
  // {
  //   name: "About",
  //   link: routePaths.ABOUT_US_PATH,
  // },
  // {
  //   name: "Blog",
  //   link: routePaths.OUR_BLOGS_PATH,
  // },
  // {
  //   name: "Occurrence Club",
  //   link: routePaths.MOGUL_CLUB_PATH,
  // },
];

const Header = () => {
  const classes = headerStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [usernameData, setUsernameData] = useState({});
  const userData = useSelector((state) => state.auth.userData);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const hasAuthToken = Boolean(localStorage.getItem("authToken"));
  const mediumScreen = useMediaQuery("(max-width:960px)");

  useEffect(() => {
    if (!userData && hasAuthToken) {
      dispatch(profileFetch());
    }

    let shortName =
      userData?.firstName?.split("")[0] + userData?.lastName?.split("")[0];
    let fullName = userData?.firstName
      ? userData?.firstName + " " + userData?.lastName
      : "";
    setUsernameData({
      shortName: shortName && shortName?.toUpperCase(),
      fullName,
    });
  }, [userData]);

  const authLinks = [
    // {
    //   name: "Why Real Estate",
    //   route: routePaths.WHY_REAL_ESTATE_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.WHY_REAL_ESTATE_PATH);
    //   },
    // },
    // {
    //   name: "How it Works",
    //   route: routePaths.HOW_IT_WORKS_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.HOW_IT_WORKS_PATH);
    //   },
    // },
    // {
    //   name: "About",
    //   route: routePaths.ABOUT_US_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.ABOUT_US_PATH);
    //   },
    // },
    // {
    //   name: "Occurrence Club",
    //   route: routePaths.MOGUL_CLUB_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.MOGUL_CLUB_PATH);
    //   },
    // },
    // {
    //   name: "Blog",
    //   route: routePaths.OUR_BLOGS_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.OUR_BLOGS_PATH);
    //   },
    // },
    // {
    //   name: "Login",
    //   icon: LoginBlack,
    //   hoverIcon: LoginDark,
    //   route: routePaths.LOGIN_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.LOGIN_PATH);
    //   },
    // },
  ];

  const loggedOutMenuLinks = [
    {
      name: "Register",
      hoverIcon: LoginDark,
      route: routePaths.LOGIN_REGISTER_PATH,
      clickHandler: () => {
        handleCloseUserMenu();
        navigate(routePaths.LOGIN_REGISTER_PATH);
      },
    },
    {
      name: "Login",
      icon: LoginBlack,
      hoverIcon: LoginDark,
      route: routePaths.LOGIN_PATH,
      clickHandler: () => {
        handleCloseUserMenu();
        navigate(routePaths.LOGIN_PATH);
      },
    },
    // {
    //   name: "Why Real Estate",
    //   route: routePaths.WHY_REAL_ESTATE_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.WHY_REAL_ESTATE_PATH);
    //   },
    // },
    // {
    //   name: "How it Works",
    //   route: routePaths.HOW_IT_WORKS_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.HOW_IT_WORKS_PATH);
    //   },
    // },
    // {
    //   name: "About",
    //   route: routePaths.ABOUT_US_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.ABOUT_US_PATH);
    //   },
    // },
    // {
    //   name: "Occurrence Club",
    //   route: routePaths.MOGUL_CLUB_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.MOGUL_CLUB_PATH);
    //   },
    // },
    // {
    //   name: "Blog",
    //   route: routePaths.OUR_BLOGS_PATH,
    //   clickHandler: () => {
    //     handleCloseUserMenu();
    //     navigate(routePaths.OUR_BLOGS_PATH);
    //   },
    // },
  ];

  const settings = mediumScreen
    ? [
        {
          name: "Properties",
          icon: HomeBlack,
          clickHandler: () => {
            navigate(routePaths.INVESTOR_PATH);
            handleCloseUserMenu();
          },
        },
        // {
        //   name: "Occurrence Club",
        //   icon: MogulClubMenu,
        //   clickHandler: () => {
        //     navigate(routePaths.MOGUL_CLUB_PATH);
        //     handleCloseUserMenu();
        //   },
        // },
        {
          name: "Portfolio",
          icon: Menu3Black,
          clickHandler: () => {
            navigate(routePaths.PORTFOLIO_PATH);
            handleCloseUserMenu();
          },
        },
        ...(userData?.kycStatus === "approved"
          ? [
              {
                name: "Accounts",
                icon: PaymentCard,
                clickHandler: () => {
                  navigate(routePaths.ACCOUNTS_PATH);
                  handleCloseUserMenu();
                },
              },
            ]
          : []),
        ...(userData?.affiliate
          ? [
              {
                name: "Investor Relations",
                icon: Referral,
                clickHandler: () => {
                  navigate(routePaths.REWARDS_PATH);
                  handleCloseUserMenu();
                },
              },
            ]
          : []),
        {
          name: "Profile",
          icon: ProfileCircle,
          clickHandler: () => {
            navigate(routePaths.PROFILE_PATH);
            handleCloseUserMenu();
          },
        },
        {
          name: "Settings",
          icon: Settings,
          clickHandler: () => {
            navigate(routePaths.ACCOUNT_SETTINGS_PATH);
            handleCloseUserMenu();
          },
        },
        {
          name: "Support",
          icon: Help,
          clickHandler: () => {
            window.open(
              `mailto:${MOGUL_SUPPORT_EMAIL || "support@occurence.com"}`,
              "_blank",
            );
            handleCloseUserMenu();
          },
        },
        {
          name: "Notifications",
          icon: BellBlack,
          clickHandler: () => {
            navigate(routePaths.NOTIFICATIONS_PATH);
            handleCloseUserMenu();
          },
        },
        {
          name: "Logout",
          icon: Logout,
          clickHandler: () => {
            dispatch(logout({ navigate }));
            handleCloseUserMenu();
          },
        },
      ]
    : [
        ...(userData?.affiliate
          ? [
              {
                name: "Investor Relations",
                icon: Referral,
                clickHandler: () => {
                  navigate(routePaths.REWARDS_PATH);
                  handleCloseUserMenu();
                },
              },
            ]
          : []),
        ...(userData?.kycStatus === "approved"
          ? [
              {
                name: "Accounts",
                icon: PaymentCard,
                clickHandler: () => {
                  navigate(routePaths.ACCOUNTS_PATH);
                  handleCloseUserMenu();
                },
              },
            ]
          : []),
        {
          name: "Profile",
          icon: ProfileCircle,
          clickHandler: () => {
            navigate(routePaths.PROFILE_PATH);
            handleCloseUserMenu();
          },
        },
        {
          name: "Settings",
          icon: Settings,
          clickHandler: () => {
            navigate(routePaths.ACCOUNT_SETTINGS_PATH);
            handleCloseUserMenu();
          },
        },
        {
          name: "Support",
          icon: Help,
          clickHandler: () => {
            window.open(`mailto:dev@investech.global`, "_blank");
          },
        },
        {
          name: "Notifications",
          icon: BellBlack,
          clickHandler: () => {
            navigate(routePaths.NOTIFICATIONS_PATH);
            handleCloseUserMenu();
          },
        },
        {
          name: "Logout",
          icon: Logout,
          clickHandler: () => {
            dispatch(logout({ navigate }));
            handleCloseUserMenu();
          },
        },
      ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <HeaderContainer>
        <Toolbar
          disableGutters
          className={`${classes.height100} ${classes.width100} ${classes.toolbar}`}
        >
          <Box className={classes.flexCenter}>
            <LogoLink
              to={routePaths.LANDING_PAGE_PATH}
              target="_self"
              rel="noreferrer"
            >
              <Logo tone="dark" height={40} />
            </LogoLink>
          </Box>
          <Box className={classes.flex1}>
            {(isLogin || hasAuthToken) && (
              <Box className={`${classes.displayLG}`}>
                {pages.map((page, index) => {
                  return page.external ? (
                    <a
                      key={`${page.name}-index-link`}
                      href={page.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MKTypography
                        variant="h7"
                        fontWeight="medium"
                        className={classes.navLinkText}
                      >
                        {page.name}
                      </MKTypography>
                    </a>
                  ) : (
                    <NavLink
                      key={index}
                      to={page.link}
                      className={classes.flexCenter}
                    >
                      {({ isActive }) => {
                        return (
                          <Box className={classes.dFlex}>
                            <MKTypography
                              variant="h7"
                              fontWeight="medium"
                              className={
                                isActive
                                  ? classes.navLinkTextActive
                                  : classes.navLinkText
                              }
                            >
                              {page.name}
                            </MKTypography>
                          </Box>
                        );
                      }}
                    </NavLink>
                  );
                })}
              </Box>
            )}

            <Box className={classes.actionsBox}>
              {isLogin || hasAuthToken ? (
                <>
                  <Tooltip enterTouchDelay={0} title="Profile">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      className={classes.iconButton}
                    >
                      <Avatar
                        // alt={usernameData?.shortName}
                        className={classes.profileAvatar}
                      >
                        {usernameData?.shortName?.length > 0
                          ? usernameData?.shortName
                          : "MP"}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Typography
                      variant="h6"
                      noWrap
                      className={`${classes.txtCapitalize} ${classes.displayLG} ${classes.dropDownMenuHeader}`}
                    >
                      <IconButton
                        onClick={() => {
                          settings[0].name === "Profile" &&
                            settings[0].clickHandler();
                        }}
                        className={classes.profileNavSName}
                      >
                        <Avatar className={classes.profileAvatar}>
                          {usernameData?.shortName?.length > 0
                            ? usernameData?.shortName
                            : "MP"}
                        </Avatar>
                      </IconButton>
                      {usernameData?.fullName?.length > 0
                        ? usernameData?.fullName
                        : "Milburn Pennybags"}
                    </Typography>
                    {settings.map((setting, index) => {
                      return setting ? (
                        <MenuItem
                          key={index}
                          onClick={setting?.id ? "" : setting?.clickHandler}
                          className={classes.profileNav}
                        >
                          {!setting?.id && (
                            <img
                              src={setting?.icon}
                              alt={setting?.icon}
                              className={classes.profileNavIcon}
                            />
                          )}
                          {!setting?.id && (
                            <Typography
                              className={classes.profileNavItem}
                              textAlign="center"
                            >
                              {setting?.name}
                            </Typography>
                          )}
                          {setting?.id && (
                            <PopupButton
                              id={setting?.id}
                              className={classes.sellButton}
                              onClose={() => handleCloseUserMenu()}
                            >
                              <div className={classes.dFlex1}>
                                <img
                                  src={setting?.icon}
                                  alt={setting?.icon}
                                  className={classes.profileNavIcon}
                                />
                                {setting?.name}
                              </div>
                            </PopupButton>
                          )}
                        </MenuItem>
                      ) : null;
                    })}
                  </Menu>
                </>
              ) : (
                <>
                  <MKBox
                    className={`${classes.displayAll} ${classes.headerRightContainer}`}
                  >
                    {authLinks.map((page, index) => {
                      return page.external ? (
                        <Box className={classes.dFlex} key={index}>
                          <a
                            href={page.route}
                            target="_blank"
                            rel="noreferrer"
                            className={classes.navLinkText}
                          >
                            {page.name}
                          </a>
                        </Box>
                      ) : (
                        <NavLink to={page.route} key={index}>
                          {({ isActive }) => {
                            return (
                              <Box className={classes.dFlex}>
                                <MKTypography
                                  variant="h7"
                                  fontWeight="medium"
                                  className={
                                    isActive
                                      ? classes.navLinkTextActive
                                      : classes.navLinkText
                                  }
                                >
                                  {page.name}
                                </MKTypography>
                              </Box>
                            );
                          }}
                        </NavLink>
                      );
                    })}
                  </MKBox>
                  <ActionsButtonsContainer>
                    <LoginButton to={routePaths.LOGIN_PATH}>Login</LoginButton>
                    <MKButton
                      variant="contained"
                      to={routePaths.LOGIN_REGISTER_PATH}
                      onClick={() => handleCloseUserMenu()}
                      className={classes.headerButton}
                      component={Link}
                      style={{ fontFamily: "PP Fragment-Sans" }}
                    >
                      Join Now
                    </MKButton>
                  </ActionsButtonsContainer>
                  <MKBox className={classes.displaySMAll}>
                    <MKButton
                      variant="contained"
                      to={routePaths.LOGIN_REGISTER_PATH}
                      onClick={() => handleCloseUserMenu()}
                      className={classes.headerButtonSmall}
                      component={Link}
                      style={{ fontFamily: "PP Fragment-Sans" }}
                    >
                      Join Now
                    </MKButton>
                    <IconButton onClick={handleOpenUserMenu}>
                      <MenuIcon
                        fontSize="small"
                        className={classes.smallScreenMenuIcon}
                      />
                    </IconButton>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {loggedOutMenuLinks.map((setting, index) => {
                        return useLocation().pathname === setting.route ? (
                          <p key={index}></p>
                        ) : (
                          <MenuItem
                            key={index}
                            className={classes.loggedOutMenuItem}
                            onClick={setting?.clickHandler}
                          >
                            {setting?.external ? (
                              <a
                                key={setting?.name + "-link"}
                                href={setting?.route}
                                target="_blank"
                                rel="noreferrer"
                                className={classes.dFlex2}
                              >
                                {setting?.name}
                              </a>
                            ) : (
                              <NavLink
                                to={setting?.route}
                                key={setting?.name + "-link"}
                                className={classes.dFlex2}
                              >
                                <Box className={classes.dFlex}>
                                  <MKTypography
                                    variant="h7"
                                    fontWeight="medium"
                                    className={`${classes.loggedOutNavItem} ${classes.profileNavItem}`}
                                  >
                                    {setting?.name}
                                  </MKTypography>
                                </Box>
                              </NavLink>
                            )}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </MKBox>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </HeaderContainer>
    </AppBar>
  );
};
export default Header;

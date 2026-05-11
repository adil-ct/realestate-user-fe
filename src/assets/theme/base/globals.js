// Material Kit 2 React Base Styles
// import colors from "assets/theme/base/colors";

// const { linkText } = colors;

export default {
  html: {
    scrollBehavior: "smooth",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  // "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
  //   color: `${linkText.darkBackground.main} !important`,
  //   transition: "color 150ms ease-in !important",
  // },
  // "a.link:hover, .link:hover, a.link:focus, .link:focus": {
  //   color: `${linkText.darkBackground.main} !important`,
  // },
};

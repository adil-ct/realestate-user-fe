/**
 * The base typography styles for the Material Kit 2 React.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire Material Kit 2 React using thie file.
 */

// Material Kit 2 React Base Styles
// import colors from "assets/theme/base/colors";
import breakpoints from "assets/theme/base/breakpoints";

// Material Kit 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const {values: { xs, sm, md, lg, xl, xxl }} = breakpoints;

const XS  = `@media (max-width: ${xs}px) and (min-width: 0)`;
const SM  = `@media (max-width: ${sm}px) and (min-width: ${xs}px)`;
const MD  = `@media (max-width: ${md}px) and (min-width: ${sm}px)`;
const LG  = `@media (max-width: ${lg}px) and (min-width: ${md}px)`;
const XL  = `@media (max-width: ${xl}px) and (min-width: ${lg}px)`;
const XXL = `@media (min-width: ${xxl}px)`;


const baseProperties = {
  fontFamily: "PP Fragment",
  fontWeightExtraLight: 200,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 900,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
};

const emphasisProperties = {
  fontFamily: "PP Fragment-Serif",
};

// const bodyProperties = {
//   fontFamily: "PP Fragment-Sans",
// };

//const baseHeadingColor = colors.customText.heading.dark;

const baseHeadingProperties = {
  //color: baseHeadingColor,
  fontWeight: baseProperties.fontWeightBold,
};
const baseHeadingProperties2 = {
  //color: baseHeadingColor,
  fontWeight: baseProperties.fontWeightExtraBold,
};
const baseHeadingProperties3 = {
  //color: baseHeadingColor,
  fontWeight: baseProperties.fontWeightMedium,
};
const baseHeadingProperties4 = {
  //color: baseHeadingColor,
  fontWeight: baseProperties.fontWeightMedium,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  //color: baseHeadingColor,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightSemiBold: baseProperties.fontWeightSemiBold,
  fontWeightBold: baseProperties.fontWeightBold,
  fontWeightExtraBold: baseProperties.fontWeightExtraBold,

  h1: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
    [XS]: {
      fontSize: pxToRem(34),
    },
    [SM]: {
      fontSize: pxToRem(36),
    },
    [MD]: {
      fontSize: pxToRem(46),
    },
    [LG]: {
      fontSize: pxToRem(48),
    },
    [XL]: {
      fontSize: pxToRem(48),
    },
    [XXL]: {
      fontSize: pxToRem(48),
    },
  },
  h2: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties,
    [XS]: {
      fontSize: pxToRem(30),
    },
    [SM]: {
      fontSize: pxToRem(30),
    },
    [MD]: {
      fontSize: pxToRem(32),
    },
    [LG]: {
      fontSize: pxToRem(36),
    },
    [XL]: {
      fontSize: pxToRem(36),
    },
    [XXL]: {
      fontSize: pxToRem(36),
    },
  },
  h2ExtraHeavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    fontWeight: `${baseProperties.fontWeightExtraBold} !important`,
    ...baseHeadingProperties,
    [XS]: {
      fontSize: pxToRem(30),
    },
    [SM]: {
      fontSize: pxToRem(30),
    },
    [MD]: {
      fontSize: pxToRem(32),
    },
    [LG]: {
      fontSize: pxToRem(36),
    },
    [XL]: {
      fontSize: pxToRem(36),
    },
    [XXL]: {
      fontSize: pxToRem(36),
    },
  },

  h3: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties2,
    [XS]: {
      fontSize: pxToRem(24),
    },
    [SM]: {
      fontSize: pxToRem(26),
    },
    [MD]: {
      fontSize: pxToRem(28),
    },
    [LG]: {
      fontSize: pxToRem(30),
    },
    [XL]: {
      fontSize: pxToRem(30),
    },
    [XXL]: {
      fontSize: pxToRem(30),
    },
  },

  h4: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    [XS]: {
      fontSize: pxToRem(22),
    },
    [SM]: {
      fontSize: pxToRem(22),
    },
    [MD]: {
      fontSize: pxToRem(23),
    },
    [LG]: {
      fontSize: pxToRem(24),
    },
    [XL]: {
      fontSize: pxToRem(24),
    },
    [XXL]: {
      fontSize: pxToRem(24),
    },
  },

  h5: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    [XS]: {
      fontSize: pxToRem(16),
    },
    [SM]: {
      fontSize: pxToRem(16),
    },
    [MD]: {
      fontSize: pxToRem(18),
    },
    [LG]: {
      fontSize: pxToRem(20),
    },
    [XL]: {
      fontSize: pxToRem(20),
    },
    [XXL]: {
      fontSize: pxToRem(20),
    },
  },

  h5Heavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: baseProperties.fontSize2XL,
    fontWeight: `${baseProperties.fontWeightBold} !important`,
    lineHeight: 1.2,
    ...baseHeadingProperties,
  },

  h5ExtraHeavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: baseProperties.fontSize2XL,
    fontWeight: `${baseProperties.fontWeightExtraBold} !important`,
    lineHeight: 1.2,
    ...baseHeadingProperties,
  },

  h5LargeExtraHeavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: baseProperties.fontSizeLG,
    fontWeight: `${baseProperties.fontWeightExtraBold} !important`,
    lineHeight: 1.2,
    ...baseHeadingProperties,
  },

  h6: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },
  h7: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(14),
    lineHeight: 1.625,
    ...baseHeadingProperties3,
  },
  h8: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties3,
  },
  h9: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(14),
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },
  h10: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(13),
    lineHeight: 1.625,
    ...baseHeadingProperties4,
  },
  p1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(13),
    lineHeight: 1.625,
    fontWeightRegular: baseProperties.fontWeightRegular,
  },
  p3: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    fontWeightRegular: baseProperties.fontWeightRegular,
  },
  p2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(13),
    lineHeight: 1.625,
    fontWeightRegular: baseProperties.fontWeightRegular,
  },
  p5: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(14),
    lineHeight: 1.625,
    fontWeightRegular: baseProperties.fontWeightRegular,
  },
  p4: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    fontWeight: baseProperties.fontWeightBold,
  },

  link: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
   // color: colors.dunno1.main, //"#58F2F0",
  },

  link2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6,
    //color: colors.dunno2.main, //"#58F2F0",
    cursor: "pointer",
  },

  // Heading description
  description: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
    // color: `${colors.customText.subheading.dark} !important`,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  subtitleMedium: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.2,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body3: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.4,
  },

  body4: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightExtraLight,
    lineHeight: 1.2,
  },

  body5: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXXS,
    fontWeight: baseProperties.fontWeightExtraLight,
    lineHeight: 1.0,
  },

  genericRegular: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.2,
  },

  genericRegularLHlg: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.8,
  },

  genericMedium: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.2,
  },

  // genericMixed1: {
  //   fontFamily: baseProperties.fontFamily,
  //   fontSize: baseProperties.fontSizeSM,
  //   fontWeight: baseProperties.fontWeightBold,
  //   lineHeight: 1.2,
  // },

  // genericMixed2: {
  //   fontFamily: baseProperties.fontFamily,
  //   fontSize: baseProperties.fontSizeMD,
  //   fontWeight: baseProperties.fontWeightBold,
  //   lineHeight: 1.2,
  // },

  // genericMixed3: {
  //   fontFamily: baseProperties.fontFamily,
  //   fontSize: baseProperties.fontSizeXL,
  //   fontWeight: baseProperties.fontWeightBold,
  //   lineHeight: 1.2,
  // },

  // genericMixed4: {
  //   fontFamily: baseProperties.fontFamily,
  //   fontSize: baseProperties.fontSizeMD,
  //   fontWeight: baseProperties.fontWeightRegular,
  //   lineHeight: 1.2,
  // },

  // genericMixed5: {
  //   fontFamily: baseProperties.fontFamily,
  //   fontSize: baseProperties.fontSize2XL,
  //   fontWeight: baseProperties.fontWeightBold,
  //   lineHeight: 1.2,
  // },

  // genericMixed4LightBlack: {
  //   fontFamily: baseProperties.fontFamily,
  //   fontSize: baseProperties.fontSizeMD,
  //   fontWeight: baseProperties.fontWeightRegular,
  //   lineHeight: 1.2,
  //   color: `${black.light} !important`,
  // },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "none",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(40),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  // link: {
  //   fontFamily: baseProperties.fontFamily,
  //   fontSize: baseProperties.fontSizeSM,
  //   fontWeight: baseProperties.fontWeightRegular,
  //   lineHeight: 1.6,
  //   color: "#58F2F0",
  // },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;

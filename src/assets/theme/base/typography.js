import breakpoints from "assets/theme/base/breakpoints";
import pxToRem from "assets/theme/functions/pxToRem";

const { values: { xs, sm, md, lg, xl, xxl } } = breakpoints;

const XS  = `@media (max-width: ${xs}px) and (min-width: 0)`;
const SM  = `@media (max-width: ${sm}px) and (min-width: ${xs}px)`;
const MD  = `@media (max-width: ${md}px) and (min-width: ${sm}px)`;
const LG  = `@media (max-width: ${lg}px) and (min-width: ${md}px)`;
const XL  = `@media (max-width: ${xl}px) and (min-width: ${lg}px)`;
const XXL = `@media (min-width: ${xxl}px)`;

const baseProperties = {
  fontFamily: '"PP Fragment", sans-serif',
  fontWeightExtraLight: 200,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 900,
  fontSizeXXS: pxToRem(9.6),
  fontSizeXS:  pxToRem(11),
  fontSizeSM:  pxToRem(13),
  fontSizeMD:  pxToRem(14),
  fontSizeLG:  pxToRem(16),
  fontSizeXL:  pxToRem(18),
  fontSize2XL: pxToRem(20),
  fontSize3XL: pxToRem(24),
};

const emphasisProperties = { fontFamily: '"PP Fragment-Serif", serif' };

const baseHeadingProperties  = { fontWeight: baseProperties.fontWeightBold };
const baseHeadingProperties2 = { fontWeight: baseProperties.fontWeightExtraBold };
const baseHeadingProperties3 = { fontWeight: baseProperties.fontWeightSemiBold };
const baseHeadingProperties4 = { fontWeight: baseProperties.fontWeightMedium };

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.15,
  letterSpacing: '-0.02em',
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight:     baseProperties.fontWeightLight,
  fontWeightRegular:   baseProperties.fontWeightRegular,
  fontWeightMedium:    baseProperties.fontWeightMedium,
  fontWeightSemiBold:  baseProperties.fontWeightSemiBold,
  fontWeightBold:      baseProperties.fontWeightBold,
  fontWeightExtraBold: baseProperties.fontWeightExtraBold,

  h1: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(40),
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
    ...baseHeadingProperties,
    [XS]: { fontSize: pxToRem(26) },
    [SM]: { fontSize: pxToRem(30) },
    [MD]: { fontSize: pxToRem(34) },
    [LG]: { fontSize: pxToRem(38) },
    [XL]: { fontSize: pxToRem(40) },
    [XXL]: { fontSize: pxToRem(44) },
  },

  h2: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(30),
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    ...baseHeadingProperties,
    [XS]: { fontSize: pxToRem(22) },
    [SM]: { fontSize: pxToRem(24) },
    [MD]: { fontSize: pxToRem(27) },
    [LG]: { fontSize: pxToRem(29) },
    [XL]: { fontSize: pxToRem(30) },
    [XXL]: { fontSize: pxToRem(34) },
  },

  h2ExtraHeavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(30),
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    fontWeight: `${baseProperties.fontWeightExtraBold} !important`,
    [XS]: { fontSize: pxToRem(22) },
    [SM]: { fontSize: pxToRem(24) },
    [MD]: { fontSize: pxToRem(27) },
    [LG]: { fontSize: pxToRem(29) },
    [XL]: { fontSize: pxToRem(30) },
    [XXL]: { fontSize: pxToRem(34) },
  },

  h3: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(24),
    lineHeight: 1.25,
    letterSpacing: '-0.015em',
    ...baseHeadingProperties2,
    [XS]: { fontSize: pxToRem(18) },
    [SM]: { fontSize: pxToRem(20) },
    [MD]: { fontSize: pxToRem(22) },
    [LG]: { fontSize: pxToRem(23) },
    [XL]: { fontSize: pxToRem(24) },
    [XXL]: { fontSize: pxToRem(26) },
  },

  h4: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(20),
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    ...baseHeadingProperties,
    [XS]: { fontSize: pxToRem(16) },
    [SM]: { fontSize: pxToRem(17) },
    [MD]: { fontSize: pxToRem(18) },
    [LG]: { fontSize: pxToRem(20) },
    [XL]: { fontSize: pxToRem(20) },
    [XXL]: { fontSize: pxToRem(22) },
  },

  h5: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: pxToRem(17),
    lineHeight: 1.4,
    letterSpacing: '-0.008em',
    ...baseHeadingProperties,
    [XS]: { fontSize: pxToRem(14) },
    [SM]: { fontSize: pxToRem(15) },
    [MD]: { fontSize: pxToRem(16) },
    [LG]: { fontSize: pxToRem(17) },
    [XL]: { fontSize: pxToRem(17) },
    [XXL]: { fontSize: pxToRem(18) },
  },

  h5Heavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: baseProperties.fontSize2XL,
    fontWeight: `${baseProperties.fontWeightBold} !important`,
    lineHeight: 1.25,
  },

  h5ExtraHeavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: baseProperties.fontSize2XL,
    fontWeight: `${baseProperties.fontWeightExtraBold} !important`,
    lineHeight: 1.25,
  },

  h5LargeExtraHeavy: {
    fontFamily: emphasisProperties.fontFamily,
    fontSize: baseProperties.fontSizeLG,
    fontWeight: `${baseProperties.fontWeightExtraBold} !important`,
    lineHeight: 1.25,
  },

  h6: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    letterSpacing: '-0.005em',
    ...baseHeadingProperties,
  },

  h7: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(15),
    lineHeight: 1.6,
    ...baseHeadingProperties3,
  },

  h8: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.6,
    ...baseHeadingProperties3,
  },

  h9: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(14),
    lineHeight: 1.6,
    ...baseHeadingProperties,
  },

  h10: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(13),
    lineHeight: 1.6,
    ...baseHeadingProperties4,
  },

  p1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(14),
    lineHeight: 1.7,
    fontWeight: baseProperties.fontWeightRegular,
  },

  p2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(14),
    lineHeight: 1.7,
    fontWeight: baseProperties.fontWeightRegular,
  },

  p3: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.7,
    fontWeight: baseProperties.fontWeightRegular,
  },

  p4: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.7,
    fontWeight: baseProperties.fontWeightBold,
  },

  p5: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(15),
    lineHeight: 1.7,
    fontWeight: baseProperties.fontWeightRegular,
  },

  link: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6,
  },

  link2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightSemiBold,
    lineHeight: 1.6,
    cursor: 'pointer',
  },

  description: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.75,
    color: '#64748B',
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
    letterSpacing: '0.005em',
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
    lineHeight: 1.3,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.7,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.7,
  },

  body3: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body4: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightExtraLight,
    lineHeight: 1.5,
  },

  body5: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXXS,
    fontWeight: baseProperties.fontWeightExtraLight,
    lineHeight: 1.4,
  },

  genericRegular: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.5,
  },

  genericRegularLHlg: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.9,
  },

  genericMedium: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.5,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightSemiBold,
    lineHeight: 1.5,
    textTransform: 'none',
    letterSpacing: '0.01em',
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.4,
    letterSpacing: '0.03em',
  },

  d1: { fontSize: pxToRem(96),  ...baseDisplayProperties },
  d2: { fontSize: pxToRem(80),  ...baseDisplayProperties },
  d3: { fontSize: pxToRem(72),  ...baseDisplayProperties },
  d4: { fontSize: pxToRem(64),  ...baseDisplayProperties },
  d5: { fontSize: pxToRem(56),  ...baseDisplayProperties },
  d6: { fontSize: pxToRem(48),  ...baseDisplayProperties },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs:  baseProperties.fontSizeXS,
    sm:  baseProperties.fontSizeSM,
    md:  baseProperties.fontSizeMD,
    lg:  baseProperties.fontSizeLG,
    xl:  baseProperties.fontSizeXL,
    '2xl': baseProperties.fontSize2XL,
    '3xl': baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;

import colors from "assets/theme/base/colors";
import boxShadow from "assets/theme/functions/boxShadow";

const { coloredShadows } = colors;
const black = "#000000";
const white = "#FFFFFF";

export default {
  xs:   boxShadow([0, 2], [8, -2],   black, 0.10),
  sm:   boxShadow([0, 4], [12,  0],  black, 0.10),
  md:  `${boxShadow([0, 4], [16, -4], black, 0.10)}, ${boxShadow([0, 2], [6, -2], black, 0.06)}`,
  lg:  `${boxShadow([0, 12],[24, -6], black, 0.10)}, ${boxShadow([0, 4], [8, -2], black, 0.05)}`,
  xl:  `${boxShadow([0, 24],[40, -8], black, 0.10)}, ${boxShadow([0, 8],[16, -6], black, 0.04)}`,
  xxl:  boxShadow([0, 20],[40,  0],  black, 0.07),
  inset: boxShadow([0, 1], [2, 0],   black, 0.06, "inset"),

  colored: {
    primary:   `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.primary, 0.35)}`,
    secondary: `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.secondary, 0.35)}`,
    info:      `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.info, 0.35)}`,
    success:   `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.success, 0.35)}`,
    warning:   `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.warning, 0.35)}`,
    error:     `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.error, 0.35)}`,
    light:     `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.light, 0.35)}`,
    dark:      `${boxShadow([0, 4], [20, 0], black, 0.14)}, ${boxShadow([0, 7], [10, -5], coloredShadows.dark, 0.35)}`,
    white:     `${boxShadow([0, 4], [20, 0], white, 0.14)}, ${boxShadow([0, 7], [10, -5], white, 0.35)}`,
  },

  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black, 0.2),
  },
};

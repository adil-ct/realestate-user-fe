import pxToRem from "assets/theme/functions/pxToRem";

export default {
  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs:     pxToRem(4),
    sm:     pxToRem(6),
    md:     pxToRem(8),
    lg:     pxToRem(10),
    xl:     pxToRem(12),
    xxl:    pxToRem(16),
    xxxl:   pxToRem(24),
    xxxxl:  pxToRem(40),
    section: pxToRem(160),
  },
};

// Primary brand: Deep Navy | Accent: Warm Gold | Background: Warm Off-White
const navy        = '#1A2B4A';
const navyDark    = '#0F1C32';
const navyLight   = '#2C4270';
const gold        = '#C9A84C';
const goldDark    = '#A8872F';
const goldLight   = '#E8CC82';
const offWhite    = '#F8F7F4';
const white       = '#FFFFFF';

const palette = {
  mode: 'light',

  primary: {
    main: navy,
    dark: navyDark,
    light: navyLight,
  },

  secondary: {
    main: gold,
    dark: goldDark,
    light: goldLight,
  },

  text: {
    primary: '#1A1A2E',
    secondary: '#6B7280',
    disabled: '#94A3B8',
  },

  bodyText: {
    primary: '#1A1A2E',
    secondary: navy,
    disabled: '#6B7280',
    subText: '#94A3B8',
    disclaimers: '#CBD5E1',
  },

  background: {
    primary: offWhite,
    default: offWhite,
    paper: white,
  },

  subBackground: {
    primary: '#F1F0EC',
  },

  foreground: {
    primary: white,
  },

  error: {
    main: '#EF4444',
    dark: '#B91C1C',
    light: '#FCA5A5',
  },

  success: {
    main: '#22C55E',
    light: '#86EFAC',
    dark: '#15803D',
  },

  warning: {
    main: '#F59E0B',
    light: '#FDE68A',
    dark: '#B45309',
  },

  info: {
    main: navy,
    light: navyLight,
    dark: navyDark,
  },

  grey: {
    0:   '#FFFFFF',
    25:  '#F8F7F4',
    50:  '#F1F0EC',
    100: '#E2E8F0',
    200: '#CBD5E1',
    300: '#94A3B8',
    400: '#64748B',
    500: '#475569',
    600: '#334155',
    700: '#1E293B',
    800: '#0F172A',
  },

  tooltipBackground: {
    light: white,
    dark: navy,
  },

  callToAction: {
    primary: gold,
    light: goldLight,
    dark: goldDark,
    active: goldDark,
    off: '#CBD5E1',
    white: white,
    hover: navyLight,
    secondary: {
      main: navy,
      dark: navyDark,
      light: navyLight,
      active: navyLight,
    },
    closeIcon: {
      dark: navy,
      light: white,
    },
  },

  searchBox: {
    border: '#E2E8F0',
    background: white,
  },

  headerLinks: {
    primary: '#FFFFFF',
    active: goldLight,
  },

  footerLinks: {
    primary: '#CBD5E1',
    active: goldLight,
  },

  dividers: {
    main: '#E2E8F0',
  },

  tables: {
    header: {
      background: offWhite,
    },
    subheader: {
      background: '#F1F0EC',
    },
  },

  inputs: {
    border: {
      primary: '#CBD5E1',
      disabled: '#E2E8F0',
      error: '#EF4444',
    },
    background: {
      primary: white,
      disabled: offWhite,
    },
    label: {
      asterisk: {
        main: '#EF4444',
      },
    },
  },

  coloredShadows: {
    primary: navy,
    secondary: navyDark,
    info: navyLight,
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    light: '#94A3B8',
    dark: '#0F172A',
    white: white,
    black: '#000000',
  },
};

export default palette;

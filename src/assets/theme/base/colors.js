const mainBlack = '#34c38f';
const mainWhite = '#FFFFFF';
const palette =  {
    mode: 'light',
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: '#046149',
      dark: '#01281C',
      light: '#92D4C0',
    },
    text: {
        primary: mainWhite,
        secondary: '#F2F5F7',
        disabled: '#99A2A8',
    },
    bodyText: {
        primary: mainBlack,
        secondary: '#046149',
        disabled: '#6A7379',
        subText: '#99A2A8',
        disclaimers: '#BCC5CC'
    },
    background: {
        primary: '#D8E0E5', 
        default: '#D8E0E5', 
    },
    subBackground: {
        primary: '#F2F5F7'
    },
    foreground: {
        primary: mainWhite,
    },
    error: {
        main: "#CD4848",
        dark: "#993636",
        light: '#FFABAB',
    },
    success: {
        main: "#35C377",
        light: '#73E5A8',
        dark: '#23804E',
    },
    warning: {
        main: '#F3BF23',
        light: '#F3DE9E',
        dark: '#B28A12',
    },
    info: {
        main: '#34c38f',
        light: '#5dd4a8',
        dark: '#23804E',
    },
    grey: {
        0: '#FFFFFF',
        25: '#F9FAFB',
        50: '#F2F5F7',
        100: "#D8E0E5",
        200: "#BCC5CC",
        300: "#99A2A8",
        400: "#6A7379",
        500: "#51585F",
        600: "#3F464D",
        700: "#293036",
        800: "#1D2329",
    },
    tooltipBackground: {
        light: mainWhite,
        dark: mainBlack,
    },
    callToAction: {
        primary: '#34c38f',
        light: '#5dd4a8',
        dark: '#23804E',
        active: '#5dd4a8',
        off: '#BCC5CC',
        white: '#FFFFFF',
        hover: '#4685FF',
        secondary: {
            main: '#046149',
            dark: '#01281C',
            light: '#92D4C0',
            active: '#92D4C0',
        },
        closeIcon: {
            dark: mainBlack,
            light: mainWhite,
        },
    },
    searchBox: {
        border: '#D8E0E5',
        background: '#FFFFFF',
    },
    headerLinks: {
        primary: '#FFFFFF',
        active: '#FFFFFF',
    },
    footerLinks: {
        primary: '#FFFFFF',
        active: '#FFFFFF',
    },
    dividers: {
        main: 'D8E0E5',
    },
    tables: {
        header: {
            background: '#D8E0E5',
        },
        subheader: {
            background: '#F2F5F7',
        },
    },
    inputs: {
        border: {
            primary: '#D8E0E5',
            disabled: '#BCC5CC',
            error: '#CD4848',
        },
        background: {
            primary: mainWhite,
            disabled: '#F2F5F7',
        },
        label: {
            asterisk: {
                main: 'red'
            }
        },
    },

    // T: Update these
    coloredShadows: { // revisit
        primary: "#e91e62",
        secondary: "#110e0e",
        info: "#00bbd4",
        success: "#4caf4f",
        warning: "#ff9900",
        error: "#f44336",
        light: "#adb5bd",
        dark: "#404040",
        white: "#ffffff",
        black: "#000000",
    },
      
};

export default palette;

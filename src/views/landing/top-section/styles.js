import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        padding: '0px 0px 20px',
        [theme.breakpoints.down('sm')]: {
            padding: '30px 0px 0px',
        },
    },
    header1: {
        fontStyle: 'normal',
        fontWeight: 900,
        fontFamily: 'Roboto',
        fontSize: '48px',
        lineHeight: '70px',
        // color: '#FFFFFF',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '42px',
            lineHeight: '45px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '32px',
        },
    },
    storeImg: {
        marginRight: '10px',
    },
    header2: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '48px',
        lineHeight: '70px',
        // color: '#58F2F0',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '42px',
            lineHeight: '45px',
            marginLeft: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '32px',
        },
    },
    header3Text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        width: '100%',
        marginTop: '30px',
        lineHeight: '30px',
        // color: '#EEFEFD',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    partnersIcon: {
        marginTop: "30px",
        width: "auto",
        [theme.breakpoints.down("sm")]: {
            height: '30px',
        },
        [theme.breakpoints.between(405, 450)]: {
            height: '26px',
        },
        [theme.breakpoints.between(370, 405)]: {
            height: '25px',
        },
        [theme.breakpoints.between(350, 370)]: {
            height: '23px',
        },
        [theme.breakpoints.between(300, 350)]: {
            height: '20px',
        },
        [theme.breakpoints.down(300)]: {
            height: '18px',
        }
    },
    header3: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        width: '50%',
        marginTop: '30px',
        lineHeight: '30px',
        // color: '#EEFEFD',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    header3Block: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        width: '65%',
        display: "block",
        marginTop: '30px',
        lineHeight: '30px',
        // color: '#EEFEFD',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    header3BlockItalic: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '18px',
        width: '65%',
        display: "block",
        marginTop: '30px',
        lineHeight: '30px',
        // color: '#EEFEFD',
        fontStyle: "italic",
        letterSpacing: '0.02em',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    header3Light: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        width: '80%',
        marginTop: '30px',
        lineHeight: '30px',
        // color: '#58F2F0',
        marginLeft: '5px',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    header3Light1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        width: '80%',
        lineHeight: '30px',
        // color: '#58F2F0',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    header3Light1Italic: {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: '20px',
        width: '80%',
        lineHeight: '30px',
        // color: '#58F2F0',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    headerButton: {
        border: 'none',
        // background: '#58F2F0',
        fontWeight: '500',
        fontFamily: 'Roboto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '240px',
        height: '48px',
        marginTop: '-20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '30px',
        // color: 'black',
        // '&:hover': {
        //     background: '#58F2F0',
        //     boxShadow: '0px 4px 30px rgba(88, 242, 240, 0.2)',
        // },
    },
    headerButton1: {
        width: '160px',
        marginTop: '60px',
        height: '48px',
        fontSize: '16px',
        borderRadius: '30px',
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        // color: '#58F2F0',
        // '&:hover': {
        //     transitionDelay: '0s !important',
        //     backgroundColor: 'rgba(0, 0, 0, 0.3)',
        //     border: '1px solid #58F2F0',
        // },
        [theme.breakpoints.down('md')]: {
            width: '250px',
            height: '50px',
            fontSize: '13px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '40px',
            fontSize: '13px',
            lineHeight: '15px',
        },
    },
    headerButtonLink: {
        textDecoration: 'none',
    },
    inputHeight: {
        // color: 'black',
        // '&:hover': {
        //     border: '1px solid #58f2f0',
        // },
        '& input': {
            height: '30px',
            // color: 'black',
            padding: '0px !important',
            margin: '0px 20px',
            [theme.breakpoints.down('md')]: {
                paddingLeft: '20px',
                margin: '0px 20px',
            },
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '30px',
                margin: '0px 20px',
            },
        },

        '&::placeholder': {
            border: '1px solid #6976B4',
            borderRadius: '30px',
            marginTop: '10px',
            // color: '#6976B4',
            lineHeight: '18px',
            fontWeight: '540',
            fontSize: '16px',
            opacity: 1,
        },
    },

    loader: {
        marginLeft: '-70px !important',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '-70px !important',
        },
    },

    placeHolder: {
        '&::placeholder': {
            // color: 'black',
            lineHeight: '18px',
            fontWeight: '540',
            fontSize: '16px',
            opacity: 1,
        },
    },
    button: {
        borderRadius: '30px',
        // background: '#58F2F0',
        margin: '5px 0',
        padding: '10px',

        // '&:hover': {
        //     background: '#58F2F0',
        //     boxShadow: '0px 4px 20px rgba(88, 242, 240, 0.2)',
        // },
    },
    smContent: {
        marginTop: '20px',
        [theme.breakpoints.up(1700)]: {
            display: 'none',
        },
        [theme.breakpoints.between(theme.breakpoints.values.lg, 1700)]: {
            width: '80%',
        },
    },
    lgContent: {
        width: '100%',
        [theme.breakpoints.down(1700)]: {
            display: 'none',
        },
    },
    headerButton2: {
        border: 'none',
        // background: '#58F2F0',
        fontWeight: '400',
        fontFamily: 'Roboto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        width: '250px',
        height: '48px',
        fontSize: '16px',
        borderRadius: '30px',
        // color: 'black',
        marginTop: '-20px',
        // '&:hover': {
        //     background: '#58F2F0',
        //     boxShadow: '0px 4px 20px rgba(88, 242, 240, 0.2)',
        // },
        [theme.breakpoints.down('md')]: {
            width: '240px',
            fontSize: '13px',
            marginBottom: '20px',
        },
        [theme.breakpoints.between(1000, 1200)]: {
            width: '340px',
            fontSize: '14px',
        },

        [theme.breakpoints.down('sm')]: {
            width: '240px',
            marginLeft: '0px',
            fontSize: '13px',
            lineHeight: '15px',
            marginBottom: '20px',
        },
    },
    noUnderline: {
        textDecoration: 'none',
    },
    headerButton3: {
        border: 'none',
        // background: '#58F2F0',
        fontWeight: '400',
        fontFamily: 'Roboto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        width: '250px',
        height: '38px',
        fontSize: '16px',
        borderRadius: '30px',
        // color: 'black',
        // '&:hover': {
        //     background: '#58F2F0',
        //     boxShadow: '0px 4px 20px rgba(88, 242, 240, 0.2)',
        // },
        [theme.breakpoints.down('md')]: {
            width: '240px',
            fontSize: '13px',
        },
        [theme.breakpoints.between(1000, 1200)]: {
            width: '340px',
            fontSize: '14px',
        },

        [theme.breakpoints.down('sm')]: {
            width: '200px',
            marginLeft: '0px',
            fontSize: '13px',
            lineHeight: '15px',
        },
    },
    earlyAccessForm: {
        width: '70%',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    inputRounded: {
        // background: 'white',
    },
    dFlex: {
        display: 'flex',
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            marginTop: '50px',
        },
    },
    avatar: {
        height: '560px',
        width: '280px',
        marginLeft: '50px',
        zIndex: '1',
        borderRadius: '42px',
        // boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '200px',
            height: '375px',
            borderRadius: '35px',
        },
        [theme.breakpoints.down(theme.breakpoints.values.xs + 321)]: {
            width: '180px',
            height: '375px',
        },
    },
    rightGrid: {
        display: 'block',
        marginLeft: '-50px',
        [theme.breakpoints.down('lg')]: {
            marginLeft: '0px',
            // Used important to override the default css behaivour
            paddingLeft: '70px !important',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '0px !important',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '20px',
            marginBottom: '50px',
        },
    },
},
{ name : 'landing-top-section-view'}));

export default styles;

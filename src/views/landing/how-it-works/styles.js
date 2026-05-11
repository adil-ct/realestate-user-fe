import { createStyles, makeStyles } from '@mui/styles';
import Background from 'assets/images/Background1.jpg';

const styles = makeStyles((theme) => createStyles({
    root: {
        background: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 'auto',
        paddingTop: '100px',
        boxSizing: 'border-box',
    },
    leftGrid: {
        height: '100%',
        // Used important to override the default css behaivour
        padding: '70px 10px 20px !important',
    },
    rightGrid: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '80px !important',
        [theme.breakpoints.down('lg')]: {
            alignItems: 'unset',
            // Used important to override the default css behaivour
            paddingTop: '67px !important',
            paddingRight: '10px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    imageGridContainer: {
        position: 'relative',
        height: '555px',
        width: '475px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageGridCard: {

    },
    header1: {
        fontStyle: 'normal',
        fontWeight: 700,
        // fontFamily: 'Roboto',
        fontSize: '32px',
        textAlign: 'center',
        lineHeight: '34px',
        // color: 'black',
        marginTop: "30px",
        letterSpacing: '0.02em',
        [theme.breakpoints.down('md')]: {
            marginBottom: "0px",
            fontSize: '34px',
            lineHeight: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "30px",
            fontSize: '30px',
            lineHeight: '39px',
        },
    },
    header2: {
        fontStyle: 'normal',
        fontWeight: 400,
        // fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '34px',
        // color: 'black',
        marginTop: "10px",
        marginBottom: "30px",
        letterSpacing: '0.02em',
        [theme.breakpoints.down('md')]: {
            marginTop: "0px",
            marginBottom: "0px",
            lineHeight: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight: '39px',
        },
    },
    headerButton: {
        border: 'none',
        // background: '#2D355A',
        fontWeight: '500',
        // fontFamily: 'Roboto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px 0px 70px',
        width: '240px',
        height: '48px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '30px',
        // color: 'white',
        // '&:hover': {
        //     background: '#2D355A',
        //     boxShadow: '0px 4px 30px rgb(49, 57, 97)',
        // },
        [theme.breakpoints.down(426)]: {
            margin: '30px 0px 90px',
        },
    },
},
{ name : 'landing-how-it-works-view' }));

export default styles;

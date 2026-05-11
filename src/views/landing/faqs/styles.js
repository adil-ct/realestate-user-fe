import Background from 'assets/images/Background1.jpg';
import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    root: {
        background: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        paddingBottom: '100px',
        paddingTop: '100px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            paddingBottom: '0px',
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
        width: '240px',
        height: '48px',
        margin: '50px 0px 70px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '30px',
        // color: 'white',
        // '&:hover': {
        //     background: '#2D355A',
        //     boxShadow: '0px 4px 30px rgb(49, 57, 97)',
        // },
        [theme.breakpoints.down('sm')]: {
            margin: '0px 0px 20px',
        },
    },
    leftGrid: {
        height: '100%',
        width: '50% !important',
        // Used important to override the default css behaivour
        padding: '70px 10px 0px !important',
        [theme.breakpoints.down('sm')]: {
            padding: '70px 0px !important',
        },
    },
    rightGrid: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            alignItems: 'unset',
            // Used important to override the default css behaivour
            paddingTop: '67px !important',
            paddingRight: '10px',
        },
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
        [theme.breakpoints.between('sm', theme.breakpoints.values.sm + 128)]: {
            display: 'none',
        },
    },
    imageGridContainer: {
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('lg')]: {
            height: '90%',
            width: '100%',
        },
    },
    faqAvatar1: {
        position: 'absolute !important',
        top: '60px',
        left: '30px',
    },
    faqAvatar2: {
        marginTop: '150px',
        marginLeft: '20px',
    },
    header1: {
        fontStyle: 'normal',
        fontWeight: 700,
        // fontFamily: 'Roboto',
        fontSize: '32px',
        textAlign: 'center',
        lineHeight: '34px',
        // color: 'black',
        letterSpacing: '0.02em',
        [theme.breakpoints.down('md')]: {
            fontSize: '34px',
            lineHeight: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            lineHeight: '39px',
        },
    },
},
{ name : 'landing-faqs-view' }));

export default styles;

import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    rootContainer: {
        margin: '0px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px !important',
        },
    },
    root: {
        // background: `linear-gradient(160deg, rgba(66,57,140,1) 0%, rgba(113,71,135,1) 39%, rgba(45,53,90,1) 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'center',
        paddingBottom: '65px',
        padding: '50px 0px',
        marginBottom: '50px',
        marginTop: '0px',
        [theme.breakpoints.down('lg')]: {
            padding: '50px 0px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0px 0px',
            marginBottom: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '80px 30px',
            marginBottom: '30px',
            marginTop: '0px',
        },
    },
    headerButton: {
        border: 'none',
        // background: '#58F2F0',
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
        // color: 'black',
        // '&:hover': {
        //     background: '#58F2F0',
        //     boxShadow: '0px 4px 30px rgba(88, 242, 240, 0.2)',
        // },
        [theme.breakpoints.down('lg')]: {
            marginTop: "40px",
        },
        [theme.breakpoints.down(426)]: {
            margin: '60px 0px 90px',
        },
    },
    header1: {
        fontStyle: 'normal',
        fontWeight: 700,
        // fontFamily: 'Roboto',
        fontSize: '39px',
        textAlign: 'center',
        lineHeight: '34px',
        // color: '#FFFFFF',
        letterSpacing: '0.02em',
        marginBottom: '80px',
        marginTop: "50px",
        [theme.breakpoints.down('md')]: {
            paddingTop: "40px",
            marginTop: "0px",
            marginBottom: '50px',
            fontSize: '34px',
            lineHeight: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: "40px",
            marginBottom: '50px',
            fontSize: '30px',
            lineHeight: '39px',
        },
    },
},
{ name : 'landing-adds-value-view'}));

export default styles;

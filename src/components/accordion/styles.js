import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    root: {
        cursor: 'pointer',
        transitionDelay: '1500ms',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 'auto',
        width: '95%',
        marginRight: '0px',
        boxSizing: 'border-box',
        marginBottom: '30px',
        [theme.breakpoints.down('xl')]: {
            marginRight: '20px',
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '40px',
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '7px',
            width: '100%',
            height: 'auto',
        },
    },
    topSection: {
        height: '30%',
        position: 'relative',
        padding: '30px',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
    header1: {
        transitionDelay: '1500ms !important',
        fontStyle: 'normal',
        fontWeight: 500,
        // fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '170%',
        // color: '#313961',
        letterSpacing: '0.08em',
        [theme.breakpoints.down('xl')]: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '130%',
        },
    },
    accordion: {
        // backgroundColor: 'transparent',
        border: 'none',
        marginBottom: '20px',
        [theme.breakpoints.up('lg')]: {
            width: '90%',
        },
    },
    accordionDetails: {
        // background: `linear-gradient(160deg, rgba(66,57,140,1) 0%, rgba(113,71,135,1) 39%, rgba(45,53,90,1) 100%)`,
        backgroundRepeat: 'no-repeat',
        minHeight: '80px',
        height: 'auto',
        backgroundSize: '100% 100%',
        borderTop: 'none',
        borderRadius: '30px',
        padding: '20px',
    },
    header4: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '15px',
        lineHeight: '170%',
        letterSpacing: '0.08em',
        // color: '#58F2F0',
        cursor: 'pointer',
        [theme.breakpoints.down('xl')]: {
            fontSize: '13px',
            lineHeight: '140%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '15px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            lineHeight: '130%',
        },
    },
    header3: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '170%',
        // color: '#FAFAFA',
        letterSpacing: '0.08em',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
            lineHeight: '140%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            lineHeight: '130%',
        },
    },
},
{ name: "accordian-mogul" }));

export default styles;

import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    container: {
        padding: '0px 40px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 10px',
        },
    },
    dots: {
        bottom: 0,
        // '& li.slick-active button::before': {
        //     color: theme.palette.primary.main,
        // },
        '& li': {
            '& button::before': {
                fontSize: theme.typography.pxToRem(10),
                opacity: 0.5,
            },
        },
    },
    header1: {
        fontStyle: 'normal',
        fontWeight: 700,
        // fontFamily: 'Roboto',
        fontSize: '32px',
        textAlign: 'center',
        lineHeight: '34px',
        // color: '#FFFFFF',
        letterSpacing: '0.02em',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '34px',
            lineHeight: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '50px',
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: '30px',
            lineHeight: '39px',
            width: "90%"
        },
    },
},
{ name : 'landing-testimonial-view' }));

export default styles;

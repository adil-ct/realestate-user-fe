
import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    root: {
        // background:
        //     'linear-gradient(160deg, rgba(66,57,140,1) 0%, rgba(113,71,135,1) 39%, rgba(45,53,90,1) 100%)',
        boxSizing: 'border-box',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom: '50px',
        marginTop: "-110px",
        paddingTop: "120px",
        maxWidth: "100%"
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
        [theme.breakpoints.down('sm')]: {
            margin: '0px 0px 40px',

        },
    },
    pLeftAll: {
        padding: "0px 70px",
        [theme.breakpoints.down('lg')]: {
            padding: '0px 30px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0px 40px',
        },
        [theme.breakpoints.between(819, 1000)]: {
            padding: '0px 40px',
            marginTop: '50px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "0px",
            padding: '0px',
        },
    }
},
{ name : 'landing-top-container-view'}));

export default styles;

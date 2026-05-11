import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    root: {
        boxSizing: 'border-box',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom: '50px',
        marginBottom: '-80px',
    },
    dFlex: {
        display: 'flex',
        height: '80vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        height: '200px',
        width: '200px',
        marginBottom: '50px',
        [theme.breakpoints.down('md')]: {
            height: '150px',
            width: '150px',
        },
    },
    header1: {
        fontSize: '40px',
        // color: 'black',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
        },
    },
},
{ name: "404-view-mogul" }));

export default styles;

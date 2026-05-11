import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            padding: '30px 0px 0px',
        },
        paddingTop: '70px',
        // background: `linear-gradient(160deg, rgba(66,57,140,1) 0%, rgba(113,71,135,1) 39%, rgba(45,53,90,1) 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: '164vh',
        paddingBottom: '50px',
    },
},
{ name : 'landing-view-shared-styles' }));

export default styles;
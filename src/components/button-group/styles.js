import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    rootContainer: {
        background: theme.palette.foreground.primary,
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
        },
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 8px 12px 0px rgba(29, 35, 41, 0.10)"
    },
    btns: {
        fontFamily: "PP Fragment-Sans",
        fontSize: '16px',
        fontWeight: '400',
        border: 'none',
        padding: '16px 24px',
        color: "#99A2A8",
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px',
            margin: '5px 0px',
        },
        borderRadius: '0px',
        borderBottom: "2px solid white",
        '&:hover': {
            borderBottom: "2px solid rgba(8, 11, 13, 0.04)",
        },
    },
    active: {
        color: theme.palette.secondary.main,
        borderRadius: '0px',
        borderBottom: "2px solid #046149",
        fontSize: '16px',
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px',
            margin: '5px 0px',
        },
    },
},
{ name: "button-group-mogul" }));

export default styles;

import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    subtitle: {
        width: "100%",
        textAlign: "center",
        marginTop: "24px",
        fontSize: "14px",
        lineHeight: "18px",
        color: theme.palette.bodyText.subText,
        [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
        },
    },
    title: {
        fontSize: "36px",
        lineHeight: "40px",
        [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
        lineHeight: "30px",
        fontSize: "33px",
        },
        [theme.breakpoints.down(390)]: {
        marginTop: "10px",
        lineHeight: "30px",
        fontSize: "28px",
        },
    },
    mt20: {
        marginBottom: "-30px",
        lineHeight: "20px",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
        margin: "10px 0px",
        padding: "0",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
        display: "block",
        },
    },
    sectionMobile: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
        display: "none",
        },
    },
},
{ name: "heading-layout-component" }));

export default styles;
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => createStyles({
    blogHero: {
        paddingTop: "150px",
        paddingBottom: "80px",
        backgroundColor: "#F0EEEB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#4360AB",
        [theme.breakpoints.down('md')]: {
            padding: "130px 24px 80px 24px"
        },
    },
    blogHeroTitle: {
        fontFamily: "PP Fragment-Serif",
        fontWeight: "400",
        fontSize: "48px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px",
        },
    },
    blogHeroDescription: {
        fontFamily: "PP Fragment-Glare",
        marginBottom: "40px",
        marginTop: "24px",
        opacity: "0.7",
        fontSize: "22px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px",
        },
    },
    avatar: {
        height: '100%',
        width: '100%',
    },
    profile: {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    section2: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    mainImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px',
        [theme.breakpoints.down('md')]: {
            borderBottomLeftRadius: '20px',
            borderTopRightRadius: '20px',
        },
    },
    root: {
        paddingTop: '70px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: '100vh',
        paddingBottom: '50px',
    },
    headerSection: {
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    blogImgHeader: {
        padding: '20px',
        textAlign: 'center',
        boxSizing: 'border-box',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // background: (props) => !props.loading ? 'rgb(1,1,1,0.4)' : 'rgb(1,1,1,0.2)',
        height: (props) => !props.loading ? '24%' : "21%",
        display: 'flex',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        width: '100%',
        top: '0px',
        left: '0%',
        // color: '#ffffff',
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '28px',
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
        [theme.breakpoints.down('md')]: {
            borderBottomLeftRadius: '0px',
            borderTopRightRadius: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            borderRadius: '16px',
            height: (props) => !props.loading ? '24%' : "21%",            
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
        },
    },
    blogImgHead: {
        // color: '#ffffff',
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '28px',
        // fontFamily: 'Roboto',
    },
    blogImgMain: {
        position: 'relative',
        height: '400px',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
        },
    },
    btnSection: {
        width: "100%",
        marginTop: '0px',
    },
    imageSection1: {
        height: '50px',
        width: '50px',
        marginRight: '10px',
        // background: `url(${Background5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-8px',
        padding: '5px',
    },
    blogHeaderTitle: {
        fontWeight: "500",
        color: theme.palette.text.primary,
        fontSize: '24px',
        lineHeight: '28px',
        letterSpacing: '0.03em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '20px',
        },
    },
    blogSection2: {
        marginTop: '40px',
    },
    blogsRoot: {
        backgroundColor: theme.palette.foreground.primary,
        color: theme.palette.bodyText.primary,
        paddingTop: "0px"
    },
    bottomMainSection: {
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        position: 'absolute',
        // background:
        //     'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
        height: '100px',
        width: '100%',
        bottom: 0,
    },
    divider: {
        height: '100%',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            position: 'unset',
        },
        [theme.breakpoints.down('sm')]: {
            height: '60%',
            width: '100%',
        },
    },
    topSection: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        marginTop: '20px',
        padding: '0 20px',
        height: '85%',
        overflow: 'hidden',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
    ourblog: {
        marginTop: '50px',
        paddingTop: '30px',
    },
    blogButton: {
        // marginTop: '-50px',
        marginRight: '20px',
        // float: 'right',
        padding: '7px 15px',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        maxHeight: '34px',
        // background: '#EB6534',
        borderRadius: '30px',
        // color: '#ffffff',
        // '&:hover': {
        //     background: '#EB6534',
        // },
        [theme.breakpoints.down(470)]: {
            right: 0,
            position: 'absolute',
            top: ' -25px',
        },
    },
    header1: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 600,
        // fontFamily: 'Roboto',
        fontSize: '30px',
        lineHeight: '35px',
        // color: '#040407',
        [theme.breakpoints.down('lg')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '28px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            lineHeight: '24px',
        },
    },
    header2: {
        // textOverflow: 'ellipsis',
        // overflow: 'hidden',
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 400,
        // fontFamily: 'Roboto',
        fontSize: '18px',
        lineHeight: '30px',
        // color: '#1b1c1e',
        marginTop: '20px',
        // wordBreak: 'break-all',
        [theme.breakpoints.down('xl')]: {
            fontSize: '18px',
        },

        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            marginTop: '15px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '71%',
        },
    },
    bottomSection: {
        // position: 'absolute',
        paddingLeft: '20px',
        display: 'flex',
        // paddingTop: '20px',
        paddingBottom: '30px',
        // position: 'absolute',
        bottom: '0',
        height: '12%',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
            position: 'unset',
            // marginTop: '40px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px',
            height: '30%',
            width: '100%',
            paddingBottom: '15px',
        },
    },

    header3: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 600,
        fontSize: '19px',
        lineHeight: '140%',
        color: theme.palette.text.primary,
        [theme.breakpoints.down('xl')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '19px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '16px',
        },
    },
    header4: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px',
        color: theme.palette.text.primary,

        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            // marginTop: '5px',
        },
    },
    blogDetail: {
        marginTop: '0px',
        paddingLeft: '0px',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px',
        },
    },
    topGrid: {
        [theme.breakpoints.down('sm')]: {
            // height: '40%',
            width: '100%',
        },
    },
    paginationBlock: {
        backgroundColor: theme.palette.foreground.primary,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
        },
    },
},
{ name: "our-blog-view" }));

export { useStyles };

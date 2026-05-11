import { createStyles, makeStyles } from '@mui/styles';
import Background from 'assets/images/Background4.jpg';
import Background3 from 'assets/images/Background7.jpg';
// import Background5 from 'assets/images/profile.gif';
// import Background6 from 'assets/images/profile1.png';

const useTestimonialCardStyles = makeStyles((theme) => createStyles({
    avatar: {
        height: '100%',
        width: '100%',
    },
    root: {
        position: 'relative',
        // background: 'rgb(0,0,0, 0.3)',
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(50px)',
        minHeight: '330px',
        height: 'auto',
        maxHeight: '550px',
        width: '85%',
        marginLeft: 'auto',
        marginRight: '40px',
        marginTop: '70px',
        padding: '40px',
        boxSizing: 'border-box',
        borderRadius: '16px',
        marginBottom: '50px',
        [theme.breakpoints.up(1800)]: {
            width: '90%',
            marginRight: '20px',
        },
        [theme.breakpoints.down('md')]: {
            left: '-20px',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '7px',
            left: '0px',
            // width: '100%',
            marginLeft: '30px',
            minHeight: '310px',
            height: 'auto',
            maxHeight: 'none',
            padding: '20px 25px',
        },
        [theme.breakpoints.between(500, 700)]: {
            minHeight: '250px',
        },
        [theme.breakpoints.between(600, 700)]: {
            left: '2%',
        },
        [theme.breakpoints.between(700, 1034)]: {
            left: '-5%',
            minHeight: '250px',
        },
    },
    topSection: {
        height: '20%',
        paddingLeft: '20px',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
    imageSection: {
        position: 'absolute',
        width: '94px',
        height: '94px',
        borderRadius: '50%',
        left: '-40px',
        top: '30px',
        padding: '10px',
        boxSizing: 'border-box',
        // background: `url(${Background5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('xl')]: {
            left: '-40px',
            width: '70px',
            height: '70px',
        },
        [theme.breakpoints.down('md')]: {
            left: '-40px',
            width: '84px',
            height: '84px',
        },
        [theme.breakpoints.down('sm')]: {
            left: '-30px',
            width: '70px',
            height: '70px',
        },
    },
    bottomSection: {
        height: '70%',
        paddingLeft: '20px',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
    header1: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 700,
        marginTop: '10px',
        // // fontFamily: 'Roboto',
        fontSize: '20px',
        lineHeight: '24px',
        // color: '#58F2F0',
        [theme.breakpoints.down('xl')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
    },
    header2: {
        // // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        marginTop: '5px',
        // color: '#58F2F0',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
    },
    header3: {
        // // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        marginTop: '15px',
        lineHeight: '160%',
        // color: '#E6E8F3',
        letterSpacing: '0.08em',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            lineHeight: '130%',
        },
    },
},
{ name: "landing-testimonial-card" }));

const useAddsValueStyles = makeStyles((theme) => createStyles({
    avatar: {
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: "30px",
            width: "30px",
        },
    },
    root: {
        // background:
        //     'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
        backdropFilter: 'blur(50px)',
        // minHeight: '250px',
        height: '225px',
        // height: 'auto',
        width: '95%',
        // marginLeft: 'auto',
        marginRight: '0px',
        marginTop: "70px",
        padding: '15px 10px',
        boxSizing: 'border-box',
        borderRadius: '16px',
        marginBottom: '20px',
        cursor: 'pointer',
        // transition: '0.5s',
        // transition: 'background 1s, color 1s',
        // '&:hover': {
        //     background: 'rgba(0, 0, 0, 0.1)',
        // },
        [theme.breakpoints.down('xl')]: {
            marginRight: '20px',
        },
        [theme.breakpoints.down('md')]: {
            // background:
            //     'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)',
            // maxHeight: '400px',
            // minHeight: '280px',
            marginRight: '40px',
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '7px',
            width: '100%',
            height: '170px',
        },
    },
    imageSection: {
        height: '54px',
        width: '54px',
        [theme.breakpoints.down('sm')]: {
            height: "30px",
            width: "30px",
        },
    },
    topSection: {
        height: '30%',
        position: 'relative',
        paddingLeft: '20px',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
    bottomSection: {
        height: '70%',
        paddingLeft: '20px',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
    header1: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 500,
        // // fontFamily: 'Roboto',
        fontSize: '20px',
        lineHeight: '24px',
        // color: 'white',
        marginTop: '20px',
        letterSpacing: '0.4px',
        [theme.breakpoints.down('xl')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "10px",
            fontSize: '18px',
        },
    },
    header3: {
        // // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        marginTop: '50px',
        lineHeight: '170%',
        // color: '#C7CCE3',
        letterSpacing: '0.08em',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
            lineHeight: '140%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
            fontSize: '13px',
            lineHeight: '130%',
        },
    },
    header4: {
        // // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '14px',
        lineHeight: '170%',
        letterSpacing: '0.08em',
        marginTop: '20px !important',
        // color: '#58F2F0 !important',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
            lineHeight: '140%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '13px',
            lineHeight: '130%',
        },
    },
},
{ name: "landing-adds-value-card" }));

const useHowItWorkStyles = makeStyles((theme) => createStyles({
    avatar: {
        height: '100%',
        width: '100%',
        borderRadius: (props) => (props.flag ? '30px' : '0px'),
    },
    indexContainer: {
        position: 'absolute',
        height: '50px',
        width: '50px',
        background: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        left: '-23px',
        top: '-20px',
    },
    root: {
        cursor: 'pointer',
        transitionDelay: '1500ms',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backdropFilter: 'blur(50px)',
        minHeight: '90px',
        height: 'auto',
        width: '95%',
        marginLeft: 'auto',
        position: 'relative',
        marginRight: '0px',
        marginTop: "70px",
        boxSizing: 'border-box',
        marginBottom: '50px',
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
    imageSection: {
        // transition: "all 0.6s ease !important",
        position: 'absolute',
        height: '100%',
        width: '100%',
        transitionDelay: '1500ms',
    },
    topSection: {
        transition: 'ease-out 0.2s',
        // background: (props) =>
        //     props.flag
        //         ? `linear-gradient(160deg, rgba(66,57,140,1) 0%, rgba(113,71,135,1) 39%, rgba(45,53,90,1) 100%)`
        //         : `white`,
        backgroundSize: '100% 100% !important',
        backgroundRepeat: 'no-repeat',
        // border: (props) => (props.flag ? 'none' : '1px solid #C7CCE3'),

        // transition: "all 0.6s ease",
        height: '30%',
        position: 'relative',
        borderRadius: (props) => (props.flag ? '20px' : '20px'),
        padding: '30px',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
    header1: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: (props) => (props.flag ? 700 : 400),
        // // fontFamily: 'Roboto',
        fontSize: (props) => (props.flag ? '20px' : '18px'),
        lineHeight: '24px',
        // color: (props) => (props.flag ? 'white' : 'rgba(49, 57, 97, 1)'),
        // marginTop: "20px",
        [theme.breakpoints.down('xl')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
    },
    header2: {
        // color: 'white',
        fontSize: '30px',
    },
    header3: {
        // // fontFamily: 'Roboto',
        transitionDelay: '1500ms !important',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        marginTop: '20px',
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
            marginTop: '20px',
            fontSize: '13px',
            lineHeight: '130%',
        },
    },
    header4: {
        // // fontFamily: 'Roboto',
        transitionDelay: '1500ms !important',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '14px',
        marginTop: '20px',
        lineHeight: '170%',
        // color: '#58F2F0',
        textDecoration: 'none',
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
            marginTop: '20px',
            fontSize: '13px',
            lineHeight: '130%',
        },
    },
}, 
{ name: "landing-how-it-works-card" }));

const useHIWSliderCardStyles = makeStyles((theme) => createStyles({
    avatar: {
        height: '100% !important',
        width: '100%',
        // borderRadius: '8px',
        // filter: "drop-shadow(6.0176px 0px 22.566px rgba(0, 0, 0, 0.16))",
        objectFit: 'cover',
        // border: '2px solid #FFFFFF',
    },
    root: {
        cursor: 'pointer',
        // background: 'transparent',
        transitionDelay: '1500ms',
        minHeight: '90px',
        height: '335px',
        width: '300px',
        marginRight: '20px',
        boxSizing: 'border-box',
        marginBottom: '50px',
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
        transition: 'ease-out 0.2s',
        backgroundSize: '100% 100% !important',
        height: '100%',
    },
    header2: {
        // fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: '13px',
        marginLeft: '5px',
        lineHeight: '170%',
        // color: '#C4C4C4',
        letterSpacing: '0.04em',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '13px',
            lineHeight: '130%',
        },
    },
    header1: {
        // fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '13px',
        marginLeft: '5px',
        lineHeight: '170%',
        // color: '#58F2F0',
        letterSpacing: '0.04em',
    },
    header3: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        marginTop: '10px',
        marginLeft: '5px',
        lineHeight: '170%',
        // color: 'white',
        letterSpacing: '0.04em',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '13px',
            lineHeight: '130%',
        },
    },
    flexBox: {
        display: 'flex',
        justifyContent: 'space-between',
        // borderBottom: '1px solid #3B4575',
        paddingBottom: '3px',
    },
}, 
{ name: "landing-hiw-slider-card" }));

const twoImageCardStyles = makeStyles((theme) => createStyles({
    header1: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '30px',
        // color: 'white',
        marginLeft: '20px',
    },
    avatar: {
        height: '100%',
        width: '100%',
    },
    avatar1: {
        height: '100%',
        width: '100%',
        marginTop: "20px",
    },
    sliderContainer: {
        height: '500px',
        width: '475px',
        paddingTop: '50px',
        // background: 'linear-gradient(180deg, #252D54 0%, #252D54 100%)',
        borderRadius: '16px',
        paddingLeft: '25px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('lg')]: {
            height: '395px',
            width: '345px',
            paddingTop: '10px',
        },
    },
    sliderContainer1: {
        height: '500px',
        width: '475px',
        // background: 'linear-gradient(180deg, #252D54 0%, #252D54 100%)',
        borderRadius: '16px',
        padding: '0px 25px',
        paddingTop: '100px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('lg')]: {
            height: '395px',
            width: '345px',
            paddingTop: '10px',
        },
    },
    lImage: {
        position: 'absolute',
        zIndex: 1,
        top: '-60px',
        left: '-110px',
        // width: "230px",
        // height: '200px',
    },
    rImage: {
        position: 'absolute',
        zIndex: 1,
        top: '-10px',
        right: '-10px',
    },
    rImage1: {
        position: 'absolute',
        zIndex: 1,
        top: '20px',
        right: '0px',
    },
    image1: {
        position: 'absolute',
        // background: "green",
        /* bottom: -6px; */
        height: (props) => (props.dynamic ? '375px' : '500px'),
        width: (props) => (props.dynamic ? '280px' : '455px'),
        right: (props) => (props.dynamic ? '96px' : '0px'),
        top: (props) => (props.dynamic ? '110px' : '0px'),
        zIndex: 1,
        [theme.breakpoints.down('lg')]: {
            height: (props) => (props.dynamic ? '270px' : '395px'),
            width: (props) => (props.dynamic ? '220px' : '345px'),
            right: (props) => (props.dynamic ? '50px' : '0px'),
            top: (props) => (props.dynamic ? '100px' : '0px'),
        },
    },
    image2: {
        position: 'absolute',
        // background: "grey",
        height: (props) => (props.dynamic ? '500px' : '330px'),
        width: '450px',
        bottom: '0px',
        left: '0px',
        zIndex: 0,
        [theme.breakpoints.down('lg')]: {
            height: (props) => (props.dynamic ? '400px' : '230px'),
            width: '350px',
            // bottom: "200px",
            // left: "60px",
        },
    },
},
{ name: "landing-two-image-card" }));

const useHeaderCardStyles = makeStyles((theme) => createStyles({
    root: {
        height: '300px',
        // background: `linear-gradient(160deg, rgba(66,57,140,1) 0%, rgba(113,71,135,1) 39%, rgba(45,53,90,1) 100%)`,
        background: theme.palette.primary.main,
        backgroundSize: '100% 100% !important',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        marginTop: "-30px",
        paddingTop: "80px",
    },
    avatar: {
        height: '250px',
        [theme.breakpoints.down('md')]: {
            height: '150px',
        },
    },
    
    header1: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '42px',
        marginTop: '50px',
        // color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
            fontSize: '30px',
            lineHeight: '130%',
        },
    },
    header2: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '18px',
        marginTop: '10px',
        // textTransform: 'uppercase',
        // color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '16px',
            width: '80%',
            lineHeight: '130%',
        },
    },
    headertitle: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        fontWeight: 900,
        fontSize: '38px',
        marginTop: '10px',
        // color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: '18px',
            lineHeight: '130%',
        },
    },
    headertitle1: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '28px',
        marginTop: '10px',
        // color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            textAlign: 'center',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '130%',
        },
    },
    headertitle2: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '20px',
        cursor: 'pointer',
        marginTop: '10px',
        // color: '#58F2F0',
        [theme.breakpoints.down('md')]: {
            fontSize: '26px',
            textAlign: 'center',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: '18px',
            lineHeight: '130%',
        },
    },
    imageBox: {
        marginTop: '50px',
        height: '550px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '50px',
        borderRadius: '20px',
        background: `url(${Background3})`,
        backgroundSize: '100% 100% !important',
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            height: '400px',
        },
    },
},
{ name: "landing-header-card" }));

const useInvesterOwnerCardStyles = makeStyles((theme) => createStyles({
    root: {
        marginBottom: '30px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        maxWidth: '350px',
        minWidth: '250px',
        width: 'auto',
        minHeight: '290px',
        height: 'auto',
        // border: '1px solid #EEEEEE',
        // boxShadow: '0px 4px 33px rgba(0, 0, 0, 0.16)',
        borderRadius: '16px',
        // background: 'white',
        padding: '20px',
        marginTop: '-4px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('lg')]: {
            maxWidth: '320px',
        },
    },
    index: {
        // background: '#2D355A',
        height: '40px',
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '2px solid #FFFFFF',
        borderRadius: '8px',
    },
    header1: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '24px',
        // color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
    },
    header2: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '30px',
        marginTop: '10px',
        // color: '#040407',
        [theme.breakpoints.down('xl')]: {
            fontSize: '25px',
            lineHeight: '140%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
    },
    header3: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        marginTop: '10px',
        // color: '#2a2929',
        lineHeight: '180%',
        [theme.breakpoints.down('xl')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '160%',
        },
    },
},
{ name: "landing-investor-card" }));

const useOurBlogCardStyles = makeStyles((theme) => createStyles({
    skelLoad1: {
        transform: "none",
    },
    avatar: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        // [theme.breakpoints.down('sm')]: {
        //     maxHeight: '170px',
        // },
    },
    profile: {
        height: '32px',
        width: '32px',
        objectFit: 'cover',
        borderRadius: '50%',
    },
    cardpic: {
        height: (props) => !props.loading ? '300px' : "",
    },
    root: {
        cursor: "pointer",
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
        },
    },
    bloghead: {
        marginTop: "24px",
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            padding: '0 20px',
        },
    },
    bottomSection: {
        display: 'flex',
        gap: "12px",
        alignItems: "center",
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
        },
    },
    blogButton: {
        marginTop: '-50px',
        marginRight: '10px',
        float: 'right',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '7px 15px',
        borderRadius: '30px',
    },
    headerBlog: {
        fontFamily: "PP Fragment-Sans",
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: '18px',
        lineHeight: '25px',
        marginTop: '12px',
        marginBottom: '24px',
        flex: "1",
        letterSpacing: '0.02em',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '22px',
        },
    },
    headerBlogDetails: {
        textTransform: "capitalize",
        fontSize: "16px",
        color: "#6A7379",
        fontFamily: "PP Fragment-Glare"
    },
    header3: {
        fontSize: '16px',
        fontFamily: "PP Fragment-Glare",
        lineHeight: '18px',
        [theme.breakpoints.down('md')]: {
            fontSize: '15px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
        },
    },
    header4: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 600,
        fontSize: '13px',
        lineHeight: '24px',
        // color: '#4f4f4fc7',
        // color: 'white',
        [theme.breakpoints.down('xl')]: {
            fontSize: '13px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '13px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px',
        },
    },
    header2: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '17px',
        marginTop: '10px',
        lineHeight: '25px',
        // color: '#1b1c1e',
        // letterSpacing: '0.08em',
        // wordBreak: 'break-all',
        [theme.breakpoints.down('xl')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
        },
    },
    topSection: {
        height: '100%',
        boxSizing: 'border-box',
    },
    blogDetail: {
        // paddingLeft: '10px',
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
    divider: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
},
{ name: "landing-our-blog-card" }));

const useOurInvestorStyles = makeStyles((theme) => createStyles({
    avatar: {
        height: '100%',
        width: '100%',
        borderRadius: '50%',
    },
    root: {
        // background: '#FFFFFF',
        // border: '1px solid #EEEEEE',
        borderRadius: '16px',
        backdropFilter: 'blur(50px)',
        height: '290px',
        display: 'flex',
        alignContent: 'center',
        minWidth: '200px',
        maxWidth: '265px',
        width: 'auto',
        marginRight: '0px',
        padding: '20px 10px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        cursor: 'pointer',
        transition: '0.5s',
        // '&:hover': {
        //     background:
        //         'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)',
        // },
        [theme.breakpoints.down('xl')]: {
            marginRight: '20px',
        },
        [theme.breakpoints.down('md')]: {
            // '&:hover': {
            //     background: '#FFFFFF',
            // },
            marginRight: '0px',
            maxWidth: 'none',
            // width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '7px',
            width: '300px',
            height: 'auto',
        },
    },
    imageSection: {
        height: '120px',
        width: '120px',
        boxSizing: 'border-box',
    },
    flexBox: {
        paddingLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
    },
    topSection: {
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header1: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 400,
        textAlign: 'center',
        fontSize: '16px',
        lineHeight: '24px',
        marginTop: '0px',
        [theme.breakpoints.down('xl')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
    },
    header3: {
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '14px',
        marginTop: '20px',
        lineHeight: '170%',
        letterSpacing: '0.08em',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '13px',
        },
    },
    header4: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '140%',
        textAlign: 'center',
        marginTop: '10px',
        [theme.breakpoints.down('xl')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    },
},
{ name: "landing-our-investors-card" }));

const useOurTeamStyles = makeStyles((theme) => createStyles({
    avatar: {
        height: '100%',
        width: '100%',
    },
    root: {
        // background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(50px)',
        minHeight: '250px',
        maxHeight: '450px',
        height: '100%',
        width: '95%',
        marginRight: '0px',
        // border: '1px solid rgba(88, 242, 240, 0.3)',
        padding: '20px 10px',
        boxSizing: 'border-box',
        borderRadius: '16px',
        cursor: 'pointer',
        // '&:hover': {
        //     background:
        //         'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)',
        // },
        [theme.breakpoints.down('xl')]: {
            marginRight: '20px',
        },
        [theme.breakpoints.down('md')]: {
            // '&:hover': {
            //     background: 'rgba(0, 0, 0, 0.3)',
            // },
            marginBottom: '20px',
            marginRight: '40px',
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '7px',
            width: '100%',
            height: 'auto',
        },
    },
    imageSection: {
        height: '80px',
        width: '80px',
        // background: `url(${Background5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '10px',
        boxSizing: 'border-box',
    },
    flexBox: {
        paddingLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
    },
    topSection: {
        height: 'auto',
        position: 'relative',
        display: 'flex',
        margin: '0px 20px',
        paddingBottom: '20px',
        boxSizing: 'border-box',
        // borderBottom: '1px solid rgba(88, 242, 240, 0.3)',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '0px',
        },
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            paddingLeft: '0px',
            margin: '0px 5px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '35%',
            paddingLeft: '0px',
            margin: '0px 5px',
        },
    },
    bottomSection: {
        height: '65%',
        paddingLeft: '20px',
        [theme.breakpoints.down('xl')]: {
            paddingLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '5px',
        },
    },
    header1: {
        fontStyle: 'normal',
        opacity: 1,
        fontWeight: 600,
        // fontFamily: 'Roboto',
        fontSize: '20px',
        lineHeight: '24px',
        // color: 'white',
        marginTop: '5px',
        [theme.breakpoints.down('xl')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
    },
    header3: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        marginTop: '20px',
        lineHeight: '170%',
        // color: '#C7CCE3',
        letterSpacing: '0.08em',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '13px',
        },
    },
    header4: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '170%',
        // color: '#F5F5F5',
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '13px',
        },
    },
},
{ name: "landing-our-team-card" }));

export {
    useTestimonialCardStyles,
    useAddsValueStyles,
    useHowItWorkStyles,
    twoImageCardStyles,
    useHeaderCardStyles,
    useInvesterOwnerCardStyles,
    useOurBlogCardStyles,
    useHIWSliderCardStyles,
    useOurInvestorStyles,
    useOurTeamStyles,
};

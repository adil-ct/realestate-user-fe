import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
  title: {
    paddingBottom: '5%',
  },
  title1: {
    // lineHeight: '2.5ex',
    // height: '2.5ex',
    
  },
  title2: {
    // lineHeight: '2.5ex',
    // height: '2.5ex',
    // overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
  },
  subTitle: {
    opacity: 0.7
  },
  gridItem: {
    
  },
  alignText: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
  },
  btnContainer: {
    padding: '5% 0 3% 0'
  },
  leftContainer: {
    padding: '0 2%',
    margin: 'auto',
  },
  playerContainer: {
    width: 'auto',
    height: 'auto',
    maxWidth: '600px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1%',
    },
  },
  player: {
    position: 'relative',

    '& div': {
      position: 'absolute',
    }
  }
},
{ name : 'home-page-tweet-sectionslide-component'}));

export default styles;
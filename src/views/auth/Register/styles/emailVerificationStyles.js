import { createStyles, makeStyles } from '@mui/styles';

export const styles = makeStyles((theme) => createStyles({
  title: {
    display: "flex",
    margin: "auto",
    fontSize: "6rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  paddingModal: {
    paddingTop: "20px !important",
    paddingBottom: 4,
    [theme.breakpoints.up("sm")]: {
      paddingTop: "160px !important",
      paddingBottom: 4,
    },
  },
  borderRadiusMobile: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    // backgroundColor: "transparent",
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
  },
  borderDesktop: {
    borderRadius: 16,
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },
  sectionDesktop: {
    display: "none !important",
    [theme.breakpoints.up("sm")]: {
      display: "flex !important",
    },
  },
  sectionMobile: {
    display: "flex !important",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
},
{ name : 'auth-register-view-email-verification' }));

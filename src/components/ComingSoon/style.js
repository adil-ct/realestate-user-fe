import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles(() => createStyles({
  bannerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 125px)",
  },
},
{ name: "coming-soon-component" }));

export default styles;

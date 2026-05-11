import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles(() => createStyles({
    customTextField: {
        width: "100%",
        // "& input::placeholder": {
        //   color: "#4F4F4F",
        //   opacity: 1,
        // },
      },
}));

export default styles;
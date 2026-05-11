import { createStyles, makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => createStyles({
    closeIcon: {
        marginRight: 10,
        marginTop: 10,
    },
    resendLink: {
        color: theme.palette.callToAction.primary,
    },
},
{ name : 'phone-number-verification-modal'}));

export default styles;

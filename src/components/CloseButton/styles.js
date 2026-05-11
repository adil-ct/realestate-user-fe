import { createStyles, makeStyles } from '@mui/styles';
import colors from "assets/theme/base/colors";

const styles = makeStyles(() => createStyles({
    customCloseIcon: {
        color: colors.text.primary,
        background: colors.callToAction.closeIcon.dark,
        borderRadius: "50%",
        cursor: "pointer",
    }
}));

export default styles;
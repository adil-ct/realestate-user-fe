import { createStyles, makeStyles } from '@mui/styles';
import colors from "assets/theme/base/colors";

const styles = makeStyles(() => createStyles({
    customCloseIcon: {
        color: colors.callToAction.closeIcon.dark,
        background: colors.callToAction.closeIcon.light,
        border: `1px solid ${colors.callToAction.closeIcon.dark}`,
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "24px !important",
        width: "24px",
        height: "24px",
        padding: "4px",
        boxSizing: "border-box",
    }
}));

export default styles;
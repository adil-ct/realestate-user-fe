import { Dialog, DialogTitle } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";

// Static imports
import MKBox from "components/custom/MKBox";
import CloseButton from "components/CloseButton";
import { WithdrawModuls } from "./WalletModals/styles/styles";
import Bank from "components/Stripe/Bank";


const DepositViaStripe = ({ open: show, modalHandler, back }) => {
    const classes = WithdrawModuls();

    return (
        <Dialog
            open={show}
            aria-labelledby="responsive-dialog-title"
            className={classes.mainDialogBank}
        >
            <MKBox height="100%">
                <MKBox
                    display="flex"
                    justifyContent="flex-end"
                    top="30px"
                    left={30}
                >
                    {back && <Typography
                        variant="button"
                        className={classes.backButton}
                        display="flex"
                        alignItems="center"
                        onClick={() => {
                            // backBtn();
                        }}
                    >
                        <ArrowBackIosIcon />
                        Back
                    </Typography>}
                    <CloseButton
                        className={classes.closeIcon1}
                        p={3}
                        onClick={() => modalHandler(false)}
                    />
                </MKBox>
                <MKBox>
                    <DialogTitle
                        display="flex"
                        justify="center"
                        className={classes.title}
                    >
                        <Typography
                            variant="h3"
                            width={400}
                            className={classes.mainTitle}
                        >
                            Add Bank Account
                        </Typography>
                    </DialogTitle>
                </MKBox>
                <Bank type="account" handleSuccess={() => {modalHandler(false) }}/>
            </MKBox>
        </Dialog>
    );
};

export default DepositViaStripe;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle, Tooltip, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Static imports
import { getWalletBalance } from "store/actions";
import CurrencyFormat from "components/CurrencyFormat";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { Checked } from "constants/assets";
// import { TXN_LIMIT_LINK } from "constants/env";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import styles from "./styles";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";
import { NoDownload } from "constants/assets";

const DepositOptionsModal = ({
    open,
    handleClose,
    handelMainDepositModalContinue,
    paymentMethods,
    setPaymentMethods,
    setPaymentmethod,
    loading,
    backBtn
}) => {
    const classes = styles();
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();

    const { walletBalance, isLoading } = useSelector((state) => state.accounts);

    useEffect(() => {
        dispatch(getWalletBalance());
    }, []);

    // Toggle the status of payment methods
    const toggleCheckedStatus = async (id) => {
        // alert(id)
        const modifiedList = await paymentMethods?.map((item) => {
            if (item.id === id) {
                setPaymentmethod(item.key);
                if (!item.status) {
                    setDisabled(false);
                } else setDisabled(true);
                return {
                    ...item,
                    status: !item.status,
                };
            }
            return {
                ...item,
                status: false,
            };
        });
        setPaymentMethods(modifiedList);
    };

    return (
        <Dialog open={open} onClose={handleClose} className={classes.mainDialog3}>
            <MKBox display="flex" justifyContent="space-between" pl={2} className={classes.mkBox}>
                <Typography
                    variant="button"
                    className={classes.backButton}
                    display="flex"
                    alignItems="center"
                    onClick={() => {
                        backBtn();
                    }}
                >
                    <ArrowBackIosIcon />
                    Back
                </Typography>
                <CloseButton className={classes.closeIconRight} onClick={handleClose} />
            </MKBox>
            {paymentMethods?.length > 0 && (
                <DialogTitle
                    display="flex"
                    flexDirection="column"
                    justify="center"
                    className={classes.dialogTitle}
                >
                    <MKTypography
                        variant="h3"
                        align="center"
                        className={classes.depositModalTitle}
                    >
                        Select Funding Method
                    </MKTypography>
                    <Tooltip
                        classes={{
                            tooltip: classes.customTooltip,
                            arrow: classes.customArrow,
                        }}
                        title="As a blockchain-based platform, USDC is required to be able to purchase real estate. USDC is a stablecoin that represents USD on blockchain."
                    >
                        <MKTypography
                            variant="h3"
                            align="center"
                            className={classes.depositModalSubTitle}
                        >
                            Deposit or Buy USDC to purchase real estate
                        </MKTypography>
                    </Tooltip>
                </DialogTitle>
            )}
            <DialogContent
                display="flex"
                justify="center"
                p={2}
                className={classes.dialogContent}
            >
                {paymentMethods?.length > 0 && (
                    <MKBox>
                        <MKTypography variant="body2" className={classes.depositSubititle1}>
                            {isLoading.walletBalance ? (
                                "$0"
                            ) : (
                                <CurrencyFormat
                                    prefix={"$"}
                                    value={walletBalance.availableBalance}
                                    zeroAllowed
                                />
                            )}
                        </MKTypography>
                        <span className={classes.currentBalance}>Current balance</span>
                    </MKBox>
                )}
                <MKBox display="flex" className={classes.depositSelectBox}>
                    {/* <MKTypography variant="h3" className={classes.depositSelect}>
            Select Method
          </MKTypography> */}
                    <MKBox className={classes.selectBoxMainContainer}>
                        {paymentMethods?.length === 0 && (
                            <MKBox className={classes.noContentBox}>
                                <span className={classes.noContentText}>
                                    We are working on something awesome. stay tuned!
                                </span>

                                <MKBox className={classes.iconContainer1}>
                                    <img
                                        src={NoDownload}
                                        alt="No Data"
                                        className={classes.noPaymentM}
                                    />
                                </MKBox>
                            </MKBox>
                        )}
                        {paymentMethods?.map((item) => (
                            <MKBox
                                key={item.id}
                                className={
                                    item.status
                                        ? classes.selectBoxContainerSelected2
                                        : item.disabled
                                            ? classes.disabledBoxContainer
                                            : classes.selectBoxContainer2
                                }
                                onClick={() =>
                                    item.disabled ? "" : toggleCheckedStatus(item.id)
                                }
                            >
                                <MKBox display="flex" alignItems="center">
                                    <MKBox>
                                        <MKBox className={classes.iconContainer}>
                                            <img
                                                src={item.Image}
                                                className={classes.depositImg}
                                                alt={item.alt}
                                            />
                                        </MKBox>
                                    </MKBox>

                                    <MKBox className={classes.selectMethodOption}>
                                        <MKTypography
                                            variant="gradient"
                                            fontWeight="bold"
                                            fontSize="14px"
                                            className={classes.methodName}
                                        >
                                            {item.name}
                                        </MKTypography>
                                        <MKTypography
                                            variant="gradient"
                                            fontWeight="bold"
                                            fontSize="14px"
                                            className={classes.methodSubtitle}
                                        >
                                            {item.subtitle}
                                        </MKTypography>
                                        <MKTypography
                                            variant="gradient"
                                            fontWeight="bold"
                                            fontSize="14px"
                                            className={classes.methodTagline}
                                        >
                                            {item.tagline}
                                        </MKTypography>
                                        <MKBox className={classes.selectMethod2}>
                                            <MKTypography className={classes.walletAvaLmt}>
                                                {item.noLimit && !item?.disabled ? item.noLimit : ""}
                                            </MKTypography>
                                            {!item?.disabled ? (
                                                <MKTypography className={classes.walletAvaLmt}>
                                                    {item.limit ? "Available limit " : ""}
                                                </MKTypography>
                                            ) : (
                                                <MKTypography className={classes.walletAvaLmt}>
                                                    {item?.disableMsg}
                                                </MKTypography>
                                            )}
                                            {!item?.disabled && (
                                                <MKTypography className={classes.walletAvaLmt2}>
                                                    {item.limit}
                                                </MKTypography>
                                            )}
                                        </MKBox>
                                    </MKBox>
                                </MKBox>
                                {item.status && (
                                    <MKBox display="flex" alignItems="center" pl="5px">
                                        <img
                                            src={Checked}
                                            alt="checked"
                                            className={classes.checkedIcon}
                                        />
                                    </MKBox>
                                )}
                            </MKBox>
                        ))}
                        {paymentMethods?.length > 0 && (
                            <MKBox display="flex" className={classes.knowMoreContainer}>
                                <MKTypography className={classes.walletAvaLmt}>
                                    Click{" "}
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        className={classes.knowMoreLink}
                                        href="https://help.mogul.ooo/hc/en-us/articles/8384731673885-Depositing-Funds-"
                                    >
                                        here
                                    </a>{" "}
                                    to learn more
                                </MKTypography>
                            </MKBox>
                        )}
                    </MKBox>
                </MKBox>
                {paymentMethods?.length !== 0 && (
                    <MKBox display="flex" justifyContent="center">
                        <MKButton
                            variant="gradient"
                            className={classes.depoitContinueBtn}
                            // color="primary"
                            size="medium"
                            onClick={handelMainDepositModalContinue}
                            disabled={disabled}
                        >
                            <ButtonSpinner isLoading={loading} text="Submit" />
                        </MKButton>
                    </MKBox>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default DepositOptionsModal;

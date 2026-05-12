import React from "react";
import { useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Tooltip } from "@mui/material";

// Static imports
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import CloseButton from "components/CloseButton";
import ShareIcon from "@mui/icons-material/Share";
import { Copy, WhatsApp, telegram, twitter, Fb } from "constants/assets";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import styles from "./styles";
import toaster from "utils/toaster";
import { SHARE_TEXT, SHARE_TITLE, AFFILIATE_SHARE_TEXT } from "constants/env";

const InviteFriendModal = ({ open, handleClose, affiliateUser, shareLink }) => {
  const classes = styles();
  const { copy, tooltipText } = useCopyToClipboard();
  const { copy: newCopy, tooltipText: newToolTipText } = useCopyToClipboard();

  const { userData } = useSelector((state) => state.auth);

  const shareToSocial = async (data) => {
    const shareData = {
      title: SHARE_TITLE,
      text: affiliateUser ? AFFILIATE_SHARE_TEXT : SHARE_TEXT,
      url: data,
    };
    try {
      if (!navigator.canShare) {
        toaster.error("Your browser doesn't support the Web Share API");
        return;
      }
      await navigator.share(shareData);
    } catch (err) {
      // toaster.error(err?.message);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      className={classes.mainDialog}
    >
      <MKBox display="flex" justifyContent="right">
        <CloseButton className={classes.closeIconRight} onClick={handleClose} />
      </MKBox>
      <DialogTitle
        display="flex"
        justify="center"
        className={classes.dialogTitle2}
      >
        <MKTypography
          variant="h3"
          align="center"
          className={classes.depositModalTitle}
        >
          {affiliateUser ? "Invite occurrence" : "Invite Friends"}
        </MKTypography>
      </DialogTitle>
      <DialogContent
        display="flex"
        justify="center"
        p={2}
        className={`${classes.dialogContentIFM}`}
      >
        <MKBox className={classes.shareMainContainer}>
          <MKBox className={classes.shareCodeContainer}>
            <MKTypography className={classes.shareCodeText}>
              {affiliateUser ? "Affiliate " : "Referral "} Code
            </MKTypography>
            <MKBox className={classes.copyCodeContainer}>
              <MKTypography className={classes.copyCodeText}>
                {userData?.referralCode ?? "-"}
              </MKTypography>
              <MKBox className={classes.copyCodeIconsBox}>
                <Tooltip
                  enterTouchDelay={0}
                  title={tooltipText === "Copy" ? "" : tooltipText}
                >
                  <img
                    src={Copy}
                    alt="copy"
                    onClick={() => copy(userData?.referralCode)}
                  />
                </Tooltip>
              </MKBox>
            </MKBox>
          </MKBox>
          <MKBox className={classes.shareCodeContainer}>
            <MKTypography className={classes.shareCodeText}>
              {affiliateUser ? "Affiliate " : "Referral "} Link
            </MKTypography>
            <MKBox className={classes.copyCodeContainer}>
              <MKTypography className={classes.copyCodeText}>
                {shareLink?.length > 10
                  ? shareLink?.slice(0, 12) + "....." + shareLink?.slice(-3)
                  : shareLink}
              </MKTypography>
              <MKBox className={classes.copyCodeIconsBox}>
                <Tooltip
                  enterTouchDelay={0}
                  title={newToolTipText === "Copy" ? "" : newToolTipText}
                >
                  <img
                    src={Copy}
                    alt="copy"
                    onClick={() => newCopy(shareLink)}
                  />
                </Tooltip>
                {/* <MKBox className={`${classes.referralLinkBox} ${classes.sectionDesktopSm}`}>
                  <img src={ShareBlue} onClick={() =>
                    shareToSocial(shareLink)
                  } />
                </MKBox> */}
              </MKBox>
            </MKBox>
          </MKBox>
        </MKBox>
        <MKBox className={classes.sectionDesktopFlex}>
          <MKTypography className={classes.shareCodeText1}>
            Share using
          </MKTypography>
          <MKBox className={classes.iconMainContainer}>
            <a
              href={
                shareLink
                  ? `https://api.whatsapp.com/send?text=${affiliateUser ? AFFILIATE_SHARE_TEXT : SHARE_TEXT} ${shareLink}`
                  : "#"
              }
              target="_blank"
              rel="noreferrer"
            >
              <MKBox className={classes.iconContainerIFM}>
                <img src={WhatsApp} />
              </MKBox>
            </a>
            <a
              href={
                shareLink
                  ? `https://www.facebook.com/sharer/sharer.php?u=${shareLink}`
                  : "#"
              }
              disabled
              target="_blank"
              rel="noreferrer"
            >
              <MKBox className={classes.iconContainerIFM}>
                <img src={Fb} />
              </MKBox>
            </a>
            <a
              href={
                shareLink
                  ? `https://t.me/share/url?url=${affiliateUser ? AFFILIATE_SHARE_TEXT : SHARE_TEXT} ${shareLink}`
                  : "#"
              }
              target="_blank"
              rel="noreferrer"
            >
              <MKBox className={classes.iconContainerIFM}>
                <img src={telegram} />
              </MKBox>
            </a>
            <a
              href={
                shareLink
                  ? `https://twitter.com/intent/tweet?text=${affiliateUser ? AFFILIATE_SHARE_TEXT : SHARE_TEXT} ${shareLink}`
                  : "#"
              }
              target="_blank"
              rel="noreferrer"
            >
              <MKBox className={classes.iconContainerIFM}>
                <img src={twitter} />
              </MKBox>
            </a>
          </MKBox>
        </MKBox>
        <MKBox
          display="flex"
          justifyContent="center"
          width="100%"
          alignItems="center"
          mt={2}
          className={classes.sectionDesktopSm1}
        >
          <MKButton
            variant="gradient"
            // color="primary"
            className={classes.shareBtn}
            onClick={() => shareToSocial(shareLink)}
          >
            <ShareIcon sx={{ mr: "10px" }} />
            Share Invitation
          </MKButton>
        </MKBox>
      </DialogContent>
    </Dialog>
  );
};
export default InviteFriendModal;

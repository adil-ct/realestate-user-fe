import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Menu, MenuItem, Chip } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// Static imports
import { View, Delete, More, CCard } from "constants/assets";
import MKBadge from "components/custom/MKBadge";
import MKButton from "components/custom/MKButton";
import MKProgress from "components/custom/MKProgress";
import MKBox from "components/custom/MKBox";
import styles from "../styles";
import { NBank } from "constants/assets";

const enable = {
  badge: "badge",
  progressBar: "progressBar",
  priceChange: "priceChange",
  blueLink: "blueLink",
  redLink: "redLink",
  blueLinkBalance: "blueLinkBalance",
  bluebutton: "bluebutton",
  redbutton: "redbutton",
  deleteAndEditButton: "deleteAndEditButton",
  clockicon: "clockicon",
  twocoloredtext: "twocoloredtext",
  download: "download",
  edittrash: "edittrash",
  visacard: "visacard",
  mastercard: "mastercard",
  devicename: "devicename",
  emailid: "emailid",
  asset: "asset",
  viewWithDots: "viewWithDots",
  viewWithEdit: "viewWithEdit",
  view: "view",
  trash: "trash",
  clickEvent: "clickEvent",
  edit: "edit",
  bank: "bank",
  dots: "dots",
};

// const status = {
//   Complete: "success",
//   Completed: "success",
//   Pending: "warning",
//   Paid: "success",
//   "Against Leading": "error",
//   "For Leading": "success",
//   "In Progress": "warning",
//   Failed: "error",
//   failed: "error",
//   "For’s Won": "success",
//   Generated: "success",
// };

// const matchContentWithColor = (content) => {
//   const Content = content?.toString();
//   if (status[Content]) {
//     return status[Content];
//   }
//   return "wrong inputdata";
// };

const ApplyCompTo = ({
  type,
  content,
  link,
  altContent,
  tableAdvancedActions,
}) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuComponent = () => {
    return (
      <Menu
        id="demo-positioned-menu"
        PaperProps={{
          style: {
            width: "150px",
          },
        }}
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {tableAdvancedActions?.actions?.map((item, index) => {
          return (
            <MenuItem
              onClick={() => {
                if (item?.disableCustom) {
                  item?.disabled(altContent) ? "" : item?.handler(altContent);
                } else {
                  item?.handler(item?.data ? altContent : altContent?.id);
                }
                handleClose();
              }}
              key={index}
              className={`${
                item?.disableCustom
                  ? item?.disabled(altContent)
                    ? classes.disabledState
                    : ""
                  : item?.disabled
                  ? classes.disabledState
                  : ""
              }`}
            >
              {item?.name}
            </MenuItem>
          );
        })}
      </Menu>
    );
  };

  switch (type) {
    case enable.badge:
      return (
        <MKBadge
          badgeContent={content}
          // color={matchContentWithColor(content)}
          container
        />
      );
    case enable.progressBar:
      return (
        <Box>
          <Typography
            variant="subtitleMedium"
            component="p" /*color="primary"*/
          >
            {content}%
          </Typography>
          <MKProgress variant="contained" /*color="primary"*/ value={content} />
        </Box>
      );
    case enable.blueLink:
      return (
        <Link to={link || ""} replace className={classes.blueColor}>
          {content}
        </Link>
      );
    case enable.blueLinkBalance:
      return (
        <Box className={classes.dFlex}>
          {tableAdvancedActions?.linkActions?.map((action) =>
            link?.length ? (
              <Link
                to={link || ""}
                key={action.name}
                replace
                className={`${classes.blueLinkBalance} ${
                  action?.disabled && action?.disabled(altContent)
                    ? classes.disabledState
                    : ""
                }`}
                onClick={() => action.handler(altContent)}
              >
                {action.name}
              </Link>
            ) : (
              <span
                key={action.name}
                className={`${classes.blueLinkBalance} ${
                  (action?.disabled && action?.disabled(altContent)) ||
                  action?.disable
                    ? classes.disabledState
                    : ""
                }`}
                onClick={() =>
                  action?.disable ? "" : action.handler(altContent)
                }
              >
                {action.name}
              </span>
            )
          )}
          <img
            src={More}
            alt="more"
            onClick={handleClick}
            className={classes.moreIcon}
          />
          <MenuComponent />
        </Box>
      );
    case enable.redLink:
      return (
        <Link to={content} className={classes.colorRed}>
          {content}
        </Link>
      );
    case enable.devicename:
      return (
        <Typography variant="h7" className={classes.colorEmail}>
          Chip
          {content}
        </Typography>
      );
    case enable.emailid:
      return (
        <Typography variant="h9" className={classes.colorEmail}>
          {content}
        </Typography>
      );
    case enable.visacard:
      return altContent["Card Type"] === "VISA" ? (
        <Box className={classes.dFlex1}>
          <Typography
            component="img"
            src={CCard}
            alt="visa"
            className={classes.visaCard1}
          />
          <Typography className={classes.accountNumber}>
            {altContent && altContent["AccountNumber"]}{" "}
            {altContent?.default && (
              <Chip label="Default" /*color="info"*/ variant="outlined" />
            )}
          </Typography>
        </Box>
      ) : (
        <Box className={classes.dFlex2}>
          <Typography
            component="img"
            src={CCard}
            alt="visa"
            className={classes.visaCard1}
          />
          <Typography className={classes.accountNumber}>
            {altContent && altContent["AccountNumber"]}{" "}
            {altContent?.default && (
              <Chip label="Default" /*color="info"*/ variant="outlined" />
            )}
          </Typography>
        </Box>
      );
    case enable.mastercard:
      return (
        <Box className={classes.dFlex1}>
          <Typography
            component="img"
            src={CCard}
            alt="visa"
            className={classes.visaCard}
          />
          <Typography className={classes.accountNumber}>
            {altContent && altContent["AccountNumber"]}
          </Typography>
        </Box>
      );
    case enable.bank:
      return (
        <Box className={classes.dFlex2}>
          <Typography
            component="img"
            src={NBank}
            alt="visa"
            className={classes.visaCard}
          />
          <Typography className={classes.accountNumber}>
            {altContent && altContent["Account Number"]}{" "}
            {altContent?.default && (
              <Chip label="Default" /*color="info"*/ variant="outlined" />
            )}
          </Typography>
        </Box>
      );
    case enable.twocoloredtext:
      return (
        <>
          {content.value}
          <Typography
            component="sup"
            sx={{
              // color: content.change < 0 ? "red" : "green",
              fontSize: "12px",
            }}
          >
            {"  "}
            {content.change} %
          </Typography>
        </>
      );
    case enable.bluebutton:
      return (
        <MKButton href="#text-buttons" className={classes.blueContent}>
          {content}
        </MKButton>
      );
    case enable.redbutton:
      return (
        <MKButton href="#text-buttons" className={classes.redButton}>
          {content}
        </MKButton>
      );
    case enable.edittrash:
      return (
        <>
          <Typography
            component="img"
            src={View}
            alt="view"
            onClick={() =>
              tableAdvancedActions?.cardActions?.view?.handler(altContent.id)
            }
            className={classes.trashIcon}
          />
          <Typography
            component="img"
            src={Delete}
            onClick={() =>
              tableAdvancedActions?.cardActions?.delete?.handler(altContent.id)
            }
            alt="trash"
            className={classes.trashIcon1}
          />
        </>
      );
    case enable.viewWithEdit:
      return (
        <Box className={classes.viewWithEdit}>
          <Typography
            component="img"
            src={View}
            alt="view"
            onClick={() => tableAdvancedActions?.view?.handler(altContent)}
            className={classes.trashIcon}
          />
          <Typography
            component="sup"
            // color="#2D9CDB"
            fontSize="14px"
            className={
              altContent?.approvalStatus !== "Pending" &&
              altContent?.approvalStatus !== "Rejected"
                ? classes.editTextDisabled
                : classes.editText
            }
            onClick={() =>
              altContent?.approvalStatus !== "Pending" &&
              altContent?.approvalStatus !== "Rejected"
                ? ""
                : tableAdvancedActions?.edit?.handler(altContent)
            }
            alt="trash"
          >
            Edit
          </Typography>
        </Box>
      );
    case enable.edit:
      return (
        <Box className={classes.viewWithEdit}>
          <Typography
            component="sup"
            // color="#2D9CDB"
            fontSize="14px"
            className={
              altContent?.approvalStatus !== "Pending"
                ? classes.editTextDisabled
                : classes.editText
            }
            onClick={() =>
              altContent?.approvalStatus !== "Pending"
                ? ""
                : tableAdvancedActions?.edit?.handler(altContent)
            }
            alt="trash"
          >
            Edit
          </Typography>
        </Box>
      );
    case enable.trash:
      return (
        <>
          <Typography
            component="img"
            src={Delete}
            onClick={() =>
              tableAdvancedActions?.cardActions?.delete?.handler(altContent.id)
            }
            alt="trash"
            className={classes.trashIcon1}
          />
        </>
      );
    case enable.viewWithDots:
      return (
        <>
          <Typography
            component="img"
            src={View}
            onClick={() => tableAdvancedActions?.view?.handler(altContent.id)}
            alt="view"
            className={classes.trashIcon}
          />
          <img
            src={More}
            alt="more"
            onClick={handleClick}
            className={classes.moreIcon}
          />
          <MenuComponent />
        </>
      );
    case enable.dots:
      return (
        <>
          <img
            src={More}
            alt="more"
            onClick={handleClick}
            className={classes.moreIcon}
          />
          <MenuComponent />
        </>
      );
    case enable.view:
      return (
        <Box className={classes.viewWithEdit}>
          <Typography
            component="img"
            src={View}
            onClick={() => tableAdvancedActions?.view?.handler(altContent)}
            alt="view"
            className={classes.trashIcon}
          />
        </Box>
      );
    case enable.deleteAndEditButton:
      return (
        <>
          <Typography
            component="img"
            src={Delete}
            alt="trash"
            className={classes.trashIcon}
          />
        </>
      );

    case enable.clockicon:
      return (
        <MKBox className={classes.clockIcon}>
          <Typography className={classes.clocText}>
            {" "}
            <AccessTimeOutlinedIcon />
          </Typography>
          <Typography className={classes.clockContent}> {content}</Typography>
        </MKBox>
      );
    case enable.download:
      return (
        <MKBox display="flex" className={classes.download}>
          {" "}
          <FileDownloadIcon className={classes.downloadIcon} />
          <Typography className={classes.downloadContent}>{content}</Typography>
        </MKBox>
      );
    case enable.clickEvent:
      return (
        <MKBox onClick={() => tableAdvancedActions.handler(altContent)}>
          {content}
        </MKBox>
      );
    default: {
      throw new Error(`type ${type} is not defined`);
    }
  }
};

export default ApplyCompTo;

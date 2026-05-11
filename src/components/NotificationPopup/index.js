import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Menu from "@mui/material/Menu";
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';

import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

// Static imports
import { DoubleTick } from 'constants/assets';
import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import { markAsReadSaga } from "store/actions";
import styles from "./styles";
import { routePaths } from "routes/mainRoutes/routePaths";

const NotificationMenu = ({ open, handleClose }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { topNotifications } = useSelector((state) => state.notifications);

  const handleAllRead = () => {
    dispatch(markAsReadSaga({ notificationId: null }));
  }

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={Boolean(open)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        style: {
          left: "200px !important",
          width: "520px",
        },
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(open)}
      onClose={handleClose}
    >
      <MKBox className={classes.notificationMainContainer}>
        <MKBox className={classes.notificationInsideContainer}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <MKBox className={classes.notificationLabel}>Notifications</MKBox>
            </Grid>
            {(topNotifications?.length > 0) && 
              <Grid item xs={12} sm={6} className={classes.filterBox}>
                <MKBox className={classes.markedRead} onClick={handleAllRead}>
                  <img src={DoubleTick} alt="Marked Read" />
                  Mark as all read
                </MKBox>
              </Grid>
            }
          </Grid>
        </MKBox>
        <MKBox className={classes.notificationsBox}>
          {topNotifications?.map((ele, i) => (
            <>
              <MKBox className={classes.notifItem} key={"notification" + i}>
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <MKBox className={classes.notifTextBox}>
                      {!ele?.isRead && (
                        <MKTypography
                          variant="span"
                          className={classes.unreadDot}
                        ></MKTypography>
                      )}
                      <MKTypography
                        variant="span"
                        className={classes.notificationText}
                      >
                        {ele?.description.length > 100
                          ? ele?.description.slice(0, 100) + "...."
                          : ele?.description}
                      </MKTypography>
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <MKBox className={classes.flexEnd}>
                      <MKTypography variant="span" className={classes.time}>
                        {moment(ele?.createdAt).format('hh:mm A')}
                      </MKTypography>
                    </MKBox>
                  </Grid>
                </Grid>
              </MKBox>
            </>
          ))}
          {!topNotifications?.length && 
            <MKBox className={classes.noContentBox}>
              <CircleNotificationsOutlinedIcon/>
              <span className={classes.noContentText}>No notifications right now. You are up to date.</span>
            </MKBox>
          }
        </MKBox>
        <MKBox className={classes.seeAllBox}>
          <NavLink to={routePaths.NOTIFICATIONS_PATH} onClick={handleClose}>
            {
              topNotifications?.length > 0 && 
              <MKTypography variant="span" className={classes.seeAll}>
                See all
              </MKTypography>
            }
          </NavLink>
        </MKBox>
      </MKBox>
    </Menu>
  );
};

export default NotificationMenu;

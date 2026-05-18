import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Grid, Pagination } from "@mui/material";
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';

import MKTypography from "components/custom/MKTypography";
import Dropdown from "components/custom/DropDown/index";
import { DoubleTick } from "constants/assets";
import MKBox from "components/custom/MKBox";

import styles from "./styles";
import { markAsReadSaga, getFilterNotificationData } from "store/actions";

const Notifications = () => {
  const classes = styles();
  const [dropDownValue, setDropDownValue] = useState("Today");
  const [currentPage, setCurrentPage] = useState(1);
  const [daysOld, setDaysOld] = useState(1);
  const { notificationsList } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const handleAllRead = () => {
    dispatch(markAsReadSaga({ notificationId: null }));
  };

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  let maxCount = notificationsList?.totalCount
    ? Math.ceil(Number(notificationsList?.totalCount / 10))
    : 0;

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  // Side effect for change in date filter
  useEffect(() => {
    let daysOld = 0;
    if (dropDownValue === "Today") {
      daysOld = 1;
    } else if (dropDownValue === "Yesterday") {
      daysOld = 2;
    } else if (dropDownValue === "Last Week") {
      daysOld = 7;
    } else if (dropDownValue === "Last Month") {
      daysOld = 30;
    }
    setCurrentPage(1)
    setDaysOld(daysOld)
    dispatch(getFilterNotificationData({ daysOld, page: currentPage }));
  }, [dropDownValue]);

  // Side effect for change in current page
  useEffect(()=>{
    dispatch(getFilterNotificationData({ daysOld, page: currentPage }));
  },[currentPage])

  return (
    <MKBox className={classes.notificationContainer}>
      <MKBox className={classes.notificationMainContainer}>
        <MKBox className={classes.notificationInsideContainer}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <MKBox className={classes.notificationLabel}>Notifications</MKBox>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.filterBox}>
              {!!notificationsList.notifications?.length && (
                <MKBox className={classes.markedRead} onClick={handleAllRead}>
                  <img src={DoubleTick} alt="Marked Read" />
                  Mark as all read
                </MKBox>
              )}
              {/* Hide filter */}
              <MKBox>
                <Dropdown
                  drpdwnName="Duration"
                  drpdwnOptions={[
                    "Today",
                    "Yesterday",
                    "Last Week",
                    "Last Month",
                    "All",
                  ]}
                  dropDownValue={dropDownValue}
                  setDropDownValue={setDropDownValue}
                />
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
        {!notificationsList.notifications?.length ? (
          <MKBox className={classes.noContentBox}>
            <CircleNotificationsOutlinedIcon fontSize="large"/>
            <span className={classes.noContentText}>
              No notifications right now. You are up to date.
            </span>
          </MKBox>
        ) : (
          <MKBox className={classes.notificationsBox}>
            {notificationsList.notifications.map((ele, i) => (
              <>
                <MKBox className={classes.notifItem} key={i}>
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
                          {ele?.description}
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <MKBox className={classes.flexEnd}>
                        <MKTypography variant="span" className={classes.date}>
                          {moment(ele?.createdAt).format("MM/DD/YYYY")}
                        </MKTypography>
                        <MKTypography variant="span" className={classes.time}>
                          {moment(ele?.createdAt).format("hh:mm A")}
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  </Grid>
                </MKBox>
              </>
            ))}
            {paginationConfig && paginationConfig?.maxCount > 1 && (
              <Pagination
                className={classes.paginationStyle}
                classes={{ ul: classes.ul }}
                count={paginationConfig?.maxCount}
                onChange={(event, value) => paginationConfig?.handler(value)}
                shape="rounded"
                page={paginationConfig?.currentPage}
              />
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
};

export default Notifications;

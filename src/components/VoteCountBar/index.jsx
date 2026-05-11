import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

import styles from "./styles";

const VoteCountBar = ({
  yesVoted,
  NoVoted = 0,
  totalVotes,
  votingOptions,
  status,
}) => {
  const classes = styles();
  const total = totalVotes;
  const greenBarWidth = yesVoted * (100 / total);
  const redBarWidth = NoVoted * (100 / total);

  return (
    <div className={classes.dFlex}>
      {status !== "Pending" ? (
        <div className={classes.voteMainContainer}>
          <div
            className={total === yesVoted ? classes.bar : classes.leftBar}
            style={{ /*background: "#4CAF50",*/ width: `${greenBarWidth}%` }}
          >
            <div className={`${classes.hoverBar} ${classes.greenHoverBar}`}>
              {votingOptions[0]?.label}: {yesVoted}
            </div>
          </div>
          <div
            className={total === NoVoted ? classes.bar : classes.rightBar}
            style={{ /*background: "#F95C66",*/ width: `${redBarWidth}%` }}
          >
            <div className={`${classes.hoverBar} ${classes.redHoverBar}`}>
              {votingOptions[1]?.label}: {NoVoted}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={classes.voteMainContainer1}>
            <div className={classes.bar} /*style={{ background: "#4CAF50" }}*/>
              <div className={`${classes.hoverBar} ${classes.greyHoverBar}`}>
                Proposal Approval is pending
              </div>
            </div>
          </div>
          <PriorityHighIcon className={classes.exclamation} />
        </>
      )}
    </div>
  );
};

export default VoteCountBar;

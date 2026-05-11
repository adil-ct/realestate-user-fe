import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// Static imports
import VoteConfirmationModal from "components/Modal/VoteConfirmationModal";
import Timer from "components/Timer";
import MKBox from "components/custom/MKBox";
import VoteCountBar from "components/VoteCountBar";
import { createVoteSaga } from "store/actions";
import { GreenCheck } from "constants/assets";
import { RedCheck } from "constants/assets";
import getTimeRemaining from "utils/getRemainingTime";
import CurrencyFormat from "components/CurrencyFormat";
import styles from "./styles";
import toaster from "utils/toaster";
import MKButton from "components/custom/MKButton";

const VotingStats = ({
  votedForCount,
  votedAgainstCount,
  votingEndDate,
  totalVotes,
  approvalStatus,
  votingStartDate,
  voted,
  type,
  id,
  liveStatus,
  voteStatus,
  setCreateLoader,
  holdings,
  voteOptions,
  result,
}) => {
  const classes = styles();
  const [timerData, setTimerData] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    days: 0,
    sHours: -1,
    sMinutes: -1,
    sSeconds: -1,
    sDays: -1,
  });
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [label, setLabel] = useState("");
  const [labelOriginal, setLabelOriginal] = useState("");
  const { loader } = useSelector((state) => state.pManager);

  const SubTitle = () => (
    <>
      You will be casting <i>{holdings}</i> votes{" "}
      {label === "yes" ? "for" : "against"} the proposal. <br />
      <b>Please click Confirm to cast your vote.</b>
    </>
  );

  const modalData = {
    title: "Voting Confirmation",
    subtitle: SubTitle,
    cancel: "Cancel",
    success: "Confirm",
  };
  useEffect(() => {
    const { hours, minutes, seconds, days } = getTimeRemaining(
      new Date(votingEndDate)
    );
    const {
      hours: sHours,
      minutes: sMinutes,
      seconds: sSeconds,
      days: sDays,
    } = getTimeRemaining(new Date(votingStartDate));
    setTimerData({
      hours,
      minutes,
      seconds,
      days,
      sHours,
      sMinutes,
      sSeconds,
      sDays,
    });
  }, [votingStartDate, votingEndDate]);

  const handleSuccess = () => {
    setCreateLoader(false);
    setOpenModal(false);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const voteProposal = () => {
    const requestBody = {
      label: labelOriginal,
    };
    // setLabel(label);
    setCreateLoader(true);
    dispatch(createVoteSaga({ requestBody, handleSuccess, id }));
  };

  return (
    <>
      <MKBox className={classes.votingStatsMainContainer}>
        <MKBox className={classes.votingStatsContainer}>
          <MKBox className={classes.statsContainer}>
            <MKBox className={classes.votingCountsContainer}>
              <Typography /*color="grey.500"*/ fontSize={14} fontWeight={400}>
                {voteOptions[0]?.label} (
                {result ? (
                  <CurrencyFormat
                    value={totalVotes - votedAgainstCount}
                    zeroAllowed={false}
                  />
                ) : (
                  <CurrencyFormat value={votedForCount} zeroAllowed={false} />
                )}
                )
              </Typography>
              <Typography /*color="grey.500"*/ fontSize={14} fontWeight={400}>
                {voteOptions[1]?.label} (
                <CurrencyFormat value={votedAgainstCount} zeroAllowed={false} />
                )
              </Typography>
            </MKBox>
            <VoteCountBar
              totalVotes={totalVotes}
              yesVoted={result ? totalVotes - votedAgainstCount : votedForCount}
              NoVoted={votedAgainstCount}
              votingOptions={voteOptions}
            />
            {type === "investor" &&
              !(
                timerData?.sDays >= 0 &&
                timerData?.sHours >= 0 &&
                timerData?.sMinutes >= 0 &&
                timerData?.sSeconds >= 0
              ) && (
                <MKBox display="flex" mt={2}>
                  <MKBox display="flex" alignContent="center" mr={4}>
                    {!voted && !result && (
                      <>
                        <MKButton
                          onClick={() => {
                            if (
                              !(
                                timerData?.days >= 0 &&
                                timerData?.hours >= 0 &&
                                timerData?.minutes >= 0 &&
                                timerData?.seconds >= 0
                              )
                            ) {
                              toaster.warn("Proposal has been expired!");
                            } else {
                              if (!voted) {
                                setLabel("yes");
                                setLabelOriginal(voteOptions[0]?.label);
                                setOpenModal(true);
                              }
                            }
                          }}
                          variant="gradient"
                          className={classes.customBtn}
                          // color="primary"
                          disabled={liveStatus === "Not started"}
                        >
                          {voteOptions[0]?.label}
                        </MKButton>
                      </>
                    )}
                  </MKBox>
                  <MKBox display="flex">
                    {!voted && !result && (
                      <>
                        <MKButton
                          onClick={() => {
                            if (
                              !(
                                timerData?.days >= 0 &&
                                timerData?.hours >= 0 &&
                                timerData?.minutes >= 0 &&
                                timerData?.seconds >= 0
                              )
                            ) {
                              // alert("Voted Against");
                              toaster.warn("Proposal has been expired!");
                            } else {
                              if (!voted) {
                                setLabel("no");
                                setLabelOriginal(voteOptions[1]?.label);
                                setOpenModal(true);
                              }
                            }
                          }}
                          variant="gradient"
                          className={classes.customBtn1}
                          // color="primary"
                          disabled={liveStatus === "Not started"}
                        >
                          {voteOptions[1]?.label}
                        </MKButton>
                      </>
                    )}
                  </MKBox>
                  <MKBox display="flex">
                    {voted ? (
                      <>
                        <Typography className={classes.subHeading} ml={1}>
                          You have already voted as {voteStatus} for this
                          proposal.
                        </Typography>
                      </>
                    ) : (
                      ""
                    )}
                  </MKBox>
                </MKBox>
              )}
          </MKBox>
          {/* Voted For */}
          {!(
            timerData?.days >= 0 &&
            timerData?.hours >= 0 &&
            timerData?.minutes >= 0 &&
            timerData?.seconds >= 0
          ) &&
            approvalStatus === "Approved" && (
              <MKBox
                className={classes.votingStatusContainer}
                // style={{
                //   background: result === "Executed" ? "#F1F9F2" : "#FFF3F4",
                //   color: result === "Executed" ? "#4CAF50" : "#F95C66",
                // }}
              >
                <img
                  src={result === "Executed" ? GreenCheck : RedCheck}
                  className={classes.votingStatusImg}
                  alt="check"
                />
                {result === "Executed"
                  ? voteOptions[0]?.label
                  : voteOptions[1]?.label}
              </MKBox>
            )}
        </MKBox>
        <MKBox className={classes.votingTimeContainer}>
          {timerData?.sDays >= 0 &&
          timerData?.sHours >= 0 &&
          timerData?.sMinutes >= 0 &&
          timerData?.sSeconds >= 0 ? (
            <div className={classes.dFlex}>
              <Typography
                // color="grey.300"
                fontSize={14}
                fontWeight={400}
                fontStyle="italic"
                mr={1}
              >
                Voting starts in :
              </Typography>
              <Timer
                sameDate={true}
                // color="red"
                endDate={new Date(votingStartDate?.replace(".000Z", ""))}
              />
            </div>
          ) : approvalStatus === "Approved" ? (
            timerData?.days >= 0 &&
            timerData?.hours >= 0 &&
            timerData?.minutes >= 0 &&
            timerData?.seconds >= 0 ? (
              <div className={classes.dFlex}>
                <Typography
                  // color="grey.300"
                  fontSize={14}
                  fontWeight={400}
                  mr={1}
                  fontStyle="italic"
                >
                  Voting ends in :
                </Typography>
                <Timer
                  sameDate={true}
                  // color="red"
                  endDate={new Date(votingEndDate?.replace(".999Z", ""))}
                />
              </div>
            ) : (
              ""
            )
          ) : (
            <Typography
              // color="grey.300"
              fontSize={14}
              fontWeight={400}
              fontStyle="italic"
            >
              Voting starts in:{" "}
              <Typography
                component="span"
                // color="grey.500"
                fontSize={14}
                fontWeight={400}
              >
                {moment.utc(votingStartDate).format("lll")}
              </Typography>
            </Typography>
          )}
        </MKBox>
      </MKBox>
      <VoteConfirmationModal
        open={openModal}
        handleClose={handleClose}
        data={modalData}
        handleSuccess={voteProposal}
        isLoading={loader?.createVote}
      />
    </>
  );
};

export default VotingStats;

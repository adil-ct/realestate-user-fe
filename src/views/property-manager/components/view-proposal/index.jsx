import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";

import { useQuery } from "utils/useQuery";
import styles from "./styles";
import { OvalSpinner } from "components/Loader/GenericLoaders";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import { Trending1 } from "constants/assets";
import VotingStats from "../VotingStats";
import { useEffect } from "react";
import { getProposalDetailsSaga, getPFAssetData } from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";

const ViewProposal = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get("id");
  const pid = query.get("pid");
  const [isLoading, setIsLoading] = useState(true);
  const [createLoader, setCreateLoader] = useState(false);
  const { pfAssetData } = useSelector((state) => state.accounts);
  const { userData } = useSelector((state) => state.auth);
  const { proposalDetails, loader, createVote } = useSelector(
    (state) => state.pManager
  );

  useEffect(() => {
    if (createLoader) {
      dispatch(getProposalDetailsSaga({ id }));
    } else {
      dispatch(getProposalDetailsSaga({ id, loading: setIsLoading }));
    }
    dispatch(getPFAssetData(pid));
  }, [createVote]);
  return (
    <Box
      className={
        loader?.getProposalDetails ||
        isLoading ||
        (proposalDetails && // 👈 null and undefined check
          Object.keys(proposalDetails).length === 0 &&
          Object.getPrototypeOf(proposalDetails) === Object.prototype)
          ? classes.paddingContainerFlex
          : classes.paddingContainer
      }
    >
      {loader?.getProposalDetails ||
      isLoading ||
      (proposalDetails && // 👈 null and undefined check
        Object.keys(proposalDetails).length === 0 &&
        Object.getPrototypeOf(proposalDetails) === Object.prototype) ? (
        <OvalSpinner isLoading={true} />
      ) : (
        <Box className={classes.mainContainer}>
          <MKBox>
            {/* Head */}
            <MKBox className={classes.headContainer}>
              <MKBox>
                <p
                  className={classes.navigation}
                  onClick={() => navigate(`${routePaths.PROPERTY_MGR_PROPERTY_PROPOSALS_PATH}/${pid}`)}
                >
                  {" "}
                  {"< Back"}{" "}
                </p>
                <Typography /*color="secondary.dark"*/ fontSize={24} fontWeight={600}>
                  {proposalDetails?.title}
                </Typography>
                {proposalDetails?.approvalStatus === "Approved" ? (
                  <Typography
                    // color="grey.300"
                    fontSize={14}
                    fontWeight={400}
                    fontStyle="italic"
                  >
                    Published on:{" "}
                    <Typography
                      component="span"
                      // color="grey.500"
                      fontSize={14}
                      fontWeight={400}
                    >
                      {moment
                        .utc(proposalDetails?.votingStartDate)
                        .format("lll")}
                    </Typography>
                  </Typography>
                ) : (
                  <Typography
                    // color="#F95C66"
                    fontSize={14}
                    fontWeight={400}
                    fontStyle="italic"
                  >
                    Proposal Not Yet Published
                  </Typography>
                )}
                {proposalDetails?.result && (
                  <Typography
                    // color="#939090"
                    fontSize={14}
                    fontWeight={400}
                    fontStyle="italic"
                  >
                    Expired on:{" "}
                    <Typography
                      component="span"
                      // color="grey.500"
                      fontSize={14}
                      fontWeight={400}
                    >
                      {moment.utc(proposalDetails?.votingEndDate).format("lll")}
                    </Typography>
                  </Typography>
                )}
                {/* <Typography className={classes.mainSubtitle}>
                  {proposalDetails?.summary}
                </Typography> */}
                <MKBox className={classes.titleContainer}>
                  <MKBox>
                    <img
                      src={pfAssetData?.property?.mainImage?.url || Trending1}
                      className={classes.titleImg}
                      alt="property image"
                    />
                  </MKBox>
                  <MKBox>
                    <Typography className={classes.subHeading}>
                      {pfAssetData?.property?.title || "Property Title"}
                    </Typography>
                    <Typography /*color="grey.300"*/ fontSize={13} fontWeight={400}>
                      ({pfAssetData?.property?.city},{" "}
                      {pfAssetData?.property?.state}){" "}
                    </Typography>
                  </MKBox>
                </MKBox>
              </MKBox>
              <MKBox className={classes.sectionDesktop}>
                {!proposalDetails?.voted &&
                  userData?.userType === "investor" &&
                  !proposalDetails?.result && (
                    <Typography className={classes.subHeading} ml={1}>
                      Choose an option to cast your vote
                    </Typography>
                  )}
                <VotingStats
                  votedForCount={proposalDetails?.votedFor}
                  votedAgainstCount={proposalDetails?.votedAgainst}
                  votingStartDate={proposalDetails?.votingStartDate}
                  votingEndDate={proposalDetails?.votingEndDate}
                  totalVotes={pfAssetData?.property?.numberOfTokens}
                  approvalStatus={proposalDetails?.approvalStatus}
                  liveStatus={proposalDetails?.status}
                  voted={proposalDetails?.voted}
                  voteStatus={proposalDetails?.yourVote}
                  type={userData?.userType}
                  id={id}
                  setCreateLoader={setCreateLoader}
                  holdings={pfAssetData?.holdings}
                  voteOptions={proposalDetails?.voteOptions}
                  result={proposalDetails?.result}
                />
              </MKBox>
            </MKBox>
            <MKBox width="100%" className={classes.sectionMobileMd}>
              {!proposalDetails?.voted && userData?.userType === "investor" && (
                <Typography className={classes.subHeading} ml={1}>
                  Choose an option to cast your vote
                </Typography>
              )}
              <VotingStats
                votedForCount={proposalDetails?.votedFor}
                votedAgainstCount={proposalDetails?.votedAgainst}
                votingStartDate={proposalDetails?.votingStartDate}
                votingEndDate={proposalDetails?.votingEndDate}
                totalVotes={pfAssetData?.property?.numberOfTokens}
                approvalStatus={proposalDetails?.approvalStatus}
                liveStatus={proposalDetails?.status}
                voted={proposalDetails?.voted}
                voteStatus={proposalDetails?.yourVote}
                type={userData?.userType}
                id={id}
                setCreateLoader={setCreateLoader}
                holdings={pfAssetData?.holdings}
                voteOptions={proposalDetails?.voteOptions}
                result={proposalDetails?.result}
              />
            </MKBox>
            {proposalDetails?.type &&  <MKBox display="flex">
              <MKBox mt="24px">
                <Typography className={classes.subHeading}>Reserve Type</Typography>
                <Typography /*color="#51566B"*/ fontSize={14} fontWeight={400}>
                  {proposalDetails?.type}
                </Typography>
              </MKBox>
              <MKBox mt="24px" ml={"50px"}>
                <Typography className={classes.subHeading}>Amount</Typography>
                <Typography /*color="#51566B"*/ fontSize={14} fontWeight={400}>
                  {proposalDetails?.amount}
                </Typography>
              </MKBox>
            </MKBox>
            }
            <MKBox mt="24px">
              <Typography className={classes.subHeading}>Summary</Typography>
              <Typography /*color="#51566B"*/ fontSize={14} fontWeight={400}>
                {proposalDetails?.summary}
              </Typography>
            </MKBox>

            <MKBox mt="24px">
              <Typography className={classes.subHeading}>
                Description
              </Typography>
              <MKBox>
                <p
                  className={classes.descriptionText}
                  dangerouslySetInnerHTML={{
                    __html: proposalDetails?.description,
                  }}
                />
              </MKBox>
            </MKBox>
            {proposalDetails?.documents?.length > 0 && (
              <Typography mt="24px" className={classes.subHeading}>
                Attachments
              </Typography>
            )}
            <MKBox
              display="flex"
              flexWrap="wrap"
              mt={2}
              flexDirection="column"
            >
              {proposalDetails?.documents?.length > 0 &&
                proposalDetails?.documents
                  ?.filter(
                    (doc) =>
                      !doc.contentType.includes("image/") &&
                      !doc.contentType.includes("video/")
                  )
                  ?.map((item) => (
                    <div className={classes.posFlex} key={item.key}>
                      <MKTypography
                        // color="#2D9CDB"
                        fontSize="14px"
                        target="_blank"
                        component="a"
                        marginLeft="10px"
                        className={classes.docStyle}
                        href={item.url}
                        download
                        display="flex"
                        alignItems="center"
                        fontWeight="regular"
                        marginRight="10px"
                      >
                        {item.contentType === "application/pdf" ? (
                          <PictureAsPdfIcon className={classes.pIcon} />
                        ) : (
                          <DescriptionIcon
                            fontSize="20px"
                            className={classes.dIcon}
                          />
                        )}
                        {item.key}
                      </MKTypography>
                      <FileDownloadIcon className={classes.downloadIcon}/>
                    </div>
                  ))}
            </MKBox>
            <MKBox
              display="flex"
              flexWrap="wrap"
              mt={2}
            >
              {proposalDetails?.documents?.length > 0 &&
                proposalDetails?.documents
                  ?.filter((doc) => doc.contentType.includes("video/"))
                  ?.map((item) => (
                    <div className={classes.vPlayer} key={item.key}>
                      <Player
                        playsInline
                        fluid={false}
                        width="100%"
                        height={250}
                      >
                        <source src={item?.url} />
                        <ControlBar>
                          <ReplayControl seconds={10} order={1.1} />
                          <ForwardControl seconds={30} order={1.2} />
                          <CurrentTimeDisplay order={4.1} />
                          <TimeDivider order={4.2} />
                          <PlaybackRateMenuButton
                            rates={[5, 2, 1, 0.5, 0.1]}
                            order={7.1}
                          />
                          <VolumeMenuButton />
                        </ControlBar>
                        <BigPlayButton position="center" />
                      </Player>
                    </div>
                  ))}
            </MKBox>

            <MKBox
              display="flex"
              flexWrap="wrap"
              mt={3}
            >
              {proposalDetails?.documents?.length > 0 &&
                proposalDetails?.documents
                  ?.filter((doc) => doc.contentType.includes("image/"))
                  ?.map((item) => (
                    <img
                      src={item?.url}
                      className={classes.imageDescription}
                      alt={item?.key}
                      key={item?.key}
                    />
                  ))}
            </MKBox>
          </MKBox>
        </Box>
      )}
    </Box>
  );
};

export default ViewProposal;

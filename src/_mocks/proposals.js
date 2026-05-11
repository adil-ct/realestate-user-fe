import moment from "moment";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// Static imports
import Status from "components/TableSubComponents/status";
import VoteCountBar from "components/VoteCountBar";
import { routePaths } from "routes/mainRoutes/routePaths";

const proposals = () => {
  const { proposalList } = useSelector((state) => state.pManager);
  const { pfAssetData } = useSelector((state) => state.accounts);
  const { userData } = useSelector((state) => state.auth);

  return {
    column:
      userData?.userType === "investor"
        ? [
          "Proposal Title",
          "Votes",
          "Voting Status",
          "Proposal End Date",
          "Proposal Status",
        ]
        : [
          "Proposal Title",
          "Votes",
          "Proposal End Date",
          "Created By",
          "Proposal Status",
          "Action",
        ],
    row: proposalList?.data?.map((item) => {
      if (userData?.userType === "investor") {
        return {
          "Proposal Title": (
            <NavLink
              //style={{ color: "#2D9CDB" }}
              to={`${routePaths.PROPERTY_MGR_VIEW_PROPOSAL_PATH}/?id=${item._id}&pid=${item?.propertyId?._id}`}
            >
              {item.title}
            </NavLink>
          ),
          Votes: (
            <VoteCountBar
              totalVotes={pfAssetData?.property?.numberOfTokens}
              yesVoted={
                item?.result
                  ? pfAssetData?.property?.numberOfTokens - item?.votedAgainst
                  : item?.votedFor
              }
              NoVoted={item?.votedAgainst}
              votingOptions={item?.voteOptions}
            />
          ),
          "Voting Status": !item?.voted ? (
            <Status type={"Pending"} />
          ) : (
            <Status type={"Approved"} result={"Approved"} />
          ),
          "Proposal End Date": moment.utc(item.votingEndDate).format("lll"),
          "Proposal Status": (
            <Status type={item?.status} result={item?.result} />
          ),
          id: item?._id,
          propertyId: item?.propertyId?._id,
          Action: "",
          approvalStatus: item?.status,
        };
      } else {
        return {
          "Proposal Title": (
            <NavLink
              //style={{ color: "#2D9CDB" }}
              to={`${routePaths.PROPERTY_MGR_VIEW_PROPOSAL_PATH}/?id=${item._id}&pid=${item?.propertyId?._id}`}
            >
              {item.title}
            </NavLink>
          ),
          Votes: (
            <VoteCountBar
              status={item?.status}
              totalVotes={pfAssetData?.property?.numberOfTokens}
              yesVoted={
                item?.result
                  ? pfAssetData?.property?.numberOfTokens - item?.votedAgainst
                  : item?.votedFor
              }
              NoVoted={item?.votedAgainst}
              votingOptions={item?.voteOptions}
            />
          ),
          "Proposal End Date": moment.utc(item.votingEndDate).format("lll"),
          "Created By": item?.admin ? "Admin" : "Property Manager",
          "Proposal Status": (
            <Status type={item?.status} result={item?.result} />
          ),
          id: item?._id,
          propertyId: item?.propertyId?._id,
          Action: "",
          approvalStatus: item?.status,
        };
      }
    }),
  };
};

export default proposals;

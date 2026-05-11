import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

// Static imports
import TableSkeleton from "components/Skeleton/TableSkeleton";
import { ThreeDotsSpinner } from "components/Loader/GenericLoaders";
import MKTypography from "components/custom/MKTypography";
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import DynamicCard from "components/Cards/DynamicCard/PortfolioCard";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { NextPayout, DollarIcon, PM2, PM3 } from "constants/assets";
import styles from "./styles";
import { NoProperty, Plus } from "constants/assets";
import proposals from "_mocks/proposals";
import {
  getProposalOverviewSaga,
  getPFAssetData,
  getProposalListSaga,
} from "store/actions";
import Search from "components/custom/Search";
import useDebounce from "hooks/useDebounce";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import PropertyDetail from "components/PropertyDetail";
import { routePaths } from "routes/mainRoutes/routePaths";

const Proposals = () => {
  const classes = styles();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearchText = useDebounce(searchText, 500, setCurrentPage);
  const { id } = useParams();
  const proposalData = proposals();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);
  const { pfAssetData } = useSelector((state) => state.accounts);
  const { loader, proposalOverview, proposalList } = useSelector(
    (state) => state.pManager
  );

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const maxCount = proposalList?.totalCount
    ? Math.ceil(Number(proposalList?.totalCount / 10))
    : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  useEffect(() => {
    if (debouncedSearchText.length === 0)
      dispatch(getProposalListSaga(`/${id}?page=${currentPage}&limit=10`));
    if (debouncedSearchText.length > 0)
      dispatch(
        getProposalListSaga(
          `/${id}?page=${currentPage}&limit=10&search=${debouncedSearchText}`
        )
      );
  }, [currentPage, debouncedSearchText]);

  const enable = {
    bluebutton: "bluebutton",
    badge: "badge",
    progressBar: "progressBar",
    priceChange: "priceChange",
    blueLink: "blueLink",
    deleteAndEditButton: "deleteAndEditButton",
    blueLinkBalance: "blueLinkBalance",
    clockicon: "clockicon",
    edittrash: "edittrash",
    visacard: "visacard",
    mastercard: "mastercard",
    viewWithDots: "viewWithDots",
    viewWithEdit: "viewWithEdit",
    view: "view",
    edit: "edit",
  };

  const tableConfig = {};

  const cardConfig = {};

  const bankActions = {
    view: {
      handler: (data) => {
        navigate(
          `${routePaths.PROPERTY_MGR_VIEW_PROPOSAL_PATH}/?id=${data?.id}&pid=${data?.propertyId}`
        );
      },
    },
    edit: {
      handler: (data) =>
        navigate(
          `${routePaths.PROPERTY_MGR_CREATE_PROPOSAL_PATH}/?id=${data?.id}&pid=${data?.propertyId}`,
          {
            state: {
              edit: true,
            },
          }
        ),
    },
  };

  useEffect(() => {
    dispatch(getProposalOverviewSaga({ id }));
    dispatch(getPFAssetData(id));
  }, []);

  return (
    <Box className={classes.paddingContainer}>
      <Box className={classes.mainContainer}>
        <p
          className={classes.navigation}
          onClick={() => navigate(`${routePaths.PROPERTY_DETAILS_PATH}/${id}`)}
        >
          {" "}
          {"< Back"}{" "}
        </p>
        <Grid container spacing={2} className={classes.flexCenter}>
          <PropertyDetail id={id} pfAssetData={pfAssetData} />
          {userData?.userType !== "investor" && (
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              spacing={2}
              className={classes.flexEnd}
            >
              <MKButton
                start
                variant="gradient"
                // color="primary"
                className={classes.fullWidth}
                onClick={() =>
                  navigate(`${routePaths.PROPERTY_MGR_CREATE_PROPOSAL_PATH}/?pid=${id}`)
                }
              >
                <img src={Plus} className={classes.btnIcon} alt="plus" />
                Create Proposals
              </MKButton>
            </Grid>
          )}
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6} sm={3} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  No. of Proposals
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                  {loader?.getProposalOverview ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    proposalOverview?.proposals
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={DollarIcon} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Current Live Proposals
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                  {loader?.getProposalOverview ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    proposalOverview?.liveProposals
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={PM2} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Successful Proposals
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                  {loader?.getProposalOverview ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : (
                    proposalOverview?.successfullProposals
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={PM3} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} spacing={2}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Last Proposal Date
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                  {loader?.getProposalOverview ? (
                    <ThreeDotsSpinner isLoading={true} />
                  ) : proposalOverview?.lastProposalDate === "N/A" ? (
                    proposalOverview?.lastProposalDate
                  ) : (
                    moment.utc(proposalOverview?.lastProposalDate).format("lll")
                  )}
                </MKTypography>
              </Box>
              <Box className={classes.iconBox}>
                <img src={NextPayout} alt="Currency Sign" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MKBox
              display="flex"
              justifyContent="flex-end"
              width="100%"
              mt={2}
              className={classes.mBox}
            >
              <MKTypography variant="h4" className={classes.heading1a}>
                Proposals
              </MKTypography>
              <Search value={searchText} onChange={handleSearch} />
            </MKBox>

            <MKBox mt={3}>
              <Box className={classes.sectionDesktopFlex}>
                {loader.getProposalList ? (
                  <TableSkeleton dynamicField={true} {...proposalData} />
                ) : proposalList?.data?.length === 0 ? (
                  <Box className={classes.noContentBox}>
                    <img src={NoProperty} alt="No Data" />
                    <span className={classes.noContentText}>
                      No Data Found!
                    </span>
                  </Box>
                ) : (
                  <DynamicTable
                    height="100%"
                    {...proposalData}
                    tableConfig={
                      userData?.userType === "investor"
                        ? {
                            ...tableConfig,
                            5: enable.view,
                          }
                        : {
                            ...tableConfig,
                            5: enable.edit,
                          }
                    }
                    headColStyle={
                      userData?.userType === "investor"
                        ? {
                            1: { width: "200px", textAlign: "left" },
                            5: { width: "160px", textAlign: "left" },
                          }
                        : {
                            1: { width: "220px", textAlign: "left" },
                            3: { width: "150px", textAlign: "right" },
                            5: { width: "100px", textAlign: "left" },
                          }
                    }
                    tableAdvancedActions={bankActions}
                    paginationConfig={paginationConfig}
                  />
                )}
              </Box>
              <Box
                className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
              >
                {loader.getProposalList ? (
                  <CardSkeleton dynamicField={true} {...proposalData} />
                ) : proposalList?.data?.length === 0 ? (
                  <Box className={classes.noContentBox}>
                    <img src={NoProperty} alt="No Data" />
                    <span className={classes.noContentText}>
                      No Data Found!
                    </span>
                  </Box>
                ) : (
                  <DynamicCard
                    {...proposalData}
                    cardConfig={
                      userData?.userType === "investor"
                        ? {
                            ...cardConfig,
                            4: enable.view,
                          }
                        : {
                            ...cardConfig,
                            4: enable.edit,
                          }
                    }
                    tableAdvancedActions={bankActions}
                    pagination={paginationConfig}
                    mainHeader="Proposal Title"
                  />
                )}
              </Box>
            </MKBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Proposals;

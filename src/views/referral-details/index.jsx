import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import {InviteFriend, ReceiveReward, noTransactions, QR} from "constants/assets";
import DynamicCard from "components/Cards/DynamicCard/PortfolioCard";
import InviteFriendModal from "components/Modal/InviteFriendModal";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { OvalSpinner } from "components/Loader/GenericLoaders";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import MKTypography from "components/custom/MKTypography";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import { routePaths } from "routes/mainRoutes/routePaths";
import QRCodeModal from "components/Modal/DepositQRCode";
import CurrencyFormat from "components/CurrencyFormat";
import { REFERRAL_BASE_URL } from "constants/env";
import MKButton from "components/custom/MKButton";
import { getRefreeDetails } from "store/actions";
import affiliates from "_mocks/affiliateDetails";
// import balances from "_mocks/referralDetails";
import MKBox from "components/custom/MKBox";
import { Copy } from "constants/assets";
import styles from "./styles";

const ReferralDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = styles();

  const affiliateData = affiliates(); 

  const { userData, isLoading: profileLoader } = useSelector((state) => state.auth);
  const { isLoading, refreeDetails } = useSelector((state) => state.user);

  const affiliateLink = REFERRAL_BASE_URL + refreeDetails?.data?.referralCodeDetails?.referralCode;
  const qrCodeData = refreeDetails?.data?.referralCodeDetails?.qrCode?.url;
  const affiliateUser = userData?.affiliate;

  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [openQRModal, setOpenQRModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { copy: referralIDCopy, tooltipText: referralIDText } = useCopyToClipboard();
  const { copy: referralLinkCopy, tooltipText: referralLinkText } = useCopyToClipboard();

  const maxCount = refreeDetails?.data?.totalCount ? Math.ceil(Number(refreeDetails?.data?.totalCount / 10)) : 0;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const paginationConfig = {
    currentPage,
    maxCount,
    handler: updateCurrentPage,
  };

  useEffect(() => {
    if(!profileLoader?.profile && !affiliateUser) {
      navigate(routePaths.INVESTOR_PATH)
    }
  }, [affiliateUser])

  useEffect(() => {
    dispatch(getRefreeDetails({ endpoint: `/user/refereeList/?page=${currentPage}&limit=10` }))
  }, [currentPage])

  return (
    <Box className={classes.paddingContainer}>
      { !profileLoader?.profile ? <Box className={classes.mainContainer}>
        { !affiliateUser && <Grid container mt={2} className={classes.referralDetailBox}>
          <Grid item md={12} lg={6} xl={6}>
            <Box className={classes.referralItem1}>
              <Box className={classes.referralLinkBox}>
                <Box className={classes.referralStepNo}>1</Box>
                <img src={InviteFriend} />
                <Box className={classes.referralShare}>Invite your friends to sign up and invest</Box>
              </Box>
              <Grid container spacing={2} className={classes.refMainContainer}>
                <Grid item sm={12} md={6} lg={6} className={classes.refItem}>
                  <Box
                    className={`${classes.referralIdBox} ${classes.referralIdBoxDivider}`}
                  >
                    <Box style={{ width: "100%" }}>
                      <MKTypography className={classes.referralIdTitle}>
                        Referral Code
                      </MKTypography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                      <MKTypography className={classes.referralIdValue}>
                        {refreeDetails?.data?.referralCodeDetails?.referralCode ?? "-"}
                      </MKTypography>
                        <Box className={classes.iconCotainer}>
                          <Tooltip enterTouchDelay={0} title={referralIDText === "Copy" ? "" : referralIDText}>
                            <img
                              src={Copy}
                              onClick={() =>
                                referralIDCopy(refreeDetails?.data?.referralCodeDetails?.referralCode)
                              }
                            />
                          </Tooltip>
                          {/* <img
                            src={Share}
                            onClick={() => setOpenInviteModal(true)}
                          /> */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6} lg={6} className={classes.refItem}>
                  <Box className={classes.referralIdBox}>
                    <Box style={{ width: "100%" }}>
                      <MKTypography className={classes.referralIdTitle}>
                        Referral Link :
                      </MKTypography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <MKTypography className={classes.referralIdValue}>
                          {affiliateLink?.length > 10 ? affiliateLink?.slice(0, 8) + "....." + affiliateLink?.slice(-4) : affiliateLink}
                        </MKTypography>
                        <Box className={classes.iconCotainer}>
                          <Tooltip enterTouchDelay={0} title={referralLinkText === "Copy" ? "" : referralLinkText}>
                            <img
                              src={Copy}
                              onClick={() =>
                                referralLinkCopy(affiliateLink)
                              }
                            />
                          </Tooltip>
                          {/* <img
                            src={Share}
                            onClick={() => setOpenInviteModal(true)}
                          /> */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6} lg={4} className={classes.refItem}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>  

                    <Box className={classes.iconCotainer}>       
                      <MKButton
                        variant="gradient"
                        className={classes.shareBtn}
                        onClick={() => setOpenInviteModal(true)}
                        >
                          <ShareIcon sx={{ mr: "10px"}}/>
                          Share Invitation
                      </MKButton>
                      <img src={QR} onClick={() => setOpenQRModal(true)} className={classes.stepIcon1} />   
                    </Box>               
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={12} lg={6} xl={6}>
            <Box className={classes.referralItem3}>
              <Box className={classes.referralLinkBox}>
                <Box className={classes.referralStepNo}>2</Box>
                <img src={ReceiveReward} width="48px" height="48px" />
                <Box className={classes.referralShare}>Get $5 each when your friend makes their first investment.</Box>
              </Box>
            </Box>

          </Grid>
        </Grid> }
        { affiliateUser && <Grid container mt={2} className={classes.referralDetailBox}>
          <Grid item sm={12}>
            <MKTypography variant="h4" className={classes.rewardsDashTitle}>
                {userData?.firstName && userData?.lastName 
                    ? `${userData?.firstName} ${userData?.lastName}'s ` 
                    : 'Rewards '}
                Dashboard
            </MKTypography>
          </Grid>
          <Grid item md={12} lg={12} xl={12}>
            <Box className={classes.referralItem1}>
              <Grid container spacing={2} className={classes.refMainContainer}>
                <Grid item sm={12} md={4} lg={4} className={classes.refItem}>
                  <Box
                    className={`${classes.referralIdBox} ${classes.referralIdBoxDivider}`}
                  >
                    <Box style={{ width: "100%" }}>
                      <MKTypography className={classes.referralIdTitle}>Invest Tech IR Code</MKTypography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Box className={classes.iconCotainer}>
                          <Tooltip enterTouchDelay={0} title={referralIDText === "Copy" ? "" : referralIDText}>
                            <img
                              src={Copy}
                              onClick={() =>
                                referralIDCopy(refreeDetails?.data?.referralCodeDetails?.referralCode)
                              }
                            />
                          </Tooltip>
                        </Box>
                        <MKTypography className={classes.referralIdValue}>
                          {refreeDetails?.data?.referralCodeDetails?.referralCode ?? "-"}
                        </MKTypography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={12} md={4} lg={4} className={classes.refItem}>
                  <Box className={`${classes.referralIdBox} ${classes.referralIdBoxDivider}`}>
                    <Box style={{ width: "100%" }}>
                      <MKTypography className={classes.referralIdTitle}>
                      Invest Tech IR Link 
                      </MKTypography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Box className={classes.iconCotainer}>
                          <Tooltip
                            className={classes.copyTooltip}
                            enterTouchDelay={0} 
                            title={referralLinkText === "Copy" ? "" : referralLinkText}>
                            <img
                              src={Copy}
                              onClick={() =>
                                referralLinkCopy(affiliateLink)
                              }
                            />
                          </Tooltip>
                        </Box>
                        <MKTypography className={classes.referralIdValue}>
                          {affiliateLink?.length > 10 ? affiliateLink?.slice(0, 8) + "....." + affiliateLink?.slice(-4) : affiliateLink}
                        </MKTypography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={12} md={4} lg={4} className={classes.refItem}>
                  <MKTypography className={classes.referralIdTitle}>
                    Invite / QR Code
                  </MKTypography>
                  <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    className={classes.shareBtnsContainer}
                    mt={2}
                  >                
                    <MKButton
                      variant="gradient"
                      className={classes.shareBtn}
                      onClick={() => setOpenInviteModal(true)}
                      >
                        <ShareIcon sx={{ mr: "10px"}}/>
                        Share Invitation
                    </MKButton>
                    <div className={classes.qrIconContainer}>
                      <img src={QR} onClick={() => setOpenQRModal(true)} className={classes.stepIcon1} />
                    </div>       
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid> }
        <Grid container mt={2} className={classes.marketStatsContainer}>
          { affiliateUser && <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead1}>
                  Dollars Raised
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                <CurrencyFormat
                    prefix={"$"}
                    value={refreeDetails?.data?.referralCodeDetails?.dollarsInvested}
                    zeroAllowed
                    noSpan={true}
                  />
                </MKTypography>
              </Box>
            </Box>
          </Grid> }
          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  Dollars Earned
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                  <CurrencyFormat
                    prefix={"$"}
                    value={refreeDetails?.data?.referralCodeDetails?.referralEarnings}
                    zeroAllowed
                    noSpan={true}
                  />
                </MKTypography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  invest tech Registered
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                  {refreeDetails?.data?.referralCodeDetails?.totalReferee ?? 0}
                </MKTypography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.marketStats}>
              <Box>
                <MKTypography className={classes.marketStatsHead}>
                  invest tech Invested
                </MKTypography>
                <MKTypography className={classes.marketStatsVal}>
                  {refreeDetails?.data?.referralCodeDetails?.totalRefereeInvested ?? 0}
                </MKTypography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.gridTableContainer}>
          <Grid item xs={12}>
            <MKBox mt={2}>
              {(!isLoading.refreeDetails && refreeDetails?.data?.result?.length === 0) ? (
                <MKBox className={classes.noContentBox}>
                  <img src={noTransactions} alt="No Transactions" />
                  <span className={classes.noContentText}>No Data Available</span>
                </MKBox>
              ) : (
                <Box className={classes.sectionDesktopFlex}>
                  <div className={classes.tableContainer}>
                    {isLoading?.refreeDetails ? <TableSkeleton dynamicField={true} {...affiliateData} />
                      :
                      <DynamicTable
                        height="100%"
                        {...affiliateData}
                        pagination={true}
                        paginationConfig={paginationConfig}
                        headColStyle={{
                          0: { width: "190px" },
                          1: { width: "270px" },
                        }}
                      />}
                  </div>
                </Box>)}
              <Box
                className={`${classes.sectionMobile}`}
              >
                {(!isLoading.refreeDetails && refreeDetails?.data?.result?.length > 0) && (
                  <DynamicCard
                    {...affiliateData}
                    column={[
                      "Name",
                      "Email",
                      "Phone Number",
                      "Status",
                      "Amount Invested",
                    ]}
                    pagination={paginationConfig}
                  />
                )}
              </Box>
            </MKBox>
          </Grid>
        </Grid>
      </Box> : <Box className={classes.mainContainer} display="flex" justifyContent="center" alignItems="center"> <OvalSpinner isLoading={true} /> </Box>}
      
      <InviteFriendModal
        affiliateUser={affiliateUser}
        open={openInviteModal}
        shareLink={affiliateLink}
        handleClose={() => setOpenInviteModal(false)}
      />

       {openQRModal && (
        <QRCodeModal
            open={openQRModal}
            setOpen={setOpenQRModal}
            handleNext={() => { }}
            qrImage={qrCodeData}
            type="afiliate"
            code={refreeDetails?.data?.referralCodeDetails?.referralCode}
            // backBtn={backButtonModal}
        />
    )}
    </Box>
  );
};

export default ReferralDetails;

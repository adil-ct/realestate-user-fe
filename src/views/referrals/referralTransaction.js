import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import DynamicCard from "components/Cards/DynamicCard/TransactionHistoryCard";
import { getWalletBalance, getRewardSingleTransaction } from "store/actions";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TableSkeleton from "components/Skeleton/TableSkeleton";
import CardSkeleton from "components/Skeleton/CardSkeleton";
import { routePaths } from "routes/mainRoutes/routePaths";
import singleRefreeTrans from "_mocks/singleRefreeTrans";
import { historyStyles } from "../wallet/style/styles";
import { noTransactions } from "constants/assets";
import MKBox from "components/custom/MKBox";

const RewardHistory = () => {
    const refTransData = singleRefreeTrans()
    const classes = historyStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const { isLoading, rewardSingleTransaction } = useSelector((state) => state.user);
    const [currentPage, setCurrentPage] = useState(1);

    const maxCount = rewardSingleTransaction?.data?.totalCount
        ? Math.ceil(Number(rewardSingleTransaction?.data?.totalCount / 10))
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
        dispatch(getWalletBalance());
    }, []);

    useEffect(() => {
        dispatch(getRewardSingleTransaction({ id, page: currentPage }))
    }, [currentPage]);

    const goBack = () => {
        navigate(routePaths.REWARDS_PATH)
    }

    return (
        <>
            <MKBox component="section" pb={5} className={classes.paddingModal}>
                <MKBox alignItems="center" className={classes.mainContainerLG}>
                    <span
                        className={classes.navigation}
                        onClick={goBack}
                    >
                        {" "}
                        {"< Back"}{" "}
                    </span>
                    <MKBox
                        display="flex"
                        justifyContent="space-between"
                        className={classes.historyMobileDisplay}
                        mt={3}
                    >
                        <MKBox className={classes.balBox}>
                            <Typography variant="h4" className={classes.headerTitle}>
                                Referee Transactions
                            </Typography>
                        </MKBox>
                    </MKBox>
                    <MKBox mt={4}>
                        {!isLoading.rewardSingleTransaction && !refTransData?.row?.length ? (
                            <MKBox className={classes.noContentBox}>
                                <img src={noTransactions} alt="No Transactions" />
                                <span className={classes.noContentText}>No Data Available</span>
                            </MKBox>
                        ) : (
                            <>
                                <Box className={classes.sectionDesktopFlex}>
                                    {isLoading.rewardSingleTransaction ? (
                                        <TableSkeleton {...refTransData} />
                                    ) : (
                                        <DynamicTable
                                            height="100%"
                                            minHeight="300px"
                                            {...refTransData}
                                            pagination={true}
                                            paginationConfig={paginationConfig}
                                        />
                                    )}
                                </Box>
                                <Box
                                    className={`${classes.sectionMobile} ${classes.bankCardContainer}`}
                                >
                                    {isLoading.rewardSingleTransaction ? (
                                        <CardSkeleton />
                                    ) : (
                                        <DynamicCard
                                            {...refTransData}
                                            pagination={paginationConfig}
                                        />
                                    )}
                                </Box>
                            </>
                        )}
                    </MKBox>
                </MKBox>
            </MKBox>
        </>
    );
};

export default RewardHistory;

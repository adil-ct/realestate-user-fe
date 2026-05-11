import React from 'react';
import { Box, Typography } from '@mui/material';

// Relative imports
import styles from './styles';
import NotFound from 'assets/images/not-found.png';
import HeaderCard from 'components/card/header-card';

const PageNotFound = () => {
    const classes = styles();
    return (
        <Box className={classes.root}>
            <HeaderCard />
            <Box className={classes.dFlex}>
                <img
                    src={NotFound}
                    className={classes.avatar}
                    alt="Not Found"
                />
                <Typography className={classes.header1}>
                    Page Not Found
                </Typography>
            </Box>
        </Box>
    );
};

export default PageNotFound;

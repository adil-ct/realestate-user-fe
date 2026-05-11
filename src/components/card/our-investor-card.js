import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import { useOurInvestorStyles } from './styles';

const OurInvestorCard = ({ avatar, title, subtitle }) => {
    const classes = useOurInvestorStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.topSection}>
                <Box className={classes.imageSection}>
                    <LazyLoadImage
                        src={avatar}
                        className={classes.avatar}
                        alt={title}
                        effect="blur"
                        title={subtitle}
                    />
                </Box>
                <Box className={classes.flexBox}>
                    <Typography className={classes.header4} variant="h5">
                        {title}
                    </Typography>
                    <Typography className={classes.header1} variant="h5">
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default OurInvestorCard;

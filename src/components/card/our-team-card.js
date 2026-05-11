import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import { useOurTeamStyles } from './styles';

const OurTeamCard = ({ avatar, title, subtitle, description, alt }) => {
    const classes = useOurTeamStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.topSection}>
                <Box className={classes.imageSection}>
                    <LazyLoadImage
                        src={avatar}
                        className={classes.avatar}
                        alt={title}
                        effect="blur"
                        title={alt}
                    />
                </Box>
                <Box className={classes.flexBox}>
                    <Typography className={classes.header4} variant="h5">
                        {subtitle}
                    </Typography>
                    <Typography className={classes.header1} variant="h5">
                        {title}
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.bottomSection}>
                <Typography className={classes.header3} variant="h5">
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default OurTeamCard;

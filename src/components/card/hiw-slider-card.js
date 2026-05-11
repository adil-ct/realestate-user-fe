import React from 'react';
import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import { useHIWSliderCardStyles } from './styles';

const HIWSliderCard = ({ avatar, title }) => {
    const classes = useHIWSliderCardStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.topSection}>
                <LazyLoadImage
                    src={avatar}
                    alt={title}
                    className={classes.avatar}
                    effect="blur"
                />
            </Box>
        </Box>
    );
};

export default HIWSliderCard;

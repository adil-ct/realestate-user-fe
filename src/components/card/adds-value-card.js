import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import useConfig from 'utils/config';
import { useAddsValueStyles } from './styles';

const AddsValueCard = ({ avatar, title, description, learn }) => {
    const classes = useAddsValueStyles();
    const navigate = useNavigate();
    const { BLOG_ID_1 } = useConfig();
    return (
        <Box className={classes.root}>
            <Box className={classes.topSection}>
                <Box className={classes.imageSection}>
                    <LazyLoadImage
                        src={avatar}
                        className={classes.avatar}
                        alt={title}
                        effect="blur"
                    />
                </Box>
                <Typography className={classes.header1} variant="h5">
                    {title}
                </Typography>
            </Box>
            <Box className={classes.bottomSection}>
                <Typography className={classes.header3} variant="h5">
                    {description}
                </Typography>
                {learn && (
                    <Typography
                        onClick={() => navigate('/blog-details/' + BLOG_ID_1)}
                        className={classes.header4}
                        variant="h5"
                    >
                        Learn More
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default AddsValueCard;
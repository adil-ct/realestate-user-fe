import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import { useTestimonialCardStyles } from './styles';

const TestimonialCard = ({ avatar, title, subtitle, description, alt }) => {
    const classes = useTestimonialCardStyles();
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
                <Typography className={classes.header1} variant="h5">
                    {title}
                </Typography>
                <Typography className={classes.header2} variant="h5">
                    {subtitle}
                </Typography>
            </Box>
            <Box className={classes.bottomSection}>
                <Typography className={classes.header3} variant="h5">
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default TestimonialCard;

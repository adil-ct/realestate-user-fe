import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useHeaderCardStyles } from './styles';
import { routePaths } from "routes/mainRoutes/routePaths";

const ImageContentCard = ({ title, image, subtitle, link }) => {
    const classes = useHeaderCardStyles();
    const navigate = useNavigate();
    return (
        <Box className={classes.imageBox}>
            <Box>
                <img src={image} className={classes.avatar} />
            </Box>
            <Typography variant="h5" className={classes.headertitle}>
                {title}
            </Typography>
            <Typography variant="h5" className={classes.headertitle1}>
                {subtitle}
            </Typography>
            {link && (
                <Typography
                    variant="h5"
                    onClick={() => navigate(routePaths.OUR_BLOGS_PATH)}
                    className={classes.headertitle2}
                >
                    Back to Blog
                </Typography>
            )}
        </Box>
    );
};

export default ImageContentCard;

import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import { useInvesterOwnerCardStyles } from './styles';

const InvesterOwnerCard = ({ data }) => {
    const { id, title, description, avatar } = data
    const classes = useInvesterOwnerCardStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <LazyLoadImage src={avatar} alt={title} effect="blur" />
                <Box className={classes.container1}>
                    <Box className={classes.index}>
                        <Typography variant="h5" className={classes.header1}>
                            {id}
                        </Typography>
                    </Box>
                    <Typography variant="h5" className={classes.header2}>
                        {title}
                    </Typography>
                    <Typography variant="h5" className={classes.header3}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default InvesterOwnerCard;

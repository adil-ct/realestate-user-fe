import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Relative imports
import { useHowItWorkStyles } from './styles';
import { routePaths } from "../../routes/mainRoutes/routePaths";

const HowItWorksCard = ({
    title,
    description,
    flag,
    index,
    onExpand,
    link,
}) => {
    const classes = useHowItWorkStyles({ flag });

    // Stop click propogation from parent element
    const stopPropogation = (e) => {
        e.stopPropagation()
    }

    return (
        <Box className={classes.root} onClick={() => onExpand(index)}>
            <Box className={classes.indexContainer}>
                <Typography variant="h5" className={classes.header2}>
                    {index}
                </Typography>
            </Box>
            <Box className={classes.topSection}>
                <Typography className={classes.header1} variant="h5">
                    {title}
                </Typography>
                {flag && (
                    <Typography className={classes.header3} variant="h5">
                        {description}
                    </Typography>
                )}
                {flag && link && (
                    <Link
                        className={classes.header4}
                        onClick={stopPropogation}
                        to={routePaths.HOW_IT_WORKS_PATH}
                    >
                        Learn More
                    </Link>
                )}
            </Box>
        </Box>
    );
};

export default HowItWorksCard;

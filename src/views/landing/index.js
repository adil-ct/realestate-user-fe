import React from 'react';
import { Box } from '@mui/material';

// Static imports
const Testimonial = React.lazy(() => import('./adds-value'));
const TopContainer = React.lazy(() => import('./top-container'));
const HowItWorks = React.lazy(() => import('./how-it-works'));
const Faq = React.lazy(() => import('./faqs'));
import styles from './styles';

const Landing = () => {
    const classes = styles();
    
    return (
        <>
            <Box className={classes.root} >
                <TopContainer />
            </Box>
            <HowItWorks />
            <Testimonial />
            <Faq />
        </>
    );
};

export default Landing;

import React from 'react';
import { Box } from '@mui/material';
import MKButton from "@mui/material/Button";

// Relative imports
import useConfig from 'utils/config';
import styles from './styles';
const TopSection = React.lazy(() => import('../top-section/index'));
const AddsValue = React.lazy(() => import('../testimonial/index'));

const TopContainer = () => {
    const classes = styles();
    const { REGISTER_LINK } = useConfig();

    return (
        <Box>
            <Box className={`padding_all pTop`}>
                <TopSection />
            </Box>
            <Box className={`${classes.pLeftAll} max-width1400`}>
                <AddsValue />
            </Box>
            <Box display="flex" justifyContent="center" mt="70px">
                <MKButton
                    variant="contained"
                    to={REGISTER_LINK}
                    className={classes.headerButton}
                >
                    Early Access
                </MKButton>
            </Box>
        </Box >
    )
}

export default TopContainer;

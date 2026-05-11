import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MKButton from "@mui/material/Button";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import useConfig from "utils/config";
import styles from './styles';
import FaqImage from 'assets/images/image4.png';
import FaqImage1 from 'assets/images/image6.gif';
import FaqComponent from 'components/accordion';

const Faq = () => {
    const classes = styles();
    const { REGISTER_LINK } = useConfig();

    return (
        <Box className={`padding_all ${classes.root} faq_section`}>
            <Box className='max-width1400'>
                <Typography className={classes.header1} variant="h5">
                    What you might be wondering
                </Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{ height: '100%', margin: '0px', width: '100%' }}
                >
                    <Grid item xs={12} md={12} lg={7} className={classes.leftGrid}>
                        <FaqComponent />
                    </Grid>
                    <Grid item xs={12} md={12} lg={5} className={classes.rightGrid}>
                        <Box className={classes.imageGridContainer}>
                            <img
                                src={FaqImage1}
                                className={classes.faqAvatar1}
                                alt="faq"
                            />
                            <LazyLoadImage
                                src={FaqImage}
                                className={classes.faqAvatar2}
                                alt="faq"
                                effect="blur"
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" mt={{ lg: "30px" }}>
                    <MKButton
                        variant="contained"
                        to={REGISTER_LINK}
                        className={classes.headerButton}
                    >
                        Get Started
                    </MKButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Faq;

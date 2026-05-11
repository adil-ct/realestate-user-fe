import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MKButton from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

// Relative imports
import styles from './styles';
import howItWorksData from '_mocks/how-it-works';
import HowItWorksCard from 'components/card/how-it-work-card';
import TwoImageCard from 'components/card/two-image-card';
import { routePaths } from "routes/mainRoutes/routePaths";

const HowItWorks = () => {
    const classes = styles();
    const navigate = useNavigate();
    const [contentData, setContentData] = useState(howItWorksData);
    const [selectedData, setSelectedData] = useState(contentData[0]);

    // Toggle the active status of selected data
    // and update others status as false
    const updateContentData = async (id) => {
        const updatedData = await contentData.map((item) => {
            if (item.id === id) {
                setSelectedData(item)
                return {
                    ...item,
                    active: !item.active,
                }
            }

            return {
                ...item,
                active: false,
            }
        })
        setContentData(updatedData)
    };

    return (
        <Box className={`padding_all ${classes.root}`}>
        <Box className='max-width1400' >
            <Typography className={classes.header1} variant="h5">
                How it works
            </Typography>
            <Typography className={classes.header2} variant="h5">
                It&apos;s as easy as 1, 2, 3
            </Typography>
            <Grid container spacing={2} sx={{ height: '100%', margin: '0px' }}>
                <Grid item xs={12} md={12} lg={6} className={classes.leftGrid}>
                    {contentData.map((item, index) => (
                        <HowItWorksCard
                            index={index + 1}
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            flag={item.active}
                            onExpand={updateContentData}
                            link={item.link}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={12} lg={6} className={classes.rightGrid}>
                    <Box className={classes.imageGridContainer}>
                        <TwoImageCard
                            avatar={selectedData.avatar}
                            carousel={selectedData.carousel}
                            lIcon={selectedData.licon}
                            rIcon={selectedData.ricon}
                            variant={selectedData.variant}
                            className={classes.imageGridCard}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={{ lg: "30px" }}>
                <MKButton
                    variant="contained"
                    onClick={() =>
                        navigate(routePaths.INVESTOR_PATH)
                    }
                    className={classes.headerButton}
                >
                    Browse Properties
                </MKButton>
            </Box>
        </Box>
        </Box>
    );
};

export default HowItWorks;

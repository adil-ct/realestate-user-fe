import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Relative imports
import HIWSlider from 'views/landing/hiw-slider';
import Image2 from 'assets/images/image2.jpg';
import Image1 from 'assets/images/Background12.jpg';
import V1 from 'assets/images/V1.png';
import V2 from 'assets/images/V2.png';
import { twoImageCardStyles } from './styles';

const TwoImageCard = ({ avatar, dynamic, carousel, lIcon, rIcon, variant = false }) => {
    const classes = twoImageCardStyles({ dynamic });

    return (
        <>
            <Box className={classes.image1}>
                {lIcon && (
                    <img
                        src={lIcon}
                        className={classes.lImage}
                        alt="left_icon"
                    />
                )}
                {rIcon && (
                    <img
                        src={rIcon}
                        className={variant ? classes.rImage1 : classes.rImage}
                        alt="right_icon"
                    />
                )}
                {carousel ? (
                    <Box className={classes.sliderContainer}>
                        <Typography className={classes.header1} variant="h5">
                            Properties
                        </Typography>
                        <HIWSlider />
                    </Box>
                ) : variant ? (
                    <Box className={classes.sliderContainer1}>
                        <Box>
                            <LazyLoadImage
                                className={classes.avatar1}
                                src={V1}
                                alt="background"
                                effect="blur"
                            />
                        </Box>
                        <Box>
                            <LazyLoadImage
                                className={classes.avatar1}
                                src={V2}
                                alt="background"
                                effect="blur"
                            />
                        </Box>
                    </Box>
                ) : (
                    <LazyLoadImage
                        className={classes.avatar}
                        src={avatar}
                        alt="background"
                        effect="blur"
                    />
                )}
            </Box>
            <Box className={classes.image2}>
                <LazyLoadImage
                    className={classes.avatar}
                    src={dynamic ? Image1 : Image2}
                    alt="main_image"
                    effect="blur"
                />
            </Box>
        </>
    );
};

export default TwoImageCard;

import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';

// Relative imports
import settings from 'utils/carouselSetting';
import HWSliderData from '_mocks/hiw-slider';
import HIWSliderCard from 'components/card/hiw-slider-card';
import styles from './styles';

const HIWSlider = () => {
    const classes = styles();

    // Customize dots style
    const updatedSettings = {
        ...settings,
        dotsClass: `slick-dots ${classes.dots}`,
        slidesToShow: 1,
        className: 'slider variable-width',
        variableWidth: true,
        lazyLoad: true,
        pauseOnHover: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        arrows: false,
        dots: false,
        cssEase: 'linear',
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1500,
    }

    return (
        <Box className={`${classes.root} hiw-slider`}>
            <Box className={classes.container}>
                <Slider {...updatedSettings}>
                    {HWSliderData.map((item) => (
                        <HIWSliderCard
                            key={item.title}
                            avatar={item.avatar}
                            title={item.title}
                            amount={item.amount}
                        />
                    ))}
                </Slider>
            </Box>
        </Box>
    )
};

export default HIWSlider;

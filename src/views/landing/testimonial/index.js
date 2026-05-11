import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// Relative imports
import settings from 'utils/carouselSetting';
import testimonialData from '_mocks/testimonials';
import TestimonialCard from 'components/card/testimonial-card';
import styles from './styles';

const Testimonial = () => {
    const classes = styles();

    // Customize dots style
    const updatedSettings = {
        ...settings,
        dotsClass: `slick-dots ${classes.dots}`,
        // autoplay: true,
        // autoplaySpeed: 6000,
        arrows: false,
        pauseOnHover: true,
    }

    return (
        <LazyLoadComponent>
            <Box className={`${classes.root}`}>
                <Typography
                    className={`${classes.header1}`}
                    variant="h5"
                >
                    Our trusted investors & advisors
                </Typography>
                <Box className="testimonial_container" pt={{ lg: "80px", md: "60px", sm: "50px" }}>
                    <Slider {...updatedSettings}>
                        {testimonialData.map((item) => (
                            <TestimonialCard
                                key={item.title}
                                avatar={item.avatar}
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                alt={item.alt}
                            />
                        ))}
                    </Slider>
                </Box>
            </Box>
        </LazyLoadComponent>
    );
};

export default Testimonial;

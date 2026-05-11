import { Box, Typography } from '@mui/material';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// Relative imports
import { useHeaderCardStyles } from './styles';

const HeaderCard = ({ title, subtitle }) => {
    const classes = useHeaderCardStyles();
    return (
        <LazyLoadComponent>
            <Box
                className={classes.root}
            >
                <Typography variant="h5" className={classes.header1}>
                    {title}
                </Typography>
                <Typography variant="h5" className={classes.header2}>
                    {subtitle}
                </Typography>
            </Box>
        </LazyLoadComponent>
    );
};

export default HeaderCard;

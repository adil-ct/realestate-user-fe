import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ArrowDropDown';

// Relative imports
import useConfig from 'utils/config';
import faqData from '_mocks/faq';
import styles from './styles';
import { routePaths } from "routes/mainRoutes/routePaths";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        sx={{ padding: '0px' }}
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))((/*{ theme }*/) => ({
    // backgroundColor:
    //     theme.palette.mode === 'dark'
    //         ? 'rgba(255, 255, 255, .05)'
    //         : 'rgba(0, 0, 0, .03)',
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    // borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const CustomizedAccordions = () => {
    const classes = styles();
    const navigate = useNavigate();
    const { BLOG_ID_2 } = useConfig();
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    };

    return (
        <div>
            {faqData.map((item, index) => (
                <Accordion
                    key={item.id}
                    className={classes.accordion}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                >
                    <AccordionSummary
                        sx={{
                            // backgroundColor: 'transparent',
                            // borderBottom:
                            //     expanded === `panel${index + 1}`
                            //         ? ''
                            //         : '1px solid rgb(147 144 144 / 41%)',
                            paddingBottom: '0px',
                        }}
                        expandIcon={<ExpandMoreIcon fontSize="large" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography variant="h5" className={classes.header1}>
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography
                            display="inline"
                            variant="h5"
                            className={classes.header3}
                        >
                            {item.description}
                        </Typography>
                        {item.link && (
                            <Typography
                                display="inline"
                                onClick={(e) => {
                                    e.preventDefault()
                                    navigate(routePaths.BLOG_DETAILS_PATH + BLOG_ID_2)
                                }}
                                className={classes.header4}
                                variant="h5"
                            >
                                {' '}
                                Click here for more info
                            </Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default CustomizedAccordions;

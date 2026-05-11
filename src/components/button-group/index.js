import { Box, Button } from '@mui/material';

// Relative imports
import styles from './styles';

const buttonData = [
    { label: 'Popular', name: 'popular' },
    { label: 'Real Estate', name: 'real-estate' },
    { label: 'Blockchain', name: 'blockchain' },
    { label: 'Invest Tech', name: 'mogul' },
    { label: 'All', name: 'all' },
]

const CustomButton = ({ setActiveBtn, activeBtn, setPageNumber, setText }) => {
    const classes = styles();
    return (
        <Box className={classes.rootContainer}>
            {buttonData.map((btn) => {
                return (
                    <Button
                        className={
                            activeBtn === btn.name
                                ? classes.active
                                : classes.btns
                        }
                        onClick={() => {
                            setActiveBtn(btn.name)
                            setPageNumber(1)
                            setText("")
                            localStorage.setItem('blogtype', btn.name)
                        }}
                        key={btn.label}
                    >
                        {btn.label}
                    </Button>
                )
            })}
        </Box>
    );
};

export default CustomButton;

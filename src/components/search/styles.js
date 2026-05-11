
import { createStyles, makeStyles } from '@mui/styles';
import {  alpha } from '@mui/material/styles';

const styles = makeStyles((theme) => createStyles({
    avatar: {
        height: '100%',
        width: '100%',
    },
    searchMain: {
        marginTop: '50px',
        width: '200px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '30px',
        },
    },
    searchIcon: {
        // color: '#939090',
        color: theme.palette.searchBox.border,
        fontSize: '16px',
        fontWeight: '400',
    },
    searchSection: {
        border: `1px solid ${theme.palette.searchBox.border}`,
        borderRadius: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.35),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.45),
        },
        
        marginLeft: 0,
        width: '100%',
        height:'40px',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIconWrapper: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      styledInputBase: {
        color: 'inherit',
        fontSize:'18px',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      },
},
{ name : 'search-component-mogul' }));

export default styles;

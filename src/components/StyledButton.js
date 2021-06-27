import { makeStyles } from '@material-ui/core';
import '@fontsource/roboto';

export const baseButtonStyle = makeStyles({
    root: {
        position: 'fixed',
        zIndex: '1',
        height: '10%',
        transition: '0.2s ease-in-out',
    },
    rootScroll: {
        position: 'fixed',
        zIndex: '1',
        height: '10%',
        backgroundColor: 'rgb(30, 30, 30)',
        transition: '0.2s ease-in-out',
    },
    navigation: {
        margin: '0px 15px 0px 15px',
        color: 'white',
        transition: '0.2s ease-in-out',
        '&:hover': {
            color: '#ae4752',
        },
    },
});

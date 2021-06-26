import { makeStyles } from '@material-ui/core';
import '@fontsource/roboto';

export const baseButtonStyle = makeStyles({
    root: {
        margin: '30px 0px 30px 0px',
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

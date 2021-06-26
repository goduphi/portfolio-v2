import { makeStyles } from '@material-ui/core';
import '@fontsource/roboto';

export const AboutStyles = makeStyles({
    root: {
        color: 'white',
        height: '90vh',
    },
    author: {
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    positions: {
        fontSize: '1.1rem',
    },
    fadeOut: {
        display: 'none',
    },
    fadeIn: {
        display: 'inline-block',
    }
});

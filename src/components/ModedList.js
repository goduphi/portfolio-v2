import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const ListStyle = makeStyles({
    root: {
        padding: '5%',
        width: '100%',
        color: '#D7D7D7',
    },
});

export const ModedList = ({ items }) => {
    const classes = ListStyle();
    return (
        <Grid container alignItems="center" spacing={2} className={classes.root}>
            {items.map((item, i) => {
                return (<Grid item xs={4} key={i}>{item}</Grid>);
            })}
        </Grid>
    );
}
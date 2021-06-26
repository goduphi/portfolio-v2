import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { ProjectsStyles } from '../styles/ProjectsStyles';

export const Projects = ({ projects, setCurrentLocation, routeLocation }) => {
    const classes = ProjectsStyles();

    useEffect(() => {
        setCurrentLocation(routeLocation.location.pathname);
    });
    
    return (
        <Grid container justify="center" alignItems="flex-start" spacing={2} xs={12} className={classes.root}>
            {projects.map((project) => {
                return (
                    /* IMPORTANT: Change the key to something unique */
                    <Grid item key={project.name}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom style={{ }}>
                                    {project.name}
                                </Typography>
                                <Typography  variant="body1" component="p" gutterBottom>
                                    {project.description}
                                </Typography>
                                <Typography variant="overline">
                                    {project.language}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}

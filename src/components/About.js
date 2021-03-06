import React, { useState, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Grid, Typography } from '@material-ui/core';
import { useSpring, animated, config } from 'react-spring';
import { AboutStyles } from '../styles/AboutStyles';
import { ModedList } from './ModedList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn, faPython, faHive } from '@fortawesome/free-brands-svg-icons';
import '@fontsource/roboto';
import '../styles/Fonts.css';

export const About = ({ setCurrentLocation, routeLocation, skills }) => {
    const skillsSection = useRef(null);
    const [visible, setVisible] = useState(false);
    const intersection = useIntersection(skillsSection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    const [props, api] = useSpring(() => (
        {
            to: { 
                  opacity: 1,
                  transform: 'translate(0px, 0px)'
                },
            from: {
                  opacity: 0,
                  transform: 'translate(0px, 20px)',
                },
            delay: 300,
        }
    ));

    const [skillProps, skillApi] = useSpring(() => (
        {
            to: {
                    transform: 'translate(0px, 0px)',
                },
            from: {
                    transform: 'translate(0px, 30px)',
                },
            reset: true,
            reverse: visible,
            delay: 300,
            config: config.molasses,
        }
    ));

    const AnimatedGrid = animated(Grid);
    
    useEffect(() => {
        setCurrentLocation(routeLocation.location.pathname);
    });

    useEffect(() => {
        intersection && setVisible((intersection.intersectionRatio >= 0.5));
    }, [intersection]);

    useEffect(() => {
        skillApi.start({ opacity: (visible ? 1 : 0)});
    }, [visible, skillApi]);

    const classes = AboutStyles();

    return (
        <Grid
            container
            className={classes.root}
        >
            <AnimatedGrid container xs={12} style={props} className={classes.gridHeight}>
                <Grid container direction="column" alignItems="center" justify="center">
                    <Grid>
                        <Typography className={classes.author}>SARKER NADIR AFRIDI AZMI</Typography>
                        <Typography className={classes.positions}>Computer Engineering Undergraduate</Typography>
                        <Typography className={classes.positions}>Summer Research Intern | ROVER Controls Team Lead</Typography>
                        <FontAwesomeIcon icon={faGithubAlt} size="2x" style={{ padding: 10, }} />
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ padding: 10, }} />
                    </Grid>
                </Grid>
            </AnimatedGrid>
            <AnimatedGrid ref={skillsSection} container alignItems="center" style={skillProps} className={classes.gridHeight}>
                <Grid container justify="center" xs={12}>
                    <Grid item direction="column" xs={12} md>
                        <Grid container alignItems="center" style={{ paddingLeft: '4%' }}><FontAwesomeIcon icon={faPython} fixedWidth size="2x" /><Typography>Programming Languages</Typography></Grid>
                        <ModedList items={skills.programmingLanguages} />
                    </Grid>
                    <Grid item direction="column" xs={12} md>
                        <Grid container alignItems="center" style={{ paddingLeft: '4%' }}><FontAwesomeIcon icon={faMicrochip} fixedWidth size="2x" /><Typography>Embedded Systems Peripherals</Typography></Grid>
                        <ModedList items={skills.peripherals} />
                    </Grid>
                    <Grid item direction="column" xs={12} md>
                        <Grid container alignItems="center" style={{ paddingLeft: '4%' }}><FontAwesomeIcon icon={faHive} fixedWidth size="2x" /><Typography>Network Protocols</Typography></Grid>
                        <ModedList items={skills.microcontrollers} />
                    </Grid>
                </Grid>
            </AnimatedGrid>
        </Grid>
    );
}

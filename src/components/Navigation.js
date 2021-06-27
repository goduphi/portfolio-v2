import React, { useState, useEffect } from 'react';
import { Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { baseButtonStyle } from './StyledButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from '@material-ui/core';

export const RESUME_LINK = 'https://drive.google.com/drive/folders/1mw-IFYk1UmndlddZ89BBuY-Rf0PRAG89?usp=sharing';
export const GITHUB_LINK = 'https://www.github.com/goduphi';

export const Navigation = ({ currentWindowLocation }) => {
    const [showContactLinks, setShowContactLinks] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScrollChange);
        return () => window.removeEventListener('scroll', onScrollChange);
    }, []);

    useEffect(() => {
        setShowContactLinks(currentWindowLocation !== '/');
    }, [currentWindowLocation]);

    const classes = baseButtonStyle();

    const onScrollChange = () => {
        setScrolling(window.scrollY < 80);
    }

    return (
        <Grid container justify="center" alignItems="center" className={scrolling ? classes.root : classes.rootScroll}>
            <Link component={RouterLink} to="/" underline="none">
                <Tooltip title="About">
                    <span>
                        <FontAwesomeIcon icon={faInfo} fixedWidth size="2x" className={classes.navigation} />
                    </span>
                </Tooltip>
            </Link>
            <Link component={RouterLink} to="/project" underline="none">
                <Tooltip title="Projects">
                    <span>
                        <FontAwesomeIcon icon={faCode} fixedWidth size="2x" className={classes.navigation} />
                    </span>
                </Tooltip>
            </Link>
            {showContactLinks ? <span>
                <Link href={GITHUB_LINK} underline="none">
                    <Tooltip title="GitHub">
                        <span>
                            <FontAwesomeIcon icon={faGithubAlt} size="2x" className={classes.navigation} />
                        </span>
                    </Tooltip>
                </Link>
                </span> : null}
        </Grid>
    );
}

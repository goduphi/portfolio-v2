import { makeStyles } from "@material-ui/core";
import '@fontsource/roboto';
import '../styles/Fonts.css';

export const ProjectsStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        height: 150,
        width: 400,
        color: 'white',
        backgroundColor: 'rgb(40, 40, 40)',
        borderRadius: 0,
        cursor: 'pointer',
        transition: '0.2s ease-in-out',
        opacity: '0.9',
        '&:hover': {
            transform: 'translate(0px, -5px)',
        }
    },
});

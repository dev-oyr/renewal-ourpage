import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import { Element } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        '& .MuiFab-root': {
            color: 'white',
            backgroundColor: '#ff6d70',
        },
        '& .MuiFab-sizeSmall': {
            width: '46px',
            height: '46px',
        },
    },
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Zoom in={trigger}>
            <div role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const scrollTo = e => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function Main(props) {
    return (
        <>
            <Section1></Section1>
            <Element name="test1">
                <Section2></Section2>
            </Element>
            <Element name="test2">
                <Section3></Section3>
            </Element>
            <Element name="test3">
                <Section4></Section4>
            </Element>

            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top" onClick={scrollTo}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}

export default Main;

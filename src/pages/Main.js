import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import { Element } from 'react-scroll';

function Main({ location }) {
    console.log(location);
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
        </>
    );
}

export default Main;

import React, { useMemo } from 'react';
import '../styles/section3.scss';
import { useCountUp } from 'react-countup';
import Fade from 'react-reveal/Fade';
import projectCounts from '../datas/projectCounts.json';

function CountUp() {
    const useCountUps = [
        useCountUp({
            start: 0,
            end: projectCounts.진행된프로젝트,
            duration: 3,
            prefix: '0',
        }),
        useCountUp({
            start: 0,
            end: projectCounts.공모전수상,
            duration: 3,
            prefix: '0',
            useEasing: false,
        }),
        useCountUp({
            start: 0,
            end: projectCounts.총회원수,
            duration: 3,
            prefix: '0',
            useEasing: false,
        }),
    ];

    return (
        <Fade
            bottom
            fraction={1}
            onReveal={() => {
                useCountUps[0].start();
                useCountUps[1].start();
                useCountUps[2].start();
            }}
        >
            <div className="project-count kr desc-font">
                <span className="count">
                    <div>{useCountUps[0].countUp}</div>
                    <p>진행된 프로젝트</p>
                </span>
                <span className="count">
                    <div>{useCountUps[1].countUp}</div>
                    <p>공모전 수상</p>
                </span>
                <span className="count">
                    <div>{useCountUps[2].countUp}</div>
                    <p>총 회원 수</p>
                </span>
            </div>
        </Fade>
    );
}
export default CountUp;

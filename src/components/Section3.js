import React from 'react';
import Card from '../components/CardView';
import '../styles/section3.scss';
import activities from '../datas/activities.json';
import { useCountUp } from 'react-countup';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { 진행된프로젝트, 공모전수상, 총회원수 } from '../datas/projectCounts.json';

function projCardDelay(idx) {
    const basicDelay = 333;
    // 2개짜리
    if (window.innerWidth < 769) {
        return (idx % 2) * basicDelay;
    }
    // 3개짜리
    else {
        return (idx % 3) * basicDelay;
    }
}

function Section3() {
    const ColorButton = withStyles(theme => ({
        root: {
            color: theme.palette.getContrastText('#ff6d70'),
            backgroundColor: '#ff6d70',
            '&:hover': {
                backgroundColor: '#ff6d70',
            },
        },
    }))(Button);

    const useCountUps = [
        useCountUp({
            start: 0,
            end: 진행된프로젝트,
            duration: 3,
            prefix: '0',
        }),
        useCountUp({
            start: 0,
            end: 공모전수상,
            duration: 3,
            prefix: '0',
            useEasing: false,
        }),
        useCountUp({
            start: 0,
            end: 총회원수,
            duration: 3,
            prefix: '0',
            useEasing: false,
        }),
    ];

    return (
        <div className="section3">
            <div className="responsive">
                <Fade bottom distance="84px" fraction={1}>
<<<<<<< HEAD
                    <div onClick={onReset} className="kr header-font project-header">
                        우리들의 프로젝트
                    </div>
=======
                    <div className="kr header-font project-header">우리들의 프로젝트</div>
>>>>>>> master
                </Fade>
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
                <div className="cardView">
                    {Object.keys(activities)
                        .filter((i, idx) => idx <= 5)
                        .map((act, key) => (
                            <Card
                                title={act}
                                day={activities[act].day}
                                contents={activities[act].content}
                                image={`${activities[act].image}`}
                                key={key}
                                id={key}
                                delay={projCardDelay(key)}
                            ></Card>
                        ))}
                </div>
                <div className="moreButton">
                    <Fade bottom distance="84px" fraction={1}>
                        <ColorButton
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                alert('아직 준비 중입니다.');
                            }}
                        >
                            <p className="kr">프로젝트 더 보기</p>
                        </ColorButton>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Section3;

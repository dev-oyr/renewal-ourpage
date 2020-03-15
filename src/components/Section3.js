import React from 'react';
import Card from '../components/CardView';
import '../styles/section3.scss';
import activities from '../datas/activities.json';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CountUp from './CountUp';

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

    return (
        <div className="section3">
            <div className="responsive">
                <Fade bottom distance="84px" fraction={1}>
                    <div className="kr header-font project-header">우리들의 프로젝트</div>
                </Fade>
                <CountUp></CountUp>
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

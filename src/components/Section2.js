import React from 'react';
import { Stickyroll } from '@stickyroll/stickyroll';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import icIntroduce from './svg/ic_introduce.svg';
import icStudy from './svg/ic_study.svg';
import icHomecoming from './svg/ic_homecoming.svg';
import '../styles/section2.scss';

const comments = [
    `는 연중무휴라는 뜻으로 2013년 12월 만들어진 웹 개발 학술동아리 입니다. 
    스터디를 통해 웹서비스 개발에 중점을 두고 있고, 
    팀 프로젝트를 진행하면서 각종 공모전 및 학술제에 참여하고 있습니다.`,
    `여기에 스터디 설명이 나타납니다.`,
];
const lastComments = `여기에 홈커밍 설명이 나타납니다.`;

const stickyProgressLabels = [
    {
        value: 0,
        label: '소개',
    },
    {
        value: 50,
        label: '스터디',
    },
    {
        value: 100,
        label: '홈커밍',
    },
];

const ProgressSlider = withStyles({
    root: {
        color: '#ff6d70',
        height: 3,
        padding: '15px 0',
    },
    thumb: {
        marginTop: '-0.31rem',
    },
    markLabel: {
        marginTop: '-2.75rem',
        color: '#999999',
        fontFamily: ['Noto Sans KR', 'sans-serif'],
        fontWeight: 500,
    },
    markLabelActive: {
        color: '#666666',
        fontWeight: 600,
    },
    rail: {
        height: 3,
        opacity: 0.5,
        backgroundColor: '#999999',
        marginLeft: -2,
    },
    track: {
        height: 3,
    },
    mark: {
        backgroundColor: '#999999',
        height: 7,
        width: 7,
        borderRadius: '50%',
        marginTop: -2,
        marginLeft: -2,
    },
    markActive: {
        opacity: 1,
        backgroundColor: '#ff6d70',
        marginLeft: -2,
    },
})(Slider);

let direction = true;

function Section2() {
    return (
        <Stickyroll pages={comments} factor={0.5}>
            {({ page, pageIndex, pages, progress }) => {
                if (pageIndex !== 0 && progress >= 0.5) {
                    direction = false;
                } else {
                    direction = true;
                }

                if (pageIndex >= 1 && progress >= 1) {
                    pageIndex = 2;
                }

                return (
                    <div className="section2">
                        <div className="responsive">
                            <div className="icons-container">
                                <Fade bottom cascade fraction={1} duration={666}>
                                    <div className="icons-wrapper">
                                        <div>
                                            <img src={icIntroduce} className={pageIndex === 0 ? 'active' : undefined} alt="introduce" />
                                        </div>
                                        <div>
                                            <img src={icStudy} className={pageIndex === 1 ? 'active' : undefined} alt="study" />
                                        </div>
                                        <div>
                                            <img src={icHomecoming} className={pageIndex === 2 ? 'active' : undefined} alt="homecoming" />
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <Zoom fraction={0.7} duration={666}>
                                <div className="slider-wrapper">
                                    <ProgressSlider
                                        value={pageIndex * 50 + progress * 50}
                                        aria-labelledby="discrete-slider-custom"
                                        marks={stickyProgressLabels}
                                    />
                                </div>
                            </Zoom>
                            <div className="introduce inner-header">
                                <Fade bottom distance="108px" fraction={1}>
                                    <div className="header-font kr">오픈이어라운드</div>
                                </Fade>
                            </div>
                            <div className="introduce inner-content">
                                <Fade bottom distance="108px" fraction={1}>
                                    <div className="comments-wrapper">
                                        <Fade left when={pageIndex === 0} duration={666}>
                                            <p className="desc-font kr">{comments[0]}</p>
                                        </Fade>
                                        <Fade left={!direction} right={direction} when={pageIndex === 1} duration={666}>
                                            <p className="desc-font kr">{comments[1]}</p>
                                        </Fade>
                                        <Fade right when={pageIndex === 2} duration={666}>
                                            <p className="desc-font kr">{lastComments}</p>
                                        </Fade>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Stickyroll>
    );
}

export default Section2;

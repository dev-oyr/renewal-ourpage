import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/section4.scss';

const histories = {
    '2018': [
        {
            title: 'Schedury',
            content: '한 눈에 일정 및 일기를 작성하고 관리할 수 있는 Schedury, 교내 학술제 입상',
        },
        {
            title: 'InMirror',
            content: '외출 준비를 할 때 거울을 보며 각종 정보들을 알 수 있는 스마트 거울 InMirror, 교내 학술제 입상',
        },
        {
            title: '시장올래',
            content: '서울시 재래시장 활성화 웹 애플리케이션 시장올래, 2018 서울시 앱 공모전 2위',
        },
        {
            title: 'Sejong Spec Up',
            content: '세종대학생들의 취업 스펙 비교 및 자신의 위치를 알려주는 Sejong Spec Up, 교내 해커톤 입상',
        },
    ],
    '2017': [
        {
            title: "Dawson's Daily Life",
            content: "아동 노동 착취 관련 웹 게임 Dawson's Daily Life, 2017 교내 학술제 입상",
        },
        {
            title: '도서로',
            content: '도서교환 웹서비스 도서로, 2017 교내 학술제 입상',
        },
        {
            title: '마이노트',
            content: '편집 에디터 마이노트, 2017 교내 학술제 입상',
        },
        {
            title: '학점 은행 제도 도우미 서비스',
            content: '학점 은행 제도 도우미 서비스, 교내 해커톤 입상',
        },
        {
            title: '뚜벅이',
            content: 'AR보행자 네비게이션 뚜벅이, 2017 세종 창업 아이디어 경진대회 장려상',
        },
    ],
    '2016': [
        {
            title: 'PricePlace',
            content: '서울시 물가비교 쇼핑 어플 PricePlace, 2016 교내 학술제 입상',
        },
        {
            title: 'TabStorage',
            content: '브라우저 탭 통합 서비스 TabStorage, 2016 교내 학술제 입상',
        },
    ],
    '2015': [
        {
            title: 'Keepet',
            content: '동물병원 추천 플랫폼 Keepet, 2015 교내 학술제 입상',
        },
        {
            title: '아뭐듣지',
            content: '강의평가 및 시간표 짜기 어플리케이션 아뭐듣지 (등록된 시간표 수 1400개)',
        },
    ],
    '2014': [
        {
            title: 'WeatherMusic',
            content: '현재 날씨에 어울리는 음악추천 WeatherMusic, 2014 청년창업기상기후산업 기상청장상',
        },
        {
            title: '오늘의 자외선',
            content: '오늘의 자외선, 기상청 추천 앱 등록',
        },
        {
            title: '그래서 오늘은',
            content: '뉴스 요약 어플 그래서 오늘은, 2014 정주영 창업경진대회 해커톤 2위',
        },
        {
            title: 'Fethering',
            content: '대학생 이상형 월드컵 Fethering, venture square 2014 5월의 아이템 선정',
        },
    ],
};

function HistoryGroup({ year, contents }) {
    return (
        <div className="history-group">
            <div className="desc-font en text-year">
                <Fade left distance="60%" fraction={0.7}>
                    <p>{year}</p>
                </Fade>
            </div>
            <div className="history-elements">
                {contents.map(({ title, content }, k) => (
                    <Fade left distance="15%" fraction={1} key={k}>
                        <p className="kr text-history">
                            {content.substring(0, content.indexOf(title))}
                            <span>{title}</span>
                            {content.substring(content.indexOf(title) + title.length, content.length)}
                        </p>
                    </Fade>
                ))}
            </div>
        </div>
    );
}

HistoryGroup.defaultProps = {
    year: new Date().getFullYear(),
    contents: [
        {
            title: '여기에 타이틀이 나타납니다.',
            content: '여기에 내용이 나타납니다.',
        },
    ],
};

function Section4() {
    return (
        <div className="section4">
            <div className="responsive">
                <div className="inner-header">
                    <Fade bottom distance="200%" fraction={1}>
                        <h1 className="header-font kr">동아리 연혁</h1>
                    </Fade>
                </div>
                <div className="inner-content">
                    {Object.keys(histories)
                        .reverse()
                        .map((y, k) => (
                            <HistoryGroup year={y} contents={histories[y]} key={k}></HistoryGroup>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Section4;

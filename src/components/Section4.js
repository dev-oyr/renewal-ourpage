import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/section4.scss';
import histories from '../datas/histories.json';

function HistoryGroup({ year, contents }) {
    return (
        <div className="history-group">
            <div className="desc-font en text-year">
                <Fade left distance="48px" fraction={0.7} duration={666}>
                    <p>{year}</p>
                </Fade>
            </div>
            <div className="history-elements">
                {contents.map(({ title, content }, k) => (
                    <Fade left distance="72px" fraction={1} duration={666} key={k}>
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
                    <Fade bottom distance="108px" fraction={1}>
                        <div className="header-font kr">우리들의 역사</div>
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

import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import x from './svg/collaboX.svg';
import webStudy from './svg/webstudy.svg';
import oyr_kr from './svg/oyr_kr.svg';
//import oyr_ch from './svg/oyr_ch.svg';
import divider from './svg/divider.svg';
import '../styles/section1.scss';

function Section1() {
    return (
        <div className="header-image">
            <div className="responsive">
                <div className="maxWidth">
                    <Fade duration={2000} delay={1000}>
                        <div className="summary">세종대학교 웹 개발 학술동아리</div> {/*이거도 컴포넌트 나눠야하나*/}
                    </Fade>
                    <Zoom duration={1500}>
                        <div className="divider_div">
                            <img src={divider} className="divider" alt="선" />
                        </div>
                    </Zoom>
                    <Fade duration={2000} delay={1000}>
                        <img src={webStudy} className="webStudy" alt="web study" />
                    </Fade>
                    <Fade duration={1000}>
                        <div>
                            <img src={x} className="collaboX" alt="x" />
                        </div>
                    </Fade>
                    <Fade duration={2000} delay={1000}>
                        <img src={oyr_kr} className="oyr_kr" alt="연중무휴" />
                    </Fade>
                    <Zoom duration={1500}>
                        <div className="divider_div">
                            <img src={divider} className="divider" alt="선" />
                        </div>
                    </Zoom>
                    <Fade duration={2000} delay={1000}>
                        <div className="recruit2020">2020년도 신입부원 모집중</div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Section1;

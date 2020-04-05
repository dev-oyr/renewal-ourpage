import React from 'react';
import Fade from 'react-reveal';
import icIntroduce from '../svg/ic_introduce.svg';
import icStudy from '../svg/ic_study.svg';
import icHomecoming from '../svg/ic_homecoming.svg';
import '../../styles/mobile_section2.scss';

const MobileSection2Card = React.memo(function MobileSection2Card({ icon, title, right, children }) {
    return (
        <Fade left={!right} right={right} distance="84px" fraction={1} duration={666}>
            <div className={`mob-section2-card-root ${right ? 'align-right' : ''} ko`}>
                <div className="card-left icon-cont">
                    <img src={icon} alt="card-icon" />
                </div>
                <div className="card-right contents-cont">
                    <div className="cont-title">{title}</div>
                    <div className="cont-content">{children}</div>
                </div>
            </div>
        </Fade>
    );
});

MobileSection2Card.defaultProps = {
    right: false,
};

function MobileSection2() {
    return (
        <>
            <div className="mob-cards-root">
                <MobileSection2Card icon={icIntroduce} title="소개">
                    오픈이어라운드는 연중무휴라는 뜻으로 2013년 12월 만들어진 웹 개발 학술동아리 입니다. 스터디를 통해 웹서비스 개발에
                    중점을 두고 있고, 팀 프로젝트를 진행하면서 각종 공모전 및 학술제에 참여하고 있습니다.
                </MobileSection2Card>
                <MobileSection2Card icon={icStudy} right title="스터디">
                    오픈이어라운드는 1학기 중에는 시험기간 2주를 제외하고 매주 월요일 저녁에 스터디를 진행합니다. 스터디는 번갈아가며 공부한
                    내용을 다른 동아리원들에게 발표를 하고 매 주 주어지는 과제에 대한 피드백을 합니다. 프로젝트는 스터디가 끝난 후
                    여름방학부터 진행합니다. 2학기와 겨울방학 때는 희망하는 동아리원만 더 심화된 내용으로 스터디와 프로젝트를 진행합니다.
                </MobileSection2Card>
                <MobileSection2Card icon={icHomecoming} title="홈커밍">
                    오픈이어라운드 에서는 동아리를 거처간 선배님에게 조언을 구할수 있는 행사를 진행하고 있습니다. 그 외에도 MT나 다양한 IT
                    행사를 소개해주고 진행할 계획입니다.
                </MobileSection2Card>
            </div>
        </>
    );
}

export default React.memo(MobileSection2);

import React from 'react';
import '../styles/recruit.scss';

function Recruit() {
    return (
        <div className="responsive">
            <div className="target">
                <div className="kr header-font">모집대상</div>
                <div className="kr desc-font">
                    학년, 학과, 학번, 성별, 인종(중국인 제외) 상관없이 웹 프로그래밍에 관심이 있고 열정이 쏟을 수 있는 사람이라면 누구나
                </div>
                <div className="background-cover recruit"></div>
            </div>
            <div className="target">
                <div className="kr header-font">2020 오픈이어라운드 모집절차</div>
                <div className="recruits-wrapper"></div>
                <div className="schedule-wrapper"></div>
            </div>
        </div>
    );
}

export default Recruit;

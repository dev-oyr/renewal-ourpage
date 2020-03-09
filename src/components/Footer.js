import React from 'react';
import '../styles/footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="responsive">
                <div className="col">
                    <div className="col1">
                        <div className="kr colHeader">8대 운영진</div>
                        <div className="kr desc-font">회장&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 김철진</div>
                        <div className="kr desc-font">부회장&nbsp;&nbsp;&nbsp; 이채원</div>
                        <div className="kr desc-font">부회장&nbsp;&nbsp;&nbsp; 신동민</div>
                    </div>
                    <div className="col1">
                        <div className="kr colHeader">이메일</div>
                        <div className="en desc-font">kcj409@naver.com</div>
                        <div className="en desc-font">fjdksla98@naver.com</div>
                        <div className="en desc-font">wollow1@naver.com</div>
                    </div>
                    <div className="col1">
                        <div className="kr colHeader">문의</div>
                        <div className="kr desc-font">카카오톡 플러스친구 : </div>
                        <div className="en desc-font"> @openyearround</div>
                    </div>
                </div>

                <div className="copyright">Copyright © 2020 OpenYearRound.</div>
            </div>
        </div>
    );
}

export default Footer;

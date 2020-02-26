import React from 'react';
import '../styles/faq.scss';
import Accordion from '../components/Accordion';
import { Link, Route } from 'react-router-dom';

function FAQ() {
    return (
        <div className="responsive">
            <div className="faq">
                <div className="kr header-font">OpenYearRound의 FAQ게시판 입니다.</div>
                <div className="kr desc-font">
                    원하는 질문이 없는 경우에는 하단의 이메일이나 카카오톡 플러스친구를 통해 문의 해주시기 바랍니다.
                </div>

                <div className="subRoute">
                    <ul>
                        <li>
                            <Link to="/faq/01">지원 관련</Link>
                        </li>
                        <li>
                            <Link to="/faq/02">스터디 진행</Link>
                        </li>
                    </ul>
                </div>
                <div className="accordion">
                    <Route path="/faq/:id" exact component={Accordion}></Route>
                </div>
            </div>
        </div>
    );
}

export default FAQ;

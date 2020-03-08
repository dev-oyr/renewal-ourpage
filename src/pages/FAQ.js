import React from 'react';
import '../styles/faq.scss';
import Accordion from '../components/Accordion';
import { NavLink, Route } from 'react-router-dom';

function FAQ() {
    return (
        <>
            <div className="headerBody">
                <div className="responsive">
                    <div className="faq">
                        <div className="kr header-font">OpenYearRound의 FAQ게시판 입니다.</div>
                        <div className="kr desc-font">
                            원하는 질문이 없는 경우에는 이메일(kcj409@naver.com) 이나 카카오톡 플러스친구(@openyearround) 를 통해 문의
                            해주시기 바랍니다.
                        </div>

                        <div className="subRoute">
                            <ul>
                                <NavLink className="listStyle kr" to="/faq/01" activeClassName={'able'}>
                                    <li>
                                        <span>01</span>지원 관련
                                    </li>
                                </NavLink>
                                <NavLink className="listStyle kr" to="/faq/02" activeClassName={'able'}>
                                    <li>
                                        <span>02</span>스터디 진행
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion">
                <div className="responsive">
                    <Route path="/faq/:id" exact component={Accordion}></Route>
                </div>
            </div>
        </>
    );
}

export default FAQ;

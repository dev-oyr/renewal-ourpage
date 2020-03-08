import React from 'react';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import './styles/common.scss';
import Main from './pages/Main';
import Recruit from './pages/Recruit';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Apply from './pages/Apply';
import CardPage from './pages/CardPage';
import Footer from './components/Footer';
import MobileApply from './pages/MobileApply';
import Admins from './pages/Admins';
import { Route, Redirect } from 'react-router-dom';
import { dbCtrl, firebase, fbdb } from './database/DBCtrl';
import isMobile from './method/ismobile';

// 임시로 전역 객체로 등록한 거임!!
window.firebase = firebase;
window.fbdb = fbdb;
window.dbCtrl = dbCtrl;

const checkAdmin = () => {
    const session = JSON.parse(sessionStorage.getItem('currentUser'));
    if (session === null) return false;
    return session.stdno === 'admin' && session.name === '오픈이어라운드 관리자, 건들지 마세요';
};

window.mobile = isMobile;
function App() {
    console.log('현재 세션::', JSON.parse(sessionStorage.getItem('currentUser')));
    return (
        <>
            {window.mobile ? (
                <Route path="/" component={MobileApply} />
            ) : (
                <>
                    <Nav current="mail"></Nav>
                    <Wrapper>
                        <Route path="/" component={Main} exact />
                        <Route path="/recruit" component={Recruit} />
                        <Route path="/faq/:id" component={FAQ} />
                        <Route path="/login" component={Login} />
                        <Route path="/apply" component={Apply} />
                        <Route path="/cardpage/:title" component={CardPage} />
                        <Route path="/admins" component={Admins} />
                    </Wrapper>
                    <Footer></Footer>
                </>
            )}
        </>
    );
}

export default App;

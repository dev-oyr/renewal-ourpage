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
import { Route } from 'react-router-dom';
import { dbCtrl, firebase, fbdb } from './database/DBCtrl';

// 임시로 전역 객체로 등록한 거임!!
window.firebase = firebase;
window.fbdb = fbdb;
window.dbCtrl = dbCtrl;

function App() {
    return (
        <>
            <Nav current="mail"></Nav>
            <Wrapper>
                <Route path="/" component={Main} exact />
                <Route path="/recruit" component={Recruit} />
                <Route path="/faq/:id" component={FAQ} />
                <Route path="/login" component={Login} />
                <Route path="/apply" component={Apply} />
                <Route path="/cardpage/:title" component={CardPage} />
            </Wrapper>
            <Footer></Footer>
        </>
    );
}

export default App;

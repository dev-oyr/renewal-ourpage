import React from 'react';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import './styles/common.scss';
import Main from './pages/Main';
import Recruit from './pages/Recruit';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Apply from './pages/Apply';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Nav current="mail"></Nav>
            <Wrapper>
                <Route path="/" component={Main} exact />
                <Route path="/recruit" component={Recruit} />
                <Route path="/faq" component={FAQ} />
                <Route path="/login" component={Login} />
                <Route path="/apply" component={Apply} />
            </Wrapper>
            <Footer></Footer>
        </>
    );
}

export default App;

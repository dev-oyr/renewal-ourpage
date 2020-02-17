import React from 'react';
import Nav from './components/Nav';
import './styles/common.scss';
import Main from './pages/Main';
import Recruit from './pages/Recruit';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Apply from './pages/Apply';

import { Route, Link } from 'react-router-dom';

function App() {
    return (
        <>
            <Nav current="mail"></Nav>
            <Route path="/" component={Main} exact />
            <Route path="/recruit" component={Recruit} />
            <Route path="/faq" component={FAQ} />
            <Route path="/login" component={Login} />
            <Route path="/apply" component={Apply} />

            {/* <Footer></Footer> */}
        </>
    );
}

export default App;

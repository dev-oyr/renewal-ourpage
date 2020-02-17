import React from 'react';
import Nav from './components/Nav';
import './styles/common.scss';
import Main from './pages/Main';

function App() {
    return (
        <>
            <Nav current="mail"></Nav>
            <Main></Main>
            {/* <Footer></Footer> */}
        </>
    );
}

export default App;

import React from 'react';
import './styles/common.scss';
import Main from './pages/Main';

function App() {
    return (
        <>
            {/* google web font Noto Sans */}
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
            {/* google web font Montserrat */}
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />

            <Main></Main>
        </>
    );
}

export default App;

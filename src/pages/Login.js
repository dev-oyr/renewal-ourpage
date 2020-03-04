import React, { useState } from 'react';
import '../styles/login.scss';
import LoginPanel from '../components/LoginPanel';
import { firebase, dbCtrl } from '../database/DBCtrl';
import { Redirect } from 'react-router-dom';

function Login() {
    const [redirect, setRedirect] = useState(false);
    const handleRedirect = () => {
        setRedirect(true);
    };

    // if (JSON.parse(sessionStorage.getItem('currentUser'))) handleRedirect();

    firebase.auth().onAuthStateChanged(async user => {
        if (user) {
            if (await dbCtrl.userCurrent) {
                handleRedirect();
            }
        } else {
            // err
        }
    });

    return (
        <>
            {redirect ? <Redirect push to="/"></Redirect> : false}
            <div className="responsive">
                <div className="kr header-font">로그인</div>
                <div className="login">
                    <LoginPanel type="text" name="아이디" />
                </div>
            </div>
        </>
    );
}

export default Login;

import React from 'react';
import '../styles/login.scss';
import LoginPanel from '../components/LoginPanel';

function Login() {
    return (
        <div className="responsive">
            <div className="kr header-font">로그인</div>
            <div className="login">
                <LoginPanel type="text" name="아이디" />
            </div>
        </div>
    );
}

export default Login;

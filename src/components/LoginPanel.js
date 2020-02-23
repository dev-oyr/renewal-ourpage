import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

function LoginInput({ type, name, message, feedback }) {
    return (
        <div>
            <input type={type} name={name} placeholder={name} />
            <Fade bottom collapse when={feedback}>
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {message}
                </div>
            </Fade>
        </div>
    );
}

function LoginPannel() {
    const [check, setCheck] = useState(false);
    let checkId = true;
    let checkPassword = true;
    const testLogin = () => {};

    return (
        <div>
            <LoginInput type="text" name="아이디" feedback={checkId} message="존재하지 않은 아이디입니다" />
            {/*아이디를 입력하십시오*/}
            <LoginInput type="password" name="비밀번호" feedback={checkPassword} message="비밀번호가 일치하지 않습니다" />
            {/*비밀번호를 입력하십시오 */}
            <button className="login_btn" type="button" onClick={testLogin}>
                로그인
            </button>
        </div>
    );
}

export default LoginPannel;

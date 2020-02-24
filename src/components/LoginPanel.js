import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

function LoginPannel() {
    let [cnt, setCnt] = useState(0);
    let [account, setAccount] = useState({
        id: '',
        password: '',
        checkId: false,
        checkPassword: false,
    });
    const Plus = () => {
        setCnt(cnt + 1);
    };
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        account.checkId = !account.checkId;

        setAccount({
            ...account,
            [name]: value,
        });
    };
    const loginCheck = () => {
        if (account.id.length % 2) {
            //일단 아이디가 홀수일때
            account.checkId = false;
            if (account.password.length % 2) {
                //일단 아이디가 홀수이고 비밀번호가 홀수일때
            } else {
                account.checkPassword = true;
            }
        } else {
            account.checkId = true;
        }
    };

    return (
        <div>
            <div>{cnt}</div>
            <button onClick={Plus}>+</button>

            <form>
                <input type="text" name="id" placeholder="아이디" onChange={handleChange} />
                <div>{account.checkPassword}</div>
                {console.log(account)}
                <Fade bottom collapse when={account.checkId}>
                    <div className="invalid-feedback" style={{ display: 'block' }}>
                        {'존재하지 않는 아이디 입니다'}
                    </div>
                </Fade>
                <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
                <Fade bottom collapse when={account.checkPassword}>
                    <div className="invalid-feedback" style={{ display: 'block' }}>
                        {'일치하지 않는 비밀번호입니다'}
                    </div>
                </Fade>
                <button type="button" onClick={loginCheck}>
                    로그인
                </button>
            </form>
        </div>
    );
}

export default LoginPannel;

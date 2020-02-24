import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

function LoginPannel() {
    let [account, setAccount] = useState({
        id: '',
        password: '',
        checkId: false,
        checkPassword: false,
    });

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        account[name] = value;
        setAccount(account);
    };
    const login = e => {
        if (account.id.length % 2) {
            //일단 아이디가 홀수일때
            if (account.password.length % 2) {
                //일단 아이디가 홀수이고 비밀번호가 홀수일때
                e.preventDefault();
            } else {
                account.checkPassword = true;
                e.preventDefault();
            }
        } else {
            account.checkId = true;
            console.log(account);
            e.preventDefault();
        }
    };

    return (
        <div>
            <form onSubmit={login}>
                <input type="text" name="id" placeholder="아이디" onChange={handleChange} />
                <div>{account.checkPassword}</div>
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

                <input type="submit" value="로그인" />
            </form>
        </div>
    );
}

export default LoginPannel;

/*
<form method="post" onSubmit={save}>
          Username <input type="text" name="username" onChange={handleChange} />
          <br />
          Password <input type="password" name="password" onChange={handleChange} />
          <br />
          Description
          <br />
          <textarea name="description" cols="20" rows="5" onChange={handleChange}></textarea>
          <br />
          <input type="submit" value="Save" />
        </form>
        */

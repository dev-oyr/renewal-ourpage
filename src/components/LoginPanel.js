import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../styles/login.scss';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black', //눌렀을때 색 어떤걸로 할지 정하기
        },
        '&label.Mui-error': {
            color: '#ff6d70',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {},
            '&:hover fieldset': {},
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
            '&.Mui-error fieldset': {
                borderColor: '#ff6d70',
            },
        },
        '&label.Mui-error': { color: '#ff6d70' },
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
        color: '#ff6d70',
    },
    input: {},
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '60%',
        marginTop: theme.spacing(1),
    },
    login_button: {
        margin: theme.spacing(3, 0, 2),
        color: 'white',
        backgroundColor: '#ff6d70',
        '&:hover': {
            backgroundColor: '#ff6d70',
        },
    },
}));

function LoginPannel() {
    const classes = useStyles();

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
    const loginCheck = () => {
        if (account.id.length % 2) {
            account.checkId = false;
            if (account.password.length % 2) {
                account.checkPassword = false;
            } else {
                account.checkPassword = true;
            }
        } else {
            account.checkPassword = false;
            account.checkId = true;
        }
        setAccount({
            ...account,
        });
        console.log(account);
    };

    return (
        <div className={classes.paper} noValidate>
            <form className={classes.form} noValidate>
                <CssTextField
                    error={account.checkId}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="id"
                    label="아이디"
                    name="id"
                    autoFocus
                    className={classes.input}
                    onChange={handleChange}
                />
                <CssTextField
                    error={account.checkPassword}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    className={classes.input}
                    onChange={handleChange}
                />
                <Button fullWidth variant="contained" color="primary" className={classes.login_button} onClick={loginCheck}>
                    로그인
                </Button>
                <p>아이디 비밀번호 찾기 => Link로 하기</p>
            </form>
        </div>
    );
}

export default LoginPannel;

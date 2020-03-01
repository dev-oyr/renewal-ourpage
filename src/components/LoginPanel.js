import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/login.scss';
import { dbCtrl } from '../database/DBCtrl';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#333', //눌렀을때 색 어떤걸로 할지 정하기
        },
        '&label.Mui-error': {
            color: '#ff6d70',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {},
            '&:hover fieldset': {
                borderColor: '#333',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#333',
            },
            '&.Mui-error fieldset': {
                borderColor: '#ff6d70',
            },
        },
        '&label.Mui-error': { color: '#ff6d70' },
    },
})(TextField);

const SnackbarStyle = withStyles({
    root: {
        '& .MuiSnackbarContent-root': {
            backgroundColor: '#ff9800',
            width: '350px',
        },
    },
})(Snackbar);

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
        open: false,
    });

    let [open, setOpen] = React.useState({
        message: '',
        open: false,
    });

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        account[name] = value;
        setAccount(account);
    };

    const handleClick = () => {
        if (account.checkId == true) {
            open.message = '존재하지 않는 아이디입니다.';
        } else {
            if (account.checkPassword == true) {
                open.message = '비밀번호가 일치하지 않습니다.';
            }
        }
        open.open = true;
        setOpen({ ...open });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        open.open = false;
        setOpen({ ...open });
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
        handleClick();
        console.log(open);
        console.log(account);
        dbCtrl.userLogin(account.id, account.password, {
            onSuccess(session) {
                console.info('로그인 완료 클라이언트단 테스트');
                console.log(session);
            },
            onError(err) {
                console.error(err);
                alert(`Firebase 사용자 인증 오류 발생!\n 에러 코드: ${err.code}\n 에러 내용: ${err.message}`);
            },
        });
    };

    return (
        <>
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
                </form>
                <SnackbarStyle
                    className={classes.snack}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={open.open}
                    autoHideDuration={6000000000}
                    onClose={handleClose}
                    message={open.message}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        </>
    );
}

export default LoginPannel;

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
        checkId: true,
        checkPassword: true,
        open: false,
    });

    let [open, setOpen] = React.useState({
        message: '',
        open: false,
    });

    const { id, password } = account;

    const handleChange = e => {
        const { value, name } = e.target;
        setAccount({
            ...account,
            [name]: value,
        });
    };

    const handleClick = () => {
        if (account.checkId === false) {
            open.message = '아이디를 확인해 주세요.';
            open.open = true;
        } else {
            if (account.checkPassword === false) {
                open.message = '비밀번호를 확인해 주세요.';
                open.open = true;
            }
        }
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
        if (account.id.trim() === '') {
            account.checkId = false;
            account.id = '';
        } else {
            account.checkId = true;
        }

        if (account.password.trim() === '') {
            account.checkPassword = false;
            account.password = '';
        } else {
            account.checkPassword = true;
        }

        setAccount({
            ...account,
        });

        if (!account.checkId || !account.checkPassword) {
            handleClick();
            return;
        }

        dbCtrl.userLogin(account.id, account.password, {
            onSuccess(session) {
                account.checkId = true;
                account.checkPassword = true;
                console.info('로그인 완료 클라이언트단 테스트');
                console.log(session);
            },
            onError(err) {
                console.error(err);
                if (err.code === 'stdNoNotFound') {
                    account.checkId = false;
                } else if (err.code === 'auth/wrong-password') {
                    account.checkPassword = false;
                } else {
                    alert('로그인 실패 횟수 초과. 잠시 후 다시 시도해 주세요.');
                }
                setAccount({
                    ...account,
                });
                handleClick();
            },
        });
    };

    function enterkey() {
        if (window.event.keyCode === 13) {
            console.log(window.event);
            //여기에 로그인 처리
            loginCheck();
        }
    }

    return (
        <>
            <div className={classes.paper} noValidate>
                <form className={classes.form} noValidate>
                    <CssTextField
                        error={!account.checkId}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id"
                        label="아이디"
                        name="id"
                        autoFocus
                        className={classes.input}
                        onChange={handleChange}
                        value={id}
                        onKeyDown={enterkey}
                    />
                    <CssTextField
                        error={!account.checkPassword}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        className={classes.input}
                        onChange={handleChange}
                        value={password}
                        onKeyDown={enterkey}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.login_button}
                        onClick={loginCheck}
                        onKeyDown={enterkey}
                    >
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
                    autoHideDuration={3000}
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

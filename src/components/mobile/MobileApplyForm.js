import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from './MobileStep1';
import Step2 from './MobileStep2';
import Step3 from './MobileStep3';
import { useApplyDispatch } from '../../context/applyContext';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        fontFamily: 'Noto Sans KR !important',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },

    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '32px',
    },
    button1: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    button2: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: '#ff6d70',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ed4e51',
        },
    },
}));

const steps = ['기본 정보', '지원 사항', '제출 확인'];

export default function Checkout() {
    /** 지원서 결과 메시지 */
    const [resultTxt, setResultTxt] = useState('');

    const [fieldsError, setFieldsError] = useState({});

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const dispatch = useApplyDispatch();
    const nameInput = useRef();
    const nameInput2 = useRef();

    const handleNext = () => {
        if (activeStep === 0) {
            dispatch({
                type: 'CHECK_STEP1',
                ok(fields) {
                    setFieldsError(fields);
                    setActiveStep(activeStep + 1);
                },
                err(fields) {
                    nameInput2.current.focus();
                    setFieldsError(fields);
                },
            });
        } else if (activeStep === 1) {
            dispatch({
                type: 'CHECK_STEP2',
                ok(fields) {
                    setFieldsError(fields);
                    setActiveStep(activeStep + 1);
                },
                err(fields) {
                    nameInput.current.focus();
                    setFieldsError(fields);
                },
            });
        } else if (activeStep === 2) {
            dispatch({
                type: 'FIREBASE_PATCH',
                ok(res) {
                    setResultTxt('지원해 주셔서 감사합니다! :)');
                },
                err(err) {
                    console.error(err);
                    setResultTxt(`
                        오류가 발생했어요... :'( \n
                        아래 코드를 카카오톡 플러스친구(@openyearround) 나 이메일() 로 문의 해 주시면 신속하게 처리해 드리겠습니다. \n
                        ${err}
                    `);
                },
            });
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <Step1 errors={fieldsError} nameInput2={nameInput2} />;
            case 1:
                return <Step2 errors={fieldsError} nameInput={nameInput} />;
            case 2:
                return <Step3 />;
            default:
                throw new Error('Unknown step');
        }
    }
    return (
        <React.Fragment>
            <main className={classes.layout}>
                <div className="kr">
                    <div className="header">
                        <Typography variant="h4" gutterBottom>
                            지원서
                        </Typography>
                    </div>

                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography style={{ whiteSpace: 'pre-line' }} variant="h5" gutterBottom>
                                    {resultTxt}
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button1}>
                                            뒤로가기
                                        </Button>
                                    )}
                                    <Button variant="contained" onClick={handleNext} className={classes.button2}>
                                        {activeStep === steps.length - 1 ? '제출하기' : '다음'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </div>
            </main>
        </React.Fragment>
    );
}

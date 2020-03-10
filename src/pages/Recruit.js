import React, { useState, createContext, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Button } from '@material-ui/core';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    AppointmentTooltip,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import '../styles/recruit.scss';
import RecruitCircle from '../components/RecruitCircle';
import recruitStep from '../datas/recruitStep.json';
import { Redirect } from 'react-router-dom';

const convertDate = (dateStr, additional = '') => {
    let dt = dateStr;
    dt = dt.replace('년 ', '-');
    dt = dt.replace('월 ', '-');
    dt = dt.replace('일 ', '');
    dt = dt.replace(dt.substr(dt.indexOf('('), dt.indexOf(')') + 1), '');
    dt += ' ';
    dt += additional;
    return dt;
};

let dates = [];
Object.keys(recruitStep).forEach(step => {
    dates.push({
        startDate:
            recruitStep[step].str_day === ''
                ? convertDate(recruitStep[step].end_day, recruitStep[step].time_range['s'])
                : convertDate(recruitStep[step].str_day, recruitStep[step].time_range['s']),
        endDate: convertDate(recruitStep[step].end_day, recruitStep[step].time_range['e']),
        title: recruitStep[step].title,
    });
});

const theme = createMuiTheme({ palette: { type: 'light', primary: red } });

const DateNavigatorComp = ({ children, style, ...restProps }) => (
    <DateNavigator.Overlay
        {...restProps}
        style={{
            ...style,
            fontFamily: 'Monsterrat',
        }}
    >
        {children}
    </DateNavigator.Overlay>
);

const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
        {...restProps}
        style={{
            ...style,
            backgroundColor: '#ff6d70',
            borderRadius: '8px',
            maxHeight: '24px',
            marginTop: '16px',
            fontFamily: 'Noto Sans KR, sans-serif',
            fontSize: '0.8em',
        }}
    >
        {children}
    </Appointments.Appointment>
);

const MonthViewComp = ({ children, style, ...restProps }) => (
    <MonthView.TimeTableCell
        {...restProps}
        style={{
            ...style,
            height: '64px',
            fontFamily: 'Monsterrat',
        }}
    >
        {children}>
    </MonthView.TimeTableCell>
);

const useStyles = makeStyles(theme => ({
    applybutton: {
        display: 'flex',
        maxWidth: '360px',
        height: '56px',
        margin: '0 auto',
        marginBottom: '5.5%',
        color: 'white',
        fontSize: '16px',
        backgroundColor: '#ff6d70',
        '&:hover': {
            backgroundColor: '#ff6d70',
        },
    },
}));

function Recruit(props) {
    const classes = useStyles();
    const [toApply, gotoApply] = useState(false);

    const handleApply = () => {
        gotoApply(true);
    };

    return (
        <div className="responsive">
            <div className="target">
                <div className="kr header-font">모집대상</div>
                <div className="kr desc-font">
                    학년, 학과, 학번, 성별, 국적 상관없이 웹 프로그래밍에 관심이 있고 열정을 쏟을 수 있는 사람이라면 누구나
                </div>
                <div className="background-cover recruit"></div>
            </div>
            <div className="target">
                <div className="kr header-font">2020 오픈이어라운드 모집절차</div>
                <div className="recruits-wrapper">
                    {Object.keys(recruitStep).map((step, key) =>
                        key < 4 ? (
                            <RecruitCircle
                                key={key}
                                step={step}
                                image={recruitStep[step].image}
                                str_day={recruitStep[step].str_day}
                                end_day={recruitStep[step].end_day}
                                title={recruitStep[step].title}
                            ></RecruitCircle>
                        ) : (
                            false
                        ),
                    )}
                </div>
                <div className="schedule-wrapper">
                    <div className="section-calendar">
                        <MuiThemeProvider theme={theme}>
                            <Paper>
                                <Scheduler data={dates}>
                                    <ViewState defaultCurrentDate={new Date()} />
                                    <MonthView timeTableCellComponent={MonthViewComp} />
                                    <Toolbar />
                                    <DateNavigator overlayComponent={DateNavigatorComp} />
                                    <TodayButton />
                                    <Appointments appointmentComponent={Appointment} />
                                    <AppointmentTooltip showCloseButton showOpenButton />
                                </Scheduler>
                            </Paper>
                        </MuiThemeProvider>
                    </div>
                    {/* <div className="section-list"></div> */}
                </div>
            </div>
            {toApply ? <Redirect push to="/apply"></Redirect> : false}
            <Button fullWidth variant="contained" color="primary" className={classes.applybutton} onClick={handleApply}>
                지금 지원하기
            </Button>
        </div>
    );
}

export default Recruit;

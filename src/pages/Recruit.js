import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    AppointmentTooltip,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import '../styles/recruit.scss';

const dummyDate = [
    {
        startDate: '2020-02-20 10:00',
        endDate: '2020-02-21 11:00',
        title: '면접 기간',
    },
    {
        startDate: '2020-02-10 18:00',
        endDate: '2020-02-10 19:30',
        title: '지원서 접수',
    },
    {
        startDate: '2020-02-24 00:00',
        endDate: '2020-02-24 23:00',
        title: '군자동 털림...ㅜㅜ',
        allDay: 1,
    },
];

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

function Recruit() {
    return (
        <div className="responsive">
            <div className="target">
                <div className="kr header-font">모집대상</div>
                <div className="kr desc-font">
                    학년, 학과, 학번, 성별, 인종(중국인 제외) 상관없이 웹 프로그래밍에 관심이 있고 열정이 쏟을 수 있는 사람이라면 누구나
                </div>
                <div className="background-cover recruit"></div>
            </div>
            <div className="target">
                <div className="kr header-font">2020 오픈이어라운드 모집절차</div>
                <div className="recruits-wrapper"></div>
                <div className="schedule-wrapper">
                    <div className="section-calendar">
                        <MuiThemeProvider theme={theme}>
                            <Paper>
                                <Scheduler data={dummyDate}>
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
        </div>
    );
}

export default Recruit;

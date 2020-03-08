import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { useApplyState, useApplyDispatch } from '../context/applyContext';

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '100%',
    },
}));

function Step1({ errors }) {
    const classes = useStyles();

    /**************** TextField value ***************/
    const state = useApplyState();
    const dispatch = useApplyDispatch();
    const { name, phonenumber, email, studentnumber, department, grade } = state.textInputs;

    const textFieldChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_TEXT',
            name,
            value,
        });
    }, []);
    /***************************************************/

    /**************** Select value ***************/
    const { gender, duty } = state.selects;
    const handleChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'SELECT',
            name,
            value,
        });
    }, []);

    /***************************************************/

    /******************* Date value *********************/
    const { birthday } = state.dateFields;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = useCallback(date => {
        setSelectedDate(date);
        dispatch({
            type: 'DATE',
            name: 'birthday',
            value: new Date(date).toLocaleDateString(),
        });
    }, []);
    /***************************************************/

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                기본 정보
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        error={errors.name}
                        onChange={textFieldChange}
                        value={name}
                        id="name"
                        name="name"
                        label="이름"
                        fullWidth
                        placeholder="ex)홍길동"
                    />
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12}>
                        <KeyboardDatePicker
                            error={errors.birthday}
                            variant="inline"
                            format="yyyy-MM-dd"
                            margin="normal"
                            id="date-picker-inline"
                            label="생년월일"
                            name="birthday"
                            value={birthday}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            fullWidth
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={12} sm={6}>
                    <FormControl error={errors.gender} className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">성별</InputLabel>
                        <Select id="demo-controlled-open-select" name="gender" value={gender} onChange={handleChange}>
                            <MenuItem value={'남자'}>남자</MenuItem>
                            <MenuItem value={'여자'}>여자</MenuItem>
                            <MenuItem value={'알리고 싶지 않음'}>알리고 싶지 않음</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl error={errors.duty} className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">군필여부</InputLabel>
                        <Select id="demo-controlled-open-select" name="duty" value={duty} onChange={handleChange}>
                            <MenuItem value={'미필'}>미필</MenuItem>
                            <MenuItem value={'군필 또는 해당사항 없음'}>군필 또는 해당사항 없음</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={errors.phonenumber}
                        onChange={textFieldChange}
                        value={phonenumber}
                        id="phonenumber"
                        name="phonenumber"
                        label="연락처"
                        fullWidth
                        placeholder="ex)01012345678"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={errors.email}
                        onChange={textFieldChange}
                        value={email}
                        id="email"
                        name="email"
                        label="이메일"
                        fullWidth
                        placeholder="ex)sju@sju.ac.kr"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        error={errors.studentnumber}
                        onChange={textFieldChange}
                        value={studentnumber}
                        id="studentnumber"
                        name="studentnumber"
                        label="학번"
                        fullWidth
                        placeholder="ex)20123456"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        error={errors.department}
                        onChange={textFieldChange}
                        value={department}
                        id="department"
                        name="department"
                        label="학과"
                        fullWidth
                        placeholder="ex)컴퓨터공학과"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        error={errors.grade}
                        onChange={textFieldChange}
                        value={grade}
                        id="grade"
                        name="grade"
                        label="학년/학기"
                        fullWidth
                        placeholder="ex)3학년 1학기"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

Step1.defaultProps = {
    errors: {
        name: false,
        birthday: false,
        gender: false,
        duty: false,
        phonenumber: false,
        email: false,
        studentnumber: false,
        department: false,
        grade: false,
    },
};

export default Step1;

import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '100%',
    },
}));

function Step1() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const [info, setInfo] = useState({
        gender: '',
        duty: '',
    });

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo({ ...info, [name]: value });
        console.log(info); //?????????????????????????????????????????????????????????????????????????????????????????
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                기본 정보
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="name" name="name" label="이름" fullWidth placeholder="ex)신동민" />
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="yyyy/MM/dd"
                            margin="normal"
                            id="date-picker-inline"
                            label="생년월일"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            fullWidth
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">성별</InputLabel>
                        <Select id="demo-controlled-open-select" name="gender" value={info.gender} onChange={handleChange}>
                            <MenuItem value={'남자'}>남자</MenuItem>
                            <MenuItem value={'여자'}>여자</MenuItem>
                            <MenuItem value={'알리고 싶지 않음'}>알리고 싶지 않음</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">군필여부</InputLabel>
                        <Select id="demo-controlled-open-select" name="duty" value={info.duty} onChange={handleChange}>
                            <MenuItem value={'미필'}>미필</MenuItem>
                            <MenuItem value={'군필 또는 해당사항 없음'}>군필 또는 해당사항 없음</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="phonenumber" name="phonenuber" label="연락처" fullWidth placeholder="ex)01012345678" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="email" name="email" label="이메일" fullWidth placeholder="ex)sju@sju.ac.kr" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="studentnumber" name="studentnumber" label="학번" fullWidth placeholder="ex)17011558" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="department" name="department" label="학과" fullWidth placeholder="ex)컴퓨터공학과" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="grade" name="grade" label="학년/학기" fullWidth placeholder="ex)3학년 1학기" />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Step1;

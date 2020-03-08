import React, { useState, useEffect } from 'react';
import {
    Button,
    Chip,
    IconButton,
    Menu,
    MenuItem,
    Fade,
    Grid,
    TextField,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { dbCtrl } from '../database/DBCtrl';
import '../styles/adminapplications.scss';

function AdminApplications() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = ({ currentTarget }, r) => {
        const stdNo = currentTarget.dataset.stdno;
        console.log(stdNo);
        setSelection({ stdNo: stdNo, ...applicants[stdNo] });
        setAnchorEl(null);
        console.log(selection);
    };

    const [applicants, setApplicants] = React.useState({});
    const [selection, setSelection] = React.useState({});
    useEffect(() => {
        dbCtrl.getAllApplications('2020-1', {
            onSuccess(res) {
                setApplicants(!res ? {} : res);
            },
        });
        dbCtrl.onApplicationUpdated('2020-1', {
            onSuccess(res) {
                setApplicants(!res ? {} : res);
            },
        });
    }, []);

    const [selectedStdNo, setSelectedStdNo] = React.useState('');

    const handleListItemClick = (event, stdNo) => {
        setSelectedStdNo(stdNo);
        setSelection({ stdNo: stdNo, ...applicants[stdNo] });
    };

    const adminLogout = () => {
        dbCtrl.userLogout({
            onSuccess() {
                document.location.replace('/');
            },
            onError() {},
        });
    };

    return (
        <div className="root-container">
            {console.log('check rerendering')}
            <div className="applicant-list">
                <div className="mobile-btn">
                    <IconButton
                        aria-label="showlist"
                        aria-controls="applicants"
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{ margin: '24px 0 8px -12px', fontFamily: 'Noto Sans KR, sans-serif' }}
                    >
                        {selection.stdNo ? selection.stdNo : '지원자를 선택해 주세요!'} {selection.name ? selection.name : ''}
                    </IconButton>
                    <Menu id="applicants" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                        {Object.keys(applicants).map((key, id) => (
                            <MenuItem onClick={handleClose} data-stdno={key} key={key}>
                                {key} {applicants[key].name}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="normal-list">
                    <List component="nav" aria-label="main mailbox folders">
                        {Object.keys(applicants).map((key, id) => (
                            <ListItem
                                button
                                data-stdno={key}
                                key={key}
                                selected={selectedStdNo === key}
                                onClick={event => handleListItemClick(event, key)}
                            >
                                <ListItemText primary={applicants[key].name} secondary={key} />
                            </ListItem>
                        ))}
                    </List>
                </div>
                <Button onClick={adminLogout} style={{ float: 'right' }}>
                    관리자 로그아웃
                </Button>
            </div>

            <div className="appdatas">
                <Typography variant="h6" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                    기본 정보
                </Typography>
                <Grid container spacing={2} style={{ margin: '0 0 36px 0' }}>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.name ? selection.name : ''}
                            id="v-name"
                            label="이름"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value={selection.birthday ? selection.birthday : ''}
                            id="v-birthday"
                            label="생년월일"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value={selection.gender ? selection.gender : ''}
                            id="v-gender"
                            label="성별"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            value={selection.phone ? selection.phone : ''}
                            id="v-phone"
                            label="연락처"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            value={selection.email ? selection.email : ''}
                            id="v-email"
                            label="이메일"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            value={selection.stdNo ? selection.stdNo : ''}
                            id="v-stdno"
                            label="학번"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            value={selection.major ? selection.major : ''}
                            id="v-major"
                            label="학과"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            value={selection.grade ? selection.grade : ''}
                            id="v-grade"
                            label="학년/학기"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Typography variant="h6" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                    자기 소개
                </Typography>
                <Grid container spacing={2} style={{ margin: '0 0 36px 0' }}>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.motive ? selection.motive : ''}
                            id="v-motive"
                            label="지원 동기"
                            multiline
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.introduce ? selection.introduce : ''}
                            id="v-introduce"
                            label="자기 소개"
                            multiline
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.myWish ? selection.myWish : ''}
                            id="v-mywish"
                            label="만들고 싶은 웹 서비스"
                            multiline
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Typography variant="h6" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                    프로젝트 경험
                </Typography>
                <Grid container spacing={2} style={{ margin: '0 0 36px 0' }}>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.projName ? selection.projName : ''}
                            id="v-projname"
                            label="프로젝트 이름"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.projSummary ? selection.projSummary : ''}
                            id="v-projsummary"
                            label="프로젝트 요약"
                            multiline
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.projDetail ? selection.projDetail : ''}
                            id="v-projdetail"
                            label="프로젝트 상세 설명"
                            multiline
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {!!selection.projTechStacks && Array.isArray(JSON.parse(selection.projTechStacks))
                            ? JSON.parse(selection.projTechStacks).map((value, id) => <Chip label={value} key={id} style={{ margin: 4 }} />)
                            : false}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.projGithub ? selection.projGithub : ''}
                            id="v-projgithub"
                            label="GitHub"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            href="www.github.com"
                            value={selection.projOtherLink ? selection.projOtherLink : ''}
                            id="v-projotherlink"
                            label="추가 링크"
                            style={{ margin: 6 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default AdminApplications;

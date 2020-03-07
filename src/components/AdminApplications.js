import React, { useState, Fragment, useEffect } from 'react';
import { Chip, IconButton, Menu, MenuItem, Fade, Grid, TextField, Typography } from '@material-ui/core';
import { FormatListBulleted } from '@material-ui/icons';
import { dbCtrl } from '../database/DBCtrl';

function AdminApplications() {
    const drawerWidth = 240;
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

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [applicants, setApplicants] = React.useState({});
    const [selection, setSelection] = React.useState({});
    useEffect(() => {
        dbCtrl.getAllApplications('2020-1', {
            onSuccess(res) {
                setApplicants(res);
            },
        });
    }, []);

    const selectApplicant = selection => {};

    return (
        <>
            {console.log('check rerendering')}
            <div>
                <IconButton aria-label="showlist" aria-controls="applicants" aria-haspopup="true" onClick={handleClick}>
                    <FormatListBulleted />
                </IconButton>
                <Menu id="applicants" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                    {Object.keys(applicants).map((key, id) => (
                        <MenuItem onClick={handleClose} data-stdno={key} key={key}>
                            {key} {applicants[key].name}
                        </MenuItem>
                    ))}
                </Menu>
            </div>

            <div>
                <Typography variant="subtitle1" gutterBottom>
                    기본 정보
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.name ? selection.name : ''}
                            id="v-name"
                            label="이름"
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" gutterBottom>
                    자기 소개
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.motive ? selection.motive : ''}
                            id="v-motive"
                            label="지원 동기"
                            multiline
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" gutterBottom>
                    프로젝트 경험
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.projName ? selection.projName : ''}
                            id="v-projname"
                            label="프로젝트 이름"
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
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
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {Array.isArray(selection.projTechStacks)
                            ? selection.projTechStacks.map((value, id) => <Chip label={value} key={id} style={{ margin: 4 }} />)
                            : false}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.projGithub ? selection.projGithub : ''}
                            id="v-projgithub"
                            label="GitHub"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={selection.projOtherLink ? selection.projOtherLink : ''}
                            id="v-projotherlink"
                            label="추가 링크"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default AdminApplications;

import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../styles/apply_form.scss';
import { techskills, testdata } from '../datas/technicalSkills.json';
import { useApplyState, useApplyDispatch } from '../context/applyContext';

const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            'min-height': '100px',
            display: 'block',
        },
    },
})(TextField);
const CssTextField2 = withStyles({
    root: {
        '& .MuiInputBase-root': {
            'min-height': '200px',
            display: 'block',
        },
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

function Step2() {
    const classes = useStyles();
    /**************** TextField value ***************/
    const state = useApplyState();
    const dispatch = useApplyDispatch();
    const { project_name, project_summary, github, subdata } = state.textInputs;
    const { form0, form1, form2, desc } = state.fieldInputs;
    const tech = state.tech.stack;
    console.log(tech);

    const textFieldChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_TEXT',
            name,
            value,
        });
    }, []);

    const fieldChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_FIELD',
            name,
            value,
        });
    }, []);

    const techChange = useCallback(e => {
        const { value } = e.target;
        dispatch({
            type: 'TECH',
            value,
        });
    }, []);
    /***************************************************/

    return (
        <React.Fragment>
            <Paper className={classes.paper} variant="outlined">
                <Typography variant="h6" gutterBottom>
                    자기소개
                </Typography>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <CssTextField
                            onChange={fieldChange}
                            value={form0}
                            className="form"
                            id="form0"
                            name="form0"
                            label="지원 동기를 적어주세요."
                            multiline
                            variant="outlined"
                            fullWidth
                            placeholder="지원하게된 계기가 무엇인가요?"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField
                            onChange={fieldChange}
                            value={form1}
                            id="form1"
                            name="form1"
                            label="자기소개를 해주세요."
                            multiline
                            variant="outlined"
                            fullWidth
                            placeholder="오픈이어라운드 사람들에게 당신에 대해 이야기해주세요."
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CssTextField
                            onChange={fieldChange}
                            value={form2}
                            id="form2"
                            name="form2"
                            label="평소에 만들고 싶었던 웹 서비스가 있나요?"
                            multiline
                            variant="outlined"
                            fullWidth
                            placeholder="자유롭게 적어주세요."
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper} variant="outlined">
                <Typography variant="h6" gutterBottom>
                    프로젝트 경험을 적어주세요. 없으셔도 괜찮습니다!
                </Typography>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <TextField
                            onChange={textFieldChange}
                            value={project_name}
                            id="project_name"
                            name="project_name"
                            label="프로젝트 이름이 무엇인가요?"
                            variant="outlined"
                            multiline
                            fullWidth
                            placeholder="ex)"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={textFieldChange}
                            value={project_summary}
                            id="project_summary"
                            name="project_summary"
                            label="프로젝트를 한줄로 설명해주세요."
                            multiline
                            variant="outlined"
                            fullWidth
                            placeholder="ex)"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CssTextField2
                            onChange={fieldChange}
                            value={desc}
                            id="desc"
                            name="desc"
                            label="어떤 프로젝트 상세하게 알려주세요"
                            multiline
                            variant="outlined"
                            fullWidth
                            placeholder="ex)"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="techstack"
                            onChange={techChange}
                            value={tech}
                            name="tech"
                            options={techskills}
                            getOptionLabel={option => option}
                            filterSelectedOptions
                            freeSolo
                            renderInput={params => (
                                <TextField
                                    name="tech"
                                    {...params}
                                    fullWidth
                                    variant="outlined"
                                    label="어떤 기술스택을 사용했나요?"
                                    placeholder="ex) C C++ JAVA"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={textFieldChange}
                            value={github}
                            id="github"
                            name="github"
                            label="github 같은 저장소가 있다면 알려주세요."
                            multiline
                            variant="outlined"
                            fullWidth
                            placeholder="ex)"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={textFieldChange}
                            value={subdata}
                            id="subdata"
                            name="subdata"
                            label="추가로 보여주고 싶으신 자료를 구글드라이브 링크로 올려주세요."
                            multiline
                            variant="outlined"
                            fullWidth
                            placeholder="ex)"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

export default Step2;

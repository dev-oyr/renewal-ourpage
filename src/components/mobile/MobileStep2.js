import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import techSkills from '../../datas/technicalSkills.json';
import { useApplyState, useApplyDispatch } from '../../context/applyContext';

const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            'min-height': '100px',
            display: 'block',
        },
        '& label.Mui-focused': {
            color: '#666666',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#666666',
            },
        },
    },
})(TextField);
const CssTextField2 = withStyles({
    root: {
        '& .MuiInputBase-root': {
            'min-height': '200px',
            display: 'block',
        },
        '& label.Mui-focused': {
            color: '#666666',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#666666',
            },
        },
    },
})(TextField);
const CssTextField1 = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#666666',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#666666',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
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

function Step2({ errors, nameInput }) {
    /**************** TextField value ***************/
    const state = useApplyState();
    const dispatch = useApplyDispatch();
    const { project_name, project_summary, github, subdata } = state.textInputs;
    const { form0, form1, form2, desc } = state.fieldInputs;
    const tech = state.tech;

    const textFieldChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_TEXT',
            name,
            value,
        });
    }, []);

    const fieldChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_FIELD',
            name,
            value,
        });
    }, []);

    const techChange = useCallback((e, v) => {
        console.log(v);
        dispatch({
            type: 'TECH',
            value: v,
        });
    }, []);
    /***************************************************/

    return (
        <React.Fragment>
            <div className="headerText2">
                <span>
                    <Typography variant="h6" gutterBottom display="inline">
                        자기소개
                    </Typography>
                </span>
                <span id="nec"> *</span>
            </div>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <CssTextField
                        error={errors.form0}
                        onChange={fieldChange}
                        value={form0}
                        className="form"
                        id="form0"
                        name="form0"
                        label="지원 동기"
                        multiline
                        variant="outlined"
                        fullWidth
                        placeholder="지원하게된 계기가 무엇인가요?"
                        inputRef={nameInput}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField
                        error={errors.form1}
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

            <div className="headerText3">
                <Typography className="optional" variant="h6" gutterBottom>
                    프로젝트 경험
                </Typography>
            </div>

            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <CssTextField1
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
                    <CssTextField1
                        onChange={textFieldChange}
                        value={project_summary}
                        id="project_summary"
                        name="project_summary"
                        label="프로젝트를 한줄로 설명해주세요."
                        multiline
                        variant="outlined"
                        fullWidth
                        placeholder="미대생들을 위한 작품 거래 플랫폼"
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
                        placeholder="상세 업무 및 성과"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        multiple
                        id="techstack"
                        name="tech"
                        onChange={techChange}
                        value={tech}
                        options={techSkills.techskills}
                        getOptionLabel={(option) => option}
                        filterSelectedOptions
                        freeSolo
                        renderInput={(params) => (
                            <CssTextField1
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
                    <CssTextField1
                        onChange={textFieldChange}
                        value={github}
                        id="github"
                        name="github"
                        label="저장소 링크가 있다면 적어주세요"
                        multiline
                        variant="outlined"
                        fullWidth
                        placeholder="https://github.com/project"
                    />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField1
                        onChange={textFieldChange}
                        value={subdata}
                        id="subdata"
                        name="subdata"
                        label="포토폴리오 링크를 올려주세요."
                        multiline
                        variant="outlined"
                        fullWidth
                        placeholder="https://drive.google.com/file"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

Step2.defaultProps = {
    errors: { form1: false, form0: false },
};

export default Step2;

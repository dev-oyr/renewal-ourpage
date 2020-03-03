import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../styles/apply_form.scss';

const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            'min-height': '100px',
            display: 'block',
        },
    },
})(TextField);

function Step2() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                2단계-지원 사항
            </Typography>

            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <CssTextField
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
                        id="form3"
                        name="form3"
                        label="평소에 만들고 싶었던 웹 서비스가 있나요?"
                        multiline
                        variant="outlined"
                        fullWidth
                        placeholder="자유롭게 적어주세요."
                    />
                </Grid>

                <Grid item xs={12}>
                    <CssTextField
                        id="form2"
                        name="form2"
                        label="프로젝트 경험이 있으신가요? 어떤 프로젝트였나요?"
                        multiline
                        variant="outlined"
                        fullWidth
                        placeholder="개인이든 팀이든 상관없습니다! 없으셔도 괜찮습니다!"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Step2;

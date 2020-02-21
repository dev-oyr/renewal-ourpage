import React from 'react';
import '../styles/cardpage.scss';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import activities from '../datas/activities.json';

function CardPage({ match }) {
    const { title } = match.params;
    const content = activities[title].content;
    const member = activities[title].member;
    const day = activities[title].day;
    const tech = activities[title].tech;

    const useStyles = makeStyles(theme => ({
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));
    const classes = useStyles();

    return (
        <div className="cardpage">
            <div className="responsive">
                <div className="cardPage-header">
                    <span className="cardPage-header-avator">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                    </span>
                    <span className="cardPage-header-text">
                        <div>
                            <span className="en member">{day} </span>
                            <span className="member">{member}</span>
                        </div>

                        <div className="kr header-font">{title}</div>
                    </span>
                </div>

                <div className="cardPage-content">
                    <div className="kr header">프로젝트 간단소개</div>
                    <div className="kr desc-font">{content}</div>
                </div>

                <div className="cardPage-content">
                    <div className="kr header">사용 스택</div>
                    <div className="kr desc-font">{tech}</div>
                </div>

                <div className="cardPage-content">
                    <div className="kr header">데모 이미지</div>
                    <div className="kr desc-font"></div>
                </div>

                <div className="cardPage-content">
                    <div className="kr header">저장 주소</div>
                    <div className="kr desc-font"></div>
                </div>
            </div>
        </div>
    );
}

export default CardPage;

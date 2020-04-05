import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const NavMenuItem = React.memo(function NavMenuItem({ linkTo, children }) {
    return (
        <div className="item">
            <Link to={linkTo}>{children}</Link>
        </div>
    );
});

function Hambuger() {
    const classes = useStyles();
    const [state, setState] = useState({
        right: false,
    });
    const toggleDrawer = (side, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = (side) => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
            <List>
                <ListItem>
                    <div className="Hamburger_header">
                        {/* 신입부원 <br></br> 모집중입니다 :) */}
                        모집 준비중...
                    </div>
                </ListItem>
                <ListItem>
                    <NavMenuItem linkTo="/apply">
                        <div className="Hamburger_applyBox">
                            <span className="Hamburger_apply">지원하러가기</span>
                        </div>
                    </NavMenuItem>
                </ListItem>
            </List>
            <Divider />
            <List>
                <div className="Hamburger_list">
                    <NavMenuItem linkTo="/">
                        <ListItem button>
                            <span>소개</span>
                        </ListItem>
                    </NavMenuItem>

                    <NavMenuItem linkTo="/recruit">
                        <ListItem button>
                            <span>모집안내</span>
                        </ListItem>
                    </NavMenuItem>
                    <NavMenuItem linkTo="/faq/01">
                        <ListItem button>
                            <span>FAQ</span>
                        </ListItem>
                    </NavMenuItem>
                    <NavMenuItem linkTo="/login">
                        <ListItem button>
                            <span>로그인</span>
                        </ListItem>
                    </NavMenuItem>
                </div>
            </List>
        </div>
    );

    return (
        <>
            <MdMenu size={30} onClick={toggleDrawer('right', true)}></MdMenu>

            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </>
    );
}

export default React.memo(Hambuger);

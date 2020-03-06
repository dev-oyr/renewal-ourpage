import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../components/TabPanel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const checkAdmin = () => {
    const session = JSON.parse(sessionStorage.getItem('currentUser'));
    if (session === null) return false;
    return session.stdno === 'admin' && session.name === '오픈이어라운드 관리자, 건들지 마세요';
};

function Admins() {
    const [redirect, setRedirect] = useState(false);
    if (!checkAdmin()) document.location.replace('/');

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {redirect ? <Redirect push to="/"></Redirect> : false}
            <div className="responsive">
                <Tabs value={value} indicatorColor="primary" onChange={handleChange}>
                    <Tab label="지원서 조회" />
                    <Tab label="회원 관리" />
                    <Tab label="기타 등등" />
                </Tabs>
                <TabPanel value={value}></TabPanel>
            </div>
        </>
    );
}

export default Admins;

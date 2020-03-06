import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../components/TabPanel';

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

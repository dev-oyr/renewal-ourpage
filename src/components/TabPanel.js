import React from 'react';
import AdminApplications from './AdminApplications';
import AdminMembers from './AdminMembers';

function TabPanel({ value, ...children }) {
    if (value === 0) return <AdminApplications></AdminApplications>;
    else return <AdminMembers></AdminMembers>;
}

export default TabPanel;

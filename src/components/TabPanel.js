import React from 'react';
import AdminApplications from './AdminApplications';
import AdminMembers from './AdminMembers';

function TabPanel({ value, ...children }) {
    return <AdminApplications></AdminApplications>;
    // <AdminMembers></AdminMembers>;
}

export default TabPanel;

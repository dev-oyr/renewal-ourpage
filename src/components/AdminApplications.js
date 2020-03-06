import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Fade } from '@material-ui/core';
import { FormatListBulleted } from '@material-ui/icons';
import { dbCtrl } from '../database/DBCtrl';

function AdminApplications() {
    const drawerWidth = 240;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <IconButton aria-label="showlist" aria-controls="applicants" aria-haspopup="true" onClick={handleClick}>
                <FormatListBulleted />
            </IconButton>
            <Menu id="applicants" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                {dbCtrl.getAllApplications('2020-1', {
                    onSuccess(res) {
                        Object.keys(res).map((key, id) => (
                            <MenuItem onClick={handleClose} key={id}>
                                {key} {res[key].name}
                            </MenuItem>
                        ));
                    },
                })}
            </Menu>
        </>
    );
}

export default AdminApplications;

import React from 'react';
import MobileApplyForm from '../components/mobile/MobileApplyForm';
import '../styles/mobile_apply.scss';
import { ApplyProvider } from '../context/applyContext';
import { Redirect } from 'react-router-dom';
import { dbCtrl } from '../database/DBCtrl';

function MobileApply() {
    return (
        <>
            {!dbCtrl.isApplyAvailable(false) ? (alert('죄송하지만, 접수 기간이 아닙니다!'), (<Redirect to="/" />)) : false}
            <ApplyProvider>
                <MobileApplyForm />
            </ApplyProvider>
        </>
    );
}

export default MobileApply;

import React from 'react';
import ApplyForm from '../components/ApplyForm';
import '../styles/apply.scss';
import { ApplyProvider } from '../context/applyContext';
import { Redirect } from 'react-router-dom';
import { dbCtrl } from '../database/DBCtrl';

function Apply() {
    return (
        <>
            {!dbCtrl.isApplyAvailable(true) ? (alert('죄송하지만, 접수 기간이 아닙니다!'), (<Redirect to="/" />)) : false}
            <ApplyProvider>
                <div className="responsive">
                    <div className="kr header-font">지원하기</div>
                    <ApplyForm />
                </div>
            </ApplyProvider>
        </>
    );
}

export default React.memo(Apply);

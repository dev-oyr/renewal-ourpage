import React from 'react';
import ApplyForm from '../components/ApplyForm';
import '../styles/apply.scss';
import { ApplyProvider } from '../context/applyContext';

function Apply() {
    return (
        <ApplyProvider>
            <div className="responsive">
                <div className="kr header-font">지원하기</div>
                <ApplyForm />
            </div>
        </ApplyProvider>
    );
}

export default Apply;

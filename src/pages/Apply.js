import React from 'react';
import ApplyForm from '../components/ApplyForm';
import '../styles/apply.scss';

function Apply() {
    return (
        <div className="responsive">
            <div className="kr header-font">지원하기</div>
            <ApplyForm />
        </div>
    );
}

export default Apply;

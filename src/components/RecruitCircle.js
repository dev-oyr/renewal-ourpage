import React from 'react';
import '../styles/recruit_circle.scss';
import { FiChevronsRight } from 'react-icons/fi';

function RecruitCircle({ step, image, title, str_day, end_day }) {
    const img = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
    };
    const right = {
        paddingTop: '9%',
    };

    return (
        <>
            <div className="circle-section">
                <div className="circle-img" style={img}></div>
                <div className="day">
                    <div className="kr header-font">{str_day}</div>

                    <div className="kr header-font">
                        {str_day !== '' ? '  ~  ' : ''}
                        {end_day}
                    </div>
                </div>

                <div className="kr desc-font">{title}</div>
            </div>

            {step !== 'Step4' ? <FiChevronsRight style={right} color={'#b9b9b9'} size={'3%'}></FiChevronsRight> : <></>}
        </>
    );
}

export default RecruitCircle;

import React from 'react';
import '../styles/cardpage.scss';
import activities from '../datas/activities.json';

function CardPage({ match }) {
    // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.

    const { title } = match.params;
    console.log(activities[title]);
    ///const content = activities[title];

    return (
        <div className="section3">
            <div className="responsive">
                <p>Card view</p>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default CardPage;

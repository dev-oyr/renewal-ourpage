import React from 'react';
import '../styles/cardpage.scss';
import activities from '../datas/activities.json';

function CardPage({ match }) {
    const { title } = match.params;
    const content = activities[title].content;

    return (
        <div className="section3">
            <div className="responsive">
                <p>Card view</p>
                <h1>{title}</h1>
                <h1>{content}</h1>
            </div>
        </div>
    );
}

export default CardPage;

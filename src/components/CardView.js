import React from 'react';
import '../styles/cardview.scss';
import Zoom from 'react-reveal/Zoom';

function CardHeader({ image }) {
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
        <header style={style} id={image} className="card-header">
            <h4 className="card-header--title">OYR</h4>
        </header>
    );
}
function Button() {
    return (
        <button className="button button-primary">
            <i className="fa fa-chevron-right"></i> <span className="more en">more</span>
        </button>
    );
}

function CardBody({ title, contents, day }) {
    return (
        <div className="card-body">
            <p className="date en">{day}</p>

            <h2 className="title kr">{title}</h2>

            <p className="body-content kr">{contents}</p>

            <Button />
        </div>
    );
}

function Card({ title, contents, day }) {
    return (
        <Zoom>
            <article className="card">
                <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'} />
                <CardBody title={title} contents={contents} day={day} />
            </article>
        </Zoom>
    );
}

export default Card;

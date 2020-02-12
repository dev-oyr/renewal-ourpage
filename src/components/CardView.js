import React from 'react';
import '../styles/cardview.scss';

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
            <i className="fa fa-chevron-right"></i> 자세히
        </button>
    );
}

function CardBody({ title, contents }) {
    return (
        <div className="card-body">
            <p className="date">OYR 7th</p>

            <h2 className="header-font en">{title}</h2>

            <p className="body-content desc-font kr">{contents}</p>

            <Button />
        </div>
    );
}

function Card({ title, contents }) {
    return (
        <article className="card">
            <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'} />
            <CardBody title={title} contents={contents} />
        </article>
    );
}

export default Card;

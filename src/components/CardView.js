import React from 'react';
import '../styles/cardview.scss';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';

function CardHeader({ image }) {
    var style = {
        backgroundImage: 'url(' + image + ')',
        backgroundPosition: 'center',
        backgroundColor: 'white',
    };
    return (
        <header style={style} id={image} className="card-header">
            <h4 className="card-header--title">OYR</h4>
        </header>
    );
}
function Button({ title }) {
    return (
        <button className="button button-primary">
            <Link to={`/cardpage/${title}`}>
                <FaAngleRight color={'#ff6d70'}></FaAngleRight> <span className="more en">more</span>
            </Link>
        </button>
    );
}

function CardBody({ title, contents, day }) {
    return (
        <div className="card-body">
            <p className="date en">{day}</p>

            <h2 className="title kr">{title}</h2>

            <p className="body-content kr">{contents}</p>

            <Button title={title} />
        </div>
    );
}

function Card({ title, contents, day, id, image }) {
    return (
        <article className="card">
            <CardHeader image={image} />
            <CardBody title={title} contents={contents} day={day} id={id} />
        </article>
    );
}

export default Card;

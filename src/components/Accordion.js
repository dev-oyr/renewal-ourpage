import React from 'react';
import FAQData from '../datas/FAQData.json';
import '../styles/accordion.scss';

function AccordionItem({ opened, title, paragraph }) {
    return (
        <div
            {...{
                className: `accordion-item, ${opened && 'accordion-item--opened'}`,
                onClick: () => {
                    console.log('s');
                    opened = !opened;
                },
            }}
        >
            <div className="accordion-item__line">
                <h3 className="accordion-item__title">{title}</h3>
                <span className="accordion-item__icon" />
            </div>
            <div className="accordion-item__inner">
                <div className="accordion-item__content">
                    <p className="accordion-item__paragraph">{paragraph}</p>
                </div>
            </div>
        </div>
    );
}

function Accordion({ opened, title, paragraph }) {
    return (
        <div className="wrapper">
            <ul className="accordion-list">
                {Object.keys(FAQData).map(() => {
                    return (
                        <li {...{ className: 'accordion-list__item' }}>
                            <AccordionItem title={title} paragraph={paragraph} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Accordion;

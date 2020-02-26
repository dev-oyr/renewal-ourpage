import React, { useState } from 'react';
import FAQData from '../datas/FAQData.json';
import '../styles/accordion.scss';

function AccordionItem({ paragraph, title }) {
    const [opened, setOpened] = useState(false);
    return (
        <div
            {...{
                className: `accordion-item, ${opened && 'accordion-item--opened'}`,
                onClick: () => {
                    setOpened(!opened); //디드 마운트
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
function Accordion({ match }) {
    return (
        <div className="wrapper">
            <ul className="accordion-list">
                {Object.keys(FAQData.data).map((k, idx) => {
                    return (
                        <li key={idx} {...{ className: 'accordion-list__item' }}>
                            <AccordionItem title={FAQData.data[k].title} paragraph={FAQData.data[k].paragraph} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Accordion;

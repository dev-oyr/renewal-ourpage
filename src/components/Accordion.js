import React from 'react';
import FAQData from '../datas/FAQData.json';
import '../styles/accordion.scss';

class Accordion extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <ul className="accordion-list">
                    {Object.keys(FAQData.data).map(k => {
                        return (
                            <li {...{ className: 'accordion-list__item' }}>
                                <AccordionItem title={FAQData.data[k].title} paragraph={FAQData.data[k].paragraph} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

class AccordionItem extends React.Component {
    state = {
        opened: false, //상태가 변해야 하는 같이기 때문에 state이고 그래서 클래스컴포넌트를 쓴다
    };

    render() {
        const {
            props: { paragraph, title },
            state: { opened },
        } = this;

        return (
            <div
                {...{
                    className: `accordion-item, ${opened && 'accordion-item--opened'}`,
                    onClick: () => {
                        this.setState({ opened: !opened }); //디드 마운트
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
}

export default Accordion;

import React from 'react';

function Wrapper({ children }) {
    const style = {
        minHeight: '70vh',
        marginTop: '120px',
    };

    return <div style={style}>{children}</div>;
}

export default Wrapper;

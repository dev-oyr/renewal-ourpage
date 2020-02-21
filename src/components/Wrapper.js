import React from 'react';

function Wrapper({ children }) {
    const style = {
        marginTop: '120px',
        minHeight: '70vh',
    };

    return <div style={style}>{children}</div>;
}

export default Wrapper;

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Main from '../pages/Main';

const ScrollToTop = ({ children, location: { pathname } }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return children;
};
export default withRouter(ScrollToTop);
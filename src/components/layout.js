import React from 'react';

import Header from './header';
import Footer from './footer';
import LayoutStyles from '../styles/layout.module.scss';
const Layout = ({ children }) => {
    return (
        <div className={LayoutStyles.layout}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

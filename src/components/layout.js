import React from 'react';

import Header from './Header';
import Footer from './Footer';
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

import React from 'react';
import { Link } from 'gatsby';

import '../global/styles.scss';
import HeaderStyles from '../styles/header.module.scss';

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      <header className={HeaderStyles.headerWrapper}>
        <h1 className={HeaderStyles.logo}>
          Chris<span className={HeaderStyles.greenAccent}>DeMars</span>
        </h1>
        <nav>
          <ul className={HeaderStyles.navItems}>
            <li className={HeaderStyles.navItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={HeaderStyles.navItem}>
              <Link to="/about">About</Link>
            </li>
            <li className={HeaderStyles.navItem}>
              <Link to="/blog">Blog</Link>
            </li>
            {/* <li className={HeaderStyles.navItem}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className={HeaderStyles.navItem}>
              <Link to="/events">Events</Link>
            </li>
            <li className={HeaderStyles.navItem}>
              <Link to="/resume">Resume</Link>
            </li> */}
            <li className={HeaderStyles.navItem}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

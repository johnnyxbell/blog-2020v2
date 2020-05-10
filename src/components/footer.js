import React from 'react';
import FooterStyles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footerWrapper}>
        <div className="copyright">&copy; Chris DeMars 2020</div>
        <div className="social-links">
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

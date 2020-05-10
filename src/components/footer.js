import React from 'react';
import FooterStyles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footerWrapper}>
        <div className={FooterStyles.copyright}>&copy; Chris DeMars 2020</div>
        <div className={FooterStyles.socialLinks}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/chrisdemars/"
                target="_blank"
                norel="noreferer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/saltnburnem"
                target="_blank"
                norel="noreferer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

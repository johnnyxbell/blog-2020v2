import React from 'react';
import { Link } from 'gatsby';
import HireStyles from '../styles/hire.module.scss';

const Hire = () => {
  return (
    <section className={HireStyles.hireSection}>
      <div className={HireStyles.hireWrapper}>
        <h2>Hire Me!</h2>
        <p>
          Are you looking for an accessibility specialist to create an
          experience that is usable for everyone? What about someone that can
          architect the user experience? Maybe a developer with amazing CSS
          chops? Lets work together. I'd love to see what you having going on!
        </p>
        <Link to="/contact" className={HireStyles.btn}>
          Get in touch!
        </Link>
      </div>
    </section>
  );
};

export default Hire;

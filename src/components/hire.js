import React from 'react';
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
        <button className={HireStyles.btn}>Get in touch!</button>
      </div>
    </section>
  );
};

export default Hire;

import React from 'react';
import '../global/styles.scss';

import Header from '../components/header';
import Hire from '../components/hire';
import Footer from '../components/footer';

const About = () => {
  return (
    <section>
      <div className="test-wrapper">
        <Header />
        <h1>Hey there, this is the about section!</h1>
        <Hire />
        <Footer />
      </div>
    </section>
  );
};

export default About;

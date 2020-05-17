import React from 'react';
import '../global/styles.scss';

import Hire from '../components/Hire';
import Layout from '../components/layout';

import AboutStyles from '../styles/about.module.scss';

const About = () => {
  return (
    <Layout>
      <section className={AboutStyles.aboutMe}>
        <div className={AboutStyles.aboutWrapper}>
          <h1>A Bit About Me!</h1>
          <p>
            My name is Chris DeMars and I am a front end developer & ux
            architect. My passion for the Web and the technologies that
            accompany it are ever growing. I love to look at code and great
            design and figure out how it all works. The common goal I try to
            achieve is to create, develop, and improve Web sites/applications
            making them not only visually appealing, but also great in function
            and usability. Teaching, learning, and problem solving are also
            characteristics I enjoy taking on, especially when it involves the
            Web. I am motivated to produce excellent results and expand my
            knowledge for my passion along the way. I also have a strong passion
            for usability, accessibility, and performance within the Web space
            and care about clean, well crafted code.
          </p>
        </div>
      </section>
      <Hire />
    </Layout>
  );
};

export default About;

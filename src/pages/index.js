import React from 'react';
import '../global/styles.scss';

import SEO from '../components/seo';
import Hero from '../components/Hero.js';
import RecentWork from '../components/RecentWork.js';
import UpcomingEvents from '../components/UpcomingEvents.js';
import Hire from '../components/Hire.js';
import Layout from '../components/Layout.js';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RecentWork />
      <UpcomingEvents />
      <Hire />
    </Layout>
  );
};

export default Index;

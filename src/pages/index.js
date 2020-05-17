import React from 'react';
import '../global/styles.scss';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import RecentWork from '../components/RecentWork';
import UpcomingEvents from '../components/UpcomingEvents';
import Hire from '../components/Hire';
import Layout from '../components/Layout';

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

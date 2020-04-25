import React from 'react';
import '../global/styles.scss';

import SEO from '../components/seo';
import Header from '../components/header';
import Hero from '../components/hero';
import RecentWork from '../components/RecentWork';
import UpcomingEvents from '../components/UpcomingEvents';
import Hire from '../components/hire';
import Footer from '../components/footer';
import Layout from '../components/layout';

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

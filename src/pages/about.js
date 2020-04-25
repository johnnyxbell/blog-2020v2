import React from 'react';
import '../global/styles.scss';

import Hire from '../components/hire';
import Layout from '../components/layout';

const About = () => {
    return (
        <Layout>
            <h1>Hey there, this is the about section!</h1>
            <Hire />
        </Layout>
    );
};

export default About;

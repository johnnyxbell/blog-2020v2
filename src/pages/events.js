import React from 'react';

import Layout from '../components/layout';
import conferences from '../data/conferences.json';

const events = () => (
  <Layout>
    {conferences.map((conference) => (
      <>
        {/* <img src={conference.image} alt={conference.title} /> */}
        <h1>{conference.title}</h1>
        <h2>{conference.date}</h2>
        <a href={conference.link}>{conference.title}</a>
      </>
    ))}
  </Layout>
);

export default events;

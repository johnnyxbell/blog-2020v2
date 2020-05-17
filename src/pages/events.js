import React from 'react';

import Layout from '../components/Layout';
import conferences from '../data/conferences.json';

const Events = () => (
  <Layout>
    {conferences.slice(0, 3).map((conference) => (
      <>
        {/* <img src={conference.image} alt={conference.title} /> */}
        <h1>{conference.title}</h1>
        <h2>{conference.date}</h2>
        <a href={conference.link}>{conference.title}</a>
      </>
    ))}
  </Layout>
);

export default Events;

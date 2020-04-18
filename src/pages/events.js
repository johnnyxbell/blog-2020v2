import React from 'react';

import Layout from '../components/layout';
import events from '../data/events.json';

export default () => (
  <Layout>
    {events.map((event) => (
      <h1>{event.name}</h1>
    ))}
  </Layout>
);

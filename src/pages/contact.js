import React from 'react';
import '../global/styles.scss';
import '../styles/contact.module.scss';

import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <h1>Contact me</h1>
      <form name="contact" method="post" data-netlify="true">
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </Layout>
  );
};

export default Contact;

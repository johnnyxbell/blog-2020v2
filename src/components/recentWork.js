import React from 'react';
import RecentWorkStyles from '../styles/RecentWork.module.scss';

import work from '../data/work.json';

const RecentWork = () => {
  return (
    <section className={RecentWorkStyles.recentWorkSection}>
      <h2>Recent Work</h2>
      <div className={RecentWorkStyles.recentWorkWrapper}>
        {work.slice(0, 3).map((work) => (
          <div className={RecentWorkStyles.recentWork}>
            <div className={RecentWorkStyles.recentWorkImage}>
              <img src={work.image} alt={work.title} />
            </div>
            <div className={RecentWorkStyles.recentWorkContent}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                Check it out!
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;

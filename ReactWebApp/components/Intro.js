import React from 'react';

import CapsuleIcon from "./CapsuleIcon";

import styles from './Intro.scss';

export default class Intro extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.logo} data-jump="about">
          <span>Marc Howard Weiner</span>
        </div>
        <div className={styles.text}>
          <CapsuleIcon/>
          I'm a Full-Stack Software Engineer and UX Architect based in NYC. I build award-winning products used by millions of
          people and some of the world's largest companies.
        </div>
        <button className={styles.downArrow} data-jump="projects">
          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="187.5 107.5 105 105">
            <circle cx="240" cy="160" r="50"/>
            <line x1="240" y1="134.8" x2="240" y2="184.8"/>
            <line x1="223.2" y1="167.5" x2="240.8" y2="185.2"/>
            <line x1="239.2" y1="185.2" x2="256.8" y2="167.5"/>
          </svg>
        </button>
      </div>
    )

  }

}
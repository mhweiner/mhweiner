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
          I'm a Software Engineer and UX Architect based in NYC. I enjoy solving problems with a thoughtful,
          pragmatic, and research-driven approach.
        </div>
      </div>
    )

  }

}
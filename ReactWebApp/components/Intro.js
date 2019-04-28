import React from 'react';

import styles from './Intro.scss';
import StarryBackground from "./StarryBackground";

export default class Intro extends React.PureComponent {

  render() {

    return (
      <div className={styles.default}>
        <StarryBackground/>
        <h1>Marc H. Weiner</h1>
        <div className={styles.text}>
            <p>I'm <span style={{color: '#22efcc'}}>Marc Weiner</span>, a software engineer and UX architect in NYC.</p>
          <p className={styles.subtext}>I build award-winning products used by millions of people and some of the world's largest companies.</p>
          <button className={styles.seeWork} onClick={() => this.props.scrollTo('work')}>See my work<i className='fa fa-arrow-down'/></button>
        </div>
      </div>
    )

  }

}
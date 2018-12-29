import React from 'react';

import styles from './Intro.scss';

export default class Intro extends React.PureComponent {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.text}>
          <p>I'm Marc Weiner, a software engineer and UX architect based in NYC.</p>
          <p>I build award-winning products used by millions of people and some of the world's largest companies.</p>
          <button className={styles.seeWork} onClick={() => this.props.scrollTo('work')}>
            <i className='fa fa-arrow-down'/>See Work
          </button>
        </div>
      </div>
    )

  }

}
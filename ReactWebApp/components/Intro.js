import React from 'react';

import styles from './Intro.scss';

export default class Intro extends React.PureComponent {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.bg}/>
        <h1>Marc H. Weiner</h1>
        <div className={styles.text}>
          <p style={{color: '#000',marginBottom:'20px'}}>I'm a software engineer currently based in NYC.</p>
          <p>I build award-winning products used by millions of people and some of the world's largest companies.</p>
        </div>
        <div className={styles.scrollDown}><i className='fa fa-arrow-down'/>Scroll Down</div>
      </div>
    )

  }

}
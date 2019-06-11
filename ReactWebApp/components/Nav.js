import React from 'react';

import styles from './Nav.scss';

export default class Nav extends React.Component {

  render() {

    return <div className={styles.default}>
      <a href='#home' className={styles.logo}>MHW</a>
      <a href='#projects'>projects</a>
      <a href='http://github.com/mhweiner' target='_blank'>github</a>
      <a href='#about'>about</a>
    </div>;

  }

}
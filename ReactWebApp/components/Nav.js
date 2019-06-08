import React from 'react';

import styles from './Nav.scss';

export default class Nav extends React.Component {

  render() {

    return <div className={styles.default}>
      <a href='#' className={styles.logo}>MHW</a>
      <a href='#'>projects</a>
      <a href='#'>about</a>
    </div>;

  }

}
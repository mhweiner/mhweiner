import React from 'react';
import Logo from "./Logo";

import styles from './Nav.scss';

export default class Nav extends React.Component {

  render() {

    return <div className={styles.default}>
      <a href='#home' className={styles.logo}><Logo/></a>
      <a href='#projects' className={this.props.page === 'projects' ? styles.selected : null}>projects</a>
      <a href='http://github.com/mhweiner' target='_blank'>github</a>
      <a href='#about' className={this.props.page === 'about' ? styles.selected : null}>about</a>
    </div>;

  }

}
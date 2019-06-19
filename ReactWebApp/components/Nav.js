import React from 'react';
import Logo from "./Logo";

import styles from './Nav.scss';
import {addClass, removeClass} from "../utils/DOM";

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {

    this.animateIn();
    window.nav = this;

  }

  animateIn = () => {

    addClass(this.ref.current, styles.animateIn);
    this.ref.current.style.display = 'block';
    setTimeout(() => {
      removeClass(this.ref.current, styles.animateIn);
    }, 600);

  };

  animateOut = () => {

    addClass(this.ref.current, styles.animateOut);
    setTimeout(() => {
      removeClass(this.ref.current, styles.animateOut);
      this.ref.current.style.display = '';
    }, 300);

  };

  render() {

    return <div className={styles.default} ref={this.ref}>
      <a href='#home' className={styles.logo}><Logo/></a>
      <a href='#projects' className={this.props.page === 'projects' ? styles.selected : null}>projects</a>
      <a href='http://github.com/mhweiner' target='_blank'>github</a>
      <a href='#about' className={this.props.page === 'about' ? styles.selected : null}>about</a>
    </div>;

  }

}
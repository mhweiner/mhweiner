import React from 'react';
import Logo from "./Logo";
import throttle from "../utils/throttle";
import {DOMEvent} from "../utils/DOMEvent";

import styles from './Nav.scss';

export default class Nav extends React.Component {

  ref = React.createRef();

  componentDidMount() {

    if (this.props.hidden) {

      this.hide();

    }

  }

  componentWillUpdate(nextProps, nextState, nextContext) {

    if (nextProps.hidden && !this.props.hidden) {

      this.hide();
      return false;

    } else if (!nextProps.hidden && this.props.hidden) {

      this.show();
      return false;

    }

    return true;

  }

  hide = () => {

    this.ref.current.style.opacity = 0;
    setTimeout(() => {
      this.ref.current.style.display = 'none';
    }, 300);

  };

  show = () => {

    setTimeout(() => {

      this.ref.current.style.display = 'block';

      setTimeout(() => {

        this.ref.current.style.opacity = 1;

      }, 100);

    }, 200);

  };

  render() {

    let classes = [styles.default];

    if (this.props.opaque) {

      classes.push(styles.opaque);

    }

    return <div className={classes.join(' ')} ref={this.ref}>
      <a href='#home' className={styles.logo}><Logo/></a>
      <a href='#projects' className={this.props.page === 'projects' ? styles.selected : null}>projects</a>
      <a href='http://github.com/mhweiner' target='_blank'>github</a>
      <a href='#about' className={this.props.page === 'about' ? styles.selected : null}>about</a>
    </div>;

  }

}
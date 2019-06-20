import React from 'react';
import Logo from "./Logo";
import throttle from "../utils/throttle";
import {DOMEvent} from "../utils/DOMEvent";

import styles from './Nav.scss';

export default class Nav extends React.Component {

  ref = React.createRef();

  state = {
    opaque: false
  };

  /**
   * To make nav have a dark background when scrolling.
   */
  initScrollListner = () => {

    this.scrollListener = DOMEvent.addListener(window, 'scroll', throttle(() => {

      if (window.scrollY > 50 && !this.props.hidden && !this.state.opaque) {

        this.setState({
          opaque: true
        });

      } else if (window.scrollY <= 50 && this.state.opaque) {

        this.setState({
          opaque: false
        });

      }

    }, 200));

  };

  componentDidMount() {

    this.initScrollListner();

  }

  componentWillUnmount() {

    DOMEvent.removeListener(this.scrollListener);

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

    this.ref.current.style.display = 'block';
    this.ref.current.style.opacity = 1;

  };

  render() {

    let classes = [styles.default];

    if (this.state.opaque) {

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
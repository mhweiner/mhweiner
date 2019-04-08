import React from 'react';

import {DOMEvent} from "../utils/DOMEvent";
import {addClass, removeClass} from "../utils/DOM";

import styles from './NavToggle.scss';

export default class NavToggle extends React.PureComponent {

  ref = React.createRef();
  isLight = false;

  onClick = (e) => {

    e.preventDefault();
    this.props.toggleNav(!this.props.isOpen);
    this.update();

  };

  componentDidMount() {

    this.scrollListenerId = DOMEvent.addListener(window, 'scroll', this.onScroll);
    this.windowHeight = window.innerHeight;
    this.lastKnownScrollY = window.scrollY;
    this.update();

  }

  onScroll = () => {

    this.requestTick();

  };

  requestTick = () => {

    if (!this.ticking) {

      this.lastKnownScrollY = window.scrollY;
      requestAnimationFrame(this.update);

    }

    this.ticking = true;

  };

  update = () => {

    // reset the tick so we can
    // capture the next onScroll
    this.ticking = false;

     if (this.lastKnownScrollY < this.windowHeight) {

       if (!this.isLight) {

         addClass(this.ref.current, styles.light);
         this.isLight = true;
         console.log('making it light')

       }

     } else {

       if (this.isLight) {

         this.isLight = false;
         removeClass(this.ref.current, styles.light);
         console.log('making it dark')

       }

     }

  };

  componentWillUnmount() {

    if (this.scrollListenerId) {

      DOMEvent.removeListener(this.scrollListenerId);

    }

  }

  render() {

    let classes = [styles.default];

    if (this.props.isOpen) {

      classes.push(styles.open);

    }

    if (this.isLight) {

      classes.push(styles.light);

    }

    return <a className={classes.join(' ')} onClick={this.onClick} ref={this.ref}><span/></a>;

  }

}
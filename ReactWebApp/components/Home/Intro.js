import React from 'react';
import {DOMEvent} from "../../utils/DOMEvent";

import StarryBackground from "./../StarryBackground";

import styles from './Intro.scss';

export default class Intro extends React.PureComponent {

  textRef = React.createRef();

  componentDidMount() {

    DOMEvent.addListener(window, 'scroll', this.onScroll);

  }

  onScroll = () => {

    if (this.ticking) return;

    this.lastKnownScrollY = window.scrollY;
    requestAnimationFrame(this.update);
    this.ticking = true;

  };

  update = () => {

    setTimeout(() => {
      this.ticking = false;
    }, 10);

    if (this.lastKnownScrollY > 400) return;

    this.textRef.current.style.opacity = 1 - (this.lastKnownScrollY / 400);

  };

  render() {

    return (
      <div className={styles.default}>
        <StarryBackground/>
        <div className={styles.text} ref={this.textRef}>
            <p>Hello! I'm <span>Marc</span>. I'm a software engineer and UX architect currently based NYC.</p>
            <p className={styles.subtext}>I've built award-winning products used by millions of people and some of the world's largest companies.</p>
        </div>
        <div className={styles.arrow}/>
      </div>
    )

  }

}
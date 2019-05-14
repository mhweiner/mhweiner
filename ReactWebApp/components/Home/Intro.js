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

    requestAnimationFrame(this.update);
    this.ticking = true;

  };

  update = () => {

    this.ticking = false;
    let opacity = Math.max(0, 1 - ( window.scrollY / 400));

    if (opacity !== this.lastOpacity) {

      this.textRef.current.style.opacity = opacity;
      this.lastOpacity = opacity;

    }

  };

  render() {

    return (
      <div className={styles.default}>
        <StarryBackground/>
        <div className={styles.text} ref={this.textRef}>
            <p>Hello! I'm <span>Marc</span>. I'm a software engineer, snowboarder, and builder of things.</p>
            <p className={styles.subtext}>I enjoy building things that solve problems.</p>
        </div>
        <div className={styles.arrow}/>
      </div>
    )

  }

}
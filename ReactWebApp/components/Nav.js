import React from 'react';
import {addClass, removeClass} from "../utils/DOM";

import styles from './Nav.scss';

export default class Nav extends React.Component {

  ref = React.createRef();
  closeAnimationDuration = 350; //in ms

  componentDidMount() {

    this.animateOpen();

  }

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">WORK</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">RESUME</a>
          </li>
        </ul>
      </div>
    );

  }

  animateOpen() {

    addClass(this.ref.current, styles.animateBackgroundOpen);

    let links = this.ref.current.querySelectorAll('a');

    links.forEach((v,k) => {

      setTimeout(() => {

        addClass(v, styles.animateLinkOpen);

      }, 100 * k);

    });

  }

  animateClose(callback) {

    addClass(this.ref.current, styles.animateBackgroundClose);

    let links = this.ref.current.querySelectorAll('a');
    let count = 0;

    for (let i = links.length - 1; i >= 0; i--) {

      console.log(links[i])

      setTimeout(() => {

        addClass(links[i], styles.animateLinkClose);

      }, 50 * count);

      count++;

    }

    setTimeout(callback, this.closeAnimationDuration);

  }

}
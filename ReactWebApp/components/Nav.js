import React from 'react';
import {addClass} from "../utils/DOM";

import StarryBackground from "./StarryBackground";

import styles from './Nav.scss';

export default class Nav extends React.PureComponent {

  ref = React.createRef();
  closeAnimationDuration = 350; //in ms

  componentDidMount() {

    this.animateOpen();

  }

  go = (e, section) => {

    e.preventDefault();
    e.stopPropagation();
    this.props.scrollTo(section);

  };

  render() {

    return (
      <div className={styles.default} ref={this.ref} onClick={this.props.close}>
        <StarryBackground/>
        <ul>
          <li>
            <a href="#" onClick={(e) => this.go(e, 'work')}>Work</a>
          </li>
          <li>
            <a href="#" onClick={(e) => this.go(e, 'skills')}>Skills</a>
          </li>
          <li>
            <a href="#" onClick={(e) => this.go(e, 'about')}>About</a>
          </li>
          <li>
            <a href="#" onClick={(e) => this.go(e, 'about')}>Contact</a>
          </li>
        </ul>
      </div>
    );

  }

  animateOpen() {

    addClass(this.ref.current, styles.animateOpen);

    let links = this.ref.current.querySelectorAll('a');

    links.forEach((v,k) => {

      setTimeout(() => {

        addClass(v, styles.animateLinkOpen);

      }, 200 * (k + 1));

    });

  }

  animateClose(callback) {

    addClass(this.ref.current, styles.animateClose);
    setTimeout(callback, this.closeAnimationDuration);

  }

}
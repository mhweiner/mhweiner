import React from 'react';
import {addClass} from "../utils/DOM";

import styles from './Nav.scss';

export default class Nav extends React.PureComponent {

  ref = React.createRef();
  closeAnimationDuration = 600; //in ms

  go = (e, section) => {

    e.preventDefault();
    e.stopPropagation();

    this.animateClose(() => {

      this.props.scrollTo(section);

    });

  };

  render() {

    return (
      <div className={styles.default} ref={this.ref} onClick={this.props.close}>
        <ul>
          <li>
            <a href="#" onClick={(e) => this.go(e, 'work')}>work</a>
          </li>
          <li>
            <a href="#" onClick={(e) => this.go(e, 'skills')}>skills</a>
          </li>
          <li>
            <a href="#" onClick={(e) => this.go(e, 'about')}>about</a>
          </li>
          <li>
            <a href="mailto:mhweiner234@gmail.com">email</a>
          </li>
          <li>
            <a href="http://linkedin.com/in/mhweiner" target="_blank">linkedin</a>
          </li>
          <li>
            <a href="http://github.com/mhweiner" target="_blank">github</a>
          </li>
        </ul>
      </div>
    );

  }

  animateClose = (callback) => {

    addClass(this.ref.current, styles.animateClose);
    setTimeout(callback, this.closeAnimationDuration);

  };

}
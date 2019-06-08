import React from 'react';
import mr from 'mr-router';
import {addClass} from "../utils/DOM";

import StarryBackground from "./StarryBackground";

import styles from './Home.scss';
import animations from '../styles/animations.scss';
import Nav from "./Nav";

export default class Home extends React.PureComponent {

  stars = React.createRef();
  text = React.createRef();

  componentDidMount() {

    this.animateIn();

  }

  componentWillUnmount() {

    clearTimeout(this.timeout);

  }

  animateIn = () => {

    this.stars.current.fadeIn();
    setTimeout(() => {

      addClass(this.text.current, animations.animateInFromBottom);
      this.text.current.style.display = 'block';

    }, 200);

  };

  animateOut = (callback) => {

    this.stars.current.fadeOut();
    setTimeout(() => {

      addClass(this.text.current, animations.animateOutToTop);
      setTimeout(callback, 300);

    }, 200);

  };

  render() {

    return (
      <div className={styles.default}>
        <Nav/>
        <StarryBackground ref={this.stars}/>
        <div className={styles.text}>
            <p ref={this.text}>Hello! I'm <a href='#' onClick={(e) => {
              e.preventDefault();
              mr.go('about');
            }}>Marc</a>. I'm a software engineer, snowboarder, and builder of things.

              <a href='#' className={styles.seeProjects}>See my projects</a>

            </p>
        </div>
      </div>
    )

  }

}
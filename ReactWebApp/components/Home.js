import React from 'react';
import mr from 'mr-router';
import {addClass, removeClass} from "../utils/DOM";

import StarryBackground from "./StarryBackground";
import Rocket from "./Rocket";
import Planet from "./Planet";

import styles from './Home.scss';
import animations from '../styles/animations.scss';

export default class Home extends React.PureComponent {

  ref = React.createRef();
  rocket = React.createRef();
  planet = React.createRef();
  text = React.createRef();

  componentDidMount() {

    this.animateIn();

  }

  componentWillUnmount() {

    this.destroyObjects();

  }

  animateIn = () => {

    addClass(this.ref.current, animations.fadeIn);

    setTimeout(() => {

      addClass(this.text.current, animations.animateInFromBottom);

    }, 100);

    setTimeout(() => {

      removeClass(this.ref.current, animations.fadeIn);

    }, 805);

    this.createObjects();

  };

  animateOut = (callback) => {

    this.destroyObjects();
    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  createObjects = () => {

    this.rocketInterval = setInterval(this.launchRocket, 20000);
    this.planetInterval = setInterval(this.flyByPlanet, 46000);
    this.flyByPlanet();
    this.launchRocket();

  };

  destroyObjects = () => {

    clearInterval(this.rocketInterval);
    clearInterval(this.planetInterval);

  };

  launchRocket = () => {

    let rocket = this.rocket.current;

    //randomize left positioning
    let min = 50;
    let max = window.innerWidth - 100;

    rocket.style.left = Math.floor(Math.random()*(max-min+1)+min) + 'px';
    rocket.style.display = 'block';

    setTimeout(() => {

      rocket.style.display = 'none';

    }, 9010);


  };

  flyByPlanet = () => {

    let planet = this.planet.current;

    //randomize left positioning
    let min = 50;
    let max = window.innerWidth - 300;

    planet.style.left = Math.floor(Math.random()*(max-min+1)+min) + 'px';
    planet.style.display = 'block';

    //animate to top
    setTimeout(() => {

      planet.style.display = 'none';

    }, 45010);


  };

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.rocket} ref={this.rocket}><Rocket/></div>
        <div className={styles.planet} ref={this.planet}><Planet/></div>
        <StarryBackground/>
        <div className={styles.text} ref={this.text}>
            <p ref={this.text}>Hello! I'm <a href='#' onClick={(e) => {
              e.preventDefault();
              mr.go('about');
            }}>Marc</a>. I'm a software engineer, UX architect, and builder of things.

              <a href='#projects' className={styles.seeProjects}>See my projects</a>

            </p>
        </div>
      </div>
    )

  }

}

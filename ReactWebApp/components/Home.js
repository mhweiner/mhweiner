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

  componentDidMount() {

    this.animateIn();

  }

  componentWillUnmount() {

    this.destroyObjects();

  }

  animateIn = () => {

    addClass(this.ref.current, animations.animateInFromBottom);

    setTimeout(() => {

      removeClass(this.ref.current, animations.animateInFromBottom);

    }, 600);

    this.createObjects();

  };

  animateOut = (callback) => {

    this.destroyObjects();
    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  createObjects = () => {

    this.rocketInterval = setInterval(this.launchRocket, 20000);
    this.rocketTimeout = setTimeout(this.launchRocket, 3500);
    this.planetInterval = setInterval(this.flyByPlanet, 46000);
    this.flyByPlanet();

  };

  destroyObjects = () => {

    clearTimeout(this.rocketTimeout);
    clearInterval(this.rocketInterval);
    clearInterval(this.planetInterval);

    if (this.rocketInTransit) {

      this.rocket.current.style.opacity = 0;

    }

    if (this.planetInView) {

      this.planet.current.style.opacity = 0;

    }

  };

  launchRocket = () => {

    if (this.rocketInTransit) return;

    this.rocketInTransit = true;

    let rocket = this.rocket.current;
    let windowHeight = window.innerHeight;

    //randomize x pos
    let min = 50;
    let max = window.innerWidth - 100;
    let x = Math.floor(Math.random()*(max-min+1)+min);

    //place rocket
    rocket.style.display = 'block';
    rocket.style.transform = `translate(${x}px, ${windowHeight}px)`;
    rocket.style.webkitTransform = `translate(${x}px, ${windowHeight}px)`;

    //turn on transitioning
    setTimeout(() => {
      rocket.style.transition = 'transform 10s linear, webkitTransform 10s linear, opacity 0.2s ease-in-out';
    }, 50);

    //animate to top
    setTimeout(() => {
      rocket.style.transform = `translate(${x}px, -200px)`;
      rocket.style.webkitTransform = `translate(${x}px, -200px)`;

      //clear when done
      setTimeout(() => {

        this.rocketInTransit = null;
        rocket.style.display = 'none';
        rocket.style.transition = '';
        rocket.style.transform = '';
        rocket.style.webkitTransform = '';

      }, 10010);

    }, 100);


  };

  flyByPlanet = () => {

    if (this.planetInView) return;

    this.planetInView = true;

    let planet = this.planet.current;
    let windowHeight = window.innerHeight;

    //randomize x pos
    let min = 50;
    let max = window.innerWidth - 300;
    let x = Math.floor(Math.random()*(max-min+1)+min);

    //place planet
    let y = windowHeight;

    if (!this.planetInitd) {

      this.planetInitd = true;
      y = windowHeight - 100;


    }

    planet.style.display = 'block';
    planet.style.transform = `translate(${x}px, ${y}px)`;
    planet.style.webkitTransform = `translate(${x}px, ${y}px)`;

    //turn on transitioning
    setTimeout(() => {
      planet.style.transition = 'transform 45s linear, webkitTransform 45s linear, opacity 0.3s ease-in-out';
    }, 50);

    //animate to top
    setTimeout(() => {
      planet.style.transform = `translate(${x}px, -300px)`;
      planet.style.webkitTransform = `translate(${x}px, -300px)`;
      planet.style.opacity = 1;

      //clear when done
      setTimeout(() => {

        this.planetInView = null;
        planet.style.display = 'none';
        planet.style.transition = '';
        planet.style.transform = '';
        planet.style.webkitTransform = '';

      }, 45010);

    }, 100);


  };

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.rocket} ref={this.rocket}><Rocket/></div>
        <div className={styles.planet} ref={this.planet}><Planet/></div>
        <StarryBackground/>
        <div className={styles.text}>
            <p ref={this.text}>Hello! I'm <a href='#' onClick={(e) => {
              e.preventDefault();
              mr.go('about');
            }}>Marc</a>. I'm a software engineer, snowboarder, and builder of things.

              <a href='#projects' className={styles.seeProjects}>See my projects</a>

            </p>
        </div>
      </div>
    )

  }

}
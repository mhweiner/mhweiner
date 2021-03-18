import React from 'react';
import {addClass, removeClass} from "../utils/DOM";
import animations from "../styles/animations.scss";

import styles from './About.scss';

export default class About extends React.PureComponent {

  ref = React.createRef();

  componentDidMount() {

    window.scrollTo(0, 0);
    this.animateIn();

  }

  animateIn = () => {

    addClass(this.ref.current, animations.animateInFromBottom);
    this.ref.current.style.display = 'block';
    setTimeout(() => {
      removeClass(this.ref.current, animations.animateInFromBottom);
    }, 805);

  };

  animateOut = (callback) => {

    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.belt}>
          <div className={styles.image}>
            <h1>Marc Howard Weiner</h1>
            <img src="/static/images/profile2.jpg"/>
          </div>
          <div className={styles.text}>
            <p>
              I am a builder, UI designer, and space nerd. As a kid, I enjoyed
              building custom high-powered model rockets, R/C airplanes, and programming.
            </p>
  
            <p>
              After studying Aerospace Engineering and Computer Science at the University at Buffalo, I helped launch a
              handful of successful startups. While working at a health-tech startup, I realized
              that there are mission-critical web-based applications, just like in aerospace. Ever since, I've
              focused on ways to help improve reliability in software in other industries.
            </p>
            
            <p>
              My main interests are in systems design, reliability, scalability, process optimization, and user experience.
            </p>
            
            <p>
              When I'm not hammering away at the keyboard or having existential thoughts over <a target='_blank' href="https://www.goodreads.com/author/quotes/45368.Kevlin_Henney">Kevlin Henney quotes</a>,
              you can find me on the mountain, <a target='_blank' href="https://24hourultraskate.com/">skating 100+ miles in 24 hours</a>, working on electronics, or flying airplanes.
            </p>
            
            <h2>Want to hire me? Get in touch.</h2>
            <ul className={styles.contact}>
              <li>
                <a href="mailto:mhweiner234@gmail.com" target="_blank">
                  <i className='far fa-envelope'/>
                  <p>Email</p>
                </a>
              </li>
              <li>
                <a href="http://linkedin.com/in/mhweiner" target="_blank">
                  <i className='fab fa-linkedin-in'/>
                  <p>LinkedIn</p>
                </a>
              </li>
              <li>
                <a href="http://github.com/mhweiner" target="_blank">
                  <i className='fab fa-github-alt'/>
                  <p>GitHub</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )

  }

}

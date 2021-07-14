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
            <p>I've always been passionate about engineering, science, and space exploration. Since I was very young, I've had an insatiable curiosity for how things worked, and wanted to build things that could make the world a better place.</p>
            
            <p>As a kid, I spent much of my time programming and building custom model rockets and R/C airplanes. When I was in second grade, I found an old junk computer and learned how to write programs for it using a book from my elementary school's library. At age fifteen, I started my own company building web applications for local businesses and non-profits. I started to learn the importance of UI design and User Experience (UX).</p>
            
            <p>After studying Aerospace Engineering and Computer Science at the University at Buffalo, I co-founded NextEMR, a mission-driven health-tech startup to improve transparency and consistency in patient care. Leveraging my UI Design and systems-driven approach to problem solving, NextEMR was the first UX-centric <a href="https://en.wikipedia.org/wiki/Electronic_health_record" target="_blank">EHR</a> application, and was quickly acquired in 2009.</p>
            
            <p>While working on NextEMR, I realized that are safety-critical applications in healthcare, just like in aerospace. Ever since, I've focused on ways to help improve UX and <a href="https://mhweiner.medium.com/do-these-10-things-to-improve-your-apps-reliability-fc114b16c2d1" target="_blank">reliability in software in other industries</a>.</p>
            
            <p>My main interests are in systems engineering, reliability, scalability, process optimization, and user experience.</p>
            
            <p>When I'm not hammering away at the keyboard or having existential thoughts over <a target='_blank' href="https://www.goodreads.com/author/quotes/45368.Kevlin_Henney">Kevlin Henney quotes</a>, you can find me racing down a mountain on my snowboard, <a target='_blank' href="https://24hourultraskate.com/">skating 100+ miles in 24 hours</a>, working on electronics, or flying airplanes.</p>
            
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
                <a href="http://mhweiner.medium.com" target="_blank">
                  <i className='fab fa-medium'/>
                  <p>Medium</p>
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

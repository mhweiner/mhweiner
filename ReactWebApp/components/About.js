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
            <p>I've always been passionate about engineering, science, and space exploration. Since I was very young, I had an insatiable curiosity for how things worked, and wanted to build things that could make the world a better place.</p>
            <p>As a kid, I spent much of my time programming and building custom model rockets and R/C airplanes. When I was in second grade, I found an old junk computer and learned how to write programs for it using a book from my elementary school's library. At age fifteen, I started my own company building web applications for local businesses and non-profits. I started to become passionate about UI design and learn how the way we interact with technology is as pivotal to solving the problem as the software itself.</p>
            <p>After studying Aerospace Engineering and Computer Science at the University at Buffalo, I co-founded a mission-driven health-tech startup set to improve patient care, leveraging my UI design and systems problem solving skills. NextEMR was the first UX-centric <a href="https://en.wikipedia.org/wiki/Electronic_health_record" target="_blank">EHR</a> application. I soon realized that there are safety-critical applications in healthcare, just like in aerospace. That company was acquired in 2009.</p>
            
            <p>Ever since, I've focused on ways to help improve HCI (Human Computer Interaction) and reliability in software in other industries.</p>
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

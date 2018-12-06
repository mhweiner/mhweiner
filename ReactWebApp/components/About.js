
import React from 'react';

import styles from './About.scss';

export default class About extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.belt}>

          <h3>about.</h3>

          <img src="/static/images/profile2.jpg"/>
            <p>I enjoy solving problems while embracing practicality and iteration. I am research-driven and excel at
              optimizing processes and making the most with constraints.</p>
            <p>As a team player who enjoys collaboration, I have helped start several successful start-ups and worked on
              award-winning, disruptive products.</p>
            <p>When I'm not programming, I'm usually snowboarding, rock climbing, or watching "Beat Bobby Flay."</p>

          <ul className={styles.contact}>
              <li>
                <a href="mailto:mhweiner234@gmail.com" className="email">
                  <i className='far fa-envelope'/>
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="http://linkedin.com/in/mhweiner" target="_blank" className="linkedin">
                  <i className='fab fa-linkedin'/>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="http://github.com/mhweiner" target="_blank" className="github">
                  <i className='fab fa-github'/>
                  <span>GitHub</span>
                </a>
              </li>
          </ul>

        </div>
      </div>
    )

  }

}
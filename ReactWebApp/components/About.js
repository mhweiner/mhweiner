
import React from 'react';

import styles from './About.scss';

export default class About extends React.PureComponent {

  render() {

    return (
      <div className={[styles.default, 'section-about'].join(' ')}>
        <div className={styles.belt}>
          <img src="/static/images/profile2.jpg"/>
          <p>
              Marc is a lifelong programmer, UX designer, tinkerer, and space nerd. He built computer games when he was
              eight and started his first web development company when he was fifteen. After studying Aerospace
              Engineering and Computer Science at the University at Buffalo, he helped launch a handful of successful
              startups, including the first user-friendly web-based medical record application. His specialties are in
              systems architecture, scalability, and API and UX design and development. When he is not working, he is
              snowboarding, rock climbing, or watching "Beat Bobby Flay".
          </p>

          <ul className={styles.contact}>
              <li>
                <a href="mailto:mhweiner234@gmail.com" className="email">
                  <i className='far fa-envelope'/>
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="http://linkedin.com/in/mhweiner" target="_blank" className="linkedin">
                  <i className='fab fa-linkedin-in'/>
                    <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="http://github.com/mhweiner" target="_blank" className="github">
                  <i className='fab fa-github-alt'/>
                    <span>GitHub</span>
                </a>
              </li>
          </ul>

        </div>
      </div>
    )

  }

}
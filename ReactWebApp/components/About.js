import React from 'react';
import {addClass, removeClass} from "../utils/DOM";

import styles from './About.scss';
import animations from "../styles/animations.scss";

export default class About extends React.PureComponent {

  ref = React.createRef();

  componentDidMount() {

    this.animateIn();

  }

  animateIn = () => {

    addClass(this.ref.current, animations.animateInFromBottom);
    this.ref.current.style.display = 'block';
    setTimeout(() => {
      removeClass(this.ref.current, animations.animateInFromBottom);
    }, 600);

  };

  animateOut = (callback) => {

    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.belt}>
          <div className={styles.image}><img src="/static/images/profile2.jpg"/></div>
          <div className={styles.text}>
            <h2>Marc H. Weiner</h2>
            <p>
              Marc is a lifelong programmer, creative technologist, builder, and space nerd. He built computer games when he was
              eight and started his first web development company when he was fifteen. After studying Aerospace
              Engineering and Computer Science at the University at Buffalo, he helped launch a handful of successful
              startups. His specialties are in systems architecture, scalability, and process optimization.
              When he is not working, he is snowboarding, rock climbing, or watching "Beat Bobby Flay".
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
      </div>
    )

  }

}
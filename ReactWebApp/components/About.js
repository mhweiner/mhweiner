import React from 'react';
import {addClass, removeClass} from "../utils/DOM";

import styles from './About.scss';
import animations from "../styles/animations.scss";

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
          <div className={styles.image}>
            <h1>Marc Howard Weiner</h1>
            <img src="/static/images/profile2.jpg"/>
          </div>
          <div className={styles.text}>
            <p>
              Marc is a lifelong programmer, creative technologist, builder, and space nerd. He built computer games when he was
              eight and started his first web development company when he was fifteen. After studying Computer Science
              at the University at Buffalo, he helped launch several successful
              startups. He now helps big and small companies alike in areas such as full-stack development, systems architecture,
              devops, process optimization, and user experience.  When he is not working, he is
              snowboarding, rock climbing, or watching "Beat Bobby Flay".
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

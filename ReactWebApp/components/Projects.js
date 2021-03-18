import React from 'react';
import {addClass, removeClass} from "../utils/DOM";
import mr from 'mr-router';

import ProjectList from "./ProjectList/ProjectList";

import styles from './Projects.scss';
import animations from "../styles/animations.scss";

export default class Projects extends React.PureComponent {

  ref = React.createRef();
  contentRef = React.createRef();

  componentDidMount() {

    if (window.lastScrollY) {

      window.scrollTo(0, window.lastScrollY);
      window.lastScrollY = 0;

    }

    this.animateIn();

  }

  animateIn = () => {

    addClass(this.ref.current, animations.animateInFromBottom);
    this.ref.current.style.display = 'block';
    setTimeout(() => {
      removeClass(this.ref.current, animations.animateInFromBottom);
    }, 805);

  };

  animateOut = callback => {

    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  goToProject = (projectId) => {

    window.lastScrollY = window.scrollY;
    mr.go('project', {id: projectId});

  };

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <div ref={this.contentRef} className={styles.belt}>
          <h2>My Work</h2>
          <p>My work spans multiple industries and disciplines. Below are some projects where I have made substantial contributions in systems design, requirement gathering, technical strategy,
          architecture, full-stack development, UX, leadership, and more.</p>
          <ProjectList onClick={this.goToProject}/>
        </div>
      </div>
    )

  }

}

import React from 'react';
import {addClass, removeClass} from "../utils/DOM";
import mr from 'mr-router';

import {projects} from '../projectData';

import ProjectThumbnail from "./ProjectList/ProjectThumbnail";
import LoaderAnimation from "./LoaderAnimation";

import styles from './Projects.scss';
import animations from "../styles/animations.scss";
import ProjectListItem from "./ProjectList/ProjectListItem";

export default class Projects extends React.PureComponent {

  state = {
    filter: []
  };

  ref = React.createRef();
  contentRef = React.createRef();

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

  animateOut = callback => {

    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  render() {

    let proj = [];

    projects.map((project, k) => {

      proj.push(<ProjectListItem
        key={k.toString()}
        project={project}
        onClick={() => mr.go('project', {id: project.id})}
      />);

    });

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.belt}>
          <div className={styles.container} ref={this.contentRef}>
            {!proj.length && <div>There are no projects that match your filter.</div>}
            {proj}
          </div>
        </div>
        {!!this.state.isLoading && <LoaderAnimation/>}
      </div>
    )

  }

}
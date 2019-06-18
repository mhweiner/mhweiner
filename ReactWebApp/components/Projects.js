import React from 'react';
import clone from "../utils/clone";
import {addClass, removeClass} from "../utils/DOM";
import mr from 'mr-router';

import {projects, tags} from '../projectData';

import ProjectThumbnail from "./ProjectThumbnail";
import Filter from "./Filter";

import styles from './Projects.scss';
import animations from "../styles/animations.scss";

export default class Projects extends React.PureComponent {

  state = {
    filter: []
  };

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

  animateOut = callback => {

    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  filterMatch = testTags => {

    if (!this.state.filter.length) return true;

    for (let i = 0; i < testTags.length; i++) {

      if (this.state.filter.indexOf(testTags[i]) !== -1) {

        return true;

      }

    }

    return false;

  };

  addTagToFilter = tag => {

    let i = this.state.filter.indexOf(tag);

    if (i !== -1) {

      return;

    }

    this.setState({
      filter: this.state.filter.concat([tag])
    });

  };

  removeTagFromFilter = tag => {

    let i = this.state.filter.indexOf(tag);

    if (i !== -1) {

      let filter = clone(this.state.filter);

      filter.splice(i, 1);

      this.setState({
        filter: filter
      });

    }

  };

  render() {

    let proj = [];

    projects.map((project, k) => {

      if (this.filterMatch(project.tags || [])) {

        proj.push(<ProjectThumbnail
          key={k.toString()}
          project={project}
          onClick={() => mr.go('project', {id: project.id})}
        />);

      }

    });

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.belt}>
          <Filter
            options={tags}
            selected={this.state.filter}
            selectTag={this.addTagToFilter}
            removeTag={this.removeTagFromFilter}
          />
          <div className={styles.container}>
            {!proj.length && <div>There are no projects that match your filter.</div>}
            {proj}
          </div>
        </div>
      </div>
    )

  }

}
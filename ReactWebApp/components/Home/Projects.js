import React from 'react';

import ProjectThumbnail from "./ProjectThumbnail";
import Filter from "./Filter";

import styles from './Projects.scss';

export default class Projects extends React.PureComponent {

  filterMatch = tags => {

    if (!this.props.filter || !this.props.filter.length) return true;

    if (!tags || !tags.length) return false;

    for (let i = 0; i < tags.length; i++) {

      if (this.props.filter.indexOf(tags[i]) !== -1) {

        return true;

      }

    }

    return false;

  };

  render() {


    let projects = [];

    this.props.projects.map((project, k) => {

      if (this.filterMatch(project.tags)) {

        projects.push(<ProjectThumbnail
          key={k.toString()}
          project={project}
          onClick={() => this.props.open(project.id)}
        />);

      }

    });

    return (
      <div className={styles.default}>
        <div className={styles.belt}>
          <Filter
            options={this.props.tags}
            selected={this.props.filter}
            selectTag={this.props.addTagToFilter}
            removeTag={this.props.removeTagFromFilter}
          />
          <div className={styles.container}>
            {!projects.length && <div>There are no projects that match your filter.</div>}
            {projects}
          </div>
        </div>
      </div>
    )

  }

}
import React from 'react';

import ProjectThumbnail from "./ProjectThumbnail";

import styles from './Projects.scss';

export default class Projects extends React.Component {

  render() {

    return (
      <div className={[styles.default, 'section-work'].join(' ')}>
        <div className={styles.belt}>
          <h3>featured work</h3>
          <div className={styles.container}>

            {this.props.projects.map((project, k) => <ProjectThumbnail
              key={k.toString()}
              project={project}
              onClick={() => this.props.open(project.id)}
              isLoading={this.props.project === k && this.props.isLoading}
            />)}

          </div>
        </div>
      </div>
    )

  }

}
import React from 'react';

import {projects} from '../../projectData';

import ProjectListItem from "./ProjectListItem";

import styles from './ProjectList.scss';

export default class ProjectList extends React.PureComponent {

  render() {

    return <div className={styles.default}>
      {projects.map((project, k) => <ProjectListItem
        key={k.toString()}
        project={project}
        onClick={() => this.props.onClick(project.id)}
      />)}
    </div>;

  }

}
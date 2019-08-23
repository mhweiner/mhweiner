import React from 'react';

import ProjectThumbnail from "./ProjectThumbnail";

import styles from './ProjectListItem.scss';

export default class ProjectListItem extends React.Component {

  render() {
    
    let project = this.props.project;
    let tags = this.props.project.tags.map((tag, k) => <div className={styles.tag} key={k.toString()}>
      {tag}
    </div>);
    
    return <div className={styles.default} onClick={this.props.onClick}>
      <ProjectThumbnail project={project}/>
      <div className={styles.text}>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className={styles.tags}>{tags}</div>
      </div>
    </div>;

  }

}
import React from 'react';

import ProjectThumbnail from "./ProjectThumbnail";

import styles from './ProjectListItem.scss';

export default class ProjectListItem extends React.Component {

  state = {};

  onMouseOver = () => {

    this.setState({
      hover: true
    });

  };

  onMouseOut = () => {

    this.setState({
      hover: false
    });

  };

  render() {

    let project = this.props.project;

    return <div className={styles.default} onClick={this.props.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
      <ProjectThumbnail project={project} hover={this.state.hover}/>
      <div className={styles.text}>
        <h5>{this.props.project.industry}</h5>
        <h4>{project.title}</h4>
      </div>
    </div>;

  }

}

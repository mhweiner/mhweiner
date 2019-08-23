import React from 'react';

import styles from './ProjectThumbnail.scss';

export default class ProjectThumbnail extends React.Component {

  render() {
    
    let project = this.props.project;
    
    return <div className={styles.default} style={project.containerStyle}>
      {!!project.bgSrc &&  <img src={project.bgSrc} style={project.bgStyle} className={styles.bg} alt={project.title}/>}
      {!!project.imgSrc && <img src={project.imgSrc} style={project.imgStyle} className={styles.fg} alt={project.title}/>}
    </div>;

  }

}
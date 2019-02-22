import React from 'react';

import styles from './ProjectThumbnail.scss';

export default class ProjectThumbnail extends React.Component {

  render() {
    
    let project = this.props.project;
    
    return <div className={styles.default} onClick={this.props.onClick}>
      <div className={styles.img} style={project.containerStyle}>
        {!!project.bgSrc &&  <img src={project.bgSrc} style={project.bgStyle} className={styles.bg} alt={project.title}/>}
        <img src={project.imgSrc} style={project.imgStyle} className={styles.fg} alt={project.title}/>
        <div className={styles.hover}>
          <p>{project.description}<span>Go to project</span></p>
        </div>
      </div>
      {project.award && <img src='/static/images/project-thumbs/award.png' className={styles.awardBadge} alt={'Award Winner'}/>}
      <div className={styles.description}>
        {project.title}
      </div>
    </div>;

  }

}
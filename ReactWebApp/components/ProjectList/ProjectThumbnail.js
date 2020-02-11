import React from 'react';

import styles from './ProjectThumbnail.scss';

export default class ProjectThumbnail extends React.Component {

  render() {

    let project = this.props.project;
    let classes = [styles.default];

    if (this.props.hover) {

      classes.push(styles.isHovering);

    }

    return <div className={classes.join(' ')} style={project.containerStyle}>
      {!!project.bgSrc &&  <img src={project.bgSrc} style={project.bgStyle} className={styles.bg} alt={project.title}/>}
      {!!project.imgSrc && <img src={project.imgSrc} style={project.imgStyle} className={styles.fg} alt={project.title}/>}
      <div className={styles.seeDetails}><i className='fa fa-search'/>See case study</div>
    </div>;

  }

}

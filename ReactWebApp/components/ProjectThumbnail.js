import React from 'react';

import styles from './ProjectThumbnail.scss';

export default class ProjectThumbnail extends React.Component {

  render() {
    
    let proj = this.props.project;
    
    return <div className={styles.default} onClick={this.props.onClick}>
      <div className={styles.img} style={proj.containerStyle}>
        {!this.props.isLoading && <div className={styles.hover}>
          <p>{proj.description}<span>Go to project</span></p>
        </div>}
        {this.props.isLoading && <div className={styles.loading}><p><i className='fa fa-spin fa-spinner'/>Loading...</p></div>}
        {!!proj.bgSrc &&  <img src={proj.bgSrc} style={proj.bgStyle} className={styles.bg} alt={proj.title}/>}
        <img src={proj.imgSrc} style={proj.imgStyle} className={styles.fg} alt={proj.title}/>
      </div>
      <div className={styles.description}>
        {proj.award && <img src='/static/images/project-thumbs/award.png' className={styles.awardBadge} alt={'Award Winner'}/>}
        <h4>{proj.title}</h4>
      </div>
    </div>;

  }

      /*
        <ul className={styles.tags}>
          {proj.tags.map((tag, k) => <li key={k.toString()}>{tag}</li>)}
        </ul>
        */

}
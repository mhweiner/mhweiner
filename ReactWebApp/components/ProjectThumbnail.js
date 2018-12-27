import React from 'react';

import styles from './ProjectThumbnail.scss';

export default class ProjectThumbnail extends React.Component {

  render() {
    
    let proj = this.props.project;
    
    return <div className={styles.default} onClick={this.props.onClick}>
      <div className={styles.img} style={proj.imgContainerStyle}>
        {this.props.isLoading && <div className={styles.loading}><p><i className='fa fa-spin fa-spinner'/>Loading...</p></div>}
        {!this.props.isLoading && <div className={styles.hover}><i className='fa fa-fighter-jet'/>Go to Mission</div>}
        <img src={proj.imgSrc} style={proj.imgStyle} className={styles.fg}/>
      </div>
      <div className={styles.description}>
        {proj.award && <img src='/static/images/award.png' className={styles.awardBadge}/>}
        <ul className={styles.tags}>
          {proj.tags.map((tag, k) => <li key={k.toString()}>{tag}</li>)}
        </ul>
        <h4>{proj.title}</h4>
        <p>{proj.description}</p>
      </div>
    </div>;

  }

}
import React from 'react';
import {addClass} from "../utils/DOM";
import projectData from '../projectData';
import imagesLoaded from 'images-loaded';

import styles from './ProjectModal.scss';

export default class ProjectModal extends React.PureComponent {

  ref = React.createRef();
  contentRef = React.createRef();
  closeAnimationDuration = 350; //in ms

  componentDidMount() {

    imagesLoaded(this.contentRef.current).then(() => {

      this.animateOpen();
      this.props.onLoad();

    });

  }

  render() {

    const proj = projectData[this.props.project];

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.header}>
          <button className={styles.backButton} onClick={this.props.close}><i className='fa fa-arrow-left'/>Back<span> to Work</span></button>
          <h1>{proj.title}</h1>
          <a className={styles.extLink} href={proj.website} target='_blank'><span>Visit </span>Website<i className='fa fa-external-link-alt'/></a>
        </div>
        <div className={styles.content} ref={this.contentRef}>
          {proj.content}
        </div>
      </div>
    );

  }

  animateOpen() {

    setTimeout(() => addClass(this.ref.current, styles.animateOpen), 0);

  }

  animateClose(callback) {

    addClass(this.ref.current, styles.animateClose);
    setTimeout(callback, this.closeAnimationDuration);

  }

}
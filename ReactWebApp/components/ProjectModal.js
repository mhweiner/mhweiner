import React from 'react';
import {addClass} from "../utils/DOM";
import projectData from '../projectData';
import imagesLoaded from 'images-loaded';

import styles from './ProjectModal.scss';

export default class ProjectModal extends React.Component {

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
          <button onClick={this.props.close}><i className='fa fa-arrow-left'/>Back<span> to Projects</span></button>
          <h1>{proj.title}</h1>
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
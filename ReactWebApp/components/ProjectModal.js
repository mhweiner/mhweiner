import React from 'react';
import {addClass, removeClass} from "../utils/DOM";
import projectData from '../projectData';
import imagesLoaded from 'images-loaded';
import throttle from "../utils/throttle";

import styles from './ProjectModal.scss';
import {DOMEvent} from "../utils/DOMEvent";

export default class ProjectModal extends React.PureComponent {

  ref = React.createRef();
  headerRef = React.createRef();
  contentRef = React.createRef();
  closeAnimationDuration = 350; //in ms
  scrollListenerId = 0;

  componentDidMount() {

    imagesLoaded(this.contentRef.current).then(() => {

      this.animateOpen();
      this.props.onLoad();

    });

    this.scrollListenerId = DOMEvent.addListener(this.ref.current, 'scroll', throttle(() => {

      if (this.ref.current.scrollTop > 20) {

        addClass(this.headerRef.current, styles.shadowed);

      } else {

        removeClass(this.headerRef.current, styles.shadowed);

      }

    }, 100, {leading: true}));

  }

  componentWillUnmount() {

    DOMEvent.removeListener(this.scrollListenerId);

  }

  render() {

    const proj = projectData[this.props.project];

    return (
      <div className={styles.default} ref={this.ref}>
        <h1 className={styles.title}>{proj.title}</h1>
        <div className={styles.header} ref={this.headerRef}>
          <button className={styles.backButton} onClick={this.props.close}><i className='fa fa-arrow-left'/>Back<span> to Work</span></button>
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
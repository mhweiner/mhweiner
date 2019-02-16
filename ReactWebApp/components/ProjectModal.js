import React from 'react';
import {addClass} from "../utils/DOM";
import projectData from '../projectData';
import imagesLoaded from 'images-loaded';
import {DOMEvent} from "../utils/DOMEvent";
import LoaderAnimation from "./LoaderAnimation";

import styles from './ProjectModal.scss';
import loaderStyles from './LoaderAnimation.scss';

export default class ProjectModal extends React.PureComponent {

  ref = React.createRef();
  headerRef = React.createRef();
  contentRef = React.createRef();
  closeAnimationDuration = 300; //in ms
  scrollListenerId = 0;
  titleRef = React.createRef();
  state = {
    isLoading: true
  };
  lastKnownScrollY = 0;
  ticking = false;

  componentDidMount() {

    setTimeout(() => {

      this.ref.current.querySelector(`.${loaderStyles.default}`).style.display = 'block';

    }, 50);

    imagesLoaded(this.contentRef.current).then(() => {

      this.setState({
        isLoading: false
      });

    });

    this.scrollListenerId = DOMEvent.addListener(this.ref.current, 'scroll', this.onScroll);

  }

  onScroll = () => {

    this.lastKnownScrollY = this.ref.current.scrollTop;
    this.requestTick();

  };

  requestTick = () => {

    if (!this.ticking) {

      requestAnimationFrame(this.update);

    }

    this.ticking = true;

  };

  update = () => {

    // reset the tick so we can
    // capture the next onScroll
    this.ticking = false;

    let currentScrollY = this.lastKnownScrollY;

    this.titleRef.current.style.transform = `translate(-50%, ${currentScrollY * 0.9}px`;
    this.titleRef.current.style.webkitTransform = `translate(-50%, ${currentScrollY * 0.9}px`;

  };

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (!this.state.isLoading) {

      this.showContent();

    }

  }

  componentWillUnmount() {

    DOMEvent.removeListener(this.scrollListenerId);

  }

  render() {

    const proj = projectData[this.props.project];

    return (
      <div className={styles.default} ref={this.ref}>
        <h1 className={styles.title} ref={this.titleRef}>{proj.title}</h1>
        <div className={styles.header} ref={this.headerRef}>
          <button className={styles.backButton} onClick={this.props.close}><i className='fa fa-arrow-left'/>Back<span> to Work</span></button>
          <a className={styles.extLink} href={proj.website} target='_blank'><span>Visit </span>Website<i className='fa fa-external-link-alt'/></a>
        </div>
        <div className={styles.content} ref={this.contentRef}>
          {proj.content}
        </div>
        {!!this.state.isLoading && <LoaderAnimation/>}
      </div>
    );

  }

  showContent = () => {

    setTimeout(() => {

      this.titleRef.current.style.display = 'block';

    }, 300);

    setTimeout(() => {

      this.contentRef.current.style.display = 'block';

    }, 500);

  };

  animateClose(callback) {

    addClass(this.ref.current, styles.animateClose);
    setTimeout(callback, this.closeAnimationDuration);

  }

}
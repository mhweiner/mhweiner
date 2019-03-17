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
  contentRef = React.createRef();
  closeAnimationDuration = 300; //in ms
  scrollListenerId = 0;
  titleRef = React.createRef();
  state = {
    isLoading: true
  };
  ticking = false;
  lastKnownScrollY = 0;

  componentDidMount() {

    setTimeout(() => {

      let loader =  this.ref.current.querySelector(`.${loaderStyles.default}`);

      if (loader) {

        loader.style.display = 'block';

      }

    }, 50);

    imagesLoaded(this.contentRef.current).then(() => {

      this.setState({
        isLoading: false
      });

    });

    if (window.innerWidth > 600) {

      this.scrollListenerId = DOMEvent.addListener(this.ref.current, 'scroll', this.onScroll);

    } else {

      this.titleRef.current.style.position = 'absolute';

    }

  }

  onScroll = () => {

    this.requestTick();

  };

  requestTick = () => {

    if (!this.ticking) {

      this.lastKnownScrollY = this.ref.current.scrollTop;
      requestAnimationFrame(this.update);

    }

    this.ticking = true;

  };

  update = () => {

    // reset the tick so we can
    // capture the next onScroll
    this.ticking = false;

    let y = this.lastKnownScrollY;

    this.titleRef.current.style.transform = `translate3d(-50%, -${y * 0.2}px, 0)`;
    this.titleRef.current.style.webkitTransform = `translate3d(-50%, -${y * 0.2}px, 0)`;

  };

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (!this.state.isLoading) {

      this.showContent();

    }

  }

  componentWillUnmount() {

    if (this.scrollListenerId) {

      DOMEvent.removeListener(this.scrollListenerId);

    }

  }

  render() {

    const proj = projectData[this.props.project];

    return (
      <div className={styles.default} ref={this.ref}>
        <h1 className={styles.title} ref={this.titleRef}>{proj.title}</h1>
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
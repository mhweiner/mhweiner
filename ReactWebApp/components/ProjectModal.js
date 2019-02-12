import React from 'react';
import {addClass, removeClass} from "../utils/DOM";
import projectData from '../projectData';
import imagesLoaded from 'images-loaded';
import throttle from "../utils/throttle";
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
  state = {
    isLoading: true
  };

  componentDidMount() {

    setTimeout(() => {

      this.ref.current.querySelector(`.${loaderStyles.default}`).style.display = 'block';

    }, 50);

    imagesLoaded(this.contentRef.current).then(() => {

      return;
      this.setState({
        isLoading: false
      });

    });

    this.scrollListenerId = DOMEvent.addListener(this.ref.current, 'scroll', throttle(() => {

      if (this.ref.current.scrollTop > 20) {

        addClass(this.headerRef.current, styles.shadowed);

      } else {

        removeClass(this.headerRef.current, styles.shadowed);

      }

    }, 100, {leading: true}));

  }

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
        <h1 className={styles.title}>{proj.title}</h1>
        <div className={styles.header} ref={this.headerRef}>
          <button className={styles.backButton} onClick={this.props.close}><i className='fa fa-arrow-left'/>Back<span> to Work</span></button>
          <a className={styles.extLink} href={proj.website} target='_blank'><span>Visit </span>Website<i className='fa fa-external-link-alt'/></a>
        </div>
        <div className={styles.content} ref={this.contentRef}>
          {proj.content}
        </div>
        <LoaderAnimation/>
      </div>
    );

  }

  showContent = () => {

    setTimeout(() => {

      let header = this.ref.current.querySelector(`.${styles.title}`);

      header.style.display = 'block';

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
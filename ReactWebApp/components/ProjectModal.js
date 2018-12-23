import React from 'react';
import {addClass} from "../utils/DOM";

import imagesLoaded from 'images-loaded';

//projects
import Advizr from "./Projects/Advizr";
import Marvel from "./Projects/Marvel";
import Ciro from "./Projects/Ciro";

import styles from './ProjectModal.scss';

export default class ProjectModal extends React.Component {

  ref = React.createRef();
  contentRef = React.createRef();
  closeAnimationDuration = 350; //in ms

  componentDidMount() {

    this.animateOpen();

    setTimeout(() => {

      imagesLoaded(this.contentRef.current).then(() => {

        console.log('images loaded')

      });

    }, this.closeAnimationDuration);

  }

  getContent = () => {

    switch (this.props.project) {
      case 'Advizr':
        return <Advizr/>;
      case 'Marvel.com':
        return <Marvel/>;
      case 'Ciro':
        return <Ciro/>;
      default:
        return <Advizr/>;
    }

  };

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <div className={styles.header}>
          <button onClick={this.props.close}><i className='fa fa-arrow-left'/>Back<span> to Projects</span></button>
          <h1>{this.props.project}</h1>
        </div>
        <div className={styles.content} ref={this.contentRef}>
          {this.getContent()}
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
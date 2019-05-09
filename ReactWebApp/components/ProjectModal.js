import React from 'react';
import {addClass} from "../utils/DOM";
import {projects} from '../projectData';
import imagesLoaded from 'images-loaded';

import LoaderAnimation from "./LoaderAnimation";

import styles from './ProjectModal.scss';
import loaderStyles from './LoaderAnimation.scss';

export default class ProjectModal extends React.PureComponent {

  ref = React.createRef();
  contentRef = React.createRef();
  closeAnimationDuration = 300; //in ms
  state = {
    isLoading: true
  };

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

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (!this.state.isLoading) {

      this.showContent();

    }

  }

  render() {

    const proj = projects[this.props.project];

    return (
      <div className={styles.default} ref={this.ref}>
        <h1>{proj.title}</h1>
        {proj.website && <a className={styles.extLink} target='_blank' href={proj.website}>Visit<i className='fa fa-external-link-alt'/></a>}
        <div className={styles.content} ref={this.contentRef}>
          {proj.content}
        </div>
        {!!this.state.isLoading && <LoaderAnimation/>}
      </div>
    );

  }

  showContent = () => {

    setTimeout(() => {

      this.contentRef.current.style.display = 'block';

    }, 500);

  };

  animateClose(callback) {

    addClass(this.ref.current, styles.animateClose);
    setTimeout(callback, this.closeAnimationDuration);

  }

}
import React from 'react';
import {addClass, removeClass} from "../utils/DOM";
import mr from "mr-router";
import imagesLoaded from "images-loaded";

import {projects, getProjectIndexById} from '../projectData';

import BackButton from "./BackButton";
import LoaderAnimation from "./LoaderAnimation";

import styles from './ProjectDetails.scss';
import animations from '../styles/animations.scss';

export default class ProjectDetails extends React.PureComponent {

  constructor(props) {

    super(props);

    this.ref = React.createRef();
    this.contentRef = React.createRef();
    this.abort = false;
    this.state = {
      isLoading: true
    };

    this.project = projects[getProjectIndexById(props.params.id)];

    if (!this.project) {

      mr.go('home');
      this.abort = true;

    }

  }

  animateIn = () => {

    window.scrollTo(0,0);
    addClass(this.ref.current, animations.animateInFromBottom);
    this.ref.current.style.display = 'block';

    setTimeout(() => {

      removeClass(this.ref.current, animations.animateInFromBottom);

    }, 805);

  };

  animateOut = callback => {

    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 300);

  };

  componentDidMount() {

    if (this.abort) {

      return null;

    }

    imagesLoaded(this.contentRef.current).then(() => {

      setTimeout(() => {

        this.setState({
          isLoading: false
        });

        addClass(this.contentRef.current, animations.animateInFromBottom);

      }, 200);

    });

    this.animateIn();

  }

  render() {

    if (this.abort) {

      console.log('Project not found.');
      return null;

    }

    return (
      <div className={styles.default} ref={this.ref}>
        <BackButton onClick={() => mr.go('projects')}/>
        <h1 className={styles.title}>{this.project.title}</h1>
        <div className={styles.content} ref={this.contentRef}>
          {this.project.content}
        </div>
        {!!this.state.isLoading && <LoaderAnimation/>}
      </div>
    );

  }

}

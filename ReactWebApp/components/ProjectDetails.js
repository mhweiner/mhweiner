import React from 'react';
import {addClass} from "../utils/DOM";
import mr from "mr-router";
import {projects} from '../projectData';

import BackButton from "./BackButton";

import styles from './ProjectDetails.scss';
import animations from '../styles/animations.scss';

export default class ProjectDetails extends React.PureComponent {

  constructor(props) {

    super(props);

    this.contentRef = React.createRef();
    this.abort = false;

    function getProjectIndexById(id) {

      for (let i = 0; i < projects.length; i++) {

        if (projects[i].id === id) {

          return i;

        }

      }

    }

    this.project = projects[getProjectIndexById(props.params.id)];

    if (!this.project) {

      mr.go('home');
      this.abort = true;

    }

  }

  componentDidMount() {

    window.scrollTo(0,0);

    if (this.abort) {

      return null;

    }

    setTimeout(() => {

      addClass(this.contentRef.current, animations.animateInFromBottom);

    }, 300);

  }

  close = () => {

    mr.go('home');

  };

  render() {

    if (this.abort) {

      console.log('Project not found.');
      return null;

    }

    let tags = this.project.tags.join(', ');

    return (
      <div className={styles.default}>
        <BackButton onClick={this.close}/>
        <h1 className={styles.title}>{this.project.title}<p className={styles.tags}>{tags}</p></h1>
        <div className={styles.content} ref={this.contentRef}>
          {this.project.content}
        </div>
      </div>
    );

  }

}
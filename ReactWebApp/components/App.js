import React, {Component} from 'react';
import {projects, tags} from '../projectData';
import mr from 'mr-router';
import clone from "../utils/clone";

/* Styles */

import styles from './App.scss';

/* Components */

import Intro from "./Home/Intro";
import Projects from "./Home/Projects";
import Skills from "./Home/Skills";
import About from "./Home/About";
import ProjectModal from "./ProjectModal";
import ProjectModalHeader from "./ProjectModalHeader";

export default class App extends Component {

  projectModal = React.createRef();
  state = {
    project: null,
    filter: []
  };
  projectModalHeaderRef = React.createRef();

  componentDidMount() {

    // Set routes
    mr.setRoutes({
      home: '!',
      project: 'project/:project'
    });

    // Set controllers
    mr.setControllers({
      home: () => this.openProject(null),
      project: (opts) => {

        this.openProject(this.getProjectIndexById(opts.project));

      }
    });

    // Route according to current hash or set to home
    if(!mr.route()) {

      mr.go('home');

    }

  }

  getProjectIndexById = (id) => {

    for (let i = 0; i < projects.length; i++) {

      if (projects[i].id === id) {

        return i;

      }

    }

  };

  allowBodyScroll = (allowScroll) => {

    let s = document.body.style;

    if (allowScroll) {

      s.position = null;
      s.overflow = null;
      s.overflowX = null;
      s.overflowY = null;
      s.left = null;
      s.right = null;

      document.documentElement.style.height = '';
      document.body.style.height = '';

    } else {

      let vpH = window.innerHeight;

      document.documentElement.style.height = vpH.toString() + "px";
      document.body.style.height = vpH.toString() + "px";

      s.position = 'absolute';
      s.overflow = 'hidden';
      s.left = '0';
      s.right = '0';

    }

  };

  openProject = (projectIndex) => {

    if (projectIndex !== null) {

      this.allowBodyScroll(false);

      this.setState({
        project: projectIndex
      });

      //show header
      this.projectModalHeaderRef.current.setProject(projectIndex);

    } else if (this.projectModal.current) {

      //hide header
      this.projectModalHeaderRef.current.animateClose();

      this.projectModal.current.animateClose(() => {

        this.allowBodyScroll(true);

        this.setState({
          project: null
        });

      });

    } else {

      this.allowBodyScroll(true);

      this.setState({
        project: null
      });

      //hide header
      this.projectModalHeaderRef.current.animateClose();

    }

  };

  addTagToFilter = (tag) => {

    let i = this.props.filter.indexOf(tag);

    if (i !== -1) {

      return;

    }

    this.setState({
      filter: this.state.filter.push(tag)
    })

  };

  removeTagFromFilter = (tag) => {

    let i = this.props.filter.indexOf(tag);

    if (i !== -1) {

      let filter = clone(this.props.filter);

      filter.splice(i, 1);

      this.setState({
        filter: filter
      });

    }

  };

  render() {

    return <div className={styles.default}>
      <ProjectModalHeader ref={this.projectModalHeaderRef} close={() => mr.go('home')}/>
      {this.state.project !== null && <ProjectModal
        project={this.state.project}
        ref={this.projectModal}
      />}
      <Intro scrollTo={this.scrollTo}/>
      <Projects
        projects={projects}
        tags={tags}
        filter={this.state.filter}
        addTagToFilter={this.addTagToFilter}
        removeTagFromFilter={this.removeTagFromFilter}
        open={(id) => mr.go('project', {project: id})}
      />
      <Skills/>
      <About/>
    </div>;

  }

}
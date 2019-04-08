import React, {Component} from 'react';
import projectData from '../projectData';
import mr from 'mr-router';
import sso from 'smooth-scroll-operator';

/* Styles */

import styles from './App.scss';

/* Components */

import NavToggle from "./NavToggle";
import Nav from "./Nav";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import ProjectModal from "./ProjectModal";
import ProjectModalHeader from "./ProjectModalHeader";

export default class App extends Component {

  nav = React.createRef();
  projectModal = React.createRef();
  state = {
    project: null
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

  scrollTo = (section) => {

    this.toggleNav(false);

    let pos = 0;

    switch (section){
      case 'work':
        pos = document.querySelector('.section-work').offsetTop;
        break;
      case 'skills':
        pos = document.querySelector('.section-skills').offsetTop;
         break;
      case 'about':
        pos = document.querySelector('.section-about').offsetTop;
        break;
    }

    sso.scrollY(window, pos);

  };

  getProjectIndexById = (id) => {

    for (let i = 0; i < projectData.length; i++) {

      if (projectData[i].id === id) {

        return i;

      }

    }

  };

  toggleNav = (open) => {

    if (open) {

      this.setState({
        navIsOpen: true,
        navToggleIsOpen: true
      });

    } else if (this.nav.current) {

      this.setState({
        navToggleIsOpen: false
      });

      this.nav.current.animateClose(() => {

        this.setState({
          navIsOpen: false
        });

      });

    } else {

      this.setState({
        navIsOpen: false,
        navToggleIsOpen: false
      });

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

  render() {

    return <div className={styles.default}>
      <ProjectModalHeader ref={this.projectModalHeaderRef} close={() => mr.go('home')}/>
      <NavToggle toggleNav={this.toggleNav} isOpenToggle={this.state.navToggleIsOpen} isOpen={this.state.navIsOpen}/>
      {this.state.navIsOpen && <Nav ref={this.nav} scrollTo={this.scrollTo} close={() => this.toggleNav(false)}/>}
      {this.state.project !== null && <ProjectModal
        project={this.state.project}
        ref={this.projectModal}
      />}
      <Intro scrollTo={this.scrollTo}/>
      <Projects
          projects={projectData}
          open={(id) => mr.go('project', {project: id})}
          project={this.state.project}
      />
      <Skills/>
      <About/>
    </div>;

  }

}
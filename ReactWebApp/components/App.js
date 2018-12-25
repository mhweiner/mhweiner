import React, {Component} from 'react';
import projectData from '../projectData';
import mr from 'mr-router';

/* Components */

import NavToggle from "./NavToggle";
import Nav from "./Nav";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import ProjectModal from "./ProjectModal";


export default class App extends Component {

  nav = React.createRef();
  projectModal = React.createRef();
  state = {
    project: null
  };

  componentDidMount() {

    // Set routes
    mr.setRoutes({
      home: '!',
      project: 'project/:project'
    });

    // Set controllers
    mr.setControllers({
      home: () => this.setState({
        project: null
      }),
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

  openProject = (projectIndex) => {

    if (projectIndex !== null) {

      this.setState({
        project: projectIndex,
        isLoading: true
      });

    } else if (this.projectModal.current) {

      this.projectModal.current.animateClose(() => {

        this.setState({
          project: null
        });

      });

    } else {

      this.setState({
        project: null
      });

    }

  };

  render() {

    return (<div>
      <NavToggle toggleNav={this.toggleNav} isOpenToggle={this.state.navToggleIsOpen} isOpen={this.state.navIsOpen}/>
      {this.state.navIsOpen && <Nav ref={this.nav}/>}
      {this.state.project !== null && <ProjectModal
        project={this.state.project}
        ref={this.projectModal}
        close={() => mr.go('home')}
        onLoad={() => this.setState({isLoading: false})}
      />}
      <Intro/>
      <Projects
        projects={projectData}
        open={(id) => mr.go('project', {project: id})}
        isLoading={this.state.isLoading}
        project={this.state.project}
      />
      <Skills/>
      <About/>
    </div>);

  }

}
import React, {Component} from 'react';
import projectData from '../projectData';

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

  openProject = (project) => {

    if (project !== null) {

      this.setState({
        project: project,
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
        close={() => this.openProject(null)}
        onLoad={() => this.setState({isLoading: false})}
      />}
      <Intro/>
      <Projects
        projects={projectData}
        open={this.openProject}
        isLoading={this.state.isLoading}
        project={this.state.project}
      />
      <Skills/>
      <About/>
    </div>);

  }

}
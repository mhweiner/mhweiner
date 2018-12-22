import React, {Component} from 'react';

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
  state = {};

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

    if (project) {

      this.setState({
        project: project
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
      {this.state.project && <ProjectModal project={this.state.project} ref={this.projectModal} close={() => this.openProject()}/>}
      <Intro/>
      <Projects openProject={this.openProject}/>
      <Skills/>
      <About/>
    </div>);

  }

}
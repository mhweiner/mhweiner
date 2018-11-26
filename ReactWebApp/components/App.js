import React, {Component} from 'react';

/* Components */

import NavToggle from "./NavToggle";
import Nav from "./Nav";
import Intro from "./Intro";

export default class App extends Component {

  state = {
    navIsOpen: false,
    navToggleIsOpen: false
  };

  navRef = React.createRef();

  toggleNav = (open) => {

    if (open) {

      this.setState({
        navIsOpen: true,
        navToggleIsOpen: true
      });

    } else if (this.navRef.current) {

      this.setState({
        navToggleIsOpen: false
      });

      this.navRef.current.animateClose(() => {

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

  render() {

    return (<div>
      <NavToggle toggleNav={this.toggleNav} isOpen={this.state.navToggleIsOpen}/>
      {this.state.navIsOpen && <Nav ref={this.navRef}/>}
      <Intro/>
    </div>);

  }

}
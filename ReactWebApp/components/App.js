import React from 'react';
import mr from 'mr-router';

/* Styles */

import styles from './App.scss';

/* Components */

import Transition from "./Transition";
import ProjectDetails from "./ProjectDetails";
import About from "./About";
import Home from "./Home";
import Projects from './Projects';
import Nav from "./Nav";

export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      filter: []
    };

    // Set routes
    mr.setRoutes({
      home: 'home',
      project: 'project/:id',
      projects: 'projects',
      about: 'about'
    });

    // Set controller
    mr.setController((page, params) => {

      this.setState({
        page: page,
        params: params
      });

    });

    //Route
    let obj = mr.status();

    if (obj.id) {

      this.state.page = obj.id;
      this.state.params = obj.params;

    } else {

      this.state.page = 'home';
      window.history.replaceState(null, null, '#home');

    }

  }

  render() {

    if (!this.state.page) return null;

    let routes = {
      home: Home,
      about: About,
      project: ProjectDetails,
      projects: Projects

    };

    return <div className={styles.default}>
      <Nav page={this.state.page}/>
      <Transition
        routes={routes}
        page={this.state.page}
        params={this.state.params}
      />
    </div>;

  }

}
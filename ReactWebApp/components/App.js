import React from 'react';
import mr from 'mr-router';
import {Preloader} from '../utils/Preloader';

/* Styles */

import styles from './App.scss';

/* Components */

import Transition from "./Transition";
import ProjectDetails from "./ProjectDetails";
import About from "./About";
import Home from "./Home";
import Projects from './Projects';
import Nav from "./Nav";
import LoaderAnimation from "./LoaderAnimation";

export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      filter: [],
      isLoading: true
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

  componentDidMount() {

    new Preloader({
      onDone: () => {

        this.setState({
          isLoading: false,
          numLoaded: 0,
          numObjects: 0
        });

      },
      onProgress: (numLoaded, numObjects) => {

        this.setState({
          numLoaded: numLoaded,
          numObjects: numObjects
        });

      }
    });

  }

  render() {

    if (!this.state.page) return null;

    let routes = {
      home: Home,
      about: About,
      project: ProjectDetails,
      projects: Projects

    };

    let navProps = {
      hidden: this.state.page === 'project',
      opaque: this.state.page !== 'home',
      page: this.state.page
    };

    switch(this.state.page) {
      case "project":
        navProps.title = this.state.project;
        break;
      case "projects":
        navProps.title = 'My Work';
        break;
      case "about":
        navProps.title = 'My Story';
        break;
    }

    if (this.state.isLoading) {

      return <LoaderAnimation text={`Loading... ${Math.floor((this.state.numLoaded / this.state.numObjects) * 100)}%`}/>

    } else {

      return <div className={styles.default}>
        {this.state.page !== 'home' && <Nav {...navProps}/>}
        <Transition
          routes={routes}
          page={this.state.page}
          params={this.state.params}
        />
      </div>;

    }

  }

}
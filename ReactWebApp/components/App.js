import React, {Component} from 'react';
import mr from 'mr-router'
import { CSSTransition } from 'react-transition-group';

/* Components */

import Intro from "./Intro";

/* styles */

import styles from './App.scss';


export default class App extends Component {

  render() {

    return <Intro/>;

  }

}

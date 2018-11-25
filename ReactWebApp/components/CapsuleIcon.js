import React from 'react';

import Starfield from "./Starfield";

import styles from './CapsuleIcon.scss';

export default class CapsuleIcon extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <Starfield/>
        <object type="image/svg+xml" data="static/images/capsule.svg"/>
      </div>
    );

  }

}
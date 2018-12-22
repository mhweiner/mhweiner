import React from 'react';

import StarField from "./StarField";

import styles from './CapsuleIcon.scss';

export default class CapsuleIcon extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <StarField/>
        <object type="image/svg+xml" data="static/images/capsule.svg"/>
      </div>
    );

  }

}
import React from 'react';

import styles from "./StarryBackground.scss";

export default class StarryBackground extends React.PureComponent{

  ref = React.createRef();

  fadeIn = () => {

    this.ref.current.style.opacity = .7;

  };

  fadeOut = () => {

    this.ref.current.style.opacity = 0;

  };

  render() {
      return (
          <div className={styles.default} ref={this.ref}>
              <div className={styles.stars}/>
              <div className={styles.stars2}/>
              <div className={styles.stars3}/>
          </div>
      );
  }

}